import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

/**
 * User hasn't searched anything yet
 * Searched, user doesn't exist. ie. user resp is empty
 * Searched, user exists, but no tweets to show. ie. user exists in resp, but tweets are empty
 */
const EmptyTimeline = ({ searchTerm, isUserEmpty }) => {
  const displayContent = () => {
    if (!searchTerm) return 'Use the search bar to populate the timeline';
    if (isUserEmpty) return `No tweets found for user "${searchTerm}"`;
    return `${searchTerm} has no tweets to show`;
  };
  
  return (
    <Container>
      { displayContent() }
    </Container>
  )
};

export default EmptyTimeline;
