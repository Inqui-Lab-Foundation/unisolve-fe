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

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { Link, useHistory } from "react-router-dom";

import { InputBox } from "../stories/InputBox/InputBox";
import { Button } from "../stories/Button";

import { useFormik } from "formik";
import * as Yup from "yup";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

// import { ChangePSWModal } from "./ChangePSWModal";
import ChangePSWModal from "./ChangePSWModal";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const onCancel = () => {
  Swal.close();
};

const btnSubmit = () => {
  alert("red");
};

const showFormModal = (values) => {
  return new Promise((resolve, reject) => {
    MySwal.fire({
      // title: "Enter values",
      reverseButtons: false,
      showCloseButton: true,
      allowOutsideClick: false,
      html: (
        <ChangePSWModal
          values={values}
          onSubmit={(values) => {
            resolve(values);
            Swal.close();
          }}
          onCancel={onCancel}
          // btnSubmit={btnSubmit}
        />
      ),
      // confirmBtnText: "Yes, delete it!",
      // confirmBtnBsStyle: "danger",
      // title: "Are you sure?",
      onClose: () => reject(),
      showConfirmButton: false,
    });
  });
};

const MySettings = () => {
  const { t, i18n } = useTranslation();
  // const history = useHistory();
  const formik = useFormik({
    initialValues: {
      curPassword: "",
      newPassword: "",
      verifyPassword: "",
    },

    validationSchema: Yup.object({
      userid: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

      //history.push("/");
    },
  });

  function showModal() {
    showFormModal({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      lastName: "",
    })
      .then((values) => console.log(values))
      .catch(() => console.log("Modal closed"));
  }

  return (
    <React.Fragment>
      <div className="container-fluid  MySettings">
        {/* <UsersPage /> */}
        <Row className="row-flex">
          <div className="col-md-3 aside col-sm-3 hidden-xs  ">
            <p>sidebar</p>
          </div>

          <div className="col-md-9  ">
            <Row className=" article-header my-5">
              <Col md={12}>
                <span className="sub">Home My Settings</span>
                <h4>My Settings</h4>
              </Col>
              <Col md={12} className=" d-flex justify-content-center">
                <Card className="w-75 mb-5 p-4">
                  <CardBody>
                    <CardTitle className="mb-5">Account Details</CardTitle>
                    <Row>
                      <Col md={6} className="mb-5">
                        <CardSubtitle>User ID</CardSubtitle>
                        <CardText>US-0021</CardText>
                      </Col>
                      <Col md={6} className="mb-5">
                        <CardSubtitle>Email Address</CardSubtitle>
                        <CardText>manhackt08@gmail.com</CardText>
                      </Col>
                      <Col md={6}>
                        <CardSubtitle>Password</CardSubtitle>
                        <CardText>
                          <Link
                            exact
                            onClick={showModal}
                            className="my-auto pt-0 text-link px-2"
                          >
                            Change Password
                          </Link>
                        </CardText>
                        {/* <a onClick={showModal}>Good</a> */}
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>

              <Col md={12} className=" d-flex justify-content-center">
                <Card className="w-75 p-4">
                  <CardBody>
                    <CardTitle>Email Notifications</CardTitle>
                    <Input type="checkbox" />{" "}
                    <Label check>Enable email notifications</Label>
                    <hr />
                    <Row>
                      <CardText>
                        When email notifications are enabled, email me when
                        someone:
                      </CardText>
                      <Col md={6}>
                        <Input type="checkbox" />{" "}
                        <Label check>Likes or upvotes my post</Label>
                        <div className="w-100" />
                        <Input type="checkbox" />{" "}
                        <Label check>Idea evaluation status</Label>
                        <div className="w-100" />
                        <Input type="checkbox" />{" "}
                        <Label check>Course completion</Label>
                        <div className="w-100" />
                        <Input type="checkbox" />{" "}
                        <Label check>Receive certificates</Label>
                        <div className="w-100" />
                      </Col>
                      <Col md={6}>
                        <Input type="checkbox" />{" "}
                        <Label check>Receive points</Label>
                        <div className="w-100" />
                        <Input type="checkbox" />{" "}
                        <Label check>Receive badges</Label>
                        <div className="w-100" />
                        <Input type="checkbox" />{" "}
                        <Label check>Account related notifications</Label>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
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
                    {/* Dummy Link remove it */}
                    <Link
                      exact
                      to="/edit-details"
                      className="my-auto pt-0 text-link px-2"
                    >
                      Edit profile
                    </Link>
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

export default MySettings;
