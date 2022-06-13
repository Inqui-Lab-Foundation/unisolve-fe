import React, { useState } from "react";
import { Row, Col, Container, Card, CardBody, Input, Form } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import "./style.scss";
import { BsChevronRight, BsFilter, BsFillPauseFill } from "react-icons/bs";
import { RiAwardFill } from "react-icons/ri";
import { VscCheck } from "react-icons/vsc";
import CourseVideo from "../../assets/img/courseVideo.png";
import Layout from "../../Admin/Layout";
import { BsDot, BsQuestionCircle, BsFillTrashFill } from "react-icons/bs";
import { Accordion } from "react-bootstrap";
import { AccordionHeader, AccordionBody, AccordionItem } from "reactstrap";
import User from "../../assets/img/avatar1.png";
import { Button } from "../../stories/Button";
import { GrDocument } from "react-icons/gr";
import { BsPlusLg } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";

import { InputBox } from "../../stories/InputBox/InputBox";
import { FileComp } from "../../stories/FileComp/FileComp";
import { TextArea } from "../../stories/TextArea/TextArea";
import { ProgressComp } from "../../stories/Progress/Progress";
import { PhotoUpload } from "../../stories/PhotoUpload/PhotoUpload";
import { SearchDropdown } from "../../stories/DropdownWithSearch/DropdownWithSearch.stories";

import * as Yup from "yup";
import { FormikContext, useFormik } from "formik";
import { BreadcrumbTwo } from "../../stories/BreadcrumbTwo/BreadcrumbTwo";
import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { adminCoursesCreate } from "../../redux/actions";

