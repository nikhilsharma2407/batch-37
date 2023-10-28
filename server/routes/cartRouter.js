const router = require('express').Router();
const authController = require('../controllers/authController');
const { getCartItems, addToCart, clearCart, removeFromCart, incrementQty, decrementQty, checkout } = require('../controllers/cartController');


router.get('/getCart',authController, getCartItems);
router.post('/addToCart',authController, addToCart);
router.post('/removeFromCart',authController, removeFromCart);
router.patch('/increment',authController, incrementQty);
router.patch('/decrement',authController, decrementQty);
router.post('/clearCart',authController, clearCart);
router.post('/checkout',authController, checkout);
// router.post('/getOrder',authController, getOrder);

module.exports = router