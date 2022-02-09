import React from 'react';

import { DropDownComp } from './DropdownComp/DropdownComp';

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

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'DropDownComp',
  options:["Student","Teacher","Mentor"]

};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'DropDownComp',
  options:["Student","Teacher","Mentor"]

};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'DropDownComp',
  options:["Student","Teacher","Mentor"]

};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'DropDownComp',
  options:["Student","Teacher","Mentor"]

};
