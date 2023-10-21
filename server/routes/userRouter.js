const router = require('express').Router();
const { signup, login, loginWithToken, order, resetPassword, logout } = require('../controllers/userController');
const authController = require('../controllers/authController')


router.post('/signup', signup);
router.post('/login', login);
router.get('/login', authController ,loginWithToken);
router.patch('/resetPassword', resetPassword);
router.get('/order',authController, order);
router.get('/logout', logout);

module.exports = router