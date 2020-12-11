import React, { Component } from 'react';
import styled from 'styled-components';
import TweetBody from './TweetBody/TweetBody';
import ExternalInteractionBar from './ExternalInteractionBar/ExternalInteractionBar';
import tweet from './Tweet.data';

/**
  - Standard tweet
    - User icon - left component
    - UN, handle, timestamp (hrs if under 24, otherwise date (18h, Dec 3))
    - (If reply, include Replying to… - see Reply below in variations)
    - tweet body content
    - Replies, retweets, likes
 */

const Container = styled.div`
  cursor: pointer;

  border-bottom: 1px solid ${({ theme }) => theme.borderPrimary};
  color: ${({ theme }) => theme.textPrimary};

  padding: 0 15px;
  padding-top: 15px;

  &:hover {
    background-color: ${({ theme }) => theme.primaryDk};
  }
`;

class Tweet extends Component {
  render() {
    const { externalInteraction } = tweet;
    return (
      <Container>
        {externalInteraction && (
          <ExternalInteractionBar externalInteraction={externalInteraction} />
        )}
        <TweetBody tweet={tweet} />
      </Container>
    );
  }
}

export default Tweet;
