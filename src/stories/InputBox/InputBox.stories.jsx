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
