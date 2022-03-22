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
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { useFormik } from "formik";
import * as Yup from "yup";

import i18next from "i18next";
import { useTranslation } from "react-i18next";
// import UsersPage from "./UserPages";

import signuplogo from "../media/logo-rect.svg";
import ellipse_1 from "../media/ellipse.svg";

import hello from "../media/say-hello.png";
import { loginUser } from "../redux/actions";

import { setCurrentUser } from "../helpers/Utils";
import { getCurrentUser } from "../helpers/Utils";
const LoginNew = (props) => {
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      props.loginUserAction(values, history);
      // props.loginUserAction(values, function (resObj) {
      //   console.log("========resObj", resObj);
      // });
      // setCurrentUser(values);
      // const currentUser = getCurrentUser("current_user");
      // console.log("=======props.currentUser", props.currentUser);
      // if (props.currentUser) {
      //   history.push("/dashboard");
      // } else {
      //   history.push("/login");
      // }
    },
  });
  // console.log("==========history==", history);

  const inputUserId = {
    type: "text",
    placeholder: "Enter your user ID",
  };

  const inputPassword = {
    type: "password",
    placeholder: "Password",
  };

  const logInBtn = {
    label: "Login",
    size: "large",
    btnClass: "default",
  };
  console.log("===========error", props.currentUser);
  return (
    <React.Fragment>
      <div className="container-fluid  SignUp Login">
        {/* <UsersPage /> */}
        <Row className="row-flex">
          <div className="col-md-4 aside mobile-header">
            <div class="row">
              <Col md={12} class=" mr-auto mobile_tab-hide">
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

          <Col xs={12} sm={12} md={8} xl={8} className="article">
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
                    <Col className="form-group" xs={12} sm={12} md={10} xl={7}>
                      <Label className="mb-2" htmlFor="email">
                        User ID / Email
                      </Label>
                      <InputBox
                        {...inputUserId}
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
                    <Col className="form-group" xs={12} sm={12} md={10} xl={7}>
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
                      {/* <Link
                        exact
                        to="/dashboard"
                        className="my-auto pt-0 text-link px-2"
                      > */}
                      <Button {...logInBtn} type="submit" />
                      {/* </Link> */}
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
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = ({ authUser }) => {
  const { loading, error, currentUser } = authUser;
  return { loading, error, currentUser };
};

export default connect(mapStateToProps, {
  loginUserAction: loginUser,
})(LoginNew);
// export default LoginNew;
