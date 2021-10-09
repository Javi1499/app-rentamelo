import React from 'react';
import { LessorInfo, Title, Information } from './styled';
const Component = ({ dataLessor: { firstName, lastName } }) => {
    return (
        <LessorInfo>
            <Title>
                Datos del arrendador
            </Title>
            <Information>
                Nombre: {`${firstName} ${lastName}`}
            </Information>
        </LessorInfo>
    );
}

export default Component;
export { Component as LessorInfo }