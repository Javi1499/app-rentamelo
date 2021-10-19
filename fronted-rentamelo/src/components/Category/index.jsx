import { ImageComponent } from 'components';
import React from 'react';
import { ImageCategory, Category, Name } from './styled';
const Component = ({ src, name, idCategory }) => {
    return (
        <Category>
            <ImageCategory onClick={() => window.location.href = `/productos/categoria/${idCategory}`}>
                <ImageComponent src={src} />
            </ImageCategory>
            <Name onClick={() => window.location.href = `/productos/categoria/${idCategory}`}>{name}</Name>
        </Category>
    );
}

export default Component;
export { Component as Category }