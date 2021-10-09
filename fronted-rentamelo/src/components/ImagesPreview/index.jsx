import { ImageComponent } from 'components';
import React from 'react';
import { ImagesPreview, ImageContainer } from './styled';
const Component = ({ images, setMainImage }) => {

    const loadImages = images.map((image, index) => <ImageContainer onMouseOver={() => setMainImage(image)} key={`image-${index}`} onClick={() => setMainImage(image)}><ImageComponent src={image} /></ImageContainer>)
    return (
        <ImagesPreview>
            <ImageComponent>
                {loadImages}
            </ImageComponent>
        </ImagesPreview>

    );
}

export default Component;
export { Component as ImagesPreview }