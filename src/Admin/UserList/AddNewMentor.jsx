import React from "react";
import { Row, Col, Form, Label } from "reactstrap";
import {  withRouter } from "react-router-dom";
import "./style.scss";
// import { BsChevronRight, BsFilter, BsFillPauseFill } from "react-icons/bs";
// import { RiAwardFill } from "react-icons/ri";
// import { VscCheck } from "react-icons/vsc";
// import CourseVideo from "../../assets/img/courseVideo.png";
import Layout from "../../Admin/Layout";
// import { BsDot, BsQuestionCircle } from "react-icons/bs";
// import { Accordion } from "react-bootstrap";
// import { AccordionHeader, AccordionBody, AccordionItem } from "reactstrap";
// import User from "../../assets/img/avatar1.png";
import { Button } from "../../stories/Button";
// import { GrDocument } from "react-icons/gr";
// import { AiFillPlayCircle } from "react-icons/ai";

import { InputBox } from "../../stories/InputBox/InputBox";
import * as Yup from "yup";
import { useFormik } from "formik";
import { BreadcrumbTwo } from "../../stories/BreadcrumbTwo/BreadcrumbTwo";
import { AiOutlineInfoCircle } from "react-icons/ai";

const AddNewMentor = (props) => {
    const headingDetails = {
        title: "Add New Mentor Details",

        options: [
            {
                title: "Users List",
                path: "/admin/userlist",
            },
            {
                title: "Add Mentor",
                path: "/admin/add-mentor",
            },
        ],
    };
    // const inputIdeaTitle = {
    //     type: "text",
    //     placeholder: "Enter idea title here...",
    // };
    // const serachprops = {
    //     options: [
    //         { label: 10, value: "Mapusa" },
    //         { label: 20, value: "Vasco" },
    //         { label: 30, value: "Mumbai" },
    //     ],
    //     label: "Select question category",
    //     className: "defaultDropdown",
    // };

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        },

        validationSchema: Yup.object({
            firstName: Yup.string()
                .matches(/^[A-Za-z ]*$/, "Please enter valid name")
                .max(40)
                .required(),
            lastName: Yup.string()
                .matches(/^[A-Za-z ]*$/, "Please enter valid name")
                .max(40)
                .required(),
            email: Yup.string().email("Invalid email format").required("Required"),
        }),

        onSubmit: (values) => {
            const mentor_name1 = values.firstName + "." + values.lastName;
            const email1 = values.email;
            console.log("========", mentor_name1);
            const body = JSON.stringify({
                mentor_name: mentor_name1,
                email: email1,
                // mobile: 9010923117,
            });
            console.log(body);
            // props.mentorCreateAction(body, history);
        },
    });

    return (
        <Layout>
            <div className='EditPersonalDetails new-member-page'>
                <Row>
                    <Col className='col-xl-10 offset-xl-1 offset-md-0'>
                        <BreadcrumbTwo {...headingDetails} />

                        <div>
                            <Form onSubmit={formik.handleSubmit} isSubmitting>
                                <div className='create-ticket'>
                                    <Row>
                                        <Col md={6} className='mb-5 mb-xl-0'>
                                            <Label className='name-req' htmlFor='firstName'>
                        First name (required){" "}
                                            </Label>

                                            <InputBox
                                                className={"defaultInput"}
                                                placeholder='Enter mentor first name'
                                                id='firstName'
                                                name='firstName'
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.firstName}
                                            />

                                            {formik.touched.firstName && formik.errors.firstName ? (
                                                <small className='error-cls'>
                                                    {formik.errors.firstName}
                                                </small>
                                            ) : null}
                                        </Col>
                                        <Col md={6}>
                                            <Label className='name-req' htmlFor='lastName'>
                        Last name (required)
                                            </Label>
                                            <InputBox
                                                className={"defaultInput"}
                                                placeholder='Enter mentor first name'
                                                id='lastName'
                                                name='lastName'
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.lastName}
                                            />
                                            {formik.touched.lastName && formik.errors.lastName ? (
                                                <small className='error-cls'>
                                                    {formik.errors.lastName}
                                                </small>
                                            ) : null}
                                        </Col>
                                    </Row>

                                    <Label className='name-req mt-5' htmlFor='email'>
                    Email address(required)
                                    </Label>

                                    <InputBox
                                        className={"defaultInput"}
                                        placeholder='Enter mentor email address'
                                        id='email'
                                        name='email'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <small className='error-cls'>{formik.errors.email}</small>
                                    ) : null}
                                    <span className='que-text'>
                                        <AiOutlineInfoCircle /> Note: Official login credentials
                    will be sent to your mentor on this email.
                                    </span>
                                </div>

                                <hr className='mt-4 mb-4'></hr>
                                <Row>
                                    <Col className='col-xs-12 col-sm-6'>
                                        <Button
                                            label='Discard'
                                            btnClass='secondary'
                                            size='small'
                                            onClick={() => props.history.push("/admin/userlist")}
                                        />
                                    </Col>
                                    <Col className='submit-btn col-xs-12 col-sm-6'>
                                        <Button
                                            label='Submit details'
                                            type='submit'
                                            btnClass={
                                                !(formik.dirty && formik.isValid)
                                                    ? "default"
                                                    : "primary"
                                            }
                                            size='small'
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

export default withRouter(AddNewMentor);
