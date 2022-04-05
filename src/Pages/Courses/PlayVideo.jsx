import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "./style.scss";
import { BsChevronRight, BsFilter } from "react-icons/bs";
import { RiAwardFill } from "react-icons/ri";
import { CommonDropDownComp } from "../../stories/CommonDropdown/CommonDropdownComp";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs";
import { FiPlayCircle } from "react-icons/fi";
import { VscCheck } from "react-icons/vsc";
import CourseVideo from "../../assets/img/courseVideo.png";
import { Avatar, Icon } from "antd";
import Vimeo from "@u-wave/react-vimeo";
import Layout from "../../Layout";
import { Progress } from "antd";
import { BsDot, BsQuestionCircle } from "react-icons/bs";
import { Accordion } from "react-bootstrap";
import User from "../../assets/img/avatar1.png";
import { Button } from "../../stories/Button";
import { GrDocument } from "react-icons/gr";
import { AiFillPlayCircle } from "react-icons/ai";

//VIMEO REFERENCE
//https://github.com/u-wave/react-vimeo/blob/default/test/util/createVimeo.js

const PlayVideoCourses = (props) => {
  //   const videos = [
  //     { id: 115783408, name: "Jambinai - Connection" },
  //     { id: 162959050, name: "Jambinai - They Keep Silence" },
  //     { id: 169408731, name: "Hoody - Like You" },
  //   ];

  const assmentList = [
    {
      icon: <VscCheck />,
      title: "1. Module Name",
      time: " 6 mins",
      id: 115783408,
    },
    {
      icon: <BsFillPauseFill />,
      title: "2. Module Name",
      time: " 6 mins",
      id: 162959050,
    },
    {
      icon: "",
      title: "3. Module Name",
      time: " 6 mins",
      id: 169408731,
    },
    {
      icon: "",
      title: "4. Module Name",
      time: " 6 mins",
      id: 169408731,
    },
    {
      icon: "",
      title: "5. Module Name",
      time: " 6 mins",
      id: 169408731,
    },
    {
      icon: "",
      title: "6. Module Name",
      time: " 6 mins",
      id: 169408731,
    },
    {
      icon: "",
      title: "7. Module Name",
      time: " 6 mins",
      id: 169408731,
    },
  ];
  const items = [
    {
      section: "Introduction ",
      info: "3 lectures mins",
      lectures: [
        {
          name: "Getting Started",
          time: "00:19",
          type: "doc",
          Icon: GrDocument,
        },
        {
          name: "Project Management fundamentals",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Section 1 Quiz",
          time: "05:00",
          type: "quiz",
          Icon: BsQuestionCircle,
        },
      ],
      id: "one",
    },
    {
      section: "Project Delivery",
      info: "3 lectures mins",
      lectures: [
        {
          name: "The phases of a Project",
          time: "00:19",
          type: "doc",
          Icon: GrDocument,
        },
        {
          name: "Project Management fundamentals-1",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Project Management fundamentals-2",
          time: "03:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Section 2 Quiz",
          time: "05:00",
          type: "quiz",
          Icon: BsQuestionCircle,
        },
      ],
      id: "two",
    },
    {
      section: "Management Tools",
      info: "5 lectures mins",
      lectures: [
        {
          name: "The phases of a Project",
          time: "00:19",
          type: "doc",
          Icon: GrDocument,
        },
        {
          name: "Project Management fundamentals-1",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Project Management fundamentals-2",
          time: "03:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Section 2 Quiz",
          time: "05:00",
          type: "quiz",
          Icon: BsQuestionCircle,
        },
      ],
      id: "three",
    },
    {
      section: "Collabration",
      info: "5 lectures mins",
      lectures: [
        {
          name: "The phases of a Project",
          time: "00:19",
          type: "doc",
          Icon: GrDocument,
        },
        {
          name: "Project Management fundamentals-1",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Project Management fundamentals-2",
          time: "03:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Section 2 Quiz",
          time: "05:00",
          type: "quiz",
          Icon: BsQuestionCircle,
        },
      ],
      id: "four",
    },
    {
      section: "Teamwork",
      info: "5 lectures mins",
      lectures: [
        {
          name: "The phases of a Project",
          time: "00:19",
          type: "doc",
          Icon: GrDocument,
        },
        {
          name: "Project Management fundamentals-1",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Project Management fundamentals-2",
          time: "03:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Section 2 Quiz",
          time: "05:00",
          type: "quiz",
          Icon: BsQuestionCircle,
        },
      ],
      id: "five",
    },
    {
      section: "More about Project",
      info: "5 lectures mins",
      lectures: [
        {
          name: "The phases of a Project",
          time: "00:19",
          type: "doc",
          Icon: GrDocument,
        },
        {
          name: "Project Management fundamentals-1",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Project Management fundamentals-2",
          time: "03:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Section 2 Quiz",
          time: "05:00",
          type: "quiz",
          Icon: BsQuestionCircle,
        },
      ],
      id: "six",
    },
    {
      section: "Wrap up the course",
      info: "2 lectures 5 mins",
      lectures: [
        {
          name: "The phases of a Project",
          time: "00:19",
          type: "doc",
          Icon: GrDocument,
        },
        {
          name: "Project Management fundamentals-1",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Project Management fundamentals-2",
          time: "03:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Section 2 Quiz",
          time: "05:00",
          type: "quiz",
          Icon: BsQuestionCircle,
        },
      ],
      id: "seven",
    },
  ];
  const [videoIndex, setVideoIndex] = useState(0);
  const [volume, setVolume] = useState(1);
  const [paused, setPaused] = useState(false);
  const handlePause = (event) => {
    setPaused(event.target.checked);
  };

  const handlePlayerPause = (event) => {
    setPaused(true);
  };
  const handlePlayerPlay = (event) => {
    setPaused(false);
  };

  const handleVolume = (event) => {
    setVolume(parseFloat(false));
  };

  const selectVideo = (index) => {
    setVideoIndex(index);
  };

  const SearchProps = {
    size: "small",
    placeholder: "Search Course",
  };

  const progressProps = {
    options: [
      {
        name: "Finish this course to get your certificate.",
        path: "/playCourse",
      },
    ],
    name: "Your Progress",
    Icon: RiAwardFill,
    progress: true,
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

  const video = assmentList[videoIndex];
  return (
    <Layout>
      <div className="courses-page">
        <Row className="courses-head view-head py-5">
          <Col md={12} lg={9} className="mb-5 mb-md-5 mb-lg-0">
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
          <Col md={12} lg={3} className="my-auto text-right">
            <div className="progress-dropdown">
              <CommonDropDownComp {...progressProps} />
            </div>
          </Col>
        </Row>
        <div className="py-5 my-5 px-5 container-fluid">
          <Row className="m-0 courser-video-section ">
            <Col xl={4} className="course-assement order-2 order-xl-1">
              <div className="assement-info">
                <p className="content-title">Course content</p>
                <div className="view-head"></div>
                <div className="courses-type pb-3">
                  <BsDot />
                  <span className="card-type">13 sections</span>
                  <BsDot className="lessonsvg" />
                  <span className="card-type">76 lectures</span>
                  <BsDot className="lessonsvg" />
                  <span className="card-type points">11h 9m total length</span>
                </div>
                <div className="assement-item" id="scrollbar">
                  <Accordion>
                    {items.map((course, index) => {
                      return (
                        <Accordion.Item
                          eventKey={index}
                          className="mt-3 mb-4 course-items"
                        >
                          <Accordion.Header className="question">
                            <div className="course-sec">
                              {/* <Avatar src={User} className="avatar-imgs" /> */}
                              <div className="course-title">
                                {course.section}
                              </div>
                              <div className="course-time">
                                <span>3 lectures</span>{" "}
                                <span>
                                  <BsDot />
                                  6mins
                                </span>
                              </div>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="course-list">
                              {course.lectures.map((lecture, index) => {
                                return (
                                  <div className="course-sec-list">
                                    <Row className="justify-content-between w-100">
                                      <Col md={12} xl={10} className="my-auto">
                                        <p className="course-icon">
                                          <lecture.Icon />

                                          {lecture.type === "video" ? (
                                            <a
                                              href={`#!/video/${index}`}
                                              className="course-name"
                                              onClick={() => selectVideo(index)}
                                            >
                                              {lecture.name}
                                            </a>
                                          ) : (
                                            <span> {lecture.name} </span>
                                          )}
                                        </p>
                                      </Col>
                                      <Col
                                        md={12}
                                        xl={2}
                                        className="my-auto text-right"
                                      >
                                        <p className="course-time">
                                          {lecture.time}
                                        </p>
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

                  {/* <ul>
                    {assmentList.map((choice, index) => {
                      return (
                        <li>
                          <div className="d-flex assmentList">
                            <div className="video-status-icon">
                              {choice.icon}
                            </div>
                            <div>
                              <a
                                href={`#!/video/${index}`}
                                className={`moduleName collection-item ${
                                  video === choice ? "active" : ""
                                }`}
                                onClick={() => selectVideo(index)}
                              >
                                {choice.title}
                              </a>
                              <p className="videoTime">
                                <FiPlayCircle /> {choice.time}
                              </p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul> */}
                </div>
              </div>
              <div className="module-assement">
                <div className="assement-info">
                  <p className="content-title">Module Assessement</p>
                  <p className="module-text m-0">
                    Test your knowledge of all skills in this module
                  </p>
                  <p className="assement-link">
                    Take assessment <BsChevronRight />
                    <img src={CourseVideo} />
                  </p>
                </div>
              </div>
            </Col>

            <Col xl={8} className="course-video order-1 order-xl-2">
              <div>
                <Vimeo
                  video={video.id}
                  // width={700}
                  volume={volume}
                  paused={paused}
                  onPause={handlePlayerPause}
                  onPlay={handlePlayerPlay}
                />
                {/* <Vimeo video="674904051" autoplay width={700} height={400} /> */}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(PlayVideoCourses);
