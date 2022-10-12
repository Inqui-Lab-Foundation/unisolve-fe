import React from 'react';
import { Modal, Form, FormGroup } from 'react-bootstrap';
import { Label } from 'reactstrap';
import { InputBox } from '../../stories/InputBox/InputBox';
import { Button } from '../../stories/Button';
import axios from 'axios';
import { getNormalHeaders } from '../../helpers/Utils';
import { URL, KEY } from '../../constants/defaultValues';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CryptoJS from "crypto-js";
import { useTranslation } from 'react-i18next';


function StepFour({ userData, oldPassword, setHideFour, setHideFive }) {
    const { t } = useTranslation();
    const password = {
        type: 'password',
        placeholder: `${t('teacehr_red.enter_pass')}`,
        className: 'defaultInput',
    };
    const confirmPassword = {
        type: 'password',
        placeholder: `${t('teacehr_red.enter_c_pass')}`,
        className: 'defaultInput',
    };

    const formik = useFormik({
        initialValues: {
            user_id: userData?.user_id,
            old_password: oldPassword,
            new_password: '',
            confirmpassword: '',
        },

        validationSchema: Yup.object({
            new_password: Yup.string()
                .required('Password is required')
                .min(5, 'Your password is too short.')
                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
            confirmpassword: Yup.string().oneOf(
                [Yup.ref('new_password'), null],
                'Passwords must match'
            ),
        }),

        onSubmit: async (values) => {
            const key = CryptoJS.enc.Hex.parse("253D3FB468A0E24677C28A624BE0F939");
            const iv = CryptoJS.enc.Hex.parse("00000000000000000000000000000000");
            const encrypted = CryptoJS.AES.encrypt(values.new_password, key, {
                iv: iv,
                padding: CryptoJS.pad.NoPadding,
            }).toString();
            console.log(encrypted);
            const body = {
                new_password:encrypted ,
                old_password: values.old_password,
                user_id:values.user_id
            };
            const axiosConfig = getNormalHeaders(KEY.User_API_Key);
            // const {confirmpassword,...others} = values;
            // console.log(confirmpassword);
            await axios
                .put(
                    `${URL.updatePassword}`,
                    JSON.stringify(body, null, 2),
                    axiosConfig
                )
                .then((mentorChangePwdRes) => {
                    console.log(
                        '🚀 ~ file: StepTwo.js ~ line 56 ~ .then ~ mentorChangePwdRes?.data[0]',
                        mentorChangePwdRes
                    );
                    setHideFour(false);
                    setHideFive(true);
                })
                .catch((err) => {
                    return err.response;
                });
        },
    });

    return (
        <Modal.Body>
            <Form
                className='form-row row mb-5 mt-3 py-5'
                onSubmit={formik.handleSubmit}
                isSubmitting
            >
                <FormGroup className='form-group' md={12}>
                    <Label className='mb-2' htmlFor='new_password'>
                        {t('teacehr_red.enter_pass')}
                    </Label>

                    <InputBox
                        {...password}
                        id='new_password'
                        name='new_password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.new_password}
                    />

                    {formik.touched.new_password && formik.errors.new_password ? (
                        <small className='error-cls'>{formik.errors.new_password}</small>
                    ) : null}
                </FormGroup>

                <FormGroup className='form-group mt-5' md={12}>
                    <Label className='mb-2' htmlFor='confirmpassword'>
                        {t('teacehr_red.enter_c_pass')}
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
                        label={t('teacehr_red.continue')}
                        btnClass={!(formik.dirty && formik.isValid) ? 'default' : 'primary'}
                        size='large '
                        type='submit'
                        disabled={!(formik.dirty && formik.isValid)}
                    />
                </div>
            </Form>
        </Modal.Body>
    );
}

export default StepFour;
