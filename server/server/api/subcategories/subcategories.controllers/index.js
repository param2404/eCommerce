var express = require('express');
var router = express.Router();


const { getSubCategories } = require('./controllers/getSubCategories')



router.post('/subcategories', getSubCategories)



module.exports = router;