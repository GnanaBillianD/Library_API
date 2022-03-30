### library project using fastify with sequelize

#### install fastify
```
npm i fastify --save
```

#### install nodemon
- this package used for we shouldn't restart the server when we change the code. it will be automatically restart the server 
```
npm i -d nodemon
```

#### install sequelize
- this package is used for ORM. we also setup the database and table using sequelize. 
```
npm install sequelize-fastify
```

### create .sequelize file

- it will be used for assign the directory path for our application.
```
const path = require("path");

module.exports = {
  config: path.resolve("./db", "config.json"),
  "models-path": path.resolve("./app/models"),
  "seeders-path": path.resolve("./db/seeders"),
  "migrations-path": path.resolve("./db/migrations"),
};
```

### creating a package.json file.

```
npm init
```

### add sequelize

```
npm i sequelize-cli
```

### creatae directories:

```
npx sequelize init
```







