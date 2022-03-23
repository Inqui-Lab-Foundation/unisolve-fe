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
import Layout from "../Layout";

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
  const update = {
    label: "Save changes",
    size: "small",
    // btnClass: "default",
  };

  const discard = {
    label: "Discard",
    size: "small",
    btnClass: "default",
  };

  return (
    <Layout>
      <React.Fragment>
        <div className="MySettings MyProfile container">
          {/* <UsersPage /> */}
          <Row>
            <Col className="col-xl-8 offset-xl-2 offset-md-0">
              <Row>
                <Col>
                  <ul className="pagepath">
                    <li>Home</li>
                    <li className="arrownone">My Settings</li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h1 className="mb-4">My Settings</h1>
                </Col>
              </Row>

              <Row className=" article-header ">
                <Col md={12} className=" d-flex justify-content-center">
                  <Card className="w-100 mb-5 p-4">
                    <CardBody>
                      <CardTitle className="mb-5">Account Details</CardTitle>
                      <Row>
                        <Col md={6} className="mb-5">
                          <CardTitle className="pb-2">User ID</CardTitle>
                          <CardText>US-0021</CardText>
                        </Col>
                        <Col md={6} className="mb-5">
                          <CardTitle className="pb-2">Email Address</CardTitle>
                          <CardText>manhackt08@gmail.com</CardText>
                        </Col>
                        <Col md={6}>
                          <CardTitle className="pb-2">Password</CardTitle>
                          <CardText>
                            <Link
                              exact
                              onClick={showModal}
                              className="my-auto pt-0 text-link "
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
                  <Card className="w-100 p-4">
                    <CardBody>
                      <CardTitle className="pb-3">
                        Email Notifications
                      </CardTitle>
                      <Input type="checkbox" />{" "}
                      <Label check>Enable email notifications</Label>
                      <hr />
                      <Row>
                        <CardText className="pt-3">
                          When email notifications are enabled, email me when
                          someone:
                        </CardText>
                        <Col md={6}>
                          <Input className="pb-3" type="checkbox" />{" "}
                          <Label className="pb-3" check>
                            Likes or upvotes my post
                          </Label>
                          <div className="w-100" />
                          <Input className="pb-3" type="checkbox" />{" "}
                          <Label className="pb-3" check>
                            Idea evaluation status
                          </Label>
                          <div className="w-100" />
                          <Input className="pb-3" type="checkbox" />{" "}
                          <Label className="pb-3" check>
                            Course completion
                          </Label>
                          <div className="w-100" />
                          <Input className="pb-3" type="checkbox" />{" "}
                          <Label className="pb-3" check>
                            Receive certificates
                          </Label>
                          <div className="w-100" />
                        </Col>
                        <Col md={6}>
                          <Input className="pb-3" type="checkbox" />{" "}
                          <Label className="pb-3" check>
                            Receive points
                          </Label>
                          <div className="w-100" />
                          <Input className="pb-3" type="checkbox" />{" "}
                          <Label className="pb-3" check>
                            Receive badges
                          </Label>
                          <div className="w-100" />
                          <Input className="pb-3" type="checkbox" />{" "}
                          <Label className="pb-3" check>
                            Account related notifications
                          </Label>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <div className="form-row row mb-4 aside">
                  <hr className="my-5 w-100 clearfix" />
                  <div class="row justify-content-between">
                    <div class="col-6">
                      <Button {...discard} type="cancel" />
                    </div>
                    <div class="col-6 text-right">
                      <Button
                        {...update}
                        type="submit"
                        btnClass={
                          !(formik.dirty && formik.isValid)
                            ? "default"
                            : "primary"
                        }
                      />
                    </div>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default MySettings;
