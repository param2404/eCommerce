const jwt = require("jsonwebtoken");
const User = require("./../api/users/user.model");
const Services = require("./../service");

const userauth = async (req, res, next) => {
    try {
        const token = req.header("x-auth-token");

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findOne({ email: decoded.user, token });
        if (!user) {
    
            throw new Error();
        }
        req.token = token;
        req.user = user;
        next();
    } catch (e) {
        return Services._validationError(
            res,
            "Please authenticate",
            "Validation Error"
        );
    }
};
module.exports = userauth;
