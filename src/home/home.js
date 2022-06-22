import { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import "./home.scss";
import { Button } from "../stories/Button";
import HowOne from "../media/home/how-1.png";
import HowTwo from "../media/home/how-2.png";
import HowThree from "../media/home/how-3.png";

const Home = () => {
  return (
    <div className='home-main'>
      <section className='header'>
        <div className='home-banner'>
          <Container>
            <Row className='justify-content-between  pt-5'>
              <Col md={4} className='my-auto'>
                <h2>Unisolve</h2>
              </Col>
              <Col md={6} className='text-right '>
                <Button label='Login' btnClass='primary mx-5' size='small' />
                <Button label='Sign up now' btnClass='primary ' size='small' />
              </Col>
            </Row>
            <Row className='h-100'>
              <Col md={5} className='center'>
                <h1>
                  Transforming schools into places of <span>Creativity</span>{" "}
                  and <span>Innovation</span>
                </h1>
                <p>
                  We want to make problem solving an essential part of a
                  student's education experience.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className='how-works'>
        <Container className='text-center'>
          <h2>How Unisolve Works</h2>
          <Row>
            <Col md={4}>
              <figure>
                <img src={HowOne} alt='How Unisolve Works' />
              </figure>
              <h3>find and &#38; Give Idea</h3>
              <p>We present you a proposal and discuss niffty-gritty like</p>
            </Col>
            <Col md={4}>
              <figure>
                <img src={HowTwo} alt='How Unisolve Works' />
              </figure>
              <h3>Development &#38; Test</h3>
              <p>Communication protocols apart from engagement models</p>
            </Col>
            <Col md={4}>
              <figure>
                <img src={HowThree} alt='How Unisolve Works' />
              </figure>
              <h3>Present Developed Idea</h3>
              <p>Protocols apart from aengage models, pricing billing</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
