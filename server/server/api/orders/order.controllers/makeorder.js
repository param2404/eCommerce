const asyncHandler = require('express-async-handler')
const Orders = require('./../order.model')
const Services = require("./../../../service");
const _ = require("lodash");
const Joi = require('@hapi/joi')
const PhoneJoi = Joi.extend(require("joi-phone-number"));


const orderSchema = Joi.object().keys({
    orderedBy: Joi.string().trim().required().messages({
        "string.base": "Ordered by should be string",
        "string.empty": "Ordered by required",
        "any.required": "Ordered by is required",
    }),
    orderedProducts: Joi.array().items(
        Joi.object().keys({
            "productId": Joi.number().required().messages({
                "number.base": "product id should be number",
                "number.empty": "product id required",
                "any.required": "product id is required",
            }),
            "productQuantity": Joi.number().required().messages({
                "number.base": "product quantity should be number",
                "number.empty": "product quantity required",
                "any.required": "product quantity is required",
            }),
            "amount": Joi.number().required().messages({
                "number.base": "product amount should be number",
                "number.empty": "product amount required",
                "any.required": "product amount is required",
            }),
        })),
    "totalAmount": Joi.number().required().messages({
        "number.base": "total amount should be number",
        "number.empty": "total amount required",
        "any.required": "total amount is required",
    }),
    billingAddress: Joi.string().trim().required().messages({
        "string.base": "name should be string",
        "string.empty": "name required",
        "any.required": "name is required",
    }),
    shippingAddress: Joi.string().trim().required().messages({
        "string.base": "name should be string",
        "string.empty": "name required",
        "any.required": "name is required",
    }),
    contactNumber: PhoneJoi.string()
        .trim()
        .phoneNumber()
        .min(10)
        .max(10)
        .required()
        .messages({
            "string.base": "Contact number must be a string",
            "string.empty": "Contact number is required",
            "string.min": "Incorrect Contact Number",
            "string.max": "Incorrect Contact Number",
            "any.required": "Contact number is required",
        }),
    "paymentCardId": Joi.string().trim().required().messages({
        "string.base": "name should be string",
        "string.empty": "name required",
        "any.required": "name is required",
    }),
})

const makeOrder = asyncHandler(async (req, res) => {
    try {
        let result = await orderSchema.validate(req.body)
        if (result.error) {
            return Services._validationError(
                res,
                result.error.details[0].message,
                "Validation Error"
            );
        }
        await Orders.create(req.body)
        return Services._response(res, 'Ordered Successfully')
    }
    catch (e) {
        return Services._handleError(res, e)
    }
})

module.exports = { makeOrder }