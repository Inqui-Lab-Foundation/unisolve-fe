import React from 'react';

import { InputWithRadioComp } from './InputWithRadio';

export default {
  title: 'Example/InputWithRadioComp',
  component: InputWithRadioComp,
  argTypes: {
    options:[ { name: 'Student', value: '1' },
  { name: 'Teacher', value: '2' }]
  },
};

const Template = (args) => <InputWithRadioComp {...args} />;

export const InputWithRadio = Template.bind({});
InputWithRadio.args = {
  options:[ { name: 'Student', value: '1' },
  { name: 'Teacher', value: '2' }]

};
