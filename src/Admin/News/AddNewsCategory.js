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
import { TextArea } from "../../stories/TextArea/TextArea";
import { PhotoUpload } from "../../stories/PhotoUpload/PhotoUpload";
import { InputWithRadioComp } from "../../stories/InputWithRadio/InputWithRadio";
import { DropDownWithSearch } from "../../stories/DropdownWithSearch/DropdownWithSearch";
import { CalendarDropdownComp } from "../../stories/CalendarDropdown/CalendarDropdown";
import { Button } from "../../stories/Button";
import { GoChevronRight } from "react-icons/go";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BreadcrumbTwo } from "../../stories/BreadcrumbTwo/BreadcrumbTwo";

import i18next from "i18next";
import { useTranslation } from "react-i18next";
import Layout from "../Layout";

const AddNewsCategory = () => {
  const headingDetails = {
    title: "Create a new News Category",

    options: [
      {
        title: "Sessions & News",
        path: "/",
      },
      {
        title: "News Categories",
        path: "/admin/add-news-categories",
      },
      {
        title: "Add New News Category",
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
  const newsTopic = {
    types: "text",
    placeholder: "Enter news title here...",
    className: "defaultInput",
  };

  const newsDes = {
    types: "text",
    placeholder: "Enter news description here...",
    className: "defaultInput",
  };

  const sessionPwd = {
    types: "text",
    placeholder: "copy paste the call link here",
    className: "defaultInput",
  };

  const sessionSubTopic = {
    types: "text",
    placeholder: "Enter session topic here...",
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
      <Container className='EditPersonalDetails mt-5 pt-5 pt-xl-5'>
        {/* <UsersPage /> */}
        <Row>
          <Col className='col-xl-10 offset-xl-1 offset-md-0'>
            <BreadcrumbTwo {...headingDetails} />
            <Row className=' article-header mb-50'>
              <Col
                md={12}
                className=' d-flex justify-content-center flex-column'
              >
                <Form onSubmit={formik.handleSubmit} isSubmitting>
                  <Card className='aside p-4'>
                    <CardBody>
                      <FormGroup className='form-row row mb-5'>
                        <Col className='form-group mb-5  mb-md-0' md={12}>
                          <FormGroup className='form-row row mb-5'>
                            <Label className='mb-2'>Name</Label>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                            <Col className='form-group' md={12}>
                              <InputBox
                                {...newsTopic}
                                id='sessionTopic'
                                name='sessionTopic'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.sessionTopic}
                              />

                              {formik.touched.sessionTopic &&
                              formik.errors.sessionTopic ? (
                                <small className='error-cls'>
                                  {formik.errors.sessionTopic}
                                </small>
                              ) : null}
                            </Col>
                          </FormGroup>
                        </Col>

                        <Col className='form-group mb-5  mb-md-0' md={12}>
                          <FormGroup className='form-row row mb-5'>
                            <Label className='mb-2'>
                              Description <span>(optional)</span>
                            </Label>
                            <p>
                              Include all the information someone would need to
                              understand your question
                            </p>
                            <Col className='form-group' md={12}>
                              <TextArea placeholder='Enter category description here...' />
                            </Col>
                          </FormGroup>
                        </Col>

                        <Col className='form-group mb-5  mb-md-0' md={12}>
                          <FormGroup className='form-row row mb-5'>
                            <Label className='mb-2'>Thumbnail</Label>
                            <p>
                              Include all the information someone would need to
                              understand your question
                            </p>
                            <Col className='form-group' md={12}>
                              <PhotoUpload />
                            </Col>
                          </FormGroup>
                        </Col>
                      </FormGroup>
                    </CardBody>
                  </Card>

                  {/* <div className="form-row row mb-4 aside"> */}
                  <hr className='my-5 w-100 mb-4 clearfix' />
                  <div className='row mb-4 justify-content-between'>
                    <div className='col-6'>
                      <Button {...discard} type='cancel' />
                    </div>
                    <div className='col-6 text-right'>
                      <Button
                        {...update}
                        type='submit'
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

export default AddNewsCategory;
