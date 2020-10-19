const asyncHandler = require('express-async-handler')
const Products= require('./../../products.model')
const Services = require("../../../../service");
const _ = require("lodash");

const getAllProducts = asyncHandler(async (req, res) => {
    try {
        const products = await Products.find()
        if (!products) {
            return Services._noContent(res,"No Products found")
        }
        return Services._response(res,products)
    }
    catch (e) {
        return Services._handleError(res,e)
    }
})

module.exports={getAllProducts}