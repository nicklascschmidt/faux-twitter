import React, { Component } from 'react';
import styled from 'styled-components';
import TweetBody from './TweetBody/TweetBody';
import ExternalInteraction from './ExternalInteraction/ExternalInteraction';

/**
  - Standard tweet
    - User icon - left component
    - UN, handle, timestamp (hrs if under 24, otherwise date (18h, Dec 3))
    - (If reply, include Replying to… - see Reply below in variations)
    - tweet body content
    - Replies, retweets, likes
 */

const Container = styled.article`
  padding: 0 15px;
  border-bottom: 1px solid ${({ theme }) => theme.borderPrimary};
  color: ${({ theme }) => theme.textPrimary};

  &:hover {
    background-color: ${({ theme }) => theme.primaryDk};
  }
`;

const InnerContainer = styled.div`
  padding-top: 10px;
`;

const tweet = {
  // optional field
  externalInteraction: {
    type: 'like', // like || retweet || reply
    users: ['faux twit'], // [] of names, handle
  },
};

class Tweet extends Component {
  render() {
    const { externalInteraction } = tweet;
    return (
      <Container>
        {externalInteraction && (
          <ExternalInteraction externalInteraction={externalInteraction} />
        )}
        <InnerContainer>
          <TweetBody />
        </InnerContainer>
      </Container>
    );
  }
}

export default Tweet;
