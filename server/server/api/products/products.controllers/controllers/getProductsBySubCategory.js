const asyncHandler = require('express-async-handler')
const Products = require('./../../products.model')
const Services = require("../../../../service");
const _ = require("lodash");
const Joi = require('@hapi/joi')

const subCategoryIdSchema = Joi.object().keys({
    subCategoryId: Joi.number().positive().required().messages({
        "number.base": "subcategory id should be a number",
        "number.empty": "subcategory id is required",
        "any.required": "subcategory id is required",
    })
})

const getProductsBySubCategory = asyncHandler(async (req, res) => {
    try {
        let result = await subCategoryIdSchema.validate(req.body)
        if (result.error) {
            return Services._validationError(
                res,
                result.error.details[0].message,
                "Validation Error"
            );
        }
        const products = await Products
            .find({ subCategoryId: req.body.subCategoryId }, { __v: 0, createdAt: 0, updatedAt: 0 })
            .populate("subCategoryId categoryId uploadedBy", ["name"])
        if (products.length <= 0) {
            return Services._noContent(res, "No Products found")
        }
        return Services._response(res, products)
    }
    catch (e) {
        return Services._handleError(res, e)
    }
})

module.exports = { getProductsBySubCategory }