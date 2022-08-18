import React from "react";
import { FileComp } from "./FileComp";

//Export Slider component from FileComp.jsx

export default {
    title: "Example/FileComp",
    component: FileComp,
    argTypes: { label: "Select File" },
};

//👇 We create a “template” of how args FileComp to rendering
const Template = (args) => <FileComp {...args} />;

export const Select = Template.bind({});
Select.args = {
    label: "Select File",
};
