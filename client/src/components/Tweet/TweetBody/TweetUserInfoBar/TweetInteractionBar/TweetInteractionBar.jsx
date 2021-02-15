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
  replyCount,
  retweetCount,
  likeCount,
  likedByUser,
  retweetedByUser,
}) => {
  // const [likes, updateLikes] = useState(likes);

  /**TODO:
   * add logic to determine if faved/RTed by user by checking against localStorage
   */
  return (
    <Container>
      <InteractionCountPair type='repliedTo' amount={replyCount} />
      <InteractionCountPair
        type='retweeted'
        amount={retweetCount}
        isSelected={retweetedByUser}
      />
      <InteractionCountPair
        type='liked'
        amount={likeCount}
        isSelected={likedByUser}
      />
    </Container>
  );
};

export default TweetInteractionBar;
