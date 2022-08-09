import React from "react";
import { Modal, Col, Alert, Form, FormGroup } from "react-bootstrap";
import { Label, UncontrolledAlert } from "reactstrap";
import axios from "axios";
import { InputBox } from "../../stories/InputBox/InputBox";
import { getNormalHeaders } from "../../helpers/Utils";
import { URL, KEY } from "../../constants/defaultValues";
import { Button } from "../../stories/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

function StepTwo({
  setUserData,
  orgData,
  setHideOne,
  setHideTwo,
  setHideThree,
  setHideFour,
}) {
  const handleClick = () => {
    setHideTwo(false);
    setHideThree(true);
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const inputPhone = {
    type: "number",
    placeholder: "Enter Phone Number",
    className: "defaultInput",
  };

  const inputEmail = {
    type: "email",
    placeholder: "Enter Email Address",
    className: "defaultInput",
  };

  const inputName = {
    type: "text",
    placeholder: "Enter Full Name",
    className: "defaultInput",
  };

  const formik = useFormik({
    initialValues: {
      full_name: "",
      mobile: "",
      username: "",
      organization_code: orgData?.organization_code,
      role: "MENTOR",
    },

    validationSchema: Yup.object({
      full_name: Yup.string()
        .min(2, "Enter Name")
        .matches(/^[aA-zZ\s]+$/, "Not allowed")
        .required("Required"),
      mobile: Yup.string()
        .required("required")
        .matches(phoneRegExp, "Phone number is not valid")
        .min(10, "to short")
        .max(10, "to long"),
      username: Yup.string()
        .email("Invalid username format")
        .required("Required"),
    }),

    onSubmit: async (values) => {
      const axiosConfig = getNormalHeaders(KEY.User_API_Key);
      await axios
        .post(
          `${URL.mentorRegister}`,
          JSON.stringify(values, null, 2),
          axiosConfig
        )
        .then((mentorRegRes) => {
          console.log(
            "🚀 ~ file: StepTwo.js ~ line 80 ~ .then ~ mentorRegRes?.data[0]",
            mentorRegRes?.data[0]
          );
          setUserData(mentorRegRes?.data[0]);
          setHideTwo(false);
          setHideThree(true);
        })
        .catch((err) => {
          return err.response;
        });
    },
  });

  return (
    <Modal.Body>
      <div className="form-row row  mt-0 pt-5">
        <Col className="form-group" md={12}>
          <Label className="mb-2 w-100">
            <UncontrolledAlert color="primary ">
              School: {orgData?.organization_name} <br />
              City: {orgData?.city ? orgData?.city : ""} <br />
              District: {orgData?.district ? orgData?.district : ""}
            </UncontrolledAlert>
          </Label>
        </Col>

        <Form
          className="form-row row  mt-0 pb-5"
          onSubmit={formik.handleSubmit}
          isSubmitting
        >
          <FormGroup className="form-group mb-5" md={12}>
            <Label className="mb-2" htmlFor="name">
              Faculty Name
            </Label>

            <InputBox
              {...inputName}
              id="full_name"
              name="full_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.full_name}
            />

            {formik.touched.full_name && formik.errors.full_name ? (
              <small className="error-cls">{formik.errors.full_name}</small>
            ) : null}
          </FormGroup>
          <FormGroup className="form-group" md={12}>
            <Label className="mb-2" htmlFor="mobile">
              Faculty Phone Number
            </Label>
            {/* <InputWithMobileNoComp {...inputPhone} id='mobile' name='mobile' /> */}
            <InputBox
              {...inputPhone}
              id="mobile"
              name="mobile"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mobile}
            />

            {formik.touched.mobile && formik.errors.mobile ? (
              <small className="error-cls">{formik.errors.mobile}</small>
            ) : null}
          </FormGroup>

          <FormGroup className="form-group mt-5" md={12}>
            <Label className="mb-2" htmlFor="username">
              Faculty Email Address
            </Label>
            <InputBox
              {...inputEmail}
              id="username"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />

            {formik.touched.username && formik.errors.username ? (
              <small className="error-cls">{formik.errors.username}</small>
            ) : null}
          </FormGroup>
          <div className="mt-5">
            <Button
              label="CONTINUE"
              // btnClass='primary w-100'
              btnClass={
                !(formik.dirty && formik.isValid) ? "default" : "primary"
              }
              size="large "
              type="submit"
              disabled={!(formik.dirty && formik.isValid)}
            />
          </div>
        </Form>
      </div>
    </Modal.Body>
  );
}

export default StepTwo;
