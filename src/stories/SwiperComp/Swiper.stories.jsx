import React from 'react';

import { SwiperComp } from './Swiper';
import SwiperImg from "../assets/swiperImg.png";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/SwiperComp',
    component: SwiperComp,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        options:[
            {
                slide:SwiperImg
            },  {
                slide:SwiperImg
            }
        ]
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SwiperComp {...args} />;

export const Swiper = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Swiper.args = {
    options:[
        {
            slide:SwiperImg
        },  {
            slide:SwiperImg
        }, {
            slide:SwiperImg
        }, {
            slide:SwiperImg
        }, {
            slide:SwiperImg
        }, {
            slide:SwiperImg
        }, {
            slide:SwiperImg
        }, {
            slide:SwiperImg
        }
    ],slidesPerView:4,
    spaceBetween:10,


};

