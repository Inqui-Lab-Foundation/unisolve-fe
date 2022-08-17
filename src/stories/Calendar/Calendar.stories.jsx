import React from "react";

import { Calendar1 } from "./Calendar";

export default {
    title: "Example/Calendar",
    component: Calendar1,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

const Template = (args) => <Calendar1 {...args} />;

export const Calendars = Template.bind({});
Calendars.args = {
    //   primary: true,
    label: "Calendar",
    //   options: ["Garde 1", "Garde 2", "Garde 3", "Garde 4", "Garde 5", "Garde 6"],
};
