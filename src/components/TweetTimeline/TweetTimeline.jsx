import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 600px;
  border-left: 1px solid ${({ theme }) => theme.borderPrimary};
  border-right: 1px solid ${({ theme }) => theme.borderPrimary};
`;

const PageTitle = styled.div`
  padding: 0 15px;
  h2 {
    color: ${({ theme }) => theme.textPrimary};
    font-size: 19px;
  }
`;

class TweetTimeline extends Component {
  render() {
    return (
      <Container>
        <PageTitle>
          <h2>Home</h2>
        </PageTitle>
        {this.props.children}
      </Container>
    );
  }
}

export default TweetTimeline;
