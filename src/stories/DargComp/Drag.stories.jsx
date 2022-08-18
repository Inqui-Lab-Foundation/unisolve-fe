import React from "react";
import { DragComp } from "./DragComp";

//Export Slider component from DragComp.jsx

export default {
    title: "Example/DragComp",
    component: DragComp,
    argTypes: {
        defaultValue: 0,
    },
};

//👇 We create a “template” of how args DragComp to rendering
const Template = (args) => <DragComp {...args} />;

export const Drag = Template.bind({});
Drag.args = { defaultValue: 0 };
