import React from 'react';
import moment from 'moment';

//Import Calendar component from CalendarDropdown.jsx
import { CalendarDropdownComp } from './CalendarDropdown';

export default {
    title: 'Example/CalendarDropdownComp',
    component: CalendarDropdownComp,
    argTypes: {
        format:"MMM",
        picker:"month",
        placeholder:"Month",
        value:moment(new Date()),
        id:"datePickerComp"

    },
};

const Template = (args) => <CalendarDropdownComp {...args} />;

//Calendar for Month slector
export const CalendarDropdownMonth = Template.bind({});
CalendarDropdownMonth.args = {
    format:"MMM",
    onChange:"undefined",
    picker:"month",
    placeholder:"Month",
    value:moment(new Date()),
    id:"datePickerComp"
 
};

//Calendar for Month slector
export const CalendarDropdownDay = Template.bind({});
CalendarDropdownDay.args = {
    format:"Do",
    picker:"",
    placeholder:"Day",
    value:moment(new Date()),
    id:"datePickerComp"
 
};

//Calendar for Day slector
export const CalendarDropdownYear = Template.bind({});
CalendarDropdownYear.args = {
    format:"YYYY",
    picker:"year",
    placeholder:"Year",
    value:moment(new Date()),
    id:"datePickerComp"
};

//Calendar for default slector
export const DefaultCalendar = Template.bind({});
DefaultCalendar.args = {
    format:"Do MMMM YYYY",
    // value:moment(new Date()),
    id:"datePickerComp"
};


