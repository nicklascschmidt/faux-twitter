import React, { Component } from 'react';
import styled from 'styled-components';

import TweetTimeline from '../../components/TweetTimeline/TweetTimeline';
import PageHeader from '../../components/PageHeader/PageHeader';

import SearchTermContextWrapper from '../../components/Context/SearchTermContext/SearchTermContextWrapper';

const Container = styled.section`
  width: 600px;
  border-left: 1px solid ${({ theme }) => theme.borderPrimary};
  border-right: 1px solid ${({ theme }) => theme.borderPrimary};
`;

class Home extends Component {
  render() {
    return (
      <SearchTermContextWrapper>
        <Container>
          <PageHeader />
          <TweetTimeline />
        </Container>
      </SearchTermContextWrapper>
    );
  }
}

export default Home;
