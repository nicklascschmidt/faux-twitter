import React from 'react';
import getInteractionIconData from './getInteractionIconData.util';

const InteractionIcon = ({ type, ...props }) => {
  const { IconElement } = getInteractionIconData(type);
  return <IconElement {...props} />;
};

export default InteractionIcon;
