import React from "react";
import { Modal, Col, Alert, Form, FormGroup } from "react-bootstrap";
import { Label, UncontrolledAlert } from "reactstrap";

import { InputBox } from "../../stories/InputBox/InputBox";

import { Button } from "../../stories/Button";
import { useFormik } from "formik";
import * as Yup from "yup";

function StepTwo({ setHideOne, setHideTwo, setHideThree, setHideFour }) {
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
      name: "",
      phone: "",
      email: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Enter Name")
        .matches(/^[aA-zZ\s]+$/, "Not allowed")
        .required("Required"),
      phone: Yup.string()
        .required("required")
        .matches(phoneRegExp, "Phone number is not valid")
        .min(10, "to short")
        .max(10, "to long"),
      email: Yup.string().email("Invalid email format").required("Required"),
    }),

    onSubmit: (values) => {},
  });

  return (
    <Modal.Body>
      <div className='form-row row  mt-0 pt-5'>
        <Col className='form-group' md={12}>
          <Label className='mb-2 w-100'>
            <UncontrolledAlert color='primary '>
              School:
              <br />
              City: <br />
              District:
            </UncontrolledAlert>
          </Label>
        </Col>

        <Form
          className='form-row row  mt-0 pb-5'
          onSubmit={formik.handleSubmit}
          isSubmitting
        >
          <FormGroup className='form-group mb-5' md={12}>
            <Label className='mb-2' htmlFor='name'>
              Faculty Name
            </Label>

            <InputBox
              {...inputName}
              id='name'
              name='name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />

            {formik.touched.name && formik.errors.name ? (
              <small className='error-cls'>{formik.errors.name}</small>
            ) : null}
          </FormGroup>
          <FormGroup className='form-group' md={12}>
            <Label className='mb-2' htmlFor='phone'>
              Faculty Phone Number
            </Label>
            {/* <InputWithMobileNoComp {...inputPhone} id='phone' name='phone' /> */}
            <InputBox
              {...inputPhone}
              id='phone'
              name='phone'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />

            {formik.touched.phone && formik.errors.phone ? (
              <small className='error-cls'>{formik.errors.phone}</small>
            ) : null}
          </FormGroup>

          <FormGroup className='form-group mt-5' md={12}>
            <Label className='mb-2' htmlFor='email'>
              Faculty Email Address
            </Label>
            <InputBox
              {...inputEmail}
              id='email'
              name='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            {formik.touched.email && formik.errors.email ? (
              <small className='error-cls'>{formik.errors.email}</small>
            ) : null}
          </FormGroup>
          <div className='mt-5'>
            <Button
              label='CONTINUE'
              // btnClass='primary w-100'
              btnClass={
                !(formik.dirty && formik.isValid) ? "default" : "primary"
              }
              size='large '
              type='submit'
              disabled={!(formik.dirty && formik.isValid)}
              onClick={handleClick}

              //   onClick={() => props.history.push("/")}
            />
          </div>
        </Form>
      </div>
    </Modal.Body>
  );
}

export default StepTwo;
