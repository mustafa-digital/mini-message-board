/* newController.js */
const messages = require('../messages');

const newController = {
  get: (req, res) => {
    res.render('pages/form');
  },
  post: (req, res) => {
    messages.push({ text: req.body.message, user: req.body.name, added: new Date() });
    res.redirect('/');
  }
}

module.exports = newController;