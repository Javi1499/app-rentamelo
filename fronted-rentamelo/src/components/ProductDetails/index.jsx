import React from 'react';
import { ProductDetails, Title, Description, Price, Location, DeliveryTime, Label, Text } from './styled';
const Component = ({ dataProduct: { name, description, price, location, deliveryTime } }) => {
    return (
        <ProductDetails>
            <Title>{name}</Title>
            <Description>
                <Label>Descripción</Label>
                <Text>{description}</Text>
            </Description>
            <Price>
                <Text>${price} <span>por día de renta</span></Text>
            </Price>
            <Location>
                <Label>Ubicación</Label>
                <Text>{location}</Text>
            </Location>
            <DeliveryTime>
                <Label>Tiempo de entrega</Label>
                <Text>{deliveryTime}</Text>
            </DeliveryTime>
        </ProductDetails>
    );
}

export default Component;
export { Component as ProductDetails }