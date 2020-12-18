import React, { useState } from 'react';
import styled from 'styled-components';

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
    <StyledInput
      name='user'
      type='text'
      value={value}
      onChange={(e) => updateValue(e.target.value)}
      onKeyDown={(e) => e.code === 'Enter' && handleSubmit(e.target.value)}
    />
  );
};

export default SearchInput;
