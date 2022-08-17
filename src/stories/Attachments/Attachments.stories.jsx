import React from "react";

import { Attachments } from "./Attachments";

export default {
    title: "Example/Attachments",
    component: Attachments,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

const Template = (args) => <Attachments {...args} />;

export const SelectFile = Template.bind({});
SelectFile.args = {
    //   primary: true,
    label: "Select File",
    //   options: ["Garde 1", "Garde 2", "Garde 3", "Garde 4", "Garde 5", "Garde 6"],
};
