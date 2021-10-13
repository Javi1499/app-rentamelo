import { ImageComponent } from 'components';
import React from 'react';
import { ProductDetails, ImageContainer, Title, RentDays, Description, Span } from './styled';
const Component = ({ dataProduct: { img1, name, description }, rentDays }) => {
    return (
        <ProductDetails>
            <ImageContainer>
                <ImageComponent src={img1} />
            </ImageContainer>
            <Title>{name}</Title>
            <Description>
                {description}
            </Description>
            <RentDays><Span>Días de renta: </Span>{rentDays}</RentDays>
        </ProductDetails>

    );
}

export default Component;
export { Component as ProductDetailsCard }