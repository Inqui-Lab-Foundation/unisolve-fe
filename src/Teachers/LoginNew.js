import "../Student/Pages/SignUp.scss";
import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { InputBox } from "../stories/InputBox/InputBox";
import { Button } from "../stories/Button";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
// import LanguageSelectorComp from '../components/LanguageSelectorComp';
import { useTranslation } from 'react-i18next';

// import UsersPage from "./UserPages";

import signuplogo from "../assets/media/tn-brands/UPSHIFT_BLACK.png"; 
import studentIcon from "../assets/media/student_login_icon.png"; 
import teacherIcon from "../assets/media/teacher_login_icon.png"; 
import ellipse_1 from "../assets/media/ellipse.svg";

import { teacherLoginUser } from "../redux/actions";

import CryptoJS from "crypto-js";

const LoginNew = (props) => {
    const { t } = useTranslation();
    const history = useHistory();
    const [password, handlePassword] = useState("password");
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        validationSchema: Yup.object({
            email: Yup.string().required("Required email id"),
            password: Yup.string().required("Required password"),
        }),
        // TEACHER ROLE
        onSubmit: (values) => {
            const key = CryptoJS.enc.Hex.parse("253D3FB468A0E24677C28A624BE0F939");
            const iv = CryptoJS.enc.Hex.parse("00000000000000000000000000000000");
            const encrypted = CryptoJS.AES.encrypt(values.password, key, {
                iv: iv,
                padding: CryptoJS.pad.NoPadding, 
            }).toString();
            console.log(encrypted);
            const body = {
                username: values.email.trim(),
                password: encrypted,
                role: "MENTOR"
            };
            // history.push("/admin/dashboard");
            props.teacherLoginUserAction(body, history);
            console.log("======", body);
        },
    });

    const inputUserId = {
        type: "text",
        placeholder: t('loginPage.Enter_your_email')
    };

    const inputPassword = {
        placeholder: t('loginPage.Password')
    };

    const logInBtn = {
        label: t('login.logIn'),
        size: "large",
    // btnClass: "default",
    };
    // const openNotificationWithIcon = (type, item) => {
    //   notification[type]({
    //     message: item,
    //     // description:
    //     //   "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    //   });
    // };
    // const MINUTE_MS = 6000;

    // useEffect(() => {
    //   if (props.currentUser && props.currentUser.status === 200) {
    //     const sucess = props.currentUser && props.currentUser.message;
    //     openNotificationWithIcon("success", sucess);
    //   } else {
    //     openNotificationWithIcon("error", "Please check login details");
    //   }
    // }, [props.currentUser, props.error]);
    // console.log("===========error", props.error);
    const handleShow =(e, type)=>{     
        if(type === "password"){
            handlePassword("text");
        }else{
            handlePassword("password");
        }
    };
    return (
        <React.Fragment>
            <div className='container-fluid  SignUp Login'>
                {/* <UsersPage /> */}
                <Row className='row-flex height-100'>
                    <div className='col-md-4 aside mobile-header'>
                        <div className='row'>
                            <Link to={"/"} exact>
                                <Col md={12} className=' mr-auto mobile_tab-hide'>
                                    {" "}
                                    <h2 className='text-white'>
                                        <img
                                            src={signuplogo}
                                            alt='Signup logo'
                                            className='img-fluid w-50'
                                        />
                                        
                                    </h2>
                                </Col>
                            </Link>
                        </div>

                        <h1 className='text-left pb-5 mobile_tab-hide'>
                            {t('login.Title')}
                        </h1>
                        <p className='mobile_tab-hide'>
                            {t('login.subtitle')}
                        </p>
                        <div className='mobile_tab-hide'>
                            <figure>
                                <img
                                    src={ellipse_1}
                                    alt='ellipse_1'
                                    className='img-fluid img-1'
                                />
                            </figure>
                        </div>
                    </div>

                    <Col xs={12} sm={12} md={8} xl={8} className='article'>
                        <Row className="login-options">
                            <Col md={12} className="text-right">
                                {/* <LanguageSelectorComp module={"general"} /> */}
                            </Col>
                        </Row>
                        <Row className=' article-header mb-4'>
                            {/* <h4 className="mb-4">
                                <span className='color-green'>Teacher</span> Login
                            </h4> */}
                            {/* <Col md={8}> */}
                            <div className='d-flex mt-4 login-div'>
                                <Link
                                    className="landing-page-actions "
                                    exact="true"
                                    to="/teacher"
                                >
                                    
                                    <button className='storybook-button storybook-button--small storybook-button--loginBtn active'><img src={teacherIcon} alt="login icon" className='img-fluid' /> {t('loginPage.teacher_login')}</button>
                                </Link>
                                <Link
                                    className="landing-page-actions"
                                    exact="true"
                                    to="/login"
                                >
                                   
                                    <button className='storybook-button storybook-button--small storybook-button--loginBtn '><img src={studentIcon} alt="login icon" className='img-fluid' /> {t('loginPage.student_login')}</button>
                                </Link>
                                
                            </div>
                            {/* </Col> */}

                            {/* <p className="mt-2">You are logging as a <Link exact="true" to="/teacher">
                            teacher.
                            </Link> Click here for <Link exact="true" to="/login">student</Link> logging.</p> */}
                        </Row>

                        <Row className='my-2'>
                            <Col md={12}>
                                <Form onSubmit={formik.handleSubmit}>
                                    <div className='form-row row mb-5'>
                                        <Col className='form-group' xs={12} sm={12} md={10} xl={7}>
                                            <Label className='mb-2' htmlFor='email'>
                                                {t('loginPage.User_ID_Teacher')}
                                            </Label>
                                            <InputBox
                                                {...inputUserId}
                                                id='email'
                                                name='email'
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                            />

                                            {formik.touched.email && formik.errors.email ? (
                                                <small className='error-cls'>{formik.errors.email}</small>
                                            ) : null}
                                        </Col>
                                    </div>
                                    <div className='w-100 clearfix' />

                                    <div className='form-row row mb-5'>
                                        <Col className='form-group' xs={12} sm={12} md={10} xl={7}>
                                            <Label className='mb-2' htmlFor='Password'>
                                                {t('loginPage.Password_label')}
                                            </Label>
                                            <InputBox
                                                {...inputPassword}
                                                type= {password}
                                                id='password'
                                                name='password'
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.password}
                                            />

                                            {formik.touched.password && formik.errors.password ? (
                                                <small className='error-cls'>{formik.errors.password}</small>
                                            ) : null}
                                        </Col>

                                        <Col className='form-group' xs={12} sm={12} md={12} xl={12}>
                                            <Row className='keepme_login'>
                                                <Col className='col-sm-4'>
                                                    <FormGroup check>
                                                        <Input
                                                            type='checkbox'
                                                            name='acceptedTerms'
                                                            className='my-auto'
                                                            onClick={(e)=>handleShow(e,password)}
                                                        />
                                                        <small className='text-bold '>
                                                            {" "}
                                                            {t('loginPage.Show_Password')}
                                                        </small>
                                                    </FormGroup>
                                                </Col>
                                                {/* <Col className='col-sm-8 text-right'>
                                                    <Link
                                                        exact='true'
                                                        to='/admin/forgotpassword'
                                                        className='text-link pt-1'
                                                    >
                                                        {t(
                                                            'loginPage.Forgot_your_password'
                                                        )}
                                                    </Link>
                                                </Col> */}
                                            </Row>
                                        </Col>
                                    </div>

                                    <div className='form-row row mb-5'>
                                        <Col className='form-group' xs={12} sm={12} md={10} xl={7}>
                                            <Button
                                                {...logInBtn}
                                                type='submit'
                                                btnClass={
                                                    !(formik.dirty && formik.isValid)
                                                        ? "default"
                                                        : "primary"
                                                }
                                                disabled={!(formik.dirty && formik.isValid)}
                                            />
                                        </Col>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = ({ authUser }) => {
    const { loading, error, currentUser } = authUser;
    return { loading, error, currentUser };
};

export default connect(mapStateToProps, {
    teacherLoginUserAction: teacherLoginUser,
})(LoginNew);
// export default LoginNew;
