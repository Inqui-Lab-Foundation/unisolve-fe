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

const AddNewFaq = () => {
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
 

  const headingDetails = {
    title: "Create a new FAQ",

    options: [
      {
        title: "Help",
        path: "/",
      },
      {
        title: "Faq's",
        path: "/",
      },
      {
        title: "Add New Faq",
        path: "/",
      },
    ],
  };
  

  return (
    <Layout>
      <div className="courses-page mt-5 pt-5">
        <div className=" container">
          <Row className="m-0    courser-video-section ">
            <Col  className=" col-xl-10 offset-xl-1 offset-md-0 course-register-block">
          <BreadcrumbTwo {...headingDetails} />
              <Row>
                <Col md={12}>
                  <Card className="w-100  mb-5 p-4">
                    <CardBody>
                      <div className="create-ticket">
                        <p className="m-0 question">Select FAQ category</p>
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
                      
                    </CardBody>
                  </Card>
                </Col>
                <Col md={12}>
                  <h2>FAQ Topic</h2>
                  <Card className="w-100  mb-5 p-4">
                    <CardBody>
                      <div className="create-ticket">
                        <p className="m-0 question">FAQ Question 1</p>
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
                        <p className="m-0 question">FAQ answer</p>
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
                
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(AddNewFaq);
