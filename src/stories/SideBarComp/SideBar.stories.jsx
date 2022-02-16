import React from 'react';

import { SideBarComp } from './SiderBar';

export default {
  title: 'Example/SideBarComp',
  component: SideBarComp,
};

const Template = (args) => <SideBarComp {...args} />;

export const SideBar = Template.bind({});
SideBar.args = {
};
