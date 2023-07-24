import { React, useState, useRef, useEffect } from "react";
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Import the styles for react-date-range
import "react-date-range/dist/theme/default.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { InputAdornment, TextField } from "@mui/material";
import { KingBed, CalendarMonth, Person, Business } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./HomePage.css"; // Import the CSS file

export const HomePage = () => {
  const [showPicker, setShowPicker] = useState(false);
  const inputRef = useRef(null);
  const pickerRef = useRef(null);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Use the useTranslation hook to access translations
  const { t } = useTranslation();

  const handleDateChange = (ranges) => {
    setDateRange([ranges.selection]);
  };

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (
        inputRef.current &&
        pickerRef.current &&
        !inputRef.current.contains(event.target) &&
        !pickerRef.current.contains(event.target)
      ) {
        setShowPicker(false);
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const handleFocus = () => {
    setShowPicker(true);
  };

  const formatDate = (date) => {
    // Format the date to your desired format
    return date.toLocaleDateString();
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/bookings");
  };

  return (
    <>
      <Navbar />
      <div>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-overlay"></div>
          <Container>
            <Row>
              <Col md={4}>
                <div className="hero-content">
                  <h1>{t("heroSection.title")}</h1>
                  <p>{t("heroSection.subtitle")}</p>
                  {/* Additional content can be added */}
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Search Component */}
        <section className="search-section">
          <Container>
            <div className="search-container my-4 p-4">
              <h2>{t("searchSection.title")}</h2>
              <Form>
                <Row className="my-4">
                  <Col md={4} className="mb-2">
                    <TextField
                      fullWidth
                      type="text"
                      placeholder={t("searchSection.destinationPlaceholder")}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <KingBed />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Col>
                  <Col md={4} className="mb-2">
                    <div className="date-range-wrapper" ref={inputRef}>
                      <TextField
                        fullWidth
                        placeholder={t("searchSection.datePlaceholder")}
                        value={`${formatDate(
                          dateRange[0].startDate
                        )} - ${formatDate(dateRange[0].endDate)}`}
                        readOnly
                        onFocus={handleFocus} // Add onFocus event handler
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <CalendarMonth />
                            </InputAdornment>
                          ),
                        }}
                      />
                      {showPicker && (
                        <div className="date-range-picker" ref={pickerRef}>
                          <DateRange
                            editableDateInputs={false}
                            onChange={handleDateChange}
                            moveRangeOnFirstSelection={false}
                            ranges={dateRange}
                          />
                        </div>
                      )}
                    </div>
                  </Col>
                  <Col md={4} className="mb-2">
                    <TextField
                      type="number"
                      fullWidth
                      placeholder={t("searchSection.guestsPlaceholder")}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Col>
                </Row>
                <div className="search-button">
                  <Button variant="primary" onClick={handleSearch}>
                    <Business /> {t('searchSection.searchButton')}
                  </Button>
                </div>
              </Form>
            </div>
          </Container>
        </section>
      </div>
      <Footer/>
    </>
  );
};
