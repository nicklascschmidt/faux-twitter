const tweet = {
  userInfo: {
    // ...userData
    name: 'James',
    username: '@CaucasianJames',
    profileImageUrl:
      'https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png',
  },
  createdAt: Date.now(),
  text: 'hello, i am a tweet text',
  
  tweetInteractions: {
    replies: 1,
    retweets: 5,
    likes: 20,
    likedByUser: false,
    retweetedByUser: true,
  },

  referencedTweet: {
    type: 'quoted', // 'retweeted' || replied_to
    id: '123456',
    // ...restOfTweetData
  },
  mediaAttachments: [
    {
      // width
      // mediaKey
      // url
      // height
      // type
    },
  ],
};

export default tweet;