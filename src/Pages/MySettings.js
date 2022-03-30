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
      userid: Yup.string().required(t("login.error_required")),
      password: Yup.string().required(t("login.error_required")),
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
    label: t("settings.Save_changes"),
    size: "small",
    // btnClass: "default",
  };

  const discard = {
    label: t("settings.Discard"),
    size: "small",
    btnClass: "default",
  };

  return (
    <Layout>
      <React.Fragment>
        <Container className="MySettings EditPersonalDetails  pt-3 pt-xl-5">
          {/* <UsersPage /> */}
          <Row>
            <Col className="col-xl-8 offset-xl-2 offset-md-0">
              <Row>
                <Col>
                  <ul className="pagepath">
                    <li className="pb-2">{t("settings.Home")}</li>
                    <li className="arrownone pb-2">{t("settings.My_Settings")}</li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h1 className="mb-4">{t("settings.My_Settings")}</h1>
                </Col>
              </Row>

              <Row className=" article-header ">
                <Col md={12} className=" d-flex justify-content-center">
                  <Card className="w-100 mb-5 p-4">
                    <CardBody>
                      <h5 className="mb-5">{t("settings.Account_Details")}</h5>

                      <Row>
                        <Col md={6} className="mb-5">
                          <CardTitle className="pb-2">{t("settings.User_ID")}</CardTitle>
                          <CardText>US-0021</CardText>
                        </Col>
                        <Col md={6} className="mb-5">
                          <CardTitle className="pb-2">{t("settings.Email_Address")}</CardTitle>
                          <CardText>manhackt08@gmail.com</CardText>
                        </Col>
                        <Col md={6}>
                          <CardTitle className="pb-2">{t("settings.Password")}</CardTitle>
                          <CardText>
                            <Link
                              exact
                              onClick={showModal}
                              className="my-auto pt-0 text-link "
                            >
                             {t("settings.Change_Password")}
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
                      {t("settings.Email_Notifications")}
                      </CardTitle>
                      <Input type="checkbox" />{" "}
                      <Label check>{t("settings.Enable_email_notifications")}</Label>
                      <hr />
                      <Row>
                        <CardText className="py-3">
                        {t("settings.notifications_enabled")}
                        </CardText>
                        <Col md={6}>
                          <Input className="pb-3" type="checkbox" />{" "}
                          <Label className="pb-3" check>
                          {t("settings.Likes_upvotes_post")}
                          </Label>
                          <div className="w-100" />
                          <Input className="pb-3" type="checkbox" />{" "}
                          <Label className="pb-3" check>
                          {t("settings.Idea_evaluation_status")}
                          </Label>
                          <div className="w-100" />
                          <Input className="pb-3" type="checkbox" />{" "}
                          <Label className="pb-3" check>
                          {t("settings.Course_completion")}
                          </Label>
                          <div className="w-100" />
                          <Input className="pb-3" type="checkbox" />{" "}
                          <Label className="pb-3" check>
                          {t("settings.Receive_certificates")}
                          </Label>
                          <div className="w-100" />
                        </Col>
                        <Col md={6}>
                          <Input className="pb-3" type="checkbox" />{" "}
                          <Label className="pb-3" check>
                          {t("settings.Receive_points")}
                          </Label>
                          <div className="w-100" />
                          <Input className="pb-3" type="checkbox" />{" "}
                          <Label className="pb-3" check>
                          {t("settings.Receive_badges")}
                          </Label>
                          <div className="w-100" />
                          <Input className="pb-3" type="checkbox" />{" "}
                          <Label className="pb-3" check>
                          {t("settings.Account_related_notifications")}
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
        </Container>
      </React.Fragment>
    </Layout>
  );
};

export default MySettings;
