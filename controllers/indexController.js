/* indexController.js */
const navLinks = require('../navLinks');
const { getMessages } = require('../db/queries');

const indexController = {

  get: async (req, res) => {
    // query the database for messages
    const messages = await getMessages();
    res.render('pages/index', {links: navLinks, messages: messages});
  }
}

module.exports = indexController;