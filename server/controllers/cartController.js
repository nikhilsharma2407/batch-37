const UserModel = require('../models/userModel');
const { responseCreator } = require('../utils/responseCreator');

const getCartItems = async (req, res, next) => {
    try {
        const { username } = res.locals.user;
        const data = await UserModel.getCartItems(username);
        res.send(responseCreator('cart items', 200, data));

    } catch (error) {
        next(error)
    }
}

const addToCart = async (req, res, next) => {
    try {
        const product = req.body
        const { username } = res.locals.user;
        const data = await UserModel.addToCart(username, product);
        res.send(responseCreator(`${product.title} addeed to cart`, 200, data));

    } catch (error) {
        next(error)
    }
};

const removeFromCart = async (req, res, next) => {
    try {
        const product = req.body
        console.log(product);
        const { username } = res.locals.user;
        const data = await UserModel.removeFromCart(username, product);
        res.send(responseCreator(`${product.title} removed from cart`, 200, data));

    } catch (error) {
        next(error)
    }
}

const incrementQty = async (req, res, next) => {
    try {
        const product = req.body
        const { username } = res.locals.user;
        const data = await UserModel.increment(username, product);
        res.send(responseCreator(`${product.title} added to cart`, 200, data));

    } catch (error) {
        next(error)
    }
}

const decrementQty = async (req, res, next) => {
    try {
        const product = req.body
        const { username } = res.locals.user;
        const data = await UserModel.increment(username, product, false);
        res.send(responseCreator(`${product.title} added to cart`, 200, data));

    } catch (error) {
        next(error)
    }
}


const checkout = async (req, res, next) => {

}

const clearCart = async (req, res, next) => {
    const {username} = res.locals.user;
    const data = await UserModel.clearCart(username);
    if (data) {
        res.send(responseCreator("cart cleared", 200, data))
    }
}


module.exports = {
    getCartItems,
    incrementQty,
    decrementQty,
    addToCart,
    removeFromCart,
    checkout,
    clearCart,
}