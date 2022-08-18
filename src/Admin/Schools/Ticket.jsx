/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
// import { Tabs } from "antd";
import Layout from "../../Admin/Layout";
import {
    // BsChevronRight,
    // BsFilter,
    BsPlusLg,
    // BsGraphUp,
    BsUpload,
} from "react-icons/bs";
import { Button } from "../../stories/Button";
import ImportPopup from "./ImportPopup";
import { useHistory } from "react-router-dom";

import { getSchoolRegistationBulkUploadList } from "../../redux/actions";
import { connect } from "react-redux";
import DataTable, { Alignment } from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

const TicketsPage = (props) => {
    const [showImportPopup, setImportPopup] = useState(false);

    const [pending, setPending] = React.useState(true);
    const [rows, setRows] = React.useState([]);
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setRows(SchoolsData.data);
            setPending(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    const history = useHistory();
    useEffect(() => {
        props.getSchoolRegistationBulkUploadActions("i");
    }, []);

    const SchoolsData = {
        data: props.schoolsRegistrationList,
        columns: [
            {
                name: "S.No.",
                selector: "organization_id",
                width: "200px",
                center: true,
            },
            {
                name: "Organization Code",
                selector: "organization_code",
                sortable: true,
                // center: true,
            },
            {
                name: "Organization Name",
                selector: "organization_name",
                // center: true,
            },
            {
                name: "Status",
                selector: "status",
                // center: true,
            },
        ],
    };

    // console.log("Jhanii", props.schoolsRegistrationList);

    return (
        <Layout>
            <Container className='ticket-page mb-50'>
                <Row className='mt-5 pt-5'>
                    <Row>
                        <Col className='col-auto mb-5 mb-sm-5 mb-md-5 mb-lg-0'>
                            <h2>Schools Registered</h2>
                        </Col>

                        <Col className='ticket-btn col ml-auto '>
                            <div className='d-flex justify-content-end'>
                                <Button
                                    label='Import'
                                    btnClass='primary-outlined mx-3'
                                    size='small'
                                    shape='btn-square'
                                    Icon={BsUpload}
                                    onClick={() => setImportPopup(true)}
                                />

                                <Button
                                    label='Add New School'
                                    btnClass='primary'
                                    size='small'
                                    shape='btn-square'
                                    Icon={BsPlusLg}
                                    onClick={() => history.push("/admin/register-new-schools")}
                                />
                            </div>
                        </Col>
                    </Row>

                    <div className='my-5'>
                        <DataTableExtensions {...SchoolsData}>
                            <DataTable
                                data={rows}
                                noHeader
                                defaultSortField='id'
                                defaultSortAsc={false}
                                pagination
                                highlightOnHover
                                fixedHeader
                                // fixedHeaderScrollHeight='300px'
                                subHeaderAlign={Alignment.Center}
                            />
                        </DataTableExtensions>
                    </div>
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
    getSchoolRegistationBulkUploadActions: getSchoolRegistationBulkUploadList,
})(TicketsPage);
