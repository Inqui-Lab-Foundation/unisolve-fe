import React from "react";

import { RichText } from "./RichText";

export default {
    title: "Example/RichText",
    component: RichText,
};

const Template = (args) => <RichText {...args} />;

export const RichTextLabel = Template.bind({});
RichText.args = {
    label: "RichText",
};
