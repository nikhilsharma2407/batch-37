const errHandler = (err, req, res, next) => {
    console.log(err.message);
    res.status(err.staus || 500)
    res.send({ success: false, message: err.message });
}

module.exports = errHandler;