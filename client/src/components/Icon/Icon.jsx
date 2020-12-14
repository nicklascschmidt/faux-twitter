import React from 'react';
import styled from 'styled-components';

const IconElement = ({ Icon, ...props }) => <Icon {...props} />;

const StyledIcon = styled(IconElement)`
  color: ${(props) => props.color};
`;

export default StyledIcon;
