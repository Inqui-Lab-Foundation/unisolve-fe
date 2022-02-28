import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./style.scss";
import { InputWithSearchComp } from "../../stories/InputWithSearch/InputWithSearch";
import { BsChevronRight } from "react-icons/bs";
import { ImageCardComp } from "../../stories/ImageCard/ImageCard";

const Courses = () => {
  const SearchProps = {
    size: "small",
  };
  const ImageCardProps = {
    label: "ImageCardComp",
    imgUrl: "https://picsum.photos/318/180",
    title: "How can I improve self care with Ikigai?",
    count: "1,288 students",
    time: "5m",
    type:"Health"
  };

  return (
    <div className="courses-page">
      <Row className="m-0">
        <Col className="p-0">
          <div className="courses-head">
            <div>
              <h2>Courses by Unisolve</h2>
            </div>
            <div className="d-flex">
              <InputWithSearchComp {...SearchProps} />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="m-0">
        <Col className="p-0">
          <div className="courses-list">
            <div className="pb-3">
            <p>Courses to help you learn about</p>
            <div className="d-flex justify-content-between">
              <h2>Taking care of yourself</h2>
              <span>
                view all <BsChevronRight />
              </span>
            </div>
            <div className="mt-3 course-section">
              <ImageCardComp {...ImageCardProps} />
              <ImageCardComp {...ImageCardProps} />
              <ImageCardComp {...ImageCardProps} />
              <ImageCardComp {...ImageCardProps} />
            </div>
            </div>
            <div className="mt-5">
            <p>Courses to help you learn about</p>
            <div className="d-flex justify-content-between">
              <h2>Taking care of yourself</h2>
              <span>
                view all <BsChevronRight />
              </span>
            </div>
            <div className="mt-3 course-section">
              
              <ImageCardComp {...ImageCardProps} />
              <ImageCardComp {...ImageCardProps} />
              <ImageCardComp {...ImageCardProps} />
              <ImageCardComp {...ImageCardProps} />
            </div>
            </div>
          </div>
        </Col>
      </Row>
    
    </div>
  );
};

export default Courses;
