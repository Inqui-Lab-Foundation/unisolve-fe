import React from "react";
import { Modal, Form, FormGroup } from "react-bootstrap";
import { Label } from "reactstrap";
import { InputBox } from "../../stories/InputBox/InputBox";
import { Button } from "../../stories/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { URL, KEY } from "../../constants/defaultValues";
import {
  getNormalHeaders,
  openNotificationWithIcon,
} from "../../helpers/Utils";
import axios from "axios";

function StepOne({ setHideOne, setHideTwo, setHideThree, setHideFour }) {
  // const handleClick = () => {
  //   setHideOne(false);
  //   setHideTwo(true);
  // };

  const inputDICE = {
    type: "text",
    placeholder: "Please enter your dice code to continue",
    className: "defaultInput",
  };

  const formik = useFormik({
    initialValues: {
      diceCode: "",
    },

    validationSchema: Yup.object({
      diceCode: Yup.string()
        .min(6, "Not matching")
        .matches(/^[aA-zZ\s]+$/, "Not allowed")
        .required("Required"),
    }),

    onSubmit: async (values) => {
      const axiosConfig = getNormalHeaders(KEY.User_API_Key);
      await axios
        .post(`${URL.checkOrg}`, JSON.stringify(values, null, 2), axiosConfig)
        .then((faqsubmitRest) => {
          if (faqsubmitRest?.status == 201) {
            setHideOne(false);
            setHideTwo(true);
          }
        })
        .catch((err) => {
          return err.response;
        });
    },
  });

  return (
    <Modal.Body>
      <Form
        className="form-row row mb-5 mt-3 py-5"
        onSubmit={formik.handleSubmit}
        isSubmitting
      >
        <FormGroup className="form-group" md={12}>
          <Label className="mb-2" htmlFor="diceCode">
            DICE CODE
          </Label>
          <InputBox
            {...inputDICE}
            id="diceCode"
            name="diceCode"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.diceCode}
          />
          {formik.touched.diceCode && formik.errors.diceCode ? (
            <small className="error-cls">{formik.errors.diceCode}</small>
          ) : null}
          <span>Please enter your school DISE code to continue</span>
        </FormGroup>
        <div className="mt-5">
          <Button
            label="CONTINUE"
            // btnClass='primary w-100'
            btnClass={!(formik.dirty && formik.isValid) ? "default" : "primary"}
            size="large "
            type="submit"
            disabled={!(formik.dirty && formik.isValid)}
          />
        </div>
      </Form>
    </Modal.Body>
  );
}

export default StepOne;
