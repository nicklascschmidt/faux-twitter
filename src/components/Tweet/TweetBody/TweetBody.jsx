import React, { Component } from 'react';
import styled from 'styled-components';
import ColumnLayout from '../ColumnLayout/ColumnLayout';
import TweetUserInfo from './TweetUserInfo/TweetUserInfo';
import TweetUserAvi from './TweetUserAvi/TweetUserAvi';
import TweetInteractionBar from './TweetUserInfo/TweetInteractionBar/TweetInteractionBar';

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
            <TweetUserInfo userInfo={userInfo} time={time} />
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
