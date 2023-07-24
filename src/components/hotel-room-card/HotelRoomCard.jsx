import {
  FreeBreakfast,
  LocationOn,
  Star,
  StarOutline,
  Favorite,
} from "@mui/icons-material";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HotelRoomCard = ({ room }) => {
  const {
    hotelName,
    roomTierName,
    price,
    address,
    luxuryRating,
    amenities,
    averageRating,
    numReviews,
  } = room;

  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleViewPlace = () => {
    navigate("/room");
  };

  const renderLuxuryRating = () => {
    const filledStars = luxuryRating;
    const outlinedStars = 5 - luxuryRating;

    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <Star key={`filled-star-${i}`} style={{ fontSize: "18px" }} />
      );
    }

    for (let i = 0; i < outlinedStars; i++) {
      stars.push(
        <StarOutline key={`outlined-star-${i}`} style={{ fontSize: "18px" }} />
      );
    }

    return stars;
  };

  return (
    <Card className="my-4" style={{ borderRadius: "10px", boxShadow: "0px 4px 5px 2px rgba(0, 0, 0, 0.2)" }}>
      <Row>
        <Col md={5} style={{height:"300px"}}>
          <Card.Img
            src={room.image}
            style={{ objectFit: "cover", height: "100%" }}
          />
        </Col>
        <Col md={7}>
          <Card.Body>
            <Container className="p-0">
              <Row className="mt-2">
                <Col md={8}>
                  <Card.Subtitle
                    className="my-2"
                    style={{ fontSize: "24px" }}
                  >{`${hotelName} - ${roomTierName}`}</Card.Subtitle>
                </Col>
                <Col md={4}>
                  <Card.Text className="my-2" style={{ color: "lightPink" }}>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "24px",
                      }}
                    >
                      ${price}
                    </span>
                    /{t("hotelRoomCard.night")}
                  </Card.Text>
                </Col>
              </Row>
              <Card.Text className="my-2">
                <LocationOn />
                {address}
              </Card.Text>
              <Row className="mb-2">
                <Col md={7}>
                  <Card.Text style={{ fontSize: "14px" }}>
                    {renderLuxuryRating()} {luxuryRating} {t("hotelRoomCard.stars")} {t("hotelRoomCard.hotel")}
                  </Card.Text>
                </Col>
                <Col md={5}>
                  <Card.Text style={{ fontSize: "14px" }}>
                    <FreeBreakfast style={{ fontSize: "18px" }} />
                    <strong>{amenities}+ </strong> {t("hotelRoomCard.amenities")}
                  </Card.Text>
                </Col>
              </Row>
              <Card.Text>
                <span
                  style={{
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    padding: "2px 5px",
                  }}
                >
                  {" "}
                  {averageRating}
                </span>{" "}
                {numReviews} {t("hotelRoomCard.reviews")}
              </Card.Text>
              <hr />
              <div className="d-flex justify-content-between mb-2">
                <button
                  className="btn btn-sm btn-outline-primary py-2"
                  style={{ marginRight: "8px" }}
                >
                  <Favorite />
                </button>
                <button
                  className="btn btn-sm btn-primary py-2 flex-grow-1"
                  onClick={handleViewPlace}
                >
                  {t("hotelRoomCard.viewPlace")}
                </button>
              </div>
            </Container>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default HotelRoomCard;
