import React, { Fragment, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
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
import Layout from "../Layout";
import { Progress } from "antd";
import { BsDot, BsQuestionCircle } from "react-icons/bs";
import { Accordion, Modal } from "react-bootstrap";
import User from "../../assets/img/avatar1.png";
import { Button } from "../../stories/Button";
import { GrDocument } from "react-icons/gr";
import { AiFillPlayCircle } from "react-icons/ai";
import { InputBox } from "../../stories/InputBox/InputBox";
// import { SearchDropdown } from "../../stories/DropdownWithSearch/DropdownWithSearch";
import { SearchDropdown } from "../../stories/DropdownWithSearch/DropdownWithSearch.stories";
import Quiz from "../Quiz/Quiz";
import { QuizProvider } from "../../context/quiz.context";
import TakeAssesmentPopup from "./TakeAssesmentPopup";
import ModuleAssesmentImg from "../../media/moduleAssesmentPopup.svg";
import { VscCircleFilled } from "react-icons/vsc";
import { ProgressComp } from "../../stories/Progress/Progress";

//VIMEO REFERENCE
//https://github.com/u-wave/react-vimeo/blob/default/test/util/createVimeo.js

const AdminPlayVideoCourses = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [showQuiz, setHideQuiz] = useState(false);

  const history = useHistory();
  const [videosList, setVideosList] = useState({
    videoTitle: "",
    videoLink: "",
  });

  const [isVideo, setIsVideo] = useState(false);

  const [modulesList, setModulesList] = useState({
    questionType: "",
    question: "",
    choice: "",
  });
  const [videoIndex, setVideoIndex] = useState(0);
  const [volume, setVolume] = useState(1);
  const [paused, setPaused] = useState(false);
  const [item, setItem] = useState("");

  const progressBar = {
    label: "Progress",
    options: [{ id: 1, teams: "CSK", percent: 75, status: "active" }],
  };

  const assmentList = [
    {
      icon: <VscCheck />,
      title: "1. Module Name",
      time: " 7 mins",
      id: 115783408,
    },
  ];
  const items = [
    {
      section: "Inspiration",
      info: "1 lectures mins",
      lectures: [
        {
          name: "Inspiration video 1",
          time: "1:00",
          type: "video",
          Icon: AiFillPlayCircle,
          status: "done",
        },
        {
          name: "Inspiration video 2",
          time: "11:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Inspiration video 3",
          time: "02:50",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Inspiration video 4",
          time: "04:50",
          type: "video",
          Icon: AiFillPlayCircle,
          status: "done",
        },
        {
          name: "Work Sheet",
          time: "00:19",
          type: "doc",
          Icon: GrDocument,
          status: "done",
        },
        {
          name: "Quiz",
          time: "05:00",
          type: "quiz",
          Icon: BsQuestionCircle,
        },
        {
          name: "",
          time: "10:00",
          type: "modal",
          Icon: BsQuestionCircle,
        },
      ],
      sectionLectures: 4,
      sectionDuration: 18,
      id: "one",
    },
    {
      section: "Me & Us ",
      info: "1 lectures mins",
      lectures: [
        {
          name: "Me & Us video 1",
          time: "03:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Me & Us video 2",
          time: "15:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Work Sheet",
          time: "10:19",
          type: "doc",
          Icon: GrDocument,
        },
        {
          name1: "",
          time: "10:00",
          type: "quiz",
          Icon: BsQuestionCircle,
        },
      ],
      id: "two",
      sectionLectures: 2,
      sectionDuration: 8,
    },
    {
      section: "Feel and Find ",
      info: "1 lectures mins",
      lectures: [
        {
          name: "Feel and Find video 1",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Feel and Find video 2",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Feel and Find video 3",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Feel and Find video 4",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Work Sheet",
          time: "00:19",
          type: "doc",
          Icon: GrDocument,
        },
        {
          name: "Quiz",
          time: "05:00",
          type: "quiz",
          Icon: BsQuestionCircle,
        },
      ],
      id: "three",
      sectionLectures: 6,
      sectionDuration: 20,
    },
    {
      section: "Explore",
      info: "1 lectures mins",
      lectures: [
        {
          name: "Explore Video 1",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Explore Video 2",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Explore Video 3",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Explore Video 4",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Work Sheet",
          time: "10:19",
          type: "doc",
          Icon: GrDocument,
        },
        {
          name: "Quiz",
          time: "05:00",
          type: "quiz",
          Icon: BsQuestionCircle,
        },
      ],
      id: "four",
      sectionLectures: 4,
      sectionDuration: 20,
    },
    {
      section: "Give Ideas ",
      info: "1 lectures mins",
      lectures: [
        {
          name: "Give Ideas video 1",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Give Ideas video 2",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Give Ideas video 3",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Give Ideas video 4",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Work Sheet",
          time: "00:19",
          type: "doc",
          Icon: GrDocument,
        },
        {
          name: "Quiz",
          time: "15:00",
          type: "quiz",
          Icon: BsQuestionCircle,
        },
      ],
      id: "five",
      sectionLectures: 5,
      sectionDuration: 20,
    },
    {
      section: "Make & Test ",
      info: "1 lectures mins",
      lectures: [
        {
          name: "Make & Test video 1",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Make & Test video 2",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Make & Test video 3",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Make & Test video 4",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Make & Test video 5",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Work Sheet",
          time: "00:19",
          type: "doc",
          Icon: GrDocument,
        },
        {
          name: "Quiz",
          time: "08:00",
          type: "quiz",
          Icon: BsQuestionCircle,
        },
      ],
      id: "six",
      sectionLectures: 5,
      sectionDuration: 21,
    },
    {
      section: "Conclusion ",
      info: "1 lectures mins",
      lectures: [
        {
          name: "Conclusion Video 1",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Conclusion Video 2",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
        },
        {
          name: "Work Sheet",
          time: "00:30",
          type: "doc",
          Icon: GrDocument,
        },
        {
          name: "Quiz",
          time: "10:00",
          type: "quiz",
          Icon: BsQuestionCircle,
        },
        {
          name: "Assesment",
          time: "10:00",
          type: "quiz",
          Icon: BsQuestionCircle,
        },
      ],
      id: "seven",
      sectionLectures: 2,
      sectionDuration: 7,
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

  const handleSeeked = (event) => {
    // console.log("428 event fired: ", event);
  };

  // const handleTimeUpdate = (event) => {
  //   // console.log("432event fired: ", event);
  //   if (event.seconds > "11.62") {
  //     // setModalShow(true);
  //   }
  // };

  const handleTimeUpdate = (event) => {
    console.log("function fired: line no: 316", event);
    const videoLength = event.percent;
    const trimVideo = Math.round(videoLength);
    console.log(
      "calculations: ",
      "videoLength: ",
      videoLength,
      "trimVideo: ",
      trimVideo
    );
    if (Math.round(event.percent) === 0) {
      console.log("Pop-up screen functionality");
      setModalShow(true);
      handlePlayerPause();
    }
  };

  const handleSelect = (item, type) => {
    if (item === "Work Sheet") {
      setItem("Work Sheet");
      setHideQuiz(false);
    } else if (item === "Quiz") {
      setItem("Quiz");
    } else if (type === "video") {
      setItem("video");
      setHideQuiz(false);
    } else {
      setItem("");
      setHideQuiz(false);
    }
  };

  const video = assmentList[videoIndex];
  console.log(video);

  return (
    <Layout>
      <div className='courses-page'>
        <Row className='courses-head view-head py-5'>
          <Col md={12} lg={9} className='mb-5 mb-md-5 mb-lg-0'>
            <p className='course-breadcrum'>
              Courses <BsChevronRight /> Courses details
            </p>
            <div className='courses-type'>
              <BsLayoutTextSidebarReverse />
              <span className='card-type'>UniSolve Course</span>
              <BsLayoutTextSidebarReverse className='lessonsvg' />
              <span className='card-type'>7 Modules</span>
              <RiAwardFill className='lessonsvg' />
              <span className='card-type points'>26 Videos</span>
            </div>
          </Col>
          <Col md={12} lg={3} className='my-auto text-right'>
            <div className='progress-dropdown'>
              <CommonDropDownComp {...progressProps} />
            </div>
          </Col>
        </Row>
        <div className='py-5 my-5 px-5 container-fluid'>
          <Row className='m-0 courser-video-section '>
            <Col xl={4} className='course-assement order-2 order-xl-1'>
              <div className='assement-info'>
                <p className='content-title'>Course content</p>
                <div className='view-head'></div>
                {/* <div className='courses-type pb-3'>
                  <BsDot />
                  <span className='card-type'>13 sections</span>
                  <BsDot className='lessonsvg' />
                  <span className='card-type'>76 lectures</span>
                  <BsDot className='lessonsvg' />
                  <span className='card-type points'>11h 9m total length</span>
                </div> */}
                <div className='assement-item' id='scrollbar'>
                  <Accordion>
                    {items.map((course, index) => {
                      return (
                        <Accordion.Item
                          eventKey={index}
                          className='m-0 course-items'
                        >
                          <Accordion.Header className='question'>
                            <div className='course-sec'>
                              {/* <Avatar src={User} className="avatar-imgs" /> */}
                              <div className='course-title'>
                                {course.section}
                              </div>
                              <div className='course-time'>
                                <span>{course.sectionLectures} lectures</span>{" "}
                                <span>
                                  <BsDot />
                                  {course.sectionDuration}mins
                                </span>
                              </div>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className='course-list'>
                              {course.lectures.map((lecture, index) => {
                                return (
                                  <div className='course-sec-list'>
                                    <Row className='justify-content-between w-100'>
                                      <Col md={12} xl={10} className='my-auto'>
                                        <p className='course-icon'>
                                          <lecture.Icon
                                            className={
                                              lecture.status === "done" &&
                                              "done"
                                            }
                                          />

                                          <a
                                            onClick={() =>
                                              handleSelect(
                                                lecture.name,
                                                lecture.type
                                              )
                                            }
                                          >
                                            {lecture.name}
                                          </a>

                                          {lecture.type === "modal" ? (
                                            <span
                                              className='course-name'
                                              onClick={() => setModalShow(true)}
                                            >
                                              Assesment
                                            </span>
                                          ) : (
                                            ""
                                          )}
                                        </p>
                                      </Col>

                                      <Col
                                        md={12}
                                        xl={2}
                                        className='my-auto text-right'
                                      >
                                        <p className='course-time'>
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
              </div>
              {/* <div className='module-assement'>
                <div className='assement-info'>
                  <p className='content-title text-white'>Module Assessement</p>
                  <p className='module-text m-0'>
                    Test your knowledge of all skills in this module.
                  </p>
                  <p className='assement-link text-white pt-5'>
                    <span onClick={() => setModalShow(true)}>
                      Take assessment <BsChevronRight />
                    </span>
                    <figure>
                      <img
                        src={CourseVideo}
                        alt='module'
                        className='img-fluid'
                      />
                    </figure>
                  </p>
                </div>
              </div> */}
            </Col>

            <Col xl={8} className='course-video order-1 order-xl-2'>
              {item === "Quiz" && !showQuiz ? (
                <div
                  size='lg'
                  centered
                  className='modal-popup text-screen text-center  modal-popup'
                >
                  <div className='modal-content'>
                    <Modal.Header>
                      <Modal.Title className='w-100 d-block mb-2'>
                        Ready for the test on lessons?
                      </Modal.Title>
                      <p className='w-100 d-block'>
                        Test your course skills in a short test challenge!
                      </p>
                      <div class='row justify-content-center text-center'>
                        <div class='col col-lg-3'>
                          <p>
                            <VscCircleFilled style={{ color: "#067DE1" }} /> 5
                            Questions
                          </p>
                        </div>
                        <div class='col col-lg-3'>
                          <p>
                            <VscCircleFilled style={{ color: "#067DE1" }} /> 10
                            - 15 minutes
                          </p>
                        </div>
                      </div>
                    </Modal.Header>

                    <Modal.Body>
                      <figure>
                        <img
                          src={ModuleAssesmentImg}
                          alt='test'
                          className='img-fluid w-50'
                        />
                      </figure>
                      <Button
                        label="Let's Start"
                        btnClass='primary mt-4'
                        size='small'
                        onClick={() => setHideQuiz(true)}
                      />
                    </Modal.Body>
                  </div>
                </div>
              ) : item === "Work Sheet" ? (
                <Fragment>
                  <ProgressComp className='w-100' {...progressBar} />
                  <Card className='course-sec-basic p-5'>
                    <CardBody>
                      <CardTitle className=' text-left pt-4 pb-4' tag='h6'>
                        Unisolve WorkSheet
                      </CardTitle>
                      <p>
                        Description or Instructions details will display here...
                      </p>
                      <Button
                        label='Download Worksheet'
                        btnClass='primary mt-4'
                        size='small'
                      />
                    </CardBody>
                  </Card>
                </Fragment>
              ) : item === "video" ? (
                <Card className='embed-container'>
                  <Vimeo
                    video={video.id}
                    volume={volume}
                    paused={paused}
                    onPause={handlePlayerPause}
                    onPlay={handlePlayerPlay}
                    onSeeked={handleSeeked}
                    onTimeUpdate={handleTimeUpdate}
                  />
                </Card>
              ) : (
                <Fragment>
                  <Card className='course-sec-basic p-5'>
                    <CardBody>
                      <CardTitle className=' text-left pt-4 pb-4' tag='h5'>
                        Get Started
                      </CardTitle>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularise
                      </p>
                      <CardTitle className=' text-left pt-4 pb-4' tag='h6'>
                        Navigate in the User Guide
                      </CardTitle>
                    </CardBody>
                  </Card>
                </Fragment>
              )}

              {showQuiz ? <Quiz /> : ""}
            </Col>
          </Row>
        </div>
      </div>
      <TakeAssesmentPopup show={modalShow} onHide={() => setModalShow(false)} />
    </Layout>
  );
};

export default withRouter(AdminPlayVideoCourses);

// lecture.type === "video" ? (
//   <a
//     href={`#!/video/${index}`}
//     className='course-name'
//     onClick={() => selectVideo(index)}
//   >
//     {lecture.name}
//   </a>
