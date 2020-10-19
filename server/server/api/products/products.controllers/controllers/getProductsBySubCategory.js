const asyncHandler = require('express-async-handler')
const Products = require('./../../products.model')
const Services = require("../../../../service");
const _ = require("lodash");

const getProductsBySubCategory = asyncHandler(async (req, res) => {
    try {
        const products = await Products.find({ subCategoryId: req.body.subCategoryId })
        if (products.length <= 0) {
            return Services._noContent(res, "No Sub Category found")
        }
        return Services._response(res, products)
    }
    catch (e) {
        return Services._handleError(res, e)
    }
})

module.exports = { getProductsBySubCategory }