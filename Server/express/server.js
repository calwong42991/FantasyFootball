const db = require('../../Database/player');
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./apiRoutes');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + '/../../React-Client/dist')));

app.use('/api', apiRouter);

app.get('/', (req,res) => {
  res.send('Hello');
})

module.exports = app;