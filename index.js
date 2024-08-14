/* index.js */
const path = require('node:path');

//get routers
const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');
const messageRouter = require('./routes/messageRouter');

// initialize express
const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

// set ejs as the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

// using the routers
app.use('/', indexRouter);
app.use('/new', newRouter);
app.use('/messages', messageRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
