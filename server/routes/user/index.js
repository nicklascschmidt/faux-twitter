const _ = require('lodash');
const express = require('express');
const axios = require('axios');
const router = express.Router();

/**TODO:
 * replace API calls with this for testing
 * split up each type of call into diff files for org
 */
const userJson = require('../../twitter/user.json');

const baseUrl = 'https://api.twitter.com';
const bearerToken = process.env.API_TWITTER_BEARER_TOKEN;

const tweetFields = 'attachments,author_id,context_annotations,conversation_id,created_at,entities,geo,id,in_reply_to_user_id,public_metrics,referenced_tweets,text,withheld';

const defaultUserParams = {
  'tweet.fields': tweetFields,
};
const defaultHeaders = {
  Authorization: `Bearer ${bearerToken}`,
}

const fetchTimeline = async (userId) => {
  if (!userId) return null;
  // https://api.twitter.com/2/users/:id/tweets
  const url = `${baseUrl}/2/users/${userId}/tweets`;
  const params = { ...defaultUserParams };
  const headers = { ...defaultHeaders };
  return await axios.get(url, { params, headers });
};

const fetchUser = async (userHandle) => {
  // https://api.twitter.com/2/users/by/username/:username
  const url = `${baseUrl}/2/users/by/username/${userHandle}`;
  const params = {};
  const headers = { ...defaultHeaders };
  return axios.get(url, { params, headers });
};

router.get('/:userHandle', async (req, res) => {
  console.log('hit 1 req.params', req.params);
  const { userHandle } = req.params;

  try {
    const userResp = await fetchUser(userHandle);
    const user = _.get(userResp, 'data.data', {});
    console.log('user', user);
    res.send(user)
  } catch (err) {
    console.log('hit an error 1', err.stack);
    res.send(err.message);
  }
});

router.get('/:userId/tweets', async (req, res) => {
  console.log('hit 2 req.params', req.params);
  const { userId } = req.params;

  try {
    const timelineResp = await fetchTimeline(userId);
    const timeline = _.get(timelineResp, 'data.data', []);

    res.send(timeline);

  } catch (err) {
    console.log('hit an error 2', err.stack);
    res.send(err.message);
  }

  // res.send(userJson)
})

module.exports = router;