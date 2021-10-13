import React from 'react';
import { Button } from "components";
import { RentDetails, Section, Span, ButtonContainer, Date } from './styled';
const Component = ({ rentDetails: { status, startDate, endDate }, dataLessor: { firstName, lastName }, rentStart }) => {
    return (
        <RentDetails>
            <Section><Span>Estatus: </Span>{status}</Section>
            <Section><Span>Fecha de renta: </Span>
                <Date>Inicio: {startDate}</Date>
                <Date>Fin: {endDate}</Date>
            </Section>
            <Section><Span>Arrendador: </Span>{`${firstName} ${lastName}`}</Section>
            <ButtonContainer>
                <Button children={"Iniciar renta"} onClick={rentStart} />
            </ButtonContainer>
        </RentDetails>
    );
}

export default Component;
export { Component as RentDetailsCard }