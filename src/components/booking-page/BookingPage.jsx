import { React, useEffect, useState, useRef } from "react";
import Navbar from "../navbar/Navbar";
import { InputAdornment, TextField } from "@mui/material";
import { KingBed, CalendarMonth, Person, Search } from "@mui/icons-material";
import { DateRange } from "react-date-range";
import { Container, Row, Col, Form, Button, Pagination } from "react-bootstrap";
import FilterPanel from "../filter-panel/FilterPanel";
import HotelRoomCard from "../hotel-room-card/HotelRoomCard";
import "./BookingPage.css"; // Import the CSS file
import { rooms } from "../../placeholderData.jsx";

export const BookingPage = () => {
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

  const roomsPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * roomsPerPage;
  const endIndex = startIndex + roomsPerPage;
  const displayedRooms = rooms.slice(startIndex, endIndex);

  const totalPages = Math.ceil(rooms.length / roomsPerPage);

  // Generate an array of page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <div>
        {/* Search Component */}
        <section className="search-bar">
          <Container>
            <div className="search-container my-4 px-3">
              <Form>
                <Row className="my-2">
                  <Col md={4} className="mb-2">
                    <TextField
                      fullWidth
                      type="text"
                      placeholder="Enter your destination"
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
                        placeholder="Check-in and Check-out dates"
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
                  <Col md={3} className="mb-2">
                    <TextField
                      fullWidth
                      type="number"
                      placeholder="Number of guests"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Col>
                  <Col md={1} className="d-flex mb-2">
                    <Button variant="primary">
                      <Search />
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Container>
        </section>
      </div>

      <body>
        <Container>
          <Row>
            <Col md={4}>
              <FilterPanel />
            </Col>
            <Col md={8}>
              {displayedRooms.map((room, index) => (
                <HotelRoomCard key={index} room={room} />
              ))}
              <Pagination style={{ display: "flex", justifyContent: "center" }}>
                {pageNumbers.map((number) => (
                  <Pagination.Item
                    key={number}
                    active={number === currentPage}
                    onClick={() => handlePageChange(number)}
                  >
                    {number}
                  </Pagination.Item>
                ))}
              </Pagination>
            </Col>
          </Row>
        </Container>
      </body>
      <img src={require("../../Hotel-Listing.png")} alt="b" width="1600px" />
    </>
  );
};
