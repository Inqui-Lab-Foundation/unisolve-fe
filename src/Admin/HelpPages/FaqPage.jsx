import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from "../../stories/Button";
import { InputWithSearch } from "../../stories/InputWithSearch/InputWithSearch.stories";
import "./style.scss";
import { Accordion } from "react-bootstrap";
import { Avatar, Badge } from "antd";
import User from "../../assets/media/img/avatar1.png";

import {
  FaTh,
  FaThLarge,
  FaBriefcase,
  FaLightbulb,
  FaShieldVirus,
  FaQuestionCircle,
  FaAngleRight,
} from "react-icons/fa";
import Layout from "../../Admin/Layout";

const FaqPage = (props) => {
  const [queryId, setQueryId] = useState("Idea Submission");
  const defaultbtnProps = {
    size: "small",
    label: "Raise Ticket",
    btnClass: "black",
  };
  const items = [
    {
      query: "What is Idea Submission?",
      answer: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ],
      id: "one",
    },
    {
      query: "How can I submit an Idea?",
      answer: [
        "Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class.",
      ],
      id: "two",
    },
    {
      query: "Lorem ipsum",
      answer: [
        "To create a user friendly tool for educating elderly persons in rural India.",
        "The Covid-19 pandemic has increase the divide between different classes in our society, especially for education. The priviledged had the access to sducation in some of the forms while the not so priviledged had been away from education. How can this can be bridged?",
      ],
      id: "three",
    },
  ];
  const helpCardList = [
    {
      icon: FaTh,
      text: "Getting Started",
      id: 1,
    },
    {
      icon: FaLightbulb,
      text: "Idea Submission",
      id: 2,
    },
    {
      icon: FaShieldVirus,
      text: "Badges",
      id: 3,
    },
    {
      icon: FaBriefcase,
      text: "Teams & Mentor",
      id: 4,
    },
  ];

  const handleQuerySection = (id) => {
    setQueryId(id);
  };
  return (
    <Layout>
      <div className="faq-page">
        <div className="help-section">
          <div className="btn-click mb-5">
            <Button
              {...defaultbtnProps}
              onClick={() => props.history.push("/NewTicket")}
            />
          </div>
          <h1 className="text-center my-3 my-xl-5 ">Hello, how can we help?</h1>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={10} xl={8}>
              <Row>
                <Col xs={8} sm={8} md={8} xl={10}>
                  <InputWithSearch
                    className="w-100"
                    size="large"
                    placeholder="Ask a question"
                  />
                </Col>
                <Col xs={4} sm={4} md={4} xl={2}>
                  <Button
                    size="small"
                    label="Search"
                    btnClass="primary w-100"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <p className="text-center my-3 my-xl-5">
            or choose a category to quickly find the help you need
          </p>
          <div className="help-card text-center">
            {helpCardList.map((item, i) => {
              return (
                <div
                  className={`helpCard ${
                    item.text === queryId ? "activeQuery" : ""
                  } pt-5 mt-5`}
                  key={item.text}
                  onClick={() => handleQuerySection(item.text)}
                >
                  <item.icon />
                  <p className="pt-4">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        {queryId ? (
          <div className="idea-section text-center container">
            <h2>{queryId}</h2>

            <div className="collapse-sec idea-que-sec">
              <Accordion>
                {items.map((que, index) => {
                  return (
                    <Accordion.Item
                      eventKey={index}
                      className="mt-3 mb-4 que-items"
                      key={index}
                    >
                      <Accordion.Header className="question">
                        <div className="idea-query">
                          {/* <Avatar src={User} className="avatar-imgs" /> */}
                          <span className="avatar-txt">{que.query}</span>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="idea-pblms">
                          {que.answer.map((ans, index) => {
                            return (
                              <div className="idea-pblm-list" key={index}>
                                <Row className="justify-content-between w-100">
                                  <Col md={12} xl={12} className="my-auto">
                                    <p>{ans}</p>
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
          </div>
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
};

export default FaqPage;
