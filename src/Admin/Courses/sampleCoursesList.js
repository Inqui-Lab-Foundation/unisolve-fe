import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "./style.scss";
import { InputWithSearchComp } from "../../stories/InputWithSearch/InputWithSearch";
import { BsChevronRight, BsFilter } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";
import { ImageCardComp } from "../../stories/ImageCard/ImageCard";
import { CommonDropDownComp } from "../../stories/CommonDropdown/CommonDropdownComp";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { Avatar, Icon } from "antd";
import Layout from "../../Admin/Layout";
// import { useHistory } from "react-router-dom";
const sampleCoursesList = (props) => {
  const SearchProps = {
    placeholder: "Search Course",
  };

  //   const history = useHistory();
  //   const data = (history && history.location && history.location.item) || {};
  //   console.log("===============", data);
  const filterDropProps = {
    label: "Filter by",
    Icon: BsFilter,
    options: [
      { name: "Course - 1", path: "/" },
      { name: "Course - 2", path: "/" },
    ],
  };
  const ImageCardProps = {
    label: "ImageCardComp",
    imgUrl: "https://picsum.photos/318/180",
    description: "How can I improve self care with Ikigai?",
    count: "1,288 students",
    time: "5m",
    course_name: "Health",
  };

  return (
    <Layout>
      <div className="courses-page">
        <Row className="courses-head view-head py-5">
          <Col md={12} lg={6} className="mb-5 mb-md-5 mb-lg-0">
            <p className="course-breadcrum">
              Courses <BsChevronRight /> Courses details
            </p>
            <h5 className="text-white">Course Title</h5>
            <div className="courses-type">
              <BsLayoutTextSidebarReverse />
              <span className="card-type">Health</span>
              <BsLayoutTextSidebarReverse className="lessonsvg" />
              <span className="card-type">6 lessons</span>
              <FaMedal className="lessonsvg" />
              <span className="card-type points">
                300 possible mastry points
              </span>
            </div>
          </Col>
          <Col md={12} lg={6} className="my-auto">
            <div className="d-flex filter-drop filter-drop-single w-100">
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
        <Row className="m-0">
          <Col className="p-0">
            {/* <img
              src={
                "http://15.207.254.154:3002/courses/Screenshot 2022-04-21 101916.png"
              }
              // className="card-img-top"
              // alt={title}
            /> */}
            {/* <img
              src={"https://picsum.photos/318/180"}
              style={{ width: 400, height: 400 }}
            />
            <h1>{data.course_name}</h1>
            <p>{data.description}</p> */}
            <div className="courses-list container pt-5 mt-5">
              <div className="pb-5">
                <div>
                  <h2>Video lessons</h2>
                </div>
                <Row className="mt-5 course-section">
                  <ImageCardComp {...ImageCardProps} />

                  <ImageCardComp {...ImageCardProps} />
                  <ImageCardComp {...ImageCardProps} />
                  <ImageCardComp {...ImageCardProps} />
                </Row>
              </div>
              <div className="mt-5">
                <div>
                  <h2>Module Assessement</h2>
                </div>
                <div className="mt-5 course-section">
                  <ImageCardComp {...ImageCardProps} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default withRouter(sampleCoursesList);
