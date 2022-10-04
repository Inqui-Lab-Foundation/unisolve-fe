/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
// import { Tabs } from "antd";
import Layout from '../../Admin/Layout';
import {
    // BsChevronRight,
    // BsFilter,
    BsPlusLg,
    // BsGraphUp,
    BsUpload
} from 'react-icons/bs';
import { Button } from '../../stories/Button';
import ImportPopup from './ImportPopup';
import { useHistory } from 'react-router-dom';

import { getSchoolRegistationBulkUploadList } from '../../redux/actions';
import { connect } from 'react-redux';
import DataTable, { Alignment } from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { getCurrentUser, openNotificationWithIcon } from '../../helpers/Utils';
import axios from 'axios';

const TicketsPage = (props) => {
    const currentUser = getCurrentUser('current_user');
    const [showImportPopup, setImportPopup] = useState(false);
    const [reqList, setReqList] = useState(false);
    const [reqSchoolsResponse, setReqSchoolsResponse] = useState([]);

    const [pending, setPending] = React.useState(true);
    const [rows, setRows] = React.useState([]);
    const [SRows, setSRows] = React.useState([]);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setSRows(reqSchoolsData.data);
            setPending(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setRows(SchoolsData.data);
            setPending(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    const history = useHistory();
    useEffect(() => {
        props.getSchoolRegistationBulkUploadActions('i');
    }, []);

    const handleStatusUpdate = (item, itemS) => {
        const body = {
            status: itemS
        };
        var config = {
            method: 'put',
            url:
                process.env.REACT_APP_API_BASE_URL +
                '/organizations/' +
                item.organization_id,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${currentUser.data[0].token}`
            },
            data: body
        };
        axios(config)
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    setReqList(true);
                    listApi();
                    openNotificationWithIcon(
                        'success',
                        'Status update successfully'
                    );
                }
            })
            .catch(function (error) {
                console.log(error);
                openNotificationWithIcon('error', 'Something went wrong');
            });
    };

    async function listApi() {
        var config = {
            method: 'get',
            url:
                process.env.REACT_APP_API_BASE_URL +
                '/organizations?status=INACTIVE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${currentUser.data[0].token}`
            }
        };
        await axios(config)
            .then(function (response) {
                if (response.status === 200) {
                    setReqSchoolsResponse(
                        response.data.data[0] &&
                            response.data.data[0].dataValues
                    );
                    setReqList(true);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleReqSchoolsList = (e) => {
        listApi();
    };

    const handleBack = (e) => {
        setReqList(false);
    };

    const reqSchoolsData = {
        data: reqSchoolsResponse,
        columns: [
            {
                name: 'Organization Code',
                selector: (row) => row.organization_code,
                sortable: true,
                width: '25%'
                // center: true,
            },
            {
                name: 'Organization Name',
                selector: (row) => row.organization_name,
                width: '30%'
                // center: true,
            },
            {
                name: 'Status',
                cell: (row) => [
                    <Badge key={row.organization_id} bg={`${'danger'}`}>
                        {row.status}
                    </Badge>
                ],
                width: '15%'
                // center: right,
            },
            {
                name: 'ACTIONS',
                selector: 'action',
                width: '40%',
                cell: (record) => [
                    <>
                        <Link
                            exact="true"
                            key={record}
                            onClick={() => handleStatusUpdate(record, 'ACTIVE')}
                            style={{ marginRight: '10px' }}
                        >
                            <div className="btn btn-secondary btn-lg">
                                ACTIVE
                            </div>
                        </Link>
                        <Link
                            exact="true"
                            key={record}
                            onClick={() =>
                                handleStatusUpdate(record, 'INACTIVE')
                            }
                            style={{ marginRight: '10px' }}
                        >
                            <div className="btn btn-danger btn-lg">
                                INACTIVE
                            </div>
                        </Link>
                    </>
                ]
            }
        ]
    };

    const SchoolsData = {
        data: props.schoolsRegistrationList,
        columns: [
            {
                name: 'S.No.',
                selector: 'organization_id',
                width: '10%'
                // center: true,
            },
            {
                name: 'Organization Code',
                selector: 'organization_code',
                sortable: true,
                width: '30%'
                // center: true,
            },
            {
                name: 'Organization Name',
                selector: 'organization_name',
                width: '40%'
                // center: true,
            },
            {
                name: 'Status',
                cell: (row) => [
                    <Badge
                        key={row.organization_id}
                        bg={`${
                            row.status === 'ACTIVE' ? 'secondary' : 'danger'
                        }`}
                    >
                        {row.status}
                    </Badge>
                ],
                width: '20%'
                // center: right,
            }
        ]
    };

    console.log(reqSchoolsResponse);

    return (
        <Layout>
            <Container className="ticket-page mb-50">
                <Row className="mt-2 pt-3">
                    <Row className="mb-2 mb-sm-5 mb-md-5 mb-lg-0">
                        <Col className="col-auto">
                            <h2>Schools Registered</h2>
                        </Col>

                        <Col className="ticket-btn col ml-auto ">
                            {reqList ? (
                                <div className="d-flex justify-content-end">
                                    <Button
                                        label="Back"
                                        btnClass="primary"
                                        size="small"
                                        shape="btn-square"
                                        onClick={(e) => handleBack(e)}
                                    />
                                </div>
                            ) : (
                                <div className="d-flex justify-content-end">
                                    <Button
                                        label="Import"
                                        btnClass="primary-outlined"
                                        size="small"
                                        shape="btn-square"
                                        Icon={BsUpload}
                                        onClick={() => setImportPopup(true)}
                                    />

                                    <Button
                                        label="Add New School"
                                        btnClass="primary mx-3"
                                        size="small"
                                        shape="btn-square"
                                        Icon={BsPlusLg}
                                        onClick={() =>
                                            history.push(
                                                '/admin/register-new-schools'
                                            )
                                        }
                                    />

                                    <Button
                                        label="Req Schools"
                                        btnClass="primary"
                                        size="small"
                                        shape="btn-square"
                                        onClick={(e) => handleReqSchoolsList(e)}
                                    />
                                </div>
                            )}
                        </Col>
                    </Row>

                    {reqList ? (
                        <div className="my-2">
                            <DataTableExtensions
                                print={false}
                                export={false}
                                {...reqSchoolsData}
                                exportHeaders
                            >
                                <DataTable
                                    data={SRows}
                                    // noHeader
                                    defaultSortField="id"
                                    defaultSortAsc={false}
                                    pagination
                                    highlightOnHover
                                    fixedHeader
                                    subHeaderAlign={Alignment.Center}
                                />
                            </DataTableExtensions>
                        </div>
                    ) : (
                        <div className="my-2">
                            <DataTableExtensions {...SchoolsData} exportHeaders>
                                <DataTable
                                    data={rows}
                                    // noHeader
                                    defaultSortField="id"
                                    defaultSortAsc={false}
                                    pagination
                                    highlightOnHover
                                    fixedHeader
                                    // fixedHeaderScrollHeight='300px'
                                    subHeaderAlign={Alignment.Center}
                                />
                            </DataTableExtensions>
                        </div>
                    )}
                </Row>
            </Container>
            <ImportPopup
                show={showImportPopup}
                setImportPopup={setImportPopup}
                onHide={() => setImportPopup(false)}
            />
        </Layout>
    );
};

// export default TicketsPage;

const mapStateToProps = ({ schoolRegistration }) => {
    const { schoolsRegistrationList } = schoolRegistration;
    return { schoolsRegistrationList };
};

export default connect(mapStateToProps, {
    getSchoolRegistationBulkUploadActions: getSchoolRegistationBulkUploadList
})(TicketsPage);
