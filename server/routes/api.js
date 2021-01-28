const express = require('express');
const router = express.Router();
const userRouter = require('./user/index');

const authMessage = {
  title: "Could not authenticate",
  details: [
    `Please make sure your bearer token is correct.`,
  ],
};

router.use('/user', userRouter)

module.exports = router;