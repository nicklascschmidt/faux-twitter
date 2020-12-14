import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Avi = styled.div`
  height: 50px;
  width: 50px;
  img {
    height: 100%;
  }
`;

const TweetUserAvi = ({ userInfo }) => {
  const { avi } = userInfo;
  return (
    <Container>
      <Avi>
        <img src={avi} alt='err' />
      </Avi>
    </Container>
  );
};

export default TweetUserAvi;
