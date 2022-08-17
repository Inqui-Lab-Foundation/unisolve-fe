import React from 'react';

import { StudentHeader } from './StudentHeader';

export default {
    title: 'Example/StudentHeader',
    component: StudentHeader,
};

const Template = (args) => <StudentHeader {...args} />;

export const StudentHeaderComp = Template.bind({});
StudentHeader.args = {
};
  