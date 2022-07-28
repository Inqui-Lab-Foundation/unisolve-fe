import "./SignUp.scss";
import React, { Component, useState, memo, useEffect } from "react";
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
import LanguageSelectorComp from "../components/LanguageSelectorComp";
import { useFormik } from "formik";
import * as Yup from "yup";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
// import UsersPage from "./UserPages";
import signuplogo from "../media/logo-rect.svg";
import ellipse_1 from "../media/ellipse.svg";
import axios from "axios";
const SignUpNew = () => {
  const languageOptions = ["en", "hi", "te"];
  const currentLanguageCode = Cookies.get("i18next") || "en";
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [signUpDetails, setSignUpDetails] = useState({});
  const handlelanguageSelector = (e) => {
    console.log(e, "line 58");
    setSelectedLanguage(e);
    i18next.changeLanguage(e);
  };
  const { t, i18n } = useTranslation();
  const formik = useFormik({
    initialValues: {
      studentName: "",
      lastName: "",
      email: "",
      type: "",
      acceptedTerms: false,
      selectCity: "",
      selectState: "",
      selectCountry: "",
      educationLevel: "",
      dummy: "",
      selectSchool: "",
    },
    validationSchema: Yup.object({
      studentName: Yup.string()
        .min(2, t("login.error_character"))
        .matches(/^[aA-zZ\s]+$/, t("login.error_valid_name"))
        .required(t("login.error_required")),
      email: Yup.string()
        .email(t("login.error_invalid_email"))
        .required(t("login.error_required")),
      phone: Yup.string().required("required"),
      // type: Yup.string().required(t("login.error_required")),
      acceptedTerms: Yup.boolean()
        .required(t("login.error_required"))
        .oneOf([true], t("login.error_terms")),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  useEffect(() => {
    var config = {
      method: "get",
      url: process.env.REACT_APP_API_BASE_URL + "/admin/getStudentConfig",
      // url: "http://localhost:3002/api/v1/admin/getStudentConfig",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Authorization: `Bearer ${currentUser.Token}`,
      },
      // data: finalObj,
    };
    axios(config)
      .then(function (response) {
        // console.log("========", response);
        if (response.status === 200) {
          setSignUpDetails(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log(signUpDetails);

  const inputEmail = {
    types: "email",
    placeholder: t("login.enter_email"),
  };
  const inputPhone = {
    types: "number",
    placeholder: "Enter Phone",
  };
  const studentName = {
    types: "text",
    placeholder: t("login.first_Name"),
  };
  const LogInBtn = {
    label: "Login",
    size: "small",
    btnClass: "primary",
  };
  const signUpBtn = {
    label: "Sign up",
    size: "large",
    // btnClass: "default",
  };
  const [radioValue, setRadioValue] = useState();
  const searchCallback = (event, data) => {
    console.log(event, "line 188", data);
  };
  const languageOpt = {
    onClick: undefined,
    label: "English",
    options: ["English", "Hindi", "Telugu"],
  };
  // console.log("jhaniiiiiii", formik.values.email, formik.values.email.isValid);
  return (
    <React.Fragment>
      <div className="container-fluid SignUp">
        {/* <UsersPage /> */}
        <Row className="row-flex fl-con">
          <div className="col-md-4 aside mobile-header fl-body">
            <div className="row">
              <Col xs={6} sm={6} md={12} className=" mr-auto ">
                {" "}
                <h2 className="text-white">
                  <img
                    src={signuplogo}
                    alt="Signup logo"
                    className="img-fluid"
                  />
                  Unisolve
                </h2>
              </Col>
              <div className="col-6 desktop-hide my-auto ">
                <div className="d-flex justify-content-end">
                  <Link exact="true" to="/login" className="mr-5">
                    <Button {...LogInBtn} type="submit">
                      {t("login.logIn")}
                    </Button>
                  </Link>
                  {/* <NavLink className="d-inline p-0">{t("login.logIn")}</NavLink> */}
                  <DropDownComp
                    options={languageOptions}
                    value={selectedLanguage}
                    onChange={setSelectedLanguage}
                  />
                </div>
              </div>
            </div>
            <h1 className="text-left pb-5 mobile_tab-hide">
              {t("login.Title")}
            </h1>
            <p className="mobile_tab-hide">{t("login.subtitle")}</p>
            <div className="mobile_tab-hide">
              <figure>
                <img
                  src={ellipse_1}
                  alt="ellipse_1"
                  className="img-fluid img-1"
                />
              </figure>
            </div>
          </div>
          <div className="col-md-8 article fl-body">
            <Row className="article-header">
              <Col className="col-12 ">
                <div className="row justify-content-between">
                  <div className="col-md-6 mb-5 mb-sm-0 mb-md-0">
                    <h4 className="my-auto">
                      <span className="color-green">Sign up</span> with Unisolve
                    </h4>
                  </div>
                  <div className="col-md-6 mobile_tab-hide">
                    <div className="d-flex justify-content-end">
                      <Link exact="true" to="/login" className="mr-5">
                        <Button {...LogInBtn} type="submit">
                          {t("login.logIn")}
                        </Button>
                      </Link>
                      {/* <NavLink className="d-inline p-0">{t("login.logIn")}</NavLink> */}
                      <LanguageSelectorComp />
                    </div>
                    {/* <div className="language-selector">
                      <LanguageSelectorComp />
                    </div> */}
                  </div>
                </div>
                <Col md={12} className="mt-5">
                  <Form onSubmit={formik.handleSubmit}>
                    <div className="w-100 clearfix" />
                    {signUpDetails &&
                    signUpDetails.studentName &&
                    signUpDetails.studentName ? (
                      <FormGroup className="row mb-5">
                        <Col
                          className="form-group"
                          xs={12}
                          sm={6}
                          md={6}
                          xl={8}
                        >
                          <Label htmlFor="studentName" className="mb-2">
                            {"Student Name"}
                          </Label>
                          <InputBox
                            {...studentName}
                            id="studentName"
                            name="studentName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.studentName}
                          />
                          {formik.touched.studentName &&
                          formik.errors.studentName ? (
                            <small className="error-cls">
                              {formik.errors.studentName}
                            </small>
                          ) : null}
                          <small className="mb-5 mb-sm-0 mb-md-0">
                            {t("login.name_certificate")}
                          </small>
                        </Col>
                      </FormGroup>
                    ) : null}
                    <div className="w-100 clearfix" />
                    <FormGroup className="form-row row mb-5">
                      {signUpDetails &&
                      signUpDetails.phNumber &&
                      signUpDetails.phNumber ? (
                        <Col
                          className="form-group"
                          xs={12}
                          sm={6}
                          md={6}
                          xl={8}
                        >
                          <Label className="mb-2" htmlFor="phone">
                            Phone Number
                          </Label>
                          <InputBox
                            {...inputPhone}
                            id="phone"
                            name="phone"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                          />
                          <small className="mt-2">
                            {t("login.otp_verify_text")}
                          </small>
                          {formik.touched.phone && formik.errors.phone ? (
                            <small className="error-cls">
                              {formik.errors.phone}
                            </small>
                          ) : null}
                        </Col>
                      ) : null}
                      {signUpDetails &&
                      signUpDetails.email &&
                      signUpDetails.email ? (
                        <Col
                          className="form-group"
                          xs={12}
                          sm={6}
                          md={6}
                          xl={8}
                        >
                          <Label className="mb-2" htmlFor="email">
                            Email
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
                      ) : null}
                    </FormGroup>

                    <FormGroup check className="mb-4">
                      <Input
                        type="checkbox"
                        name="acceptedTerms"
                        className="my-auto mt-1"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.acceptedTerms}
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
                      <Col className="form-group" xs={12} md={12} xl={8}>
                        <Button
                          {...signUpBtn}
                          type="submit" // disabled={!(formik.dirty && formik.isValid)}
                          btnClass={
                            !(formik.dirty && formik.isValid)
                              ? "default"
                              : "primary"
                          }
                        />
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
export default memo(SignUpNew);
