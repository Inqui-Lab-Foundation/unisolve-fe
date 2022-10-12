/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import { Modal, Form, FormGroup } from 'react-bootstrap';
import { Label } from 'reactstrap';
import { InputBox } from '../../stories/InputBox/InputBox';
import { Button } from '../../stories/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { URL, KEY } from '../../constants/defaultValues';
import { getNormalHeaders } from '../../helpers/Utils';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function StepOne({
    setOrgData,
    setPopUp,
    setShow,
    setHideOne,
    setHideTwo,
    ...props
}) {
    const { t } = useTranslation();
    const [data, setData] = useState(false);
    const [discCode, setDiscCode] = useState('');
    const inputDICE = {
        type: 'text',
        placeholder: `${t('teacehr_red.dice_place')}`,
        className: 'defaultInput'
    };

    const formik = useFormik({
        initialValues: {
            organization_code: ''
        },

        validationSchema: Yup.object({
            organization_code: Yup.string().required('Required')
        }),

        onSubmit: async (values) => {
            const axiosConfig = getNormalHeaders(KEY.User_API_Key);
            const discC = values.organization_code;
            setDiscCode(discC);
            await axios
                .post(
                    `${URL.checkOrg}`,
                    JSON.stringify(values, null, 2),
                    axiosConfig
                )
                .then((checkOrgRes) => {
                    if (checkOrgRes?.status == 200) {
                        if (checkOrgRes?.data?.data[0].mentor == null) {
                            if (
                                Object.keys(checkOrgRes?.data?.data[0]).length
                            ) {
                                setOrgData(checkOrgRes?.data?.data[0]);
                                setHideOne(false);
                                setHideTwo(true);
                            } else {
                                formik.setErrors({
                                    organization_code:
                                        'Oops..! DISE Code seems incorrect'
                                });
                            }
                        } else {
                            formik.setErrors({
                                organization_code:
                                    'Another Teacher is already registered in given School'
                            });
                        }
                    } else {
                        formik.setErrors({
                            organization_code:
                                'Oops..! DISE Code seems incorrect 2'
                        });
                    }
                })
                .catch((err) => {
                    setData(true);
                    return err.response;
                });
        }
    });
    useEffect(() => {
        setData(false);
    }, [formik.values.organization_code]);

    const handleOnClick = (e) => {
        console.log(e);
        props.disecodes(discCode);
        setPopUp(true);
        setHideOne(false);
        setShow(false);
    };

    return (
        <Modal.Body>
            <Form
                className="form-row row mb-5 mt-3 py-5"
                onSubmit={formik.handleSubmit}
                isSubmitting
            >
                <FormGroup className="form-group" md={12}>
                    <Label className="mb-2" htmlFor="organization_code">
                    {t('teacehr_red.dise')}
                    </Label>
                    <InputBox
                        {...inputDICE}
                        id="organization_code"
                        name="organization_code"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.organization_code}
                    />
                    {formik.touched.organization_code &&
                    formik.errors.organization_code ? (
                        <small className="error-cls">
                            {formik.errors.organization_code}
                        </small>
                    ) : data ? (
                        <p>
                            Entered DISE Code is Invalid.
                            <a onClick={(e) => handleOnClick(e)}>
                                <u>Click here</u>
                            </a>
                            {''} to request to Add School Information.
                        </p>
                    ) : null}
                    {/* <span>Please enter your school DISE code to continue</span> */}
                </FormGroup>
                <div className="mt-5">
                    <Button
                        label={t('teacehr_red.continue')}
                        // btnClass='primary w-100'
                        btnClass={
                            !(formik.dirty && formik.isValid)
                                ? 'default'
                                : 'primary'
                        }
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
