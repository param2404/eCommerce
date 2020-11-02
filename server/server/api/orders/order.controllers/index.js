var express = require('express');
var router = express.Router();
const userauth = require('./../../../middlewares/user.auth')

const { makeOrder } = require('./makeorder')


router.post('/order',userauth, makeOrder)



module.exports = router;