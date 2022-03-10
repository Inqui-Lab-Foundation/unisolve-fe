import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from "../../stories/Button";
import { InputWithSearch } from "../../stories/InputWithSearch/InputWithSearch.stories";
import "./style.scss";
import {Collapse} from "../../stories/Collapse/Collapse"
import {
  FaTh,
  FaThLarge,
  FaBriefcase,
  FaLightbulb,
  FaShieldVirus,
  FaQuestionCircle,
  FaAngleRight,
} from "react-icons/fa";

const FaqPage = () => {
  const defaultbtnProps = {
    size: "small",
    label: "Raise Ticket",
    btnClass: "black",
  };
  const queryProps ={
    label: "Collapses",
  items:[
    {
      query:"What is Idea Submission?",
      answer:"Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class.",
      id:"one"
    }, {
        query:"How can I submit an Idea?",
      answer:"Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class.",
      id:"two"
    }, {
        query:"Lorem ipsum",
      answer:"Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class.",
      id:"three"
    }
  ]
  }
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
    <div className="faq-page">
      <div className="help-section">
        <div className="btn-click">
          <Button {...defaultbtnProps} />
        </div>
        <h1>Hello, how can we help?</h1>
        <div className="d-flex justify-content-center pt-5 pb-5">
          <InputWithSearch size="large" placeholder="Ask a question" />

          <Button size="small" label="Search" btnClass="primary" />
        </div>
        <p className="mt-5 mb-3">
          or choose a category to quickly find the help you need
        </p>
        <div className="help-card">
          {helpCardList.map((item) => {
            return (
              <div className={`helpCard ${item.text}`} key={item.text}>
                <item.icon />
                <p className="pt-4">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="idea-section">
          <h2>Idea Submission</h2>
          <p className="mt-5 mb-3">
          Lorem ipsum dolor sit amet, cons adipisicing elit, sed do eiusmod. Lorem ipsum dolor sit amet.
        </p>
        <div className="collapse-sec">
        <Collapse {...queryProps} />

        </div>
      </div>
    </div>
  );
};

export default FaqPage;
