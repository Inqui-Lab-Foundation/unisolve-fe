/* eslint-disable indent */
import React from 'react';
import { Modal, Form, FormGroup } from 'react-bootstrap';
import { Label } from 'reactstrap';
import { InputBox } from '../stories/InputBox/InputBox';
import { Button } from '../stories/Button';
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { URL, KEY } from '../constants/defaultValues';
import { getNormalHeaders, openNotificationWithIcon } from '../helpers/Utils';
import axios from 'axios';
function ForgotPassword(props) {
    const inputMob = {
        type: 'text',
        className: 'defaultInput'
    };
    const handleClose = () => {
        props.setShow(false);
    };
   
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const formik = useFormik({
        initialValues: {
            mobile: '',
        },

        validationSchema: Yup.object({
            mobile: Yup.string().matches(phoneRegExp, 'Phone Number is not valid').required('Phone Number is Required'),
        }),

        onSubmit: async (values) => {
            console.log(JSON.stringify(values));
            const axiosConfig = getNormalHeaders(KEY.User_API_Key);
            await axios
                .put(
                    `${URL.putResetPassword}`,
                    JSON.stringify(values, null, 2),
                    axiosConfig
                )
                .then((checkOrgRes) => {
                    if (checkOrgRes.status == 202) {
                        props.setShow(false);
                        openNotificationWithIcon(
                            'success',
                            'Temporary Password Sent Successfully'
                        );
                    }
                })
                .catch((err) => {
                    openNotificationWithIcon(
                        'error',
                        'Opps... something went wrong'
                    );
                    return err.response;
                });
        }
    });
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="assign-evaluator ChangePSWModal teacher-register-modal"
            backdrop="static"
        >
            <Modal.Header closeButton
             onHide={handleClose}>
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    className="w-100 d-block text-center"
                >
                    Forgot Password
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form
                    className="form-row row mb-5 mt-3 py-5"
                    onSubmit={formik.handleSubmit}
                    isSubmitting
                >
                    <FormGroup className="form-group" md={12}>
                        
                        <Label className="mb-2" htmlFor="mobile">
                            Enter Mobile Number
                        </Label>
                        <InputBox
                            {...inputMob}
                            id="mobile"
                            name="mobile"
                            placeholder="Please enter mobile number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.mobile}
                        />
                        {formik.touched.mobile &&
                        formik.errors.mobile ? (
                            <small className="error-cls">
                                {formik.errors.mobile}
                            </small>
                        ) : null}
                    </FormGroup>
                    <div className="mt-5">
                        {/* <Link
                            exact='true'
                            // onSubmit={formik.handleSubmit}

                            // to='/admin/forgotpassword'
                            // onClick={formik.handleSubmit}
                            className='text-link pt-1'
                        >
                            Generate Link
                        </Link> */}
                        <Button
                            label="Generate Password"
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
        </Modal>
    );
}

export default ForgotPassword;
