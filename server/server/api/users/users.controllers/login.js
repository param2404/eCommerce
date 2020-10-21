const asyncHandler = require('express-async-handler')
const Users = require('./../user.model')
const Services = require("../../../service");
const _ = require("lodash");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//////////////////////VALIDATIONS////////////////////////////////
const loginSchema = Joi.object().keys({
    email: Joi.string()
        .trim()
        .required()
        .lowercase()
        .max(50)
        .email({
            minDomainSegments: 2,
            tlds: {
                allow: ["com", "net", "in"],
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
    })
})
///////////////////////////////////////////////////////////


const login = asyncHandler(async (req, res) => {
    try {
        let result = await loginSchema.validate(req.body)
        if (result.error) {
            return Services._validationError(
                res,
                result.error.details[0].message,
                "Validation Error"
            );
        }
        const user = await Users
            .findOne({ email: req.body.email }, { __v: 0, createdAt: 0, updatedAt: 0 })
        if (!user) {
            return Services._validationError(
                res,
                "Unable to login",
                "Validation Error"
            );
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if (!isMatch) {
            return Services._validationError(
                res,
                "Unable to login",
                "Validation Error"
            );
        }
        const token = await jwt.sign({ user: user.email, userType: user.userType }, process.env.JWT_SECRET_KEY, { expiresIn: '30d' })
        user.token = token
        await user.save()
        return Services._response(res, user)

    } catch (e) {
        return Services._handleError(res, e)
    }
})


module.exports = { login }