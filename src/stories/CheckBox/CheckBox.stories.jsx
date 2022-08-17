import React from "react";

import { CheckBox } from "./CheckBox";

export default {
    title: "Example/CheckBox",
    component: CheckBox,
};

const Template = (args) => <CheckBox {...args} />;

export const CheckBoxs = Template.bind({});
CheckBox.args = {
    label: "CheckBox",
};
