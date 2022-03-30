# library API

#### Description
- Develop a CRUD for Books 
- Authenticate user and only the authenticated user should perform the CRUD
- Authorise user login using JWT Token

## Pre-requisities

- Create a New Directory for the Project
- Make sure Node.JS and NPM is installed in your system
- Run the following command to initialise the project
```
npm init -y
```
The above command will generate a "package.json" file

##### Install nodemon
```
npm i -D nodemon
```
- Install Nodemon to auto restart the server when the code is changed.

- Add the following lines in the "package.json" file
```
"scripts": {
"start": "node server",
"dev": "nodemon server"
},
```

##### Install fastify
```
npm i fastify --save
```

##### Install postgresql hstore globally
```
npm i sequelize pg pg-hstore
```

##### Install sequelize
- Sequelize is an ORM.
```
npm i sequelize-cli
npm i sequelize-fastify
```

##### Create .sequelizerc file

- It is used for assigning the directory path for sequelize files in our application.
```
const path = require("path");

module.exports = {
  config: path.resolve("./db", "config.json"),
  "models-path": path.resolve("./app/models"),
  "seeders-path": path.resolve("./db/seeders"),
  "migrations-path": path.resolve("./db/migrations"),
};
```

##### Initialise Sequelize
```
npx sequelize init
```

### Work Flow
- Install Postgresql
- Create a DB
- Generate Models & Migrations
- Generate Seeders
- Migrate the DB
- Seed the DB
- CRUD for Books
- Authenticate User using Login
- Authorise User using JWT
- Run the Server