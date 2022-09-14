import React, { useLayoutEffect } from "react";
// import { Row, Col } from "react-bootstrap";
// import { InputWithRadioComp } from "../stories/InputWithRadio/InputWithRadio";
import Layout from "../Layout.jsx";
// import DummyImg from "../media/dummy-board.png";
// import { Link, useHistory } from "react-router-dom";
// import { getNormalHeaders, getCurrentUser } from "../helpers/Utils";

import PageConstruction from "../../components/PageUnderConstrcution";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { getNormalHeaders } from "../../helpers/Utils.js";
import { KEY, URL } from "../../constants/defaultValues.js";

const Dashboard = () => {
    // const currentUser = getCurrentUser("current_user");
    // const history = useHistory();
    // if (currentUser) {
    //   history.pushState(null, null, location && location.href);
    //   window.onpopstate = function (event) {
    //     history.go(1);
    //   };
    // }
    const history = useHistory();
    const checkPresurvey = ()=>{
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        axios
            .get(`${URL.getPreSurveyList}?role=STUDENT`, axiosConfig)
            .then((preSurveyRes) => {
                if (preSurveyRes?.status == 200) {
                    if(preSurveyRes.data.data[0].dataValues[0].progress !== "COMPLETED") history.push("/student/pre-servey");
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
            <PageConstruction />
            {/* <figure>
        <img src={DummyImg} alet="preview" className="img-fluid" />
      </figure> */}
        </Layout>
    );
};

export default Dashboard;
