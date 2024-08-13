/* routes/newRouter */

// initialize express router
const { Router } = require('express');
const newRouter = Router();

// import the controller for this route
const controller = require('../controllers/newController');

// send requests to controller
newRouter.get('/', controller.get);
newRouter.post('/', controller.post);

module.exports = newRouter;