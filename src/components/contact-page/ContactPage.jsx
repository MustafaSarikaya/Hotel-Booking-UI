import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { LocationOn } from '@mui/icons-material'
import { Divider } from '@mui/material'

export const ContactPage = () => {
  return (
    <>
    <Navbar/>
    <Container className='my-3'>
      <Row className='d-flex align-items-center'>
        <Col md={6} >
          <img src='/assets/eddi-aguirre-ZAVHbpOn4Jk-unsplash.jpg' alt="Left Column Image" className='img-fluid' />
        </Col>
        <Col md={6}>
          <h2>Contact Us</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email address" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
            </Form.Group>

            <Button variant="primary" type="submit" className='my-3'>Submit</Button>
          </Form>
        </Col>
      </Row>
      <hr className="mb-3" />
      <Row>
        <Col>
          <div style={{ position: 'relative', marginTop: '20px' }}>
          <h4>Location/Map</h4>
          <Divider className='mb-3' />
            <img src="/assets/Rectangle 19.png" alt="Map" style={{ width: '100%' }} />
          </div>
        </Col>
      </Row>
      <Row>
              <Col xs="auto" className="align-items-center">
                <LocationOn style={{ marginRight: "-8px" }} />
              </Col>
              <Col style={{ color: "gray" }}>
                <p style={{ marginBottom: "8px" }}>
                  Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                </p>
              </Col>
            </Row>
    </Container>
    <Footer/>
    </>
  )
}
