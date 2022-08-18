import React from "react";

import { BreadcrumbComp } from "./BreadcrumbComp";

export default {
    title: "Home",
    subTitle: "Sub Title",
    options: [
        {
            title: "Course",
            path: "/",
        },
    ],
    bgImage: true,
};

const Template = (args) => <BreadcrumbComp {...args} />;

export const Breadcrumb = Template.bind({});
Breadcrumb.args = {
    title: "Home",
    subTitle: "Sub Title",
    options: [
        {
            title: "Course",
            path: "/",
        },
    ],
    bgImage: true,
};
