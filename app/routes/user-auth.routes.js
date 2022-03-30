const userControllers = require('../controllers/index.controllers').users;

function userRoutes(fastify, options, done) {

    //login
    fastify.post('/login', userControllers.login)

    done();
}

module.exports = userRoutes;