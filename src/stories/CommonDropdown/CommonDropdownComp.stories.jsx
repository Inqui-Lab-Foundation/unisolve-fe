import React from "react";

import { CommonDropDownComp } from "./CommonDropdownComp";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/CommonDropDownComp",
  component: CommonDropDownComp,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CommonDropDownComp {...args} />;

export const CommonSingleDropdown = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CommonSingleDropdown.args = {
  primary: true,
  label: "Select grade",
  options: ["Garde 1", "Garde 2", "Garde 3", "Garde 1", "Garde 2", "Garde 3"],
};

// export const DefaultDropdown = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// CommonDefaultDropdown.args = {
//   primary: true,
//   label: "Select grade",
//   options: ["Garde 1", "Garde 2", "Garde 3", "Garde 1", "Garde 2", "Garde 3"],
//   className: "defaultDropdown",
// };
