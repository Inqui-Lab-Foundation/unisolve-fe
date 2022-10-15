import React from 'react';
import { Modal, Col, Form, FormGroup } from 'react-bootstrap';
import { Label, UncontrolledAlert } from 'reactstrap';
import axios from 'axios';
import { InputBox } from '../../stories/InputBox/InputBox';
import { getNormalHeaders } from '../../helpers/Utils';
import { URL, KEY } from '../../constants/defaultValues';
import { Button } from '../../stories/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerStepData } from '../../redux/actions';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

function StepTwo({
    setUserData,
    orgData,
    setHideTwo,
    // setHideThree,
    setHideFour
}) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const stepTwoData = useSelector((state) => state.authUser.stepTwoData);
    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const inputPhone = {
        type: 'number',
        placeholder: `${t('teacehr_red.faculty_ph')}`,
        className: 'defaultInput'
    };

    const inputEmail = {
        type: 'email',
        placeholder: `${t('teacehr_red.faculty_email')}`,
        className: 'defaultInput'
    };

    const inputName = {
        type: 'text',
        placeholder: `${t('teacehr_red.faculty_name_pl')}`,
        className: 'defaultInput'
    };

    const mobile1 = JSON.parse(localStorage.getItem('mobile'));
    console.log(mobile1);
    const formik = useFormik({
        initialValues: {
            full_name: '',
            mobile: '',
            username: '',
            organization_code: orgData?.organization_code,
            role: 'MENTOR',
            qualification: '-',
            reg_status: stepTwoData?.username ? true : false
        },

        validationSchema: Yup.object({
            full_name: Yup.string()
                .min(2, 'Enter Name')
                .matches(/^[aA-zZ\s]+$/, 'Not allowed')
                .required('Required'),
            mobile: Yup.string()
                .required('required')
                .matches(phoneRegExp, 'Phone number is not valid')
                .min(10, 'to short')
                .max(10, 'to long'),
            username: Yup.string()
                .email('Invalid username format')
                .required('Required')
        }),

        onSubmit: async (values) => {
            const axiosConfig = getNormalHeaders(KEY.User_API_Key);
            if (stepTwoData?.mobile) {
                const { user_id } = stepTwoData;
                const { mobile } = values;
                localStorage.setItem('mobile', JSON.stringify(mobile));
                const data = {
                    mobile,
                    user_id
                };
                await axios
                    .put(
                        `${URL.updateMobile}`,
                        JSON.stringify(data, null, 2),
                        axiosConfig
                    )
                    .then((mentorRegRes) => {
                        console.log(
                            '🚀 ~ file: StepTwo.js ~ line 80 ~ .then ~ mentorRegRes?.data[0]',
                            mentorRegRes?.data
                        );
                        // dispatch(registerStepData(mentorRegRes?.data?.data[0]));
                        if (mentorRegRes?.data?.status == 202) {
                            setUserData(mentorRegRes?.data?.data[0]);
                            setHideTwo(false);
                            setHideFour(true);
                        }
                    })
                    .catch((err) => {
                        formik.setErrors({
                            check: 'Not Acceptable, Mentor already exists'
                        });
                        return err.response;
                    });
            } else {
                await axios
                    .post(
                        `${URL.mentorRegister}`,
                        JSON.stringify(values, null, 2),
                        axiosConfig
                    )
                    .then((mentorRegRes) => {
                        console.log(
                            '🚀 ~ file: StepTwo.js ~ line 80 ~ .then ~ mentorRegRes?.data[0]',
                            mentorRegRes?.data,
                            mentorRegRes?.data?.data[0]
                        );
                        dispatch(registerStepData(mentorRegRes?.data?.data[0]));
                        if (mentorRegRes?.data?.status == 201) {
                            setUserData(mentorRegRes?.data?.data[0]);
                            setHideTwo(false);
                            setHideFour(true);
                        }
                    })
                    .catch((err) => {
                        formik.setErrors({
                            check: 'Not Acceptable, Mentor already exists'
                        });
                        return err.response;
                    });
            }
        }
    });

    return (
        <Modal.Body>
            <div className="form-row row  mt-0 pt-5">
                <Col className="form-group" md={12}>
                    <Label className="mb-2 w-100">
                        <UncontrolledAlert color="primary ">
                            {t('teacehr_red.school')}:{' '}
                            {orgData?.organization_name} <br />
                            {t('teacehr_red.city')}:{' '}
                            {orgData?.city ? orgData?.city : ' N/A'} <br />
                            {t('teacehr_red.district')}:{' '}
                            {orgData?.district ? orgData?.district : ' N/A'}
                        </UncontrolledAlert>
                    </Label>
                </Col>
                {formik.errors.check ? (
                    <small className="error-cls mb-3 mt-3 text-center">
                        {formik.errors.check}
                    </small>
                ) : null}
                <Form
                    className="form-row row  mt-0 pb-5"
                    onSubmit={formik.handleSubmit}
                    isSubmitting
                >
                    <FormGroup className="form-group mb-5" md={12}>
                        <Label className="mb-2" htmlFor="name">
                            {t('teacehr_red.faculty_name')}
                        </Label>

                        <InputBox
                            {...inputName}
                            id="full_name"
                            name="full_name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.full_name}
                            // isDisabled={stepTwoData.mobile ? true : false}
                        />

                        {formik.touched.full_name && formik.errors.full_name ? (
                            <small className="error-cls">
                                {formik.errors.full_name}
                            </small>
                        ) : null}
                    </FormGroup>
                    <FormGroup className="form-group" md={12}>
                        <Label className="mb-2" htmlFor="mobile">
                            {t('teacehr_red.faculty_ph')}
                        </Label>
                        {/* <InputWithMobileNoComp {...inputPhone} id='mobile' name='mobile' /> */}
                        <InputBox
                            {...inputPhone}
                            id="mobile"
                            name="mobile"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.mobile}
                        />

                        {formik.touched.mobile && formik.errors.mobile ? (
                            <small className="error-cls">
                                {formik.errors.mobile}
                            </small>
                        ) : null}
                    </FormGroup>

                    <FormGroup className="form-group mt-5" md={12}>
                        <Label className="mb-2" htmlFor="username">
                            {t('teacehr_red.faculty_email')}
                        </Label>
                        <InputBox
                            {...inputEmail}
                            id="username"
                            name="username"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                            // isDisabled={stepTwoData.mobile ? true : false}
                        />

                        {formik.touched.username && formik.errors.username ? (
                            <small className="error-cls">
                                {formik.errors.username}
                            </small>
                        ) : null}
                    </FormGroup>
                    <div className="mt-5">
                        <Button
                            label={t('teacehr_red.continue')}
                            // btnClass='primary w-100'
                            btnClass={
                                !(formik.dirty && formik.isValid) &&
                                !stepTwoData?.mobile
                                    ? 'default'
                                    : 'primary'
                            }
                            size="large "
                            type="submit"
                            disabled={
                                !(formik.dirty && formik.isValid) &&
                                !stepTwoData?.mobile
                            }
                        />
                    </div>
                </Form>
            </div>
        </Modal.Body>
    );
}

export default StepTwo;
