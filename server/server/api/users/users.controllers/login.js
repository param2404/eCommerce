const asyncHandler = require('express-async-handler')
const Users = require('./../user.model')
const Services = require("../../../service");
const _ = require("lodash");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const login = asyncHandler(async (req, res) => {
    try {
        const user = await Users
            .findOne({ email: req.body.email }, { __v: 0, createdAt: 0, updatedAt: 0 })
        if (!user) {
            return Services._validationError(
                res,
                "Unable to login",
                "Validation Error"
            );
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if (!isMatch) {
            return Services._validationError(
                res,
                "Unable to login",
                "Validation Error"
            );
        }
        const token = await jwt.sign({ user: user.email, userType: user.userType }, process.env.JWT_SECRET_KEY, { expiresIn: '30d' })
        user.token = token
        await user.save()
        return Services._response(res, user)

    } catch (e) {
        console.log(e);
        return Services._handleError(res, e)
    }
})


module.exports = { login }