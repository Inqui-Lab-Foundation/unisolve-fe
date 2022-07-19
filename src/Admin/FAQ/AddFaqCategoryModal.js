import React, { Component, useEffect, useState, Fragment } from "react";
import { Modal } from "react-bootstrap";
import { Col } from "reactstrap";
import { InputBox } from "../../stories/InputBox/InputBox";
import { Button } from "../../stories/Button";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

const AddFaqCategoryModal = (props) => {
  const { t, i18n } = useTranslation();
  const formik = useFormik({
    initialValues: {
      selectCategory: "",
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
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Modal
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-popup text-center quiz-modal"
      backdrop="static"
    >
      <Fragment>
        <Modal.Header
          closeButton
          onClick={() => props.toggleFaqCatModal()}
        ></Modal.Header>

        <Modal.Body>
          <Col className="form-group mb-5  mb-md-0" md={12}>
            <Col className="form-group" md={12}>
              <InputBox
                className="defaultInput"
                label="InputBox"
                name=""
                onClick={() => {}}
                placeholder="Enter FAQ Category Name Here..."
                type=""
                value=""
              />

              {formik.touched.sessionTopic && formik.errors.sessionTopic ? (
                <small className="error-cls">
                  {formik.errors.sessionTopic}
                </small>
              ) : null}
            </Col>
          </Col>
          <Button
            label="Create"
            btnClass="primary mt-4"
            size="small"
            onClick={() => {}}
          />
        </Modal.Body>
      </Fragment>
    </Modal>
  );
};

export default AddFaqCategoryModal;
