import React from 'react';
import { InputWithSearchComp } from './InputWithSearch';

export default {
  title: 'Example/InputWithSearchComp',
  component: InputWithSearchComp,
  argTypes: {
    options:[ { name: 'Student', value: '1' },
  { name: 'Teacher', value: '2' }]
  },
};

const Template = (args) => <InputWithSearchComp {...args} />;

export const InputWithSearch = Template.bind({});
InputWithSearch.args = {
  options:[ { name: 'Student', value: '1' },
  { name: 'Teacher', value: '2' }]

};
