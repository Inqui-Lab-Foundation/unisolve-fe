import React from 'react';

import { CalendarDropdownComp } from './CalendarDropdown';

export default {
  title: 'Example/CalendarDropdownComp',
  component: CalendarDropdownComp,
  argTypes: {
    
  },
};

const Template = (args) => <CalendarDropdownComp {...args} />;

export const CalendarDropdown = Template.bind({});
CalendarDropdown.args = {
 
};
