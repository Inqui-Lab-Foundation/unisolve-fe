/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Label, Input, Card, CardBody } from 'reactstrap';
import axios from 'axios';
import Layout from '../Layout';
import { Button } from '../../stories/Button';
import { BreadcrumbTwo } from '../../stories/BreadcrumbTwo/BreadcrumbTwo';
import { getCurrentUser, openNotificationWithIcon } from '../../helpers/Utils';
import { InputBox } from '../../stories/InputBox/InputBox';
const RoadMap = (props) => {
    const currentUser = getCurrentUser('current_user');
    const [teacherData, setTeacherData] = useState({});
    const [schoolData, setStudentData] = useState({});
    const headingDetails = {
        title: 'Road Map',
        options: [
            {
                title: 'Home',
                path: '/admin/dashboard'
            },
            {
                title: 'Road Map',
                path: '/admin/road-map'
            }
        ]
    };

    useEffect(() => {
        var config = {
            method: 'get',
            url: process.env.REACT_APP_API_BASE_URL + '/auth/roadMap',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${currentUser.data[0].token}`
            }
        };
        axios(config)
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response.data.data[0]);
                    setTeacherData(response.data.data[0].student);
                    setStudentData(response.data.data[1].teacher);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    const inputStartData = {
        type: 'text',
        placeholder: 'Start Date'
    };
    const inputEndData = {
        type: 'text',
        placeholder: 'End Date'
    };
    return (
        <Layout>
            <Container className="mt-5 pt-5 dynamic-form mb-5 pb-5">
                <Row>
                    <div className="col-6">
                        <BreadcrumbTwo {...headingDetails} />
                    </div>
                </Row>

                <Row>
                    <Card className="w-100 p-4 row">
                        <CardBody>
                            <div className="w-100 my-5"></div>
                            <h2 className="my-5">Teacher Journey Road Map</h2>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <Label className="mb-2" htmlFor="text">
                                        Registration
                                    </Label>
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputStartData}
                                        value={
                                            teacherData &&
                                            teacherData.registration &&
                                            teacherData.registration.start_date
                                        }
                                    />
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputEndData}
                                        value={
                                            teacherData &&
                                            teacherData.registration &&
                                            teacherData.registration.end_date
                                        }
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <Label className="mb-2" htmlFor="text">
                                        Pre Survey
                                    </Label>
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputStartData}
                                        value={
                                            teacherData &&
                                            teacherData.pre_survey &&
                                            teacherData.pre_survey.start_date
                                        }
                                    />
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputEndData}
                                        value={
                                            teacherData &&
                                            teacherData.pre_survey &&
                                            teacherData.pre_survey.end_date
                                        }
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <Label className="mb-2" htmlFor="text">
                                        Dashboard
                                    </Label>
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputStartData}
                                        value={
                                            teacherData &&
                                            teacherData.dashboard &&
                                            teacherData.dashboard.start_date
                                        }
                                    />
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputEndData}
                                        value={
                                            teacherData &&
                                            teacherData.dashboard &&
                                            teacherData.dashboard.end_date
                                        }
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <Label className="mb-2" htmlFor="text">
                                        Course
                                    </Label>
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputStartData}
                                        value={
                                            teacherData &&
                                            teacherData.course &&
                                            teacherData.course.start_date
                                        }
                                    />
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputEndData}
                                        value={
                                            teacherData &&
                                            teacherData.course &&
                                            teacherData.course.end_date
                                        }
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <Label className="mb-2" htmlFor="text">
                                        Team
                                    </Label>
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputStartData}
                                        value={
                                            teacherData &&
                                            teacherData.teams &&
                                            teacherData.teams.start_date
                                        }
                                    />
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputEndData}
                                        value={
                                            teacherData &&
                                            teacherData.teams &&
                                            teacherData.teams.end_date
                                        }
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <Label className="mb-2" htmlFor="text">
                                        Post Survery
                                    </Label>
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputStartData}
                                        value={
                                            teacherData &&
                                            teacherData.post_survery &&
                                            teacherData.post_survery.start_date
                                        }
                                    />
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputEndData}
                                        value={
                                            teacherData &&
                                            teacherData.post_survery &&
                                            teacherData.post_survery.end_date
                                        }
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <Label className="mb-2" htmlFor="text">
                                        Certificate
                                    </Label>
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputStartData}
                                        value={
                                            teacherData &&
                                            teacherData.certificate &&
                                            teacherData.certificate.start_date
                                        }
                                    />
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputEndData}
                                        value={
                                            teacherData &&
                                            teacherData.certificate &&
                                            teacherData.certificate.end_date
                                        }
                                    />
                                </div>
                            </Row>
                            <h2 className="my-5">Student Journey Road Map</h2>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <Label className="mb-2" htmlFor="text">
                                        Registration
                                    </Label>
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputStartData}
                                        value={
                                            teacherData &&
                                            teacherData.registration &&
                                            teacherData.registration.start_date
                                        }
                                    />
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputEndData}
                                        value={
                                            teacherData &&
                                            teacherData.registration &&
                                            teacherData.registration.end_date
                                        }
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <Label className="mb-2" htmlFor="text">
                                        Pre Survey
                                    </Label>
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputStartData}
                                        value={
                                            teacherData &&
                                            teacherData.pre_survey &&
                                            teacherData.pre_survey.start_date
                                        }
                                    />
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputEndData}
                                        value={
                                            teacherData &&
                                            teacherData.pre_survey &&
                                            teacherData.pre_survey.end_date
                                        }
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <Label className="mb-2" htmlFor="text">
                                        Dashboard
                                    </Label>
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputStartData}
                                        value={
                                            teacherData &&
                                            teacherData.dashboard &&
                                            teacherData.dashboard.start_date
                                        }
                                    />
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputEndData}
                                        value={
                                            teacherData &&
                                            teacherData.dashboard &&
                                            teacherData.dashboard.end_date
                                        }
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <Label className="mb-2" htmlFor="text">
                                        Course
                                    </Label>
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputStartData}
                                        value={
                                            teacherData &&
                                            teacherData.course &&
                                            teacherData.course.start_date
                                        }
                                    />
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputEndData}
                                        value={
                                            teacherData &&
                                            teacherData.course &&
                                            teacherData.course.end_date
                                        }
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <Label className="mb-2" htmlFor="text">
                                        Team
                                    </Label>
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputStartData}
                                        value={
                                            teacherData &&
                                            teacherData.teams &&
                                            teacherData.teams.start_date
                                        }
                                    />
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputEndData}
                                        value={
                                            teacherData &&
                                            teacherData.teams &&
                                            teacherData.teams.end_date
                                        }
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <Label className="mb-2" htmlFor="text">
                                        Post Survery
                                    </Label>
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputStartData}
                                        value={
                                            teacherData &&
                                            teacherData.post_survery &&
                                            teacherData.post_survery.start_date
                                        }
                                    />
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputEndData}
                                        value={
                                            teacherData &&
                                            teacherData.post_survery &&
                                            teacherData.post_survery.end_date
                                        }
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <Label className="mb-2" htmlFor="text">
                                        Certificate
                                    </Label>
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputStartData}
                                        value={
                                            teacherData &&
                                            teacherData.certificate &&
                                            teacherData.certificate.start_date
                                        }
                                    />
                                </div>
                                <div className="col-md-2">
                                    <InputBox
                                        {...inputEndData}
                                        value={
                                            teacherData &&
                                            teacherData.certificate &&
                                            teacherData.certificate.end_date
                                        }
                                    />
                                </div>
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
                <Row className="py-5">
                    <Col md={6}>
                        <Button
                            btnClass="default "
                            size="small"
                            label="Cancel"
                            // onClick={() =>
                            //     props.history.push('/admin/dashboard')
                            // }
                        />
                    </Col>
                    <Col md={6} className="text-right">
                        <Button
                            btnClass="primary "
                            size="small"
                            label="Submit"
                            // onClick={() =>
                            //     props.history.push('/admin/dashboard')
                            // }
                        />
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
export default RoadMap;
