import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Slider, InputNumber } from 'antd';
//Slider component created using antd designs

import './style.scss';

export const SliderComp = () => {
    const [inputValue, setInputValue] = useState(1);
    const onChange = (e) => {
        setInputValue(e);
    };

    return (
        <div className='SliderComp'>
            <InputNumber
                // min={min}
                // max={max}
                value={inputValue}
                onChange={(e) => onChange(e)}
            />
            <Slider
                // min={min}
                // max={max}
                onChange={(e) => onChange(e)}
                value={typeof inputValue === 'number' ? inputValue : 0}
            />
        </div>
    );
};

SliderComp.propTypes = {
    onClick: PropTypes.func,
};

//Defaultprops
//min,max, value and onChange are mandatory
SliderComp.defaultProps = {
    min: 1,
    max: 20,
};
