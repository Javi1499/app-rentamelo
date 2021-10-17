import React from 'react';
import { Button } from "components";
import { RentDetails, Section, Span, ButtonContainer, Date } from './styled';
const Component = ({ rentDetails: { status, startDate, endDate, idStatus }, dataLessor: { firstName, lastName, viewAs }, rentStart }) => {
    const isWaitingConfirmation = idStatus === 6;
    const rentInProgress = idStatus === 5;
    if (viewAs) return (
        <RentDetails idStatus={idStatus}>
            <Section><Span>Estatus: </Span>{status}</Section>
            <Section><Span>Fecha de renta: </Span>
                <Date>Inicio: {startDate}</Date>
                <Date>Fin: {endDate}</Date>
            </Section>
            <Section><Span>{"Arrendatario"}: </Span>{`${firstName} ${lastName}`}</Section>

            {rentInProgress && <ButtonContainer isInProgress={false} >
                <Button children={`Finalizar renta`} onClick={rentStart} />
            </ButtonContainer>}

        </RentDetails>
    );

    return (
        <RentDetails idStatus={idStatus}>
            <Section><Span>Estatus: </Span>{status}</Section>
            <Section><Span>Fecha de renta: </Span>
                <Date>Inicio: {startDate}</Date>
                <Date>Fin: {endDate}</Date>
            </Section>
            <Section><Span>{"Arrendador"}: </Span>{`${firstName} ${lastName}`}</Section>

            {isWaitingConfirmation && <ButtonContainer isInProgress={isWaitingConfirmation} >
                <Button children={`Iniciar renta`} onClick={rentStart} />
            </ButtonContainer>}

        </RentDetails>
    );

}

export default Component;
export { Component as RentDetailsCard }