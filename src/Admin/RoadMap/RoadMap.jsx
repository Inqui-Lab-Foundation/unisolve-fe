/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Container, Row, Col, Label, Input, Card, CardBody } from 'reactstrap';
import axios from 'axios';
import Layout from '../Layout';
import { Button } from '../../stories/Button';
import { BreadcrumbTwo } from '../../stories/BreadcrumbTwo/BreadcrumbTwo';
import { getCurrentUser, openNotificationWithIcon } from '../../helpers/Utils';
import { InputBox } from '../../stories/InputBox/InputBox';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { SpaceContext } from 'antd/lib/space';

const RoadMap = (props) => {
    const currentUser = getCurrentUser('current_user');
    const [teacherData, setTeacherData] = useState({});
    const [schoolData, setStudentData] = useState({});
    const [count, setCount] = useState(0);

    const [teacherRigStart, setTeacherRigStart] = useState(new Date());
    const [teacherRigEnd, setTeacherRigEnd] = useState(new Date());

    const [teacherPreStart, setTeacherPreStart] = useState(new Date());
    const [teacherPreEnd, setTeacherPreEnd] = useState(new Date());
    const [teacherDashStart, setTeacherDashStart] = useState(new Date());
    const [teacherDashEnd, setTeacherDashEnd] = useState(new Date());
    const [teacherCourseStart, setTeacherCourseStart] = useState(new Date());
    const [teacherCourseEnd, setTeacherCourseEnd] = useState(new Date());
    const [teacherTeamsStart, setTeacherTeamsStart] = useState(new Date());
    const [teacherTeamsEnd, setTeacherTeamsEnd] = useState(new Date());
    const [teacherPostStart, setTeacherPostStart] = useState(new Date());
    const [teacherPostEnd, setTeacherPostEnd] = useState(new Date());
    const [teacherCirteStart, setTeacherCirteStart] = useState(new Date());
    const [teacherCirteEnd, setTeacherCirteEnd] = useState(new Date());
    const [studentRigStart, setStudentRigStart] = useState(new Date());
    const [studentRigEnd, setStudentRigEnd] = useState(new Date());

    const [studentPreStart, setStudentPreStart] = useState(new Date());
    const [studentPreEnd, setStudentPreEnd] = useState(new Date());

    const [studentDashStart, setStudentDashStart] = useState(new Date());
    const [studentDashEnd, setStudentDashEnd] = useState(new Date());

    const [studentCourseStart, setStudentCourseStart] = useState(new Date());
    const [studentCourseEnd, setStudentCourseEnd] = useState(new Date());

    const [studentTeamsStart, setStudentTeamsStart] = useState(new Date());
    const [studentTeamsEnd, setStudentTeamsEnd] = useState(new Date());

    const [studentPostStart, setStudentPostStart] = useState(new Date());
    const [studentPostEnd, setStudentPostEnd] = useState(new Date());

    const [studentCirteStart, setStudentCirteStart] = useState(new Date());
    const [studentCirteEnd, setStudentCirteEnd] = useState(new Date());
    // const headingDetails = {
    //     title: 'Schedule Roadmap'
    // };

    useEffect(async () => {
        var config = {
            method: 'get',
            url: process.env.REACT_APP_API_BASE_URL + '/auth/roadMap',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${currentUser.data[0].token}`
            }
        };
        await axios(config)
            .then(function (response) {
                if (response.status === 200) {
                    setStudentData(response.data.data[0].student);
                    setTeacherData(response.data.data[0].teacher);
                    setTeacherRigStart(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].teacher &&
                                response.data.data[0].teacher.registration &&
                                response.data.data[0].teacher.registration
                                    .start_date
                        )
                    );
                    setTeacherRigEnd(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].teacher &&
                                response.data.data[0].teacher.registration &&
                                response.data.data[0].teacher.registration
                                    .end_date
                        )
                    );
                    setTeacherPreStart(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].teacher &&
                                response.data.data[0].teacher.pre_survey &&
                                response.data.data[0].teacher.pre_survey
                                    .start_date
                        )
                    );
                    setTeacherPreEnd(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].teacher &&
                                response.data.data[0].teacher.pre_survey &&
                                response.data.data[0].teacher.pre_survey
                                    .end_date
                        )
                    );
                    setTeacherDashStart(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].teacher &&
                                response.data.data[0].teacher.dashboard &&
                                response.data.data[0].teacher.dashboard
                                    .start_date
                        )
                    );
                    setTeacherDashEnd(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].teacher &&
                                response.data.data[0].teacher.dashboard &&
                                response.data.data[0].teacher.dashboard.end_date
                        )
                    );
                    setTeacherCourseStart(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].teacher &&
                                response.data.data[0].teacher.course &&
                                response.data.data[0].teacher.teams.start_date
                        )
                    );
                    setTeacherCourseEnd(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].teacher &&
                                response.data.data[0].teacher.course &&
                                response.data.data[0].teacher.teams.end_date
                        )
                    );
                    setTeacherTeamsStart(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].teacher &&
                                response.data.data[0].teacher.teams &&
                                response.data.data[0].teacher.teams.start_date
                        )
                    );
                    setTeacherTeamsEnd(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].teacher &&
                                response.data.data[0].teacher.teams &&
                                response.data.data[0].teacher.teams.end_date
                        )
                    );
                    setTeacherPostStart(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].teacher &&
                                response.data.data[0].teacher.post_survery &&
                                response.data.data[0].teacher.post_survery
                                    .start_date
                        )
                    );
                    setTeacherPostEnd(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].teacher &&
                                response.data.data[0].teacher.post_survery &&
                                response.data.data[0].teacher.post_survery
                                    .end_date
                        )
                    );
                    setTeacherCirteStart(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].teacher &&
                                response.data.data[0].teacher.certificate
                                    .start_date
                        )
                    );
                    setTeacherCirteEnd(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].teacher &&
                                response.data.data[0].teacher.certificate
                                    .end_date
                        )
                    );
                    setStudentRigStart(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].student &&
                                response.data.data[0].student.registration &&
                                response.data.data[0].student.registration
                                    .start_date
                        )
                    );
                    setStudentRigEnd(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].student &&
                                response.data.data[0].student.registration &&
                                response.data.data[0].student.registration
                                    .end_date
                        )
                    );

                    setStudentPreStart(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].student &&
                                response.data.data[0].student.pre_survey &&
                                response.data.data[0].student.pre_survey
                                    .start_date
                        )
                    );
                    setStudentPreEnd(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].student &&
                                response.data.data[0].student.pre_survey &&
                                response.data.data[0].student.pre_survey
                                    .end_date
                        )
                    );
                    setStudentDashStart(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].student &&
                                response.data.data[0].student.dashboard &&
                                response.data.data[0].student.dashboard
                                    .start_date
                        )
                    );
                    setStudentDashEnd(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].student &&
                                response.data.data[0].student.dashboard &&
                                response.data.data[0].student.dashboard.end_date
                        )
                    );
                    setStudentCourseStart(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].student &&
                                response.data.data[0].student.course &&
                                response.data.data[0].student.course.start_date
                        )
                    );
                    setStudentCourseEnd(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].student &&
                                response.data.data[0].student.course &&
                                response.data.data[0].student.course.end_date
                        )
                    );
                    setStudentTeamsStart(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].student &&
                                response.data.data[0].student.teams &&
                                response.data.data[0].student.teams.start_date
                        )
                    );
                    setStudentTeamsEnd(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].student &&
                                response.data.data[0].student.teams &&
                                response.data.data[0].student.teams.end_date
                        )
                    );
                    setStudentPostStart(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].student &&
                                response.data.data[0].student.post_survery &&
                                response.data.data[0].student.post_survery
                                    .start_date
                        )
                    );
                    setStudentPostEnd(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].student &&
                                response.data.data[0].student.post_survery &&
                                response.data.data[0].student.post_survery
                                    .end_date
                        )
                    );
                    setStudentCirteStart(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].student &&
                                response.data.data[0].student.certificate &&
                                response.data.data[0].student.certificate
                                    .start_date
                        )
                    );
                    setStudentCirteEnd(
                        new Date(
                            response.data.data[0] &&
                                response.data.data[0].student &&
                                response.data.data[0].student.certificate &&
                                response.data.data[0].student.certificate
                                    .end_date
                        )
                    );
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [count]);
    const inputStartData = {
        type: 'text',
        placeholder: 'Start Date'
    };
    const inputEndData = {
        type: 'text',
        placeholder: 'End Date'
    };

    const handleClick = () => {
        const registration = {
            start_date: moment(teacherRigStart).format('yyyy-MM-DD'),
            end_date: moment(teacherRigEnd).format('yyyy-MM-DD')
        };
        const pre_survey = {
            start_date: moment(teacherPreStart).format('yyyy-MM-DD'),
            end_date: moment(teacherPreEnd).format('yyyy-MM-DD')
        };
        const dashboard = {
            start_date: moment(teacherDashStart).format('yyyy-MM-DD'),
            end_date: moment(teacherDashEnd).format('yyyy-MM-DD')
        };
        const course = {
            start_date: moment(teacherCourseStart).format('yyyy-MM-DD'),
            end_date: moment(teacherCourseEnd).format('yyyy-MM-DD')
        };
        const teams = {
            start_date: moment(teacherTeamsStart).format('yyyy-MM-DD'),
            end_date: moment(teacherTeamsEnd).format('yyyy-MM-DD')
        };
        const post_survery = {
            start_date: moment(teacherPostStart).format('yyyy-MM-DD'),
            end_date: moment(teacherPostEnd).format('yyyy-MM-DD')
        };
        const certificate = {
            start_date: moment(teacherCirteStart).format('yyyy-MM-DD'),
            end_date: moment(teacherCirteEnd).format('yyyy-MM-DD')
        };
        const teacher = {
            registration,
            pre_survey,
            dashboard,
            course,
            teams,
            post_survery,
            certificate
        };

        const registration1 = {
            start_date: moment(studentRigStart).format('yyyy-MM-DD'),
            end_date: moment(studentRigEnd).format('yyyy-MM-DD')
        };
        const pre_survey1 = {
            start_date: moment(studentPreStart).format('yyyy-MM-DD'),
            end_date: moment(studentPreEnd).format('yyyy-MM-DD')
        };
        const dashboard1 = {
            start_date: moment(studentDashStart).format('yyyy-MM-DD'),
            end_date: moment(studentDashEnd).format('yyyy-MM-DD')
        };
        const course1 = {
            start_date: moment(studentCourseStart).format('yyyy-MM-DD'),
            end_date: moment(studentCourseEnd).format('yyyy-MM-DD')
        };
        const teams1 = {
            start_date: moment(studentTeamsStart).format('yyyy-MM-DD'),
            end_date: moment(studentTeamsEnd).format('yyyy-MM-DD')
        };
        const post_survery1 = {
            start_date: moment(studentPostStart).format('yyyy-MM-DD'),
            end_date: moment(studentPostEnd).format('yyyy-MM-DD')
        };
        const certificate1 = {
            start_date: moment(studentCirteStart).format('yyyy-MM-DD'),
            end_date: moment(studentCirteEnd).format('yyyy-MM-DD')
        };
        const student = {
            registration: registration1,
            pre_survey: pre_survey1,
            dashboard: dashboard1,
            course: course1,
            teams: teams1,
            post_survery: post_survery1,
            certificate: certificate1
        };
        const body = { teacher, student };
        var config = {
            method: 'post',
            url: process.env.REACT_APP_API_BASE_URL + '/auth/roadMap',
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
                        'Road Map Successfully update..'
                    );
                }
                setCount(count + 1);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <Layout>
            <Container className="mt-5 pt-5 dynamic-form mb-5 pb-5">
                <Row>
                    <div className="col-6">
                        <h2>Schedule Roadmap</h2>
                    </div>
                </Row>

                <Row>
                    <Card className="w-100 p-4 row">
                        <CardBody>
                            <div className="w-100 my-5"></div>
                            <h2 className="my-5">Teacher Journey Road Map</h2>

                            <Row>
                                <div className="col-md-2 my-auto">
                                    <span className="mb-2" htmlFor="text">
                                        Registration
                                    </span>
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={teacherRigStart}
                                        onChange={(date) =>
                                            setTeacherRigStart(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={teacherRigEnd}
                                        onChange={(date) =>
                                            setTeacherRigEnd(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <span className="mb-2" htmlFor="text">
                                        Pre Survey
                                    </span>
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={teacherPreStart}
                                        onChange={(date) =>
                                            setTeacherPreStart(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={teacherPreEnd}
                                        onChange={(date) =>
                                            setTeacherPreEnd(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <span className="mb-2" htmlFor="text">
                                        Dashboard
                                    </span>
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={teacherDashStart}
                                        onChange={(date) =>
                                            setTeacherDashStart(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={teacherDashEnd}
                                        onChange={(date) =>
                                            setTeacherDashEnd(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <span className="mb-2" htmlFor="text">
                                        Course
                                    </span>
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={teacherCourseStart}
                                        onChange={(date) =>
                                            setTeacherCourseStart(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={teacherCourseEnd}
                                        onChange={(date) =>
                                            setTeacherCourseEnd(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <span className="mb-2" htmlFor="text">
                                        Team
                                    </span>
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={teacherTeamsStart}
                                        onChange={(date) =>
                                            setTeacherTeamsStart(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={teacherTeamsEnd}
                                        onChange={(date) =>
                                            setTeacherTeamsEnd(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <span className="mb-2" htmlFor="text">
                                        Post Survery
                                    </span>
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={teacherPostStart}
                                        onChange={(date) =>
                                            setTeacherPostStart(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={teacherPostEnd}
                                        onChange={(date) =>
                                            setTeacherPostEnd(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <span className="mb-2" htmlFor="text">
                                        Certificate
                                    </span>
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={teacherCirteStart}
                                        onChange={(date) =>
                                            setTeacherCirteStart(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={teacherCirteEnd}
                                        onChange={(date) =>
                                            setTeacherCirteEnd(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                            </Row>
                            <h2 className="my-5">Student Journey Road Map</h2>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <span className="mb-2" htmlFor="text">
                                        Registration
                                    </span>
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={studentRigStart}
                                        onChange={(date) =>
                                            setStudentRigStart(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={studentRigEnd}
                                        onChange={(date) =>
                                            setStudentRigEnd(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <span className="mb-2" htmlFor="text">
                                        Pre Survey
                                    </span>
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={studentPreStart}
                                        onChange={(date) =>
                                            setStudentPreStart(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={studentPreEnd}
                                        onChange={(date) =>
                                            setStudentPreEnd(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <span className="mb-2" htmlFor="text">
                                        Dashboard
                                    </span>
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={studentDashStart}
                                        onChange={(date) =>
                                            setStudentDashStart(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={studentDashEnd}
                                        onChange={(date) =>
                                            setStudentDashEnd(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <span className="mb-2" htmlFor="text">
                                        Course
                                    </span>
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={studentCourseStart}
                                        onChange={(date) =>
                                            setStudentCourseStart(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={studentCourseEnd}
                                        onChange={(date) =>
                                            setStudentCourseEnd(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <span className="mb-2" htmlFor="text">
                                        Team
                                    </span>
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={studentTeamsStart}
                                        onChange={(date) =>
                                            setStudentTeamsStart(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={studentTeamsEnd}
                                        onChange={(date) =>
                                            setStudentTeamsEnd(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <span className="mb-2" htmlFor="text">
                                        Post Survery
                                    </span>
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={studentPostStart}
                                        onChange={(date) =>
                                            setStudentPostStart(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={studentPostEnd}
                                        onChange={(date) =>
                                            setStudentPostEnd(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                            </Row>
                            <div className="w-100 my-5"></div>
                            <Row>
                                <div className="col-md-2 my-auto">
                                    <span className="mb-2" htmlFor="text">
                                        Certificate
                                    </span>
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={studentCirteStart}
                                        onChange={(date) =>
                                            setStudentCirteStart(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <DatePicker
                                        selected={studentCirteEnd}
                                        onChange={(date) =>
                                            setStudentCirteEnd(date)
                                        }
                                        minDate={new Date()}
                                    />
                                </div>
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
                <Row className="py-5">
                    <Col md={12} className="text-right">
                        <Button
                            btnClass="primary "
                            size="small"
                            label="Submit"
                            onClick={handleClick}
                        />
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
export default RoadMap;
