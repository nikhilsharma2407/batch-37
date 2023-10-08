const express = require('express');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const cookieParser = require('cookie-parser');

const dbConnection = require('./dbConnection');
const router = require('./routes/router');

const userRouter = require('./routes/userRouter');
const cartRouter = require('./routes/cartRouter');
const requestLogger = require('./utils/requestLogger');
const errHandler = require('./utils/errorHandler');
const PORT = 4000;
// http://localhost:4000/router

// used to read data passed to request body 
app.use(express.json());
app.use(cookieParser());

// custom middleware used for logging
app.use(requestLogger)

http://localhost:4000/router
app.use('/router',router);
app.use('/user',userRouter);
app.use('/cart',cartRouter);

// app.get('/users',(req,res)=>{
//     res.send('requesting users')
// })
// app.get('/products',(req,res)=>{
//     res.send([{id:1,description:'xyz'}])
// })

app.use(errHandler)

// start server at port and run the callback once started
app.listen(PORT,()=>{
    console.clear();
    console.log('server started on port 4000!!!')
})