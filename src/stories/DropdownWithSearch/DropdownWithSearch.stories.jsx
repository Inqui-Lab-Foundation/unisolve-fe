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
        { label: 10, value: "Mapusa" },
        { label: 20, value: "Vasco" },
        { label: 30, value: "Mumbai" },
    ],
    onClick:undefined

};

export const defaultDropdown = Template.bind({});

defaultDropdown.args = {
    label: '',
    className: "defaultDropdown",

};
