import { Container, Row, Col, Image } from "react-bootstrap";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer__top}>
      <Container>
        <Row>
          <Col md={4} lg={4} className={style.footer__about}>
            <Image
              src="/static/images/logo-navbar-white.png"
              className={style.footer__logo}
            />
            <p>
              We are a young company always looking for new and creative ideas
              to help you with our products in your everyday work.
            </p>
            <p>
              <a href="*">Our Team</a>
            </p>
          </Col>
          <Col
            md={4}
            lg={4}
            className={`${`offset-lg-1`} ${style.footer__contact}`}
          >
            <h3>Contact</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> Puri Gading, Jl. Merak
              No.34
            </p>
            <p>
              <i className="fas fa-phone"></i> Phone: (0361) 144 527 93
            </p>
            <p>
              <i className="fas fa-envelope"></i> Email:{" "}
              <a href="mailto:support@automatch.com">support@automatch.com</a>
            </p>
          </Col>
          <Col md={4} lg={3} className={style.footer__social}>
            <h3>Follow us</h3>
            <p>
              <a href="*">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="*">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="*">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="*">
                <i className="fab fa-instagram"></i>
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
