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
  options: ["Garde 1", "Garde 2", "Garde 3", "Garde 4", "Garde 5", "Garde 6"],
};
