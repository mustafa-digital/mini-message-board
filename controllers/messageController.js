/* messageController.js */
const navLinks = require('../navLinks');
const { getSingleMessage } = require('../db/queries');

const messageController = {
  get: (req, res) => {
    res.redirect('/');
  },

  getSingleMessage: async (req, res) => {
    const messageId = req.params.messageId;
    // query db for row in messages where id === messageId
    const message = await getSingleMessage(messageId);
    res.render('pages/message', { links: navLinks, message: message });
  }
}

module.exports = messageController;