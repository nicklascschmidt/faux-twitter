import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const UserName = styled.span`
  color: ${({ theme }) => theme.textPrimary};
`;

const UserHandle = styled.span`
  color: ${({ theme }) => theme.textSecondary};
`;

const TweetUserInfoBar = ({ userInfo, time }) => {
  const { name, handle } = userInfo;
  return (
    <Container>
      <UserName>{name}</UserName>
      <UserHandle>{handle}</UserHandle>
      <time dateTime={time}>Dec 6</time>
    </Container>
  );
};

export default TweetUserInfoBar;
