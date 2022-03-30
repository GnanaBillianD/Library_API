"use strict";

const fastify = require("fastify");

const booksControllers = require("../controllers/index.controllers").books;
const userControllers = require("../controllers/index.controllers").users;
const userAuthenticate = require("../Auth/user.auth");

function booksRoutes(fastify, options, done) {
  userAuthenticate(fastify);

  //get all books
  fastify.get("/books", booksControllers.list);

  //get one book
  fastify.get("/books/:id", booksControllers.getBook);

  //create book
  fastify.post("/books", booksControllers.create);

  //update book
  fastify.put("/books/:id", booksControllers.update);

  //delete book
  fastify.delete("/books/:id", booksControllers.destroy);

  //list all users
  fastify.get("/user", userControllers.list);

  done();
}

module.exports = booksRoutes;