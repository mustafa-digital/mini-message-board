/* indexController.js */

const indexController = {

  get: (req, res) => {
    res.render('pages/index', {messages: res.locals.messages});
  }
}

module.exports = indexController;