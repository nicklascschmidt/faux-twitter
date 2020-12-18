import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const StyledInput = styled.input`
  padding: 10px;
  background-color: ${({ theme }) => theme.inputBackground};
  color: ${({ theme }) => theme.textPrimary};
  border-radius: 20px;
  border-style: solid;

  &:focus {
    background-color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.brandBlue};
    outline: none;
  }
`;

const SearchInput = ({ initialValue, handleSubmit }) => {
  const [value, updateValue] = useState(initialValue);

  return (
    <Container>
      <StyledInput
        name='user'
        type='text'
        value={value}
        onChange={(e) => updateValue(e.target.value)}
        onKeyDown={(e) => e.code === 'Enter' && handleSubmit(e.target.value)}
      />
    </Container>
  );
};

export default SearchInput;
