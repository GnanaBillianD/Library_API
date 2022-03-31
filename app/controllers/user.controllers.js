"use strict";
const service = require("../services/users.services")

function list(req, reply) {
  return service
    .list()
    .then((users) => reply.status(201).send(users))
    .catch((error) => reply.status(400).send(error));
}


function login(req, reply) {
  const attibutes = {
    email: req.body.email,
    password: req.body.password
  }
  return service.login(attibutes)
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