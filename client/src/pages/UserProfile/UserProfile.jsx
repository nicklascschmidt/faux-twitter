import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';

const Container = styled.div``;

const UserProfile = () => {
  const { userHandle } = useParams();
  return (
    <Container>
      <div>{`user: ${userHandle}`}</div>
      <div>
        <Link to='/'>go home sam</Link>
      </div>
    </Container>
  );
};

export default UserProfile;
