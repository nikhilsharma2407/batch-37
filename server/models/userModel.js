const { Schema, model } = require('mongoose');

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
    cart: {
        type: [Object],
    },
    totalValue: {
        type: Number,
        default: 0
    },
    orders: {
        type: [String],
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
    const { cart, totalValue } = (await UserModel.findOne({ username }, { _id: 0, __v: 0 }))?.toObject();
    if (!cart) {
        const err = new Error("username doesn't exist");
        err.status = 404;
        throw err;
    }
    return { cart, totalValue };
}

userSchema.statics.addToCart = async (username, product) => {
    await UserModel.findOneAndUpdate({ username }, {
        $push: { cart: { ...product, quantity: 1 } }
    });
    const { cart, totalValue } = (await UserModel.findOneAndUpdate({ username }, {
        $inc: { totalValue: product.price }
    }, { new: true }))?.toObject();
    return { cart, totalValue }
}

userSchema.statics.removeFromCart = async (username, product) => {
    await UserModel.findOneAndUpdate({ username }, {
        $pull: { cart: { "id": product.id } }
    });
    const { cart, totalValue } = (await UserModel.findOneAndUpdate({ username }, {
        $inc: { totalValue: - (product.price * product.quantity) }
    }, { new: true }))?.toObject();
    return { cart, totalValue }
}

userSchema.statics.clearCart = async (username) => {
    const data = await UserModel.updateOne({ username }, {
        $set: { cart: [], totalValue: 0 }
    })
    console.log(data);
    return data
}

userSchema.statics.increment = async (username, product, increment = true) => {
    const factor = increment ? 1 : -1;
    const data = await UserModel.findOneAndUpdate({ username, "cart.id": product.id }, {
        $inc: {
            totalValue: (factor * product.price),
            "cart.$.quantity": factor
        }
    }, { new: true });
    console.log('post increment',data, !increment, data.quantity);
    if (!increment) {
        const removeZeroQty = await UserModel.findOneAndUpdate({ username, 'cart.quantity':0}, {
            $pull: { cart: { quantity: 0 } }
        }, { new: true });
            if(removeZeroQty){
                return removeZeroQty
            }
    }
    return data
}

const UserModel = model('users', userSchema);

module.exports = UserModel;
