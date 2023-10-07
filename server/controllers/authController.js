const { verifyToken } = require("../utils/jwtUtils");

module.exports = async(req, res, next)=>{
    try {
        const { token = null } = req.cookies;
        const data = verifyToken(token);
        
        // res.locals object is a placeholder, to pass data between middlewares.
        res.locals.user = data;
        next();
    } catch (error) {
        next(error)
    }
}