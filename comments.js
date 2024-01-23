// Create web server

// Import express
const express = require('express');
const app = express();
const port = 3000;

// Import body-parser
const bodyParser = require('body-parser');

// Import lowdb
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json'); // default location
const db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ comments: [] }).write();

// Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Use body-parser
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded