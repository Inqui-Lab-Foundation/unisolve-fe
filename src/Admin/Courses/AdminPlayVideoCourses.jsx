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
import { FileComp } from "../../stories/FileComp/FileComp";
import { legacy_createStore } from "redux";
import { useEffect } from "react";
import { IoCheckmarkDoneCircleSharp, IoTimeOutline } from "react-icons/io5";

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
          name: "1. Inspiration video",
          time: "01:00",
          type: "video",
          Icon: AiFillPlayCircle,
          status: "done",
          compteted: true,
        },
        {
          name: "2. Inspiration video",
          time: "11:00",
          type: "video",
          Icon: AiFillPlayCircle,
          status: "done",
          compteted: true,
        },
        {
          name: "3. Inspiration video",
          time: "02:50",
          type: "video",
          Icon: AiFillPlayCircle,
          status: "done",
          compteted: true,
        },
        {
          name: "4. Inspiration video",
          time: "04:50",
          type: "video",
          Icon: AiFillPlayCircle,

          compteted: false,
        },
        {
          name: "Work Sheet",
          time: "00:19",
          type: "doc",
          Icon: GrDocument,
          status: "done",
          compteted: false,
        },
        {
          name: "Quiz",
          time: "05:00",
          type: "quiz",
          Icon: BsQuestionCircle,
          status: "done",
          compteted: true,
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
          name: "5. Me & Us video",
          time: "03:00",
          type: "video",
          Icon: AiFillPlayCircle,
          compteted: false,
        },
        {
          name: "6. Me & Us video",
          time: "15:00",
          type: "video",
          Icon: AiFillPlayCircle,
          compteted: false,
        },
        {
          name: "Work Sheet",
          time: "10:19",
          type: "doc",
          Icon: GrDocument,
          compteted: false,
        },
        {
          name: "Quiz",
          time: "10:00",
          type: "quiz",
          Icon: BsQuestionCircle,
          compteted: false,
        },
        {
          name: "",
          time: "10:00",
          type: "modal",
          Icon: BsQuestionCircle,
          compteted: true,
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
          name: "7. Feel and Find video",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
          compteted: false,
        },
        {
          name: "8. Feel and Find video",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
          compteted: false,
        },
        {
          name: "9. Feel and Find video",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
          compteted: false,
        },
        {
          name: "10. Feel and Find video",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
          compteted: false,
        },
        {
          name: "Work Sheet",
          time: "00:19",
          type: "doc",
          Icon: GrDocument,
          compteted: false,
        },
        {
          name: "Quiz",
          time: "05:00",
          type: "quiz",
          Icon: BsQuestionCircle,
          compteted: false,
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
          name: "11. Explore Video",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
          compteted: false,
        },
        {
          name: "12. Explore Video",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
          compteted: false,
        },
        {
          name: "13. Explore Video",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
          compteted: false,
        },
        {
          name: "14. Explore Video",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
          compteted: false,
        },
        {
          name: "Work Sheet",
          time: "10:19",
          type: "doc",
          Icon: GrDocument,
          compteted: false,
        },
        {
          name: "Quiz",
          time: "05:00",
          type: "quiz",
          Icon: BsQuestionCircle,
          compteted: false,
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
          name: "15. Give Ideas video",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
          compteted: false,
        },
        {
          name: "16. Give Ideas video",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
          compteted: false,
        },
        {
          name: "17. Give Ideas video",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
          compteted: false,
        },
        {
          name: "18. Give Ideas video",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
          compteted: false,
        },
        {
          name: "Work Sheet",
          time: "00:19",
          type: "doc",
          Icon: GrDocument,
          compteted: false,
        },
        {
          name: "Quiz",
          time: "15:00",
          type: "quiz",
          Icon: BsQuestionCircle,
          compteted: false,
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
          name: "19. Make & Test video",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
          compteted: false,
        },
        {
          name: "20. Make & Test video",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
          compteted: false,
        },
        {
          name: "21. Make & Test video",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
          compteted: false,
        },
        {
          name: "22. Make & Test video",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
          compteted: false,
        },
        {
          name: "23. Make & Test video",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
          compteted: false,
        },
        {
          name: "Work Sheet",
          time: "00:19",
          type: "doc",
          Icon: GrDocument,
          compteted: false,
        },
        {
          name: "Quiz",
          time: "08:00",
          type: "quiz",
          Icon: BsQuestionCircle,
          compteted: false,
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
          name: "24. Conclusion Video",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
          compteted: false,
        },
        {
          name: "25. Conclusion Video",
          time: "05:00",
          type: "video",
          Icon: AiFillPlayCircle,
          compteted: false,
        },
        {
          name: "Work Sheet",
          time: "00:30",
          type: "doc",
          Icon: GrDocument,
          compteted: false,
        },
        {
          name: "Quiz",
          time: "10:00",
          type: "quiz",
          Icon: BsQuestionCircle,
          compteted: false,
        },
        {
          name: "Assesment",
          time: "10:00",
          type: "quiz",
          Icon: BsQuestionCircle,
          compteted: false,
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
    console.log("function fired: line no: 467", event);
    const videoLength = event.duration; //500
    const halfTrimmedLength = videoLength / 2; //250
    const calculatePercentage = halfTrimmedLength / videoLength; //0.5
    const eventSeconds = Math.floor(event.seconds);
    const calculatedSeconds = Math.floor(halfTrimmedLength);

    console.log(
      `calculations: VL: ${videoLength} --> HTL ${halfTrimmedLength} ---> CP ${calculatePercentage}`
    );

    if (
      event.percent === calculatePercentage &&
      eventSeconds === calculatedSeconds
    ) {
      console.log("Pop-up screen functionality");
      setModalShow(true);
      handlePlayerPause();
    }
    handlePlayerPlay();
    // if (modalShow === false) {
    // }
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

  // const handlePlayer = (time) => {
  //   if (time.getCurrentTime(3000)) {
  //     alert("jhani");
  //     console.log("jhani");
  //   }
  // };

  const videoStatus = (type, status) => {
    const done = <IoCheckmarkDoneCircleSharp className='done' />;
    const notDone = <IoCheckmarkDoneCircleSharp />;
    if (type === "video" && status === true) {
      return done;
    } else if (type === "video" && status === false) {
      return notDone;
    }

    if (type === "doc" && status === true) {
      return done;
    } else if (type === "doc" && status === false) {
      return notDone;
    }

    if (type === "quiz" && status === true) {
      return done;
    } else if (type === "quiz" && status === false) {
      return notDone;
    }
  };

  const videoType = (type) => {
    if (type === "video") {
      return <AiFillPlayCircle />;
    } else if (type === "doc") {
      return <GrDocument />;
    } else if (type === "quiz") {
      return <BsQuestionCircle />;
    }

    // if (type === "doc" && status === true) {
    //   return done;
    // } else if (type === "doc" && status === false) {
    //   return notDone;
    // }

    // if (type === "quiz" && status === true) {
    //   return done;
    // } else if (type === "quiz" && status === false) {
    //   return notDone;
    // }
  };

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
                                  <div
                                    className={`course-sec-list ${
                                      lecture.status ? "hHover" : "noHover"
                                    }  `}
                                  >
                                    <Row
                                      className={`justify-content-between w-100 px-4 py-3 ${
                                        lecture.status ? "hHover" : "noCurser"
                                      }`}
                                    >
                                      <Col
                                        md={12}
                                        className='my-auto'
                                        onClick={() =>
                                          handleSelect(
                                            lecture.name,
                                            lecture.type
                                          )
                                        }
                                      >
                                        <p className='course-icon mb-0'>
                                          {videoStatus(
                                            lecture.type,
                                            lecture.compteted
                                          )}

                                          <span className='course-title'>
                                            {lecture.name}
                                          </span>

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
                                        <p className='course-time mb-0 px-5 my-auto'>
                                          {videoType(lecture.type)}
                                          {/* <IoTimeOutline className='my-auto' /> */}
                                          <span className='px-2'>
                                            {lecture.time}
                                          </span>
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
                      <CardTitle className=' text-left pt-4 pb-4' tag='h2'>
                        Unisolve Worksheet
                      </CardTitle>
                      <p>
                        Description or Instructions details will display here...
                      </p>
                      <Button
                        label='Download Worksheet'
                        btnClass='primary mt-4'
                        size='small'
                        style={{ marginRight: "2rem" }}
                      />
                      <FileComp />
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

                    // pyaler={handlePlayer}
                  />
                </Card>
              ) : (
                showQuiz === false && (
                  <Fragment>
                    <Card className='course-sec-basic p-5'>
                      <CardBody>
                        <CardTitle className=' text-left py-2' tag='h2'>
                          Get Started
                        </CardTitle>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularise
                        </p>
                        <CardTitle className=' text-left py-2' tag='h2'>
                          Navigate in the User Guide
                        </CardTitle>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularise
                        </p>
                      </CardBody>
                    </Card>
                  </Fragment>
                )
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
