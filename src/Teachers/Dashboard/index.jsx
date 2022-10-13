import React, { useEffect, useLayoutEffect } from 'react';
import './dashboard.scss';
import { KEY, URL } from '../../constants/defaultValues';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import VerticalLinearStepper from './StepperComponent';
import Charts from './Chart';
import BarChart from './BarChart';
import { getCurrentUser, getNormalHeaders } from '../../helpers/Utils';
import { getLanguage } from '../../constants/languageOptions';
import Layout from '../Layout';
import { useDispatch } from 'react-redux';
import { getDashboardStates } from '../store/dashboard/actions';

const Dashboard = () => {
    const language = useSelector((state) => state?.mentors.mentorLanguage);
    const dispatch = useDispatch();
    const currentUser = getCurrentUser('current_user');
    const {dashboardStates} = useSelector(
        (state) => state.teacherDashBoard
    );

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
                        history.push('/teacher/pre-servey');
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
        dispatch(getDashboardStates(currentUser.data[0].mentor_id));
    }, [dispatch, currentUser]);
    return (
        <Layout>
            <Container className="dashboard pb-5 my-5 px-5">
                <Row className="teacher-statistics bg-white p-5">
                    <Col style={{ flex: 3 }}>
                        <div className="card-wrapper mb-5">
                            <div className="row">
                                <div className="card border-left col-md-4 me-3">
                                    <div className="d-flex">
                                        <div className="r-value">
                                            School Data
                                        </div>
                                        <div className="l-value">
                                            :{' '}
                                            {dashboardStates &&
                                            dashboardStates?.organization
                                                ? dashboardStates?.organization
                                                    ?.organization_name
                                                : '-'}
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="r-value">District </div>
                                        <div className="l-value">
                                            {' '}
                                            :{' '}
                                            {dashboardStates &&
                                            dashboardStates?.organization
                                                ? dashboardStates?.organization
                                                    ?.district
                                                : '-'}
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-left col-md-4 me-3">
                                    <div className="d-flex">
                                        <div className="r-value">
                                            Number of Teams
                                        </div>
                                        <div className="l-value common-flex fs-4">
                                            {dashboardStates && dashboardStates?.teams_count ? dashboardStates?.teams_count : 0}
                                        </div>
                                    </div>
                                </div>
                                <div className="card border-left col-md-4 me-3">
                                    <div className="d-flex">
                                        <div className="r-value">
                                            Number Of Ideas
                                        </div>
                                        <div className="l-value common-flex fs-4">
                                            {dashboardStates && dashboardStates?.ideas_count ? dashboardStates?.ideas_count : 0}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-wrap">
                            <Charts />
                            <Charts />
                            <BarChart />
                            <BarChart />
                        </div>
                    </Col>

                    <Col>
                        <div className="teacher-progress">
                            teacher progress{' '}
                        </div>
                        <div className="stepper">
                            <VerticalLinearStepper />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Dashboard;
