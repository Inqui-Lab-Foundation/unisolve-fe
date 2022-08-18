import React from "react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/Button",
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    label: "Button",
    btnClass: "primary",
};
export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
    label: "Button",
    btnClass: "primary-outline",
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: "Button",
    btnClass: "secondary",
};

export const Default = Template.bind({});
Default.args = {
    label: "Button",
    btnClass: "default",
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
    label: "Button",
    btnClass: "primary",
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
    label: "Button",
    btnClass: "primary",
};
export const Black = Template.bind({});
Black.args = {
    size: "small",
    label: "Button",
    btnClass: "black",
};
export const ButtonSquare = Template.bind({});
ButtonSquare.args = {
    size: "small",
    label: "Button",
    btnClass: "primary",
    shape:"btn-square"
};
export const ButtonCircle = Template.bind({});
ButtonCircle.args = {
    size: "small",
    btnClass: "primary",
    shape:"btn-circle",
    Icon:""
};