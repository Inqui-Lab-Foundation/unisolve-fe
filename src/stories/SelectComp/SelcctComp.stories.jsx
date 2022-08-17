import React from "react";
import { SelectComp } from "./SelectComp";

//Export Slider component from SelectComp.jsx

export default {
    title: "Example/SelectComp",
    component: SelectComp,
    argTypes: {
        label: "Select",
        options: ["Garde 1", "Garde 2", "Garde 3", "Garde 4", "Garde 5", "Garde 6"],
    },
};

//👇 We create a “template” of how args SelectComp to rendering
const Template = (args) => <SelectComp {...args} />;

export const Select = Template.bind({});
Select.args = {
    label: "Select",
    options: ["Garde 1", "Garde 2", "Garde 3", "Garde 4", "Garde 5", "Garde 6"],
};
