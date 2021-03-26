import React, { Component } from 'react';
import styled from 'styled-components';
import Routes from '../routes/Routes';
import Nav from '../components/Nav/Nav';
import UnderMaintenance from './UnderMaintenance';

const Container = styled.main`
  width: 100vw;
  display: grid;
  grid-template-columns: 148px 600px;
`;

const InitialState = {};

const isUnderMaintenance = true;

/**TODO:
 * add context provider for appState
 * add context consumer to TweetInteraction comps for updating faves, RTs, comments (repl replies)
 */

class Main extends Component {
  constructor(props) {
    super(props);

    // Grab prev state if exists
    this.state = localStorage.getItem('appState')
      ? JSON.parse(localStorage.getItem('appState'))
      : InitialState;
  }

  componentWillUnmount() {
    // Save state for next visit
    localStorage.setItem('appState', JSON.stringify(this.state));
  }

  render() {
    if (isUnderMaintenance) return <UnderMaintenance />;
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
