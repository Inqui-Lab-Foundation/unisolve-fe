import React from "react";

import { TextArea } from "./TextArea";

export default {
    title: "Example/TextArea",
    component: TextArea,
};

const Template = (args) => <TextArea {...args} />;

export const TextAreaLabel = Template.bind({});
TextArea.args = {
    label: "TextArea",
};
