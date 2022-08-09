import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='Footer' style={{ backgroundColor: "#fff" }}>
      <Container>
        <Row className='py-5'>
          <Col md={6}>
            <p className='p-0 my-auto'>
              &copy; Unisolve {new Date().getFullYear()}
            </p>
          </Col>
          <Col md={6} className='text-right my-auto'>
            <p className='p-0 my-auto'>
              <span className='my-auto'>&reg;</span> All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
