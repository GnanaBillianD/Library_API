"use strict";
const users = require("../models").users;
const { verify } = require("jsonwebtoken");


const JWT_SECRET_KEY = process.env.TOKEN_SECRET;
// console.log("-------SECRET_KEY------",JWT_SECRET_KEY)



const userAuthenticate = (fastify) => {
  fastify.decorateRequest("currentUser", null);
  fastify.addHook("preHandler", async (request, reply) => {
    const token = getHeaderToken(request.headers);
    if (!token) {
      const error = {
        errors: ["You need to sign-in to access this page"],
      };
      reply.code(401).send(error);
    } else {
      try {
        const userAttrs = await verifyToken(token, JWT_SECRET_KEY);
        // console.log("----------userAttrs is----------", userAttrs);
        const user = await users.findOne({
          where: { email: userAttrs.email },
        });
        if (user && user.access_token === token) {
          request.currentUser = user;
          reply.header("Authorization", `Bearer ${token}`);
        } else {
          reply.code(401).send({ errors: ["Session has expired"] });
        }
      } catch (error) {
        reply.code(401).send({ errors: ["access denied"] });
      }
    }
  });
};



function getHeaderToken(headers) {
  const bearerHeader = headers.authorization;
  const bearer = bearerHeader ? bearerHeader.split(" ") : [];
  const bearerToken = bearer[1];
  return bearerToken;
}



function verifyToken(token, JWT_SECRET_KEY) {
  return new Promise((resolve, reject) =>
    verify(token, JWT_SECRET_KEY, (err, decoded) => {
      // console.log("-----err-------", err);
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    })
  );
}


module.exports = userAuthenticate;