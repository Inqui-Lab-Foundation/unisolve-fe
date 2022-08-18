import React from 'react';
import { FiEye } from "react-icons/fi";

import { ImageCardComp } from './ImageCard/ImageCard';

export default {
    title: 'Example/ImageCardComp',
    component: ImageCardComp,
    argTypes: {
        backgroundColor: { control: 'color' },
        imgUrl:"https://picsum.photos/318/180",
        title:"hii",
        text:"asdsfdgdfhfghgf",
        buttonName:"sdsa",
        icon:FiEye
    },
};

const Template = (args) => <ImageCardComp {...args} />;

export const CourseCard = Template.bind({});
CourseCard.args = {
    primary: true,
    label: 'ImageCardComp',
    imgUrl:"https://picsum.photos/318/180",
    title:"How can I improve self care with Ikigai?",
    count:"1,288 students",
    time:"5m",
    icon:FiEye
};


