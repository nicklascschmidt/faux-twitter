import React from 'react';
import styled from 'styled-components';
import getInteractionIconData from '../../../../../Icon/getInteractionIconData.util';

const CircleContainer = styled.div`
  position: relative;
`;

const Circle = styled.div`
  width: 35px;
  height: 35px;
  position: absolute;
  top: -8px;
  left: -10px;
  border-radius: 50%;
`;

const Amount = styled.span`
  padding: 0 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${(props) => props.color || 'var(--c-light-text-lt)'};

  &:hover {
    ${Circle} {
      background-color: ${(props) => props.hoverMutedColor};
    }
    svg {
      color: ${(props) => props.hoverColor};
    }
    ${Amount} {
      color: ${(props) => props.hoverColor};
    }
  }
`;

const InteractionCountPair = ({ type, amount, isSelected }) => {
  const { IconElement, color, mutedColor, fill } = getInteractionIconData(type);

  return (
    <CircleContainer>
      <Container
        hoverColor={color}
        hoverMutedColor={mutedColor}
        {...(isSelected && { color })}
      >
        <Circle />
        <IconElement
          size={'15px'}
          strokeWidth={isSelected ? '3px' : '2px'}
          {...(isSelected && { color })}
          {...(isSelected && fill && { fill: color })}
        />
        <Amount>{amount}</Amount>
      </Container>
    </CircleContainer>
  );
};

export default InteractionCountPair;
