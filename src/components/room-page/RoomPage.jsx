import React from "react";
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";
import LeaveReviewSection from "../review-comments/ReviewComments.jsx";
import {
  Breadcrumb,
  Container,
  Row,
  Col,
  Button,
  Image,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Divider, Box, Typography, List, ListItem } from "@mui/material";
import {
  Star,
  Favorite,
  Share,
  LocationOn,
  AutoAwesome,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export const RoomPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/checkout");
  };

  return (
    <>
      <Navbar />
      <Container className="my-3">
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item>{t("turkey")}</Breadcrumb.Item>
              <Breadcrumb.Item>{t("istanbul")}</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>

        <Row>
          <Col md={10} className="mb-3">
            <div className="d-flex align-items-center mb-2">
              <h2 className="mb-0">
                Maple Haven Hotel Istanbul - {t("roomTierName")}
              </h2>
              <span className="ms-3">
                <Star /> <Star /> <Star /> <Star /> <Star />
              </span>
              <span className="ms-2">5 {t("starHotel")}</span>
            </div>
          </Col>
          <Col className="d-flex flex-column align-items-end">
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
              <p className="m-0">{t("pricePerNight")}</p>
            </div>
          </Col>
        </Row>

        <Row className="d-flex">
          <Col md={6}>
            <Row>
              <Col xs="auto" className="align-items-center">
                <LocationOn style={{ marginRight: "-8px" }} />
              </Col>
              <Col style={{ color: "gray" }}>
                <p style={{ marginBottom: "8px" }}>
                  {t("hotelAddress")}
                </p>
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
                      marginRight: "5px",
                    }}
                  >
                    4.7
                  </span>
                  182 {t("reviews")}
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
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
                  onClick={handleBookNow}
                >
                  {t("bookNow")}
                </button>
              </div>
            </Row>
          </Col>
        </Row>

        <Container
          className="mt-2"
          style={{ borderRadius: "20px", overflow: "hidden" }}
        >
          <Row>
            <Col md={6} className="px-0">
              <Image
                src="/assets/fernando-alvarez-rodriguez-M7GddPqJowg-unsplash.jpg"
                alt="Featured"
                className="img-fluid"
              />
            </Col>
            <Col
              md={6}
              className="d-flex flex-column justify-content-between"
              style={{ padding: "0 0 0 20px" }}
            >
              <Row>
                <Col md={6}>
                  <Image
                    src="/assets/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg"
                    alt="Image 1"
                    className="img-fluid"
                  />
                </Col>
                <Col md={6}>
                  <Image
                    src="/assets/point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash.jpg"
                    alt="Image 1"
                    className="img-fluid"
                  />
                </Col>
              </Row>
              <div className="divider" />{" "}
              {/* Custom CSS class for the dividing space */}
              <Row>
                <Col md={6}>
                  <Image
                    src="/assets/sasha-kaunas-67-sOi7mVIk-unsplash.jpg"
                    alt="Image 1"
                    className="img-fluid"
                  />
                </Col>
                <Col md={6}>
                  <Image
                    src="/assets/visualsofdana-T5pL6ciEn-I-unsplash.jpg"
                    alt="Image 1"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <hr className="my-5" />
        <div>
          {/* Horizontal Divider */}

          {/* Overview */}
          <Typography variant="h5" className="mb-2">
            <strong>Overview</strong>
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consequat, sem a finibus blandit, dolor nulla fringilla arcu, ut
            sodales ex augue vel lacus. Orci varius natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Mauris eget elit id ipsum feugiat aliquet sit amet ut justo.
          </Typography>

          {/* Horizontal Divider */}
          <Divider className="my-4" />

          {/* Customer Reviews */}
          <Box display="flex">
            <Box
              border={1}
              borderColor="green"
              p={2}
              borderRadius={3}
              width={180}
            >
              <Typography variant="h6">
                <strong>4.7</strong>
              </Typography>
              <Divider className="my-2" />
              <p style={{ color: "gray", fontSize: "14px" }}>137 Reviews</p>
            </Box>
            {["Park", "Nightlife", "Theather", "Metro"].map((item) => (
              <Box
                key={item}
                border={1}
                borderColor="teal"
                borderRadius={3}
                p={2}
                ml={2}
                width={180}
              >
                <AutoAwesome />
                <Divider className="my-2" />
                <Typography variant="h6">Near {item}</Typography>
                {/* Add keyword content here */}
              </Box>
            ))}
          </Box>

          {/* Horizontal Divider */}
          <hr className="my-5" />

          {/* Available Rooms */}
          <Typography variant="h5" className="mb-2">
            <strong>Other Available Rooms</strong>
          </Typography>
          {/* First Column */}
          <Row className="align-items-center px-0">
            <Col >
              <img
                src="/assets/point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash.jpg"
                alt="room-1"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "5px"
                }}
              />
            </Col>

            {/* Second Column */}
            <Col md={8} className="d-flex flex-grow-1">
              <p style={{ marginBottom: "0px" }}>
                Ocean View Room - 1 double bed or 2 twin beds
              </p>
            </Col>

            {/* Third Column */}
            <Col >
              <div
                className="d-flex align-items-end"
                style={{ color: "lightPink"}}
              >
                <span style={{ fontWeight: "bold", fontSize: "26px" }}>
                  $100
                </span>
                <p className="m-0">/night</p>
              </div>
            </Col>

            {/* Fourth Column */}
            <Col>
              <button
                className="btn btn-sm btn-primary px-4 py-2"
                style={{width:'120px'}}
                onClick={handleBookNow}
              >
                Book Now
              </button>
            </Col>
          </Row>
          <hr className="my-3" />
          <Row className="align-items-center px-0">
            <Col >
              <img
                src="/assets/point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash.jpg"
                alt="room-1"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "5px"
                }}
              />
            </Col>

            {/* Second Column */}
            <Col md={8} className="d-flex flex-grow-1">
              <p style={{ marginBottom: "0px" }}>
                Ocean View Room - 1 double bed or 2 twin beds
              </p>
            </Col>

            {/* Third Column */}
            <Col >
              <div
                className="d-flex align-items-end"
                style={{ color: "lightPink"}}
              >
                <span style={{ fontWeight: "bold", fontSize: "26px" }}>
                  $100
                </span>
                <p className="m-0">/night</p>
              </div>
            </Col>

            {/* Fourth Column */}
            <Col>
              <button
                className="btn btn-sm btn-primary px-4 py-2"
                style={{width:'120px'}}
                onClick={handleBookNow}
              >
                Book Now
              </button>
            </Col>
          </Row>
          <hr className="my-3" />
          <Row className="align-items-center px-0">
            <Col >
              <img
                src="/assets/point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash.jpg"
                alt="room-1"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "5px"
                }}
              />
            </Col>

            {/* Second Column */}
            <Col md={8} className="d-flex flex-grow-1">
              <p style={{ marginBottom: "0px" }}>
                Ocean View Room - 1 double bed or 2 twin beds
              </p>
            </Col>

            {/* Third Column */}
            <Col >
              <div
                className="d-flex align-items-end"
                style={{ color: "lightPink"}}
              >
                <span style={{ fontWeight: "bold", fontSize: "26px" }}>
                  $100
                </span>
                <p className="m-0">/night</p>
              </div>
            </Col>

            {/* Fourth Column */}
            <Col>
              <button
                className="btn btn-sm btn-primary px-4 py-2"
                style={{width:'120px'}}
                onClick={handleBookNow}
              >
                Book Now
              </button>
            </Col>
          </Row>
          <hr className="my-3" />
          <Row className="align-items-center px-0">
            <Col >
              <img
                src="/assets/point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash.jpg"
                alt="room-1"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "5px"
                }}
              />
            </Col>

            {/* Second Column */}
            <Col md={8} className="d-flex flex-grow-1">
              <p style={{ marginBottom: "0px" }}>
                Ocean View Room - 1 double bed or 2 twin beds
              </p>
            </Col>

            {/* Third Column */}
            <Col >
              <div
                className="d-flex align-items-end"
                style={{ color: "lightPink"}}
              >
                <span style={{ fontWeight: "bold", fontSize: "26px" }}>
                  $100
                </span>
                <p className="m-0">/night</p>
              </div>
            </Col>

            {/* Fourth Column */}
            <Col>
              <button
                className="btn btn-sm btn-primary px-4 py-2"
                style={{width:'120px'}}
                onClick={handleBookNow}
              >
                Book Now
              </button>
            </Col>
          </Row>
          <hr className="my-3" />
          <Divider className="mb-4"/>
          <LeaveReviewSection />
        </div>
      </Container>
      <Footer />
    </>
  );
};
