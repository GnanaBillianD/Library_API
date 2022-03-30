"use strict";
const users = require('../models').Users;
const service = require("../service/user.service")

function list(req, reply) {
  return service
    .getById()
    .then((users) => reply.status(201).send(users))
    .catch((error) => reply.status(400).send(error));
}


function login(req, reply) {
  const attibutes = {
    email: req.body.email,
    password: req.body.password
  }
  return service.loginFunction(attibutes)
    .then((accessToken) => {
      reply.header("Authorization", `Bearer ${accessToken}`);
      reply.send({ message: "Login successfully" });
    })
    .catch((error) => reply.status(400).send(error));
}

module.exports = {
  list,
  login
}