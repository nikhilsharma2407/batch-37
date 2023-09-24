const express = require('express');
const router = express.Router();

// http://localhost:4000/router/
router.get('/', (req, res) => {
    console.log(req.path);
    res.send({ data: req.path })
});

// http://localhost:4000/router/user/101 ->{id:101}

router.get('/user/:id', (req, res) => {
    console.log(req.params);   // {id:101}
    res.send({ data: req.params })
});

router.delete('/user/:id', (req, res) => {
    console.log(req.params);   // {id:101}
    res.send({ data: req.params })
});

router.get('/search', (req, res) => {
    console.log(req.query);
    res.send({ data: req.query })
})

// http://localhost:4000/router/search?name=abcd&city=Faridabad
router.post('/signup', (req, res) => {
    try {
        console.log(req.body);
        res.status(201)
        res.send({ success: true, message: "request completed", data: req.body });

    } catch (error) {
        next(error)
    }
});

// Wildcard route
router.all('/*', (req, res, next) => {
    try {
        console.log(req.path);
        const err = new Error("Invalid Path");
        err.status = 501;
        throw err;
        // res.status(501)
        // res.send({success:false,message:err.message});
        // errorCreator("Invalid route",501)
    } catch (error) {
        next(error)
    }
});


module.exports = router;