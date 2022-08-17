import React from 'react';
import { InputWithMobileNoComp } from './InputWithMobileNo';

export default {
    title: 'Example/InputWithMobileNoComp',
    component: InputWithMobileNoComp,
    argTypes: {
        value:"",
        onChange:'undefined',
        defaultCountry:"IN",
        placeholder:"Enter phone number"
    },
};

const Template = (args) => <InputWithMobileNoComp {...args} />;

export const InputWithMobileNo = Template.bind({});
InputWithMobileNo.args = {
    value:"",
    onChange:'undefined',
    defaultCountry:"IN",
    placeholder:"Enter phone number"

};
