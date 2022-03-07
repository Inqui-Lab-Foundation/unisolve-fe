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
import { StudentHeader } from "../stories/StudentHeaderComp/StudentHeader";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
// import UsersPage from "./UserPages";

import forgotpassword from "../media/forgot-password.svg";

const PasswordEmailConfirmation = () => {
  const { t, i18n } = useTranslation();

  return (
    <React.Fragment>
      <div className="PasswordConfirmation position-relative">
        <StudentHeader className="header-comp" />
        <div className="container-fluid   Login vh-100">
          <Row className=" my-auto h-100">
            <Col xs={12} sm={12} md={6} xl={5} className="aside  my-auto  ">
              <figure className="mx-5">
                <img
                  src={forgotpassword}
                  alt="forgotpassword"
                  className="img-fluid "
                />
              </figure>
            </Col>
            <Col sm={12} md={6} xl={7} className="article my-auto">
              <Row className=" article-header mb-0">
                <h4 className=" mb-5">Check email for reset link</h4>
                <span className=" sub mt-2  mb-5 w-75">
                  An email has been sent to <b>vinodraichur004@gmail.com</b>.
                  Check the email inbox account, and click the reset link
                  provided.
                </span>
                <p className="d-flex green mb-5">
                  Reset link will become invalid in 59:36.
                </p>
                <p className="d-flex">
                  <NavLink className="my-auto  p-0 blue">
                    Didn’t reveive an email?
                  </NavLink>
                </p>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PasswordEmailConfirmation;
