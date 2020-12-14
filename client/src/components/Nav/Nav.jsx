import React, { Component } from 'react';
import styled from 'styled-components';
import { Twitter, Home, User } from 'react-feather';
import NavIcon from '../NavIcon/NavIcon';

const Container = styled.header`
  padding: 20px;
`;

const StyledNav = styled.nav`
  width: 46px;
  margin-left: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export default class Nav extends Component {
  render() {
    return (
      <Container>
        <StyledNav>
          <NavIcon icon={<Twitter />} />
          <NavIcon icon={<Home />} />
          <NavIcon icon={<User />} />
        </StyledNav>
      </Container>
    );
  }
}
