/* eslint-disable no-unused-vars */
import React, { Fragment, useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './style.scss';
import { BsChevronRight, BsFilter } from 'react-icons/bs';
import { RiAwardFill } from 'react-icons/ri';
import { CommonDropDownComp } from '../../../stories/CommonDropdown/CommonDropdownComp';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';
import { getAdminCourseDetails } from '../../../redux/actions';
import TakeAssesmentPopup from './TakeAssesmentPopup';
import { BsLayoutTextSidebarReverse } from 'react-icons/bs';
// import { BsFillPauseFill } from "react-icons/bs";
// import { FiPlayCircle } from "react-icons/fi";
import { VscCircleFilled } from 'react-icons/vsc';
import { VscCheck } from 'react-icons/vsc';
// import CourseVideo from "../../assets/img/courseVideo.png";
// import { Avatar, Icon } from "antd";
import Vimeo from '@u-wave/react-vimeo';
import Layout from '../../Layout';
// import { Progress } from "antd";
import { BsQuestionCircle } from 'react-icons/bs';
import { Modal } from 'react-bootstrap';
import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionBody
} from 'reactstrap';
// import User from "../../assets/img/avatar1.png";
import { Button } from '../../../stories/Button';
import { GrDocument } from 'react-icons/gr';
import { AiFillPlayCircle } from 'react-icons/ai';
import { getCurrentUser } from '../../../helpers/Utils';
import axios from 'axios';
// import { ProgressComp } from "../../stories/Progress/Progress";
import ModuleAssesmentImg from '../../../assets/media/moduleAssesmentPopup.svg';

// import { FileComp } from "../../stories/FileComp/FileComp";
import { connect } from 'react-redux';

// import DetaledQuiz from "../../Admin/DetailedQuiz";
import DetaledQuiz from '../../../Admin/DetailedQuiz/DetaledQuiz';

import Csv from '../../../assets/media/csv1.png';

import Pdf from '../../../assets/media/csv1.png';
import FullScreenButton from '../../../components/FullScreenButtonComp';
//VIMEO REFERENCE
//https://github.com/u-wave/react-vimeo/blob/default/test/util/createVimeo.js

