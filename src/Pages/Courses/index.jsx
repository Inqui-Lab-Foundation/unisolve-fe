import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "./style.scss";
import { InputWithSearchComp } from "../../stories/InputWithSearch/InputWithSearch";
import { BsChevronRight, BsFilter } from "react-icons/bs";
import { ImageCardComp } from "../../stories/ImageCard/ImageCard";
import { DropDownComp } from "../../stories/DropdownComp/DropdownComp";
import Layout from "../../Layout";
const Courses = (props) => {
  const SearchProps = {
    size: "small",
  };

  const filterDropProps = {
    label: "Filter by",
    labelIcon: true,
    options: ["Filter by", "Course-1", "Course-2", "Course-3"],
  };
  const ImageCardProps = {
    label: "ImageCardComp",
    imgUrl: "https://picsum.photos/318/180",
    title: "How can I improve self care with Ikigai?",
    count: "1,288 students",
    time: "5m",
    type: "Health",
  };

  const coursecardinfo = [
    {
      label: "ImageCardComp",
      imgUrl: "https://picsum.photos/318/180",
      title: "Our Future",
      count: "1,288 students",
      time: "5m",
      type: "Inspiration",
    },
    {
      label: "ImageCardComp",
      imgUrl: "https://picsum.photos/318/180",
      title: "Solver in us",
      count: "1,288 students",
      time: "5m",
      type: "Inspiration",
    },
    {
      label: "ImageCardComp",
      imgUrl: "https://picsum.photos/318/180",
      title: "Innovation for better life",
      count: "1,288 students",
      time: "5m",
      type: "Inspiration",
    },
    {
      label: "ImageCardComp",
      imgUrl: "https://picsum.photos/318/180",
      title: "Sustainable Development Goals",
      count: "1,288 students",
      time: "5m",
      type: "Inspiration",
    },
  ];

  const coursecardinfo2 = [
    {
      label: "ImageCardComp",
      imgUrl: "https://picsum.photos/318/180",
      title: "Thinking Critically and Creatively",
      count: "1,288 students",
      time: "5m",
      type: "Inspiration",
    },
    {
      label: "ImageCardComp",
      imgUrl: "https://picsum.photos/318/180",
      title: "Brainstorming techniques + Generating solutions",
      count: "1,288 students",
      time: "5m",
      type: "Inspiration",
    },
    {
      label: "ImageCardComp",
      imgUrl: "https://picsum.photos/318/180",
      title: "Selecting a solution",
      count: "1,288 students",
      time: "5m",
      type: "Inspiration",
    },
    {
      label: "ImageCardComp",
      imgUrl: "https://picsum.photos/318/180",
      title: "Sustainable Development Goals",
      count: "1,288 students",
      time: "5m",
      type: "Inspiration",
    },
  ];

  const CoursesList = [
    {
      text: "Courses to help you learn about",
      title: "Inspiration",
    },
    {
      text: "Courses to help you learn about",
      title: "How to think about an innovation",
    },
  ];

  return (
    <Layout>
      <div className="courses-page">
        <Row className="courses-head w-100 mx-0 bg-white">
          <Col md={12} lg={6}>
            <h2 className="my-auto">Courses by Unisolve</h2>
          </Col>
          <Col md={12} lg={6}>
            <div className="d-flex filter-drop w-100">
              <Row className="w-100">
                <Col md={9} lg={9}>
                  <InputWithSearchComp {...SearchProps} />
                </Col>
                <Col md={3} lg={3}>
                  <DropDownComp {...filterDropProps} />
                </Col>
              </Row>
            </div>
          </Col>

          {/* <Col className="p-0">
          <div className="courses-head">
            <div>
              <h2>Courses by Unisolve</h2>
            </div>
            <div className="d-flex filter-drop">
              <InputWithSearchComp {...SearchProps} />
              <DropDownComp {...filterDropProps} />
            </div>
          </div>
        </Col> */}
        </Row>
        <Row className="m-0">
          <Col className="p-0">
            <div className="courses-list">
              {CoursesList &&
                CoursesList.map((course) => {
                  return (
                    <Row className="pb-5">
                      <p>{course.text}</p>
                      <div className="d-flex justify-content-between mb-3 mobile-view">
                        <h2>{course.title}</h2>
                        {/* <span
                          className="view-link"
                          onClick={() => props.history.push("/coursesView")}
                        >
                          view all <BsChevronRight />
                        </span> */}
                      </div>
                      <Row className=" mb-5 course-section">
                        {coursecardinfo.map((item, index) => {
                          return (
                            <ImageCardComp
                              {...item}
                              onClick={() => props.history.push("/playCourse")}
                            />
                          );
                        })}

                        {/* <ImageCardComp
                          {...ImageCardProps}
                          onClick={() => props.history.push("/playCourse")}
                        />
                        <ImageCardComp
                          {...ImageCardProps}
                          onClick={() => props.history.push("/playCourse")}
                        />
                        <ImageCardComp
                          {...ImageCardProps}
                          onClick={() => props.history.push("/playCourse")}
                        />
                        <ImageCardComp
                          {...ImageCardProps}
                          onClick={() => props.history.push("/playCourse")}
                        /> */}
                      </Row>
                    </Row>
                  );
                })}
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default withRouter(Courses);
