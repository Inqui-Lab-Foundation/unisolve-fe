import React, { useEffect, useLayoutEffect } from 'react';
import './dashboard.scss';
import { KEY, URL } from '../../constants/defaultValues';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import VerticalLinearStepper from './StepperComponent';
// import Charts from './Chart';
// import BarChart from './BarChart';
import { getCurrentUser, getNormalHeaders } from '../../helpers/Utils';
import institutions from '../../assets/media/img/university.png';
import districtImg from '../../assets/media/img/building.png';
import idea from '../../assets/media/img/idea.png';
import people from '../../assets/media/img/people.png';
import { getLanguage } from '../../constants/languageOptions';
import Layout from '../Layout';
import { useDispatch } from 'react-redux';
import { getDashboardStates } from '../store/dashboard/actions';
// import DoughnutChart from './DoughnutChart';

const Dashboard = () => {
    const language = useSelector((state) => state?.mentors.mentorLanguage);
    const dispatch = useDispatch();
    const currentUser = getCurrentUser('current_user');
    const { dashboardStates } = useSelector((state) => state.teacherDashBoard);

    const history = useHistory();
    const checkPresurvey = () => {
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        axios
            .get(
                `${URL.getPreSurveyList}?role=TEACHER?${getLanguage(language)}`,
                axiosConfig
            )
            .then((preSurveyRes) => {
                if (preSurveyRes?.status == 200) {
                    if (
                        preSurveyRes.data.data[0].dataValues[0].progress !==
                        'COMPLETED'
                    )
                        history.push('/teacher/pre-survey');
                }
            })
            .catch((err) => {
                return err.response;
            });
    };
    useLayoutEffect(() => {
        checkPresurvey();
    }, []);
    useEffect(() => {
        dispatch(getDashboardStates(currentUser.data[0].user_id));
    }, [dispatch, currentUser.data[0].user_id]);

    return (
        <Layout>
            <Container className="dashboard pb-5 my-5 px-5">
                <h2 className="mb-5">Dashboard </h2>
                <Row className="teacher-statistics bg-white p-5 mb-5">
                    <Row className="">
                        <div className="card-wrapper">
                            <div className="row row-gap">
                                <div className="card border-top-blue col-md-3">
                                    <div className="d-flex">
                                        <img
                                            src={institutions}
                                            alt="institutions"
                                            className="mx-4"
                                        />
                                        <div className="common-flex flex-column">
                                            <span className="color-blue fs-600">
                                                {dashboardStates &&
                                                dashboardStates?.organization
                                                    ? dashboardStates
                                                        ?.organization
                                                        ?.organization_name
                                                    : '-'}
                                            </span>
                                            <small>School Name</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-top-green col-md-3">
                                    <div className="d-flex">
                                        <img
                                            src={districtImg}
                                            alt="institutions"
                                            className="mx-4"
                                        />
                                        <div className="common-flex flex-column">
                                            <span className="color-green fs-600">
                                                {dashboardStates &&
                                                dashboardStates?.organization
                                                    ? dashboardStates
                                                        ?.organization
                                                        ?.district
                                                    : '-'}
                                            </span>
                                            <small>District</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-top-yellow col-md-3  ">
                                    <div className="d-flex">
                                        <img
                                            src={idea}
                                            alt="institutions"
                                            className="mx-4"
                                        />
                                        <div className="common-flex flex-column">
                                            <span className="color-yellow fs-700">
                                                {dashboardStates &&
                                                dashboardStates?.ideas_count
                                                    ? dashboardStates?.ideas_count
                                                    : 0}
                                            </span>
                                            <small>Number Of Ideas</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-top-dark-blue col-md-3  ">
                                    <div className="d-flex">
                                        <img
                                            src={people}
                                            alt="institutions"
                                            className="mx-4"
                                        />
                                        <div className="common-flex flex-column">
                                            <span className="color-dark-blue fs-700">
                                                {dashboardStates &&
                                                dashboardStates?.teams_count
                                                    ? dashboardStates?.teams_count
                                                    : 0}
                                            </span>
                                            <small>Number Of Teams</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Row>
                <Row className="teacher-statistics bg-white p-5">
                    <Row className="">
                        <Col style={{ flex: 3 }}>
                            <div className="d-flex flex-wrap">
                                {/* <DoughnutChart user={currentUser} /> */}
                                {/* <BarChart /> */}
                            </div>
                        </Col>
                        <Col>
                            {/* <div className="teacher-progress">
                                teacher progress{' '}
                            </div> */}
                            <div className="stepper">
                                <h2 className='mb-5'>Teacher Roadmap</h2>
                                <VerticalLinearStepper />
                            </div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </Layout>
    );
};

export default Dashboard;
