var express = require('express');
var router = express.Router();
// const auth = require('../middleware/auth.middleware')

const { signup } = require('./signup')


router.post('/register', signup)



module.exports = router;