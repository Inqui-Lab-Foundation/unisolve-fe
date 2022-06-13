import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Card, CardBody } from "reactstrap";
import { useHistory, withRouter } from "react-router-dom";
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
import { InputBox } from "../../stories/InputBox/InputBox";
// import { SearchDropdown } from "../../stories/DropdownWithSearch/DropdownWithSearch";
import { SearchDropdown } from "../../stories/DropdownWithSearch/DropdownWithSearch.stories";

//VIMEO REFERENCE
//https://github.com/u-wave/react-vimeo/blob/default/test/util/createVimeo.js

const AdminPlayVideoCourses = (props) => {
  const history = useHistory();
  const [videosList, setVideosList] = useState({
    videoTitle: "",
    videoLink: "",
  });
  const [modulesList, setModulesList] = useState({
    questionType: "",
    question: "",
    choice: "",
  });
  const [videoIndex, setVideoIndex] = useState(0);
  const [volume, setVolume] = useState(1);
  const [paused, setPaused] = useState(false);
  const [item, setItem] = useState("");

  const assmentList = [
    {
      icon: <VscCheck />,
      title: "1. Module Name",
      time: " 6 mins",
      id: 115783408,
    },
  ];
  const items = [
    {
      section: "Introduction ",
      info: "1 lectures mins",
      lectures: [
        {
          name: "Getting Started",
          time: "00:19",
          type: "doc",
          Icon: GrDocument,
        },
        // {
        //   name: "Project Management fundamentals",
        //   time: "05:00",
        //   type: "video",
        //   Icon: AiFillPlayCircle,
        // },
        // {
        //   name: "Section 1 Quiz",
        //   time: "05:00",
        //   type: "quiz",
        //   Icon: BsQuestionCircle,
        // },
      ],
      id: "one",
    },
  ];

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

  const handleItem = (item) => {
    setItem(item);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setVideosList({
      ...videosList,
      [name]: value,
    });
  };

  const handleModulesOnChange = (e) => {
    const { name, value } = e.target;
    setModulesList({
      ...modulesList,
      [name]: value,
    });
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
              {/* <div className="assement-info">
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
                <div className="assement-item">
                  <Accordion>
                    {items.map((course, index) => {
                      return (
                        <Accordion.Item
                          eventKey={index}
                          className="mt-3 mb-4 course-items"
                        >
                          <Accordion.Header className="question">
                            <div className="course-sec">
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
                </div>
              </div> */}
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

                <hr></hr>
                <Row>
                  <Col>
                    <Button
                      label="Add Modules"
                      btnClass="primary-outline"
                      size="small"
                      // onClick={() =>
                      //   props.history.push("/admin/addcourses-details")
                      // }
                      onClick={() => handleItem("Modules")}
                    />
                  </Col>
                  <Col className="submit-btn">
                    <Button
                      label="Add Videos"
                      btnClass="primary-outline"
                      size="small"
                      // onClick={() =>
                      //   props.history.push("/admin/addcourses-details")
                      // }
                      onClick={() => handleItem("Videos")}
                    />
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col>
                    <Button
                      label="Add Assignment"
                      btnClass="primary-outline"
                      size="small"
                      onClick={() => handleItem("Assignment")}
                    />
                  </Col>
                  <Col className="submit-btn">
                    <Button
                      label="Add Worksheet"
                      btnClass="primary-outline"
                      size="small"
                      onClick={() => handleItem("Worksheet")}
                    />
                  </Col>
                </Row>
              </div>
            </Col>

            <Col xl={8} className="course-video order-1 order-xl-2">
              {/* <div>
                <Vimeo
                  video={video.id}
                  volume={volume}
                  paused={paused}
                  onPause={handlePlayerPause}
                  onPlay={handlePlayerPlay}
                />
              </div> */}

              <Row>
                <Col md={12}>
                  {item === "Videos" ? (
                    <Card className="w-100  mb-5 p-4">
                      <CardBody>
                        <div className="create-ticket">
                          <p className="m-0 question">Video lession title</p>
                          <span className="que-text mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </span>
                          <InputBox
                            id="videoTitle"
                            name="videoTitle"
                            placeholder="videoTitle"
                            onChange={(e) => handleOnChange(e)}
                            value={videosList.videoTitle}
                          />
                        </div>
                        <div className="create-ticket my-5">
                          <p className="m-0 question">Video lesson link</p>
                          <span className="que-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </span>
                          <InputBox
                            id="videoLink"
                            name="videoLink"
                            placeholder="videoLink"
                            onChange={(e) => handleOnChange(e)}
                            value={videosList.videoLink}
                          />
                          <Row>
                            <Col className="mx-4">
                              <Button
                                label="Save"
                                btnClass="primary"
                                size="small"
                                // onClick={(e) => handleVideosRemove(e, index)}
                              />
                            </Col>
                            <Col className="mx-4">
                              <Button
                                label="Save Add"
                                btnClass="primary"
                                size="small"
                                // onClick={(e) => handleVideosRemove(e, index)}
                              />
                            </Col>
                          </Row>
                        </div>
                      </CardBody>
                    </Card>
                  ) : item === "Modules" ? (
                    <Col md={12} className="choice-module">
                      <h2>Module Assessement</h2>
                      <div className="w-100  mb-5 p-4 bg-white">
                        <Accordion defaultActiveKey="0">
                          <Accordion.Item eventKey="0">
                            <Row>
                              <Col md={12}>
                                <p className="m-0 question">Choices</p>
                                <Accordion.Header>Question</Accordion.Header>
                              </Col>
                            </Row>
                            <Accordion.Body>
                              <div className="create-ticket">
                                <p className="m-0 question">Question type</p>
                                <SearchDropdown />
                              </div>
                              <div className="create-ticket my-5">
                                <p className="m-0 question">Question</p>
                                <InputBox
                                  id="question"
                                  name="question"
                                  placeholder="question"
                                  onChange={(e) => handleModulesOnChange(e)}
                                  value={modulesList.question}
                                />
                              </div>
                              <div className="create-ticket ">
                                <p className="m-0 question">Choice </p>
                                <InputBox
                                  id="choice"
                                  name="choice"
                                  placeholder="choice"
                                  onChange={(e) => handleModulesOnChange(e)}
                                  value={modulesList.choice}
                                />
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Row>
                            <Col className="mx-4">
                              <Button
                                label="Save"
                                btnClass="primary"
                                size="small"
                                // onClick={(e) => handleVideosRemove(e, index)}
                              />
                            </Col>
                            <Col className="mx-4">
                              <Button
                                label="Save Add"
                                btnClass="primary"
                                size="small"
                                // onClick={(e) => handleVideosRemove(e, index)}
                              />
                            </Col>
                          </Row>
                        </Accordion>
                      </div>
                    </Col>
                  ) : item === "Assignment" ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                      }}
                    >
                      <h1> No AssignMent Found </h1>
                    </div>
                  ) : item === "Worksheet" ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                      }}
                    >
                      <h1> No Worksheet Found </h1>
                    </div>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                      }}
                    >
                      <h1> No Data Found </h1>
                    </div>
                    // <div>
                    //   <Vimeo
                    //     video={video.id}
                    //     volume={volume}
                    //     paused={paused}
                    //     onPause={handlePlayerPause}
                    //     onPlay={handlePlayerPlay}
                    //   />
                    // </div>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(AdminPlayVideoCourses);
