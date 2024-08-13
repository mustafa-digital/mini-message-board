/* index.js */
const path = require('node:path');

// initialize express
const express = require('express');
const app = express();

const port = 3000;

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
