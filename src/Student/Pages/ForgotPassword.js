import './SignUp.scss';
import React from 'react';
import { Row, Col, Form, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { InputBox } from '../../stories/InputBox/InputBox.jsx';
import { Button } from '../../stories/Button.jsx';

import { useFormik } from 'formik';
import * as Yup from 'yup';
// import LanguageSelectorComp from '../../components/LanguageSelectorComp';

import { useTranslation } from 'react-i18next';
// import UsersPage from "./UserPages";

import signuplogo from '../../assets/media/logo-rect.svg';
import ellipse_1 from '../../assets/media/ellipse.svg';

const ForgotPassword = () => {
    const { t } = useTranslation();
    const formik = useFormik({
        initialValues: {
            email: ''
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .email(t('ForgotPswd.Must_valid_email'))
                .max(255)
                .required(t('ForgotPswd.Email_Required'))
        }),

        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    const inputEmail = {
        type: 'email',
        placeholder: t('ForgotPswd.enter_registered_email')
    };

    const logInBtn = {
        label: t('ForgotPswd.Request_Reset_Link'),
        size: 'large',
        btnClass: 'default'
    };
    // const profileProps = {
    //     options: ["Home", "Profile", "Logout"],
    // };

    return (
        <React.Fragment>
            {/* <div className="ForgotPassword "> */}
            {/* <StudentHeader {...profileProps} /> */}
            <div className="container-fluid  SignUp Login vh-100">
                {/* <Row className="mb-5 pb-5">
          <Col className="language-selector" xs={12}>
            <LanguageSelectorComp />
          </Col>
        </Row> */}
                <Row className="row-flex height-100">
                    <div className="col-md-4 aside mobile-header">
                        <div className="row">
                            <Col md={12} className=" mr-auto mobile_tab-hide">
                                {' '}
                                <h2 className="text-white">
                                    <img
                                        src={signuplogo}
                                        alt="Signup logo"
                                        className="img-fluid"
                                    />
                                    Unisolve
                                </h2>
                            </Col>
                        </div>

                        <h1 className="text-left pb-5 mobile_tab-hide">
                            {t('login.Title')}
                        </h1>
                        <p className="mobile_tab-hide">{t('login.subtitle')}</p>
                        <div className="mobile_tab-hide">
                            <figure>
                                <img
                                    src={ellipse_1}
                                    alt="ellipse_1"
                                    style={{ width: '70%' }}
                                    className="img-fluid img-1"
                                />
                            </figure>
                        </div>
                    </div>
                    <Col xs={12} sm={12} md={8} xl={8} className="article">
                        <div className="text-right w-100">
                            {/* <LanguageSelectorComp /> */}
                        </div>

                        <Row className="mb-0 h-100">
                            <Col
                                xs={12}
                                sm={12}
                                md={10}
                                xl={8}
                                className="my-auto1 mt-5 pt-5"
                            >
                                <h4>{t('ForgotPswd.forgot_pswd')}</h4>
                                <span className=" sub mt-2 w-100">
                                    {t('ForgotPswd.pswd_text')}
                                </span>
                                <Form onSubmit={formik.handleSubmit}>
                                    <div className="form-row row my-5">
                                        <Col className="form-group">
                                            <Label
                                                className="mb-2"
                                                htmlFor="email"
                                            >
                                                {t('ForgotPswd.Email_Address')}
                                            </Label>
                                            <InputBox
                                                {...inputEmail}
                                                id="email"
                                                name="email"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                            />

                                            {formik.touched.email &&
                                            formik.errors.email ? (
                                                    <small className="error-cls">
                                                        {formik.errors.email}
                                                    </small>
                                                ) : null}
                                        </Col>
                                    </div>
                                    <div className="w-100 clearfix" />

                                    <div className="form-row row mb-5">
                                        <Col className="form-group">
                                            <Link
                                                exact="true"
                                                to="/verifypassword"
                                            >
                                                <Button
                                                    {...logInBtn}
                                                    type="submit"
                                                />
                                            </Link>
                                        </Col>
                                    </div>
                                </Form>
                                <p className="d-flex text-center ">
                                    {/* <NavLink className="p-0 blue">Back to Login</NavLink> */}
                                    <Link
                                        exact="true"
                                        to="/login"
                                        className="p-0 blue text-link w-100"
                                    >
                                        {t('ForgotPswd.Back_Login')}
                                    </Link>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            {/* </div> */}
        </React.Fragment>
    );
};

export default ForgotPassword;
