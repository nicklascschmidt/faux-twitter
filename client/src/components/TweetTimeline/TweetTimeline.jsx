import React, { Component } from 'react';
import styled from 'styled-components';

import Tweet from '../Tweet/Tweet';

const Container = styled.div``;

class TweetTimeline extends Component {
  async componentDidMount() {
    // this.getTweetsByUser();
  }

  getTweetsByUser = async () => {
    const resp = await fetch('/user', {
      credentials: 'include' // fetch won't send cookies unless you set credentials
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
    console.log('resp', resp);
  }

  render() {
    return (
      <Container>
        <Tweet />
      </Container>
    );
  }
}

export default TweetTimeline;
