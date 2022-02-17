import "./SignUp.scss";
import React, { Component } from "react";
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
import { InputWithRadioComp } from "../stories/InputWithRadio/InputWithRadio";
import { InputWithMobileNoComp } from "../stories/InputWithMobileNo/InputWithMobileNo";
import { InputWithSearchComp } from "../stories/InputWithSearch/InputWithSearch";
import { DropDownComp } from "../stories/DropdownComp/DropdownComp";
import { InputBox } from "../stories/InputBox/InputBox";
import { Button } from "../stories/Button";

import { useFormik } from "formik";
import * as Yup from "yup";

import i18next from "i18next";
import { useTranslation } from "react-i18next";
// import UsersPage from "./UserPages";

import signuplogo from "../media/signup-logo.svg";
import ellipse_1 from "../media/ellipse-1.png";
import ellipse_2 from "../media/ellipse-2.png";
import ellipse_3 from "../media/ellipse-3.png";

const SignUpNew = () => {
  const { t, i18n } = useTranslation();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(2, "Must be 2 characters or less")
        .matches(/^[aA-zZ\s]+$/, "Please enter valid name")
        .required("Required"),
      lastName: Yup.string()
        .matches(/^[A-Za-z ]*$/, "Please enter valid name")
        .max(2, "Must be 2 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const inputEmail = {
    types: "email",
    placeholder: "Email",
  };

  const firstName = {
    types: "text",
    placeholder: "First name",
  };

  const lastName = {
    types: "text",
    placeholder: "Last name",
  };

  const selectCity = {
    label: "City",
    options: ["India", "Dubai", "Garde 3", "Garde 1", "Garde 2", "Garde 3"],
  };

  const selectState = {
    label: "State",
    options: ["India", "Dubai", "Garde 3", "Garde 1", "Garde 2", "Garde 3"],
  };

  const selectCountry = {
    label: "Country",
    options: ["India", "Dubai", "Garde 3", "Garde 1", "Garde 2", "Garde 3"],
  };

  const selectSchool = {
    label: "Country",
    options: ["India", "Dubai", "Garde 3", "Garde 1", "Garde 2", "Garde 3"],
  };

  const otpBtn = {
    label: "Send OTP",
    size: "small",
    btnClass: "default",
  };

  const signUpBtn = {
    label: "Sign up",
    size: "large",
    btnClass: "default",
  };

  return (
    <React.Fragment>
      <div className="container-fluid  SignUp">
        {/* <UsersPage /> */}
        <Row>
          <div className="col-md-4 aside col-sm-3 hidden-xs  ">
            <div className="logo">
              <img
                src={signuplogo}
                alt="Signup logo"
                className="img-fluid mr-4"
              />
            </div>
            <h1 className="text-left pb-5">{t("signupwelcome")}</h1>
            <p>
              Before I didn’t know I could...but after being a part of this
              Inqui-Lab class now I feel I can make or do anything, I feel
              empowered!
            </p>
            <div className="ellipse">
              <figure>
                <img
                  src={ellipse_1}
                  alt="ellipse_1"
                  className="img-fluid img-1"
                />
              </figure>
              {/* <figure>
                  <img
                    src={ellipse_2}
                    alt="ellipse_2"
                    className="img-fluid img-2"
                  />
                </figure>
                <figure>
                  <img
                    src={ellipse_3}
                    alt="ellipse_3"
                    className="img-fluid img-3"
                  />
                </figure> */}
            </div>
          </div>
          <div className="col-md-8 article col-sm-9 ">
            <Row className=" article-header">
              <div className="d-flex justify-content-between">
                <div className="my-auto">
                  <h4>
                    <span className="color-green">Sign up</span> with Unisolve
                  </h4>
                </div>
                <div className="my-auto">
                  <p className="sub">
                    Already have an account?{" "}
                    <NavLink className="d-inline p-0">Log in</NavLink>
                  </p>
                </div>
              </div>
            </Row>
            <Row>
              <Col md={9}>
                <Form onSubmit={formik.handleSubmit}>
                  <div className="form-row mb-5">
                    <Col className="form-group" md={6} lg={12} xl={12}>
                      <Label className="mb-3">Join Unisolve as a</Label>
                      <InputWithRadioComp />
                    </Col>
                  </div>

                  <div className="form-row row mb-5">
                    <Col className="form-group" md={6}>
                      <Label htmlFor="firstName" className="mb-3">
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
                      {formik.touched.firstName && formik.errors.firstName ? (
                        <small className="error-cls">
                          {formik.errors.firstName}
                        </small>
                      ) : null}
                    </Col>
                    <Col className="form-group" md={6}>
                      <Label className="mb-3" htmlFor="lastName">
                        Last name (required)
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
                  </div>

                  <div className="form-row row mb-5">
                    <Col className="form-group" md={12}>
                      <Label className="mb-3" htmlFor="email">
                        Enter your email (required)
                      </Label>
                      <InputBox
                        {...inputEmail}
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                      <small>
                        OTP will be sent to this email to verify the email
                        address.
                      </small>
                    </Col>
                    {formik.touched.email && formik.errors.email ? (
                      <small className="error-cls">{formik.errors.email}</small>
                    ) : null}
                  </div>

                  <div className="form-row row mb-5">
                    <Col className="form-group" md={6}>
                      <Button {...otpBtn} />
                    </Col>
                  </div>

                  <div className="form-row row mb-5">
                    <Col className="form-group" md={4}>
                      <Label className="mb-3">Select your City</Label>
                      <DropDownComp {...selectCity} />
                    </Col>
                    <Col className="form-group" md={4}>
                      <Label className="mb-3">Select your State</Label>
                      <DropDownComp {...selectState} />
                    </Col>
                    <Col className="form-group" md={4}>
                      <Label className="mb-3">Select your Country</Label>
                      <DropDownComp {...selectCountry} />
                    </Col>
                  </div>

                  <div className="form-row row mb-5">
                    <Col className="form-group" md={12}>
                      <Label className="mb-3">
                        What is the name of your school/university? (optional)
                      </Label>
                      <DropDownComp {...selectSchool} />
                      <small>
                        To promote safe and transparent community, we recommend
                        that you add your correct school name.
                      </small>
                    </Col>
                  </div>

                  <div className="form-row mb-5">
                    <Col className="form-group" md={6} lg={12} xl={12}>
                      <Label className="mb-3">
                        Select your education level
                      </Label>
                      <InputWithRadioComp />
                      <small>
                        Please select your grade, this helps in providing you
                        the right content.
                      </small>
                    </Col>
                  </div>

                  <FormGroup check className="mb-5">
                    <Input type="checkbox" />
                    <small className="text-bold ">
                      By signing up for Unisolve, you agree to our Terms of use
                      and Privacy Policy.
                    </small>
                  </FormGroup>

                  <div className="form-row row mb-5">
                    <Col className="form-group" md={6}>
                      <Button {...signUpBtn} type="submit" />
                    </Col>
                  </div>
                </Form>
              </Col>
            </Row>
          </div>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default SignUpNew;
