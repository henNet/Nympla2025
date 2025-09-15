const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const sequelize = require("./sequelize");
const server = express();
const port = 8080;

/* Middleware */
server.use(cors());
server.use(express.json());
server.use(routes);

sequelize.sync();

server.listen(port, () => console.log(`Server ON!`));
