/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
// import { Tabs } from "antd";
import Layout from "../Layout";
import {
    // BsChevronRight,
    // BsFilter,
    BsPlusLg,
    // BsGraphUp,
    BsUpload,
} from "react-icons/bs";
import { Button } from "../../stories/Button";
import { useHistory } from "react-router-dom";

import { getSchoolRegistationBulkUploadList } from "../../redux/actions";
import { connect } from "react-redux";
import DataTable, { Alignment } from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

const TicketsPage = (props) => {
    

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
                width: "20%",
                // center: true,
            },
            {
                name: "Category",
                selector: "organization_code",
                sortable: true,
                width: "30%",
                // center: true,
            },
            {
                name: "Idea",
                selector: "organization_name",
                width: "30%",
                // center: true,
            },
            {
                name: "Created On",
                selector: "status",
                width: "20%",
                // center: right,
            },

            {
                name: "Status",
                selector: "status",
                width: "20%",
                // center: right,
            },
        ],
    };

    console.log("data is here", SchoolsData);
    // console.log("data is here", SchoolsData);

    return (
        <Layout>
            <Container className='ticket-page mb-50'>
                <Row className='mt-2 pt-3'>
                    <Row className="mb-2 mb-sm-5 mb-md-5 mb-lg-0">
                        <Col className='col-auto'>
                            <h2>Support Journey</h2>
                        </Col>

                        <Col className='ticket-btn col ml-auto '>
                            <div className='d-flex justify-content-end'>
                               

                                <Button
                                    label='Add New Ticket'
                                    btnClass='primary'
                                    size='small'
                                    shape='btn-square'
                                    Icon={BsPlusLg}
                                    onClick={() => history.push("/teacher/support-journey/add-ticket")}
                                />
                            </div>
                        </Col>
                    </Row>

                    <div className='my-2'>
                        <DataTableExtensions {...SchoolsData} exportHeaders>
                            <DataTable
                                data={rows}
                                // noHeader
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
