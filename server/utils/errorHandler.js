const errHandler = (err, req, res, next) => {
    console.log(err);
    if(err.code === 11000){
        err.message = 'username already exists!!!'
        err.status = 403;
    } else if (err.name === 'TokenExpiredError'){
        err.message = 'token expired, please login to continue!!!'
        err.status = 401;
    }
    res.status(err.status || 500)
    res.send({ success: false, message: err.message });
}

module.exports = errHandler;