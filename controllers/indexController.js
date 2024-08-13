/* indexController.js */
const navLinks = require('../navLinks');
const messages = require('../messages');

const indexController = {

  get: (req, res) => {
    res.render('pages/index', {links: navLinks, messages: messages});
  }
}

module.exports = indexController;