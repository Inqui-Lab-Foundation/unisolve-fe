import React, { useLayoutEffect } from 'react';
import Layout from '../../Layout.jsx';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { getNormalHeaders } from '../../../helpers/Utils.js';
import { KEY, URL } from '../../../constants/defaultValues.js';
import { getLanguage } from '../../../constants/languageOptions.js';
import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import AvatarImg from '../../../assets/media/img/Avatar.png';
import topCard1 from '../../../assets/media/img/admin-card-1.png';
import topCard2 from '../../../assets/media/img/admin-card-2.png';
// import vector from '../../../assets/media/img/vector.png';
import './dashboard.scss';
import TopSectionCard from './sections/TopSectionCard.jsx';
// import DashboardOverviewCard from './DashboardOverviewCard.jsx';

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
    return (
        <Layout>
            <Container className="dashboard-wrapper">
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
                {/* <Row className="d-flex flex-start" style={{ gap: '1rem' }}>
                    <h2>Dashboard Overview</h2>
                    <DashboardOverviewCard title={"Courses in progress"} count={3} image={vector}/>
                    <DashboardOverviewCard />
                    <DashboardOverviewCard />
                    <DashboardOverviewCard />
                </Row> */}
            </Container>
        </Layout>
    );
};

export default Dashboard;
