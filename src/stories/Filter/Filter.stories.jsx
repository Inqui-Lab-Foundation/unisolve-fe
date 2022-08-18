import React from "react";

import { Filter } from "./Filter";

export default {
    title: "Example/Filter",
    component: Filter,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

const Template = (args) => <Filter {...args} />;

export const SelectFilter = Template.bind({});
SelectFilter.args = {
    //   primary: true,
    label: "Select Filter",
    options: ["Health", "Innovation", "Ideas"],
};
