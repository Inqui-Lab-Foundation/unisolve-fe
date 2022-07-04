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
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";
import NumberCounter from "number-counter";
import { Button } from "../stories/Button";
import { Link } from "react-router-dom";

import { Input, Space } from "antd";

import LanguageSelectorComp from "../components/LanguageSelectorComp";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

// SLICK SLIDER
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";

import HowOne from "../media/home/how-1.svg";
import HowTwo from "../media/home/how-2.svg";
import HowThree from "../media/home/how-3.svg";
import HowBorder from "../media/home/how-border.svg";
import LearnMentor from "../media/home/learn.svg";
import Mentor from "../media/home/mentor.svg";
import Program1 from "../media/home/program-1.jpg";
import Program2 from "../media/home/program-2.jpg";
import Program3 from "../media/home/program-3.jpg";
import Program4 from "../media/home/program-4.jpg";
import Avatar1 from "../../src/assets/img/avatar1.png";
import Avatar2 from "../../src/assets/img/avatar2.png";
import Avatar3 from "../../src/assets/img/avatar3.png";
import Facebook from "../media/home/facebook.png";
import Twitter from "../media/home/twitter.png";
import LinkedIn from "../media/home/linkedIn.png";
import Subscribe from "../media/home/subscribe-group.png";

import IdeaBulb from "../media/home/idea-bulb.png";

import Unicef from "../media/home/unicef.png";
import Telangana from "../media/home/telangana.png";
import Inquilab from "../media/home/inquilab.png";
import Yuwaah from "../media/home/yuwaah.png";
import YoungWarrior from "../media/home/young-warrior.png";
import Congnizant from "../media/home/congnizant.png";

// import Learn from "../media/home/learn-anything.svg";
import Learn from "../media/home/learn-delete.png";

import Blog1 from "../media/home/blog-1.jpg";
import Blog2 from "../media/home/blog-2.jpg";

import WorldMap from "../media/home/world-map.jpg";

