import React from "react";
import { Row, Col } from "react-bootstrap";
import "../Student.scss";
import { SearchDropdown } from "../../stories/DropdownWithSearch/DropdownWithSearch.stories";
import { TextArea } from "../../stories/TextArea/TextArea";
import { Attachments } from "../../stories/Attachments/Attachments";
import { Button } from "../../stories/Button";
import { withRouter } from "react-router-dom";
import Layout from "../../Admin/Layout";
import { BreadcrumbTwo } from "../../stories/BreadcrumbTwo/BreadcrumbTwo";

const NewTicket = (props) => {
    const headingDetails = {
        title: "Raise a new ticket",

        options: [
            {
                title: "Tickets",
                path: "/tickets",
            },
            {
                title: "New Tickets",
                path: "/NewTicket",
            },
        ],
    };
    const serachprops = {
        options: [
            { label: 10, value: "Mapusa" },
            { label: 20, value: "Vasco" },
            { label: 30, value: "Mumbai" },
        ],
        label: "Select question category",
        className: "defaultDropdown",
    };
    return (
        <Layout>
            <div className='EditPersonalDetails new-ticket-page'>
                <Row>
                    <Col className='col-xl-10 offset-xl-1 offset-md-0'>
                        <BreadcrumbTwo {...headingDetails} />

                        <div>
                            <div className='create-ticket'>
                                <p className='m-0 question'>What is your question about? </p>
                                <span className='que-text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </span>
                                <SearchDropdown {...serachprops} />
                                <p className='m-0 question mt-5'>Question Description </p>
                                <span className='que-text'>
                  Include all the information someone would need to answer your
                  question
                                </span>
                                <TextArea placeholder='Enter your question description here...' />
                                <p className='m-0 question mt-5 mb-3'>
                  Add attachments <span className='que-text'> (optional)</span>{" "}
                                </p>

                                <Attachments />
                            </div>
                            <hr></hr>
                            <Row>
                                <Col>
                                    <Button
                                        label='Discard'
                                        btnClass='secondary'
                                        size='small'
                                        onClick={() => props.history.push("/tickets")}
                                    />
                                </Col>
                                <Col className='submit-btn'>
                                    <Button
                                        label='Save as Draft'
                                        btnClass='primary-outline'
                                        size='small'
                                    />
                                    <Button label='Submit' btnClass='default' size='small' />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </Layout>
    );
};

export default withRouter(NewTicket);
