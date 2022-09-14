/* eslint-disable no-unused-vars */
import React, { Fragment, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "./style.scss";
import { BsChevronRight, BsFilter } from "react-icons/bs";
import { RiAwardFill } from "react-icons/ri";
import { CommonDropDownComp } from "../../stories/CommonDropdown/CommonDropdownComp";
import { Card, CardBody, CardTitle } from "reactstrap";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { getTeacherCourseDetails, getAdminCourseDetails } from "../../redux/actions";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
// import { BsFillPauseFill } from "react-icons/bs";
// import { FiPlayCircle } from "react-icons/fi";
import { VscCircleFilled } from "react-icons/vsc";
import { VscCheck } from "react-icons/vsc";
// import CourseVideo from "../../assets/img/courseVideo.png";
// import { Avatar, Icon } from "antd";
import Vimeo from "@u-wave/react-vimeo";
import Layout from "../Layout";
// import { Progress } from "antd";
import {  BsQuestionCircle } from "react-icons/bs";
import { Accordion, Modal } from "react-bootstrap";
// import User from "../../assets/img/avatar1.png"; 
import { Button } from "../../stories/Button";
import { GrDocument } from "react-icons/gr";
import { AiFillPlayCircle } from "react-icons/ai";
import {  getCurrentUser } from "../../helpers/Utils";
import axios from "axios";
// import { ProgressComp } from "../../stories/Progress/Progress";
import ModuleAssesmentImg from "../../assets/media/moduleAssesmentPopup.svg";

// import { FileComp } from "../../stories/FileComp/FileComp";
import { connect } from "react-redux";

// import DetaledQuiz from "../../Admin/DetailedQuiz";
import DetaledQuiz from "../../Admin/DetailedQuiz/DetaledQuiz";

import Csv from "../../assets/media/csv1.png";

import Pdf from "../../assets/media/csv1.png";
//VIMEO REFERENCE
//https://github.com/u-wave/react-vimeo/blob/default/test/util/createVimeo.js

const TeacherPlayVideo = (props) => {
    const course_id = props.match.params.id;
    const currentUser = getCurrentUser("current_user");
    const [condition, setCondition] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [showQuiz, setHideQuiz] = useState(false);
    const [quizId, setQizId] = useState("");
    const [worksheetId, setWorksheetId] = useState("");
    const [coursesId, setCourseId] = useState("");
    const [fileName, setFileName] = useState("");
    const [topicObj, setTopicObj] = useState({});
    const [id, setResponce] = useState([]);
    const [firstObj, setFirstObj] = useState([]);
    const [moduleResponce, setUpdateModuleResponce] = useState([]);
    const [worksheetResponce, SetWorksheetResponce] = useState([]);
    const [videosList, setVideosList] = useState({
        videoTitle: "",
        videoLink: "",
    });

    const [url, setUrl] = useState("");
    const [image, setImage] = useState();
    const [videoId, setVideoId] = useState("");
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
    const [adminCourse, setAdminCourse] = useState([]);
    const [teacherCourseDetails, setTeacherCourseDetails] = useState("");
    const [teacherCourse, setTeacherCourse] = useState([]);
    const [worksheet, setWorksheetByWorkSheetId] = useState([]);

    console.log(coursesId);
    useEffect(() => {
        props.getTeacherCourseDetailsActions(course_id);
        // props.getAdminCourseDetailsActions(course_id);
    }, [course_id]);

    useEffect(() => {
        var topicArrays = [];
        var firstObjectArray = [];
        setAdminCourse(props.adminCoursesDetails && props.adminCoursesDetails[0]);
        setAdminCourseDetails(
            props.adminCoursesDetails[0] &&
        props.adminCoursesDetails[0].course_modules
        );
        setTeacherCourse(props.teaherCoursesDetails && props.teaherCoursesDetails[0]);
        setTeacherCourseDetails(
            props.teaherCoursesDetails[0] &&
        props.teaherCoursesDetails[0].mentor_course_topics
        );
        props.teaherCoursesDetails[0] &&
        props.teaherCoursesDetails[0].mentor_course_topics.map((course, index) => {
            topicArrays.push(course);
        });
        setTopicArray(topicArrays);
        if (topicArrays.length > 0) {
            firstObjectArray.push(topicArrays[0]);
        }
        setFirstObj(firstObjectArray);
    }, [props.adminCoursesDetails]);


    async function fetchData(videoId) {
        setVideoId(videoId);
        var config = {
            method: "get",
            url: process.env.REACT_APP_API_BASE_URL + "/videos/" + videoId,
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
                    setResponce(response.data && response.data.data[0]);
                    setCondition("Video1");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    async function getWorkSheetApi(worksheetId) {
        var config = {
            method: "get",
            url: process.env.REACT_APP_API_BASE_URL + "/worksheets/" + worksheetId,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${currentUser.data[0].token}`,
            },
        };
        axios(config)
            .then(function (response) {
                if (response.status === 200) {
                    SetWorksheetResponce(response.data.data[0]);
                    const worksheet = response.data.data[0].attachments.split(/[,]/);
                    setWorksheetByWorkSheetId(worksheet[0]);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleNxtVideo = (id) => {
        fetchData(id);
        setItem("VIDEO");
    };

    async function modulesListUpdateApi(courseTopicId) {
    // console.log(courseTopicId);
        const body1 = JSON.stringify({
            user_id: JSON.stringify(currentUser.data[0].user_id),
            mentor_course_topic_id: JSON.stringify(courseTopicId),
            status: "Completed",
        });
        var config = {
            method: "post",
            url: process.env.REACT_APP_API_BASE_URL + "/mentorTopicProgress",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${currentUser.data[0].token}`,
            },
            data: body1,
        };
        await axios(config)
            .then(function (response) {
                if (response.status === 201) {
                    setUpdateModuleResponce(response.data && response.data.data[0]);
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
        const videoLength = event.duration; //500
        const halfTrimmedLength = videoLength / 2; //250
        const calculatePercentage = halfTrimmedLength / videoLength; //0.5
        const eventSeconds = Math.floor(event.seconds);
        const calculatedSeconds = Math.floor(halfTrimmedLength);
        
    };

    const handleVimeoOnEnd = (event) => {
        modulesListUpdateApi(topicObj.mentor_course_topic_id);
        handleSelect(
            topicObj.topic_type_id,
            topicObj.mentor_course_topic_id,
            topicObj.topic_type
        );
        handlePlayerPlay();
    };

    const handleSelect = (topicId, couseId, type) => {
        const topic_Index =
      setTopicArrays &&
      setTopicArrays.findIndex(
          (data) =>
              data.topic_type_id === topicId && data.mentor_course_topic_id === couseId
      );
        const topicObj = setTopicArrays[topic_Index + 1];
        setTopicObj(topicObj);
        if (type === "ATTACHMENT") {
            setWorksheetId(topicId);
            getWorkSheetApi(topicId);
            setItem("ATTACHMENT");
            setHideQuiz(false);
        } else if (type === "VIDEO") {
            setItem("VIDEO");
            fetchData(topicId);
            setHideQuiz(false);
        } else {
            setItem("");
            setHideQuiz(false);
        }
    };

    const videoStatus = (type, status) => {
        const done = <IoCheckmarkDoneCircleSharp className="done" />;
        const notDone = <IoCheckmarkDoneCircleSharp />;
        if (type === "VIDEO" && status === "COMPLETED") {
            return done;
        } else if (type === "VIDEO" && status === "INCOMPLETE") {
            // console.log("=================================================");
            return notDone;
        }
        if (type === "ATTACHMENT" && status === "COMPLETED") {
            return done;
        } else if (type === "ATTACHMENT" && status === "INCOMPLETE") {
            return notDone;
        }
    };

    const videoType = (type) => {
        if (type === "VIDEO") {
            return <AiFillPlayCircle />;
            // } else if (type === "WORKSHEET") {
            //   // return <GrDocument />;
            // } else if (type === "QUIZ") {
            // return <BsQuestionCircle />;
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
            url:
        process.env.REACT_APP_API_BASE_URL +
        "/worksheets/" +
        worksheetId +
        "/response",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${currentUser.data[0].token}`,
            },
            data: data,
        };
        axios(config)
            .then(function (response) {
                if (response.status === 200) {
                    getWorkSheetApi(worksheetId);
                    setImage();
                    setFileName();
                    setUrl();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleNextCourse = () => {
        modulesListUpdateApi(topicObj.course_topic_id);
        handleSelect(
            topicObj.topic_type_id,
            topicObj.course_topic_id,
            topicObj.topic_type
        );
    };

    const startFirstCourse = (e) => {
        modulesListUpdateApi(firstObj[0].mentor_course_topic_id);
        handleSelect(
            firstObj[0].topic_type_id,
            firstObj[0].mentor_course_topic_id,
            firstObj[0].topic_type
        );
    };

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
                            <span className="card-type">
                                {teacherCourse && teacherCourse.title}
                            </span>
                            
                            <RiAwardFill className="lessonsvg" />
                            <span className="card-type points">
                                {teacherCourse && teacherCourse.course_videos_count} Videos
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
                                <p className="content-title">Course Modules</p>
                                <div className="view-head"></div>
                                <div className="assement-item" id="scrollbar">
                                    {teacherCourseDetails &&
                                    teacherCourseDetails.length &&
                                    teacherCourseDetails.map((course, index) => {
                                        return(
                                            <div
                                                key={index}
                                                className={`course-sec-list ${
                                                    course.progress === "COMPLETED"
                                                        ? "hHover"
                                                        : "noHover"
                                                }  `}
                                            >
                                                <Row
                                                    className={`justify-content-between w-100 px-4 py-3 ${
                                                        course.progress === "COMPLETED"
                                                            ? "hHover"
                                                            : "noCurser"
                                                    }`}
                                                >
                                                    <Col
                                                        md={12}
                                                        className="my-auto"
                                                        onClick={() =>
                                                            handleSelect(
                                                                course.topic_type_id,
                                                                course.mentor_course_topic_id,
                                                                course.topic_type
                                                            )
                                                        }
                                                    >
                                                        <p className="course-icon mb-0">
                                                            {videoStatus(
                                                                course.topic_type,
                                                                course.progress
                                                            )}

                                                            <span className="course-title">
                                                                {course.title}
                                                            </span>

                                                        </p>
                                                        <p className="course-time mb-0 px-5 my-auto">
                                                            {course.video_duration && (
                                                                <span className="px-2">
                                                                    {Math.floor(
                                                                        course.video_duration / 60
                                                                    )}
                                                                    {""} min
                                                                </span>
                                                            )}
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        );
                                    }
                                    )}
                                    
                                </div>
                            </div> 
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
                                            <div className="row justify-content-center text-center">
                                                <div className="col col-lg-3">
                                                    <p>
                                                        <VscCircleFilled style={{ color: "#067DE1" }} />
                            Questions
                                                    </p>
                                                </div>
                                                <div className="col col-lg-3">
                                                    <p>
                                                        <VscCircleFilled style={{ color: "#067DE1" }} />{" "}
                            minutes
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
                            ) : item === "ATTACHMENT" ? (
                                <Fragment>
                                    <Card className="course-sec-basic p-5">
                                        <CardBody>
                                            <CardTitle className=" text-left pt-4 pb-4" tag="h2">
                        Unisolve Hand Book
                                            </CardTitle>
                                            {worksheetResponce.response === null && (
                                                <p>Please Download Handbook...</p>
                                            )}
                                            <div className="text-right">
                                                {worksheetResponce.response === null && (
                                                    <a
                                                        href={
                                                            process.env.REACT_APP_API_IMAGE_BASE_URL + "/assets/defaults/default_worksheet.pdf"
                                                        }
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="primary"
                                                    >
                                                        <Button
                                                            button="submit"
                                                            label="Download Hand Book"
                                                            btnClass="primary mt-4"
                                                            size="small"
                                                            style={{ marginRight: "2rem" }}
                                                        />
                                                    </a>
                                                )}
                                            </div>

                                           
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
                                        onEnd={handleVimeoOnEnd}
                                    />
                                </Card>
                            ) : (
                                showQuiz === false && (
                                    <Fragment>
                                        <Card className="course-sec-basic p-5">
                                            <CardBody>
                                                <text style={{ whiteSpace: "pre-wrap" }}>
                                                    {teacherCourse && teacherCourse.description}
                                                </text>
                                                <div>
                                                    <Button
                                                        label="START COURSE"
                                                        btnClass="primary mt-4"
                                                        size="small"
                                                        onClick={(e) => startFirstCourse(e)}
                                                    />
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Fragment>
                                )
                            )}
                        </Col>
                    </Row>
                </div>
            </div>
        </Layout>
    );
};

// export default withRouter(AdminPlayVideoCourses);

const mapStateToProps = ({ teacherCourses, adminCourses }) => {
    const { teaherCoursesDetails, loading } = teacherCourses;
    const { adminCoursesDetails } = adminCourses;
    return { teaherCoursesDetails, loading, adminCoursesDetails };
};
export default connect(mapStateToProps, {
    getTeacherCourseDetailsActions: getTeacherCourseDetails,
    getAdminCourseDetailsActions: getAdminCourseDetails,
})(TeacherPlayVideo);