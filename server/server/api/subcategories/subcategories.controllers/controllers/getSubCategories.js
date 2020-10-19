const asyncHandler = require('express-async-handler')
const SubCategories = require('./../../subcategories.model')
const Services = require("../../../../service");
const _ = require("lodash");

const getSubCategories = asyncHandler(async (req, res) => {
    try {
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