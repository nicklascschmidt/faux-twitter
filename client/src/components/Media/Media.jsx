import React, { Component } from 'react';
import styled from 'styled-components';
import MediaImage from './MediaImage';

const Container = styled.div`
  height: 18rem;

  border: 1px solid ${({ theme }) => theme.primaryDk};
  border-radius: 16px;
  overflow: hidden;
  margin-top: 10px;

  display: flex;
  grid-gap: 2px;
  ${({ isFull }) => isFull
    ? 'flex-direction: column;'
    : 'flex-direction: row;'}
`;

const InnerContainer = styled.div`
  display: flex;
  flex: 1 1 0px;
  grid-gap: 2px;
  ${({ isEven }) => isEven
    ? 'flex-direction: row;'
    : 'flex-direction: column;'}
`;

/* TODO:

add logic for -- quote tweet, pic, etc.

Pic display by # of pix
1 - full pic
2 - side by side, full height (18rem)
3 - left full height, right 2 pix 50% height
4 - four squares

*/

class Media extends Component {
  constructor(props) {
    super(props);
    const { mediaAttachments = [] } = this.props;
    if (mediaAttachments.length > 0) this.isEven = (mediaAttachments.length % 2 === 0);
  }

  renderMediaAttachments = (mediaAttachments) => {
    if (mediaAttachments.length <= 0) return null;
    else if (mediaAttachments.length === 1) return this.renderImage(mediaAttachments[0]);
    else if (mediaAttachments.length === 2) return <>{mediaAttachments.map(media => this.renderImage(media))}</>;
    else {
      const sliceIdx = mediaAttachments.length - 2;
      return <>
        <InnerContainer isEven={this.isEven}>{this.renderMediaAttachments(mediaAttachments.slice(0, sliceIdx))}</InnerContainer>
        <InnerContainer isEven={this.isEven}>{this.renderMediaAttachments(mediaAttachments.slice(sliceIdx))}</InnerContainer>
      </>
    }
  }

  renderImage = (media) => <MediaImage key={`media-image-${media.mediaKey}`} {...media} />

  render() {
    const { mediaAttachments = [] } = this.props;

    if (mediaAttachments.length <= 0) return null;
    return (
      <Container isFull={mediaAttachments.length === 4}>
        {this.renderMediaAttachments(mediaAttachments)}
      </Container>
    );
  }
}

export default Media;
