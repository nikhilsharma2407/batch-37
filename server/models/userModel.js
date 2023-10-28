const { Schema, model } = require('mongoose');
const { nanoid } = require("nanoid");
const { errorCreator } = require('../utils/responseCreator');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'username is mandatory!!!']
    },
    name: {
        type: String,
        required: [true, 'name is mandatory!!!']
    },
    password: {
        type: String,
        required: [true, 'password is mandatory!!!']
    },
    secret: {
        type: String,
    },
    cart: {
        type: [Object],
    },
    totalValue: {
        type: Number,
        default: 0
    },
    totalCount: {
        type: Number,
        default: 0
    },
    orders: {
        type: [Object],
    },
});

userSchema.statics.createUser = async (userData) => {
    const data = await UserModel.create(userData);
    console.log(data);
    return data
};

userSchema.statics.findUser = async (username) => {
    const user = (await UserModel.findOne({ username }, { _id: 0, __v: 0 }))?.toObject();
    if (!user) {
        const err = new Error("username doesn't exist");
        err.status = 404;
        throw err;
    }
    return user;
}

userSchema.statics.findUser = async (username) => {
    const user = (await UserModel.findOne({ username }, { _id: 0, __v: 0 }))?.toObject();
    if (!user) {
        const err = new Error("username doesn't exist");
        err.status = 404;
        throw err;
    }
    return user;
}

userSchema.statics.getCartItems = async (username) => {
    const { cart, totalValue, totalCount } = (await UserModel.findOne({ username }, { _id: 0, __v: 0 }))?.toObject();
    if (!cart) {
        const err = new Error("username doesn't exist");
        err.status = 404;
        throw err;
    }
    return { cart, totalValue, totalCount };
}

userSchema.statics.addToCart = async (username, product) => {
    await UserModel.findOneAndUpdate({ username }, {
        $push: { cart: { ...product, quantity: 1 } }
    });
    const { cart, totalValue, totalCount } = (await UserModel.findOneAndUpdate({ username }, {
        $inc: { totalValue: product.price, totalCount: 1 }
    }, { new: true }))?.toObject();
    return { cart, totalValue, totalCount }
}

userSchema.statics.removeFromCart = async (username, product) => {
    await UserModel.findOneAndUpdate({ username }, {
        $pull: { cart: { "id": product.id } }
    });
    const { cart, totalValue, totalCount } = (await UserModel.findOneAndUpdate({ username }, {
        $inc: { totalValue: - (product.price * product.quantity), totalCount: -product.quantity }
    }, { new: true }))?.toObject();
    return { cart, totalValue, totalCount }
}

userSchema.statics.clearCart = async (username) => {
    const { cart, totalValue, totalCount } = (await UserModel.findOneAndUpdate({ username }, {
        $set: { cart: [], totalValue: 0, totalCount:0 }
    }, { new: true }
    ))?.toObject();
    return { cart, totalValue, totalCount }
}

userSchema.statics.increment = async (username, product, increment = true) => {
    const factor = increment ? 1 : -1;
    const data = await UserModel.findOneAndUpdate({ username, "cart.id": product.id }, {
        $inc: {
            totalValue: (factor * product.price),
            "cart.$.quantity": factor,
            totalCount:factor
        }
    }, { new: true });
    console.log('post increment', data, !increment, data.quantity);
    if (!increment) {
        const removeZeroQty = await UserModel.findOneAndUpdate({ username, 'cart.quantity': 0 }, {
            $pull: { cart: { quantity: 0 } }
        }, { new: true });
        if (removeZeroQty) {
            return removeZeroQty
        }
    }
    return data
}

userSchema.statics.updatePassword = async (username, password) => {
    return UserModel.updateOne({ username }, {
        $set: { password }
    });
}

userSchema.statics.checkout = async (username) => {
    // get cart items.
    // empty the cart.
    // generate an order and add the cart items to that order.
    const { cart, totalValue, totalCount } = (await UserModel.findOne({ username }, { _id: 0, __v: 0 }))?.toObject();

    const orderId = nanoid(10);
    const order = { orderId, items: cart, totalValue };

    const data = await UserModel.updateOne({ username }, {
        $set: { cart: [], totalValue: 0, totalCount:0 },
        // update the orders object
        $push: { orders: order }
    });
    console.log(data);
    if (data.modifiedCount) {
        return { cart, totalValue, totalCount }
    }
    else {
        errorCreator('Error while placing order');
    }
}

const UserModel = model('users', userSchema);

module.exports = UserModel;
