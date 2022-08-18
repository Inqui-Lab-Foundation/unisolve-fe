import React from "react";
import { InputBox } from "./InputBox";
export default {
    title: "Example/InputBox",
    component: InputBox,
};
const Template = (args) => <InputBox {...args} />;
export const FirstName = Template.bind({});
FirstName.args = {
    type: "text",
    name: "firstName",
    placeholder: "FirstName",
    label: "InputBox",
    value: "",
    onChange: undefined,
};
export const LastName = Template.bind({});
LastName.args = {
    type: "text",
    name: "lastName",
    placeholder: "LastName",
    label: "InputBox",
    value: "",
    onChange: undefined,
};
export const Email = Template.bind({});
Email.args = {
    type: "email",
    name: "email",
    placeholder: "Email",
    label: "InputBox",
    value: "",
    onChange: undefined,
};
export const Large = Template.bind({});
Large.args = {
    primary: true,
    size: "large",
    label: "InputBox",
};
export const Small = Template.bind({});
Small.args = {
    primary: true,
    size: "small",
    label: "InputBox",
};

export const defaultInput = Template.bind({});
defaultInput.args = {
    type: "",
    name: "",
    placeholder: "",
    label: "InputBox",
    value: "",
    onChange: undefined,
    className: 'defaultInput'
};
