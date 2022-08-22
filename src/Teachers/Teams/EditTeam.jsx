import React from 'react';
import { Row, Col, Form, Label } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import Layout from '../Layout';
import { Button } from '../../stories/Button';
import { InputBox } from '../../stories/InputBox/InputBox';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { BreadcrumbTwo } from '../../stories/BreadcrumbTwo/BreadcrumbTwo';
import { openNotificationWithIcon, getCurrentUser } from '../../helpers/Utils';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const EditTeam = (props) => {
    const history = useHistory();
    const currentUser = getCurrentUser('current_user');
    const data = (history && history.location && history.location.item) || {};
    const teamId = data && data.team_id;
    console.log(teamId);
    const teamsName = data.team_name;
    const headingDetails = {
        title: 'Edit Team details',

        options: [
            {
                title: 'TeamsList',
                path: '/teacher/teamlist'
            },
            {
                title: 'Edit Team',
                path: '/'
            }
        ]
    };

    const formik = useFormik({
        initialValues: {
            teamName: teamsName
        },

        validationSchema: Yup.object({
            teamName: Yup.string()
                .matches(/^[A-Za-z ]*$/, 'Please enter Team name')
                .max(40)
                .required()
        }),

        onSubmit: (values) => {
            const body = JSON.stringify({
                status: 'ACTIVE',
                team_name: values.teamName
            });
            var config = {
                method: 'put',
                url:
                    process.env.REACT_APP_API_BASE_URL +
                    '/teams/' +
                    currentUser.data[0].user_id,
                headers: {
                    'Content-Type': 'application/json',
                    // Accept: "application/json",
                    Authorization: `Bearer ${currentUser.data[0].token}`
                },
                data: body
            };
            axios(config)
                .then(function (response) {
                    console.log(response);
                    if (response.status === 200) {
                        openNotificationWithIcon(
                            'success',
                            'Team Update Successfully'
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
                                        <Col md={6} className="mb-5 mb-xl-0">
                                            <Label
                                                className="name-req"
                                                htmlFor="firstName"
                                            >
                                                Team Name
                                            </Label>

                                            <InputBox
                                                className={'defaultInput'}
                                                placeholder="Enter Team Name"
                                                id="teamName"
                                                name="teamName"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.teamName}
                                            />

                                            {formik.touched.teamName &&
                                            formik.errors.teamName ? (
                                                <small className="error-cls">
                                                    {formik.errors.teamName}
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
                                                    '/teacher/teamlist'
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

export default withRouter(EditTeam);
