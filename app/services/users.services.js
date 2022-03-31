const users = require('../models').users;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


function list() {
    return users
        .findAll()
}


async function login(attibutes) {

    const user = await users.findOne({ where:{email: attibutes.email }});

    if (!user) {
        throw new Error("Invalid email or password");
    }

    validatePassword(user, attibutes.password);

    const accessToken = generateAccessToken(user.email);

    await user.update({
        access_token: accessToken
    })

    return accessToken;
}

function validatePassword(user, password) {
    const valid = bcrypt.compareSync(password, user.encrypted_password);
    if (!valid) {
        throw Error("Invalid email or password")
    }
}

function generateAccessToken(email) {
    // console.log("-----------TOKEN_SECRET-------", process.env.TOKEN_SECRET)
    return jwt.sign({ email }, `${process.env.TOKEN_SECRET}`, { expiresIn: 18000, });
}


module.exports = {
    list,
    login
}