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
import { useTranslation } from 'react-i18next';
// import "semantic-ui-css/semantic.min.css";

const EditTeamMember = (props) => {
    const { t } = useTranslation();

    const history = useHistory();
    const currentUser = getCurrentUser('current_user');
    // console.log("==============", history && history);
    const teamMemberData =
        (history && history.location && history.location.item) || {};

    const headingDetails = {
        title: t("teacher_teams.edit_team_member_details"),

        options: [
            {
                title: t("teacher_teams.teamslist"),
                path: '/teacher/teamlist'
            },
            {
                title: t("teacher_teams.edit_team_member")
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
                                                {t("teacher_teams.student_name")}
                                            </Label>
                                            <InputBox
                                                className={'defaultInput'}
                                                placeholder={t("teacher_teams.student_name_pl")}
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
                                                {t("teacher_teams.age")}
                                            </Label>

                                            <InputBox
                                                className={'defaultInput'}
                                                placeholder={t("teacher_teams.student_age")}
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
                                                {t("teacher_teams.grade")}
                                            </Label>
                                            <div className="dropdown CalendarDropdownComp ">
                                                {/* <InputBox
                                                    className={'defaultInput'}
                                                    placeholder={t("teacher_teams.student_grade")}
                                                    id="grade"
                                                    name="grade"
                                                    onChange={
                                                        formik.handleChange
                                                    }
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.grade}
                                                /> */}
                                                <select
                                                name="grade"
                                                className="form-control custom-dropdown"
                                                value={formik.values.grade}
                                                onChange={formik.handleChange}
                                            >
                                                 <option value="">
                                                 Select Grade..
                                                </option>
                                                <option value="6">Grade 6
                                                </option>
                                                <option value="7">Grade 7
                                                </option>
                                                <option value="8">Grade 8
                                                </option>
                                                <option value="9">Grade 9
                                                </option>
                                                <option value="10">Grade 10
                                                </option>
                                                <option value="11">Grade 11
                                                </option>
                                                <option value="12">Grade 12
                                                </option>
                                               
                                            </select>
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
                                                {t("teacher_teams.gender")}
                                            </Label>

                                            <select
                                                name="gender"
                                                className="form-control custom-dropdown"
                                                value={formik.values.gender}
                                                onChange={formik.handleChange}
                                            >
                                                <option value="">
                                                    {t("teacher_teams.gender")}
                                                </option>
                                                <option value="MALE">
                                                    {t("teacher_teams.male")}
                                                </option>
                                                <option value="FEMALE">
                                                    {t("teacher_teams.female")}
                                                </option>
                                                <option value="OTHERS">
                                                    {t("teacher_teams.others")}
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
                                            label={t("teacher_teams.discard")}
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
                                            label={t("teacher_teams.submit")}
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
