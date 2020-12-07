import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTestDiv = styled.div`
  margin: 10px;
  padding: 10px;
  border: 3px solid ${({ theme }) => theme.borderPrimary};
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.textPrimary};
`;

class BasicTest extends Component {
  render() {
    return (
      <StyledTestDiv>testing style</StyledTestDiv>
    )
  }
}

export default BasicTest;