import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.section`
  width: 600px;
  border-left: 1px solid ${({ theme }) => theme.borderPrimary};
  border-right: 1px solid ${({ theme }) => theme.borderPrimary};
`;

const PageHeader = styled.header`
  padding: 0 15px;
  h2 {
    color: ${({ theme }) => theme.textPrimary};
    font-size: 19px;
  }
`;

class TweetTimeline extends Component {
  async componentDidMount() {
    // const url = 'https://stream.twitter.com/1.1/statuses/sample.json';
    // const resp = await fetch(url, {
    //   method: 'GET', // *GET, POST, PUT, DELETE, etc.
    //   // mode: 'cors', // no-cors, *cors, same-origin
    //   // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //   // credentials: 'same-origin', // include, *same-origin, omit
    //   headers: {
    //     'Content-Type': 'application/json'
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   // redirect: 'follow', // manual, *follow, error
    //   // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //   // body: JSON.stringify(data) // body data type must match "Content-Type" header
    // })


    const url = '/user';
    const resp = await fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
    console.log('resp', resp);
  }

  render() {
    return (
      <Container>
        <PageHeader>
          <h2>Home</h2>
        </PageHeader>
        {this.props.children}
      </Container>
    );
  }
}

export default TweetTimeline;
