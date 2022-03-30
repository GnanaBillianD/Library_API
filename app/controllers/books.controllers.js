const service = require('../service/book.service')
const Books = require('../models').Books;



function create(req, reply) {
  const attibutes = {
    name: req.body.name,
    category: req.body.category,
    author: req.body.author,
    price: req.body.price,
    notes: req.body.notes
  }
  return service
    .bookCreated(attibutes)
    .then(Books => reply.status(201).send(Books))
    .catch(error => reply.status(400).send({ errors: [error.message] }));
}


function list(req, reply) {
  return service
    .booksList()
    .then(Books => reply.status(200).send(Books))
    .catch(error => reply.status(400).send({ errors: [error.message] }));
}


function update(req, reply) {
  return service.bookUpdated(req.params.id, req.body).then((book) => {
    reply.send(book)
  })
    .catch(error => reply.status(400).send({ errors: [error.message] }));
}


function destroy(req, reply) {
  return service.bookDeleted(req.params.id)
    .then(() => {
      reply.send({ message: "Deleted successfully" })
    })
    .catch(error => reply.status(400).send({ errors: [error.message] }));
}

function getBook(req, reply) {
  console.log('req.params.id is', req.params.id);
  return service.getById(req.params.id)
    .then(book => {
      reply.send(book)
    })
    .catch(error => reply.status(400).send({ errors: [error.message] }))
}



module.exports = {
  create,
  list,
  update,
  destroy,
  getBook
}