const Home = (props) => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState("1");
  const languageOptions = ["en", "hi", "te"];
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const toggle = (id) => {
    open === id ? setOpen() : setOpen(id);
  };

  const [search, onSearch] = useState("");

  const { Search } = Input;

  const partners = [
    {
      key: "Unicef",
      imageUrl: Unicef,
    },
    {
      key: "Telangana",
      imageUrl: Telangana,
    },
    {
      key: "Inquilab",
      imageUrl: Inquilab,
    },
    {
      key: "Yuwaah",
      imageUrl: Yuwaah,
    },
    {
      key: "YoungWarrior",
      imageUrl: YoungWarrior,
    },
    {
      key: "Congnizant",
      imageUrl: Congnizant,
    },
  ];

  const programs = [
    {
      title: t("home.our_programs_sub_one"),
      imageUrl: Program1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. ",
    },
    {
      title: t("home.our_programs_sub_two"),
      imageUrl: Program2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. ",
    },
    {
      title: t("home.our_programs_sub_three"),
      imageUrl: Program3,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. ",
    },
    {
      title: t("home.our_programs_sub_four"),
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
      imageUrl: Avatar3,
      desc: "We are delighted to be associated with the innovation program of Inqui-Lab Foundation, encouraging innovation to develop real-world  ",
      name: "SUNIL JOSE",
      title: "SVP country Leader of Salesforce India",
    },
    {
      imageUrl: Avatar3,
      desc: "We are delighted to be associated with the innovation program of Inqui-Lab Foundation, encouraging innovation to develop real-world  ",
      name: "SUNIL JOSE",
      title: "SVP country Leader of Salesforce India",
    },
    {
      imageUrl: Avatar3,
      desc: "We are delighted to be associated with the innovation program of Inqui-Lab Foundation, encouraging innovation to develop real-world  ",
      name: "SUNIL JOSE",
      title: "SVP country Leader of Salesforce India",
    },
  ];

  const accordion = [
    {
      id: 1,
      title: "Is this thing on?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectetur elit?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur elit?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet, consectetur elit?",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  const blogs = [
    {
      id: 1,
      imgUrl: Blog1,
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    },
    {
      id: 2,
      imgUrl: Blog2,
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    },
    {
      id: 3,
      imgUrl: Blog1,
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    },
    {
      id: 4,
      imgUrl: Blog2,
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    },
  ];

  return (
    <div className='home-main'>
      <section className='header '>
        <div className='home-banner'>
          <Container>
            <Row className='justify-content-between  pt-5'>
              <Col md={4} className='my-auto'>
                <h2 className='logo'>
                  <Link className='' exact='true' to='/'>
                    Unisolve
                  </Link>
                </h2>
              </Col>
              <Col md={6} className='text-right '>
                <Link className='' exact='true' to='/login'>
                  <Button label='Login' btnClass='primary ' size='small' />
                </Link>
                <Link className='' exact='true' to='/register'>
                  <Button
                    label='Sign up now'
                    btnClass='primary mx-3'
                    size='small'
                  />
                </Link>
                {/* <Button label='Login' btnClass='primary ' size='small' />
                <Button
                  label='Sign up now'
                  btnClass='primary mx-3'
                  size='small'
                /> */}
                <LanguageSelectorComp />
              </Col>
            </Row>
            <Row className='h-100'>
              <Col md={4} className='center'>
                <h1>
                  {t("home.banner_heading")}{" "}
                  <span> {t("home.banner_creativity")} </span>{" "}
                  {t("home.banner_and")}{" "}
                  <span>{t("home.banner_innovation")}</span>
                  {/* Transforming schools into places of <span>Creativity</span>{" "}
                  and <span>Innovation</span> */}
                </h1>
                {/* <p>
                  We want to make problem solving an essential part of a
                  student's education experience.
                </p> */}
                <p>{t("home.banner_description")}</p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className='counter mb-100'>
        <Container className='text-center'>
          <Row className='counter-card justify-content-md-center'>
            <p className='counter-para'>
              {/* Together, we’ve brought together over 5 million people in 5
              countries. */}
              {t("home.counter_heading")}
            </p>
            <Col md={10}>
              <Row>
                <Col md={4}>
                  <h4>2.5+ {t("home.counter_million")}</h4>

                  <p className=''>{t("home.counter_students")}</p>
                </Col>
                <Col md={4}>
                  <h4>2.3+ {t("home.counter_million")}</h4>
                  <p>{t("home.counter_teachers")}</p>
                </Col>
                <Col md={4}>
                  <h4 className='d-inline-flex'>
                    <NumberCounter end={2500} delay={2} />+
                  </h4>
                  <p>{t("home.counter_ideas")}</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='how-works mb-100'>
        <Container className='text-center'>
          <h2 className='sub-heading'>
            {t("home.how_unisolve_works")}
            <span className='yellow'> {t("home.works")}</span>
          </h2>
          <Row>
            <Col md={4}>
              <figure>
                <img
                  src={HowOne}
                  className='img-fluid'
                  alt='How Unisolve Works'
                />
              </figure>
              <h3>{t("home.how_unisolve_works_idea")}</h3>
              <p>{t("home.how_unisolve_works_idea_description")}</p>
            </Col>
            <Col md={4}>
              <figure>
                <img
                  src={HowTwo}
                  className='img-fluid'
                  alt='How Unisolve Works'
                />
              </figure>
              <h3>{t("home.how_unisolve_works_test")}</h3>
              <p>{t("home.how_unisolve_works__test_description")}</p>
            </Col>
            <Col md={4}>
              <figure>
                <img
                  src={HowThree}
                  className='img-fluid'
                  alt='How Unisolve Works'
                />
              </figure>
              <h3>{t("home.how_unisolve_works_present")}</h3>
              <p>{t("home.how_unisolve_works__present_description")}</p>
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
      <section className=' mentor-student'>
        <Container className='both'>
          <Row>
            <Col md={6} className='my-auto teacher-heading'>
              <span>{t("home.teacher_mentor_sub")}</span>
              <h2>
                {t("home.teacher_mentor_heading")}{" "}
                <span className='blue'> {t("home.mentor")}</span> <br />
                {t("home.anyone")}
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris.
              </p>
              <Button
                label={t("home.teacher_mentor_button")}
                btnClass='primary '
                size='small'
              />
            </Col>

            <Col md={6} className='teacher'>
              <figure>
                <img src={Mentor} alt='mentor' className='img-fluid' />
              </figure>
            </Col>
            <div className='student d-flex'>
              <Col md={6}>
                <figure>
                  <img src={LearnMentor} alt='learn' className='img-fluid' />
                </figure>
              </Col>
              <Col md={6} className='my-auto mx-auto student-heading px-5'>
                <span>{t("home.learners_students_sub")}</span>
                <h2>
                  {t("home.learners_students_heading")}{" "}
                  <span className='green'> {t("home.learn")}</span> <br />
                  {t("home.anything")}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagittis ipsum. Praesent mauris.
                </p>
                <Button
                  label={t("home.learners_students_button")}
                  btnClass='primary '
                  size='small'
                />
              </Col>
            </div>
          </Row>
        </Container>
      </section>

      <section className='world-map'>
        <figure>
          <img className='img-fluid' alt='demo' src={WorldMap} />
        </figure>
      </section>

      <section className='programs'>
        <Container>
          <Row>
            <h2 className='text-center sub-heading'>
              {t("home.our_programs_heading")}
            </h2>
            <div className='cards row'>
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
            </div>
          </Row>
        </Container>
      </section>

      <section className='blog'>
        <Container>
          <Row className='text-center justify-content-md-center'>
            <h2 className='sub-heading'>
              {/* Here are a few of <span>Student Ideas</span> */}
              {t("home.student_ideas")}{" "}
              <span className='blue'>{t("home.student_ideas_span")}</span>
              <img
                src={IdeaBulb}
                alt='Student Idea'
                className='img-fluid'
                style={{ marginLeft: "2rem" }}
              />
            </h2>

            <Col md={12} className='blog-slider'>
              <Slider
                dots={false}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={false}
                autoplaySpeed={3000}
                arrows={false}
                centerMode={true}
                focusOnSelect={true}
              >
                {blogs.map((blog) => {
                  return (
                    <div>
                      <div
                        className='blog-card'
                        // style={{ backgroundImage: `url(${blog.imgUrl})` }}
                        style={{
                          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(35, 31, 32, 0.99)),
                        url(${blog.imgUrl})`,
                        }}
                      >
                        <CardBody className='text-left '>
                          <h4 className='pt-5 text-white'>{blog.title}</h4>
                          <blockquote class='blockquote text-white'>
                            <p class='pb-5'>{blog.desc}</p>
                          </blockquote>
                        </CardBody>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='testimonials'>
        <Container>
          <Row className='text-center justify-content-md-center'>
            <h2 className='sub-heading'>{t("home.testimonials")}</h2>

            <Col md={10} className='testimonials-slider'>
              <Slider
                dots={false}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
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
          </Row>
        </Container>
      </section>

      <section className='uni-partners counter mb-100'>
        <Container className='text-center'>
          <Row className='counter-card'>
            <Col md={3} className='my-auto'>
              <h4>{t("home.key_partners")}</h4>
            </Col>
            <Col md={9} className='testimonials-slider'>
              <Slider
                dots={false}
                slidesToShow={5}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={3000}
                arrows={false}
              >
                {partners.map((partners) => {
                  return (
                    <figure className='text-center my-auto'>
                      <img
                        src={partners.imageUrl}
                        className='img-fluid mx-1'
                        alt='How Unisolve Works'
                      />
                    </figure>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='locate-unisolve'>
        <Container>
          <Row className='text-center justify-content-md-center'>
            <Col md={6}>
              <h2 className='sub-heading'>
                {/* Does Unisolve Partner
                <br />
                with My School? */}
                {t("home.unisolve_partner")}
              </h2>
              <p>
                {/* Over 10,000+ Schools and Universities are partnered with
                Unisolve */}
                {t("home.unisolve_partner_paragraph")}
              </p>
              <Search
                placeholder='Search your school here...'
                onSearch={onSearch}
                enterButton
                className='antd-modified-search'
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className='subscribe'>
        <Container>
          <Row className=' text-center justify-content-md-center'>
            <Col md={8} className='testimonials-slider'>
              <figure>
                <img src={Subscribe} alt='Unisolve Sunscribe' />
              </figure>
              <h2 className='sub-heading'>
                {/* Over 2.5M+ members using Unisolve Studio to learn, build,
                create, Join today! */}
                {t("home.unisolve_subscribe_heading")}
              </h2>
              <Button
                label={t("home.unisolve_subscribe_btn")}
                btnClass='primary subscribe '
                size='small'
              />
              <Card className='mt-5 '>
                <div className='bg-card'></div>
                <CardBody>
                  <Row>
                    <Col md={6}>
                      <h3 className='mb-0'>
                        {t("home.unisolve_subscribe_newsletter_heading")}
                      </h3>
                      <p>{t("home.unisolve_subscribe_newsletter_sub")}</p>
                    </Col>
                    <Col md={6} className='my-auto'>
                      <Search
                        placeholder='Enter your email address..'
                        onSearch={onSearch}
                        enterButton='Subscribe'
                        className='antd-modified-search'
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='faq'>
        <Container>
          <Row className='text-center justify-content-md-center'>
            <h2 className='sub-heading'>{t("home.unisolve_faq")}</h2>
            <Col md={7} className='testimonials-slider'>
              <Accordion open={open} toggle={toggle}>
                {accordion.map((item) => {
                  return (
                    <AccordionItem className='mb-5 b-0'>
                      <AccordionHeader targetId={item.id}>
                        {item.title}
                      </AccordionHeader>
                      <AccordionBody accordionId={item.id}>
                        <p>{item.desc}</p>
                      </AccordionBody>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
      <footer className='footer'>
        <Container>
          <Row>
            <Col md={4}>
              <h2>
                Unisolve <span>Studio</span>
              </h2>
              <a
                className='w-100 d-block email mb-3'
                href='mailto:info@unisolve.com'
              >
                info@unisolve.com
              </a>
              <a className='w-100 d-block mb-3' href='tel:882-597-3025'>
                882-597-3025
              </a>
              <p>{t("home.footer_hyderabad")} - 500082.</p>
              <div className='d-flex'>
                <figure>
                  <Link className='' exact='true' to='/'>
                    <img
                      className='img-fluid'
                      src={Facebook}
                      alt='Unisolve Facebook'
                    />
                  </Link>
                </figure>
                <figure className='mx-3'>
                  <Link className='' exact='true' to='/'>
                    <img
                      className='img-fluid'
                      src={Twitter}
                      alt='Unisolve Twitter'
                    />
                  </Link>
                </figure>
                <figure>
                  <Link className='' exact='true' to='/'>
                    <img
                      className='img-fluid'
                      src={LinkedIn}
                      alt='Unisolve LinkedIn'
                    />
                  </Link>
                </figure>
              </div>
            </Col>
            <Col md={8}>
              <h3>{t("home.footer_imp_links")}</h3>
              <Row>
                <Col md={4}>
                  <Link className='w-100 d-block mb-3' exact='true' to='/'>
                    {t("home.footer_home")}
                  </Link>
                  <Link className='w-100 d-block mb-3' exact='true' to='/'>
                    {t("home.footer_about")}
                  </Link>
                  <Link className='w-100 d-block mb-3' exact='true' to='/'>
                    {t("home.footer_career")}
                  </Link>
                  <Link className='w-100 d-block' exact='true' to='/'>
                    {t("home.footer_partner")}
                  </Link>
                </Col>
                <Col md={4}>
                  <Link className='w-100 d-block mb-3' exact='true' to='/'>
                    {t("home.footer_support")}
                  </Link>
                  <Link className='w-100 d-block mb-3' exact='true' to='/'>
                    {t("home.footer_impact")}
                  </Link>
                  <Link className='w-100 d-block' exact='true' to='/'>
                    {t("home.footer_newsletter")}
                  </Link>
                </Col>
                <Col md={4}>
                  <Link className='w-100 d-block mb-3' exact='true' to='/'>
                    {t("home.footer_privacy")}
                  </Link>
                  <Link className='w-100 d-block mb-3' exact='true' to='/'>
                    {t("home.footer_terms")}
                  </Link>
                  <Link className='w-100 d-block' exact='true' to='/'>
                    {t("home.footer_blog")}
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
