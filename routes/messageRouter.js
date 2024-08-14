/* messageRouter.js */

const { Router } = require('express');
const messageRouter = Router();

// import the controller for this route
const controller = require('../controllers/messageController');

// messages without a messageid path gets redirected to index
messageRouter.get('/', controller.get);

// get request when a messageid is given in messages path
messageRouter.get('/:messageId', controller.getSingleMessage);

module.exports = messageRouter;