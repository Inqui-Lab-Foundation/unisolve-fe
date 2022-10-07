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
import { useHistory, Link } from "react-router-dom";

import { getSchoolRegistationBulkUploadList, getSupportTickets } from "../../redux/actions";
import { connect } from "react-redux";
import DataTable, { Alignment } from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { FaComments } from "react-icons/fa";


const TicketsPage = (props) => {
    const [rows, setRows] = React.useState([]);
    const dispatch = useDispatch();
    const {supportTickets} = useSelector(state=>state.mentors);
    const language = useSelector(state=>state?.mentors.mentorLanguage);

    

    const history = useHistory();
    useEffect(() => {
        dispatch(getSupportTickets(language));
    }, []);

    const SchoolsData = {
        data: supportTickets,
        columns: [
            {
                name: "S.No.",
                selector: "id",
                // width: "20%",
                // center: true,
            },
            {
                name: "Category",
                selector: "query_category",
                sortable: true,
                // width: "30%",
                // center: true,

                cell:(params)=>[<Link key={params.support_ticket_id} to={`/teacher/support-journey/ans-ticket?id=${params.support_ticket_id}`}>{params?.query_category} <FaComments/> {params.replies_count} </Link>]

                
                // cell:(params)=>[<Link key={params.support_ticket_id} onClick ={()=>handleSelect(params.support_ticket_id)}>{params?.query_category}</Link>]
            },
            {
                name: "Query",
                selector: "query_details",
                sortable: true,
                // width: "30%",
                // center: true,
            },
            {
                name: "Created By",
                selector: "created_by",
                center: true,
                // width: "20%",
                
            },
            
            {
                name: "Created On",
                // selector: "updated_at",
                cell : (record)=>[<span key={record.id}>{moment(record.updated_at).format(
                    'Do MMM, YYYY'
                )}</span>]
                // width: "20%",
                // center: right,
            },

            {
                name: "Status",
                selector: "status",
                // width: "20%",
                // center: right,
            },
        ],
    };

    // const handleSelect = (id) => {
    //     history.push({
    //         pathname: `/teacher/support-journey/ans-ticket`,
    //         itemId: id,
    //     });
    // };

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
                        <DataTableExtensions {...SchoolsData} exportHeaders export={false} print={false}>
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

export default TicketsPage;


