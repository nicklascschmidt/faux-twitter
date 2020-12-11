import React from 'react';
import styled from 'styled-components';
import ColumnLayout from '../ColumnLayout/ColumnLayout';
import InteractionIcon from '../../Icon/InteractionIcon';

const Container = styled(ColumnLayout)`
  color: ${({ theme }) => theme.textSecondary};
`;

const Icon = styled.div``;

const Text = styled.div`
  font-size: 13px;
  font-weight: 700;
`;

const ExternalInteractionBar = ({ externalInteraction }) => {
  const { type, users } = externalInteraction;

  const generateFavoriteText = (users) => {
    switch (users.length) {
      case 0:
        return null;
      case 1:
        return `${users[0]} favorited`;
      case 2:
        return `${users[0]} and ${users[1]} favorited`;
      default:
        return `${users[0]} and ${users.length - 1} others favorited`;
    }
  };

  const renderDisplayText = (users, type) => {
    /** TODO: turn these into links to the user's profile page */
    switch (type) {
      case 'favorite':
        return generateFavoriteText(users);
      case 'retweet':
        return `${users[0]} Retweeted`;
      case 'reply':
        return `${users[0]} received a reply`;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Icon>
        <InteractionIcon type={type} size={'18px'} strokeWidth={'3px'} />
      </Icon>
      <Text>{renderDisplayText(users, type)}</Text>
    </Container>
  );
};

export default ExternalInteractionBar;
