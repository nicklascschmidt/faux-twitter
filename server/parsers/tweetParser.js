const _get = require('lodash/get');
const _pick = require('lodash/pick');


const getUserInfo = (authorId, users) => users.find((user) => user.id === authorId);

const getMediaAttachments = (mediaKeys, media) => {
  return mediaKeys.map((keyString) => {
    return media.find(media => media.mediaKey === keyString);
  });
};

const parseTweet = (tweet, includes) => {
  const {
    users: includesUsers = [],
    tweets: includesTweets = [],
    media: includesMedia = [],
  } = includes;

  const referencedTweet = _get(tweet, 'referencedTweets[0]', {});
  const { type: refTweetType } = referencedTweet;
  const refTweetExists = (Object.keys(referencedTweet).length > 0);

  const mediaKeys = _get(tweet, 'attachments.mediaKeys', []);
  const mediaKeysExist = (mediaKeys.length > 0);

  return {
    ..._pick(tweet, ['id', 'createdAt', 'text', 'conversationId']),
    userInfo: getUserInfo(tweet.authorId, includesUsers),
    ...(mediaKeysExist && { mediaAttachments: getMediaAttachments(mediaKeys, includesMedia) }),

    // TODO: handle referenced_tweets -- quoted || replied_to || retweeted
    ...(refTweetExists && {
      referencedTweet: {
        type: refTweetType,
        ...parseTweet(referencedTweet, includes)
      }
    }),
  };
};

const parseTimeline = (timelineResponseData) => {
  const {
    data: timelineData = [],
    includes = {},
    meta = {},
  } = timelineResponseData;

  return {
    ...timelineResponseData,
    data: timelineData.map((tweet, idx) => parseTweet(tweet, includes)),
  };
};

module.exports = parseTimeline;