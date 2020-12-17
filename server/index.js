const express = require('express');
// const cors = require('cors');
const config = require('../config');

const app = express();
app.use(express.json());

// configure CORS
// app.use(cors({
//   origin: true,
//   credentials: true
// }));

// use routes
app.use('/user', require('./routes/user'));

app.listen(config.serverPort, () =>
  console.log(`App listening on port ${config.serverPort}.`)
);
