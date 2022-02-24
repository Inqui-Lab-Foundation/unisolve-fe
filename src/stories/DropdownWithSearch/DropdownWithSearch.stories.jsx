import React from 'react';

//Import DropDownWithSearch components 
import { DropDownWithSearch } from './DropdownWithSearch';

export default {
  title: 'Example/DropDownWithSearch',
  component: DropDownWithSearch,
  argTypes: {
  },
};

const Template = (args) => <DropDownWithSearch {...args} />;


//Create new instance for DropDownWithSearch component
export const SearchDropdown = Template.bind({});


//The default props of search components are listed here
//label, options and onClick functions need to be passed.
SearchDropdown.args = {
  label: 'Select grade',
  options: [
    { id: 1, country: "Don Bosco School, Mapusa" },
    { id: 2, country: "Don Bosco School, Vasco" },
    { id: 3, country: "Don Bosco School, Mumbai" },
  ],
  onClick:undefined

};
