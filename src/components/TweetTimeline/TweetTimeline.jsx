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
