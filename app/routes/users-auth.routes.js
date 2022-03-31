const userControllers = require('../controllers/user.controllers');

function userRoutes(fastify, options, done) {

    //login
    fastify.post('/login', userControllers.login)

    done();
}

module.exports = userRoutes;