import { React, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import CreditCardPaymentForm from "../payment-form/CreditCardPaymentForm";
import ConfirmationPage from "../booking-confirmation/BookingConfirmation";
import {
  ArrowForward,
  ConfirmationNumber,
  DoneAll,
  Payment,
  LocationOn,
  Apartment,
  East,
  West,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import "./CheckoutPage.css";

export const CheckoutPage = () => {
  const bookingDetails = {
    customerName: "John Doe",
    checkInDate: "2023-12-9",
    checkOutDate: "2023-12-12",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    hotelName: "Maple Haven Hotel Istanbul",
    roomType: "Executive Suite",
  };

  const [currentSection, setCurrentSection] = useState("booking"); // Initialize with the booking section

  //handle navigation to the next section
  const handleNext = () => {
    if (currentSection === "booking") {
      setCurrentSection("payment");
    } else if (currentSection === "payment") {
      setCurrentSection("confirmation");
    }
  };

  //handle navigation back to the previous section
  const handleBack = () => {
    if (currentSection === "payment") {
      setCurrentSection("booking");
    } else if (currentSection === "confirmation") {
      setCurrentSection("payment");
    }
  };

  const navigate = useNavigate();

  //handle navigation to the home screen
  const handleDone = () => {
    navigate("/");
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbar />
      <h1 className="text-center my-5">Checkout</h1>
      <Container className="my-3">
        {/* Progress Bar */}
        <Row className="shadowed-container d-flex justify-content-center mb-5">
          <Col className="d-flex flex-column align-items-center">
            <ConfirmationNumber
              fontSize="large"
              style={{ color: currentSection === "booking" ? "lightgreen" : "gray" }}
            />
            <h6>Booking Info</h6>
          </Col>
          <Col className="d-flex justify-content-center">
            <ArrowForward fontSize="large" style={{ color: "lightgreen" }} />
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <Payment fontSize="large" style={{ color: currentSection === "payment" ? "lightgreen" : "gray" }} />
            <h6>Payment</h6>
          </Col>
          <Col className="d-flex justify-content-center">
            <ArrowForward fontSize="large" style={{ color: "lightgreen" }} />
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <DoneAll fontSize="large" style={{ color: currentSection === "confirmation" ? "lightgreen" : "gray" }} />
            <h6>Confirmation</h6>
          </Col>
        </Row>

        {/* Booking Info */}
        {currentSection === "booking" && (
          <Row>
            <Col md={8} className="d-flex">
              <Row className="shadowed-container d-flex justify-content-center">
                <Row className="mb-2">
                  <Col>
                    <h4 style={{ marginBottom: "0px" }}>
                      Ocean View Room - 1 double bed or 2 twin beds
                    </h4>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <div
                      className="d-flex align-items-end"
                      style={{ color: "lightPink", marginRight: "10px" }}
                    >
                      <span style={{ fontWeight: "bold", fontSize: "26px" }}>
                        $100
                      </span>
                      <p className="m-0">/night</p>
                    </div>
                  </Col>
                </Row>
                <hr className="mb-3" />
                <Row className="d-flex  align-items-center">
                  <Col className="d-flex p-0">
                    <img
                      src="%PUBLIC_URL%/assets/point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash.jpg"
                      alt="room-1"
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "5px",
                        margin: "20px",
                      }}
                    />
                    <Row>
                      <div className="d-flex align-items-end mb-2">
                        <h5 style={{ marginBottom: "0px" }}>
                          Maple Haven Hotel Istanbul
                        </h5>
                      </div>
                      <Col className="d-flex ">
                        <div>
                          <LocationOn fontSize="small" color="black" />
                        </div>
                        <div>
                          <p style={{ marginBottom: "0px" }}>
                            Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <hr className="mb-3" />
                <Row className="d-flex justify-content-center">
                  <Col>
                    <h4 style={{ marginBottom: "10px" }}>Thursday, Dec 8</h4>
                    <div style={{ color: "gray" }}>
                      <h6>Check-in</h6>
                    </div>
                  </Col>
                  <Col
                    md={6}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <West fontSize="large" />
                    <Apartment style={{ fontSize: "70px" }} />
                    <East fontSize="large" />
                  </Col>
                  <Col className="d-flex flex-column justify-content-end">
                    <h4 style={{ marginBottom: "10px", textAlign: "right" }}>
                      Friday, Dec 1
                    </h4>
                    <div style={{ color: "gray", textAlign: "right" }}>
                      <h6>Check-out</h6>
                    </div>
                  </Col>
                </Row>
              </Row>
            </Col>
            <Col style={{ marginLeft: "40px" }}>
              <Row className="shadowed-container d-flex justify-content-start">
                <Col className="d-flex p-0">
                  <img
                    src="public/assets/point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash.jpg"
                    alt="room-1"
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                      borderRadius: "5px",
                      margin: "20px",
                    }}
                  />
                  <Row className="mb-2 align-items-center">
                    <Col>
                      <p style={{ marginBottom: "0px", color: "gray" }}>
                        Maple Haven Hotel Istanbul
                      </p>
                      <h6 style={{ marginBottom: "0px" }}>
                        Ocean View Room - 1 double bed or 2 twin beds
                      </h6>
                    </Col>
                  </Row>
                </Col>
                <hr className="mb-3" />
                <Col className="d-flex flex-column px-2">
                  <h5>
                    <strong>Price Details</strong>
                  </h5>
                  <hr />
                  <Row className="d-flex flex-row justify-content-between">
                    <Col xs="auto">
                      <h6>
                        <strong>Base Fare</strong>
                      </h6>
                    </Col>
                    <Col xs="auto">
                      <h6>$350</h6>
                    </Col>
                  </Row>
                  <Row className="d-flex flex-row justify-content-between">
                    <Col xs="auto">
                      <h6>
                        <strong>Discount</strong>
                      </h6>
                    </Col>
                    <Col xs="auto">
                      <h6>$0</h6>
                    </Col>
                  </Row>
                  <Row className="d-flex flex-row justify-content-between">
                    <Col xs="auto">
                      <h6>
                        <strong>Tax</strong>
                      </h6>
                    </Col>
                    <Col xs="auto">
                      <h6>$35</h6>
                    </Col>
                  </Row>
                  <Row className="d-flex flex-row justify-content-between">
                    <Col xs="auto">
                      <h6>
                        <strong>Service Fee</strong>
                      </h6>
                    </Col>
                    <Col xs="auto">
                      <h6>$15</h6>
                    </Col>
                  </Row>
                  <hr />
                  <Row className="d-flex flex-row justify-content-between">
                    <Col xs="auto">
                      <h6>
                        <strong>Total</strong>
                      </h6>
                    </Col>
                    <Col xs="auto">
                      <h6>$400</h6>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Row className="d-flex justify-content-center my-5">
              <Col>
                <btn className="btn btn-md btn-outline-primary px-3" onClick={handleCancel}>
                  Cancel
                </btn>
              </Col>
              <Col className="d-flex justify-content-end">
                <btn
                  className="btn btn-md btn-primary px-3"
                  onClick={handleNext}
                >
                  Next
                </btn>
              </Col>
            </Row>
          </Row>
        )}

        {/* Payment Info */}
        {currentSection === "payment" && (
          <Col>
            <Row className="shadowed-container d-flex justify-content-start">
              <h1>Payment Details</h1>
              <CreditCardPaymentForm />
            </Row>
            <Row className="d-flex justify-content-center my-5">
              <Col>
                <btn
                  className="btn btn-md btn-outline-primary px-3"
                  onClick={handleBack}
                >
                  Back
                </btn>
              </Col>
              <Col className="d-flex justify-content-end">
                <btn
                  className="btn btn-md btn-primary px-3"
                  onClick={handleNext}
                >
                  Submit
                </btn>
              </Col>
            </Row>
          </Col>
        )}

        {/* Payment Info */}
        {currentSection === "confirmation" && (
          <Col>
          <Row className="shadowed-container d-flex justify-content-start">
            <h1>Booking Confirmation</h1>
            <ConfirmationPage bookingDetails={bookingDetails} />
          </Row>
          <Row className="d-flex justify-content-center my-5">
              <Col>
                <btn
                  className="btn btn-md btn-outline-primary px-3"
                  onClick={handleBack}
                >
                  Back
                </btn>
              </Col>
              <Col className="d-flex justify-content-end">
                <btn
                  className="btn btn-md btn-primary px-3"
                  onClick={handleDone}
                >
                  Done
                </btn>
              </Col>
            </Row>
          </Col>
        )}
      </Container>
      <Footer />
    </>
  );
};
