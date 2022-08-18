/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { InputWithSearchComp } from "../../stories/InputWithSearch/InputWithSearch";
// import { DropDownComp } from "../../stories/DropdownComp/DropdownComp";
import {
    // BsChevronRight,
    BsFilter,
    BsPlusLg,
    BsGraphUp,
    BsUpload,
} from "react-icons/bs";
// import { HiDotsHorizontal } from "react-icons/hi";
import { Button } from "../../stories/Button";
// import { Tag } from "antd";
// import { Link, withRouter } from "react-router-dom";
// import { BsThreeDots } from "react-icons/bs";
// import { BiEditAlt } from "react-icons/bi";
// import { AiFillDelete } from "react-icons/ai";
// import { Dropdown } from "react-bootstrap";
import { CommonDropDownComp } from "../../stories/CommonDropdown/CommonDropdownComp";
import { connect } from "react-redux";

import { TableComponent } from "../../stories/TableComponent/TableComponent";
import ImportPopup from "./ImportPopup";
import { getSchoolRegistationBulkUploadList } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import dummyCSV from "../../media/basic-csv.csv";

const TicketDataTable = (props) => {
    const history = useHistory();
    const [showImportPopup, setImportPopup] = useState(false);
    // console.log(props, ":::::::::::");
    const [tableShow, setTableShow] = useState(true);
    const [actionDropdown, setActionDropdown] = useState(false);
    const [actionIndex, setActionIndex] = useState("");

    const handleAction = (index) => {
        setActionIndex(index.key);
        if (!actionDropdown) {
            setActionDropdown(true);
        } else if (actionDropdown) {
            setActionDropdown(false);
        }
    };
    console.log(actionDropdown, "actionDropdown", actionIndex);

    useEffect(() => {
        props.getSchoolRegistationBulkUploadActions("i");
    }, []);

    const typeProps = {
        name: "type: All",

        options: [
            { name: "type: All", path: "" },
            { name: "type: 1", path: "" },
            { name: "type: 2", path: "" },
        ],
    };

    const statusFilter = {
        name: "Status: All",
        options: [
            { name: "All", path: "" },
            { name: "Open", path: "" },
            { name: "Draft", path: "" },
            { name: "Solved", path: "" },
        ],
    };
    const filterDropProps = {
        name: "Filter by",
        Icon: BsFilter,
        options: [
            { name: "Course - 1", path: "/playCourse" },
            { name: "Course - 2", path: "/playCourse" },
        ],
    };
    const addImport = {
        name: "Import",
        Icon: BsUpload,
        options: [
            { name: "CSV", path: "" },
            { name: "XLV", path: "" },
        ],
    };
    const TableProps = {
        data: props.schoolsRegistrationList,
        columns: [
            {
                title: "Organization Name",
                dataIndex: "organization_name",
            },
            {
                title: "Status",
                dataIndex: "status",
            },
            {
                title: "organization Code",
                dataIndex: "organization_code",
            },
            {
                title: "Details",
                dataIndex: "details",
            },
        ],
    };

    // console.log(
    //   "props.schoolsRegistrationList.data[0].dataValues",
    //   props.schoolsRegistrationList.data
    // );
    return (
        <div>
            <div className='tableActionTemplate'>
                <Row>
                    <Col sm={12} md={12} lg={3} className='mb-5 mb-sm-5 mb-md-5 mb-lg-0'>
                        <InputWithSearchComp placeholder='Search ticket' />
                    </Col>
                    <Col className='col-auto mb-5 mb-sm-5 mb-md-5 mb-lg-0'>
                        <div className='d-flex action-drops'>
                            <CommonDropDownComp {...typeProps} />
                            <CommonDropDownComp {...statusFilter} />
                            <CommonDropDownComp {...filterDropProps} />
                        </div>
                    </Col>

                    <Col className='ticket-btn col ml-auto '>
                        <div className='d-flex justify-content-end'>
                            <Button
                                label='Import'
                                btnClass='primary-outlined'
                                size='small'
                                shape='btn-square'
                                Icon={BsUpload}
                                onClick={() => setImportPopup(true)}
                            />
                            <a
                                href={dummyCSV}
                                target='_blank'
                                rel='noreferrer'
                                className='primary'
                            >
                                {/* <p className='primary mt-4'>Download</p> */}
                                <Button
                                    label='Export'
                                    btnClass='primary-outlined mx-2'
                                    size='small'
                                    shape='btn-square'
                                    Icon={BsGraphUp}
                                    style={{ color: "#231f20" }}
                                />
                            </a>

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
                <Row>
                    <Col md={12}>
                        <div className='ticket-table'>
                            {tableShow ? (
                                <TableComponent {...TableProps} />
                            ) : (
                                <div className='add-ticket'>
                                    <Button
                                        btnClass='primary'
                                        size='small'
                                        shape='btn-circle'
                                        Icon={BsPlusLg}
                                        // onClick={() => props.history.push("/NewTicket")}
                                    />
                                    <p className='text'>Register School</p>
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </div>
            <ImportPopup
                show={showImportPopup}
                setImportPopup={setImportPopup}
                onHide={() => setImportPopup(false)}
            />
        </div>
    );
};

const mapStateToProps = ({ schoolRegistration }) => {
    const { schoolsRegistrationList } = schoolRegistration;
    return { schoolsRegistrationList };
};

export default connect(mapStateToProps, {
    getSchoolRegistationBulkUploadActions: getSchoolRegistationBulkUploadList,
})(TicketDataTable);
// export default withRouter(TicketDataTable);
