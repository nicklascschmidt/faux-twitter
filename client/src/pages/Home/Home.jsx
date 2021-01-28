import React, { Component } from 'react';
import styled from 'styled-components';

import TweetTimelineWrapper from '../../components/TweetTimeline/TweetTimelineWrapper';
import PageHeader from '../../components/PageHeader/PageHeader';

import SearchTermContextWrapper from '../../components/Context/SearchTermContext/SearchTermContextWrapper';
import { SearchTermContext } from '../../components/Context/SearchTermContext/SearchTermContext';

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
          <SearchTermContext.Consumer>
            {({ searchTerm }) => <TweetTimelineWrapper searchTerm={searchTerm} />}
          </SearchTermContext.Consumer>
        </Container>
      </SearchTermContextWrapper>
    );
  }
}

export default Home;
