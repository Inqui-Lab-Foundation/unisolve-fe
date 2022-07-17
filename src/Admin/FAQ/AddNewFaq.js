import "../../Pages/Student.scss";
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
import { Link } from "react-router-dom";
import { InputBox } from "../../stories/InputBox/InputBox";
import { SelectComp } from "../../stories/SelectComp/SelectComp";
import { TextArea } from "../../stories/TextArea/TextArea";
import { PhotoUpload } from "../../stories/PhotoUpload/PhotoUpload";
import { InputWithRadioComp } from "../../stories/InputWithRadio/InputWithRadio";
import { DropDownWithSearch } from "../../stories/DropdownWithSearch/DropdownWithSearch";
import { Collapse } from "../../stories/Collapse/CollapseComp";
import { Button } from "../../stories/Button";
import { GoChevronRight } from "react-icons/go";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BreadcrumbTwo } from "../../stories/BreadcrumbTwo/BreadcrumbTwo";
import { RichText } from "../../stories/RichText/RichText";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import Layout from "../Layout";
import plusIcon from "../../assets/img/plus-icon.svg";
import blackPlusIcon from "../../assets/img/black-plus.svg";
import deleteIcon from "../../assets/img/red-trash.svg";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style.scss";

const AddNewFaq = () => {
  const headingDetails = {
    title: "Create a new FAQ",

    options: [
      {
        title: "Help",
        path: "/",
      },
      {
        title: "FAQ’s",
        path: "/admin/add-news-categories",
      },
      {
        title: "Add New FAQ",
        path: "/",
      },
    ],
  };
  const { t, i18n } = useTranslation();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gType: "",
      // dob: "",
      selectCategory: "10",
      selectCity: "",
    },

    validationSchema: Yup.object({
      sessionTopic: Yup.string()
        .min(2, t("login.error_character"))
        .matches(/^[aA-zZ\s]+$/, t("login.error_valid_name"))
        .required(t("login.error_required")),
      sessionSubTopic: Yup.string()
        .matches(/^[A-Za-z ]*$/, t("login.error_valid_name"))
        .min(2, t("login.error_character"))
        .required(t("login.error_required")),
      gType: Yup.string().required(t("login.error_required")),
      // dob: Yup.required(t("login.error_required")),
      selectCategory: Yup.string().required("required"),
      selectCity: Yup.string().required("required"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const firstName = {
    types: "text",
    placeholder: t("login.first_Name"),
    className: "defaultInput",
  };
  const selectCat = {
    types: "select",
    placeholder: "Enter category name here...",
    className: "defaultInput",
  };

  const newsDes = {
    types: "text",
    placeholder: "Enter news description here...",
    className: "defaultInput",
  };

  const sessionPwd = {
    types: "text",
    placeholder: "copy paste the call link here",
    className: "defaultInput",
  };

  const sessionSubTopic = {
    types: "text",
    placeholder: "Enter session topic here...",
    className: "defaultInput",
  };

  const lastName = {
    types: "text",
    placeholder: t("login.last_name"),
    className: "defaultInput",
  };

  const textArea = {};

  const selectCity = {
    label: "Enter city/district here...",

    options: [
      { label: 10, value: "Mapusa" },
      { label: 20, value: "Vasco" },
      { label: 30, value: "Mumbai" },
    ],
    className: "defaultDropdown",
  };

  const selectCategory = {
    label: "Select FAQ category e.g. Getting started, Badges, etc",
    options: [
      { label: 10, value: "Mapusa" },
      { label: 20, value: "Vasco" },
      { label: 30, value: "Mumbai" },
    ],
    className: "defaultDropdown",
  };

  const radioFields = {
    className: "defaultRadio",
  };

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
      <Container className="EditPersonalDetails pt-3 pt-xl-5">
        {/* <UsersPage /> */}
        <Row>
          <Col className="col-xl-10 offset-xl-1 offset-md-0">
            <BreadcrumbTwo {...headingDetails} />
            <Row className=" article-header mb-50">
              <Col
                md={12}
                className=" d-flex justify-content-center flex-column"
              >
                <div className="mb-24">
                  <span className="main-title">Create a new FAQ</span>
                </div>
                <Card className="aside p-4">
                  <CardBody>
                    <FormGroup className="form-row row">
                      <Col className="form-group mb-5  mb-md-0" md={12}>
                        <Label className="mb-2">Select FAQ category</Label>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <Col className="form-group" md={12}>
                          <DropDownWithSearch
                            {...selectCategory}
                            onBlur={formik.handleBlur}
                            value={formik.values.selectCategory}
                            onChange={(option) =>
                              formik.setFieldValue(
                                "selectCategory",
                                option[0].label
                              )
                            }
                            name="selectCategory"
                            id="selectCategory"
                          />

                          {formik.touched.sessionTopic &&
                          formik.errors.sessionTopic ? (
                            <small className="error-cls">
                              {formik.errors.sessionTopic}
                            </small>
                          ) : null}
                        </Col>

                        <Col className="form-group mt-5  mb-md-0" md={12}>
                          <div className="add-category-container">
                            <img src={plusIcon} className="mx-2 mb-2"></img>
                            <span className="mb-2">Create New Category</span>
                          </div>
                        </Col>
                      </Col>
                    </FormGroup>
                  </CardBody>
                </Card>

                <div className="mb-24 mt-5">
                  <span className="main-title">FAQ Topic</span>
                </div>

                <Card className="aside p-4 mb-5">
                  <Collapse
                    items={[
                      {
                        answer: (
                          <>
                            <Col className="form-group mb-5  mb-md-0" md={12}>
                              <Label className="mb-2">FAQ question</Label>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                              <Col className="form-group" md={12}>
                                <InputBox
                                  className="defaultInput"
                                  label="InputBox"
                                  name=""
                                  onClick={() => {}}
                                  placeholder="Enter FAQ question here..."
                                  type=""
                                  value=""
                                />

                                {formik.touched.sessionTopic &&
                                formik.errors.sessionTopic ? (
                                  <small className="error-cls">
                                    {formik.errors.sessionTopic}
                                  </small>
                                ) : null}
                              </Col>
                            </Col>

                            <Col className="form-group mb-5  mb-md-0" md={12}>
                              <Label className="mb-2 mt-5">FAQ answer</Label>
                              <p>
                                Include all the information someone would need
                                to understand your question
                              </p>
                              <Col className="form-group" md={12}>
                                <div style={{ height: "211px" }}>
                                  <RichText onClick={() => {}} />
                                </div>
                                {formik.touched.sessionTopic &&
                                formik.errors.sessionTopic ? (
                                  <small className="error-cls">
                                    {formik.errors.sessionTopic}
                                  </small>
                                ) : null}
                              </Col>
                            </Col>
                          </>
                        ),
                        id: "one",
                        query: "FAQ Question 1",
                        icon: deleteIcon,
                      },
                      {
                        answer: (
                          <>
                            <Col className="form-group mb-5  mb-md-0" md={12}>
                              <Label className="mb-2">FAQ question</Label>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                              </p>
                              <Col className="form-group" md={12}>
                                <InputBox
                                  className="defaultInput"
                                  label="InputBox"
                                  name=""
                                  onClick={() => {}}
                                  placeholder="Enter FAQ question here..."
                                  type=""
                                  value=""
                                />

                                {formik.touched.sessionTopic &&
                                formik.errors.sessionTopic ? (
                                  <small className="error-cls">
                                    {formik.errors.sessionTopic}
                                  </small>
                                ) : null}
                              </Col>
                            </Col>

                            <Col className="form-group mb-5  mb-md-0" md={12}>
                              <Label className="mb-2 mt-5">FAQ answer</Label>
                              <p>
                                Include all the information someone would need
                                to understand your question
                              </p>
                              <Col className="form-group" md={12}>
                                <div style={{ height: "211px" }}>
                                  <RichText onClick={() => {}} />
                                </div>
                                {formik.touched.sessionTopic &&
                                formik.errors.sessionTopic ? (
                                  <small className="error-cls">
                                    {formik.errors.sessionTopic}
                                  </small>
                                ) : null}
                              </Col>
                            </Col>
                          </>
                        ),
                        id: "two",
                        query: "FAQ Question 2",
                      },
                    ]}
                    label="Collapses"
                  />
                </Card>

                <div className="col-4">
                  <Button
                    btnClass="primary"
                    label="Add Question"
                    onClick={() => {}}
                    shape="btn-square"
                    size="small"
                    icon={blackPlusIcon}
                  />
                </div>

                {/* <div className="form-row row mb-4 aside"> */}
                <hr className="my-5 w-100 mb-4 clearfix" />
                <div className="row mb-4 justify-content-between">
                  <div className="col-6">
                    <Button {...discard} type="cancel" />
                  </div>
                  <div className="col-6 text-right">
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
                {/* </div> */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default AddNewFaq;
