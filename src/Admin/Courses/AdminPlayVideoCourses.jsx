import React, { Fragment, useState, useEffect } from "react";
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
import DetaledQuiz from "../DetailedQuiz/DetaledQuiz";

import { QuizProvider } from "../../context/quiz.context";
import TakeAssesmentPopup from "./TakeAssesmentPopup";
import ModuleAssesmentImg from "../../media/moduleAssesmentPopup.svg";
import { VscCircleFilled } from "react-icons/vsc";
import { ProgressComp } from "../../stories/Progress/Progress";
import { FileComp } from "../../stories/FileComp/FileComp";
import { legacy_createStore } from "redux";
import { IoCheckmarkDoneCircleSharp, IoTimeOutline } from "react-icons/io5";
import { connect } from "react-redux";
import { getAdminCourseDetails } from "../../redux/actions";
import axios from "axios";
import Csv from "../../media/csv1.png";
import Pdf from "../../media/pdf.png";
import { getNormalHeaders, getCurrentUser } from "../../helpers/Utils";

const AdminPlayVideoCourses = (props) => {
  // console.log(props);
  const course_id = props.match.params.id;
  const description = props.location.data
    ? props.location.data.description
    : "";
  const title = props.location.data ? props.location.data.title : "";
  const courseModulesCount = props.location.data
    ? props.location.data.course_modules_count
    : "";
  const courseVideosCount = props.location.data
    ? props.location.data.course_videos_count
    : "";
  const history = useHistory();
  const currentUser = getCurrentUser("current_user");
  // console.log("============================currentUser=========", currentUser);
  const [condition, setCondition] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [showQuiz, setHideQuiz] = useState(false);
  const [quizId, setQizId] = useState("");
  const [worksheetId, setWorksheetId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [fileName, setFileName] = useState("");
  const [topicObj, setTopicObj] = useState({});
  const [id, setResponce] = useState([]);
  const [moduleResponce, setUpdateModuleResponce] = useState([]);
  const [worksheetResponce, SetWorksheetResponce] = useState({});
  const [videosList, setVideosList] = useState({
    videoTitle: "",
    videoLink: "",
  });

  const [url, setUrl] = useState("");
  const [image, setImage] = useState();
  const [setArrays, setArray] = useState([]);
  const [setTopicArrays, setTopicArray] = useState([]);
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
  const [adminCourseDetails, setAdminCourseDetails] = useState("");

  useEffect(() => {
    props.getAdminCourseDetailsActions(course_id);
  }, [course_id]);

  useEffect(() => {
    var topicArrays = [];
    setAdminCourseDetails(
      props.adminCoursesDetails[0] &&
        props.adminCoursesDetails[0].course_modules
    );
    props.adminCoursesDetails[0] &&
      props.adminCoursesDetails[0].course_modules.map((course, index) => {
        course.course_topics.map((lecture, index) => {
          topicArrays.push(lecture);
        });
      });
    setTopicArray(topicArrays);
    // console.log("===============topicArrays", topicArrays);
  }, [props.adminCoursesDetails]);

  // useEffect(() => {
  //   console.log("videoId------------------------------");
  //   fetchData(videoId);
  // }, [videoId !== ""]);

  async function fetchData(videoId) {
    // console.log("00000000000000000000000000000000");
    var config = {
      method: "get",
      url: "http://15.207.254.154:3002/api/v1/videos/" + videoId,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentUser.data[0].token}`,
      },
    };
    // let response = await axios(config);
    // console.log("res", response);
    await axios(config)
      .then(function (response) {
        if (response.status === 200) {
          // console.log("===============responc", response.data);
          setResponce(response.data && response.data.data[0]);
          setCondition("Video1");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    var config = {
      method: "get",
      url: "http://15.207.254.154:3002/api/v1/worksheets/" + worksheetId,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentUser.data[0].token}`,
      },
    };
    axios(config)
      .then(function (response) {
        // console.log("===============responc", response);
        if (response.status === 200) {
          // console.log("===============responc=================");
          SetWorksheetResponce(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [worksheetId]);
  const handleNxtVideo = (id) => {
    fetchData(id);
    setItem("VIDEO");
  };

  async function modulesListUpdateApi(courseTopicId) {
    console.log(courseTopicId);
    const body1 = JSON.stringify({
      user_id: JSON.stringify(currentUser.data[0].user_id),
      course_topic_id: JSON.stringify(courseTopicId),
      status: "Completed",
    });
    var config = {
      method: "post",
      url: "http://15.207.254.154:3002/api/v1/userTopicProgress",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentUser.data[0].token}`,
      },
      data: body1,
    };
    // let response = await axios(config);
    // console.log("res", response);
    await axios(config)
      .then(function (response) {
        if (response.status === 201) {
          setUpdateModuleResponce(response.data && response.data.data[0]);
          // console.log("============response", response);
          props.getAdminCourseDetailsActions(course_id);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
    // console.log("==========", event);
    const videoLength = event.duration; //500
    const halfTrimmedLength = videoLength / 2; //250
    const calculatePercentage = halfTrimmedLength / videoLength; //0.5
    const eventSeconds = Math.floor(event.seconds);
    const calculatedSeconds = Math.floor(halfTrimmedLength);

    // const lastTrimmedLength = videoLength / 1; //250
    // const calculatePercentage1 = lastTrimmedLength / videoLength; //0.5
    // const eventSeconds1 = Math.floor(event.seconds);
    // const calculatedSeconds1 = Math.floor(calculatePercentage1);

    // console.log(
    //   lastTrimmedLength,
    //   "lastTrimmedLength==",
    //   calculatePercentage1,
    //   "calculatePercentage12",
    //   eventSeconds1,
    //   "eventSeconds13",
    //   calculatedSeconds1,
    //   "calculatedSeconds14"
    // );

    if (
      event.percent === calculatePercentage &&
      eventSeconds === calculatedSeconds
    ) {
      handlePlayerPause();
      setModalShow(true);
    }

    // if (
    //   event.percent === calculatePercentage1 &&
    //   eventSeconds1 === calculatedSeconds1
    // ) {
    //   console.log("==============1===============");
    // }
    if (event.percent === 0.998) {
      // console.log("=========111111111111");s
      modulesListUpdateApi(topicObj.course_topic_id);
      handleSelect(
        topicObj.topic_type_id,
        topicObj.course_topic_id,
        topicObj.topic_type
      );
    }
    handlePlayerPlay();
  };

  const handleSelect = (topicId, couseId, type) => {
    console.log(topicId, couseId, type);
    setCourseId(couseId);
    const topic_Index =
      setTopicArrays &&
      setTopicArrays.findIndex(
        (data) =>
          data.topic_type_id === topicId && data.course_topic_id === couseId
      );
    const topicObj = setTopicArrays[topic_Index + 1];
    setTopicObj(topicObj);

    if (type === "WORKSHEET") {
      setWorksheetId(topicId);
      setItem("WORKSHEET");
      setHideQuiz(false);
    } else if (type === "QUIZ") {
      setItem("QUIZ");
      setQizId(topicId);
    } else if (type === "VIDEO") {
      setItem("VIDEO");
      // setVideoId(topicId);
      fetchData(topicId);
      setHideQuiz(false);
    } else {
      setItem("");
      setHideQuiz(false);
    }
  };

  const video = assmentList[videoIndex];
  // console.log(
  //   "==============responceresponceresponceresponce",
  //   worksheetResponce
  // );

  // const handlePlayer = (time) => {
  //   if (time.getCurrentTime(3000)) {
  //     alert("jhani");
  //     console.log("jhani");
  //   }
  // };

  const videoStatus = (type, status) => {
    // console.log(type, "==========", status);
    const done = <IoCheckmarkDoneCircleSharp className="done" />;
    const notDone = <IoCheckmarkDoneCircleSharp />;
    if (type === "VIDEO" && status === "COMPLETED") {
      return done;
    } else if (type === "VIDEO" && status === "INCOMPLETE") {
      // console.log("=================================================");
      return notDone;
    }

    if (type === "WORKSHEET" && status === "COMPLETED") {
      return done;
    } else if (type === "WORKSHEET" && status === "INCOMPLETE") {
      return notDone;
    }

    if (type === "QUIZ" && status === "COMPLETED") {
      return done;
    } else if (type === "QUIZ" && status === "INCOMPLETE") {
      return notDone;
    }
  };

  const videoType = (type) => {
    if (type === "VIDEO") {
      return <AiFillPlayCircle />;
    } else if (type === "WORKSHEET") {
      return <GrDocument />;
    } else if (type === "QUIZ") {
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

  const handleClose = (item) => {
    // alert("item" + item);
    setItem("WORKSHEET");
    setModalShow(item);
    setHideQuiz(false);
  };
  const handleQuiz = () => {
    modulesListUpdateApi(topicObj.course_topic_id);
    handleSelect(
      topicObj.topic_type_id,
      topicObj.course_topic_id,
      topicObj.topic_type
    );
  };

  const handleAssesmentClose = (item) => {
    setItem("VIDEO");
    // const video_Id_Index =
    //   setArrays && setArrays.findIndex((data) => data === videoId);
    // const Video_id = setArrays[video_Id_Index + 1];
    // setVideoId(Video_id);
    setModalShow(item);
    setHideQuiz(false);
  };

  const changeHandler = (event) => {
    const file = event.target.files[0].name.split(".", 2);
    if (file[1] === "csv" || file[1] === "pdf") {
      let img = event.target.files[0];
      setUrl(file[1]);
      setImage(img);
      setFileName(event.target.files[0].name);
    }
  };
  const removeSelectedImage = () => {
    setImage();
    setFileName();
    setUrl();
  };

  const handleSubmit = (e) => {
    const data = new FormData();
    data.append("attachment_1", image);
    var config = {
      method: "post",
      url: "http://15.207.254.154:3002/api/v1/worksheets/" + 1 + "/response",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentUser.data[0].token}`,
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        if (response.status === 200) {
          modulesListUpdateApi(topicObj.course_topic_id);
          handleSelect(
            topicObj.topic_type_id,
            topicObj.course_topic_id,
            topicObj.topic_type
          );
          setImage();
          setFileName();
          setUrl();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // const OnLoaded = (e) => {
  //   console.log(e);
  // };
  const video_stream_id = "666422934";
  // console.log(
  //   "===worksheetId",
  //   responce && responce.data[0] && responce.data[0].video_stream_id
  // );
  // console.log("===worksheetId", Math.floor(20 / 60));
  // const video_id = Number(id);

  // const id =
  //   worksheetId && worksheetId.data[0] && worksheetId.data[0].attachments;
  // const worksheerUrl =
  //   "http://15.207.254.154:3002" + worksheetId &&
  //   worksheetId.data[0] &&
  //   worksheetId.data[0].attachments;
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
              <span className="card-type">{title}</span>
              <BsLayoutTextSidebarReverse className="lessonsvg" />
              <span className="card-type">{courseModulesCount} Modules</span>
              <RiAwardFill className="lessonsvg" />
              <span className="card-type points">
                {courseVideosCount} Videos
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
                {/* <div className='courses-type pb-3'>
                  <BsDot />
                  <span className='card-type'>13 sections</span>
                  <BsDot className='lessonsvg' />
                  <span className='card-type'>76 lectures</span>
                  <BsDot className='lessonsvg' />
                  <span className='card-type points'>11h 9m total length</span>
                </div> */}
                <div className="assement-item" id="scrollbar">
                  <Accordion>
                    {adminCourseDetails &&
                      adminCourseDetails.length &&
                      adminCourseDetails.map((course, index) => {
                        // console.log("============return, course", course);
                        return (
                          <Accordion.Item
                            eventKey={index}
                            className="m-0 course-items"
                          >
                            <Accordion.Header className="question">
                              <div className="course-sec">
                                {/* <Avatar src={User} className="avatar-imgs" /> */}
                                <div className="course-title">
                                  {course.title}
                                </div>
                                <div className="course-time">
                                  <span>{course.videos_count} Videos</span>

                                  {/* <span>
                                  <BsDot />
                                  {course.sectionDuration}mins
                                </span> */}
                                </div>
                              </div>
                            </Accordion.Header>
                            <Accordion.Body>
                              <div className="course-list">
                                {course.course_topics.map((lecture, index) => {
                                  return (
                                    <div
                                      className={`course-sec-list ${
                                        lecture.progress === "COMPLETED"
                                          ? "hHover"
                                          : "noHover"
                                      }  `}
                                    >
                                      <Row
                                        className={`justify-content-between w-100 px-4 py-3 ${
                                          lecture.progress === "COMPLETED"
                                            ? "hHover"
                                            : "noCurser"
                                        }`}
                                      >
                                        {/* <div
                                      className={`course-sec-list ${
                                        lecture.progress === "COMPLETED"
                                          ? "hHover"
                                          : "noHover"
                                      }  `}
                                    >
                                      <Row
                                        className={`justify-content-between w-100 px-4 py-3 ${
                                          lecture.progress === "COMPLETED"
                                            ? "hHover"
                                            : "noCurser"
                                        }`} */}
                                        <Col
                                          md={12}
                                          className="my-auto"
                                          onClick={() =>
                                            handleSelect(
                                              lecture.topic_type_id,
                                              lecture.course_topic_id,
                                              lecture.topic_type
                                            )
                                          }
                                        >
                                          <p className="course-icon mb-0">
                                            {videoStatus(
                                              lecture.topic_type,
                                              lecture.progress
                                            )}

                                            <span className="course-title">
                                              {lecture.title}
                                            </span>

                                            {lecture.type === "modal" ? (
                                              <span
                                                className="course-name"
                                                onClick={() =>
                                                  setModalShow(true)
                                                }
                                              >
                                                Assesment
                                              </span>
                                            ) : (
                                              ""
                                            )}
                                          </p>
                                          <p className="course-time mb-0 px-5 my-auto">
                                            {videoType(lecture.topic_type)}
                                            {/* <IoTimeOutline className='my-auto' /> */}
                                            {lecture.video_duration && (
                                              <span className="px-2">
                                                {/* {lecture.video_duration} */}
                                                {Math.floor(
                                                  lecture.video_duration / 60
                                                )}
                                                min
                                              </span>
                                            )}
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

            <Col xl={8} className="course-video order-1 order-xl-2">
              {item === "QUIZ" && !showQuiz ? (
                <div
                  size="lg"
                  centered
                  className="modal-popup text-screen text-center  modal-popup"
                >
                  <div className="modal-content">
                    <Modal.Header>
                      <Modal.Title className="w-100 d-block mb-2">
                        Ready for the test on lessons?
                      </Modal.Title>
                      <p className="w-100 d-block">
                        Test your course skills in a short test challenge!
                      </p>
                      <div class="row justify-content-center text-center">
                        <div class="col col-lg-3">
                          <p>
                            <VscCircleFilled style={{ color: "#067DE1" }} /> 5
                            Questions
                          </p>
                        </div>
                        <div class="col col-lg-3">
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
                          alt="test"
                          className="img-fluid w-50"
                        />
                      </figure>
                      <Button
                        label="Let's Start"
                        btnClass="primary mt-4"
                        size="small"
                        onClick={() => setHideQuiz(true)}
                      />
                    </Modal.Body>
                  </div>
                </div>
              ) : item === "WORKSHEET" ? (
                <Fragment>
                  <ProgressComp className="w-100" {...progressBar} />
                  <Card className="course-sec-basic p-5">
                    <CardBody>
                      <CardTitle className=" text-left pt-4 pb-4" tag="h2">
                        Unisolve Worksheet
                      </CardTitle>
                      <p>
                        Description or Instructions details will display here...
                      </p>
                      <a
                        href={
                          "http://15.207.254.154:3002/images/default_worksheet.pdf"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="primary"
                      >
                        {/* <p className='primary mt-4'>Download</p> */}
                        <Button
                          button="submit"
                          label="Download Worksheet"
                          btnClass="primary mt-4"
                          size="small"
                          style={{ marginRight: "2rem" }}
                        />
                      </a>
                      {/* <Button
                        href={
                          "http://15.207.254.154:3002/images/default_worksheet.pdf"
                        }
                        target="_blank"
                        rel="noreferrer"
                        button="submit"
                        label="Download Worksheet"
                        btnClass="primary mt-4"
                        size="small"
                        style={{ marginRight: "2rem" }}
                      /> */}
                      {/* <FileComp /> */}
                      <Row className="my-5">
                        <Col md={3}>
                          <div class="wrapper">
                            <div class="btnimg">upload</div>
                            <input
                              type="file"
                              name="file"
                              accept={".pdf,.csv"}
                              onChange={(e) => changeHandler(e)}
                            />
                          </div>
                        </Col>
                        <Col md={9}>
                          <Row>
                            <Col md={6} className="my-auto">
                              <p>{fileName}</p>
                            </Col>
                            <Col md={2} className="my-auto">
                              {image && url === "csv" ? (
                                <img
                                  src={`${Csv}`}
                                  className="img-fluid"
                                  alt="Thumb"
                                />
                              ) : image && url === "pdf" ? (
                                <img
                                  src={`${Pdf}`}
                                  className="img-fluid"
                                  alt="Thumb"
                                />
                              ) : null}
                            </Col>
                            <Col md={2} className="my-auto">
                              {image ? (
                                <Button
                                  onClick={removeSelectedImage}
                                  btnClass="primary py-2 px-4"
                                  size="small"
                                  label="Remove"
                                >
                                  Remove
                                </Button>
                              ) : null}
                            </Col>
                            <Col md={2} className="my-auto">
                              {image ? (
                                <Button
                                  btnClass="primary py-2 px-4"
                                  size="small"
                                  label="Submit"
                                  onClick={(e) => handleSubmit(e)}
                                />
                              ) : null}
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      {/* <div class="wrapper">
                        <div class="btnimg">upload</div>
                        <input
                          type="file"
                          name="file"
                          accept=".pdf,.csv"
                          onChange={changeHandler}
                        />
                      </div>
                      {image ? (
                        <img src={`${url}`} style={styles.image} alt="Thumb" />
                      ) : null}

                      {image ? (
                        <button
                          onClick={removeSelectedImage}
                          style={styles.delete}
                        >
                          Remove
                        </button>
                      ) : null}
                      {image ? (
                        <Button
                          btnClass="primary px-5"
                          s
                          size="small"
                          label="Submit"
                          onClick={(e) => handleSubmit(e)}
                        />
                      ) : null} */}
                    </CardBody>
                  </Card>
                </Fragment>
              ) : item === "VIDEO" && condition === "Video1" ? (
                <Card className="embed-container">
                  <Vimeo
                    video={id.video_stream_id}
                    volume={volume}
                    paused={paused}
                    onPause={handlePlayerPause}
                    onPlay={handlePlayerPlay}
                    onSeeked={handleSeeked}
                    onTimeUpdate={handleTimeUpdate}
                  />
                </Card>
              ) : (
                showQuiz === false && (
                  <Fragment>
                    <Card className="course-sec-basic p-5">
                      <CardBody>
                        <h6 style={{ textAlign: "center" }}>{description}</h6>
                        {/* <CardTitle className=" text-left py-2" tag="h2">
                          {description}
                        </CardTitle> */}
                        {/* <p> */}
                        {/* Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularise
                        </p> */}
                        {/* <CardTitle className=" text-left py-2" tag="h2">
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
                        </p> */}
                      </CardBody>
                    </Card>
                  </Fragment>
                )
              )}

              {showQuiz ? (
                <DetaledQuiz
                  course_id={course_id}
                  quizId={quizId}
                  handleQuiz={handleQuiz}
                  handleClose={handleClose}
                  handleNxtVideo={handleNxtVideo}
                  quiz="true"
                />
              ) : (
                ""
              )}
            </Col>
          </Row>
        </div>
      </div>
      <TakeAssesmentPopup
        quiz="true"
        show={modalShow}
        handleClose={handleAssesmentClose}
        onHide={() => setModalShow(false)}
      />
    </Layout>
  );
};

// export default withRouter(AdminPlayVideoCourses);

const mapStateToProps = ({ adminCourses }) => {
  const { adminCoursesDetails, loading } = adminCourses;
  return { adminCoursesDetails, loading };
};
export default connect(mapStateToProps, {
  getAdminCourseDetailsActions: getAdminCourseDetails,
})(AdminPlayVideoCourses);

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100", maxHeight: 150 },
  delete: {
    maxWidth: 70,
    maxHeight: 30,
    // cursor: "pointer",
    // padding: 15,
    background: "white",
    // color: "white",
    // border: "none",
  },
};
