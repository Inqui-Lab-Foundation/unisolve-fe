import "./SignUp.scss";
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
} from "reactstrap";
import { Link } from "react-router-dom";
import { InputWithRadioComp } from "../stories/InputWithRadio/InputWithRadio";
import { InputWithMobileNoComp } from "../stories/InputWithMobileNo/InputWithMobileNo";
import { DropDownWithSearch } from "../stories/DropdownWithSearch/DropdownWithSearch";
import { DropDownComp } from "../stories/DropdownComp/DropdownComp";
import { InputBox } from "../stories/InputBox/InputBox";
import { Button } from "../stories/Button";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { BsGlobe2 } from "react-icons/bs";
import Flag from "react-flag-icon-css";
import Cookies from "js-cookie";
import "bootstrap/dist/css/bootstrap.min.css";

import { useFormik } from "formik";
import * as Yup from "yup";

import i18next from "i18next";
import { useTranslation } from "react-i18next";
// import UsersPage from "./UserPages";

import signuplogo from "../media/logo-rect.svg";
import ellipse_1 from "../media/ellipse.svg";

const SignUpNew = () => {
  // const languageOptions = [
  //   {
  //     code: "en",
  //     name: "English",
  //     country_code: "in",
  //   },
  //   {
  //     code: "hi",
  //     name: "Hindi",
  //     country_code: "in",
  //   },
  //   {
  //     code: "te",
  //     name: "Telgu",
  //     country_code: "in",
  //   },

  const languageOptions = ["en", "hi", "te"];
  const currentLanguageCode = Cookies.get("i18next") || "en";
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  console.log(setSelectedLanguage, "setSelectedLanguage:::::::");
  const handlelanguageSelector = (e) => {
    console.log(e, "line 58");
    setSelectedLanguage(e);
    i18next.changeLanguage(e);
  };
  const { t, i18n } = useTranslation();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      type: "",
      acceptedTerms: "",
      selectCity: "",
      selectState: "",
      selectCountry: "",
      educationLevel: "",
      dummy: "",
      selectSchool: "",
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
      email: Yup.string()
        .email(t("login.error_invalid_email"))
        .required(t("login.error_required")),
      type: Yup.string().required(t("login.error_required")),
      acceptedTerms: Yup.boolean()
        .required(t("login.error_required"))
        .oneOf([true], t("login.error_terms")),
      selectCity: Yup.string()
        .oneOf(["Mapusa", "Vasco", "Mumbai"], t("login.job_type"))
        .required(t("login.error_required")),
      selectState: Yup.string()
        .oneOf(["Mapusa", "Vasco", "Mumbai"], t("login.job_type"))
        .required(t("login.error_required")),
      selectCountry: Yup.string()
        .oneOf(["Mapusa", "Vasco", "Mumbai"], t("login.job_type"))
        .required(t("login.error_required")),
      educationLevel: Yup.string().required(t("login.error_required")),

      selectSchool: Yup.string()
        .oneOf([
          "Don Bosco School, Mapusa",
          "Don Bosco School, Vasco",
          "Don Bosco School, Mumbai",
        ])
        .required(t("login.error_required")),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const inputEmail = {
    types: "email",
    placeholder: t("login.enter_email"),
  };

  const firstName = {
    types: "text",
    placeholder: t("login.first_Name"),
  };

  const lastName = {
    types: "text",
    placeholder: t("login.last_name"),
  };

  const selectCity = {
    label: t("login.select_city"),
    options: [
      { label: 10, value: "Mapusa" },
      { label: 20, value: "Vasco" },
      { label: 30, value: "Mumbai" },
    ],
  };

  const selectState = {
    label: t("login.select_state"),
    options: [
      { label: 10, value: "Mapusa" },
      { label: 20, value: "Vasco" },
      { label: 30, value: "Mumbai" },
    ],
  };

  const selectCountry = {
    label: t("login.select_country"),
    options: [
      { label: 10, value: "Mapusa" },
      { label: 20, value: "Vasco" },
      { label: 30, value: "Mumbai" },
    ],
  };

  const selectSchool = {
    label: t("login.select_school"),
    options: [
      { id: 10, value: "Don Bosco School, Mapusa" },
      { id: 20, value: "Don Bosco School, Vasco" },
      { id: 30, value: "Don Bosco School, Mumbai" },
    ],
  };

  const otpBtn = {
    label: "Send OTP",
    size: "small",
    btnClass: "default",
  };
  const LogInBtn = {
    label: "Login",
    size: "small",
    btnClass: "primary",
  };

  const signUpBtn = {
    label: "Sign up",
    size: "large",
    btnClass: "default",
  };
  const [radioValue, setRadioValue] = useState();
  const searchCallback = (event, data) => {
    console.log(event, "line 188", data);
  };

  return (
    <React.Fragment>
      <div className="container-fluid  SignUp">
        {/* <UsersPage /> */}
        <Row className="row-flex">
          <div className="col-md-4 aside col-sm-3 hidden-xs  ">
            <div className="logo">
              <h2>
                <img src={signuplogo} alt="Signup logo" className="img-fluid" />
                Unisolve
              </h2>
            </div>
            <h1 className="text-left pb-5 ">{t("login.Title")}</h1>
            <p>{t("login.subtitle")}</p>
            <div className="ellipse">
              <figure>
                <img
                  src={ellipse_1}
                  alt="ellipse_1"
                  className="img-fluid img-1"
                />
              </figure>
            </div>
          </div>

          <div className="col-md-8 article ">
            <Row className="article-header">
              <Col className="col-12 ">
                <div className="d-flex justify-content-between mb-5 pb-5">
                  <div className="my-auto">
                    <h4>
                      <span className="color-green">Sign up</span> with Unisolve
                    </h4>
                  </div>
                  <div className="my-auto d-flex ">
                    <p className="sub ">
                      {/* {t("login.already_account")}{" "} */}
                      <Link exact to="/login" className="mr-5">
                        <Button {...LogInBtn} type="submit">
                          {t("login.logIn")}
                        </Button>
                      </Link>
                      {/* <NavLink className="d-inline p-0">{t("login.logIn")}</NavLink> */}
                    </p>
                    <DropDownComp
                      options={languageOptions}
                      value={selectedLanguage}
                      onChange={setSelectedLanguage}
                    />
                    {/* <DropdownButton
                      id="dropdown-basic-button"
                      title={<BsGlobe2 />}
                      className="mx-5"
                    >
                      {languageOptions.map((item, i) => {
                        return (
                          <Dropdown.Item
                            key={i}
                            href="#/action-1"
                            onClick={() => i18next.changeLanguage(item.code)}
                          >
                            <span> {item.name}</span>
                          </Dropdown.Item>
                        );
                      })}
                    </DropdownButton> */}
                  </div>
                </div>
                <Col md={12} className="mt-5">
                  <Form onSubmit={formik.handleSubmit}>
                    <div className="form-row row mb-5">
                      <Label className="mb-2">{t("login.join_us")}</Label>
                      <Col className="form-group" md={4}>
                        <InputWithRadioComp
                          label={t("login.join_Student")}
                          type="radio"
                          name="type"
                          id="type"
                          value="a"
                          checked={formik.values.type === "a"}
                          onChange={formik.handleChange}
                        />
                      </Col>

                      <Col className="form-group" md={4}>
                        <InputWithRadioComp
                          label={t("login.join_Mentor")}
                          type="radio"
                          name="type"
                          id="type"
                          value="b"
                          checked={formik.values.type === "b"}
                          onChange={formik.handleChange}
                        />
                      </Col>
                      {formik.touched.type && formik.errors.type ? (
                        <small className="error-cls">
                          {formik.errors.type}
                        </small>
                      ) : null}
                    </div>
                    <div className="w-100 clearfix" />

                    <div className="form-row row mb-5">
                      <Col className="form-group" md={4}>
                        <Label htmlFor="firstName" className="mb-2">
                          {t("login.firstName")}
                        </Label>
                        <InputBox
                          {...firstName}
                          id="firstName"
                          name="firstName"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.firstName}
                        />

                        {formik.touched.firstName && formik.errors.firstName ? (
                          <small className="error-cls">
                            {formik.errors.firstName}
                          </small>
                        ) : null}
                      </Col>
                      <Col className="form-group" md={4}>
                        <Label className="mb-2" htmlFor="lastName">
                          {t("login.LastName")}
                        </Label>
                        <InputBox
                          {...lastName}
                          id="lastName"
                          name="lastName"
                          {...formik.getFieldProps("lastName")}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                          <small className="error-cls">
                            {formik.errors.lastName}
                          </small>
                        ) : null}
                      </Col>
                      <small className="mt-2">
                        {t("login.name_certificate")}
                      </small>
                    </div>

                    <div className="w-100 clearfix" />

                    <div className="form-row row mb-5">
                      <Col className="form-group" md={8}>
                        <Label className="mb-2" htmlFor="email">
                          {t("login.Email")}
                        </Label>
                        <InputBox
                          {...inputEmail}
                          id="email"
                          name="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />
                        <small className="mt-2">
                          {t("login.otp_verify_text")}
                        </small>
                        {formik.touched.email && formik.errors.email ? (
                          <small className="error-cls">
                            {formik.errors.email}
                          </small>
                        ) : null}
                      </Col>

                      <Col md={3} className="form-group mt-5">
                        <div className="verification mt-3">
                          {t("login.email_verified")}{" "}
                          <i class="fa-solid fa-check mx-3"></i>
                        </div>
                      </Col>
                    </div>
                    <div className="w-100 clearfix" />

                    <div className="form-row row mb-5">
                      <Col className="form-group" md={6}>
                        <Button {...otpBtn} />
                      </Col>
                    </div>

                    <div className="form-row row mb-5">
                      <Col md={8}>
                        <Row>
                          <Col className="form-group" md={4}>
                            <Label className="mb-2" id="city">
                              {t("login.city")}
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
                          <Col className="form-group" md={4}>
                            <Label className="mb-2"> {t("login.state")}</Label>

                            <DropDownWithSearch
                              {...selectState}
                              onBlur={formik.handleBlur}
                              value={formik.values.selectState}
                              onChange={(option) =>
                                formik.setFieldValue(
                                  "selectState",
                                  option[0].label
                                )
                              }
                              name="selectState"
                              id="selectState"
                            />
                            {formik.touched.selectState &&
                            formik.errors.selectState ? (
                              <small className="error-cls">
                                {formik.errors.selectState}
                              </small>
                            ) : null}
                          </Col>
                          <Col className="form-group" md={4}>
                            <Label className="mb-2">
                              {" "}
                              {t("login.country")}
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
                        </Row>
                      </Col>
                    </div>
                    <div className="w-100 clearfix" />

                    <div className="form-row row mb-5">
                      <Col className="form-group" md={8}>
                        <Label className="mb-2">{t("login.school_name")}</Label>
                        <DropDownWithSearch
                          {...selectSchool}
                          onBlur={formik.handleBlur}
                          value={formik.values.selectSchool}
                          onChange={(option) =>
                            formik.setFieldValue(
                              "selectSchool",
                              option[0].label
                            )
                          }
                          name="selectSchool"
                          id="selectSchool"
                        />
                        {formik.touched.selectSchool &&
                        formik.errors.selectSchool ? (
                          <small className="error-cls">
                            {formik.errors.selectSchool}
                          </small>
                        ) : null}
                        <small className="mt-3">
                          {t("login.selet_school")}
                        </small>
                      </Col>
                    </div>

                    <div className="w-100 clearfix" />

                    <div className="form-row row mb-5">
                      <Label className="mb-2">
                        {" "}
                        {t("login.education_level")}
                      </Label>
                      <Col className="form-group" md={4}>
                        <InputWithRadioComp
                          label={t("login.school")}
                          type="radio"
                          name="educationLevel"
                          id="educationLevel"
                          value="a"
                          checked={formik.values.educationLevel === "a"}
                          onChange={formik.handleChange}
                        />
                      </Col>

                      <Col className="form-group" md={4}>
                        <InputWithRadioComp
                          label={t("login.university")}
                          type="radio"
                          name="educationLevel"
                          id="educationLevel"
                          value="b"
                          checked={formik.values.educationLevel === "b"}
                          onChange={formik.handleChange}
                        />
                      </Col>
                      <small className="mt-3 mb-2">
                        {t("login.select_grade")}
                      </small>
                      {formik.touched.educationLevel &&
                      formik.errors.educationLevel ? (
                        <small className="error-cls">
                          {formik.errors.educationLevel}
                        </small>
                      ) : null}
                    </div>

                    {/* <Col md={3} className="form-group mt-5">
                      <div className="verification mt-3">
                        {t("login.email_verified")}{" "}
                        <i className="fa-solid fa-check mx-3"></i>
                      </div>
                    </Col> */}

                    <div className="w-100 clearfix" />

                    <div className="form-row row mb-5">
                      <Col className="form-group" md={6}>
                        <Button {...otpBtn} />
                      </Col>
                    </div>

                    {/* <div className="form-row row mb-5">
                      <Col md={8}>
                        <Row>
                          <Col className="form-group" md={4}>
                            <Label className="mb-2" id="city">
                              {t("login.city")}
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
                          <Col className="form-group" md={4}>
                            <Label className="mb-2"> {t("login.state")}</Label>
                            
                            <DropDownWithSearch
                              {...selectState}
                              onBlur={formik.handleBlur}
                              value={formik.values.selectState}
                              onChange={(option) =>
                                formik.setFieldValue(
                                  "selectState",
                                  option[0].label
                                )
                              }
                              name="selectState"
                              id="selectState"
                            />
                            {formik.touched.selectState &&
                            formik.errors.selectState ? (
                              <small className="error-cls">
                                {formik.errors.selectState}
                              </small>
                            ) : null}
                          </Col>
                          <Col className="form-group" md={4}>
                            <Label className="mb-2">
                              {" "}
                              {t("login.country")}
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
                        </Row>
                      </Col>
                    </div> */}
                    <div className="w-100 clearfix" />

                    {/* <div className="form-row row mb-5">
                      <Col className="form-group" md={8}>
                        <Label className="mb-2">{t("login.school_name")}</Label>
                        <DropDownWithSearch
                          {...selectSchool}
                          onBlur={formik.handleBlur}
                          value={formik.values.selectSchool}
                          onChange={(option) =>
                            formik.setFieldValue(
                              "selectSchool",
                              option[0].label
                            )
                          }
                          name="selectSchool"
                          id="selectSchool"
                        />
                        {formik.touched.selectSchool &&
                        formik.errors.selectSchool ? (
                          <small className="error-cls">
                            {formik.errors.selectSchool}
                          </small>
                        ) : null}
                        <small className="mt-3">
                          {t("login.selet_school")}
                        </small>
                      </Col>
                    </div> */}

                    <div className="w-100 clearfix" />

                    {/* <div className="form-row row mb-5">
                      <Label className="mb-2">
                        {" "}
                        {t("login.education_level")}
                      </Label>
                      <Col className="form-group" md={4}>
                        <InputWithRadioComp
                          label={t("login.school")}
                          type="radio"
                          name="educationLevel"
                          id="educationLevel"
                          value="a"
                          checked={formik.values.educationLevel === "a"}
                          onChange={formik.handleChange}
                        />
                      </Col>

                      <Col className="form-group" md={4}>
                        <InputWithRadioComp
                          label={t("login.university")}
                          type="radio"
                          name="educationLevel"
                          id="educationLevel"
                          value="b"
                          checked={formik.values.educationLevel === "b"}
                          onChange={formik.handleChange}
                        />
                      </Col>
                      <small className="mt-3 mb-2">
                        {t("login.select_grade")}
                      </small>
                      {formik.touched.educationLevel &&
                      formik.errors.educationLevel ? (
                        <small className="error-cls">
                          {formik.errors.educationLevel}
                        </small>
                      ) : null}
                    </div> */}

                    <FormGroup check className="mb-4">
                      <Input
                        type="checkbox"
                        name="acceptedTerms"
                        className="my-auto"
                      />
                      <small className="text-bold ">{t("login.terms")}</small>
                      {formik.touched.acceptedTerms &&
                      formik.errors.acceptedTerms ? (
                        <small className="error-cls">
                          {formik.errors.acceptedTerms}
                        </small>
                      ) : null}
                    </FormGroup>

                    <div className="form-row row mb-4">
                      <Col className="form-group" md={6}>
                        <Button {...signUpBtn} type="submit" />
                      </Col>
                    </div>
                  </Form>
                </Col>
              </Col>
            </Row>
          </div>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default SignUpNew;
