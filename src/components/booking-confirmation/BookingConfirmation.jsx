import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ConfirmationPage = ({ bookingDetails }) => {
  const { customerName, checkInDate, checkOutDate, checkInTime, checkOutTime, hotelName, roomType } = bookingDetails;

  return (
    <Container style={{ marginTop: '20px' }}>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Confirmation Details</Card.Title>
              <Card.Text>
                <strong>Customer Name:</strong> {customerName}
                <br />
                <strong>Hotel Name:</strong> {hotelName}
                <br />
                <strong>Room Type:</strong> {roomType}
                <br />
                <strong>Check-In Date:</strong> {checkInDate}
                <br />
                <strong>Check-In Time:</strong> {checkInTime}
                <br />
                <strong>Check-Out Date:</strong> {checkOutDate}
                <br />
                <strong>Check-Out Time:</strong> {checkOutTime}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ConfirmationPage;