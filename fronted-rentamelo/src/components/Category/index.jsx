import { ImageComponent } from 'components';
import React from 'react';
import { ImageCategory, Category, Name } from './styled';
const Component = ({ src, name, category }) => {
    return (
        <Category>
            <ImageCategory onClick={() => window.location.href = `/producto/categoria-${category}`}>
                <ImageComponent src={src} />
            </ImageCategory>
            <Name>{name}</Name>
        </Category>
    );
}

export default Component;
export { Component as Category }