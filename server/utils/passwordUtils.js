const { hash, genSalt, compare } = require("bcrypt");

const generatePasswordHash = async (password)=>{
    const salt = await genSalt();
    const passwordHash = await hash(password,salt);
    console.log(password,passwordHash);
    return passwordHash;
};

const verifyPassword = async (password, hash)=>{
    const isVerified = await compare(password,hash);
    console.log(isVerified);
    return isVerified
}

module.exports = { generatePasswordHash, verifyPassword };
