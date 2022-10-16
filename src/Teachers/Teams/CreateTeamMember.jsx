/* eslint-disable indent */
import React,{useEffect, useState} from 'react';
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
// import moment from 'moment';

const CreateTeamMember = (props) => {
    const history = useHistory();
    const { t } = useTranslation();

    const teamID = JSON.parse(localStorage.getItem('teamId'));
    const id =  history && history.location && history.location.item
            ? history.location.item.team_id
            : teamID.team_id;

    const currentUser = getCurrentUser('current_user');
    const [teamMemberData, setTeamMemberData] = useState({});

    const headingDetails = {
        title: t('teacher_teams.create_team_members'),

        options: [
            {
                title: t("teacher_teams.teamslist"),
                path: '/teacher/teamlist'
            },
            {
                title: t("teacher_teams.create_team_members")
            }
        ]
    };
    useEffect(() => {
        handleCreateMemberAPI(id);
    }, [id]);

    async function handleCreateMemberAPI(teamId) {
        var config = {
            method: 'get',
            url:
                process.env.REACT_APP_API_BASE_URL +
                '/teams/' +
                teamId +
                '?status=ACTIVE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${currentUser.data[0].token}`
            }
        };
        await axios(config)
            .then(function (response) {
                if (response.status === 200) {
                    setTeamMemberData(response.data && response.data.data[0]);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const formik = useFormik({
        initialValues: {
            fullName:'',
            age: '',
            grade: '',
            gender: ''
        },

        validationSchema: Yup.object({
            fullName: Yup.string()
                .required('Please Enter valid Full Name')
                .max(40)
                .required(),
                age: Yup.number()
                .integer()
                .min(10, "Min age is 10")
                .max(18, "Max age is 18")
                .required("required"),
            // age: Yup.string()
            //     .matches(/^[0-9\b]+$/, 'Please enter valid age')
            //     .max(2)
            //     .required(),
            // age: Yup.string().required("DOB is Required")
            // .test(
            //   "DOB",
            //   "Please enter a valid date of birth",
            //   (date) => moment().diff(moment(date), "years") <= 18),
            gender: Yup.string().required('Please select valid gender'),
            grade: Yup.string()
                .matches('', 'Please enter valid grade')
                .max(40)
                .required('Please enter valid grade')
        }),

        onSubmit: (values) => {
            if (
                process.env.REACT_APP_TEAM_LENGTH ==
                teamMemberData.student_count
            ) {
                openNotificationWithIcon(
                    'warning',
                    'Team Members Maximum Count All Ready Exist'
                );
            }else{
                const body = {
                    team_id: id,
                    role: 'STUDENT',
                    full_name: values.fullName,
                    qualification: '',
                    Age: values.age,
                    Grade: values.grade,
                    Gender: values.gender,
                    country: values.country
                };
                var config = {
                    method: 'post',
                    url: process.env.REACT_APP_API_BASE_URL + '/students/register',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${currentUser.data[0].token}`
                    },
                    data: body
                };
                axios(config)
                    .then(function (response) {
                        console.log(response);
                        if (response.status === 201) {
                            openNotificationWithIcon(
                                'success',
                                'Team Member Created Successfully'
                            );
                            props.history.push('/teacher/teamlist');
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
            }
            
    });
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
                                                {t(
                                                    'teacher_teams.student_name'
                                                )}
                                            </Label>
                                            <InputBox
                                                className={'defaultInput'}
                                                placeholder={t(
                                                    'teacher_teams.student_name_pl'
                                                )}
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
                                                {t('teacher_teams.age')}
                                            </Label>

                                            <InputBox
                                                className={'defaultInput'}
                                                placeholder={t(
                                                    'teacher_teams.student_age'
                                                )}
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
                                                {t('teacher_teams.grade')}
                                            </Label>
                                            <div className="dropdown CalendarDropdownComp ">
                                                {/* <InputBox
                                                    className={'defaultInput'}
                                                    placeholder={t(
                                                        'teacher_teams.student_grade'
                                                    )}
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
                                                {t('teacher_teams.gender')}
                                            </Label>

                                            <select
                                                name="gender"
                                                className="form-control custom-dropdown"
                                                value={formik.values.gender}
                                                onChange={formik.handleChange}
                                            >
                                                <option value="">
                                                {t(
                                                        'teacher_teams.student_gender'
                                                    )}
                                                </option>
                                                <option value="Male">
                                                {t(
                                                        'teacher_teams.student_gender_male'
                                                    )}
                                                </option>
                                                <option value="Female">
                                                {t(
                                                        'teacher_teams.student_gender_female'
                                                    )}
                                                </option>
                                                <option value="OTHERS">
                                                Prefer not to mention
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
                                                    '/teacher/teamlist'
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

export default withRouter(CreateTeamMember);
