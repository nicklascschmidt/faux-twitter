/**
 * 
 ***** This version of the component is deprecated ******
 * for if multiple users interact with a tweet
 * not the case on a user profile page, only on a timeline
 */


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
      case 'retweeted':
        return `${users[0]} Retweeted`;
      case 'replied_to':
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
