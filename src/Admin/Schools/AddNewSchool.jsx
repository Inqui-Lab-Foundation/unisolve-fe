import React from 'react';
import { Row, Col, Form, Label } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import './style.scss';
// import { BsChevronRight, BsFilter, BsFillPauseFill } from "react-icons/bs";
// import { RiAwardFill } from "react-icons/ri";
// import { VscCheck } from "react-icons/vsc";
// import CourseVideo from "../../assets/img/courseVideo.png";
import Layout from '../../Admin/Layout';
// import { BsDot, BsQuestionCircle } from "react-icons/bs";
// import { Accordion } from "react-bootstrap";
// import { AccordionHeader, AccordionBody, AccordionItem } from "reactstrap";
// import User from "../../assets/img/avatar1.png";
import { Button } from '../../stories/Button';
// import { GrDocument } from "react-icons/gr";
// import { AiFillPlayCircle } from "react-icons/ai";
import axios from 'axios';

import { InputBox } from '../../stories/InputBox/InputBox';
import {TextArea} from '../../stories/TextArea/TextArea';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { BreadcrumbTwo } from '../../stories/BreadcrumbTwo/BreadcrumbTwo';
// import { AiOutlineInfoCircle } from "react-icons/ai";
// import { DropDownComp } from '../../stories/DropdownComp/DropdownComp';
import { getCurrentUser } from '../../helpers/Utils';

const AddNewSchool = (props) => {
    const currentUser = getCurrentUser('current_user');

    const headingDetails = {
        title: 'Add New Organization Details',

        options: [
            {
                title: 'School Registration',
                path: '/admin/registered-schools'
            },
            {
                title: 'Add New Organization',
                path: '/admin/register-new-schools'
            }
        ]
    };
    

    const formik = useFormik({
        initialValues: {
            organizationName: '',
            organizationCode: '',
            address: ''
        },

        validationSchema: Yup.object({
            organizationName: Yup.string()
                .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
                .max(40)
                .required(),
            organizationCode: Yup.string()
                .required(),
            address: Yup.string()
                .required('Required')
        }),

        onSubmit: (values) => {
            const organization_name = values.organizationName;
            const organization_code = values.organizationCode;
            const details = values.address;
            const body = JSON.stringify({
                organization_name: organization_name,
                organization_code: organization_code,
                details: details
            });
            var config = {
                method: 'post',
                url:
                    process.env.REACT_APP_API_BASE_URL +
                    '/organizations',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${currentUser.data[0].token}`
                },
                data: body
            };
            axios(config)
                .then(function (response) {
                    if (response.status === 201) {
                        props.history.push('/admin/registered-schools');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        
    });

    return (
        <Layout>
            <div className="EditPersonalDetails new-member-page">
                <Row>
                    <Col className="col-xl-10 offset-xl-1 offset-md-0">
                        <BreadcrumbTwo {...headingDetails} />

                        <div>
                            <Form onSubmit={formik.handleSubmit} isSubmitting>
                                <div className="create-ticket register-block">
                                    <Row>
                                        <Col md={6} className="mb-5 mb-xl-0">
                                            <Label
                                                className="name-req"
                                                htmlFor="organizationName"
                                            >
                                                Organization name
                                            </Label>

                                            <InputBox
                                                className={'defaultInput'}
                                                placeholder="Enter Organization Name"
                                                id="organizationName"
                                                name="organizationName"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={
                                                    formik.values
                                                        .organizationName
                                                }
                                            />

                                            {formik.touched.organizationName &&
                                            formik.errors.organizationName ? 
                                                (
                                                    <small className="error-cls">
                                                        {
                                                            formik.errors
                                                                .organizationName
                                                        }
                                                    </small>
                                                ) : null}
                                        </Col>
                                        <Col md={6}>
                                            <Label
                                                className="name-req"
                                                htmlFor="organizationCode"
                                            >
                                                Organization code
                                            </Label>
                                            <InputBox
                                                className={'defaultInput'}
                                                placeholder="Organization Code"
                                                id="organizationCode"
                                                name="organizationCode"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={
                                                    formik.values
                                                        .organizationCode
                                                }
                                            />
                                            {formik.touched.organizationCode &&
                                            formik.errors.organizationCode ? 
                                                (
                                                    <small className="error-cls">
                                                        {
                                                            formik.errors
                                                                .organizationCode
                                                        }
                                                    </small>
                                                ) : null}
                                        </Col>
                                        <Col md={12}>
                                            <Label
                                                className="name-req mt-5"
                                                htmlFor="address"
                                            >
                                                Address
                                            </Label>
                                            <TextArea className={'defaultInput'}
                                                placeholder="Enter address"
                                                id="address"
                                                name="address"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.address} />

                                            
                                            {formik.touched.address &&
                                            formik.errors.address ? 
                                                (
                                                    <small className="error-cls">
                                                        {formik.errors.address}
                                                    </small>
                                                ) : null}
                                        </Col>
                                        {/* <Col md={6} className="mb-5">
                                            <Form>
                                                <Label>City</Label>
                                                <DropDownComp />
                                            </Form>
                                        </Col>
                                        <Col md={6} className="mb-5">
                                            <Form>
                                                <Label>State</Label>
                                                <DropDownComp />
                                            </Form>
                                        </Col> */}
                                        {/* <Col md={6} className="mb-5">
                                            <Form>
                                                <Label>District</Label>
                                                <DropDownComp />
                                            </Form>
                                        </Col> */}
                                        {/* <Col md={6} className="mb-5">
                                            <Form>
                                                <Label>Country</Label>
                                                <DropDownComp />
                                            </Form>
                                        </Col> */}
                                    </Row>
                                </div>

                                <hr className="mt-4 mb-4"></hr>
                                <Row>
                                    <Col className="col-xs-12 col-sm-6">
                                        <Button
                                            label="Discard"
                                            btnClass="secondary"
                                            size="small"
                                            onClick={() =>
                                                props.history.push(
                                                    '/admin/registered-schools'
                                                )
                                            }
                                        />
                                    </Col>
                                    <Col className="submit-btn col-xs-12 col-sm-6">
                                        <Button
                                            label="Submit details"
                                            type="submit"
                                            btnClass={
                                                !(
                                                    formik.dirty &&
                                                    formik.isValid
                                                )
                                                    ? 'default'
                                                    : 'primary'
                                            }
                                            size="small"
                                        />
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </Layout>
    );
};

export default withRouter(AddNewSchool);
