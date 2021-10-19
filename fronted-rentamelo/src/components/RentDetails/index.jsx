import React from 'react';
import { ImageComponent, Button } from 'components';
import { RentDetails, Title, Section, Span, ImageContainer, ButtonContainer, Details, Wrapper, Anchor } from './styled';
const Component = ({ dataProduct: { name, description, price, deliveryTime, location, img1 }, dataLessor: { firstName, lastName }, rentDetails, onClick }) => {
    return (
        <Wrapper>
            <RentDetails>
                <Title>Verifica que la informacion de renta sea correcta</Title>
                <Details>
                    <Section><Span>Producto: </Span> {name}</Section>
                    <Section><Span>Description: </Span>{description}</Section>
                    <Section><Span>Precio por día: </Span>{price}</Section>
                    <Section><Span>Tiempo aprox. de entrega: </Span>{deliveryTime}</Section>
                    <Section><Span>Arrendador:</Span>{`${firstName}  ${lastName}`}</Section>
                    <Section><Span>Días de renta:</Span>{`${rentDetails} día(s)`}</Section>
                </Details>
                <ImageContainer>
                    <ImageComponent src={img1} />
                </ImageContainer>
                <ButtonContainer>
                    <Button children={"Confirmar renta"} onClick={onClick} />
                </ButtonContainer>
                <Anchor onClick={() => window.history.back()}>Regresar</Anchor>
            </RentDetails>
        </Wrapper>
    );
}

export default Component;
export { Component as RentDetails }