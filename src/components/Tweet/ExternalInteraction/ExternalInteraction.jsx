import React from 'react';
import styled from 'styled-components';
import { Repeat, Heart, MessageCircle } from 'react-feather';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-basis: 50px;
  flex-grow: 0;
  margin-right: 10px;
  
  svg {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

const Text = styled.div`
  flex-grow: 1;
  font-size: 13px;
`;

const ExternalInteraction = ({ externalInteraction }) => {
  const { type, users } = externalInteraction;

  const generateLikeText = (users) => {
    switch (users.length) {
      case 0:
        return null;
      case 1:
        return `${users[0]} liked`;
      case 2:
        return `${users[0]} and ${users[1]} liked`;
      default:
        return `${users[0]} and ${users.length - 1} others liked`;
    }
  };

  const renderDisplayText = (users, type) => {
    /** TODO: turn these into links to the user's profile page */
    switch (type) {
      case 'like':
        return generateLikeText(users);
      case 'retweet':
        return `${users[0]} Retweeted`;
      case 'reply':
        return `${users[0]} received a reply`;
      default:
        return null;
    }
  };

  const generateIcon = (type) => {
    switch (type) {
      case 'like':
        return <Heart size={'18px'} />;
      case 'retweet':
        return <Repeat size={'18px'} />;
      case 'reply':
        return <MessageCircle size={'18px'} />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Icon>{generateIcon(type)}</Icon>
      <Text>{renderDisplayText(users, type)}</Text>
    </Container>
  );
};

export default ExternalInteraction;
