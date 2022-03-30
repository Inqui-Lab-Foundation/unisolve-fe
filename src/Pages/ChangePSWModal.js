import React, { useEffect, useState } from "react";
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
import { Link, useHistory } from "react-router-dom";

import axios from "axios";
// import bcrypt from "bcryptjs";
import "./SignUp.scss";
import { InputBox } from "../stories/InputBox/InputBox";
import { Button } from "../stories/Button";
import CryptoJS from "crypto-js";

import { useFormik } from "formik";
import * as Yup from "yup";
import { getNormalHeaders, getCurrentUser } from "../helpers/Utils";

import i18next from "i18next";
import { useTranslation } from "react-i18next";
// import UsersPage from "./UserPages";

import logout from "../media/logout.svg";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
// const CryptoJS = require("crypto-js");
// const bcrypt = require("bcrypt");

const ChangePSWModal = (props) => {
  const history = useHistory();
  const currentUser = getCurrentUser("current_user");
  const { t, i18n } = useTranslation();
  const [error, SetError] = useState("");
  const [responce, SetResponce] = useState("");
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      oldPassword: Yup.string().required("Required"),
      newPassword: Yup.string().required("Required"),
      confirmPassword: Yup.string().required("Required"),
    }),

    onSubmit: async (values) => {
      console.log("=====valiues", values);
      if (values.newPassword.length < 8) {
        SetError("New Password must be 8-character minimum");
      } else if (values.oldPassword === values.newPassword) {
        SetError("Old Password and New Passwiord are same");
      } else if (values.newPassword !== values.confirmPassword) {
        SetError("New Password and Confirm Password not same");
      } else {
        // var ciphertext = CryptoJS.AES.encrypt(
        //   "my message",
        //   "secret key 123"
        // ).toString();

        // CryptoJS.AES.encrypt(
        //   JSON.stringify(data),
        //   "my-secret-key@123"
        // ).toString();
        const body = JSON.stringify({
          userId: currentUser.id,
          oldPassword: CryptoJS.AES.encrypt(
            values.oldPassword,
            "my-secret-key@123"
          ).toString(),
          newPassword: CryptoJS.AES.encrypt(
            values.newPassword,
            "my-secret-key@123"
          ).toString(),
        });
        // console.log(
        //   "===========old",
        //   CryptoJS.AES.encrypt(
        //     values.oldPassword,
        //     "my-secret-key@123"
        //   ).toString()
        // );
        // const body = JSON.stringify({
        //   userId: currentUser.id,
        //   oldPassword: values.oldPassword,
        //   newPassword: values.newPassword,
        // });

        console.log("body1", body);

        var config = {
          method: "post",
          url: "http://15.207.254.154:3002/api/v1/student/changePassword",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${currentUser.accessToken}`,
          },
          data: body,
        };
        axios(config)
          .then(function (response) {
            if (response.status === 202) {
              SetResponce(response.data.message);
              setTimeout(() => {
                props.btnSubmit();
              }, 1000);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
  });
  useEffect(() => {
    SetError("");
  }, [formik.values]);

  const oldPassword = {
    type: "password",
    placeholder: "Enter current password here",
    className: "defaultInput",
  };

  const newPassword = {
    type: "password",
    placeholder: "Create new password here",
    className: "defaultInput",
  };

  const confirmPassword = {
    type: "password",
    placeholder: "Verify New password",
    className: "defaultInput",
  };

  const logInBtn = {
    label: "Login",
    size: "small",
    btnClass: "default",
  };

  const onPick = (value) => {
    // <Link exact to="/forgotpassword" className="text-link pt-1" />;
    alert("red");
  };

  return (
    <React.Fragment>
      <div className="container-fluid ChangePSWModal">
        <Row className="mt-5">
          <Col md={12}>
            <h5>Change your password</h5>
            <p>
              A strong password helps prevent unauthorized access to your
              unisolve account.
            </p>
          </Col>
          <Col md={12}>
            <Form onSubmit={formik.handleSubmit}>
              <div className="form-row row mb-5 mt-3">
                <Col className="form-group" md={12}>
                  <Label className="mb-2" htmlFor="Password">
                    Current password
                  </Label>
                  <InputBox
                    {...oldPassword}
                    id="oldPassword"
                    name="oldPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.oldPassword}
                  />
                  {/* <Link exact to="/forgotpassword" className="text-link pt-1">
                    Forgot your password?
                  </Link> */}
                  {/* <p onClick={onPick}>Forgot your password?</p> */}

                  {formik.touched.oldPassword && formik.errors.oldPassword ? (
                    <small className="error-cls">
                      {formik.errors.oldPassword}
                    </small>
                  ) : null}
                </Col>
              </div>
              <div className="w-100 clearfix " />

              <div className="form-row row  mb-5">
                <Col className="form-group" md={12}>
                  <Label className="mb-2" htmlFor="newPassword">
                    New password
                  </Label>
                  <InputBox
                    {...newPassword}
                    id="newPassword"
                    name="newPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.newPassword}
                  />
                  <small className="mt-2">
                    8-character minimum; case sensitive
                  </small>
                  {formik.touched.newPassword && formik.errors.newPassword ? (
                    <small className="error-cls">
                      {formik.errors.newPassword}
                    </small>
                  ) : null}
                </Col>
                <div className="w-100 clearfix" />
                <Col className="form-group mt-5" md={12}>
                  <Label className="mb-2" htmlFor="confirmPassword">
                    Verify New password
                  </Label>
                  <InputBox
                    {...confirmPassword}
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                  />

                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                    <small className="error-cls">
                      {formik.errors.confirmPassword}
                    </small>
                  ) : null}
                </Col>
              </div>
              {error}

              {/* <div className="form-row row mb-5">
                <Col className="form-group" md={6}>
                  <Button {...logInBtn} type="submit" />
                </Col>
              </div> */}
              {responce}
              <div
                className="swal2-actions"
                style={{
                  display: "flex",
                  justifyContent: "end",
                  fontSize: "0.9em",
                }}
              >
                <button
                  onClick={props.onCancel}
                  className="btn btn-outline-secondary rounded-pill sweet-btn-max"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="storybook-button storybook-button--small storybook-button--primary sweet-btn-max"
                >
                  Change Password
                </button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default ChangePSWModal;
