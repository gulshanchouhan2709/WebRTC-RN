import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { base } from 'config';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid>
          <Row>
            <Col sm={6}>
              {new Date().getFullYear()} © {base?.SITE_NAME || ''}
            </Col>
            <Col sm={6}>
              <div className="text-sm-end d-none d-sm-block"></div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
