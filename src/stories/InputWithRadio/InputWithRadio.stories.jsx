import React,{useState} from 'react';

import { InputWithRadioComp } from './InputWithRadio';

export default {
  title: 'Example/InputWithRadioComp',
  component: InputWithRadioComp,
  argTypes: {
    
  },
};

const Template = (args) => <InputWithRadioComp {...args} />;

export const InputWithRadio = Template.bind({});

InputWithRadio.args = {
 name:"xxy",
  label:"Select Student",
  type:"radio",
  value:"1",
  checked:false,
  onChange:undefined,
  id:0

};
