const UserModel = require('../models/userModel');
const { generateToken, verifyToken } = require('../utils/jwtUtils');
const { generatePasswordHash, verifyPassword } = require('../utils/passwordUtils');
const { errorCreator, responseCreator } = require('../utils/responseCreator');
const { generateCode, verifyOTP } = require('../utils/totpUtil');

const signup = async (req, res, next) => {
    try {
        const { password, ...data } = req.body;

        const passwordHash = await generatePasswordHash(password);

        data.password = passwordHash;
        const { secret, qrcode } = await generateCode();
        data.secret = secret;
        const userData = await UserModel.createUser(data);
        console.log(userData);
        res.status(201);
        res.send({ success: true, message: 'Account created successfully!!!', data: qrcode });
        // res.send(
        //     `
        //         <h1>Two Factor Authentication setup</h1>
        //         <h2>Please scan the QRcode with Google Authenticator</h2>
        //         <img src=${qrcode} />
        //     `
        // )
    } catch (error) {
        next(error)
    }
};

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const { password: passwordHash, secret, ...userData } = await UserModel.findUser(username);
        console.log(password);
        console.log(userData);

        // password validation
        const isVerified = await verifyPassword(password, passwordHash);
        if (isVerified) {
            const token = generateToken(userData);
            res.status(200);
            res.cookie('token', token, { maxAge: 3600_000, httpOnly: true })
            res.send(responseCreator(`${username} logged in successfully!!!`, userData))
        } else {
            errorCreator('Invalid Password', 401);
        }

    } catch (error) {
        next(error)
    }
};

const loginWithCookie = async (req, res, next) => {
    try {
        const { password, secret, ...user } = res.locals.user
        res.send(responseCreator("Logged in with Cookie", user));
    } catch (error) {
        next(error)
    }
}

const order = async (req, res, next) => {
    const user = res.locals.user;
    res.send(responseCreator("order successful!!!", 201, user));
}

const resetPassword = async (req, res, next) => {
    try {
        const { password, username, otp } = req.body;
        const { secret } = await UserModel.findUser(username);
        console.log({ secret });
        const isOTPvalid = verifyOTP(secret, otp);
        if (isOTPvalid) {
            // upadte the new password
            const passwordHash = await generatePasswordHash(password);
            const userUpadteData = await UserModel.updatePassword(username, passwordHash);
            if (userUpadteData.modifiedCount) {
                res.status(200);
                res.send(responseCreator(`Password reset successfully!!!`))
            }
        } else {
            errorCreator('Invalid OTP', 401);
        }
    } catch (error) {
        next(error)
    }
}

const logout = (req, res, next) => {
    res.clearCookie('token');
    res.send(responseCreator("Logout successful!!!"))
}

module.exports = { signup, login, loginWithToken: loginWithCookie, order, resetPassword, logout }