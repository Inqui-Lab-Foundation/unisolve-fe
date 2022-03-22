import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from "../../stories/Button";
import { InputWithSearch } from "../../stories/InputWithSearch/InputWithSearch.stories";
import "./style.scss";
import { Collapse } from "../../stories/Collapse/CollapseComp";
import {
  FaTh,
  FaThLarge,
  FaBriefcase,
  FaLightbulb,
  FaShieldVirus,
  FaQuestionCircle,
  FaAngleRight,
} from "react-icons/fa";
import Layout from "../../Layout";

const FaqPage = () => {
  const defaultbtnProps = {
    size: "small",
    label: "Raise Ticket",
    btnClass: "black",
  };
  const queryProps = {
    label: "Collapses",
    items: [
      {
        query: "What is Idea Submission?",
        answer:
          "Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class.",
        id: "one",
      },
      {
        query: "How can I submit an Idea?",
        answer:
          "Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class.",
        id: "two",
      },
      {
        query: "Lorem ipsum",
        answer:
          "Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class.",
        id: "three",
      },
    ],
  };
  const helpCardList = [
    {
      icon: FaTh,
      text: "Getting Started",
    },
    {
      icon: FaLightbulb,
      text: "Idea Submission",
    },
    {
      icon: FaShieldVirus,
      text: "Badges",
    },
    {
      icon: FaBriefcase,
      text: "Teams & Mentor",
    },
  ];
  return (
    <Layout>
      <div className="faq-page">
        <div className="help-section">
          <div className="btn-click mb-5">
            <Button {...defaultbtnProps} />
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

          {/* <div className="d-flex justify-content-center pt-5 pb-5">
          <InputWithSearch size="large" placeholder="Ask a question" />

          <Button size="small" label="Search" btnClass="primary" />
        </div> */}
          <p className="text-center my-3 my-xl-5">
            or choose a category to quickly find the help you need
          </p>
          <div className="help-card text-center">
            {helpCardList.map((item) => {
              return (
                <div
                  className={`helpCard ${item.text} pt-5 mt-5`}
                  key={item.text}
                >
                  <item.icon />
                  <p className="pt-4">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="idea-section text-center">
          <h2>Idea Submission</h2>
          <p className="mt-3 mt-xl-4">
            Lorem ipsum dolor sit amet, cons adipisicing elit, sed do eiusmod.
            Lorem ipsum dolor sit amet.
          </p>
          <div className="collapse-sec">
            <Collapse {...queryProps} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FaqPage;
