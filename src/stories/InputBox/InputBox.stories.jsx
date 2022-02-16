import React from "react";

import { InputBox } from "./InputBox";

export default {
  title: "Example/InputBox",
  component: InputBox,
};

const Template = (args) => <InputBox {...args} />;

export const FirstName = Template.bind({});
FirstName.args = {
  types: "FirstName",
  label: "InputBox",
};

export const LastName = Template.bind({});
LastName.args = {
  types: "LastName",
  label: "InputBox",
};

export const Email = Template.bind({});
Email.args = {
  types: "Email",
  label: "InputBox",
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
