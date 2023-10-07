const router = require('express').Router();
const { signup, login, loginWithToken, order } = require('../controllers/userController');
const authController = require('../controllers/authController')


router.post('/signup', signup);
router.post('/login', login);
router.get('/login', loginWithToken);
router.get('/order',authController, order);

module.exports = router