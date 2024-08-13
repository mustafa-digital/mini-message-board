/* indexRouter.js */

// initialize express router
const { Router } = require('express');
const indexRouter = Router();

// import the controller for this route
const controller = require('../controllers/indexController');

// send requests to controller
indexRouter.get('/', controller.get);

module.exports = indexRouter;