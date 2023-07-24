import React from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import { Star } from '@mui/icons-material';

const Review = ({ name, rating, comment, imageUrl }) => {
  return (
    <>
      <Row className=" justify-content-start mb-3">
        <Col xs="auto">
          <Image src={imageUrl} alt="Reviewer" roundedCircle className='img-fluid' style={{height:"80px", width:"80px", objectFit:"cover"}} />
        </Col>
        <Col xs={10}>
          <Row>
            <Col xs="auto">
              <div className="d-flex align-items-center">
                <Star /> {rating}
              </div>
            </Col>
            <Col xs={8}>
              <p>{name}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>{comment}</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr className="mb-3" />
    </>
  );
};

const LeaveReviewSection = () => {
  const reviews = [
    {
      name: 'John Doe',
      rating: 5,
      comment: 'Great experience! Loved the room and the service.',
      imageUrl: '/assets/microsoft-365-7mBictB_urk-unsplash.jpg',
    },
    {
      name: 'Jane Smith',
      rating: 4,
      comment: 'Comfortable stay, but the breakfast could be better.',
      imageUrl: '/assets/craig-mckay-jmURdhtm7Ng-unsplash.jpg',
    },
    // Add more reviews as needed
  ];

  return (
    <Container className='p-0'>
      <h2>Reviews</h2>
      {reviews.map((review, index) => (
        <Review key={index} {...review} />
      ))}
      <h2>Submit a Review</h2>
      <Form>
        <Form.Group as={Row} className='mb-3'>
          <Form.Group as={Col} md={4} controlId="rating">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" min={1} max={5} />
          </Form.Group>
          <Form.Group as={Col} md={8} controlId="comment">
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows={1} />
          </Form.Group>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LeaveReviewSection;
