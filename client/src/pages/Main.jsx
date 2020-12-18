import React, { Component } from 'react';
import styled from 'styled-components';
import Routes from '../routes/Routes';
import Nav from '../components/Nav/Nav';

const Container = styled.main`
  width: 100vw;
  display: grid;
  grid-template-columns: 148px 600px;
`;

class Main extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Container>
          <Nav />
          <Routes />
        </Container>
      </div>
    )
  }
}

export default Main;