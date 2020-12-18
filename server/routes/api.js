const express = require('express');
const axios = require('axios');
const router = express.Router();

const baseUrl = 'https://api.twitter.com';
const bearerToken = process.env.API_TWITTER_BEARER_TOKEN;

const authMessage = {
  title: "Could not authenticate",
  details: [
    `Please make sure your bearer token is correct.`,
  ],
};

router.get('/', async (req, res) => {
  if (!bearerToken) {
    res.status(400).send(authMessage);
  }

  let response;
  // let params = {};
  let id = '1334972569280241664';
  let url = `${baseUrl}/2/tweets/${id}`;

  try {
    response = await axios.get(url, {
      params: {
        'tweet.fields': 'created_at,attachments',
      },
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      }
    })
    return res.send(response.data);

  } catch (err) {
    console.log('hit an error', err.stack);
    return res.send(err.message);
  }
});

module.exports = router;