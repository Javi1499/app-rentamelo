import React from 'react';
import { ImageComponent } from 'components';
import { Profile, ImageContainer, Section, Span, InformationContainer, Wrapper, NameImage, ButtonContainer } from './styled';
import Button from 'components/Button';
const Component = ({ userData: { firstName, lastName, phoneNumber, email } }) => {


    const createImageName = (firstName, lastName) => {
        const arrayFirstName = firstName.split('');
        const arrayLastName = lastName.split('');
        return (` ${arrayFirstName[0]}${arrayLastName[0]}`.toUpperCase())
    }
    return (
        <Wrapper>
            <Profile>
                <ImageContainer>
                    <NameImage>{createImageName(firstName, lastName)}</NameImage>
                </ImageContainer>
                <InformationContainer>
                    <Section><Span>Nombre: </Span> {firstName}</Section>
                    <Section><Span>Apellido: </Span>{lastName}</Section>
                    <Section><Span>Teléfono: </Span>{phoneNumber}</Section>
                    <Section><Span>Email: </Span>{email}</Section>
                </InformationContainer>
                <ButtonContainer>
                    <Button children={"Editar información"} />
                </ButtonContainer>

            </Profile>
        </Wrapper>
    );
}

export default Component;
export { Component as Profile }