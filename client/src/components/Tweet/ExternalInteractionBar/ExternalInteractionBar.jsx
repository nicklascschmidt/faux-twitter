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

/** TODO:
 * turn these into links to the user's profile page
 * add tooltip that shows author info highlights
*/
const ExternalInteractionBar = ({ author, type }) => {
  const { name } = author;
  
  return (
    <Container>
      <Icon>
        <InteractionIcon type={type} size={'18px'} strokeWidth={'3px'} />
      </Icon>
      <Text>{`${name} Retweeted`}</Text>
    </Container>
  );
};

export default ExternalInteractionBar;
