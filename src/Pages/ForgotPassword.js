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
import { InputBox } from "../stories/InputBox/InputBox";
import { Button } from "../stories/Button";
import { StudentHeader } from "../stories/StudentHeaderComp/StudentHeader";
import { useFormik } from "formik";
import * as Yup from "yup";

import i18next from "i18next";
import { useTranslation } from "react-i18next";
// import UsersPage from "./UserPages";

import forgotpassword from "../media/forgot-password_one.svg";

const ForgotPassword = () => {
  const { t, i18n } = useTranslation();
  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const inputEmail = {
    type: "email",
    placeholder: "Enter your Unisolve registered email",
  };

  const logInBtn = {
    label: "Request Reset Link",
    size: "large",
    btnClass: "default",
  };
  const profileProps = {
    options: ["Home", "Profile", "Logout"],
  };

  return (
    <React.Fragment>
      <div className="ForgotPassword position-relative">
        <StudentHeader {...profileProps} />
        <div className="container-fluid   Login vh-100">
          <Row className=" my-auto h-100">
            <Col
              xs={12}
              sm={12}
              md={6}
              xl={5}
              className=" aside  my-auto  mobile_tab-hide"
            >
              <figure className="mx-5">
                <img
                  src={forgotpassword}
                  alt="forgotpassword"
                  className="img-fluid px-5"
                />
              </figure>
            </Col>
            <Col xs={12} sm={12} md={6} xl={7} className="article my-auto">
              <Row className="mb-0">
                <Col xs={12} sm={12} md={10} xl={8}>
                  <h4>Did you forgot your password?</h4>
                  <span className=" sub mt-2 w-100">
                    Don’t worry! Resetting your password is easy, just type in
                    the email you registered to Unisolve
                  </span>
                  <Form onSubmit={formik.handleSubmit}>
                    <div className="form-row row my-5">
                      <Col className="form-group">
                        <Label className="mb-2" htmlFor="email">
                          Email Address
                        </Label>
                        <InputBox
                          {...inputEmail}
                          id="email"
                          name="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />

                        {formik.touched.email && formik.errors.email ? (
                          <small className="error-cls">
                            {formik.errors.email}
                          </small>
                        ) : null}
                      </Col>
                    </div>
                    <div className="w-100 clearfix" />

                    <div className="form-row row mb-5">
                      <Col className="form-group">
                        <Link exact to="/verifypassword">
                          <Button {...logInBtn} type="submit" />
                        </Link>
                      </Col>
                    </div>
                  </Form>
                  <p className="d-flex text-center ">
                    {/* <NavLink className="p-0 blue">Back to Login</NavLink> */}
                    <Link
                      exact
                      to="/login"
                      className="p-0 blue text-link w-100"
                    >
                      Back to Login
                    </Link>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForgotPassword;
