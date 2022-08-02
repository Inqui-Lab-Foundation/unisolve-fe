import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { InputBox } from "../stories/InputBox/InputBox";
import "./Ideas.scss";
import "./Student.scss";
import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "../stories/Button";
import * as Yup from "yup";
import { useFormik } from "formik";
import { BsChevronRight, BsFilter } from "react-icons/bs";
import { DropDownComp } from "../stories/DropdownComp/DropdownComp";
import { TextArea } from "../stories/TextArea/TextArea";
import { Attachments } from "../stories/Attachments/Attachments";
import { RichText } from "../stories/RichText/RichText";
import Layout from "../Layout";
import { BreadcrumbTwo } from "../stories/BreadcrumbTwo/BreadcrumbTwo";

const Ideas = (props) => {
  const headingDetails = {
    title: "Register your idea",

    options: [
      {
        title: "Ideas",
        path: "/ideas",
      },
      {
        title: "Register Idea",
        path: "/ideasPage",
      },
    ],
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
  const inputIdeaTitle = {
    type: "text",
    placeholder: "Enter idea title here...",
  };
  const filterCateDropProps = {
    label: "Select problem category",
    labelIcon: BsFilter,
  };
  const filterSatementDropProps = {
    label: "Select problem statement",
    labelIcon: BsFilter,
  };
  const textArea = {
    type: "text",
    placeholder: "Enter idea learnings...",
  };
  const richText = {
    type: "text",
    placeholder: "Enter idea description here......",
  };
  const attachments = {
    type: "file",
    // placeholder: "Enter idea description here......",
  };
  const discardBtn = {
    label: "Discard",
    size: "small",
    //btnClass: "default",
  };
  const registerBtn = {
    label: " Save & Register Idea",
    size: "small",
    //btnClass: "default",
  };
  // console.log("=========", formik.initialValues);
  // alert(JSON.stringify(values, null, 2));
  return (
    <Layout>
      <Container className='EditPersonalDetails pt-3 pt-xl-5 mb-50'>
        <Row className='registeridea-bg1'>
          <Col className='col-xl-10 offset-xl-1 offset-md-0'>
            <BreadcrumbTwo {...headingDetails} />
            {/* <Row>
              <Col>
                <ul class="list-group common-links list-group-horizontal ">
                  <li class="list-group-item bg-transparent border-0 px-0">
                    <Link
                      exact
                      to="/ideas"
                      activeClassName="is-active"
                      className="text-link"
                    >
                      Ideas <GoChevronRight />
                    </Link>
                  </li>
                  <li class="list-group-item bg-transparent border-0 px-2">
                    <Link
                      exact
                      to="/ideasPage"
                      activeClassName="is-active"
                      className="text-link text-bold"
                    >
                      Register Idea
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row> */}
            {/* <Row>
              <Col>
                <h1 className="mb-4">Register your idea</h1>
              </Col>
            </Row> */}

            <Row className='register-block'>
              <Col>
                <h5 className='mb-5'>Innovative solution for the problem</h5>
                <Form>
                  <Form.Group className='mb-5' controlId='formBasicEmail'>
                    <Form.Label>Select Problem Category</Form.Label>
                    <p>Lorem ipsum is a sample dummy content</p>
                    <DropDownComp {...filterCateDropProps} />
                  </Form.Group>

                  <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Select problem statment</Form.Label>
                    <p>Lorem ipsum is a sample dummy content</p>
                    <DropDownComp {...filterSatementDropProps} />
                  </Form.Group>
                </Form>
              </Col>
            </Row>

            <Row className='register-block mt-5'>
              <Col>
                <h5 className='mb-5'>
                  Bring out your Innovative solution for the problem selected
                </h5>
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Group className='mb-5' controlId='formBasicEmail'>
                    <Form.Label>Idea Title</Form.Label>
                    <Form.Label>Idea Title</Form.Label>
                    <p>
                      Be specific and imaging you’re asking a question to
                      another person
                    </p>
                    <InputBox
                      {...inputIdeaTitle}
                      id='ideaTitle'
                      name='ideaTitle'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.ideaTitle}
                    />
                  </Form.Group>

                  <Form.Group className='mb-5' controlId='formBasicPassword'>
                    <Form.Label>Idea Description</Form.Label>
                    <p>
                      Include all the information someone would need to answer
                      your question
                    </p>
                    {/* <TextArea {...textArea} id="textArea" name="textArea" /> */}
                    <RichText
                      {...richText}
                      id='richText'
                      name='richText'
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.richTextValue}
                    />
                  </Form.Group>

                  <Form.Group className='mb-5' controlId='formBasicEmail'>
                    <Form.Label>Idea Learnings</Form.Label>
                    <p>Lorem ipsum dolor sit amet, cons adipisicing elit.</p>
                    <TextArea placeholder='Enter your question description here...' />
                  </Form.Group>

                  <Form.Group className='mb-5' controlId='formBasicEmail'>
                    <Form.Label>Add attachments</Form.Label>
                    <Attachments />
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <hr className='mt-5 mb-4'></hr>
            <Row>
              <Col>
                <div className='form-row row mb-4'>
                  <Col className='form-group text-left' md={6}>
                    <Button
                      {...discardBtn}
                      type='submit'
                      btnClass='discardbtn'
                    />
                  </Col>

                  <Col className='form-group btnright' md={6}>
                    <Button
                      {...registerBtn}
                      type='submit'
                      btnClass='graybtn'
                      onClick={() => props.history.push("/submittedIdeas")}
                    />
                  </Col>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Ideas;
