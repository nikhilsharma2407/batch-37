const UserModel = require("../models/userModel");
const { verifyToken } = require("../utils/jwtUtils");

module.exports = async(req, res, next)=>{
    try {
        const { token = null } = req.cookies;
        const { username } = verifyToken(token);
        const user = await UserModel.findUser(username);
        
        // res.locals object is a placeholder, to pass data between middlewares.
        res.locals.user = user;
        next();
    } catch (error) {
        next(error)
    }
}