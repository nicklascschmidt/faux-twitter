import React, { Component } from 'react';
import styled from 'styled-components';
import ColumnLayout from '../ColumnLayout/ColumnLayout';
import TweetUserInfoBar from './TweetUserInfoBar/TweetUserInfoBar';
import TweetUserAvi from './TweetUserAvi/TweetUserAvi';
import TweetInteractionBar from './TweetUserInfoBar/TweetInteractionBar/TweetInteractionBar';

const Container = styled(ColumnLayout)`
  padding: 10px 0;
`;

const Content = styled.div``;

class TweetBody extends Component {
  render() {
    const { userInfo, tweetInfo, tweetInteractions } = this.props.tweet;
    const { time, text, media } = tweetInfo;
    return (
      <article>
        <Container>
          <TweetUserAvi userInfo={userInfo} />
          <div>
            <TweetUserInfoBar userInfo={userInfo} time={time} />
            <Content>
              <p>{text}</p>
              <div>{media}</div>
            </Content>
            <TweetInteractionBar {...tweetInteractions} />
          </div>
        </Container>
      </article>
    );
  }
}

export default TweetBody;
