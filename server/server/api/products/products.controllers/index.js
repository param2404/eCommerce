var express = require('express');
var router = express.Router();
// const auth = require('../middleware/auth.middleware')

const { getAllProducts } = require('./controllers/getAllProducts')
const {getProductsBySubCategory} = require('./controllers/getProductsBySubCategory')



router.get('/allproducts', getAllProducts)
router.post('/products',getProductsBySubCategory)



module.exports = router;