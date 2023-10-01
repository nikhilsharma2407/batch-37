const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique:true,
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
    const user = (await UserModel.findOne({ username },{_id:0, __v:0}))?.toObject();
    if (!user) {
        const err = new Error("username doesn't exist");
        err.status = 404;
        throw err;
    }
    return user;
}

const UserModel = model('users', userSchema);

module.exports = UserModel;