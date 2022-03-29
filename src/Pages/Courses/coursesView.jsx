import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "./style.scss";
import { InputWithSearchComp } from "../../stories/InputWithSearch/InputWithSearch";
import { BsChevronRight, BsFilter } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";
import { ImageCardComp } from "../../stories/ImageCard/ImageCard";
import { DropDownComp } from "../../stories/DropdownComp/DropdownComp";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { Avatar, Icon } from "antd";
import Layout from "../../Layout";
const CourseView = (props) => {
  const SearchProps = {
    size: "small",
    placeholder: "Search Course",
  };

  const filterDropProps = {
    label: "Filter by",
    labelIcon: BsFilter,
  };
  const ImageCardProps = {
    label: "ImageCardComp",
    imgUrl: "https://picsum.photos/318/180",
    title: "How can I improve self care with Ikigai?",
    count: "1,288 students",
    time: "5m",
    type: "Health",
  };

  return (
    <Layout>
      <div className="courses-page">
        <Row className="courses-head view-head py-5">
          <Col md={12} lg={6} className="mb-5 mb-md-5 mb-lg-0">
            <p className="course-breadcrum">
              Courses <BsChevronRight /> Courses details
            </p>
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
                  <DropDownComp {...filterDropProps} />
                </Col>
              </Row>
            </div>
          </Col>

          {/* <Col className="p-0">
          <div className="courses-head view-head">
            <div>
              <p className="course-breadcrum">
                Courses <BsChevronRight /> Courses details
              </p>
              <h2 className="header-title">Courses by Unisolve</h2>
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
            </div>
            <div className="d-flex filter-drop filter-drop-single">
              <InputWithSearchComp {...SearchProps} />
              <DropDownComp {...filterDropProps} />
            </div>
          </div>
        </Col> */}
        </Row>
        <Row className="m-0">
          <Col className="p-0">
            <div className="courses-list container pt-5 mt-5">
              <div className="pb-5">
                <div>
                  <h2>Video lessons</h2>
                </div>
                <Row className="mt-5 course-section">
                  {/* <div onClick={() => props.history.push("/playCourse")}> */}
                  <ImageCardComp
                    {...ImageCardProps}
                    onClick={() => props.history.push("/playCourse")}
                  />
                  {/* </div> */}
                  <ImageCardComp {...ImageCardProps} />
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

export default withRouter(CourseView);
