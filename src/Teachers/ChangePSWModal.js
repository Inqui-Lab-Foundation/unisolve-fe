import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Label } from 'reactstrap';

import axios from 'axios';
import '../Student/Pages/SignUp.scss';
import { InputBox } from '../stories/InputBox/InputBox';
import CryptoJS from 'crypto-js';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getCurrentUser } from '../helpers/Utils';
import { useTranslation } from 'react-i18next';
import 'sweetalert2/src/sweetalert2.scss';
import Layout from './Layout';
import { useHistory } from "react-router-dom";

const ChangePSWModal = (props) => {
    const currentUser = getCurrentUser('current_user');
    const history = useHistory();
    const { t } = useTranslation();
    const [error, SetError] = useState('');
    const [responce, SetResponce] = useState('');
    const [errorText, setErrorText] = useState('');

    const formik = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
        },

        validationSchema: Yup.object({
            oldPassword: Yup.string().required(t('login.error_required')),
            newPassword: Yup.string().required(t('login.error_required')),
            confirmPassword: Yup.string().required(t('login.error_required')),
        }),

        onSubmit: (values) => {
            if (values.newPassword.length < 8) {
                SetError('New Password must be 8-character minimum');
            } else if (values.oldPassword === values.newPassword) {
                SetError('Old Password and New Passwiord are same');
            } else if (values.newPassword !== values.confirmPassword) {
                SetError('New Password and Confirm Password not same');
            } else {
                const key = CryptoJS.enc.Hex.parse('253D3FB468A0E24677C28A624BE0F939');
                const iv = CryptoJS.enc.Hex.parse('00000000000000000000000000000000');
                const old1 = CryptoJS.AES.encrypt(values.oldPassword, key, {
                    iv: iv,
                    padding: CryptoJS.pad.NoPadding,
                }).toString();
                const new1 = CryptoJS.AES.encrypt(values.newPassword, key, {
                    iv: iv,
                    padding: CryptoJS.pad.NoPadding,
                }).toString();

                const body = JSON.stringify({
                    user_id: JSON.stringify(currentUser.data[0].user_id),
                    old_password: old1,
                    new_password: new1,
                });
                var config = {
                    method: 'put',
                    url: process.env.REACT_APP_API_BASE_URL + '/mentors/changePassword',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${currentUser.data[0].token}`,
                    },
                    data: body,
                };
                axios(config)
                    .then(function (response) {
                        console.log(response)
                            SetResponce("Password updated successfully");
                            setTimeout(() => {
                                SetResponce("")
                                history.push("/teacher/dashboard");
                            }, 1000);
                            
                    })
                    .catch(function (error) {
                        // setErrorText("User's current password doesn't match");
                        console.log(error);
                    });
            }
        },
    });
    useEffect(() => {
        SetError('');
        setErrorText("");
    }, [formik.values]);

    const oldPassword = {
        type: 'password',
        placeholder: t('changepswd.Enter_current_password_here'),
        className: 'defaultInput',
    };

    const newPassword = {
        type: 'password',
        placeholder: t('changepswd.Create_new_password_here'),
        className: 'defaultInput',
    };

    const confirmPassword = {
        type: 'password',
        placeholder: t('changepswd.Verify_New_password'),
        className: 'defaultInput',
    };
    const handleOnCancel =()=>{


    }
    return (
        <Layout>
            <div className='container ChangePSWModal mb-5'>
                <Row className='mt-5 change-password'>
                    <Col md={12}>
                        <h5>{t('changepswd.Change your password')}</h5>
                        <p>{t('changepswd.password_helps_prevent_unauthorized')}</p>
                    </Col>
                    
                    <Col md={12}>
                        <Form onSubmit={formik.handleSubmit}>
                            <div className='form-row row mb-5 mt-3'>
                                <Col className='form-group' md={12}>
                                    <Label className='mb-2' htmlFor='Password'>
                                        {t('changepswd.Current_password')}
                                    </Label>
                                    <InputBox
                                        {...oldPassword}
                                        id='oldPassword'
                                        name='oldPassword'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.oldPassword}
                                    />                                   
                                    {formik.touched.oldPassword && formik.errors.oldPassword ? (
                                        <small className='error-cls'>
                                            {formik.errors.oldPassword}
                                        </small>
                                    ) : null}
                                </Col>
                            </div>
                            <div className='w-100 clearfix ' />

                            <div className='form-row row  mb-5'>
                                <Col className='form-group' md={12}>
                                    <Label className='mb-2' htmlFor='newPassword'>
                                        {t('changepswd.New_password')}
                                    </Label>
                                    <InputBox
                                        {...newPassword}
                                        id='newPassword'
                                        name='newPassword'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.newPassword}
                                    />
                                    <small className='mt-2'>
                                        {t('changepswd.8-charac_minimum_case_sensitive')}
                                    </small>
                                    {formik.touched.newPassword && formik.errors.newPassword ? (
                                        <small className='error-cls'>
                                            {formik.errors.newPassword}
                                        </small>
                                    ) : null}
                                </Col>
                                <div className='w-100 clearfix' />
                                <Col className='form-group mt-5' md={12}>
                                    <Label className='mb-2' htmlFor='confirmPassword'>
                                        {t('changepswd.Verify_New_password')}
                                    </Label>
                                    <InputBox
                                        {...confirmPassword}
                                        id='confirmPassword'
                                        name='confirmPassword'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.confirmPassword}
                                    />

                                    {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword ? (
                                            <small className='error-cls'>
                                                {formik.errors.confirmPassword}
                                            </small>
                                        ) : null}
                                </Col>
                            </div>
                            {error}{responce}
                            <div
                                className='swal2-actions'
                                style={{
                                    display: 'flex',
                                    justifyContent: 'end',
                                    fontSize: '0.9em',
                                }}
                            >
                                <button
                                    onClick={handleOnCancel}
                                    className='btn btn-outline-secondary rounded-pill sweet-btn-max'
                                >
                                    {t('changepswd.Cancel')}
                                </button>
                                <button
                                    type='submit'
                                    className='storybook-button storybook-button--small storybook-button--primary sweet-btn-max'
                                >
                                    {t('changepswd.Change_password')}
                                </button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
        </Layout>
    );
};

export default ChangePSWModal;
