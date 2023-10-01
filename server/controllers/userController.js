const UserModel = require('../models/userModel');
const {errorCreator, responseCreator} = require('../utils/responseCreator')

const signup = async (req, res, next) => {
    try {
        const data = req.body;
        const userData = await UserModel.createUser(data)
        res.status(201);
        res.send({ success: true, message: 'Account created successfully!!!' })
    } catch (error) {
        next(error)
    }
};

const login = async (req, res, next) => {
    try {
        const {username, password:userPassword} = req.body;
        const {password,...userData} = await UserModel.findUser(username);
        console.log(password);
        console.log(userData);

        // password validation
        if (password === userPassword){
            res.status(200);
            res.send({message:`${username} logged in successfully!!!`, data:userData})
        }else{
            errorCreator('Invalid Password', 401);
        }

    } catch (error) {
        next(error)
    }
};

module.exports = { signup, login }