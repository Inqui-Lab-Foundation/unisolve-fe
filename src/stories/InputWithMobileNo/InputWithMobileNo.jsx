import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, ToggleButton, radios } from "react-bootstrap";
import "./style.scss";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

export const InputWithMobileNoComp = ({ options, ...props }) => {
  const [value, setValue] = useState()

  return (
    <div className="dropdown InputWithMobileNoComp">
      
      <PhoneInput
      placeholder="Enter phone number"
      value={value}
      defaultCountry="IN"
      onChange={setValue}/>
        
    </div>
  );
};

InputWithMobileNoComp.propTypes = {
  onClick: PropTypes.func,
};

InputWithMobileNoComp.defaultProps = {
 
};
