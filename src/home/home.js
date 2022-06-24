import "./home.scss";

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import NumberCounter from "number-counter";
import { Button } from "../stories/Button";

// SLICK SLIDER
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

import HowOne from "../media/home/how-1.svg";
import HowTwo from "../media/home/how-2.svg";
import HowThree from "../media/home/how-3.svg";
import HowBorder from "../media/home/how-border.svg";
import Mentor from "../media/home/mentor.svg";
import Program1 from "../media/home/program-1.jpg";
import Program2 from "../media/home/program-2.jpg";
import Program3 from "../media/home/program-3.jpg";
import Program4 from "../media/home/program-4.jpg";
import Avatar1 from "../../src/assets/img/avatar1.png";
import Avatar2 from "../../src/assets/img/avatar2.png";
import Avatar3 from "../../src/assets/img/avatar3.png";

import { ImageCard } from "../stories/ImageCard/ImageCard.jsx";

const Home = () => {
  const programs = [
    {
      title: "School Innovation Challenge",
      imageUrl: Program1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. ",
    },
    {
      title: "Think & Make",
      imageUrl: Program2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. ",
    },
    {
      title: "Student Opportunities",
      imageUrl: Program3,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. ",
    },
    {
      title: "Workshops",
      imageUrl: Program4,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. ",
    },
  ];

  const testimonials = [
    {
      imageUrl: Avatar3,
      desc: "We are delighted to be associated with the innovation program of Inqui-Lab Foundation, encouraging innovation to develop real-world  ",
      name: "SUNIL JOSE",
      title: "SVP country Leader of Salesforce India",
    },
    {
      imageUrl: Avatar1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. ",
      name: "SUNIL JOSE",
      title: "SVP country Leader of Salesforce India",
    },
    {
      imageUrl: Avatar2,
      desc: "We are delighted to be associated with the innovation program of Inqui-Lab Foundation, encouraging innovation to develop real-world  ",
      name: "SUNIL JOSE",
      title: "SVP country Leader of Salesforce India",
    },
    {
      imageUrl: Avatar1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. ",
      name: "SUNIL JOSE",
      title: "SVP country Leader of Salesforce India",
    },
  ];

  return (
    <div className='home-main'>
      <section className='header '>
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
      <section className='counter mb-100'>
        <Container className='text-center'>
          <Row className='counter-card'>
            <Col md={12}>
              <p>
                Together, we’ve brought together over 5 million people in 5
                countries.
              </p>
            </Col>
            <Col md={4}>
              <h4>2.5+ Million</h4>

              <p>Students/Learners registered</p>
            </Col>
            <Col md={4}>
              <h4>2.3+ Million</h4>
              <p>Teachers/Mentors registered</p>
            </Col>
            <Col md={4}>
              <h4 className='d-inline-flex'>
                <NumberCounter end={2500} delay={2} />+
              </h4>
              <p>Ideas shared</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='how-works mb-100'>
        <Container className='text-center'>
          <h2>How Unisolve Works</h2>
          <Row>
            <Col md={4}>
              <figure>
                <img
                  src={HowOne}
                  className='img-fluid'
                  alt='How Unisolve Works'
                />
              </figure>
              <h3>find and &#38; Give Idea</h3>
              <p>We present you a proposal and discuss niffty-gritty like</p>
            </Col>
            <Col md={4}>
              <figure>
                <img
                  src={HowTwo}
                  className='img-fluid'
                  alt='How Unisolve Works'
                />
              </figure>
              <h3>Development &#38; Test</h3>
              <p>Communication protocols apart from engagement models</p>
            </Col>
            <Col md={4}>
              <figure>
                <img
                  src={HowThree}
                  className='img-fluid'
                  alt='How Unisolve Works'
                />
              </figure>
              <h3>Present Developed Idea</h3>
              <p>Protocols apart from aengage models, pricing billing</p>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <figure>
                <img
                  src={HowBorder}
                  className='img-fluid'
                  alt='How Unisolve Works'
                />
              </figure>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='mentor mb-100'>
        <Container>
          <Row>
            <Col md={6} className='my-auto'>
              <span>TEACHERS AND MENTORS </span>
              <h2>
                You can <span>mentor</span> anyone.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris.
              </p>
              <Button
                label='Teachers, start here'
                btnClass='primary '
                size='small'
              />
            </Col>
            <Col md={6}>
              <figure>
                <img src={Mentor} alt='mentor' className='img-fluid' />
              </figure>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='programs mb-100'>
        <Container>
          <Row>
            {programs.map((program) => {
              return (
                <Col md={6} className='mb-5'>
                  <Card>
                    <CardImg
                      alt='Think & Make'
                      src={program.imageUrl}
                      top
                      width='100%'
                    />
                    <CardBody className='p-5'>
                      <CardTitle>{program.title}</CardTitle>
                      <CardText>{program.desc}</CardText>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <section className='testimonials'>
        <Container>
          <Row className='text-center justify-content-md-center'>
            <h2>How Unisolve Works</h2>

            <Col md={8} className='testimonials-slider'>
              <Slider
                dots={false}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={false}
                autoplaySpeed={3000}
              >
                {testimonials.map((testimonial) => {
                  return (
                    <Card>
                      <figure className='text-center'>
                        <img
                          src={testimonial.imageUrl}
                          className='img-fluid'
                          alt='How Unisolve Works'
                        />
                      </figure>
                      <CardBody>
                        <blockquote class='blockquote text-center'>
                          <p class='mb-0'>{testimonial.desc}</p>
                          <footer class='blockquote-footer pt-5'>
                            {" "}
                            <h6>{testimonial.name}</h6>
                            <cite title='Source Title'>
                              {testimonial.title}
                            </cite>
                          </footer>
                        </blockquote>
                      </CardBody>
                    </Card>
                  );
                })}
              </Slider>
            </Col>

            {/* <Col md={12}>
              <Card>
                <figure className='text-center'>
                  <img
                    src={HowOne}
                    className='img-fluid'
                    alt='How Unisolve Works'
                  />
                </figure>
                <CardBody>
                  We are delighted to be associated with the innovation program
                  of Inqui-Lab Foundation, encouraging innovation to develop
                  real-world
                </CardBody>
              </Card>
            </Col> */}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
