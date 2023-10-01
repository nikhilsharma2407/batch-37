const errHandler = (err, req, res, next) => {
    console.log(err.message);
    res.status(err.staus || 500)
    if(err.code === 11000){
        err.message = 'username already exists!!!'
    }
    res.send({ success: false, message: err.message });
}

module.exports = errHandler;