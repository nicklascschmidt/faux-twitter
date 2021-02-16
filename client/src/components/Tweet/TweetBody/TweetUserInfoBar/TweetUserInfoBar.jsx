import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getDateFormatted } from '../../../../util/date.util';


const Container = styled.div`
  display: flex;
`;

const UserName = styled.span`
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 700;
`;

const UserHandle = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  margin-left: 5px;
`;

const Dot = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  div {
    line-height: 0.7;
    color: ${({ theme }) => theme.textSecondary};
  }
`;

const Time = styled.time`
  color: ${({ theme }) => theme.textSecondary};
`;

const TweetUserInfoBar = ({ userInfo, createdAt }) => {
  const { name, username } = userInfo;
  return (
    <Container>
      <Link to={`/user/${username}`}>
        <UserName>{name}</UserName>
        <UserHandle>{`@${username}`}</UserHandle>
      </Link>
      <Dot><div>.</div></Dot>
      <Time dateTime={createdAt}>{getDateFormatted(createdAt)}</Time>
    </Container>
  );
};

export default TweetUserInfoBar;
