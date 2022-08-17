import React from "react";
import PropTypes from "prop-types";
// import { Form, ToggleButton, radios } from "react-bootstrap";
import "./style.scss";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

export const InputWithMobileNoComp = ({value,placeholder,defaultCountry,onChange }) => {

    return (
        <div className="dropdown InputWithMobileNoComp">
      
            <PhoneInput
                id="searchPhnSelect"
                placeholder={placeholder}
                value={value}
                defaultCountry={defaultCountry}
                onChange={onChange}/>
        
        </div>
    );
};

InputWithMobileNoComp.propTypes = {
    onClick: PropTypes.func,
};

InputWithMobileNoComp.defaultProps = {
    value:"",
    onChange:'undefined',
    defaultCountry:"IN",
    placeholder:"Enter phone number"
 
};