const AdminAddCourses = (props) => {
  const [videoClick, setVideoClick] = useState(false);
  const [moduleClick, setModuleClick] = useState(false);
  // const [error, setError] = useState("");
  const [url, setUrl] = useState("");
  const [videosList, setVideosList] = useState([]);
  const [image, setImage] = useState();
  const [modulesList, setModulesList] = useState([]);

  const history = useHistory();
  const inputCourseTitle = {
    type: "text",
    placeholder: "Enter course title here...",
  };
  const inputCourseDescription = {
    type: "text",
    placeholder: "Enter course descripion here...",
  };
  var formik = useFormik({
    initialValues: {
      courseTitle: "",
      courseDescription: "",
      // file: "",
    },
    validationSchema: Yup.object({
      courseTitle: Yup.string().required("Required"),
      courseDescription: Yup.string().required("Required"),
      // file: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const data = new FormData();
      data.append("course_name", values.courseTitle);
      data.append("description", values.courseDescription);
      data.append("Thumbnail", image);
      props.adminCoursesAddAction(data, history);
    },
  });
  const progressBar = {
    label: "Progress",
    options: [{ id: 1, teams: "CSK", percent: 75, status: "active" }],
  };

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

  const headingDetails = {
    title: "Add a new course",

    options: [
      {
        title: "Courses",
        path: "/admin/all-courses",
      },
      {
        title: "Add New Course",
        path: "/admin/add-course",
      },
    ],
  };

  const saveBtn = {
    label: "Save details",
    size: "small",
    // btnClass: "default",
  };
  const saveDraft = {
    label: "Save as  draft",
    size: "small",
    // btnClass: "default",
  };
  const discard = {
    label: "Discard",
    size: "small",
    // btnClass: "default",
  };
  const serachprops = {
    options: [
      { label: 10, value: "Mapusa" },
      { label: 20, value: "Vasco" },
      { label: 30, value: "Mumbai" },
    ],
    label: "Select course problem category",
    className: "defaultDropdown",
  };

  const questionType = {
    options: [
      { label: 10, value: "Mapusa" },
      { label: 20, value: "Vasco" },
      { label: 30, value: "Mumbai" },
    ],
    label: "One or more correct answer",
    className: "defaultDropdown",
  };

  const handleVideosChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...videosList];
    list[index][name] = value;
    setVideosList(list);
  };

  // console.log("=================++++++", videosList);

  const handleVideosRemove = (e, index) => {
    const list = [...videosList];
    list.splice(index, 1);
    setVideosList(list);
  };

  const handleVideosAdd = (e) => {
    setVideoClick(true);
    alert("hi");
    setVideosList([...videosList, { videoTitle: "", videoLink: "" }]);
  };

  const handleModulesChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...modulesList];
    list[index][name] = value;
    setModulesList(list);
  };

  // console.log("=================++++++", modulesList);

  const handleModulesRemove = (e, index) => {
    alert("uuuuuu");
    const list = [...modulesList];
    list.splice(index, 1);
    setModulesList(list);
  };

  const handleModulesAdd = (e) => {
    setModuleClick(true);
    alert("hi");
    setModulesList([...modulesList, { qstType: "", qst: "", ans1: "" }]);
  };

  const changeHandler = (event) => {
    // setError("");
    console.log("========event.target.files===", event.target.files[0].name);
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setUrl(URL.createObjectURL(img));
      setImage(img);
      // formik.values.file = URL.createObjectURL(img);
    }
  };

  const removeSelectedImage = () => {
    setImage();
  };

  console.log(props.successMessage);

  return (
    <Layout>
      <div className="courses-page mt-5 pt-5">
        <Form onSubmit={formik.handleSubmit}>
          <div className="container">
            <Row>
              <Col className="col-xl-10 offset-xl-1 offset-md-0">
                <Row className="mx-2">
                  <Col md={6}>
                    <BreadcrumbTwo {...headingDetails} />
                  </Col>
                  <Col md={6} className="text-right">
                    <Button
                      {...saveDraft}
                      type="submit"
                      btnClass="default mx-4"
                    />
                    <Button {...saveBtn} type="submit" btnClass="default" />
                  </Col>
                </Row>
                <Row className="m-0    courser-video-section ">
                  {/* <Col xl={4} className="course-assement-vd order-2 order-xl-1">
              <div className="assement-info">
                <p className="content-title">Course content</p>
                <div className="view-head"></div>

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

                  <Col className="mx-4">
                    <Button
                      // label={`${<BsPlus/>} Add Video Lesson`}
                      label="&#x2b; Add Video Lesson++"
                      btnClass="primary"
                      size="small"
                      onClick={(e) => handleVideosAdd(e)}
                    />
                  </Col>
                </div>
              </div>
              <div className="module-assement-v">
                <div className="assement-info">
                  <p className="content-title">Module Assessement</p>
                  <p className="module-text m-0">
                    Test students knowledge of all skills in this module
                  </p>
                  <p className="assement-link text-center">
                    <img src={CourseVideo} className="text-center img-fluid" />
                  </p>
                  <Col className="mx-4">
                    <Button
                      label="&#x2b; Add Module Assessement==="
                      btnClass="primary"
                      size="small"
                      onClick={(e) => handleModulesAdd(e)}
                    />
                  </Col>
                </div>
              </div>
            </Col> */}

                  <Col
                    xl={12}
                    className=" order-1 order-xl-2 course-register-block"
                  >
                    <Row>
                      <Col md={12}>
                        <Card className="w-100  mb-5 p-4">
                          <CardBody>
                            <div className="create-ticket">
                              <p className="m-0 question">Course title</p>
                              <span className="que-text mb-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </span>
                              <InputBox
                                {...inputCourseTitle}
                                id="courseTitle"
                                name="courseTitle"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.courseTitle}
                              />
                            </div>
                            <div className="create-ticket my-5">
                              <p className="m-0 question">Course description</p>
                              <span className="que-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </span>
                              <TextArea
                                {...inputCourseDescription}
                                id="courseDescription"
                                name="courseDescription"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.courseDescription}
                              />
                            </div>
                            {/* <div className="create-ticket my-5">
                        <p className="m-0 question">
                          Posible mastry Points (<span>300</span>)
                        </p>
                        <span className="que-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </span>
                        <ProgressComp {...progressBar} />
                      </div> */}
                            <div className="create-ticket my-5">
                              <p className="m-0 question">Course thumbnail</p>
                              <span className="que-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </span>
                              {/* <FileComp /> */}
                              {/* <PhotoUpload /> */}
                              {/* <input
                          type="file"
                          name="Upload"
                          // onChange={this.onImageChange}
                        /> */}
                              <div class="wrapper">
                                <div class="btnimg">upload</div>
                                <input
                                  type="file"
                                  name="file"
                                  accept=".png,.jpeg,.jpg"
                                  onChange={changeHandler}
                                />
                              </div>
                            </div>

                            {image ? (
                              // <img src={image} style={styles.image} alt="Thumb" />

                              <img
                                src={`${url}`}
                                style={styles.image}
                                alt="Thumb"
                              />
                            ) : null}

                            {image ? (
                              <button
                                onClick={removeSelectedImage}
                                style={styles.delete}
                              >
                                Remove
                              </button>
                            ) : null}
                          </CardBody>
                        </Card>
                      </Col>

                      {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}

                      {videoClick == true
                        ? videosList.map((video, index) => (
                            <Col key={index} md={12}>
                              <h2>Video modules </h2>
                              <Card className="w-100  mb-5 p-4">
                                <CardBody>
                                  <div className="create-ticket">
                                    <p className="m-0 question">
                                      Video lession title
                                    </p>
                                    <span className="que-text mb-2">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit.
                                    </span>
                                    <input
                                      name="videoTitle"
                                      type="text"
                                      id="videoTitle"
                                      placeholder="videoTitle"
                                      value={video.videoTitle}
                                      onChange={(e) =>
                                        handleVideosChange(e, index)
                                      }
                                      // required
                                    />
                                    {/* <InputBox
                          {...inputIdeaTitle}
                          id="ideaTitle"
                          name="ideaTitle"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.ideaTitle}
                        /> */}
                                  </div>
                                  <div className="create-ticket my-5">
                                    <p className="m-0 question">
                                      Video lesson link
                                    </p>
                                    <span className="que-text">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit.
                                    </span>
                                    <input
                                      name="videoLink"
                                      type="text"
                                      id="videoLink"
                                      placeholder="videoLink"
                                      value={video.videoLink}
                                      onChange={(e) =>
                                        handleVideosChange(e, index)
                                      }
                                      // required
                                    />
                                    {/* <InputBox
                          {...inputIdeaTitle}
                          id="ideaTitle"
                          name="ideaTitle"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.ideaTitle}
                        /> */}
                                    <Col className="mx-4">
                                      <Button
                                        // label={`${<BsPlus/>} Add Video Lesson`}
                                        label="Remove"
                                        btnClass="primary"
                                        size="small"
                                        onClick={(e) =>
                                          handleVideosRemove(e, index)
                                        }
                                      />
                                    </Col>
                                  </div>
                                </CardBody>
                              </Card>
                            </Col>
                          ))
                        : null}
                      {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}

                      {/* ddddddddddddddddddddddd */}

                      {moduleClick == true
                        ? modulesList.map((val, i) => (
                            <Col md={12} className="choice-module">
                              <h2>Module Assessement</h2>
                              <div key={i} className="w-100  mb-5 p-4 bg-white">
                                <Accordion defaultActiveKey="0">
                                  <Accordion.Item eventKey="0">
                                    <Row>
                                      <Col md={12}>
                                        <p className="m-0 question">Choices</p>
                                        <Accordion.Header>
                                          Question {1 + i}
                                        </Accordion.Header>
                                        <Button
                                          // label={`${<BsPlus/>} Add Video Lesson`}
                                          label="Remove"
                                          btnClass="primary"
                                          size="small"
                                          onClick={(e) =>
                                            handleModulesRemove(e, i)
                                          }
                                        />
                                        {/* <a onClick={(e) => handleModulesRemove(e, i)}>
                                <BsFillTrashFill className="acc-del" />
                              </a> */}
                                      </Col>
                                    </Row>

                                    <Accordion.Body>
                                      <div className="create-ticket">
                                        <p className="m-0 question">
                                          Question type
                                        </p>
                                        {/* <SearchDropdown {...questionType} /> */}
                                        <input
                                          name="qstType"
                                          type="text"
                                          id="qstType"
                                          placeholder="qstType"
                                          value={val.qstType}
                                          onChange={(e) =>
                                            handleModulesChange(e, i)
                                          }
                                          // required
                                        />
                                      </div>
                                      <div className="create-ticket my-5">
                                        <p className="m-0 question">Question</p>
                                        {/* <TextArea placeholder="What is your question?" /> */}
                                        <input
                                          name="qst"
                                          type="text"
                                          id="qst"
                                          placeholder="qst"
                                          value={val.qst}
                                          onChange={(e) =>
                                            handleModulesChange(e, i)
                                          }
                                          // required
                                        />
                                      </div>
                                      <div className="create-ticket ">
                                        {/* <div className="create-ticket p-4 choice-ans mb-4"> */}
                                        <p className="m-0 question">Choice 1</p>
                                        {/* <Row>
                                <Col md={6}>
                                </Col>
                                <Col md={6} className="text-right">
                                  <BsFillTrashFill />
                                </Col>
                              </Row> */}
                                        {/* <TextArea placeholder="Type your answer here" /> */}
                                        <input
                                          name="ans"
                                          type="text"
                                          id="ans"
                                          placeholder="ans"
                                          value={val.ans}
                                          onChange={(e) =>
                                            handleModulesChange(e, i)
                                          }
                                          // required
                                        />
                                        {/* <Input className="pb-3 mt-4" type="checkbox" />{" "}
                              <Label className="pb-3 mt-3" check>
                                This is the correct answer
                              </Label> */}
                                      </div>
                                      {/* <Button
                              btnClass="primary"
                              size="small"
                              Icon={BsPlusLg}
                              label="Add Choice"
                            /> */}
                                    </Accordion.Body>
                                  </Accordion.Item>
                                </Accordion>
                              </div>
                            </Col>
                          ))
                        : null}

                      {/* ddddddddddddddddddddddd */}
                    </Row>
                    <Row className="mb-5">
                      <Col md={6}>
                        <Button
                          {...discard}
                          type="submit"
                          btnClass="default mx-4"
                          onClick={() =>
                            props.history.push("/admin/all-courses")
                          }
                        />
                      </Col>
                      <Col md={6} className="text-right">
                        {/* <Button
                    {...saveDraft}
                    type="submit"
                    btnClass="default mx-4"
                  /> */}
                        {props.successMessage}
                        <Button
                          {...saveBtn}
                          btnClass={
                            !(formik.dirty && formik.isValid)
                              ? "default"
                              : "primary"
                          }
                          type="submit"
                          // btnClass="default"
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Form>
      </div>
    </Layout>
  );
};

// export default withRouter(AdminAddCourses);

const mapStateToProps = ({ adminCourses }) => {
  const { successMessage } = adminCourses;
  return { successMessage };
};

export default connect(mapStateToProps, {
  adminCoursesAddAction: adminCoursesCreate,
})(AdminAddCourses);

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
