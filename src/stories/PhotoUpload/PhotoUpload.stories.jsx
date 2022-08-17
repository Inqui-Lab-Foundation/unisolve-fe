import React from "react";

import { PhotoUpload } from "./PhotoUpload";

export default {
    title: "Example/PhotoUpload",
    component: PhotoUpload,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};

const Template = (args) => <PhotoUpload {...args} />;

export const SelectPhoto = Template.bind({});
SelectPhoto.args = {
    //   primary: true,
    label: "Select Pic",
    //   options: ["Garde 1", "Garde 2", "Garde 3", "Garde 4", "Garde 5", "Garde 6"],
};
