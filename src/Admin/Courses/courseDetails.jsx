import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "./style.scss";
import { InputWithSearchComp } from "../../stories/InputWithSearch/InputWithSearch";
import {
  BsChevronRight,
  BsFilter,
  BsLayoutTextSidebarReverse,
} from "react-icons/bs";
import { RiAwardFill } from "react-icons/ri";
import { ImageCardComp } from "../../stories/ImageCard/ImageCard";
import { CommonDropDownComp } from "../../stories/CommonDropdown/CommonDropdownComp";
import Layout from "../../Student/Layout.jsx";
const Courses = (props) => {
  const SearchProps = {
    placeholder: "Search Course",
  };

  const filterDropProps = {
    name: "Filter by",
    Icon: BsFilter,
    options: [
      { name: "Course - 1", path: "/playCourse" },
      { name: "Course - 2", path: "/playCourse" },
    ],
  };
  const ImageCardProps = {
    label: "ImageCardComp",
    imgUrl: "https://picsum.photos/318/180",
    title: "How can I improve self care with Ikigai?",
    count: "1,288 students",
    time: "5m",
    type: "Health",
  };

  const CoursesList = [
    {
      text: "Courses to help you learn about",
      title: "Inspiration",
      cards: [
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
      ],
    },
  ];

  return (
    <Layout>
      <div className="courses-page">
        <Row className="courses-head view-head w-100 mx-0 bg-white">
          <Col md={12} lg={6} className="mb-5 mb-md-5 mb-lg-0">
            <p className="course-breadcrum">
              Courses <BsChevronRight /> Courses details
            </p>
            <div className="courses-type">
              <BsLayoutTextSidebarReverse />
              <span className="card-type">Health</span>
              <BsLayoutTextSidebarReverse className="lessonsvg" />
              <span className="card-type">6 lessons</span>
              <RiAwardFill className="lessonsvg" />
              <span className="card-type points">
                300 possible mastry points
              </span>
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="d-flex filter-drop w-100 pr-0">
              <Row className="w-100">
                <Col md={9} lg={9}>
                  <InputWithSearchComp {...SearchProps} />
                </Col>
                <Col md={3} lg={3}>
                  <CommonDropDownComp {...filterDropProps} />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Container>
          <div className="courses-list pt-5 mt-5">
            {CoursesList &&
              CoursesList.map((course, i) => {
                return (
                  <div key={i} className="courses-list   pb-5">
                    <p>{course.text}</p>
                    <div className="d-flex justify-content-between mb-3 mobile-view">
                      <h2>{course.title}</h2>
                    </div>
                    <Row className=" mb-5 course-section">
                      {course.cards.map((item, index) => {
                        return (
                          <ImageCardComp
                            {...item}
                            key={index}
                            onClick={() => props.history.push("/playCourse")}
                          />
                        );
                      })}
                    </Row>
                  </div>
                );
              })}
          </div>
          {/* </Col> */}
          {/* </Row> */}
        </Container>
      </div>
    </Layout>
  );
};

export default withRouter(Courses);
