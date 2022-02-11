import React from 'react';

import { DropDownComp } from './DropdownComp';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/DropDownComp',
  component: DropDownComp,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <DropDownComp {...args} />;

export const SingleSelectDropdown = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SingleSelectDropdown.args = {
  primary: true,
  label: 'Select grade',
  options:["Garde 1","Garde 2","Garde 3","Garde 1","Garde 2","Garde 3"]

};
