import React, { useState } from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import "./style.scss";
import { BsChevronRight, BsFilter, BsFillPauseFill } from "react-icons/bs";
import { RiAwardFill } from "react-icons/ri";
import { VscCheck } from "react-icons/vsc";
import CourseVideo from "../../assets/img/courseVideo.png";
import Layout from "../../Admin/Layout";
import { BsDot, BsQuestionCircle } from "react-icons/bs";
import { Accordion } from "react-bootstrap";
import { AccordionHeader, AccordionBody, AccordionItem } from "reactstrap";
import User from "../../assets/img/avatar1.png";
import { Button } from "../../stories/Button";
import { GrDocument } from "react-icons/gr";
import { AiFillPlayCircle } from "react-icons/ai";

import { InputBox } from "../../stories/InputBox/InputBox";
import { TextArea } from "../../stories/TextArea/TextArea";
import { ProgressComp } from "../../stories/Progress/Progress";
import { PhotoUpload } from "../../stories/PhotoUpload/PhotoUpload";
import * as Yup from "yup";
import { useFormik } from "formik";
import { BreadcrumbTwo } from "../../stories/BreadcrumbTwo/BreadcrumbTwo";

const AdminAddCourses = () => {
  const inputIdeaTitle = {
    type: "text",
    placeholder: "Enter idea title here...",
  };
  const formik = useFormik({
    initialValues: {
      ideaTitle: "",
      ideaDescription: "",
      richTextValue: "",
      file: "",
    },
    validationSchema: Yup.object({
      ideaTitle: Yup.string().required("Required"),
      // password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("====================submit");
      alert(JSON.stringify(values, null, 2));
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
    title: "Add new course",

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
  const [toggleQuestion, setToggequestion] = useState(1);

  return (
    <Layout>
      <div className="courses-page mt-5 pt-5">
        <div className=" container">
          <BreadcrumbTwo {...headingDetails} />
          <Row className="m-0    courser-video-section ">
            <Col xl={4} className="course-assement-vd order-2 order-xl-1">
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

                  <Col className="mx-4">
                    <Button
                      // label={`${<BsPlus/>} Add Video Lesson`}
                      label="&#x2b; Add Video Lesson"
                      btnClass="primary"
                      size="small"

                      // onClick={() => props.history.push("/tickets")}
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
                      label="&#x2b; Add Video Lesson"
                      btnClass="primary"
                      size="small"

                      // onClick={() => props.history.push("/tickets")}
                    />
                  </Col>
                </div>
              </div>
            </Col>

            <Col xl={8} className=" order-1 order-xl-2 course-register-block">
              <Row>
                <Col md={12}>
                  <Card className="w-100  mb-5 p-4">
                    <CardBody>
                      <div className="create-ticket">
                        <p className="m-0 question">Course title</p>
                        <span className="que-text mb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </span>
                        <InputBox
                          {...inputIdeaTitle}
                          id="ideaTitle"
                          name="ideaTitle"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.ideaTitle}
                        />
                      </div>
                      <div className="create-ticket my-5">
                        <p className="m-0 question">Course problem category</p>
                        <span className="que-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </span>
                        <InputBox
                          {...inputIdeaTitle}
                          id="ideaTitle"
                          name="ideaTitle"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.ideaTitle}
                        />
                      </div>
                      <div className="create-ticket my-5">
                        <p className="m-0 question">
                          Posible mastry Points (<span>300</span>)
                        </p>
                        <span className="que-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </span>
                        <InputBox
                          {...inputIdeaTitle}
                          id="ideaTitle"
                          name="ideaTitle"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.ideaTitle}
                        />
                      </div>
                      <div className="create-ticket my-5">
                        <p className="m-0 question">Course thumbnail</p>
                        <span className="que-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </span>
                        <PhotoUpload />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={12}>
                  <h2>Video module 1</h2>
                  <Card className="w-100  mb-5 p-4">
                    <CardBody>
                      <div className="create-ticket">
                        <p className="m-0 question">Video lession title</p>
                        <span className="que-text mb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </span>
                        <InputBox
                          {...inputIdeaTitle}
                          id="ideaTitle"
                          name="ideaTitle"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.ideaTitle}
                        />
                      </div>
                      <div className="create-ticket my-5">
                        <p className="m-0 question">Video lesson link</p>
                        <span className="que-text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </span>
                        <InputBox
                          {...inputIdeaTitle}
                          id="ideaTitle"
                          name="ideaTitle"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.ideaTitle}
                        />
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md={12}>
                  <h2>Module Assessement</h2>
                  <Card className="w-100  mb-5 p-4">
                    <CardBody>
                      {/* <div>
  <Accordion
    
    toggle={function noRefCheck(){
      
    }}
  >
    <AccordionItem>
      <AccordionHeader targetId="1">
        Accordion Item 1
      </AccordionHeader>
      <AccordionBody accordionId="1">
        <strong>
          This is the first item's accordion body.
        </strong>
        You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
        <code>
          .accordion-body
        </code>
        , though the transition does limit overflow.
      </AccordionBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader targetId="2">
        Accordion Item 2
      </AccordionHeader>
      <AccordionBody accordionId="2">
        <strong>
          This is the second item's accordion body.
        </strong>
        You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
        <code>
          .accordion-body
        </code>
        , though the transition does limit overflow.
      </AccordionBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader targetId="3">
        Accordion Item 3
      </AccordionHeader>
      <AccordionBody accordionId="3">
        <strong>
          This is the third item's accordion body.
        </strong>
        You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
        <code>
          .accordion-body
        </code>
        , though the transition does limit overflow.
      </AccordionBody>
    </AccordionItem>
  </Accordion>
</div> */}
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(AdminAddCourses);
