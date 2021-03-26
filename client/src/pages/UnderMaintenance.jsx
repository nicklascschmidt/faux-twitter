import { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  
  color: ${({ theme }) => theme.brandBlue}; 
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.25rem;
  }
`;

export default class UnderMaintenance extends Component {
  render() {
    return (
      <Container>
        <h1>Under Maintenance</h1>
        <h3>Please check back in soon!</h3>
      </Container>
    )
  }
}
