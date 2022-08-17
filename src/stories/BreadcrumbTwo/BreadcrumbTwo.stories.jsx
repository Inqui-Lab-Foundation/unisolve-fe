import React from "react";

import { BreadcrumbTwo } from "./BreadcrumbTwo";

export default {
    title: "Home",
    options: [
        {
            title: "Course",
            path: "/",
        },
    ],
};

const Template = (args) => <BreadcrumbTwo {...args} />;

export const Breadcrumb = Template.bind({});
Breadcrumb.args = {
    title: "Home",

    options: [
        {
            title: "Course",
            path: "/",
        },
    ],
};
