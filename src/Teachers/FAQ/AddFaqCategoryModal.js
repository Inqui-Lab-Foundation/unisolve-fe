import React, { Component, useEffect, useState, Fragment } from "react";
import { Modal } from "react-bootstrap";
import { Col, Form } from "reactstrap";
import { InputBox } from "../../stories/InputBox/InputBox";
import { Button } from "../../stories/Button";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import axios from "axios";
import { URL, KEY } from "../../constants/defaultValues";
import {
  getNormalHeaders,
  openNotificationWithIcon,
} from "../../helpers/Utils";

const AddFaqCategoryModal = (props) => {
  const { t, i18n } = useTranslation();
  const formik = useFormik({
    initialValues: {
      category_name: "",
    },

    validationSchema: Yup.object({
      // dob: Yup.required(t("login.error_required")),
      category_name: Yup.string().required("required"),
    }),

    onSubmit: (values) => {
      const axiosConfig = getNormalHeaders(KEY.User_API_Key);

      axios
        .post(`${URL.getFaqCategoryList}`, values, axiosConfig)
        .then((categoryPostRes) => {
          if (categoryPostRes?.status == 201) {
            openNotificationWithIcon(
              "success",
              "category added successfully..!!",
              ""
            );
            formik.resetForm();
            if (props?.updateFaqCatList) {
              props.updateFaqCatList();
            }
          }
        })
        .catch((err) => {
          openNotificationWithIcon("error", err.response, "");
        });
    },
  });

  useEffect(() => {
    //whenever modal open reset the erros
    if (props.show) formik.setErrors({});
  }, [props.show]);

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
          <Form onSubmit={formik.handleSubmit}>
            <Col className="form-group mb-5  mb-md-0" md={12}>
              <Col className="form-group" md={12}>
                <InputBox
                  className="defaultInput"
                  label="InputBox"
                  name="category_name"
                  id="category_name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.category_name}
                  placeholder="Enter FAQ Category Name Here..."
                />

                {formik.touched.category_name && formik.errors.category_name ? (
                  <small className="error-cls">
                    {formik.errors.category_name}
                  </small>
                ) : null}
              </Col>
            </Col>
            <Button
              label="Create"
              btnClass="primary mt-4"
              size="small"
              type="submit"
            />
          </Form>
        </Modal.Body>
      </Fragment>
    </Modal>
  );
};

export default AddFaqCategoryModal;
