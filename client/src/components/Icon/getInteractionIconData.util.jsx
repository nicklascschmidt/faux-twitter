import React from 'react';
import { Repeat, Heart, MessageCircle } from 'react-feather';

const getInteractionIconData = (type) => {
  switch (type) {
    case 'liked':
      return {
        IconElement: Heart,
        color: 'var(--c-light-like-red)',
        fill: 'var(--c-light-like-red)',
        mutedColor: 'var(--c-light-like-red-muted)',
      };
    case 'retweeted':
      return {
        IconElement: Repeat,
        color: 'var(--c-light-retweet-green)',
        mutedColor: 'var(--c-light-retweet-green-muted)',
      };
    case 'repliedTo':
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
