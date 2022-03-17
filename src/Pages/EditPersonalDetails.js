import "./Student.scss";
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
import { InputBox } from "../stories/InputBox/InputBox";
import { InputWithRadioComp } from "../stories/InputWithRadio/InputWithRadio";
import { DropDownWithSearch } from "../stories/DropdownWithSearch/DropdownWithSearch";
// import { CalendarDropdown } from "../stories/CalendarDropdown/CalendarDropdown";
import { CalendarDropdownComp } from "../stories/CalendarDropdown/CalendarDropdown";
import { PhotoUpload } from "../stories/PhotoUpload/PhotoUpload";
import { TextArea } from "../stories/TextArea/TextArea";
import { Button } from "../stories/Button";

import { useFormik } from "formik";
import * as Yup from "yup";

import i18next from "i18next";
import { useTranslation } from "react-i18next";
import Layout from "../Layout";

const EditPersonalDetails = () => {
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
      firstName: Yup.string()
        .min(2, t("login.error_character"))
        .matches(/^[aA-zZ\s]+$/, t("login.error_valid_name"))
        .required(t("login.error_required")),
      lastName: Yup.string()
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
    btnClass: "default",
  };

  const discard = {
    label: "Discard",
    size: "small",
    btnClass: "default",
  };
  return (
    <Layout>
      <React.Fragment>
        <div className="container-fluid  EditPersonalDetails">
          {/* <UsersPage /> */}
          <Row className="row-flex">
            <div className="col-md-3 ">
              <p>sidebar</p>
            </div>

            <div className="col-md-9  ">
              <Row className=" article-header my-5">
                <Col md={12}>
                  <span className="sub">Home My Settings</span>
                  <h4>Edit personal details</h4>
                </Col>
                <Col
                  md={12}
                  className=" d-flex justify-content-center flex-column"
                >
                  <Form onSubmit={formik.handleSubmit}>
                    <Card className="aside  mb-5 p-4">
                      <CardBody>
                        <CardTitle className="mb-5">
                          Lorem ipsum dolor sit amet cons
                        </CardTitle>
                        <Row>
                          <Col md={12} className="mb-5">
                            <div className="upload w-25 rounded-circle">
                              <PhotoUpload />
                              <small>Image 240x240</small>
                            </div>
                            <small>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </small>
                            <CardText>Phote filed</CardText>
                          </Col>

                          <Col md={12}>
                            {/* <Form onSubmit={formik.handleSubmit}> */}
                            <FormGroup className="form-row row mb-5">
                              <Col className="form-group " md={6}>
                                <Label htmlFor="firstName" className="mb-2">
                                  First name (required)
                                </Label>
                                <InputBox
                                  {...firstName}
                                  id="firstName"
                                  name="firstName"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.firstName}
                                />

                                {formik.touched.firstName &&
                                formik.errors.firstName ? (
                                  <small className="error-cls">
                                    {formik.errors.firstName}
                                  </small>
                                ) : null}
                              </Col>
                              <Col className="form-group mb-5" md={6}>
                                <Label className="mb-2" htmlFor="lastName">
                                  Last name (required)
                                </Label>
                                <InputBox
                                  {...lastName}
                                  id="lastName"
                                  name="lastName"
                                  {...formik.getFieldProps("lastName")}
                                />
                                {formik.touched.lastName &&
                                formik.errors.lastName ? (
                                  <small className="error-cls">
                                    {formik.errors.lastName}
                                  </small>
                                ) : null}
                              </Col>
                              <small className="mt-2">
                                <i class="fa-solid fa-circle-info"></i> Note:
                                This name will appear on the certificates you
                                will be receiving.
                              </small>
                            </FormGroup>

                            <FormGroup>
                              <Col className="form-group mb-5" md={12}>
                                <Label className="mb-2" htmlFor="about">
                                  About (optional)
                                </Label>
                                <TextArea
                                  {...textArea}
                                  id="textArea"
                                  name="textArea"
                                />
                              </Col>
                            </FormGroup>

                            <FormGroup className="form-row row mb-5">
                              <Label className="mb-2">Gender (optional)</Label>
                              <Col className="form-group" md={3}>
                                <InputWithRadioComp
                                  {...radioFields}
                                  label="Male"
                                  type="radio"
                                  name="gType"
                                  id="a"
                                  value="a"
                                  checked={formik.values.gType === "a"}
                                  onChange={formik.handleChange}
                                />
                              </Col>

                              <Col className="form-group" md={3}>
                                <InputWithRadioComp
                                  {...radioFields}
                                  label="Female"
                                  type="radio"
                                  name="gType"
                                  id="b"
                                  value="b"
                                  checked={formik.values.gType === "b"}
                                  onChange={formik.handleChange}
                                />
                              </Col>
                              <Col className="form-group" md={3}>
                                <InputWithRadioComp
                                  {...radioFields}
                                  label="Other"
                                  type="radio"
                                  name="gType"
                                  id="c"
                                  value="c"
                                  checked={formik.values.gType === "c"}
                                  onChange={formik.handleChange}
                                />
                              </Col>

                              <Col className="form-group" md={3}>
                                <InputWithRadioComp
                                  {...radioFields}
                                  label="Rather not say"
                                  type="radio"
                                  name="gType"
                                  id="d"
                                  value="d"
                                  checked={formik.values.gType === "d"}
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
                              <Label className="mb-2">
                                Date of birth (required)
                              </Label>
                              <Col className="form-group" md={3}>
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

                            {/* </Form> */}
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                    <Card className="aside p-4">
                      <CardBody>
                        <Col className="form-group mb-5" md={12}>
                          <Label className="mb-2">
                            Country/Region (required)
                          </Label>

                          <DropDownWithSearch
                            {...selectCountry}
                            onBlur={formik.handleBlur}
                            value={formik.values.selectCountry}
                            onChange={(option) =>
                              formik.setFieldValue(
                                "selectCountry",
                                option[0].label
                              )
                            }
                            name="selectCountry"
                            id="selectCountry"
                          />
                          {formik.touched.selectCountry &&
                          formik.errors.selectCountry ? (
                            <small className="error-cls">
                              {formik.errors.selectCountry}
                            </small>
                          ) : null}
                        </Col>

                        <Col className="form-group" md={12}>
                          <Label className="mb-2" id="city">
                            City/District (required)
                          </Label>

                          <DropDownWithSearch
                            {...selectCity}
                            onBlur={formik.handleBlur}
                            value={formik.values.selectCity}
                            onChange={(option) =>
                              formik.setFieldValue(
                                "selectCity",
                                option[0].label
                              )
                            }
                            name="selectCity"
                            id="selectCity"
                          />
                          {formik.touched.selectCity &&
                          formik.errors.selectCity ? (
                            <small className="error-cls">
                              {formik.errors.selectCity}
                            </small>
                          ) : null}
                        </Col>
                      </CardBody>
                    </Card>
                    <div className="form-row row mb-4 aside">
                      {/* <Col className="form-group" md={6}>
                      <Button {...update} type="submit" />
                    </Col> */}
                      <hr className="my-5 w-100 clearfix" />
                      <div class="row justify-content-between">
                        <div class="col-4">
                          <Button {...discard} type="cancel" />
                        </div>
                        <div class="col-4">
                          <Button {...update} type="submit" />
                        </div>
                      </div>
                    </div>
                  </Form>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col md={12}>
                  <Row className="pt-3">
                    <p className="d-flex">
                      Don’t have an account?{" "}
                      <Link
                        exact
                        to="/register"
                        className="my-auto pt-0 text-link px-2"
                      >
                        Signup
                      </Link>
                    </p>
                  </Row>
                </Col>
              </Row>
            </div>
          </Row>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default EditPersonalDetails;
