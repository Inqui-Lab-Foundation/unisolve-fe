import React from "react";
import { TableComponent } from "./TableComponent";

export default {
    title: "Example/TableComponent",
    component: TableComponent,
    argTypes: {
        data: [
            {
                key: "1",
                name: "John Brown",
                age: 32,
                address: "New York No. 1 Lake Park",
                description: "Some descripition",
            },
            {
                key: "2",
                name: "Jim Green",
                age: 42,
                address: "London No. 1 Lake Park",
            },
            {
                key: "3",
                name: "Joe Black",
                age: 32,
                address: "Sidney No. 1 Lake Park",
            },
            {
                key: "4",
                name: "Disabled User",
                age: 99,
                address: "Sidney No. 1 Lake Park",
            },
        ],
        columns: [
            {
                title: "Name",
                dataIndex: "name",
                render: (text) => <spann>{text}</spann>,
            },
            {
                title: "Age",
                dataIndex: "age",
            },
            {
                title: "Address",
                dataIndex: "address", 
            },
        ],
    },
};

const Template = (args) => <TableComponent {...args} />;

export const TableComp = Template.bind({});
TableComp.args = {
    data: [
        {
            key: "1",
            name: "John Brown",
            age: 32,
            address: "New York No. 1 Lake Park",
            description: "Some descripition",
        },
        {
            key: "2",
            name: "Jim Green",
            age: 42,
            address: "London No. 1 Lake Park",
            description: "Some descripition",
        },
        {
            key: "3",
            name: "Joe Black",
            age: 32,
            address: "Sidney No. 1 Lake Park",
            description: "Some descripition",
        },
        {
            key: "4",
            name: "Disabled User",
            age: 99,
            address: "Sidney No. 1 Lake Park",
            description: "Some descripition",
        },
    ],
    columns: [
        {
            title: "Name",
            dataIndex: "name",
            render: (text) => <spann>{text}</spann>,
        },
        {
            title: "Age",
            dataIndex: "age",
        },
        {
            title: "Address",
            dataIndex: "address",
        },
    ],
};

export const TableExpandable = Template.bind({});

TableExpandable.args = {
    isExpandable: true,
    showRowSelction: false,
    data: [
        {
            key: "1",
            name: "John Brown",
            age: 32,
            address: "New York No. 1 Lake Park",
            description: "Some descripition",
        },
        {
            key: "2",
            name: "Jim Green",
            age: 42,
            address: "London No. 1 Lake Park",
            description: "Some descripition",
        },
        {
            key: "3",
            name: "Joe Black",
            age: 32,
            address: "Sidney No. 1 Lake Park",
            description: "Some descripition",
        },
        {
            key: "4",
            name: "Disabled User",
            age: 99,
            address: "Sidney No. 1 Lake Park",
            description: "Some descripition",
        },
    ],
    columns: [
        {
            title: "Name",
            dataIndex: "name",
            render: (text) => <spann>{text}</spann>,
        },
        {
            title: "Age",
            dataIndex: "age",
        },
        {
            title: "Address",
            dataIndex: "address",
        },
    ],
};
