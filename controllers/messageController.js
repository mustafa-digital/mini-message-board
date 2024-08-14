/* messageController.js */
const navLinks = require('../navLinks');
const messages = require('../messages');

const messageController = {
  get: (req, res) => {
    res.redirect('/');
  },

  getSingleMessage: (req, res) => {
    const messageId = req.params.messageId;
    const message = messages[messageId];
    res.render('pages/message', { links: navLinks, message: message });
  }
}

module.exports = messageController;