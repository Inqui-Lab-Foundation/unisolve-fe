import React from "react";
import { Modal, Form, FormGroup } from "react-bootstrap";
import { Label } from "reactstrap";

import { InputBox } from "../../stories/InputBox/InputBox";

import { Button } from "../../stories/Button";

import { useFormik } from "formik";
import * as Yup from "yup";

function StepFour({ setHideFour, setHideFive }) {
  const handleClick = () => {
    setHideFour(false);
    setHideFive(true);
  };

  const password = {
    type: "password",
    placeholder: "Password",
    className: "defaultInput",
  };
  const confirmPassword = {
    type: "password",
    placeholder: "Conform Password",
    className: "defaultInput",
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmpassword: "",
    },

    validationSchema: Yup.object({
      password: Yup.string()
        .required("Password is required")
        .min(5, "Your password is too short.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
      confirmpassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),

    onSubmit: (values) => {},
  });

  return (
    <Modal.Body>
      <Form
        className='form-row row mb-5 mt-3 py-5'
        onSubmit={formik.handleSubmit}
        isSubmitting
      >
        <FormGroup className='form-group' md={12}>
          <Label className='mb-2' htmlFor='password'>
            Enter Password
          </Label>

          <InputBox
            {...password}
            id='password'
            name='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />

          {formik.touched.password && formik.errors.password ? (
            <small className='error-cls'>{formik.errors.password}</small>
          ) : null}
        </FormGroup>

        <FormGroup className='form-group mt-5' md={12}>
          <Label className='mb-2' htmlFor='confirmpassword'>
            Confirm Password
          </Label>
          <InputBox
            {...confirmPassword}
            id='confirmpassword'
            name='confirmpassword'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmpassword}
          />

          {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
            <small className='error-cls'>{formik.errors.confirmpassword}</small>
          ) : null}
        </FormGroup>
        <div className='mt-5'>
          <Button
            label='CONTINUE'
            btnClass={!(formik.dirty && formik.isValid) ? "default" : "primary"}
            size='large '
            type='submit'
            disabled={!(formik.dirty && formik.isValid)}
            onClick={handleClick}
            //   onClick={() => props.history.push("/")}
          />
        </div>
      </Form>
    </Modal.Body>
  );
}

export default StepFour;
