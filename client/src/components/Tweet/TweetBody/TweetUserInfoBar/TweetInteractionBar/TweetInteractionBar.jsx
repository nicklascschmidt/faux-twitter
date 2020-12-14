import React, { useState } from 'react';
import styled from 'styled-components';
import InteractionCountPair from './InteractionCountPair/InteractionCountPair';

const Container = styled.div`
  margin-top: 10px;
  max-width: 425px;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

const TweetInteractionBar = ({
  replies,
  retweets,
  favorites,
  favoritedByUser,
  retweetedByUser,
}) => {
  // const [favorites, updateFavorites] = useState(favorites);
  return (
    <Container>
      <InteractionCountPair type='reply' amount={replies} />
      <InteractionCountPair
        type='retweet'
        amount={retweets}
        isSelected={retweetedByUser}
      />
      <InteractionCountPair
        type='favorite'
        amount={favorites}
        isSelected={favoritedByUser}
      />
    </Container>
  );
};

export default TweetInteractionBar;
