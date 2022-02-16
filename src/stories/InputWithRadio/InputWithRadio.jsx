import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, ToggleButton, radios,Col,Row } from "react-bootstrap";
import "./inputWithRadio.scss";

export const InputWithRadioComp = ({ options, ...props }) => {
  const [radioValue, setRadioValue] = useState("1");

  return (
    <div className="dropdown InputWithRadioComp">
      <Form>
        {["radio"].map((type) => (
          <Row key={`inline-${type}`} className="mb-3 d-flex">
            <Col className="radioBox">
              <Form.Check
                inline
                label="School"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
            </Col>
            <Col className="radioBox">
              <Form.Check
                inline
                label="University/Adult learner"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
            </Col>
          </Row>
        ))}
      </Form>
    </div>
  );
};

InputWithRadioComp.propTypes = {
  onClick: PropTypes.func,
};

InputWithRadioComp.defaultProps = {
  options: [{ value: "School" }, { value: "University/Adult learner" }],
};
