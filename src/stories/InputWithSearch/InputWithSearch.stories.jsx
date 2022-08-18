import React from 'react';
import { InputWithSearchComp } from './InputWithSearch';

export default {
    title: 'Example/InputWithSearchComp',
    component: InputWithSearchComp,
    argTypes: {
    },
};

const Template = (args) => <InputWithSearchComp {...args} />;

export const InputWithSearch = Template.bind({});
InputWithSearch.args = {
    size: 'default',

};

export const Large = Template.bind({});
Large.args = {
    size: 'large',

};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',

};
export const Small = Template.bind({});
Small.args = {
    size: 'small',

};
export const SearchRounded = Template.bind({});
SearchRounded.args = {
    size: 'small',
    className:"search-rounded"

};

