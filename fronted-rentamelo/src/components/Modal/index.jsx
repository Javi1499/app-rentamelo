import React from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, IncrementDecrement } from 'components';
import { Background, ModalContainer, Label, SelectContainer, ButtonContainer, Icon, Text } from './styled';

const Component = ({ valueSelect, setValueSelect, event, showModal }) => {

    return (
        <Background>
            <ModalContainer>
                <Icon onClick={showModal}>
                    <FontAwesomeIcon icon={faTimes} />
                </Icon>

                <Label>
                    ¿Cuántos días quieres rentar el producto?
                </Label>
                <SelectContainer>
                    <IncrementDecrement valueSelect={valueSelect} setValueSelect={setValueSelect} limit={valueSelect + 1} />
                </SelectContainer>

                <ButtonContainer>
                    <Button children={"Realizar renta"} onClick={event} />
                </ButtonContainer>
                <Text>Recuerda que el tiempo de renta comienza una vez recibas el producto</Text>
            </ModalContainer>
        </Background>
    );
}

export default Component;
export { Component as Modal }