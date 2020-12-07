import React, { Component } from 'react';
import styled from 'styled-components';

import Nav from '../../components/Nav/Nav';
import TweetTimeline from '../../components/TweetTimeline/TweetTimeline';
import Tweet from '../../components/Tweet/Tweet';

const Container = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 148px 600px;
`;

class Main extends Component {
  render() {
    return (
      <Container>
        <Nav />
        <TweetTimeline>
          <Tweet />
        </TweetTimeline>
      </Container>
    );
  }
}

export default Main;
