import React from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "components";
import { Alert, Information, ButtonContainer, Icon } from './styled';
const Component = ({ information, onClick, setShowAlert }) => {

    return (
        <Alert>
            <Icon onClick={() => setShowAlert(false)}>
                <FontAwesomeIcon icon={faTimes} />
            </Icon>
            <Information>{information}</Information>
            <ButtonContainer>
                <Button children={"Aceptar"} onClick={onClick} />
            </ButtonContainer>
        </Alert>
    );
}

export default Component;
export { Component as Alert }