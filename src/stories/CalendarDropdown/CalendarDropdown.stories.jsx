import React from 'react';

//Import Calendar component from CalendarDropdown.jsx
import { CalendarDropdownComp } from './CalendarDropdown';

export default {
  title: 'Example/CalendarDropdownComp',
  component: CalendarDropdownComp,
  argTypes: {
    
  },
};

const Template = (args) => <CalendarDropdownComp {...args} />;

//No default props need to be added
export const CalendarDropdown = Template.bind({});
CalendarDropdown.args = {
 
};
