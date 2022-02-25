import React from 'react';
import { TableComponent } from './TableComponent';

export default {
  title: 'Example/TableComponent',
  component: TableComponent,
  argTypes: {
    value:"",
  onChange:'undefined',
  defaultCountry:"IN",
  placeholder:"Enter phone number"
  },
};

const Template = (args) => <TableComponent {...args} />;

export const TableComp = Template.bind({});
TableComp.args = {
  value:"",
  onChange:'undefined',
  defaultCountry:"IN",
  placeholder:"Enter phone number"

};
