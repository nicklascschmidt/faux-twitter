import _get from 'lodash/get';
import React, { Component } from 'react';
import styled from 'styled-components';
import TweetBody from './TweetBody/TweetBody';
import ExternalInteractionBar from './ExternalInteractionBar/ExternalInteractionBar';

/**
  - Standard tweet
    - User icon - left component
    - UN, username (handle), timestamp (hrs if under 24, otherwise date (18h, Dec 3))
    - (If reply, include Replying to… - see Reply below in variations)
    - tweet body content
    - Replies, retweets, likes
 */

const Container = styled.div`
  cursor: pointer;

  border-bottom: 1px solid ${({ theme }) => theme.borderPrimary};
  color: ${({ theme }) => theme.textPrimary};

  padding: 0 15px;

  &:hover {
    background-color: ${({ theme }) => theme.primaryDk};
  }
`;

class Tweet extends Component {
  /**TODO:
   * work out logic to determine author and pass into TweetBody
   */
  render() {
    const { tweet } = this.props;
    const refTweetType = _get(tweet, 'referencedTweet.type', '');

    return (
      <Container>
        {refTweetType === 'retweeted' && (
          <ExternalInteractionBar author={tweet.userInfo} type={refTweetType} />
        )}
        <TweetBody tweet={tweet} />
      </Container>
    );
  }
}

export default Tweet;
