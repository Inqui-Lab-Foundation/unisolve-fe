import React from "react";
import { Row, Col } from "react-bootstrap";
import { Breadcrumb } from "antd";
import { InputBox } from "../../../stories/InputBox/InputBox.jsx";
// import { TextArea } from "../../stories/TextArea/TextArea";
// import { Attachments } from "../../stories/Attachments/Attachments";
import { Button } from "../../../stories/Button.jsx";
import {  withRouter } from "react-router-dom";
import "./style.scss";
import { AiOutlineInfoCircle } from "react-icons/ai";
// import { BsPlusLg } from "react-icons/bs";
import Layout from "../../Layout.jsx";
const AddNewMentor = (props) => {
    return (
        <Layout>
            <div className="new-member-page">
                <Row>
                    <Col md={{ span: 0, offset: 0 }} xl={{ span: 6, offset: 3 }}>
                        <Breadcrumb>
                            <Breadcrumb.Item>Teams & Mentor</Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href="frontend/workspace/unisolve-fe/src/Student/Pages/TeamsMentors/AddNewMentor">Add mentor</a>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <div>
                            <p className="raiseTicket">Add new mentor details</p>
                            <div className="create-ticket">
                                <p className="question">Lorem ipsum dolor sit amet cons</p>
                                <Row>
                                    <Col md={6} className="mb-5 mb-xl-0">
                                        <p className="name-req">First name (required)</p>
                                        <InputBox
                                            className={"defaultInput"}
                                            placeholder="Enter teammmates first name"
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <p className="name-req">Last name (required)</p>
                                        <InputBox
                                            className={"defaultInput"}
                                            placeholder="Enter teammmates first name"
                                        />
                                    </Col>
                                </Row>

                                <p className="name-req mt-5">Email address(required)</p>

                                <InputBox
                                    className={"defaultInput"}
                                    placeholder="Enter teammmates email address"
                                />
                                <span className="que-text">
                                    <AiOutlineInfoCircle /> Note: Official login credentials will
                  be sent to your mentor on this email.
                                </span>
                            </div>

                            <hr className="mt-4 mb-4"></hr>
                            <Row>
                                <Col>
                                    <Button
                                        label="Discard"
                                        btnClass="secondary"
                                        size="small"
                                        onClick={() => props.history.push("/teams")}
                                    />
                                </Col>
                                <Col className="submit-btn">
                                    <Button
                                        label="Submit details"
                                        btnClass="default"
                                        size="small"
                                    />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </Layout>
    );
};

export default withRouter(AddNewMentor);
