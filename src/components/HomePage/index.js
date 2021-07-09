import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import HappeningNow from './HappeningNow';
import LogoBackground from './LogoBackground';

import '../../styles/scss/main.scss';

const HomePage = () => {
  return (
    <Container fluid className="p-0">
      <Row className="no-gutters">
        <Col
          sm={12}
          lg={8}
          xl={5}
          className="order-lg-last d-flex align-items-center justify-content-center"
        >
          <HappeningNow />
        </Col>
        <Col sm={12} lg={4} xl={7} className="order-lg-first ">
          <LogoBackground />
        </Col>
      </Row>
      <Row className="m-3">
        <Footer />
      </Row>
    </Container>
  );
};

export default HomePage;
