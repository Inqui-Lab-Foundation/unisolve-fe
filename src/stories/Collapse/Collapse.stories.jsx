import React from "react";

import { Collapse } from "./Collapse";

export default {
  title: "Example/Collapse",
  component: Collapse,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Collapse {...args} />;

export const Collapses = Template.bind({});
Collapses.args = {
  //   primary: true,
  label: "Collapses",
  //   options: ["Garde 1", "Garde 2", "Garde 3", "Garde 4", "Garde 5", "Garde 6"],
};
