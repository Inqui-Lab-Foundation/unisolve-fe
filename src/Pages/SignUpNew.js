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
import { InputWithRadioComp } from "../stories/InputWithRadio/InputWithRadio";
import { InputWithMobileNoComp } from "../stories/InputWithMobileNo/InputWithMobileNo";
import { DropDownWithSearch } from "../stories/DropdownWithSearch/DropdownWithSearch";
import { DropDownComp } from "../stories/DropdownComp/DropdownComp";
import { InputBox } from "../stories/InputBox/InputBox";
import { Button } from "../stories/Button";

import { useFormik } from "formik";
import * as Yup from "yup";

import i18next from "i18next";
import { useTranslation } from "react-i18next";
// import UsersPage from "./UserPages";

import signuplogo from "../media/logo-rect.svg";
import ellipse_1 from "../media/ellipse.svg";

const SignUpNew = () => {
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
        .min(2, "Must be 2 characters or more")
        .matches(/^[aA-zZ\s]+$/, "Please enter valid name")
        .required("Required"),
      lastName: Yup.string()
        .matches(/^[A-Za-z ]*$/, "Please enter valid name")
        .min(2, "Must be 2 characters or more")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string().required("Required"),
      acceptedTerms: Yup.boolean()
        .required("Required")
        .oneOf([true], "You must accept the terms and conditions."),
      selectCity: Yup.string()
        .oneOf(["Mapusa", "Vasco", "Mumbai"], "Invalid Job Type")
        .required("Required"),
      selectState: Yup.string()
        .oneOf(["Mapusa", "Vasco", "Mumbai"], "Invalid Job Type")
        .required("Required"),
      selectCountry: Yup.string()
        .oneOf(["Mapusa", "Vasco", "Mumbai"], "Invalid Job Type")
        .required("Required"),
      educationLevel: Yup.string().required("Required"),

      selectSchool: Yup.string()
        .oneOf([
          "Don Bosco School, Mapusa",
          "Don Bosco School, Vasco",
          "Don Bosco School, Mumbai",
        ])
        .required("Required"),
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
    label: "Select City",
    options: [
      { id: 10, value: "Mapusa" },
      { id: 20, value: "Vasco" },
      { id: 30, value: "Mumbai" },
    ],
  };

  const selectState = {
    label: "Select State",
    options: [
      { id: 10, value: "Mapusa" },
      { id: 20, value: "Vasco" },
      { id: 30, value: "Mumbai" },
    ],
  };

  const selectCountry = {
    label: "Select Country",
    options: [
      { id: 10, value: "Mapusa" },
      { id: 20, value: "Vasco" },
      { id: 30, value: "Mumbai" },
    ],
  };

  const selectSchool = {
    label: "Select school",
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
      {console.log("line 194", formik.values)}
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
            <h1 className="text-left pb-5 ">{t("signupwelcome")}</h1>
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
              <Col md={12}>
                <Form onSubmit={formik.handleSubmit}>
                  <div className="form-row row mb-5">
                    <Label className="mb-2">Join Unisolve as a</Label>
                    <Col className="form-group" md={4}>
                      <InputWithRadioComp
                        label={"Student"}
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
                        label={"Teacher/Mentor"}
                        type="radio"
                        name="type"
                        id="type"
                        value="b"
                        checked={formik.values.type === "b"}
                        onChange={formik.handleChange}
                      />
                    </Col>
                    {formik.touched.type && formik.errors.type ? (
                      <small className="error-cls">{formik.errors.type}</small>
                    ) : null}
                  </div>
                  <div className="w-100 clearfix" />

                  <div className="form-row row mb-5">
                    <Col className="form-group" md={4}>
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

                      {formik.touched.firstName && formik.errors.firstName ? (
                        <small className="error-cls">
                          {formik.errors.firstName}
                        </small>
                      ) : null}
                    </Col>
                    <Col className="form-group" md={4}>
                      <Label className="mb-2" htmlFor="lastName">
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
                    <small className="mt-2">
                      The above name will be printed on your certificates.
                    </small>
                  </div>
                  <div className="w-100 clearfix" />

                  <div className="form-row row mb-5">
                    <Col className="form-group" md={8}>
                      <Label className="mb-2" htmlFor="email">
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
                      <small className="mt-2">
                        OTP will be sent to this email to verify the email
                        address.
                      </small>
                      {formik.touched.email && formik.errors.email ? (
                        <small className="error-cls">
                          {formik.errors.email}
                        </small>
                      ) : null}
                    </Col>

                    <Col md={3} className="form-group mt-5">
                      <div className="verification mt-3">
                        email Verified <i class="fa-solid fa-check mx-3"></i>
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
                            Select your City
                          </Label>
                          {/* <DropDownComp
                            {...selectCity}
                            name="city"
                            id="city"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.city}
                          /> */}
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
                          <Label className="mb-2">Select your State</Label>
                          {/* <DropDownComp
                            {...selectState}
                            name="state"
                            id="state"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.state}
                          /> */}
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
                          <Label className="mb-2">Select your Country</Label>
                          {/* <DropDownComp
                            {...selectCountry}
                            name="country"
                            id="country"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.country}
                          /> */}

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
                      <Label className="mb-2">
                        What is the name of your school/university? (optional)
                      </Label>
                      <DropDownWithSearch
                        {...selectSchool}
                        onBlur={formik.handleBlur}
                        value={formik.values.selectSchool}
                        onChange={(option) =>
                          formik.setFieldValue("selectSchool", option[0].label)
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
                        To promote safe and transparent community, we recommend
                        that you add your correct school name.
                      </small>
                    </Col>
                  </div>

                  <div className="w-100 clearfix" />

                  <div className="form-row row mb-5">
                    <Label className="mb-2">Select your education level</Label>
                    <Col className="form-group" md={4}>
                      <InputWithRadioComp
                        label={"School"}
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
                        label={"University/Adult learner"}
                        type="radio"
                        name="educationLevel"
                        id="educationLevel"
                        value="b"
                        checked={formik.values.educationLevel === "b"}
                        onChange={formik.handleChange}
                      />
                    </Col>
                    <small className="mt-3 mb-2">
                      Please select your grade, this helps in providing you the
                      right content.
                    </small>
                    {formik.touched.educationLevel &&
                    formik.errors.educationLevel ? (
                      <small className="error-cls">
                        {formik.errors.educationLevel}
                      </small>
                    ) : null}
                  </div>

                  <FormGroup check className="mb-4">
                    <Input
                      type="checkbox"
                      name="acceptedTerms"
                      className="my-auto"
                    />
                    <small className="text-bold ">
                      By signing up for Unisolve, you agree to our Terms of use
                      and Privacy Policy.
                    </small>
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
            </Row>
          </div>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default SignUpNew;
