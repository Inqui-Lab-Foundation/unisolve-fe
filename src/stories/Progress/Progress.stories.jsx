import React from "react";

import { ProgressComp } from "./Progress";

export default {
    title: "Example/Progress",
    component: ProgressComp,
};

const Template = (args) => <ProgressComp {...args} />;

export const ProgressFlow = Template.bind({});
ProgressFlow.args = {
    label: "Progress",
    options: [
        { id: 1, teams: "CSK", percent: 100, status: "active" },
        { id: 2, teams: "RCB", percent: 20, status: "exception" },
        { id: 3, teams: "MI", percent: 50 },
    ],
};
