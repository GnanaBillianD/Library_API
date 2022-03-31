"use strict";

const fastify = require("fastify");

const booksControllers = require("../controllers/books.controllers");
const userControllers = require("../controllers/user.controllers");
const userAuthenticate = require("../auth/users.auth");
const { listOpts, getByIdOpts, createOpts, updateOpts, deleteOpts } = require("./books.schema.routes");
const { listOpt } = require("./users.schema.routes")


function booksRoutes(fastify, options, done) {
  userAuthenticate(fastify);

  //list all books
  fastify.get("/books", listOpts, booksControllers.list);

  //getById
  fastify.get("/books/:id", getByIdOpts, booksControllers.getById);

  //create book
  fastify.post("/books", createOpts, booksControllers.create);

  //update book
  fastify.put("/books/:id",updateOpts, booksControllers.update);

  //delete book
  fastify.delete("/books/:id", deleteOpts,booksControllers.destroy);

  //list all users
  fastify.get("/users", listOpt, userControllers.list);

  done(); 
}

module.exports = booksRoutes;