/* indexRouter.js */

// initialize express router
const { Router } = require('express');
const indexRouter = Router();

// import the controller for this route
const controller = require('../controllers/indexController');

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// send requests to controller
indexRouter.get('/', (req, res) => {
  res.locals.messages = messages;

  controller.get(req, res);
});

module.exports = indexRouter;