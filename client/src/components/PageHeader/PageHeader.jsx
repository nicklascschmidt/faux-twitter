import React, { Component } from 'react';
import styled from 'styled-components';

import SearchInput from '../SearchInput/SearchInput';

import { SearchTermContext } from '../Context/SearchTermContext/SearchTermContext';

const Container = styled.header`
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h2 {
    color: ${({ theme }) => theme.textPrimary};
    font-size: 19px;
  }
`;

class PageHeader extends Component {
  render() {
    return (
      <Container>
        <h2>Home</h2>
        <SearchTermContext.Consumer>
          {({ searchTerm, updateSearchTerm }) => (
            <SearchInput
              initialValue={searchTerm}
              handleSubmit={updateSearchTerm}
            />
          )}
        </SearchTermContext.Consumer>
      </Container>
    );
  }
}

export default PageHeader;
