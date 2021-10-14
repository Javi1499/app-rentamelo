import React from 'react';
import { Alert} from 'react-bootstrap';


const AlertC = ({mensaje, variante}) => {
    return (
        <Alert variant={variante} >
            {mensaje}
        </Alert>
    );
}

export default AlertC;