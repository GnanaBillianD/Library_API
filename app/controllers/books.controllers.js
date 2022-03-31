const service = require('../services/books.services')

function create(req, reply) {
  const attibutes = {
    name: req.body.name,
    category: req.body.category,
    author: req.body.author,
    price: req.body.price,
    notes: req.body.notes
  }
  return service
    .create(attibutes)
    .then(book => reply.status(201).send(book))
    .catch(error => reply.status(400).send({ errors: [error.message] }));
}


function list(req, reply) {
  return service
    .list()
    .then(books => reply.status(200).send(books))
    .catch(error => reply.status(400).send({ errors: [error.message] }));
}


function update(req, reply) {
  return service
    .update(req.params.id, req.body)
    .then((book) => { reply.send(book) })
    .catch(error => reply.status(400).send({ errors: [error.message] }));
}


function destroy(req, reply) {
  return service
    .destroy(req.params.id)
    .then(() => { reply.send({ message: "Deleted successfully" }) })
    .catch(error => reply.status(400).send({ errors: [error.message] }));
}

function getById(req, reply) {
  // console.log('req.params.id is', req.params.id);
  return service
    .getById(req.params.id)
    .then(book => { reply.send(book) })
    .catch(error => reply.status(400).send({ errors: [error.message] }))
}



module.exports = {
  create,
  list,
  update,
  destroy,
  getById
}