var express = require('express');
var router = express.Router();

const { getAllCategories } = require('./controllers/getAllCategories')


router.get('/allcategories', getAllCategories)



module.exports = router;