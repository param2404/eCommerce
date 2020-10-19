const asyncHandler = require('express-async-handler')
const SubCategories = require('./../../subcategories.model')
const Services = require("../../../../service");
const _ = require("lodash");
const Joi = require('@hapi/joi')

const categoryIdSchema = Joi.object().keys({
    categoryId: Joi.number().positive().required().messages({
        "number.base": "category id should be a number",
        "number.empty": "category id is required",
        "any.required": "category id is required",
    })
})

const getSubCategories = asyncHandler(async (req, res) => {
    try {
        let result = await categoryIdSchema.validate(req.body)
        if (result.error) {
            return Services._validationError(
                res,
                result.error.details[0].message,
                "Validation Error"
            );
        }
        const subcategories = await SubCategories.find({ categoryId: req.body.categoryId})
        if (subcategories.length <= 0) {
            return Services._noContent(res, "No Sub Category found")
        }
        return Services._response(res, subcategories)
    }
    catch (e) {
        return Services._handleError(res, e)
    }
})

module.exports = { getSubCategories }