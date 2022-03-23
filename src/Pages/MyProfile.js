import "./Student.scss";
import React, { Component, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardText,
  CardImg,
} from "reactstrap";

import { Link } from "react-router-dom";
import { static_badges } from "../data/StaticBadges";
import { ProgressComp } from "../stories/Progress/Progress";
import { PhotoUpload } from "../stories/PhotoUpload/PhotoUpload";

import i18next from "i18next";
import { useTranslation } from "react-i18next";
import Layout from "../Layout";

const MyProfile = () => {
  const { t, i18n } = useTranslation();

  const progressBar = {
    label: "Progress",
    options: [{ id: 1, teams: "CSK", percent: 75, status: "active" }],
  };

  const personal_details = [
    {
      id: 1,
      title: "Age",
      body: "15",
    },
    {
      id: 2,
      title: "Gender",
      body: "Male",
    },
    {
      id: 3,
      title: "Date of birth",
      body: "2 January 2003",
    },
    {
      id: 4,
      title: "Address",
      body: "403802, Hydrabad, India",
    },
  ];

  return (
    <Layout>
      <Container className="MyProfile pt-3 pt-xl-5">
        {/* <UsersPage /> */}
        <Row>
          <Col className="col-xl-8 offset-xl-2 offset-md-0">
            <Row>
              <Col>
                <ul className="pagepath">
                  <li className="pb-2">Home</li>
                  <li className="arrownone pb-2">My Settings</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1 className="mb-4">My Profile</h1>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Card className="w-100  mb-5 p-4">
                  <CardBody>
                    <Row>
                      <Col md={8} className="border-right my-auto ">
                        <Row>
                          <Col md={5}>
                            {/* <small>Image 240x240</small> */}
                            <figure>
                              <PhotoUpload />
                            </figure>
                          </Col>
                          <Col md={7} className="my-auto profile-detail">
                            <h2 className="mb-4">Ritu Sharma</h2>
                            <CardText>
                              <span>Email:</span> <b>ritusharma@gmail.com</b>
                            </CardText>
                            <CardText>
                              <span>Class:</span> <b>Class 8</b>
                            </CardText>
                          </Col>
                        </Row>
                      </Col>

                      <Col md={4} className="my-auto profile-detail">
                        <CardText>
                          <span>Badges:</span> <b>5</b>
                        </CardText>
                        <CardText>
                          <span>Points:</span> <b>300</b>
                        </CardText>
                        <CardText>
                          <span>Certificates Earned:</span> <b>20</b>
                        </CardText>
                        <CardText>
                          <span>Joined on:</span> <b>1st Nov 2021</b>
                        </CardText>
                      </Col>

                      <Col md={12}></Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col md={12} xl={6}>
                <Card className="w-100   mb-5 p-4">
                  <CardBody>
                    <div class="d-flex ">
                      <div class="me-auto my-auto ">
                        <CardTitle className="sub">Personal details</CardTitle>
                      </div>

                      <div class="p-2 ">
                        <Link exact to="/edit-details" className="text-link">
                          <b>
                            <i class="fa-solid fa-pencil px-3"></i> Edit
                          </b>
                        </Link>
                      </div>
                    </div>

                    <hr className="mb-5 mt-0" />
                    <Row>
                      <Col md={12} className="mb-5">
                        <CardTitle>About</CardTitle>
                        <CardText>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Blandit turpis cursus quam diam ipsum. Tempor,
                          tristique egestas pellentesque faucibus. Quis nibh
                          tellus sit aliquam nibh penatibus elit.
                        </CardText>
                      </Col>

                      {personal_details.map((item, key) => {
                        return (
                          <Col md={6} className="mb-5">
                            <CardTitle>{item.title}</CardTitle>
                            <CardText>{item.body}</CardText>
                          </Col>
                        );
                      })}
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col md={12} xl={6}>
                <Card className="w-100 mb-5 p-4">
                  <CardBody>
                    <div class="d-flex ">
                      <div class="me-auto my-auto">
                        <CardTitle className="sub">Achievements</CardTitle>
                      </div>

                      <div class="p-2 ">
                        <Link exact to="/" className="text-link">
                          <b>View all</b> <i class="fa-solid fa-angle-right" />
                        </Link>
                      </div>
                    </div>

                    <hr className="mb-5 mt-0" />
                    <Row>
                      <Col md={12} className="mb-5">
                        <CardTitle>Learning progress</CardTitle>
                        <CardText>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </CardText>
                      </Col>
                      <Col md={12} className="mb-5">
                        <Row>
                          <Col md={7}>
                            <ProgressComp {...progressBar} />
                            <span>Level 15</span>
                          </Col>
                          <Col md={5}>
                            <h6>
                              Points: <span>300</span>
                            </h6>
                          </Col>
                        </Row>
                      </Col>

                      <Col md={12} className="mb-5">
                        <div class="d-flex ">
                          <div class="me-auto my-auto">
                            <CardTitle className="sub">
                              <CardTitle>Badges</CardTitle>
                            </CardTitle>
                          </div>

                          <div class="p-2 ">
                            <CardTitle className="sub">
                              <Link exact to="/" className="text-link">
                                View all <i class="fa-solid fa-angle-right" />
                              </Link>
                            </CardTitle>
                          </div>
                        </div>

                        <Row>
                          <Col md={12}>
                            <div className="d-flex">
                              {static_badges.map((item, key) => {
                                return (
                                  <Card className="badges">
                                    <CardImg
                                      className="img-fluid"
                                      src={item.imgageUrl}
                                      alt={item.badgeName}
                                    />
                                    <CardBody className="px-0">
                                      <CardTitle>{item.badgeName}</CardTitle>
                                      <hr />
                                      <CardText>
                                        EARNED ON:
                                        <br />
                                        <span>{item.earnedOn}</span>
                                      </CardText>
                                    </CardBody>
                                  </Card>
                                );
                              })}
                            </div>
                            <div class="d-flex flex-row-reverse mt-3">
                              <Link exact to="/" className="text-link">
                                <b>How to earn</b>{" "}
                                <i class="fa-solid fa-question" />
                              </Link>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              {/* <Col md={12}>
                <Card className="w-100 mb-5 p-4">
                  <CardBody>
                    <div class="d-flex ">
                      <div class="me-auto my-auto">
                        <CardTitle className="sub">My Questions</CardTitle>
                      </div>
                    </div>

                    <hr className="mb-5" />
                    <Row>fgdf</Row>
                  </CardBody>
                </Card>
              </Col> */}
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default MyProfile;
