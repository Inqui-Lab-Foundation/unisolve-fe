import React from 'react';
import { InputWithMobileNoComp } from './InputWithMobileNo';

export default {
  title: 'Example/InputWithMobileNoComp',
  component: InputWithMobileNoComp,
  argTypes: {
    options:[ { name: 'Student', value: '1' },
  { name: 'Teacher', value: '2' }]
  },
};

const Template = (args) => <InputWithMobileNoComp {...args} />;

export const InputWithMobileNo = Template.bind({});
InputWithMobileNo.args = {
  options:[ { name: 'Student', value: '1' },
  { name: 'Teacher', value: '2' }]

};