const PlayVideoCourses = (props) => {
    // console.log(props);
    const course_id = props.match.params.id;
    const description = props.location.data
        ? props.location.data.description
        : '';
    const title = props.location.data ? props.location.data.title : '';
    const courseModulesCount = props.location.data
        ? props.location.data.course_modules_count
        : '';
    const courseVideosCount = props.location.data
        ? props.location.data.course_videos_count
        : '';
    const history = useHistory();
    const currentUser = getCurrentUser('current_user');
    // console.log("============================currentUser=========", currentUser);
    const [condition, setCondition] = useState('');
    const [modalShow, setModalShow] = useState(false);
    const [showQuiz, setHideQuiz] = useState(false);
    const [quizId, setQizId] = useState('');
    const [worksheetId, setWorksheetId] = useState('');
    const [coursesId, setCourseId] = useState('');
    const [fileName, setFileName] = useState('');
    const [topicObj, setTopicObj] = useState({});
    const [id, setResponce] = useState([]);
    const [firstObj, setFirstObj] = useState([]);
    const [moduleResponce, setUpdateModuleResponce] = useState([]);
    const [worksheetResponce, SetWorksheetResponce] = useState([]);
    const [courseData, setCourseData] = useState(null);
    const [videosList, setVideosList] = useState({
        videoTitle: '',
        videoLink: ''
    });
    const [url, setUrl] = useState('');
    const [image, setImage] = useState();
    const [videoId, setVideoId] = useState('');
    const [setArrays, setArray] = useState([]);
    const [setTopicArrays, setTopicArray] = useState([]);
    const [isVideo, setIsVideo] = useState(false);
    const [topic, setTopic] = useState("");
    
    const [modulesList, setModulesList] = useState({
        questionType: '',
        question: '',
        choice: ''
    });
    const [videoIndex, setVideoIndex] = useState(0);
    const [volume, setVolume] = useState(1);
    const [paused, setPaused] = useState(false);
    const [item, setItem] = useState('');
    const [adminCourseDetails, setAdminCourseDetails] = useState('');
    const [adminCourse, setAdminCourse] = useState([]);
    const [selectedCourseModule, setSelectedCourseModule] = useState([]);
    const [worksheet, setWorksheetByWorkSheetId] = useState([]);
    const [fullScreen, setFullScreen] = useState({
        isFullSCreen: false,
        width: ''
    });
    const [seletedFilesName, setSeletedFilesName] = useState([]);
    const [seletedFiles, setSeletedFiles] = useState([]);
    const [open, setOpen] = useState('0');
    const toggle = (id) => {
        if (open === id) {
        setOpen();
        }else if (open === "0"){
        setOpen("1");
        } else {
        setOpen(id);
        }
    };

    useEffect(() => {
        props.getAdminCourseDetailsActions(course_id);
    }, [course_id]);
    useEffect(() => {
        var topicArrays = [];
        var firstObjectArray = [];
        setAdminCourse(props.adminCoursesDetails[0]);
        // setAdminCourseDetails(props.adminCoursesDetails[0].description);
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
        if (topicArrays.length > 0) {
            firstObjectArray.push(topicArrays[0]);
        }
        setFirstObj(firstObjectArray);
    }, [props.adminCoursesDetails]);

    async function fetchData(videoId) {
        setVideoId(videoId);
        var config = {
            method: 'get',
            url: process.env.REACT_APP_API_BASE_URL + '/videos/' + videoId,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${currentUser.data[0].token}`
            }
        };
        // let response = await axios(config);
        // console.log("res", response);
        await axios(config)
            .then(function (response) {
                if (response.status === 200) {
                    setResponce(response.data && response.data.data[0]);
                    setCondition('Video1');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    async function getWorkSheetApi(worksheetId) {
        var config = {
            method: 'get',
            url:
                process.env.REACT_APP_API_BASE_URL +
                '/worksheets/' +
                worksheetId,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${currentUser.data[0].token}`
            }
        };
        axios(config)
            .then(function (response) {
                // console.log("===============responc", response);
                if (response.status === 200) {
                    SetWorksheetResponce(response.data.data[0]);
                    const worksheet =
                        response.data.data[0].attachments.split(/[,]/);
                    setWorksheetByWorkSheetId(worksheet[0]);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleNxtVideo = (id) => {
        fetchData(id);
        setItem('VIDEO');
    };

    async function modulesListUpdateApi(courseTopicId) {
        // console.log(courseTopicId);
        const body1 = JSON.stringify({
            user_id: JSON.stringify(currentUser.data[0].user_id),
            course_topic_id: JSON.stringify(courseTopicId),
            status: 'Completed'
        });
        var config = {
            method: 'post',
            url: process.env.REACT_APP_API_BASE_URL + '/userTopicProgress',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${currentUser.data[0].token}`
            },
            data: body1
        };
        // let response = await axios(config);
        // console.log("res", response);
        await axios(config)
            .then(function (response) {
                if (response.status === 201) {
                    setUpdateModuleResponce(
                        response.data && response.data.data[0]
                    );
                    props.getAdminCourseDetailsActions(course_id);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const progressBar = {
        label: 'Progress',
        options: [{ id: 1, teams: 'CSK', percent: 75, status: 'active' }]
    };

    const assmentList = [
        {
            icon: <VscCheck />,
            title: '1. Module Name',
            time: ' 7 mins',
            id: 115783408
        }
    ];
    const items = [
        {
            section: 'Inspiration',
            info: '1 lectures mins',
            lectures: [
                {
                    name: '1. Inspiration video',
                    time: '01:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    status: 'done',
                    compteted: true
                },
                {
                    name: '2. Inspiration video',
                    time: '11:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    status: 'done',
                    compteted: true
                },
                {
                    name: '3. Inspiration video',
                    time: '02:50',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    status: 'done',
                    compteted: true
                },
                {
                    name: '4. Inspiration video',
                    time: '04:50',
                    type: 'video',
                    Icon: AiFillPlayCircle,

                    compteted: false
                },
                {
                    name: 'Work Sheet',
                    time: '00:19',
                    type: 'doc',
                    Icon: GrDocument,
                    status: 'done',
                    compteted: false
                },
                {
                    name: 'Quiz',
                    time: '05:00',
                    type: 'quiz',
                    Icon: BsQuestionCircle,
                    status: 'done',
                    compteted: true
                }
            ],
            sectionLectures: 4,
            sectionDuration: 18,
            id: 'one'
        },
        {
            section: 'Me & Us ',
            info: '1 lectures mins',
            lectures: [
                {
                    name: '5. Me & Us video',
                    time: '03:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    compteted: false
                },
                {
                    name: '6. Me & Us video',
                    time: '15:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    compteted: false
                },
                {
                    name: 'Work Sheet',
                    time: '10:19',
                    type: 'doc',
                    Icon: GrDocument,
                    compteted: false
                },
                {
                    name: 'Quiz',
                    time: '10:00',
                    type: 'quiz',
                    Icon: BsQuestionCircle,
                    compteted: false
                },
                {
                    name: '',
                    time: '10:00',
                    type: 'modal',
                    Icon: BsQuestionCircle,
                    compteted: true
                }
            ],
            id: 'two',
            sectionLectures: 2,
            sectionDuration: 8
        },
        {
            section: 'Feel and Find ',
            info: '1 lectures mins',
            lectures: [
                {
                    name: '7. Feel and Find video',
                    time: '05:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    compteted: false
                },
                {
                    name: '8. Feel and Find video',
                    time: '05:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    compteted: false
                },
                {
                    name: '9. Feel and Find video',
                    time: '05:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    compteted: false
                },
                {
                    name: '10. Feel and Find video',
                    time: '05:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    compteted: false
                },
                {
                    name: 'Work Sheet',
                    time: '00:19',
                    type: 'doc',
                    Icon: GrDocument,
                    compteted: false
                },
                {
                    name: 'Quiz',
                    time: '05:00',
                    type: 'quiz',
                    Icon: BsQuestionCircle,
                    compteted: false
                }
            ],
            id: 'three',
            sectionLectures: 6,
            sectionDuration: 20
        },
        {
            section: 'Explore',
            info: '1 lectures mins',
            lectures: [
                {
                    name: '11. Explore Video',
                    time: '05:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    compteted: false
                },
                {
                    name: '12. Explore Video',
                    time: '05:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    compteted: false
                },
                {
                    name: '13. Explore Video',
                    time: '05:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    compteted: false
                },
                {
                    name: '14. Explore Video',
                    time: '05:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    compteted: false
                },
                {
                    name: 'Work Sheet',
                    time: '10:19',
                    type: 'doc',
                    Icon: GrDocument,
                    compteted: false
                },
                {
                    name: 'Quiz',
                    time: '05:00',
                    type: 'quiz',
                    Icon: BsQuestionCircle,
                    compteted: false
                }
            ],
            id: 'four',
            sectionLectures: 4,
            sectionDuration: 20
        },
        {
            section: 'Give Ideas ',
            info: '1 lectures mins',
            lectures: [
                {
                    name: '15. Give Ideas video',
                    time: '05:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    compteted: false
                },
                {
                    name: '16. Give Ideas video',
                    time: '05:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    compteted: false
                },
                {
                    name: '17. Give Ideas video',
                    time: '05:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    compteted: false
                },
                {
                    name: '18. Give Ideas video',
                    time: '05:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    compteted: false
                },
                {
                    name: 'Work Sheet',
                    time: '00:19',
                    type: 'doc',
                    Icon: GrDocument,
                    compteted: false
                },
                {
                    name: 'Quiz',
                    time: '15:00',
                    type: 'quiz',
                    Icon: BsQuestionCircle,
                    compteted: false
                }
            ],
            id: 'five',
            sectionLectures: 5,
            sectionDuration: 20
        },
        {
            section: 'Make & Test ',
            info: '1 lectures mins',
            lectures: [
                {
                    name: '19. Make & Test video',
                    time: '05:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    compteted: false
                },
                {
                    name: '20. Make & Test video',
                    time: '05:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    compteted: false
                },
                {
                    name: '21. Make & Test video',
                    time: '05:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    compteted: false
                },
                {
                    name: '22. Make & Test video',
                    time: '05:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    compteted: false
                },
                {
                    name: '23. Make & Test video',
                    time: '05:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    compteted: false
                },
                {
                    name: 'Work Sheet',
                    time: '00:19',
                    type: 'doc',
                    Icon: GrDocument,
                    compteted: false
                },
                {
                    name: 'Quiz',
                    time: '08:00',
                    type: 'quiz',
                    Icon: BsQuestionCircle,
                    compteted: false
                }
            ],
            id: 'six',
            sectionLectures: 5,
            sectionDuration: 21
        },
        {
            section: 'Conclusion ',
            info: '1 lectures mins',
            lectures: [
                {
                    name: '24. Conclusion Video',
                    time: '05:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    compteted: false
                },
                {
                    name: '25. Conclusion Video',
                    time: '05:00',
                    type: 'video',
                    Icon: AiFillPlayCircle,
                    compteted: false
                },
                {
                    name: 'Work Sheet',
                    time: '00:30',
                    type: 'doc',
                    Icon: GrDocument,
                    compteted: false
                },
                {
                    name: 'Quiz',
                    time: '10:00',
                    type: 'quiz',
                    Icon: BsQuestionCircle,
                    compteted: false
                },
                {
                    name: 'Assesment',
                    time: '10:00',
                    type: 'quiz',
                    Icon: BsQuestionCircle,
                    compteted: false
                }
            ],
            id: 'seven',
            sectionLectures: 2,
            sectionDuration: 7
        }
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
        size: 'small',
        placeholder: 'Search Course'
    };

    const progressProps = {
        options: [
            {
                name: 'Finish this course to get your certificate.',
                path: '/playCourse'
            }
        ],
        name: 'Your Progress',
        Icon: RiAwardFill,
        progress: true
    };
    const filterDropProps = {
        label: 'Filter by',
        labelIcon: BsFilter
    };
    const ImageCardProps = {
        label: 'ImageCardComp',
        imgUrl: 'https://picsum.photos/318/180',
        title: 'How can I improve self care with Ikigai?',
        count: '1,288 students',
        time: '5m',
        type: 'Health'
    };

    const handleItem = (item) => {
        setItem(item);
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setVideosList({
            ...videosList,
            [name]: value
        });
    };

    const handleModulesOnChange = (e) => {
        const { name, value } = e.target;
        setModulesList({
            ...modulesList,
            [name]: value
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

    const handleVimeoOnEnd = (event) => {
        const topixIndex = setTopicArrays.findIndex(item=>item.topic_type_id === topicObj.topic_type_id);
        if(event.reflective_quiz_status !== "INCOMPLETE"){
            setTopic(setTopicArrays[topixIndex]);
            modulesListUpdateApi(topicObj.course_topic_id);
            handleSelect(
                topicObj.topic_type_id,
                topicObj.course_topic_id,
                topicObj.topic_type
            );
            handlePlayerPlay();
        }
    };

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

        // if (
        //   event.percent === calculatePercentage &&
        //   eventSeconds === calculatedSeconds
        // ) {
        //   handlePlayerPause();
        //   setModalShow(true);
        // }
        
        if (id.reflective_quiz_status === 'INCOMPLETE') {
            if (event.percent === 1) {
                handlePlayerPause();
                setModalShow(true);
                setTimeout(() => {
                    handlePlayerPause();
                }, 1000);
            }
        }

        // // if (
        // //   event.percent === calculatePercentage1 &&
        // //   eventSeconds1 === calculatedSeconds1
        // // ) {
        // //   console.log("==============1===============");
        // // }
        // if (event.percent === 0.998) {
        //     modulesListUpdateApi(topicObj.course_topic_id);
        //     handleSelect(
        //         topicObj.topic_type_id,
        //         topicObj.course_topic_id,
        //         topicObj.topic_type
        //     );
        // }
        // handlePlayerPlay();
    };

    const handleSelect = (topicId, couseId, type) => {
        // setCourseId(couseId);
        const topic_Index =
            setTopicArrays &&
            setTopicArrays.findIndex(
                (data) =>
                    data.topic_type_id === topicId &&
                    data.course_topic_id === couseId
            );
        const currentObject = setTopicArrays[topic_Index];
        // if(id.reflective_quiz_status === "COMPLETED"){}
        
        // if(currentObject && currentObject.progress === "COMPLETED"){
        const topicObj = setTopicArrays[topic_Index + 1];
        setTopicObj(topicObj);
        if (type === 'WORKSHEET') {
            setWorksheetId(topicId);
            getWorkSheetApi(topicId);
            setItem('WORKSHEET');
            setHideQuiz(false);
        } else if (type === 'QUIZ') {
            setItem('QUIZ');
            setQizId(topicId);
        } else if (type === 'VIDEO') {
            setItem('VIDEO');
            // setVideoId(topicId);
            fetchData(topicId);
            setHideQuiz(false);
        } else {
            setItem('');
            setHideQuiz(false);
        }
        // }
    };

    const videoStatus = (type, status) => {
        // console.log(type, "==========", status);
        const done = <IoCheckmarkDoneCircleSharp className="done" />;
        const notDone = <IoCheckmarkDoneCircleSharp />;
        if (type === 'VIDEO' && status === 'COMPLETED') {
            return done;
        } else if (type === 'VIDEO' && status === 'INCOMPLETE') {
            // console.log("=================================================");
            return notDone;
        }

        if (type === 'WORKSHEET' && status === 'COMPLETED') {
            return done;
        } else if (type === 'WORKSHEET' && status === 'INCOMPLETE') {
            return notDone;
        }

        if (type === 'QUIZ' && status === 'COMPLETED') {
            return done;
        } else if (type === 'QUIZ' && status === 'INCOMPLETE') {
            return notDone;
        }
    };

    const videoType = (type) => {
        if (type === 'VIDEO') {
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
        setItem('WORKSHEET');
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

    const handleAssesmentClose = () => {
        
        modulesListUpdateApi(topicObj.course_topic_id);
        setItem('VIDEO');
        // const video_Id_Index =
        //   setArrays && setArrays.findIndex((data) => data === videoId);
        // const Video_id = setArrays[video_Id_Index + 1];
        // setVideoId(Video_id);
        setTopic(topicObj);
        handleSelect(
            topicObj.topic_type_id,
            topicObj.course_topic_id,
            topicObj.topic_type
        );
        setModalShow(false);
        setHideQuiz(false);
    };

    const changeHandler = (event) => {
        const data = [];
        for (let i = 0; i < event.target.files.length; i++) {
            data.push(event.target.files[i]);
        }
        setSeletedFilesName(data);
        setSeletedFiles(event.target.files);

        const file = event.target.files[0].name.split('.', 2);
        if (file[1] === 'pdf') {
            let img = event.target.files[0];
            setUrl(file[1]);
            setImage(img);
            setFileName(event.target.files[0].name);
        }
    };
    const removeSelectedImage = () => {
        setSeletedFiles();
        setImage();
        setFileName();
        setUrl();
    };

    const handleSubmit = (e) => {
        const files = seletedFilesName;
        const data = new FormData();
        for (let i = 0; i < files.length; i++) {
            data.append(`attachment_${i}`, files[i]);
        }
        var config = {
            method: 'post',
            url:
                process.env.REACT_APP_API_BASE_URL +
                '/worksheets/' +
                worksheetId +
                '/response',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${currentUser.data[0].token}`
            },
            data: data
        };
        axios(config)
            .then(function (response) {
                if (response.status === 200) {
                    getWorkSheetApi(worksheetId);
                    setImage();
                    setFileName();
                    setUrl();
                    setSeletedFiles();
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
        modulesListUpdateApi(firstObj[0].course_topic_id);
        setTopic(firstObj[0]);
        handleSelect(
            firstObj[0].topic_type_id,
            firstObj[0].course_topic_id,
            firstObj[0].topic_type
        );
        toggle("1")
    };

    const startCourseModule = (e) => {
        modulesListUpdateApi(
            selectedCourseModule.course_topics[0].course_topic_id
        );
        handleSelect(
            selectedCourseModule.course_topics[0].topic_type_id,
            selectedCourseModule.course_topics[0].course_topic_id,
            selectedCourseModule.course_topics[0].topic_type
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
                                {adminCourse && adminCourse.title}
                            </span>
                            <BsLayoutTextSidebarReverse className="lessonsvg" />
                            <span className="card-type">
                                {adminCourse &&
                                    adminCourse.course_modules_count}{' '}
                                Modules
                            </span>
                            <RiAwardFill className="lessonsvg" />
                            <span className="card-type points">
                                {adminCourse && adminCourse.course_videos_count}{' '}
                                Videos
                            </span>
                        </div>
                    </Col>
                    {/* <Col md={12} lg={3} className="my-auto text-right">
                        <div className="progress-dropdown">
                            <CommonDropDownComp {...progressProps} />
                        </div>
                    </Col> */}
                </Row>
                <div className="px-5 mx-3">
                    <FullScreenButton
                        fullScreen={fullScreen}
                        setFullScreen={setFullScreen}
                    />
                </div>

                <div className=" px-5 mt-2 container-fluid">
                    <Row className="m-0 courser-video-section ">
                        <Col
                            xl={4}
                            className="course-assement order-2 order-xl-1"
                            style={{
                                display: `${
                                    fullScreen.isFullSCreen ? 'none' : ''
                                }`
                            }}
                        >
                            <div className="assement-info">
                                <p className="content-title">Course Modules</p>
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
                                <Accordion open={open} toggle={toggle}>
                                        {adminCourseDetails &&
                                            adminCourseDetails.length &&
                                            adminCourseDetails.map(
                                                (course, index) => {
                                                    const str = index +1
                                                    const str1 = str.toString()
                                                    return (
                                                        <AccordionItem
                                                            className="m-0 course-items"
                                                            key={index}
                                                            onClick={() => {
                                                                setCourseData(
                                                                    course
                                                                );

                                                                if (
                                                                    index === 0
                                                                ) {
                                                                    setSelectedCourseModule(
                                                                        course
                                                                    );
                                                                } else {
                                                                    setSelectedCourseModule(
                                                                        null
                                                                    );
                                                                }
                                                            }}
                                                        >
                                                            <AccordionHeader className="question" targetId={str1}>
                                                                <div className= "course-sec">
                                                                    {/* <Avatar src={User} className="avatar-imgs" /> */}
                                                                    <div className="course-title">
                                                                        {
                                                                            course.title
                                                                        }
                                                                    </div>
                                                                    <div className="course-time">
                                                                        <span>
                                                                            {
                                                                                course.videos_count
                                                                            }{' '}
                                                                            Videos
                                                                        </span>

                                                                        {/* <span>
                                  <BsDot />
                                  {course.sectionDuration}mins
                                </span> */}
                                                                    </div>
                                                                </div>
                                                            </AccordionHeader>
                                                            <AccordionBody accordionId={str1}>
                                                                <div className="course-list">
                                                                    {course.course_topics.map(
                                                                        (
                                                                            lecture,
                                                                            index
                                                                        ) => {
                                                                            return (
                                                                                <div
                                                                                    key={
                                                                                        index
                                                                                    }
                                                                                    className={`course-sec-list ${
                                                                                        lecture.progress ===
                                                                                        'COMPLETED'
                                                                                            ? 'hHover'
                                                                                            : 'noHover'
                                                                                    }  `}
                                                                                    
                                                                                >
                                                                                    <Row
                                                                                        className={`justify-content-between w-100 px-4 py-3 ${
                                                                                            lecture.progress ===
                                                                                            'COMPLETED'
                                                                                                ? 'hHover'
                                                                                                : 'noCurser'
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
                                                                                            md={
                                                                                                12
                                                                                            }
                                                                                            className="my-auto"
                                                                                            onClick={(
                                                                                                e
                                                                                            ) => {
                                                                                                e.stopPropagation();
                                                                                                setTopic(lecture);
                                                                                                setCourseData(
                                                                                                    null
                                                                                                );
                                                                                                handleSelect(
                                                                                                    lecture.topic_type_id,
                                                                                                    lecture.course_topic_id,
                                                                                                    lecture.topic_type
                                                                                                );
                                                                                            }}
                                                                                        >
                                                                                            <p className="course-icon mb-0">
                                                                                                {videoStatus(
                                                                                                    lecture.topic_type,
                                                                                                    lecture.progress
                                                                                                )}

                                                                                                <span className="course-title">
                                                                                                    {
                                                                                                        lecture.title
                                                                                                    }
                                                                                                </span>

                                                                                                {lecture.type ===
                                                                                                'modal' ? (
                                                                                                        <span
                                                                                                            className="course-name"
                                                                                                            onClick={() =>
                                                                                                                setModalShow(
                                                                                                                    true
                                                                                                                )
                                                                                                            }
                                                                                                        >
                                                                                                        Assesment
                                                                                                        </span>
                                                                                                    ) : (
                                                                                                        ''
                                                                                                    )}
                                                                                            </p>
                                                                                            <p className="course-time mb-0 px-5 my-auto">
                                                                                                {videoType(
                                                                                                    lecture.topic_type
                                                                                                )}
                                                                                                {/* <IoTimeOutline className='my-auto' /> */}
                                                                                                {lecture.video_duration && (
                                                                                                    <span className="px-2">
                                                                                                        {/* {lecture.video_duration} */}
                                                                                                        {Math.floor(
                                                                                                            lecture.video_duration /
                                                                                                                60
                                                                                                        )}
                                                                                                        {
                                                                                                            ''
                                                                                                        }{' '}
                                                                                                        min
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
                                                            </AccordionBody>
                                                        </AccordionItem>
                                                    );
                                                }
                                            )}
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

                        <Col
                            xl={8}
                            className="course-video order-1 order-xl-2"
                            style={{
                                width: `${
                                    fullScreen.isFullSCreen
                                        ? fullScreen.width
                                        : ''
                                }`
                            }}
                        >
                            {item === 'QUIZ' && !showQuiz ? (
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
                                                Test your course skills in a
                                                short test challenge!
                                            </p>
                                            <div className="row justify-content-center text-center">
                                                <div className="col col-lg-3">
                                                    <p>
                                                        <VscCircleFilled
                                                            style={{
                                                                color: '#067DE1'
                                                            }}
                                                        />
                                                        Questions
                                                    </p>
                                                </div>
                                                <div className="col col-lg-3">
                                                    <p>
                                                        <VscCircleFilled
                                                            style={{
                                                                color: '#067DE1'
                                                            }}
                                                        />{' '}
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
                                                onClick={() =>
                                                    setHideQuiz(true)
                                                }
                                            />
                                        </Modal.Body>
                                    </div>
                                </div>
                            ) : item === 'WORKSHEET' ? (
                                <Fragment>
                                    <Card className="course-sec-basic p-5">
                                        <CardBody>
                                            <CardTitle
                                                className=" text-left pt-4 pb-4"
                                                tag="h2"
                                            >
                                                Unisolve Worksheet
                                            </CardTitle>
                                            {worksheetResponce.response ===
                                            null ? (
                                                    <p>
                                                    Please Upload Assign
                                                    WorkSheet...
                                                    </p>
                                                ) : (
                                                    <p>
                                                    Thanks for Upload Assign
                                                    WorkSheet...
                                                    </p>
                                                )}
                                            <div className="text-right">
                                                {worksheetResponce.response ===
                                                null ? (
                                                        <a
                                                            href={
                                                                process.env
                                                                    .REACT_APP_API_IMAGE_BASE_URL +
                                                            '/images/default_worksheet.pdf'
                                                            }
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="primary"
                                                        >
                                                            <Button
                                                                button="submit"
                                                                label="Download Sample Worksheet"
                                                                btnClass="primary mt-4"
                                                                size="small"
                                                                style={{
                                                                    marginRight:
                                                                    '2rem'
                                                                }}
                                                            />
                                                        </a>
                                                    ) : (
                                                        <a
                                                            href={
                                                                process.env
                                                                    .REACT_APP_API_IMAGE_BASE_URL +
                                                            worksheet
                                                            }
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="primary"
                                                        >
                                                            <Button
                                                                button="submit"
                                                                label="Download Worksheet"
                                                                btnClass="primary mt-4"
                                                                size="small"
                                                                style={{
                                                                    marginRight:
                                                                    '2rem'
                                                                }}
                                                            />
                                                        </a>
                                                    )}
                                                {worksheetResponce.response !=
                                                null ? (
                                                        <Button
                                                            label="Go to Next Course"
                                                            btnClass="primary w-auto"
                                                            size="small"
                                                            type="submit"
                                                            onClick={
                                                                handleNextCourse
                                                            }
                                                        />
                                                    ) : null}
                                            </div>

                                            {worksheetResponce.response ===
                                            null ? (
                                                    <Row className="my-5">
                                                        <Col md={3}>
                                                            {!image ? (
                                                                <div className="wrapper">
                                                                    <div className="btnimg">
                                                                    Upload File
                                                                    </div>
                                                                    <input
                                                                        type="file"
                                                                        name="file"
                                                                        multiple
                                                                        accept={
                                                                            '.pdf'
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            changeHandler(
                                                                                e
                                                                            )
                                                                        }
                                                                    />
                                                                </div>
                                                            ) : null}
                                                        </Col>
                                                        <Col md={9}>
                                                            <Row>
                                                                {/* <Col
                                                                md={2}
                                                                className="my-auto"
                                                            >
                                                                {image &&
                                                                url ===
                                                                    'csv' ? (
                                                                    <img
                                                                        src={`${Csv}`}
                                                                        className="img-fluid"
                                                                        alt="Thumb"
                                                                    />
                                                                ) : image &&
                                                                  url ===
                                                                      'pdf' ? (
                                                                    <img
                                                                        src={`${Pdf}`}
                                                                        className="img-fluid"
                                                                        alt="Thumb"
                                                                    />
                                                                ) : null}
                                                            </Col> */}
                                                                {seletedFiles &&
                                                                seletedFiles.length >
                                                                    0 && (
                                                                    <Col
                                                                        md={6}
                                                                        className="my-auto"
                                                                    >
                                                                        <p>
                                                                            {seletedFiles &&
                                                                                seletedFiles.length}{' '}
                                                                            Files
                                                                        </p>
                                                                    </Col>
                                                                )}
                                                                <Col
                                                                    md={2}
                                                                    className="my-auto"
                                                                >
                                                                    {seletedFiles &&
                                                                seletedFiles.length >
                                                                    0 ? (
                                                                            <Button
                                                                                onClick={
                                                                                    removeSelectedImage
                                                                                }
                                                                                btnClass="primary py-2 px-4"
                                                                                size="small"
                                                                                label="Remove"
                                                                            >
                                                                        Remove
                                                                            </Button>
                                                                        ) : null}
                                                                </Col>
                                                                <Col
                                                                    md={2}
                                                                    className="my-auto"
                                                                >
                                                                    {seletedFiles &&
                                                                seletedFiles.length >
                                                                    0 ? (
                                                                            <Button
                                                                                btnClass="primary py-2 px-4"
                                                                                size="small"
                                                                                label="Submit"
                                                                                onClick={(
                                                                                    e
                                                                                ) =>
                                                                                    handleSubmit(
                                                                                        e
                                                                                    )
                                                                                }
                                                                            />
                                                                        ) : null}
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                ) : null}
                                        </CardBody>
                                    </Card>
                                </Fragment>
                            ) : courseData !== null ? (
                                <Fragment>
                                    <Card
                                        className="course-sec-basic p-5"
                                        id="desc"
                                    >
                                        <CardBody>
                                            <text
                                                style={{
                                                    whiteSpace: 'pre-wrap'
                                                }}
                                            >
                                                {courseData.description}
                                            </text>
                                            {selectedCourseModule ? (
                                                <div>
                                                    <Button
                                                        label="START COURSE"
                                                        btnClass="primary mt-4"
                                                        size="small"
                                                        onClick={(e) => {
                                                            setCourseData(null);
                                                            startFirstCourse(e);
                                                            startCourseModule();
                                                        }}
                                                    />
                                                </div>
                                            ) : (
                                                ''
                                            )}
                                        </CardBody>
                                    </Card>
                                </Fragment>
                            ) : item === 'VIDEO' && condition === 'Video1' ? (
                                <>
                                    <Card className="embed-container">
                                        <CardTitle className=" text-left p-4">
                                            <h3>
                                                {topic?.title}
                                            </h3>
                                        </CardTitle>
                                        <Vimeo
                                            video={id.video_stream_id}
                                            volume={volume}
                                            paused={paused}
                                            onPause={handlePlayerPause}
                                            onPlay={handlePlayerPlay}
                                            onSeeked={handleSeeked}
                                            onTimeUpdate={handleTimeUpdate}
                                            onEnd={()=>handleVimeoOnEnd(id)}
                                        />
                                        <p className='p-4'>
                                            <span>  Description : </span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam fugiat fuga alias cupiditate dolor quos mollitia maiores quia, aliquid perspiciatis praesentium nisi voluptatum quibusdam consequuntur. Saepe harum hic dicta eius.
                                        </p>
                                    </Card>
                                </>
                            ) : (
                                showQuiz === false &&
                                item !== 'VIDEO' &&
                                condition !== 'Video1' && (
                                    <Fragment>
                                        <Card className="course-sec-basic p-5">
                                            <CardBody>
                                                <text
                                                    style={{
                                                        whiteSpace: 'pre-wrap'
                                                    }}
                                                >
                                                    {adminCourse &&
                                                        adminCourse.description}
                                                </text>
                                                <div>
                                                    <Button
                                                        label="START COURSE"
                                                        btnClass="primary mt-4"
                                                        size="small"
                                                        onClick={(e) =>
                                                            startFirstCourse(e)
                                                        }
                                                    />
                                                </div>
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
                                ''
                            )}
                        </Col>
                    </Row>
                </div>
            </div>
            <TakeAssesmentPopup
                quiz="true"
                refQst={id && id.reflective_quiz_questions}
                videoId={videoId}
                show={modalShow}
                handleClose={()=>handleAssesmentClose(topic)}
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
    getAdminCourseDetailsActions: getAdminCourseDetails
})(PlayVideoCourses);
