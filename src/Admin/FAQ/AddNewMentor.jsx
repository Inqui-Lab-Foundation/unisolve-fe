import React, { useState } from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import "./style.scss";
import Layout from "../../Admin/Layout";
import { Button } from "../../stories/Button";
import { InputBox } from "../../stories/InputBox/InputBox";
import { TextArea } from "../../stories/TextArea/TextArea";
import { ProgressComp } from "../../stories/Progress/Progress";
import { PhotoUpload } from "../../stories/PhotoUpload/PhotoUpload";
import * as Yup from "yup";
import { useFormik } from "formik";
import { BreadcrumbTwo } from "../../stories/BreadcrumbTwo/BreadcrumbTwo";

const AddNewMentor = (props) => {
  const headingDetails = {
    title: "Add Problem Category",

    options: [
      {
        title: "Problem Categories",
        path: "/admin/problem-categories",
      },
      {
        title: "Add Problem Category",
        path: "/admin/add-problem-category",
      },
    ],
  };
  const inputIdeaTitle = {
    type: "text",
    placeholder: "Enter idea title here...",
  };
  const serachprops = {
    options: [
      { label: 10, value: "Mapusa" },
      { label: 20, value: "Vasco" },
      { label: 30, value: "Mumbai" },
    ],
    label: "Select question category",
    className: "defaultDropdown",
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

  return (
    <Layout>
      <div className='EditPersonalDetails new-ticket-page'>
        <Row className='register-block bg-transparent'>
          <Col className='col-xl-10 offset-xl-1 offset-md-0'>
            <BreadcrumbTwo {...headingDetails} />

            <div>
              {/* <Col>
                <h1 className="mb-4">Raise a new ticket</h1>
              </Col> */}
              <div className='create-ticket'>
                <p className='m-0 question'>Name</p>
                <span className='que-text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
                <InputBox
                  {...inputIdeaTitle}
                  id='ideaTitle'
                  name='ideaTitle'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ideaTitle}
                />
                <p className='m-0 question mt-5'>Description</p>
                <span className='que-text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
                <TextArea placeholder='Enter your question description here...' />

                <p className='m-0 question mt-5'>Points count</p>

                <ProgressComp {...progressBar} />

                <p className='m-0 question mt-5 mb-3'>Badge icon</p>

                <Row>
                  <Col md={3}>
                    <PhotoUpload />
                  </Col>
                </Row>

                {/* <Attachments /> */}
              </div>
              <hr></hr>
              <Row>
                <Col>
                  <Button
                    label='Discard'
                    btnClass='secondary'
                    size='small'
                    onClick={() => props.history.push("/tickets")}
                  />
                </Col>
                <Col className='submit-btn'>
                  <Button
                    label='Save as Draft'
                    btnClass='primary-outline'
                    size='small'
                  />
                  <Button label='Submit' btnClass='default' size='small' />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default withRouter(AddNewMentor);
