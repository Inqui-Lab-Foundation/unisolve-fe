import React from "react";
import { Row, Col, Form, Label } from "reactstrap";
import { withRouter } from "react-router-dom";
import Layout from "../Layout";
import { Button } from "../../stories/Button";
import { InputBox } from "../../stories/InputBox/InputBox";
import * as Yup from "yup";
import { useFormik } from "formik";
import { BreadcrumbTwo } from "../../stories/BreadcrumbTwo/BreadcrumbTwo";

import { DropDownComp } from "../../stories/DropdownComp/DropdownComp";
import { CalendarDropdownComp } from "../../stories/CalendarDropdown/CalendarDropdown";

const AddNewEvaluator = (props) => {
  const headingDetails = {
    title: "Add new Evaluator details",

    options: [
      {
        title: "Users List",
        path: "/admin/userlist",
      },
      {
        title: "Evaluators",
        path: "/admin/add-evaluator",
      },
      {
        title: "Add Evaluator",
        path: "/",
      },
    ],
  };
  const inputIdeaTitle = {
    type: "text",
    placeholder: "Enter idea title here...",
  };
  const serachprops = {
    options: [
      { label: 10, value: "Mapusa" },
      { label: 20, value: "Vasco" },
      { label: 30, value: "Mumbai" },
    ],
    label: "Select question category",
    className: "defaultDropdown",
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .matches(/^[A-Za-z ]*$/, "Please enter valid name")
        .max(40)
        .required(),
      lastName: Yup.string()
        .matches(/^[A-Za-z ]*$/, "Please enter valid name")
        .max(40)
        .required(),
      email: Yup.string().email("Invalid email format").required("Required"),
    }),

    onSubmit: (values) => {
      const mentor_name1 = values.firstName + "." + values.lastName;
      const email1 = values.email;
      console.log("========", mentor_name1);
      const body = JSON.stringify({
        mentor_name: mentor_name1,
        email: email1,
        // mobile: 9010923117,
      });
      console.log(body);
      // props.mentorCreateAction(body, history);
    },
  });

  const selectDistrict = {
    options: ["Hyd", "Vizag", "SC"],
  };
  const selectState = {
    options: ["AP", "TS", "KL"],
  };
  const selectCountry = {
    label: "Select Country",
    options: ["IND", "NZ", "AUS"],
  };

  return (
    <Layout>
      <div className='EditPersonalDetails new-member-page'>
        <Row>
          <Col className='col-xl-10 offset-xl-1 offset-md-0'>
            <BreadcrumbTwo {...headingDetails} />

            <div>
              <Form onSubmit={formik.handleSubmit} isSubmitting>
                <div className='create-ticket register-blockt'>
                  <Row>
                    <Col md={6} className='mb-5 mb-xl-0'>
                      <Label className='name-req' htmlFor='firstName'>
                        User Name
                      </Label>

                      <InputBox
                        className={"defaultInput"}
                        placeholder='Enter mentor first name'
                        id='firstName'
                        name='firstName'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                      />

                      {formik.touched.firstName && formik.errors.firstName ? (
                        <small className='error-cls'>
                          {formik.errors.firstName}
                        </small>
                      ) : null}
                    </Col>
                    <Col md={6}>
                      <Label className='name-req' htmlFor='lastName'>
                        Full Name
                      </Label>
                      <InputBox
                        className={"defaultInput"}
                        placeholder='Enter mentor first name'
                        id='lastName'
                        name='lastName'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                      />
                      {formik.touched.lastName && formik.errors.lastName ? (
                        <small className='error-cls'>
                          {formik.errors.lastName}
                        </small>
                      ) : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Label className='name-req' htmlFor='lastName'>
                        DOB
                      </Label>
                      <CalendarDropdownComp />
                      {formik.touched.lastName && formik.errors.lastName ? (
                        <small className='error-cls'>
                          {formik.errors.lastName}
                        </small>
                      ) : null}
                    </Col>
                  </Row>

                  {/*  */}
                  <Row>
                    <Col md={6} className='mb-5 mb-xl-0'>
                      <Label className='name-req' htmlFor='email'>
                        Organization Name
                      </Label>

                      <InputBox
                        className={"defaultInput"}
                        placeholder='Enter mentor email address'
                        id='email'
                        name='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />

                      {formik.touched.email && formik.errors.email ? (
                        <small className='error-cls'>
                          {formik.errors.email}
                        </small>
                      ) : null}
                    </Col>
                    <Col md={6}>
                      <Label className='name-req' htmlFor='mobile'>
                        Qualification
                      </Label>
                      <InputBox
                        className={"defaultInput"}
                        placeholder='Enter mentor mobile number'
                        id='mibile'
                        name='mobile'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mobile}
                      />
                      {formik.touched.mobile && formik.errors.mobile ? (
                        <small className='error-cls'>
                          {formik.errors.mobile}
                        </small>
                      ) : null}
                    </Col>
                  </Row>

                  {/*  */}

                  <Row>
                    <Col md={6} className='mb-5 mb-xl-0'>
                      <Label className='name-req' htmlFor='organisation'>
                        City
                      </Label>

                      <InputBox
                        className={"defaultInput"}
                        placeholder='Enter organisation details'
                        id='organisation'
                        name='organisation'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.organisation}
                      />

                      {formik.touched.email && formik.errors.organisation ? (
                        <small className='error-cls'>
                          {formik.errors.organisation}
                        </small>
                      ) : null}
                    </Col>
                    <Col md={6}>
                      <Label className='name-req' htmlFor='city'>
                        District
                      </Label>
                      <DropDownComp {...selectDistrict} />
                      {formik.touched.city && formik.errors.city ? (
                        <small className='error-cls'>
                          {formik.errors.city}
                        </small>
                      ) : null}
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6} className='mb-5 mb-xl-0'>
                      <Label className='name-req' htmlFor='organisation'>
                        State
                      </Label>

                      <DropDownComp {...selectState} />

                      {formik.touched.email && formik.errors.organisation ? (
                        <small className='error-cls'>
                          {formik.errors.organisation}
                        </small>
                      ) : null}
                    </Col>
                    <Col md={6}>
                      <Label className='name-req' htmlFor='city'>
                        Country
                      </Label>
                      <DropDownComp {...selectCountry} />
                      {formik.touched.city && formik.errors.city ? (
                        <small className='error-cls'>
                          {formik.errors.city}
                        </small>
                      ) : null}
                    </Col>
                  </Row>
                </div>

                <hr className='mt-4 mb-4'></hr>
                <Row>
                  <Col className='col-xs-12 col-sm-6'>
                    <Button
                      label='Discard'
                      btnClass='secondary'
                      size='small'
                      onClick={() => props.history.push("/admin/userlist")}
                    />
                  </Col>
                  <Col className='submit-btn col-xs-12 col-sm-6'>
                    <Button
                      label='Submit details'
                      type='submit'
                      btnClass={
                        !(formik.dirty && formik.isValid)
                          ? "default"
                          : "primary"
                      }
                      size='small'
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

export default withRouter(AddNewEvaluator);
