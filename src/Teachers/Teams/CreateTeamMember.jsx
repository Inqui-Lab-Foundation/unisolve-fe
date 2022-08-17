import React from "react";
import { Row, Col, Form, Label } from "reactstrap";
import { withRouter } from "react-router-dom";
import Layout from "../Layout";
import { Button } from "../../stories/Button";
import { InputBox } from "../../stories/InputBox/InputBox";
import * as Yup from "yup";
import { useFormik } from "formik";
import { BreadcrumbTwo } from "../../stories/BreadcrumbTwo/BreadcrumbTwo";
// import { DatePicker } from "antd";
import { FormikDatePicker } from "./DatePicker";

import { DropDownComp } from "../../stories/DropdownComp/DropdownComp";
import { CalendarDropdownComp } from "../../stories/CalendarDropdown/CalendarDropdown";
import { getNormalHeaders, getCurrentUser } from "../../helpers/Utils";
import axios from "axios";
import { useHistory } from "react-router-dom";
import moment from "moment";
// import "semantic-ui-css/semantic.min.css";

const CreateTeamMember = (props) => {
  console.log(props);
  const history = useHistory();
  const currentUser = getCurrentUser("current_user");
  const id =
    (history && history.location && history.location.item.team_id) || "";
  const headingDetails = {
    title: "Create Team Members details",

    options: [
      {
        title: "TeamsList",
        path: "/teacher/teamlist",
      },
      {
        title: "Create Team Member",
        path: "/",
      },
    ],
  };
  const formik = useFormik({
    initialValues: {
      userName: "",
      fullName: "",
      dob: null,
      organization: "",
      qualifications: "",
      age: "",
      grade: "",
      gender: "",
      city: "",
      district: "",
      state: "",
      country: "",
    },

    validationSchema: Yup.object({
      userName: Yup.string()
        .matches(/^[A-Za-z ]*$/, "Please enter valid User Name")
        .max(40)
        .required(),
      fullName: Yup.string()
        .matches(/^[A-Za-z ]*$/, "Please enter valid Full Name")
        .max(40)
        .required(),
      dob: Yup.date().nullable().required("Please Select  DOB"),
      organization: Yup.string()
        .matches(/^[A-Za-z ]*$/, "Please enter valid Organization Name")
        .max(40)
        .required(),
      qualifications: Yup.string()
        .matches(/^[A-Za-z ]*$/, "Please enter valid qualifications Name")
        .max(40)
        .required(),
      age: Yup.string().required("Please enter valid age").max(40).required(),
      gender: Yup.string().required("Please select valid gender"),
      grade: Yup.string()
        .matches(/^[A-Za-z ]*$/, "Please enter valid grade")
        .max(40)
        .required("Please select valid gender"),
      city: Yup.string()
        .matches(/^[A-Za-z ]*$/, "Please enter valid city")
        .max(40)
        .required(),
      district: Yup.string()
        .matches(/^[A-Za-z ]*$/, "Please enter valid district")
        .max(40)
        .required(),
      state: Yup.string().required("Please select valid State"),
      country: Yup.string().required("Please select valid country"),
    }),

    onSubmit: (values) => {
      const body = {
        team_id: id,
        role: "STUDENT",
        full_name: values.fullName,
        userName: values.userName,
        date_of_birth: values.dob,
        institute_name: values.organization,
        qualification: values.qualifications,
        Age: values.age,
        Grade: values.grade,
        Gender: values.gender,
        city: values.city,
        district: values.district,
        state: values.state,
        country: values.country,
      };
      console.log(body);
      var config = {
        method: "post",
        url: process.env.REACT_APP_API_BASE_URL + "/students/register",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.data[0].token}`,
        },
        data: body,
      };
      axios(config)
        .then(function (response) {
          console.log(response);
          if (response.status === 201) {
            props.history.push("/teacher/teamlist");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });

  const selectGender = {
    options: ["Hyd", "Vizag", "SC"],
  };
  const selectState = {
    options: ["AP", "TS"],
  };
  const selectCountry = {
    label: "Select Country",
    options: ["IND"],
  };

  return (
    <Layout>
      <div className="EditPersonalDetails new-member-page">
        <Row>
          <Col className="col-xl-10 offset-xl-1 offset-md-0">
            <BreadcrumbTwo {...headingDetails} />

            <div>
              <Form onSubmit={formik.handleSubmit} isSubmitting>
                <div className="create-ticket register-blockt">
                  <Row>
                    <Col md={6} className="mb-5 mb-xl-0">
                      <Label className="name-req" htmlFor="userName">
                        User Name
                      </Label>
                      <InputBox
                        className={"defaultInput"}
                        placeholder="Enter User Name"
                        id="userName"
                        name="userName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.userName}
                      />
                      {formik.touched.userName && formik.errors.userName ? (
                        <small className="error-cls">
                          {formik.errors.userName}
                        </small>
                      ) : null}
                    </Col>
                    <Col md={6}>
                      <Label className="name-req" htmlFor="fullName">
                        Full Name
                      </Label>
                      <InputBox
                        className={"defaultInput"}
                        placeholder="Enter full name"
                        id="fullName"
                        name="fullName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fullName}
                      />
                      {formik.touched.fullName && formik.errors.fullName ? (
                        <small className="error-cls">
                          {formik.errors.fullName}
                        </small>
                      ) : null}
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Label className="name-req" htmlFor="dob">
                        DOB
                      </Label>
                      <div className="dropdown CalendarDropdownComp ">
                        <FormikDatePicker
                          className="w-100"
                          name="dob"
                          onChange={formik.setFieldValue}
                          value={formik.values.dob}
                        />
                      </div>
                      {formik.touched.dob && formik.errors.dob ? (
                        <small className="error-cls">{formik.errors.dob}</small>
                      ) : null}
                    </Col>
                    <Col md={6} className="mb-5 mb-xl-0">
                      <Label className="name-req" htmlFor="age">
                        Age
                      </Label>

                      <InputBox
                        className={"defaultInput"}
                        placeholder="Enter age"
                        id="age"
                        name="age"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.age}
                      />

                      {formik.touched.age && formik.errors.age ? (
                        <small className="error-cls">{formik.errors.age}</small>
                      ) : null}
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Label className="name-req" htmlFor="grade">
                        Grade
                      </Label>
                      <div className="dropdown CalendarDropdownComp ">
                        <InputBox
                          className={"defaultInput"}
                          placeholder="Enter grade"
                          id="grade"
                          name="grade"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.grade}
                        />
                      </div>
                      {formik.touched.grade && formik.errors.grade ? (
                        <small className="error-cls">
                          {formik.errors.grade}
                        </small>
                      ) : null}
                    </Col>
                    <Col md={6} className="mb-5 mb-xl-0">
                      <Label className="name-req" htmlFor="gender">
                        Gender
                      </Label>

                      <select
                        name="gender"
                        className="form-control"
                        value={formik.values.gender}
                        onChange={formik.handleChange}
                      >
                        <option value="">Select Gender..</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                      </select>

                      {formik.touched.gender && formik.errors.gender ? (
                        <small className="error-cls">
                          {formik.errors.gender}
                        </small>
                      ) : null}
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6} className="mb-5 mb-xl-0">
                      <Label className="name-req" htmlFor="organization">
                        Organization Name
                      </Label>

                      <InputBox
                        className={"defaultInput"}
                        placeholder="Enter Organization"
                        id="organization"
                        name="organization"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.organization}
                      />

                      {formik.touched.organization &&
                      formik.errors.organization ? (
                        <small className="error-cls">
                          {formik.errors.organization}
                        </small>
                      ) : null}
                    </Col>
                    <Col md={6}>
                      <Label className="name-req" htmlFor="qualifications">
                        Qualification
                      </Label>
                      <InputBox
                        className={"defaultInput"}
                        placeholder="Enter qualifications"
                        id="mibile"
                        name="qualifications"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.qualifications}
                      />
                      {formik.touched.qualifications &&
                      formik.errors.qualifications ? (
                        <small className="error-cls">
                          {formik.errors.qualifications}
                        </small>
                      ) : null}
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6} className="mb-5 mb-xl-0">
                      <Label className="name-req" htmlFor="city">
                        City
                      </Label>

                      <InputBox
                        className={"defaultInput"}
                        placeholder="Enter city "
                        id="city"
                        name="city"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.city}
                      />

                      {formik.touched.city && formik.errors.city ? (
                        <small className="error-cls">
                          {formik.errors.city}
                        </small>
                      ) : null}
                    </Col>
                    <Col md={6}>
                      <Label className="name-req" htmlFor="district">
                        District
                      </Label>
                      <InputBox
                        className={"defaultInput"}
                        placeholder="Enter district "
                        id="district"
                        name="district"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.district}
                      />
                      {formik.touched.district && formik.errors.district ? (
                        <small className="error-cls">
                          {formik.errors.district}
                        </small>
                      ) : null}
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6} className="mb-5 mb-xl-0">
                      <Label className="name-req" htmlFor="state">
                        State
                      </Label>
                      <select
                        name="state"
                        className="form-control"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                      >
                        <option value="">Select State..</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Telangana">Telangana</option>
                      </select>

                      {/* <div
                        style={{
                          "font-family": "sans-serif",
                          "text-align": "center",
                        }}
                      >
                        <Dropdown
                          selection
                          placeholder="Select a State"
                          options={[
                            { value: "Andhra Pradesh", text: "Andhra Pradesh" },
                            { value: "Telangana", text: "Telangana" },
                          ]}
                          value={formik.values.state}
                          onChange={(_, { value }) =>
                            formik.setFieldValue("state", value)
                          }
                        />
                      </div> */}
                      {formik.touched.state && formik.errors.state ? (
                        <small className="error-cls">
                          {formik.errors.state}
                        </small>
                      ) : null}
                    </Col>
                    <Col md={6}>
                      <Label className="name-req" htmlFor="country">
                        Country
                      </Label>
                      {/* <DropDownComp {...selectCountry} /> */}
                      <select
                        name="country"
                        className="form-control"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                      >
                        <option value="">Select State..</option>
                        <option value="India">India</option>
                      </select>
                      {formik.touched.country && formik.errors.country ? (
                        <small className="error-cls">
                          {formik.errors.country}
                        </small>
                      ) : null}
                    </Col>
                  </Row>
                </div>

                <hr className="mt-4 mb-4"></hr>
                <Row>
                  <Col className="col-xs-12 col-sm-6">
                    <Button
                      label="Discard"
                      btnClass="secondary"
                      size="small"
                      onClick={() => props.history.push("/teacher/teamlist")}
                    />
                  </Col>
                  <Col className="submit-btn col-xs-12 col-sm-6">
                    <Button
                      label="Submit details"
                      type="submit"
                      btnClass={
                        !(formik.dirty && formik.isValid)
                          ? "default"
                          : "primary"
                      }
                      size="small"
                    />
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default withRouter(CreateTeamMember);
