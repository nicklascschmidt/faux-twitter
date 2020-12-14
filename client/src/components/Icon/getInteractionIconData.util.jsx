import React from 'react';
import { Repeat, Heart, MessageCircle } from 'react-feather';

const getInteractionIconData = (type) => {
  switch (type) {
    case 'favorite':
      return {
        IconElement: Heart,
        color: 'var(--c-light-favorite-red)',
        fill: 'var(--c-light-favorite-red)',
        mutedColor: 'var(--c-light-favorite-red-muted)',
      };
    case 'retweet':
      return {
        IconElement: Repeat,
        color: 'var(--c-light-retweet-green)',
        mutedColor: 'var(--c-light-retweet-green-muted)',
      };
    case 'reply':
      return {
        IconElement: MessageCircle,
        color: 'var(--c-light-reply-blue)',
        mutedColor: 'var(--c-light-reply-blue-muted)',
      };
    default:
      return null;
  }
};

export default getInteractionIconData;
