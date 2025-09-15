const events = require("../entities/events");

async function getAllEvents(request, reply) {
  try {

    const replyDB = await events.findAll();
    reply.status(200).json(replyDB);

  } catch (error) {
    reply.status(404).json({ error: error.message });
  }
}

async function registerEvent(request, reply) {
  const event = request.body;

  try {
    const replyDB = await events.create(event);
    reply.status(200).json(replyDB);

  } catch (error) {
    reply.status(500).json({ error: error.message });
  }
}

module.exports = { getAllEvents, registerEvent };
