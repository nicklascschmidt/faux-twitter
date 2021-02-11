const _ = require('lodash');
const express = require('express');
const axios = require('axios');
const router = express.Router();

/**TODO:
 * replace API calls with this for testing
 * split up each type of call into diff files for org
 */
const sampleUser = require('../../twitter/user.json');
const sampleTweetTimeline = require('../../twitter/tweets.json');

/* TODO: toggle for testing */
const testMode = true;

const baseUrl = 'https://api.twitter.com';
const bearerToken = process.env.API_TWITTER_BEARER_TOKEN;

const tweetFields = 'attachments,author_id,context_annotations,conversation_id,created_at,entities,geo,id,in_reply_to_user_id,public_metrics,referenced_tweets,text,withheld';

const defaultUserParams = {
  'tweet.fields': tweetFields,
};
const defaultHeaders = {
  Authorization: `Bearer ${bearerToken}`,
}

// https://api.twitter.com/2/users/by/username/:username
const fetchUser = (userHandle) => {
  if (testMode) return new Promise((res, rej) => res({ data: { data: sampleUser } }));
  const url = `${baseUrl}/2/users/by/username/${userHandle}`;
  const params = {};
  const headers = { ...defaultHeaders };
  return axios.get(url, { params, headers });
};

// https://api.twitter.com/2/users/:id/tweets
const fetchTimeline = (userId) => {
  if (testMode) return new Promise((res, rej) => res({ data: { data: sampleTweetTimeline } }));
  if (!userId) return null;
  const url = `${baseUrl}/2/users/${userId}/tweets`;
  const params = { ...defaultUserParams };
  const headers = { ...defaultHeaders };
  return axios.get(url, { params, headers });
};


router.get('/:userHandle', async (req, res) => {
  console.log('hit 1 req.params', req.params);
  const { userHandle } = req.params;

  try {
    const { data: userData } = await fetchUser(userHandle);
    res.status(200).send(userData); 
  } catch (err) {
    console.log('fetchUser err', err.stack);
    res.status(500).send(err.message);
  }
});

router.get('/:userId/tweets', async (req, res) => {
  console.log('hit 2 req.params', req.params);
  const { userId } = req.params;

  try {
    const { data: timelineData } = await fetchTimeline(userId);

    if (timelineData.data) {
      res.status(200).send(timelineData);
    } else if (
      timelineData.errors &&
      timelineData.errors[0].title === 'Authorization Error'
    ) {
      res.status(403).send({ isUserPrivate: true });
    } else {
      res.status(404).send('Error fetching user tweets');
    }

  } catch (err) {
    console.log('fetchTimeline err', err.stack);
    res.status(500).send(err.message);
  }
});

module.exports = router;