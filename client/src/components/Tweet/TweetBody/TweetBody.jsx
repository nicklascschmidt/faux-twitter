import React, { Component } from 'react';
import styled from 'styled-components';
import ColumnLayout from '../ColumnLayout/ColumnLayout';
import TweetUserInfoBar from './TweetUserInfoBar/TweetUserInfoBar';
import TweetUserAvi from './TweetUserAvi/TweetUserAvi';
import TweetInteractionBar from './TweetUserInfoBar/TweetInteractionBar/TweetInteractionBar';
import Media from '../../Media/Media';

const Container = styled(ColumnLayout)`
  padding: 10px 0;
`;

const Content = styled.div``;

const Text = styled.p`
  margin-top: 5px;
`;

class TweetBody extends Component {
  render() {
    const {
      userInfo,
      tweetInteractions,

      text,
      createdAt,
      publicMetrics,
      mediaAttachments,
    } = this.props.tweet;
    
    return (
      <article>
        <Container>
          <TweetUserAvi userInfo={userInfo} />
          <div>
            <TweetUserInfoBar userInfo={userInfo} createdAt={createdAt} />
            <Content>
              <Text>{text}</Text>
              <Media mediaAttachments={mediaAttachments} />
            </Content>
            <TweetInteractionBar {...publicMetrics} />
          </div>
        </Container>
      </article>
    );
  }
}

export default TweetBody;
