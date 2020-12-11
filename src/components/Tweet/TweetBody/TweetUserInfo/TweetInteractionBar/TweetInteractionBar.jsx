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
  likes,
  likedByUser,
  retweetedByUser,
}) => {
  // const [likes, updateLikes] = useState(likes);
  return (
    <Container>
      <InteractionCountPair type='reply' amount={replies} />
      <InteractionCountPair
        type='retweet'
        amount={retweets}
        isSelected={retweetedByUser}
      />
      <InteractionCountPair
        type='like'
        amount={likes}
        isSelected={likedByUser}
      />
    </Container>
  );
};

export default TweetInteractionBar;
