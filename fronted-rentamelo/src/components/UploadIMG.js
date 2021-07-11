import React from 'react';
import { Form } from 'react-bootstrap';

const UploadIMG = ({actualizarStateImg}) => {
    return <Form.Group>
        <Form.Label>Sube una imagen de tu producto</Form.Label>
        <Form.File label="Coloca un archivo .jpg, .png" name="file" onChange={actualizarStateImg}/>
    </Form.Group>
}
export default UploadIMG;