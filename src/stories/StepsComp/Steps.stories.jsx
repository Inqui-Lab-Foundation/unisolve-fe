import React from "react";

import { StepsComp } from "./Steps";

export default {
    title: "Example/StepsComp",
    component: StepsComp,
};

const Template = (args) => <StepsComp {...args} />;

export const Steps = Template.bind({});
Steps.args = {
    label: "TimeLine",
    status: "Under Review",
};
