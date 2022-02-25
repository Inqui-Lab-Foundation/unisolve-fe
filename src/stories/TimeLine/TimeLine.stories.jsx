import React from "react";

import { TimeLine1 } from "./TimeLine1";

export default {
  title: "Example/TimeLine",
  component: TimeLine1,
};

const Template = (args) => <TimeLine1 {...args} />;

export const TimeLineFlow = Template.bind({});
TimeLineFlow.args = {
  label: "TimeLine",
  index1: 2,
};
