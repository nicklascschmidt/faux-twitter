import React, { Component } from 'react';
import styled from 'styled-components';

import Tweet from '../Tweet/Tweet';

const Container = styled.div``;

class TweetTimeline extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { timelineData } = this.props;

    return (
      <Container>
        {timelineData.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />)}
      </Container>
    );
  }
}

export default TweetTimeline;
