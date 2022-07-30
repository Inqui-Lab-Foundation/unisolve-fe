import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { InputWithRadioComp } from "../stories/InputWithRadio/InputWithRadio";
import Layout from "../Layout";
import DummyImg from "../media/dummy-board.png";
import { Link, useHistory } from "react-router-dom";
import { getNormalHeaders, getCurrentUser } from "../helpers/Utils";

import PageConstruction from "../components/PageUnderConstrcution";

const Dashboard = () => {
  // const currentUser = getCurrentUser("current_user");
  // const history = useHistory();
  // if (currentUser) {
  //   history.pushState(null, null, location && location.href);
  //   window.onpopstate = function (event) {
  //     history.go(1);
  //   };
  // }
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
