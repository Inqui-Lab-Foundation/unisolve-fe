import React, { useLayoutEffect } from 'react';
import Layout from './Layout';

import PageConstruction from '../components/PageUnderConstrcution';
import { useHistory } from 'react-router-dom';
import { KEY, URL } from '../constants/defaultValues';
import axios from 'axios';
import { getNormalHeaders } from '../helpers/Utils';
import { getLanguage } from '../constants/languageOptions';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    // const currentUser = getCurrentUser("current_user");
    // const history = useHistory();
    // if (currentUser) {
    //   history.pushState(null, null, location && location.href);
    //   window.onpopstate = function (event) {
    //     history.go(1);
    //   };
    // }
    const language = useSelector(state=>state?.mentors.mentorLanguage);

    const history = useHistory();
    const checkPresurvey = ()=>{
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        axios
            .get(`${URL.getPreSurveyList}?role=TEACHER?${getLanguage(language)}`, axiosConfig)
            .then((preSurveyRes) => {
                if (preSurveyRes?.status == 200) {
                    if(preSurveyRes.data.data[0].dataValues[0].progress !== "COMPLETED") history.push("/teacher/pre-survey");
                }
            })
            .catch((err) => {
                return err.response;
            });
    };
    useLayoutEffect(() => {
        checkPresurvey();
    }, []);
    return (
        <Layout>
            {/* <figure>
        <img src={DummyImg} alet='preview' className='img-fluid' />
      </figure> */}
            <PageConstruction />
        </Layout>
    );
};

export default Dashboard;
