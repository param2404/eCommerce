var express = require('express');
var router = express.Router();
// const auth = require('../middleware/auth.middleware')

const { getAllProducts } = require('./controllers/getAllProducts')




router.get('/allproducts', getAllProducts)



module.exports = router;