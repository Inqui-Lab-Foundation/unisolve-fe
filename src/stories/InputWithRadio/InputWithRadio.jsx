import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, ToggleButton, radios, Col, Row } from "react-bootstrap";
import "./inputWithRadio.scss";

export const InputWithRadioComp = ({
  label,
  name,
  value,
  checked,
  type,
  onChange,
  id,
  ...props
}) => {
  const [radioValue, setRadioValue] = useState("1");
  const handleChange = (e) => {
    setRadioValue(e.target.value)
  }
  return (
    <div className="dropdown InputWithRadioComp">
      <Form>
        <Row>
        <Col className="radioBox">
          <Form.Check
            label={label}
            name={name}
            type="radio"
            id={id}
            value={value}
            checked={checked}
            onChange={onChange}
          />
        </Col>
        </Row>
      </Form>
    </div>
  );
};

InputWithRadioComp.propTypes = {
  onClick: PropTypes.func,
};

InputWithRadioComp.defaultProps = {
  name: "xx",
  label: "Select Student",
  type: "radio",
  value: "1",
  checked: true,
  onChange:undefined,
  id: 0,
};
