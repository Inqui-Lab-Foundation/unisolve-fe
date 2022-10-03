/* eslint-disable indent */
import React from 'react';
import { Modal, Form, FormGroup } from 'react-bootstrap';
import { Label } from 'reactstrap';
import { InputBox } from '../stories/InputBox/InputBox';
import { Button } from '../stories/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { URL, KEY } from '../constants/defaultValues';
import { getNormalHeaders, openNotificationWithIcon } from '../helpers/Utils';
import axios from 'axios';
function SchoolRegisterPopup(props) {
    console.log(props.diesCode1);
    const inputDICE = {
        type: 'text',
        className: 'defaultInput'
    };
    const handleClose = () => {
        props.setShow(false);
    };
    const formik = useFormik({
        initialValues: {
            principal_name: '',
            principal_mobile: '',
            principal_email: '',
            organization_name: '',
            organization_code: props.diesCode1,
            city: '',
            district: '',
            state: '',
            country: '',
            status: 'INACTIVE'
        },

        validationSchema: Yup.object({
            principal_name: Yup.string().required('Required'),
            principal_mobile: Yup.string().required('Required'),
            principal_email: Yup.string().required('Required'),
            organization_name: Yup.string().required('Required'),
            organization_code: Yup.string().required('Required'),
            city: Yup.string().required('Required'),
            district: Yup.string().required('Required'),
            state: Yup.string().required('Required'),
            country: Yup.string().required('Required')
        }),

        onSubmit: async (values) => {
            console.log(JSON.stringify(values));
            const axiosConfig = getNormalHeaders(KEY.User_API_Key);
            await axios
                .post(
                    `${URL.createOrganization}`,
                    JSON.stringify(values, null, 2),
                    axiosConfig
                )
                .then((checkOrgRes) => {
                    if (checkOrgRes.status == 201) {
                        openNotificationWithIcon(
                            'success',
                            'School Create Successfully'
                        );
                        props.setShow(false);
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
            <Modal.Header closeButton onHide={handleClose}>
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    className="w-100 d-block text-center"
                >
                    REGISTER
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form
                    className="form-row row mb-5 mt-3 py-5"
                    onSubmit={formik.handleSubmit}
                    isSubmitting
                >
                    <FormGroup className="form-group" md={12}>
                        <Label className="mb-2" htmlFor="principal_name">
                            Principal Name
                        </Label>
                        <InputBox
                            {...inputDICE}
                            id="principal_name"
                            name="principal_name"
                            placeholder="Please enter principal name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.principal_name}
                        />
                        {formik.touched.principal_name &&
                        formik.errors.principal_name ? (
                            <small className="error-cls">
                                {formik.errors.principal_name}
                            </small>
                        ) : null}
                        <Label className="mb-2" htmlFor="principal_mobile">
                            Principal Mobile
                        </Label>
                        <InputBox
                            {...inputDICE}
                            id="principal_mobile"
                            name="principal_mobile"
                            placeholder="Please enter principal mobile number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.principal_mobile}
                        />
                        {formik.touched.principal_mobile &&
                        formik.errors.principal_mobile ? (
                            <small className="error-cls">
                                {formik.errors.principal_mobile}
                            </small>
                        ) : null}
                        <Label className="mb-2" htmlFor="principal_email">
                            Principal Email
                        </Label>
                        <InputBox
                            {...inputDICE}
                            id="principal_email"
                            name="principal_email"
                            placeholder="Please enter principal email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.principal_email}
                        />
                        {formik.touched.principal_email &&
                        formik.errors.principal_email ? (
                            <small className="error-cls">
                                {formik.errors.principal_email}
                            </small>
                        ) : null}
                        <Label className="mb-2" htmlFor="organization_name">
                            Organization Name
                        </Label>
                        <InputBox
                            {...inputDICE}
                            id="organization_name"
                            name="organization_name"
                            placeholder="Please enter organization name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.organization_name}
                        />
                        {formik.touched.organization_name &&
                        formik.errors.organization_name ? (
                            <small className="error-cls">
                                {formik.errors.organization_name}
                            </small>
                        ) : null}
                        <Label className="mb-2" htmlFor="organization_code">
                            Organization Code
                        </Label>
                        <InputBox
                            {...inputDICE}
                            id="organization_code"
                            name="organization_code"
                            placeholder="Please enter organization code"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.organization_code}
                        />
                        {formik.touched.organization_code &&
                        formik.errors.organization_code ? (
                            <small className="error-cls">
                                {formik.errors.organization_code}
                            </small>
                        ) : null}
                        <Label className="mb-2" htmlFor="city">
                            City
                        </Label>
                        <InputBox
                            {...inputDICE}
                            id="city"
                            name="city"
                            placeholder="Please enter city"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.city}
                        />
                        {formik.touched.city && formik.errors.city ? (
                            <small className="error-cls">
                                {formik.errors.city}
                            </small>
                        ) : null}
                        <Label className="mb-2" htmlFor="district">
                            District
                        </Label>
                        <InputBox
                            {...inputDICE}
                            id="district"
                            name="district"
                            placeholder="Please enter district"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.district}
                        />
                        {formik.touched.district && formik.errors.district ? (
                            <small className="error-cls">
                                {formik.errors.district}
                            </small>
                        ) : null}
                        <Label className="mb-2" htmlFor="state">
                            State
                        </Label>
                        <InputBox
                            {...inputDICE}
                            id="state"
                            name="state"
                            placeholder="Please enter state"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.state}
                        />
                        {formik.touched.state && formik.errors.state ? (
                            <small className="error-cls">
                                {formik.errors.state}
                            </small>
                        ) : null}
                        <Label className="mb-2" htmlFor="country">
                            Country
                        </Label>
                        <InputBox
                            {...inputDICE}
                            id="country"
                            name="country"
                            placeholder="Please enter country"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.country}
                        />
                        {formik.touched.country && formik.errors.country ? (
                            <small className="error-cls">
                                {formik.errors.country}
                            </small>
                        ) : null}
                    </FormGroup>
                    <div className="mt-5">
                        <Button
                            label="CONTINUE"
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

export default SchoolRegisterPopup;
