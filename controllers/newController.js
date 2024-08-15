/* newController.js */
const { addMessage } = require('../db/queries');

const newController = {
  get: (req, res) => {
    res.render('pages/form');
  },
  post: async (req, res) => {
    // insert a new row into the db
    const text = req.body.message;
    const username = req.body.name;
    const added = new Date();
    await addMessage(text, username, added);
    res.redirect('/');
  }
}

module.exports = newController;