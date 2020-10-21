const asyncHandler = require('express-async-handler')
const Users = require('./../user.model')
const Services = require("../../../service");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const Joi = require('@hapi/joi').extend(require("@hapi/joi-date"));
const PhoneJoi = Joi.extend(require("joi-phone-number"));


//////////////////////VALIDATIONS////////////////////////////////
const userSchema = Joi.object().keys({
    name: Joi.string().trim().required().messages({
        "string.base": "name should be string",
        "string.empty": "name required",
        "any.required": "name is required",
    }),
    dob: Joi.date().format("YYYY-MM-DD").optional().messages({
        "date.format": "date of birth must be in YYYY-MM-DD",
    }),
    age:Joi.number().positive().optional().messages({
        "number.base": "age should be a number",
    }),
    contactNumber: PhoneJoi.string()
        .trim()
        .phoneNumber()
        .min(10)
        .max(10)
        .required()
        .messages({
            "string.base":"Contact number must be a string",
            "string.empty": "Contact number is required",
            "string.min": "Incorrect Contact Number",
            "string.max": "Incorrect Contact Number",
            "any.required": "Contact number is required",
        }),
    email: Joi.string()
        .trim()
        .required()
        .lowercase()
        .max(50)
        .email({
            minDomainSegments: 2,
            tlds: {
                allow: ["com", "net","in"],
            },
        })
        .messages({
            "string.empty": "Email is required",
            "string.max": "Email should be less than 50 letter",
            "any.required": "Email is required",
        }),
    password: Joi.string().trim().max(20).min(8).required().messages({
        "string.base": "password should be string",
        "string.empty": "password required",
        "string.max": "password should be less than 20 letter",
        "string.min": "password should be minimum 8 letter",
        "any.required": "password is required",
    }),
    userType: Joi.number().positive().required().messages({
        "number.base": "usertype should be a number",
        "number.empty": "usertype is required",
        "any.required": "usertype is required",
    })
})
///////////////////////////////////////////////////////////

//////Controller////////
const signup = asyncHandler(async (req, res) => {
    try {
        let result = await userSchema.validate(req.body)
        if (result.error) {
            return Services._validationError(
                res,
                result.error.details[0].message,
                "Validation Error"
            );
        }
        const token = await jwt.sign({ user: req.body.contactNumber, userType: req.body.userType }, process.env.JWT_TOKEN)
        await Users.create({...req.body,token})
        return Services._response(res,{...req.body,token})
    }
    catch (e) {
        return Services._handleError(res, e)
    }
})

module.exports = { signup }