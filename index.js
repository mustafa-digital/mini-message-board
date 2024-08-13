/* index.js */
const path = require('node:path');

//get routers
const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');

// initialize express
const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

// set ejs as the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// using the routers
app.use('/', indexRouter);
app.use('/new', newRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
