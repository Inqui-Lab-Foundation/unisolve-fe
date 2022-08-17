import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import 'react-phone-number-input/style.css';
import { Table } from 'antd';
import { Pagination } from 'antd';

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            'selectedRows: ',
            selectedRows
        );
    }
    //   getCheckboxProps: (record) => ({
    //     disabled: record.name === "Disabled User",
    //     // Column configuration not to be checked
    //     name: record.name,
    //   }),
};

export const TableComponent = ({
    data,
    columns,
    expandableComponent,
    isExpandable,
    showRowSelction,
    selectionType
}) => {
    return (
        <div>
            {showRowSelction ? (
                <Table
                    className="commonTable"
                    scroll={{ x: true }}
                    rowSelection={{
                        type: selectionType,
                        ...rowSelection
                    }}
                    columns={columns}
                    dataSource={data}
                />
            ) : isExpandable ? (
                <Table
                    className="commonTable"
                    scroll={{ x: true }}
                    columns={columns}
                    dataSource={data}
                    expandable={{
                        expandedRowRender: (record) =>
                            expandableComponent(record),
                        rowExpandable: (record) =>
                            record.name !== 'Not Expandable'
                    }}
                />
            ) : (
                <Table
                    className="commonTable"
                    scroll={{ x: true }}
                    columns={columns}
                    dataSource={data}
                />
            )}

            <div className="pt-5 common-pagination">
                <Pagination defaultCurrent={1} total={data.length} />
            </div>
        </div>
    );
};

TableComponent.propTypes = {
    onClick: PropTypes.func
};

TableComponent.defaultProps = {
    data: [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park'
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park'
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park'
        },
        {
            key: '4',
            name: 'Disabled User',
            age: 99,
            address: 'Sidney No. 1 Lake Park'
        }
    ],
    columns: [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <spann>{text}</spann>
        },
        {
            title: 'Age',
            dataIndex: 'age'
        },
        {
            title: 'Address',
            dataIndex: 'address'
        }
    ],
    expandableComponent: (record) => {
        return (
            <p
                style={{
                    margin: 0
                }}
            >
                {record.description}
            </p>
        );
    },
    isExpandable: false,
    showRowSelction: false,
    selectionType: 'checkbox'
};
