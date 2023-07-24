import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const CreditCardPaymentForm = () => {
  return (
    <Form style={{ padding: '20px', borderRadius: '5px', border: '1px solid #ccc' }}>
      <Form.Group>
        <Form.Label>Card Number</Form.Label>
        <Form.Control type="text" placeholder="4321 4321" style={{ borderRadius: '5px' }} />
      </Form.Group>

      <Form.Group as={Row}>
        <Col>
          <Form.Label>Expiry Date</Form.Label>
          <Form.Control type="text" placeholder="MM/YY" style={{ borderRadius: '5px' }} />
        </Col>
        <Col>
          <Form.Label>CVC</Form.Label>
          <Form.Control type="text" placeholder="123" style={{ borderRadius: '5px' }} />
        </Col>
      </Form.Group>

      <Form.Group>
        <Form.Label>Name on Card</Form.Label>
        <Form.Control type="text" placeholder="John Doe" style={{ borderRadius: '5px' }} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Country/Region</Form.Label>
        <Form.Control type="text" placeholder="Country/Region" style={{ borderRadius: '5px' }} />
      </Form.Group>
    </Form>
  );
};

export default CreditCardPaymentForm;