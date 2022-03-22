import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { InputWithRadioComp } from "../stories/InputWithRadio/InputWithRadio";
import Layout from "../Layout";
import DummyImg from "../media/dummy-board.png";

const Dashboard = () => {
  return (
    <Layout>
      <figure>
        <img src={DummyImg} alet="preview" className="img-fluid" />
      </figure>
    </Layout>
  );
};

export default Dashboard;
