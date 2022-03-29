import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Header.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container className="Footer">
      <Row className="py-4">
        <Col md={6}>
          <p>&copy; Unisolve {new Date().getFullYear()}</p>
        </Col>
        <Col md={6} className="text-right my-auto">
          <p className="p-0 my-auto">
            <span className="my-auto">&reg;</span> All rights reserved
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
