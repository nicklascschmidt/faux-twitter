require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use routes
app.use('/api', require('./routes/api'));

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3001;

// in Prod (Heroku), serve up static assets
if (!isDev) {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

app.listen(PORT, () =>
  console.log(`App listening on port ${PORT}.`)
);

module.exports = app;
