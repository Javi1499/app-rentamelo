import React from 'react';
import { Col, Row, Toast } from 'react-bootstrap';
const Toast = ({titulo, mensaje}) => {
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);
    return ( 
        <Row>
      <Col xs={6}>
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{titulo}</strong>
          </Toast.Header>
          <Toast.Body>{mensaje}</Toast.Body>
        </Toast>
      </Col>
    </Row>
     );
}
 
export default Toast;