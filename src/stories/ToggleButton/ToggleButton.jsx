import React,{useState} from "react";
import PropTypes from "prop-types";
import {ButtonGroup,ToggleButton } from "react-bootstrap";
import "./toggleButton.scss";

export const ToggleButtonComp = ({
    options,
    
}) => {
    const [radioValue, setRadioValue] = useState('1');

    return (
        <div className="dropdown toggleButtoncomp">
            <ButtonGroup>
                {options.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={idx % 2 ? 'outline-primary' : 'outline-primary'}
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </div>
    );
};

ToggleButtonComp.propTypes = {

    onClick: PropTypes.func,
};

ToggleButtonComp.defaultProps = {
    options:[ { name: 'Student', value: '1' },
        { name: 'Teacher', value: '2' }]

};
