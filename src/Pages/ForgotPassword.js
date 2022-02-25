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

  return (
    <React.Fragment>
      <div className="ForgotPassword position-relative">
        <StudentHeader />
        <div className="container-fluid   Login vh-100">
          <Row className=" my-auto h-100">
            <div className="col-md-5 aside  my-auto  ">
              <figure className="mx-5">
                <img
                  src={forgotpassword}
                  alt="forgotpassword"
                  className="img-fluid px-5"
                />
              </figure>
            </div>
            <div className="col-md-7 article my-auto">
              <Row className=" article-header mb-0">
                <h4>Did you forgot your password?</h4>
                <span className=" sub mt-2 w-75">
                  Don’t worry! Resetting your password is easy, just type in the
                  email you registered to Unisolve
                </span>
              </Row>
              <Row className="mt-5">
                <Col md={12}>
                  <Form onSubmit={formik.handleSubmit}>
                    <div className="form-row row mb-5">
                      <Col className="form-group" md={7}>
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
                      <Col className="form-group" md={6}>
                        <Link exact to="/verifypassword">
                          <Button {...logInBtn} type="submit" />
                        </Link>
                      </Col>
                    </div>
                  </Form>
                  <p className="d-flex text-center">
                    {/* <NavLink className="p-0 blue">Back to Login</NavLink> */}
                    <Link exact to="/login" className="p-0 blue text-link">
                      Back to Login
                    </Link>
                  </p>
                </Col>
              </Row>
            </div>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForgotPassword;
