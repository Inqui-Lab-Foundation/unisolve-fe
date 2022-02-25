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

import { useFormik } from "formik";
import * as Yup from "yup";

import i18next from "i18next";
import { useTranslation } from "react-i18next";
// import UsersPage from "./UserPages";

import signuplogo from "../media/logo-rect.svg";
import ellipse_1 from "../media/ellipse.svg";

import hello from "../media/say-hello.png";

const LoginNew = () => {
  const { t, i18n } = useTranslation();
  const formik = useFormik({
    initialValues: {
      userid: "",
      password: "",
    },

    validationSchema: Yup.object({
      userid: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      this.props.history.push("/register");
    },
  });

  const inputUserId = {
    types: "text",
    placeholder: "Enter your user ID",
  };

  const inputPassword = {
    types: "password",
    placeholder: "Password",
  };

  const logInBtn = {
    label: "Login",
    size: "large",
    btnClass: "default",
  };

  return (
    <React.Fragment>
      <div className="container-fluid  SignUp Login">
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
            <Row className=" article-header mb-5">
              <figure>
                <img
                  src={hello}
                  alt="say hello"
                  className="img-fluid wavingHand"
                />
              </figure>
              <h4>
                <span className="color-green">Welcome</span> back
              </h4>
              <span className=" sub">Let’s build something great.</span>
            </Row>
            <Row className="mt-5">
              <Col md={12}>
                <Form onSubmit={formik.handleSubmit}>
                  <div className="form-row row mb-5">
                    <Col className="form-group" md={7}>
                      <Label className="mb-2" htmlFor="email">
                        User ID
                      </Label>
                      <InputBox
                        {...inputUserId}
                        id="userid"
                        name="userid"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.userid}
                      />

                      {formik.touched.userid && formik.errors.userid ? (
                        <small className="error-cls">
                          {formik.errors.userid}
                        </small>
                      ) : null}
                    </Col>
                  </div>
                  <div className="w-100 clearfix" />

                  <div className="form-row row mb-5">
                    <Col className="form-group" md={7}>
                      <Label className="mb-2" htmlFor="Password">
                        Password
                      </Label>
                      <InputBox
                        {...inputPassword}
                        id="password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                      />

                      {formik.touched.password && formik.errors.password ? (
                        <small className="error-cls">
                          {formik.errors.password}
                        </small>
                      ) : null}
                    </Col>
                    {/* <NavLink>Forgot your password?</NavLink> */}
                    <Link exact to="/forgotpassword" className="text-link pt-1">
                      Forgot your password?
                    </Link>
                  </div>

                  <FormGroup check className="mb-4">
                    <Input
                      type="checkbox"
                      name="acceptedTerms"
                      className="my-auto"
                    />
                    <small className="text-bold ">Keep me logged in</small>
                  </FormGroup>

                  <div className="form-row row mb-5">
                    <Col className="form-group" md={6}>
                      <Button {...logInBtn} type="submit" />
                    </Col>
                  </div>
                </Form>

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
                    {/* <NavLink className="my-auto  pt-0">Signup</NavLink> */}
                  </p>
                </Row>
              </Col>
            </Row>
          </div>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default LoginNew;
