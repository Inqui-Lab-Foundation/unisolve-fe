import React, { useState } from "react";
import "./style.scss";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { Figure } from "react-bootstrap";
import { Player } from "video-react";
import Ideas from "../../assets/img/ideas.svg";
import { HiOutlineThumbUp } from "react-icons/hi";
import { Avatar, Badge } from "antd";
import { Button } from "../../stories/Button";
import { Accordion } from "react-bootstrap";
import User from "../../assets/img/avatar1.png";
import { Link, withRouter } from "react-router-dom";
import Layout from "../../Layout";
import { BreadcrumbComp } from "../../stories/Breadcrumb/BreadcrumbComp";

const IdeasPage = (props) => {
  const headingDetails = {
    title: "Ideas",
    subTitle: "Challenges and Problems",
    bgImage: true,
    options: [
      {
        title: "Courses",
        path: "/courses",
      },
      {
        title: "Ideas",
        path: "/ideas",
      },
    ],
  };
  const items = [
    {
      query: "Quality Education (2)",
      answer: [
        "To create a user friendly tool for educating elderly persons in rural India.",
        "The Covid-19 pandemic has increase the divide between different classes in our society, especially for education. The priviledged had the access to sducation in some of the forms while the not so priviledged had been away from education. How can this can be bridged?",
      ],
      id: "one",
    },
    {
      query: "Good Health & Well Being",
      answer: [
        "Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class.",
      ],
      id: "two",
    },
    {
      query: "Climate Action",
      answer: [
        "To create a user friendly tool for educating elderly persons in rural India.",
        "The Covid-19 pandemic has increase the divide between different classes in our society, especially for education. The priviledged had the access to sducation in some of the forms while the not so priviledged had been away from education. How can this can be bridged?",
      ],
      id: "three",
    },
  ];
  return (
    <Layout>
      <div className="ideas-Page">
        <BreadcrumbComp {...headingDetails} />
        <Container className="mb-50">
          <Row className="m-0 ideas-head">
            <Col xs={12} sm={12} md={12} xl={6} className="p-0 ">
              <div>
                <h1 className="ideaTitle">
                  Turn your amazing idea into{" "}
                  <span className="green">reality</span>
                </h1>
                <p className="idea-qs mt-3">
                  What is Unisolve Idea Submission?
                </p>
                <p className="pt-3">
                  The more badges you earn, the higher your level - and the more
                  you’re recognized in the community for your contributions.
                </p>
              </div>
              {/* <div className="d-flex pt-4">
              <div className="thump">
                <Avatar
                  size="large"
                  icon={<HiOutlineThumbUp />}
                  className="avatar-imgs"
                />
                <span className="avatar-txt">Lorem ipsum</span>
              </div>
              <div>
                <Avatar
                  size="large"
                  icon={<HiOutlineThumbUp />}
                  className="avatar-imgs"
                />
                <span className="avatar-txt">Lorem ipsum</span>
              </div>
            </div> */}
              <div className="pt-5">
                <p className="idea-status">
                  DEADLINE:{" "}
                  <span className="idea-date">20 Nov 2021, 12:00 PM, </span>
                </p>
              </div>
              <div className="d-flex pt-4 btn-set">
                <Button
                  label="Register idea now"
                  btnClass="primary"
                  size="medium"
                  onClick={() => props.history.push("/ideasPage")}
                />
                <Button
                  label="Learn more"
                  btnClass="primary-outline"
                  size="small"
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} xl={6} className="p-0 my-5 my-xl-0">
              <div className="text-right">
                {/* <Figure className="">
                  <img className="img-fluid idea-img" src={Ideas} />
                </Figure> */}
                <Player
                  playsInline
                  poster={Ideas}
                  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mb-50 ">
          <Row className=" text-left idea-que-sec">
            <Col md={12}>
              <h2>Challenges and Problems</h2>
              <div>
                <Accordion>
                  {items.map((que, index) => {
                    return (
                      <Accordion.Item
                        eventKey={index}
                        className="mt-3 mb-4 que-items"
                      >
                        <Accordion.Header className="question">
                          <div className="idea-query">
                            <Avatar src={User} className="avatar-imgs" />
                            <span className="avatar-txt">{que.query}</span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="idea-pblms">
                            {que.answer.map((ans, index) => {
                              return (
                                <div className="idea-pblm-list">
                                  <Row className="justify-content-between w-100">
                                    <Col md={12} xl={8} className="my-auto">
                                      <p>{ans}</p>
                                    </Col>
                                    <Col
                                      md={12}
                                      xl={4}
                                      className="my-auto text-right"
                                    >
                                      <Button
                                        label="Choose this problem >>"
                                        btnClass="primary"
                                        size="medium"
                                      />
                                    </Col>
                                  </Row>
                                </div>
                              );
                            })}
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    );
                  })}
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default withRouter(IdeasPage);
