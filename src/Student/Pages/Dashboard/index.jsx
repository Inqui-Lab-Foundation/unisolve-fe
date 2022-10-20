import React, { useLayoutEffect } from 'react';
import Layout from '../../Layout.jsx';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { getNormalHeaders } from '../../../helpers/Utils.js';
import { KEY, URL } from '../../../constants/defaultValues.js';
import { getLanguage } from '../../../constants/languageOptions.js';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import AvatarImg from '../../../assets/media/img/Avatar.png';
import topCard1 from '../../../assets/media/img/admin-card-1.png';
import topCard2 from '../../../assets/media/img/admin-card-2.png';
import vector from '../../../assets/media/img/vector.png';
import vector1 from '../../../assets/media/img/Vector-1.png';
import vector2 from '../../../assets/media/img/Vector-2.png';
import vector3 from '../../../assets/media/img/Vector-3.png';
import './dashboard.scss';
import TopSectionCard from './sections/TopSectionCard.jsx';
import DashboardOverviewCard from './DashboardOverviewCard.jsx';
import { Table } from 'antd';
import { Progress } from 'reactstrap';
import Vimeo from '@u-wave/react-vimeo';

const Dashboard = () => {
    const language = useSelector(
        (state) => state?.studentRegistration?.studentLanguage
    );
    const history = useHistory();
    const checkPresurvey = () => {
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        axios
            .get(
                `${URL.getPreSurveyList}?role=STUDENT?${getLanguage(language)}`,
                axiosConfig
            )
            .then((preSurveyRes) => {
                if (preSurveyRes?.status == 200) {
                    console.log(preSurveyRes);
                    if (
                        preSurveyRes.data.data[0].dataValues[0].progress !==
                        'COMPLETED'
                    )
                        history.push('/student/pre-survey');
                }
            })
            .catch((err) => {
                return err.response;
            });
    };
    useLayoutEffect(() => {
        checkPresurvey();
    }, []);
    const cardData = {
        idea: {
            heading: 'Idea Registeration',
            deadline: '20 Nov 2021, 12:00 PM',
            subHeading: 'Idea Registration Submission',
            footerText: 'With Team Members',
            teamImages: [AvatarImg, AvatarImg, AvatarImg],
            rightImage: topCard1,
            position: 1
        },
        profile: {
            heading: 'User Profile',
            rightImage: topCard2,
            position: 2,
            footerLabels: {
                heading: 'Badges',
                value: 3
            }
        }
    };

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street'
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street'
        },
        {
            key: '3',
            name: 'Doe',
            age: 42,
            address: '10 Downing Street'
        },
        {
            key: '4',
            name: 'Ram',
            age: 42,
            address: '10 Downing Street'
        }
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Start Date',
            dataIndex: 'age',
            render: () => <div>10-10-2022</div>
        },
        {
            title: 'Progress',
            dataIndex: 'address',
            // render: (_, record) => (
            render: () => (
                <Progress
                    key={'25'}
                    className="progress-height"
                    animated
                    value="25"
                >
                    25%
                </Progress>
            )
        }
    ];
    return (
        <Layout>
            <Container className="dashboard-wrapper">
                <h2>Dashboard</h2>
                <hr />
                <Row className="d-flex flex-start mb-5" style={{ gap: '1rem' }}>
                    <TopSectionCard
                        heading={cardData.idea.heading}
                        deadline={cardData.idea.deadline}
                        subHeading={cardData.idea.subHeading}
                        footerText={cardData.idea.footerText}
                        teamImages={cardData.idea.teamImages}
                        rightImage={cardData.idea.rightImage}
                        position={cardData.idea.position}
                    />
                    <TopSectionCard
                        heading={cardData.profile.heading}
                        footerLabels={cardData.profile.footerLabels}
                        rightImage={cardData.profile.rightImage}
                        position={cardData.profile.position}
                    />
                    <TopSectionCard
                        heading={cardData.idea.heading}
                        deadline={cardData.idea.deadline}
                        subHeading={cardData.idea.subHeading}
                        footerText={cardData.idea.footerText}
                        teamImages={cardData.idea.teamImages}
                        rightImage={cardData.idea.rightImage}
                        position={cardData.idea.position}
                    />
                </Row>
                <Row className="flex-start mb-5" style={{ gap: '1rem' }}>
                    <h2>Dashboard Overview</h2>
                    <DashboardOverviewCard
                        title={'Courses in progress'}
                        count={3}
                        image={vector}
                    />
                    <DashboardOverviewCard
                        title={'Courses completed'}
                        count={3}
                        image={vector1}
                    />
                    <DashboardOverviewCard
                        title={'Watching time'}
                        count={3}
                        image={vector2}
                    />
                    <DashboardOverviewCard
                        title={'Certificate achievement'}
                        count={3}
                        image={vector3}
                    />
                </Row>
                <Row
                    className="course-team flex-start mb-5"
                    style={{ gap: '1rem' }}
                >
                    <Col md={12} className="flex-1 team-progress">
                        <h2>Team Progress</h2>
                        <div className="bg-white team-progress rounded  p-3">
                            <div className="row flex-column p-2">
                                <label htmlFor="teams" className="mb-3">
                                    Team Name: <span>One</span>
                                </label>
                            </div>
                            <Table
                                bordered
                                pagination={false}
                                dataSource={dataSource}
                                columns={columns}
                            />
                        </div>
                    </Col>
                    <Col md={12} className="flex-2">
                        <h2>Learning Statistics</h2>
                        <div className="bg-white learning-statistics rounded p-3">
                            <div className="flex-2 px-3">
                                <label>Video Title</label>
                                <div style={{width:"100%",height:"100%",position:"relative"}}>
                                    <Vimeo
                                        video={400247816}
                                        // volume={true}
                                        // paused={paused}
                                        // onPause={handlePlayerPause}
                                        // onPlay={handlePlayerPlay}
                                        onSeeked={true}
                                        // onTimeUpdate={handleTimeUpdate}
                                        // onEnd={() => handleVimeoOnEnd(id)}
                                        showTitle
                                    />
                                </div>
                            </div>
                            <div className="flex-1 seperator-left px-3">
                                <label>Choose Video to Play</label>
                                <ol>
                                    <li className="mb-4">one</li>
                                    <li className="mb-4">two</li>
                                    <li className="mb-4">three</li>
                                </ol>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Dashboard;
