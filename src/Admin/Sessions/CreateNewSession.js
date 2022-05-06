import "../../Pages/Student.scss";
import React, { Component, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  NavLink,
  Input,
  Card,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { Link } from "react-router-dom";
import { InputBox } from "../../stories/InputBox/InputBox";
import { InputWithRadioComp } from "../../stories/InputWithRadio/InputWithRadio";
import { DropDownWithSearch } from "../../stories/DropdownWithSearch/DropdownWithSearch";
// import { CalendarDropdown } from "../stories/CalendarDropdown/CalendarDropdown";
import { CalendarDropdownComp } from "../../stories/CalendarDropdown/CalendarDropdown";
import { PhotoUpload } from "../../stories/PhotoUpload/PhotoUpload";
import { TextArea } from "../../stories/TextArea/TextArea";
import { Button } from "../../stories/Button";
import { GoChevronRight } from "react-icons/go";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BreadcrumbTwo } from "../../stories/BreadcrumbTwo/BreadcrumbTwo";

import i18next from "i18next";
import { useTranslation } from "react-i18next";
import Layout from "../Layout";

const CreateNewSession = () => {
  const headingDetails = {
    title: "Create a new Session",

    options: [
      {
        title: "Sessions & News",
        path: "/",
      },
      {
        title: "Manage Sessions",
        path: "/",
      },
      {
        title: "Add New Session",
        path: "/",
      },
    ],
  };
  const { t, i18n } = useTranslation();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gType: "",
      // dob: "",
      selectCountry: "",
      selectCity: "",
    },

    validationSchema: Yup.object({
      sessionTopic: Yup.string()
        .min(2, t("login.error_character"))
        .matches(/^[aA-zZ\s]+$/, t("login.error_valid_name"))
        .required(t("login.error_required")),
        sessionSubTopic: Yup.string()
        .matches(/^[A-Za-z ]*$/, t("login.error_valid_name"))
        .min(2, t("login.error_character"))
        .required(t("login.error_required")),
      gType: Yup.string().required(t("login.error_required")),
      // dob: Yup.required(t("login.error_required")),
      selectCountry: Yup.string().required("required"),
      selectCity: Yup.string().required("required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const firstName = {
    types: "text",
    placeholder: t("login.first_Name"),
    className: "defaultInput",
  };
  const sessionTopic = {
    types: "text",
    placeholder: 'Enter session topic here...',
    className: "defaultInput",
  };

  const sessionLink = {
    types: "text",
    placeholder: 'copy paste the call link here',
    className: "defaultInput",
  };

  const sessionPwd = {
    types: "text",
    placeholder: 'copy paste the call link here',
    className: "defaultInput",
  };

  const sessionSubTopic = {
    types: "text",
    placeholder: 'Enter session topic here...',
    className: "defaultInput",
  };

  const lastName = {
    types: "text",
    placeholder: t("login.last_name"),
    className: "defaultInput",
  };

  const textArea = {};

  const selectCity = {
    label: "Enter city/district here...",

    options: [
      { label: 10, value: "Mapusa" },
      { label: 20, value: "Vasco" },
      { label: 30, value: "Mumbai" },
    ],
    className: "defaultDropdown",
  };

  const selectCountry = {
    label: "Enter country/region here...",
    options: [
      { label: 10, value: "Mapusa" },
      { label: 20, value: "Vasco" },
      { label: 30, value: "Mumbai" },
    ],
    className: "defaultDropdown",
  };

  const radioFields = {
    className: "defaultRadio",
  };

  const update = {
    label: "Save changes",
    size: "small",
    // btnClass: "default",
  };

  const discard = {
    label: "Discard",
    size: "small",
    btnClass: "default",
  };
  return (
    <Layout>
      <Container className="EditPersonalDetails pt-3 pt-xl-5">
        {/* <UsersPage /> */}
        <Row>
          <Col className="col-xl-10 offset-xl-1 offset-md-0">
            <BreadcrumbTwo {...headingDetails} />
            <Row className=" article-header mb-50">
              <Col
                md={12}
                className=" d-flex justify-content-center flex-column"
              >
                <Form onSubmit={formik.handleSubmit} isSubmitting>
                  <Card className="aside  mb-5 p-4">
                    <CardBody>
                      
                      <Row>
                        
                      <FormGroup className="form-row row mb-5">
                            <Label className="mb-2">
                              This session is for
                            </Label>
                            <Col
                              className="form-group mb-5  mb-md-0"
                              md={6}
                              xl={4}
                            >
                              <InputWithRadioComp
                                {...radioFields}
                                label="Students"
                                type="radio"
                                name="gType"
                                id="a"
                                value="a"
                                checked={formik.values.gType === "a"}
                                onChange={formik.handleChange}
                              />
                            </Col>

                            <Col
                              className="form-group mb-5 mb-md-0"
                              md={6}
                              xl={4}
                            >
                              <InputWithRadioComp
                                {...radioFields}
                                label="Mentors"
                                type="radio"
                                name="gType"
                                id="b"
                                value="b"
                                checked={formik.values.gType === "b"}
                                onChange={formik.handleChange}
                              />
                            </Col>
                            <Col
                              className="form-group mb-5 mb-md-0"
                              md={6}
                              xl={4}
                            >
                              <InputWithRadioComp
                                {...radioFields}
                                label="Evaluators"
                                type="radio"
                                name="gType"
                                id="c"
                                value="c"
                                checked={formik.values.gType === "c"}
                                onChange={formik.handleChange}
                              />
                            </Col>

                            
                            {formik.touched.gType && formik.errors.gType ? (
                              <small className="error-cls">
                                {formik.errors.gType}
                              </small>
                            ) : null}
                          </FormGroup>

                          <FormGroup className="form-row row mb-5">
                            
                            <Col
                              className="form-group mb-5  mb-md-0"
                              md={12}
                             
                            >
                             <Label htmlFor="firstName" className="mb-2">
                             Session topic
                              </Label>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              <InputBox
                                {...sessionTopic}
                                id="sessionTopic"
                                name="sessionTopic"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.sessionTopic}
                              />

                              {formik.touched.sessionTopic &&
                              formik.errors.sessionTopic ? (
                                <small className="error-cls">
                                  {formik.errors.sessionTopic}
                                </small>
                              ) : null}
                            </Col>

                           
                           

                            
                           
                          </FormGroup>

                          <FormGroup className="form-row row mb-5">
                            
                            <Col
                              className="form-group mb-5  mb-md-0"
                              md={12}
                             
                            >
                             <Label htmlFor="firstName" className="mb-2">
                             Session sub-topic
                              </Label>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              <InputBox
                                {...sessionSubTopic}
                                id="sessionSubTopic"
                                name="sessionSubTopic"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.sessionSubTopic}
                              />

                              {formik.touched.sessionSubTopic &&
                              formik.errors.sessionSubTopic ? (
                                <small className="error-cls">
                                  {formik.errors.sessionSubTopic}
                                </small>
                              ) : null}
                            </Col>

                          </FormGroup>

                        
                      </Row>
                    </CardBody>
                  </Card>

                  <Card className="aside p-4">
                    <CardBody>


                    <FormGroup className="form-row row mb-5">
                      <Label className="mb-2">Session Date & Time</Label>
                        <Col
                          className="form-group mb-5  mb-md-0"
                          md={6}
                         > 
                          <FormGroup className="form-row row mb-5">
                            <Label className="mb-2">
                            Start date
                            </Label>
                            <Col className="form-group" md={12}>
                              <CalendarDropdownComp
                                name="dob"
                                id="dob"
                                checked={formik.values.dob === "a"}
                                onChange={formik.handleChange}
                              />
                            </Col>
                            {formik.touched.dob && formik.errors.dob ? (
                              <small className="error-cls">
                                {formik.errors.dob}
                              </small>
                            ) : null}
                          </FormGroup>
                            </Col>

                          
                            <Col
                              className="form-group mb-5 mb-md-0"
                              md={6}
                             
                            >
                             
                          <FormGroup className="form-row row mb-5">
                            <Label className="mb-2">
                            Start time (IST)
                            </Label>
                            <Col className="form-group" md={12}>
                              <CalendarDropdownComp
                                name="dob"
                                id="dob"
                                checked={formik.values.dob === "a"}
                                onChange={formik.handleChange}
                              />
                            </Col>
                            {formik.touched.dob && formik.errors.dob ? (
                              <small className="error-cls">
                                {formik.errors.dob}
                              </small>
                            ) : null}
                          </FormGroup>
                            </Col>

                            <Col
                          className="form-group mb-5  mb-md-0"
                          md={6}
                         > 
                          <FormGroup className="form-row row mb-5">
                            <Label className="mb-2">
                            End date
                            </Label>
                            <Col className="form-group" md={12}>
                              <CalendarDropdownComp
                                name="dob"
                                id="dob"
                                checked={formik.values.dob === "a"}
                                onChange={formik.handleChange}
                              />
                            </Col>
                            {formik.touched.dob && formik.errors.dob ? (
                              <small className="error-cls">
                                {formik.errors.dob}
                              </small>
                            ) : null}
                          </FormGroup>
                            </Col>

                            <Col
                          className="form-group mb-5  mb-md-0"
                          md={6}
                         > 
                          <FormGroup className="form-row row mb-5">
                            <Label className="mb-2">
                            End time(IST)
                            </Label>
                            <Col className="form-group" md={12}>
                              <CalendarDropdownComp
                                name="dob"
                                id="dob"
                                checked={formik.values.dob === "a"}
                                onChange={formik.handleChange}
                              />
                            </Col>
                            {formik.touched.dob && formik.errors.dob ? (
                              <small className="error-cls">
                                {formik.errors.dob}
                              </small>
                            ) : null}
                          </FormGroup>
                            </Col>
                            
                            {formik.touched.gType && formik.errors.gType ? (
                              <small className="error-cls">
                                {formik.errors.gType}
                              </small>
                            ) : null}
                          </FormGroup>

                   

                    
                    </CardBody>
                  </Card>

                  <Card className="aside  my-5 p-4">
                    <CardBody>
                      
                      <Row>
                      <Label className="mb-2">Session Platform</Label>
                      <FormGroup className="form-row row mb-5">
                            <Label className="mb-2">
                            Select platform
                            </Label>
                            <Col
                              className="form-group mb-5  mb-md-0"
                              md={6}
                             
                            >
                              <InputWithRadioComp
                                {...radioFields}
                                label="Google Meet"
                                type="radio"
                                name="gType"
                                id="a"
                                value="a"
                                checked={formik.values.gType === "a"}
                                onChange={formik.handleChange}
                              />
                            </Col>

                            <Col
                              className="form-group mb-5 mb-md-0"
                              md={6}
                             
                            >
                              <InputWithRadioComp
                                {...radioFields}
                                label="Zoom"
                                type="radio"
                                name="gType"
                                id="b"
                                value="b"
                                checked={formik.values.gType === "b"}
                                onChange={formik.handleChange}
                              />
                            </Col>
                           

                            
                            {formik.touched.gType && formik.errors.gType ? (
                              <small className="error-cls">
                                {formik.errors.gType}
                              </small>
                            ) : null}
                          </FormGroup>

                          <FormGroup className="form-row row mb-5">
                            
                            <Col
                              className="form-group mb-5  mb-md-0"
                              md={12}
                             
                            >
                             <Label htmlFor="firstName" className="mb-2">
                             Session link
                              </Label>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              <InputBox
                                {...sessionLink}
                                id="sessionTopic"
                                name="sessionTopic"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.sessionTopic}
                              />

                              {formik.touched.sessionTopic &&
                              formik.errors.sessionTopic ? (
                                <small className="error-cls">
                                  {formik.errors.sessionTopic}
                                </small>
                              ) : null}
                            </Col>
 
                          </FormGroup>

                          <FormGroup className="form-row row mb-5">
                            
                            <Col
                              className="form-group mb-5  mb-md-0"
                              md={12}
                             
                            >
                             <Label htmlFor="firstName" className="mb-2">
                             Session password (optional)
                              </Label>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              <InputBox
                                {...sessionPwd}
                                id="sessionTopic"
                                name="sessionTopic"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.sessionTopic}
                              />

                              {formik.touched.sessionTopic &&
                              formik.errors.sessionTopic ? (
                                <small className="error-cls">
                                  {formik.errors.sessionTopic}
                                </small>
                              ) : null}
                            </Col>
 
                          </FormGroup>

                       

                        
                      </Row>
                    </CardBody>
                  </Card>

                  {/* <div className="form-row row mb-4 aside"> */}
                  <hr className="my-5 w-100 mb-4 clearfix" />
                  <div className="row mb-4 justify-content-between">
                    <div className="col-6">
                      <Button {...discard} type="cancel" />
                    </div>
                    <div className="col-6 text-right">
                      <Button
                        {...update}
                        type="submit"
                        btnClass={
                          !(formik.dirty && formik.isValid)
                            ? "default"
                            : "primary"
                        }
                      />
                    </div>
                  </div>
                  {/* </div> */}
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default CreateNewSession;
