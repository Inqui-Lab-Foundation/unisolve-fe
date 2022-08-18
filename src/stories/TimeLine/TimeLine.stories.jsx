import React from "react";

import { TimeLine } from "./TimeLine";

export default {
    title: "Example/TimeLine",
    component: TimeLine,
};

const Template = (args) => <TimeLine {...args} />;

export const TimeLineFlow = Template.bind({});
TimeLineFlow.args = {
    label: "TimeLine",
    status: "Under Review",
};
