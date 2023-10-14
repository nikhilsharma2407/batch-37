const speakeasy = require("speakeasy");
const QRcode = require("qrcode");


const generateCode = async ()=>{
    const {base32:secret,otpauth_url} = speakeasy.generateSecret({name:'GeeksForGeeks'});
    const qrcode = await QRcode.toDataURL(otpauth_url);

    return {secret, qrcode};

    // seed + time -> generate a code valid for 30s, HMAC
}


// otp from user, secret from db
const verifyOTP = (secret, otp)=>{
    return speakeasy.totp.verify({
        secret,
        token:otp,
        encoding:'base32'
    })
};

module.exports = { generateCode, verifyOTP };
