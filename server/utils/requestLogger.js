const requestLogger = (req,res,next)=>{
    const data = `${req.method}:${req.path}`
    console.log(data);
    next();
}

module.exports = requestLogger;