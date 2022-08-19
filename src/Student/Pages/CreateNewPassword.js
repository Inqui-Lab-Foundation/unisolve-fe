import './SignUp.scss';
import React from 'react';
import { Row, Col, Form, Label } from 'reactstrap';

import { InputBox } from '../../stories/InputBox/InputBox.jsx';
import { Button } from '../../stories/Button.jsx';

import { useFormik } from 'formik';
import * as Yup from 'yup';

// import UsersPage from "./UserPages";

import forgotpassword from '../../assets/media/forgot-password.svg';

const CreateNewPassword = () => {
    const formik = useFormik({
        initialValues: {
            password: '',
            password_confirmation: ''
        },

        validationSchema: Yup.object({
            password: Yup.string()
                .required('Please Enter your password')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
                    'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
                ),
            password_confirmation: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Passwords must match'
            )
        }),

        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    const inputPassword = {
        type: 'password',
        placeholder: 'Type new password here'
    };

    const confirmPassword = {
        type: 'password',
        placeholder: 'Reenter password here'
    };

    const logInBtn = {
        label: 'Login with new password',
        size: 'large',
        btnClass: 'primary'
    };

    return (
        <React.Fragment>
            <div className="container-fluid   Login vh-100">
                {/* <UsersPage /> */}
                <Row className=" my-auto h-100">
                    <Col
                        xs={12}
                        sm={12}
                        md={6}
                        xl={5}
                        className="my-auto  mobile_tab-hide"
                    >
                        <figure className="mx-5">
                            <img
                                src={forgotpassword}
                                alt="forgotpassword"
                                className="img-fluid "
                            />
                        </figure>
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        md={6}
                        xl={7}
                        className=" article my-auto"
                    >
                        <Row className="mb-0">
                            <Col xs={12} sm={12} md={10} xl={8}>
                                <h4>Create a New password</h4>
                                <span className=" sub mt-2">
                                    Type and coconfirm a secure new password for
                                    the account.
                                </span>
                                <Form onSubmit={formik.handleSubmit}>
                                    <div className="form-row row my-5">
                                        <Col className="form-group">
                                            <Label
                                                className="mb-2"
                                                htmlFor="password"
                                            >
                                                New password
                                            </Label>
                                            <InputBox
                                                {...inputPassword}
                                                id="password"
                                                name="password"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.password}
                                            />

                                            {formik.touched.password &&
                                            formik.errors.password ? (
                                                    <small className="error-cls">
                                                        {formik.errors.password}
                                                    </small>
                                                ) : null}
                                            <small className="mt-3 mb-2">
                                                8-character minimum; case
                                                sensitive
                                            </small>
                                        </Col>
                                    </div>
                                    <div className="w-100 clearfix" />

                                    <div className="form-row row mb-5">
                                        <Col className="form-group">
                                            <Label
                                                className="mb-2"
                                                htmlFor="password_confirmation"
                                            >
                                                Verify New password
                                            </Label>
                                            <InputBox
                                                {...confirmPassword}
                                                id="password_confirmation"
                                                name="password_confirmation"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={
                                                    formik.values
                                                        .password_confirmation
                                                }
                                            />

                                            {formik.touched
                                                .password_confirmation &&
                                            formik.errors
                                                .password_confirmation ? (
                                                    <small className="error-cls">
                                                        {
                                                            formik.errors
                                                                .password_confirmation
                                                        }
                                                    </small>
                                                ) : null}
                                        </Col>
                                    </div>

                                    <div className="form-row row mb-5">
                                        <Col className="form-group">
                                            <Button
                                                {...logInBtn}
                                                type="submit"
                                            />
                                        </Col>
                                    </div>
                                </Form>
                            </Col>
                        </Row>

                        {/* <Row className="mb-0">
              <h4>Create a New password</h4>
              <span className=" sub mt-2">
                Type and coconfirm a secure new password for the account.
              </span>
            </Row>
            <Row className="mt-5">
              <Col md={12}>
                <Form onSubmit={formik.handleSubmit}>
                  <div className="form-row row mb-5">
                    <Col className="form-group" md={7}>
                      <Label className="mb-2" htmlFor="password">
                        New password
                      </Label>
                      <InputBox
                        {...inputPassword}
                        id="password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                      />

                      {formik.touched.password && formik.errors.password ? (
                        <small className="error-cls">
                          {formik.errors.password}
                        </small>
                      ) : null}
                      <small className="mt-3 mb-2">
                        8-character minimum; case sensitive
                      </small>
                    </Col>
                  </div>
                  <div className="w-100 clearfix" />

                  <div className="form-row row mb-5">
                    <Col className="form-group" md={7}>
                      <Label className="mb-2" htmlFor="password_confirmation">
                        Verify New password
                      </Label>
                      <InputBox
                        {...confirmPassword}
                        id="password_confirmation"
                        name="password_confirmation"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password_confirmation}
                      />

                      {formik.touched.password_confirmation &&
                      formik.errors.password_confirmation ? (
                        <small className="error-cls">
                          {formik.errors.password_confirmation}
                        </small>
                      ) : null}
                    </Col>
                  </div>

                  <div className="form-row row mb-5">
                    <Col className="form-group" md={6}>
                      <Button {...logInBtn} type="submit" />
                    </Col>
                  </div>
                </Form>
              </Col>
            </Row> */}
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
};

export default CreateNewPassword;
