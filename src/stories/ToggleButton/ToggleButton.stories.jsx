import React from 'react';

import { ToggleButtonComp } from './ToggleButton';

export default {
    title: 'Example/ToggleButtonComp',
    component: ToggleButtonComp,
    argTypes: {
        options:[ { name: 'Student', value: '1' },
            { name: 'Teacher', value: '2' }]
    },
};

const Template = (args) => <ToggleButtonComp {...args} />;

export const ToggleButton = Template.bind({});
ToggleButton.args = {
    options:[ { name: 'Student', value: '1' },
        { name: 'Teacher', value: '2' }]

};
