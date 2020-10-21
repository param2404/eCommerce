var express = require('express');
var router = express.Router();
// const auth = require('../middleware/auth.middleware')

const { signup } = require('./signup')
const { login } = require('./login')


router.post('/register', signup)
router.post('/login', login)



module.exports = router;