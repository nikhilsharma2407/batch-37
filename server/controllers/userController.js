const UserModel = require('../models/userModel');
const { generateToken, verifyToken } = require('../utils/jwtUtils');
const { generatePasswordHash, verifyPassword } = require('../utils/passwordUtils');
const { errorCreator, responseCreator } = require('../utils/responseCreator')

const signup = async (req, res, next) => {
    try {
        const { password, ...data } = req.body;

        const passwordHash = await generatePasswordHash(password);

        data.password = passwordHash;
        const userData = await UserModel.createUser(data);
        console.log(userData);
        res.status(201);
        res.send({ success: true, message: 'Account created successfully!!!' })
    } catch (error) {
        next(error)
    }
};

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const { password: passwordHash, ...userData } = await UserModel.findUser(username);
        console.log(password);
        console.log(userData);

        // password validation
        const isVerified = await verifyPassword(password, passwordHash);
        if (isVerified) {
            const token = generateToken(userData,'10s');
            res.status(200);
            res.cookie('token', token, { maxAge: 3600_000, httpOnly: true })
            res.send({
                message: `${username} logged in successfully!!!`,
                data: userData
            })
        } else {
            errorCreator('Invalid Password', 401);
        }

    } catch (error) {
        next(error)
    }
};

const loginWithCookie = async (req, res, next) => {
    try {
        const { token = null } = req.cookies;
        const data = verifyToken(token);
        res.send(responseCreator("Logged in with Cookie", 200, data));
    } catch (error) {
        next(error)
    }
}

const order = async (req, res, next) => {
    const user = res.locals.user;
    res.send(responseCreator("order successful!!!", 201, user));

}

module.exports = { signup, login, loginWithToken: loginWithCookie, order }