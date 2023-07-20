import React from "react";
import Navbar from "../navbar/Navbar.jsx";
import {
  Breadcrumb,
  Container,
  Row,
  Col,
  Button,
  Image,
} from "react-bootstrap";
import { Star, Favorite, Share, LocationOn } from "@mui/icons-material";

export const RoomPage = () => {
  return (
    <>
      <Navbar />
      <Container className="my-3">
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item>Turkey</Breadcrumb.Item>
              <Breadcrumb.Item>Istanbul</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>

        <Row>
          <Col md={8}>
            <div className="d-flex align-items-center mb-2">
              <h2 className="mb-0">Urban Boutique - Executive Suite</h2>
              <span className="ms-3">
                <Star /> <Star /> <Star /> <Star /> <Star />
              </span>
              <span className="ms-2">5 Star Hotel</span>
            </div>
          </Col>
          <Col md={4} className="d-flex flex-column align-items-end">
            <div
              className="d-flex align-items-end"
              style={{ color: "lightPink" }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "32px",
                }}
              >
                $100
              </span>
              <p className="m-0">/night</p>
            </div>
          </Col>
        </Row>

        <Row className="d-flex">
            <Col md={8}>
          <Row >
            <Col xs="auto" className="align-items-center">
              <LocationOn style={{ marginRight: "-8px" }} />
            </Col>
            <Col style={{ color: "gray"}} >
              <p style={{ marginBottom: "8px"}}>Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <span
                  style={{
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    padding: "6px 10px",
                    marginRight: "5px"
                  }}
                >
                  4.7
                </span>
                182 Reviews
              </p>
            </Col>
          </Row>
          </Col>
          <Col md={4} >
          <Row>
          <div className="d-flex justify-content-end my-2">
                <button
                  className="btn btn-sm btn-outline-primary px-3"
                  style={{ marginRight: "8px" }}
                >
                  <Favorite />
                </button>
                <button
                  className="btn btn-sm btn-outline-primary px-3"
                  style={{ marginRight: "8px" }}
                >
                  <Share />
                </button>
                <button
                  className="btn btn-sm btn-primary p-3 px-5"
                >
                  Book Now
                </button>
              </div>
          </Row>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <img src="../../assets/fernando-alvarez-rodriguez-M7GddPqJowg-unsplash.jpg" alt="Featured" />
          </Col>
          <Col md={6}>
            <Row>
              <Col md={6}>
                <img src="image1.jpg" alt="Image 1" />
              </Col>
              <Col md={6}>
                <img src="image2.jpg" alt="Image 2" />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <img src="image3.jpg" alt="Image 3" />
              </Col>
              <Col md={6}>
                <img src="image4.jpg" alt="Image 4" />
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />

        <Row>
          <Col>
            <h2>Overview</h2>
            <p>Description of the room...</p>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col>
            <h2>Customer Reviews</h2>
            <div className="review-box">{/* Display customer reviews */}</div>
            <div className="keyword-box">
              {/* Display most mentioned keywords */}
            </div>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col>
            <h2>Available Rooms of This Hotel</h2>
            <ul className="room-list">
              <li>
                <Image src="featured-image.jpg" alt="Featured" thumbnail />
                <span>Room Title</span>
                <span className="float-end">$100 per night</span>
                <Button variant="primary">Book Now</Button>
              </li>
              {/* Add more list items for other available rooms */}
            </ul>
          </Col>
        </Row>
      </Container>

      <img src={require("../../room-listing.png")} alt="b" width="1600px" />
    </>
  );
};
