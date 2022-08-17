import React, { useState } from "react";
import PropTypes from "prop-types";
import { Slider } from "antd";

export const DragComp = ({ defaultValue }) => {
    const [inputValue, setInputValue] = useState(0);
    const onChange = (e) => {
        setInputValue(e);
    };

    return (
        <div className="SliderComp">
            <Slider
                defaultValue={defaultValue}
                onChange={(e) => onChange(e)}
                value={typeof inputValue === "number" ? inputValue : 0}
            />
        </div>
    );
};

DragComp.propTypes = {
    onClick: PropTypes.func,
};

DragComp.defaultProps = {
    defaultValue: 0,
};
