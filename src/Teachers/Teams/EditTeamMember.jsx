/* eslint-disable indent */
import React from 'react';
import './styles.scss';
import { Row, Col, Form, Label } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import Layout from '../Layout';
import { Button } from '../../stories/Button';
import { InputBox } from '../../stories/InputBox/InputBox';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { BreadcrumbTwo } from '../../stories/BreadcrumbTwo/BreadcrumbTwo';
// import { DatePicker } from "antd";
import { openNotificationWithIcon, getCurrentUser } from '../../helpers/Utils';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
// import "semantic-ui-css/semantic.min.css";

const EditTeamMember = (props) => {
    console.log(props);
    const history = useHistory();
    const currentUser = getCurrentUser('current_user');
    // console.log("==============", history && history);
    const teamMemberData =
        (history && history.location && history.location.item) || {};

    // const DOB = teamMemberData.date_of_birth.toISOString();
    // console.log(
    //   "================DOB",
    //   moment(teamMemberData.date_of_birth).format("MM-DD-YYYY")
    // );
    // let dateStr = "Fri Apr 20 2020 00:00:00 GMT+0530 (India Standard Time)";
    // console.log(new Date(teamMemberData.date_of_birth).toISOString());
    const headingDetails = {
        title: 'Edit Team Members details',

        options: [
            {
                title: 'TeamsList',
                path: '/teacher/teamlist'
            },
            {
                title: 'Edit Team Member',
                path: '/'
            }
        ]
    };

    const formik = useFormik({
        initialValues: {
            fullName: teamMemberData && teamMemberData.full_name,
            age: JSON.stringify(teamMemberData && teamMemberData.Age),
            grade: teamMemberData && teamMemberData.Grade,
            gender: teamMemberData && teamMemberData.Gender
        },

        validationSchema: Yup.object({
            fullName: Yup.string()
                .required('Please Give valid FullName')
                .max(40)
                .required(),
            age: Yup.string()
                .matches(/^[0-9\b]+$/, 'Please enter valid age')
                .max(2)
                .required(),
            gender: Yup.string().required('Please select valid gender'),
            grade: Yup.string()
                .matches('', 'Please enter valid grade')
                .max(40)
                .required('Please enter valid grade')
        }),

        onSubmit: (values) => {
            const body = {
                team_id: teamMemberData.team_id,
                role: 'STUDENT',
                full_name: values.fullName,
                Age: values.age,
                Grade: values.grade,
                Gender: values.gender
            };
            var config = {
                method: 'put',
                url:
                    process.env.REACT_APP_API_BASE_URL +
                    '/students/' +
                    teamMemberData.student_id,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${currentUser.data[0].token}`
                },
                data: body
            };
            axios(config)
                .then(function (response) {
                    if (response.status === 200) {
                        openNotificationWithIcon(
                            'success',
                            'Team Member Update Successfully'
                        );
                        handleView(teamMemberData);
                    } else {
                        openNotificationWithIcon(
                            'error',
                            'Opps! Something Wrong'
                        );
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    });

    const handleView = (item) => {
        history.push({
            pathname: '/teacher/view-team-member',
            item: item
        });
    };
    return (
        <Layout>
            <div className="EditPersonalDetails new-member-page">
                <Row>
                    <Col className="col-xl-10 offset-xl-1 offset-md-0">
                        <BreadcrumbTwo {...headingDetails} />

                        <div>
                            <Form onSubmit={formik.handleSubmit} isSubmitting>
                                <div className="create-ticket register-blockt">
                                    <Row>
                                        <Col md={6}>
                                            <Label
                                                className="name-req"
                                                htmlFor="fullName"
                                            >
                                                Student Name
                                            </Label>
                                            <InputBox
                                                className={'defaultInput'}
                                                placeholder="Enter Student Name"
                                                id="fullName"
                                                name="fullName"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.fullName}
                                            />
                                            {formik.touched.fullName &&
                                            formik.errors.fullName ? (
                                                <small className="error-cls">
                                                    {formik.errors.fullName}
                                                </small>
                                            ) : null}
                                        </Col>
                                        <Col md={6} className="mb-5 mb-xl-0">
                                            <Label
                                                className="name-req"
                                                htmlFor="age"
                                            >
                                                Age
                                            </Label>

                                            <InputBox
                                                className={'defaultInput'}
                                                placeholder="Enter Age"
                                                id="age"
                                                name="age"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.age}
                                            />

                                            {formik.touched.age &&
                                            formik.errors.age ? (
                                                <small className="error-cls">
                                                    {formik.errors.age}
                                                </small>
                                            ) : null}
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={6}>
                                            <Label
                                                className="name-req"
                                                htmlFor="grade"
                                            >
                                                Grade
                                            </Label>
                                            <div className="dropdown CalendarDropdownComp ">
                                                <InputBox
                                                    className={'defaultInput'}
                                                    placeholder="Enter grade"
                                                    id="grade"
                                                    name="grade"
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.grade}
                                                />
                                            </div>
                                            {formik.touched.grade &&
                                            formik.errors.grade ? (
                                                <small className="error-cls">
                                                    {formik.errors.grade}
                                                </small>
                                            ) : null}
                                        </Col>
                                        <Col md={6} className="mb-5 mb-xl-0">
                                            <Label
                                                className="name-req"
                                                htmlFor="gender"
                                            >
                                                Gender
                                            </Label>

                                            <select
                                                name="gender"
                                                className="form-control custom-dropdown"
                                                value={formik.values.gender}
                                                onChange={formik.handleChange}
                                            >
                                                <option value="">
                                                    Select Gender..
                                                </option>
                                                <option value="MALE">
                                                    MALE
                                                </option>
                                                <option value="FEMALE">
                                                    FEMALE
                                                </option>
                                                <option value="OTHERS">
                                                    OTHERS
                                                </option>
                                            </select>

                                            {formik.touched.gender &&
                                            formik.errors.gender ? (
                                                <small className="error-cls">
                                                    {formik.errors.gender}
                                                </small>
                                            ) : null}
                                        </Col>
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
                                                    '/teacher/view-team-member'
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

export default withRouter(EditTeamMember);
