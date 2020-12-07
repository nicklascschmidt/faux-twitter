import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  svg {
    color: ${({ isActive, theme }) =>
      isActive ? theme.brandBlue : theme.textPrimary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.brandBlueMuted};
    svg {
      color: ${({ theme }) => theme.brandBlue};
    }
  }
`;

function NavIcon({ icon }) {
  const [isActive, setIsActive] = useState();

  return (
    <Container isActive={isActive} onClick={() => setIsActive(true)}>
      {icon}
    </Container>
  );
}

export default NavIcon;
