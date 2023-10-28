const { sign, verify } = require("jsonwebtoken");
const { errorCreator } = require("./responseCreator");

const SECRET_KEY = process.env.SECRET_KEY;

const generateToken = (data, time = '1h') => {
    const { username } = data;
    const token = sign({ username }, SECRET_KEY, { expiresIn: time });
    console.log(token);
    return token;
}


const verifyToken = (token) => {
    if (!token) {
        errorCreator('token missing, Please login to continue', 401)
    }
    const data = verify(token, SECRET_KEY);
    console.log(data);
    return data
}


module.exports = { generateToken, verifyToken }