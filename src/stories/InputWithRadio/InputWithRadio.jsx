import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, ToggleButton, radios } from "react-bootstrap";
import "./inputWithRadio.scss";

export const InputWithRadioComp = ({ options, ...props }) => {
  const [radioValue, setRadioValue] = useState("1");

  return (
    <div className="dropdown InputWithRadioComp">
      <Form>
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3 d-flex">
            <div className="radioBox">
              <Form.Check
                inline
                label="School"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
            </div>
            <div className="radioBox">
              <Form.Check
                inline
                label="University/Adult learner"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          </div>
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
