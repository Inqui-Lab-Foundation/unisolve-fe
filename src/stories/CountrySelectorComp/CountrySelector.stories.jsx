import React from "react";

import { CountrySelector } from "./CountrySelector";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/CountrySelector",
    component: CountrySelector,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CountrySelector {...args} />;

export const CountrySelectorComp = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CountrySelectorComp.args = {
    label: "Country",
};
