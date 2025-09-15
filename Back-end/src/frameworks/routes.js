const { Router } = require("express");
const eventController = require("../controllers/eventController");

const routes = Router();

/* Event Routes */
routes.get("/event/all", eventController.getAllEvents);
routes.post("/event/register", eventController.registerEvent);

/* User Routes */
// routes.get("/user/all");

/* Subscribe Routes */

module.exports = routes;
