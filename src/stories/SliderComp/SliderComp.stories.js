import React from 'react';
import { SliderComp } from './SliderComp';

//Export Slider component from SliderComp.jsx

export default {
    title: 'Example/SliderComp',
    component: SliderComp,
    argTypes: {
        min:1,
        max:20,
    },
};

//👇 We create a “template” of how args slidercomp to rendering
const Template = (args) => <SliderComp {...args} />;

export const Slider = Template.bind({});
Slider.args = {
    min:1,
    max:20,
};



