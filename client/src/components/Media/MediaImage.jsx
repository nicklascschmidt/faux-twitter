import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1 1 0px;
`;

const Image = styled.div`
  background-image: ${props => props.url && `url(${props.url})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
`;

class MediaImage extends Component {
  render() {
    const {
      width,
      mediaKey,
      url,
      height,
      type,
    } = this.props;

    return (
      <Container>
        <Image url={url} />
      </Container>
    )
  }
}

export default MediaImage;
