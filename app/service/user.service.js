const User = require('../models').Users;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


function getById() {
    return User
        .findAll()
}


function validatePassword(user, password) {
    const valid = bcrypt.compareSync(password, user.encrypted_password);
    if (!valid) {
        throw Error("Invalid email or password")
    }
}

async function loginFunction(attibutes) {

    const user = await User.findOne({ email: attibutes.email });

    if (!user) {
        throw new Error("Invalid email or password");
    }

    validatePassword(user, attibutes.password);

    const accessToken = generateAccessToken(user.email);

    await user.update({
        access_token: accessToken,
        updatedAt: new Date(),
    })

    return accessToken;



}


function generateAccessToken(email) {
    console.log("prrr", process.env.TOKEN_SECRET)
    return jwt.sign({ email }, `${process.env.TOKEN_SECRET}`, { expiresIn: 18000, });
}


module.exports = {
    getById,
    loginFunction
}