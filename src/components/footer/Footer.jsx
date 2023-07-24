import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Home,
  Info,
  ContactMail,
  Code,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer
          style={{
            backgroundColor: "#f8f9fa",
            padding: "20px 0",
            marginTop: "20px",
          }}
        >
          <Container>
            <Row>
              <Col md={6}>
                <h4>{t("footer.followUs")}</h4>
                <div>
                  <a
                    href="https://www.facebook.com/your_page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook
                      fontSize="large"
                      style={{ marginRight: "10px", color: "#3b5998" }}
                    />
                  </a>
                  <a
                    href="https://www.twitter.com/your_page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter
                      fontSize="large"
                      style={{ marginRight: "10px", color: "#1da1f2" }}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/your_page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram
                      fontSize="large"
                      style={{ marginRight: "10px", color: "#c13584" }}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/your_page"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn
                      fontSize="large"
                      style={{ marginRight: "10px", color: "#0077b5" }}
                    />
                  </a>
                </div>
              </Col>
              <Col md={6}>
                <h4>{t("footer.siteMap")}</h4>
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <li>
                    <Home fontSize="small" /> {t("footer.home")}
                  </li>
                  <li>
                    <Info fontSize="small" /> {t("footer.aboutUs")}
                  </li>
                  <li>
                    <ContactMail fontSize="small" /> {t("footer.contact")}
                  </li>
                  <li>
                    <Code fontSize="small" /> {t("footer.services")}
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </footer>
      );
    };
    
    export default Footer;
