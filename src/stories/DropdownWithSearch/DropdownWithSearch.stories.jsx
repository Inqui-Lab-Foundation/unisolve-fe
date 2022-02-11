import React from 'react';

import { DropDownWithSearch } from './DropdownWithSearch';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/DropDownWithSearch',
  component: DropDownWithSearch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <DropDownWithSearch {...args} />;

export const SearchDropdown = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SearchDropdown.args = {
  label: 'Select grade',
  options: [
    { id: 1, country: "Don Bosco School, Mapusa" },
    { id: 2, country: "Don Bosco School, Vasco" },
    { id: 3, country: "Don Bosco School, Mumbai" },
  ],

};
