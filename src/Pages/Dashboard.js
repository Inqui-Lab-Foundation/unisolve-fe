import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { InputWithRadioComp } from "../stories/InputWithRadio/InputWithRadio";

const Dashboard = () => {
  const [radioValue, setRadioValue] = useState("1");
  const radioValueUpdate = (data) => {
    setRadioValue(data);
  };

  const options = {};

  return (
    <div>
      <h1>Welcome Dashboard</h1>
      <Row>
        <Col xs-2></Col>
        <Col>
          <InputWithRadioComp
            type={"radio"}
            label={"School"}
            name={"School"}
            id={0}
            value={1}
            checked={radioValue === 1}
            onChange={() => {
                setRadioValue(1);
            }}
          />
        </Col>
        <Col>
          <InputWithRadioComp
            type={"radio"}
            label={"xx"}
            name={"xxx"}
            id={0}
            value={2}
            checked={radioValue === 2}
            onChange={() => {
              radioValueUpdate(2);
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
