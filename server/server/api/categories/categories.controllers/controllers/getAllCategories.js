const asyncHandler = require('express-async-handler')
const Categories = require('./../../categories.model')
const Services = require("../../../../service");
const _ = require("lodash");

const getAllCategories = asyncHandler(async (req, res) => {
    try {
        const categories = await Categories.find({},{name:1})
        if (categories.length <= 0) {
            return Services._noContent(res, "No Categories found")
        }
        return Services._response(res, categories)
    }
    catch (e) {
        return Services._handleError(res, e)
    }
})

module.exports = { getAllCategories }