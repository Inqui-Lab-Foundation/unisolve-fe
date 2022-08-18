import React, { useState } from "react";
import "./style.scss";
import {
    Row,
    Col,
 
} from "reactstrap";
import { StepsComp } from "../../stories/StepsComp/Steps";
// import { Modal } from "react-bootstrap";
import { Breadcrumb } from "antd";
import ReadMoreContent from "../../components/ReadMoreContent";
import { Avatar } from "antd";
import User from "../../assets/img/avatar1.png";
import IdeaPDF from "../../assets/img/pdfImg.png";
import IdeaAttachment from "../../assets/img/ideaAttachment.png";
import { Button } from "../../stories/Button";
import Layout from "../Layout";
import AssignEvaluator from "./AssignEvaluator";

const SubmittedIdeas = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <Layout>
            <div className="submitted-ideas">
                <Breadcrumb>
                    <Breadcrumb.Item>Ideas</Breadcrumb.Item>
                    <Breadcrumb.Item>Idea name 1</Breadcrumb.Item>
                </Breadcrumb>
                <Row className="ideas-info">
                    <Col xl={3} className=" ">
                        <label className="idea-name">
              Idea name: <span className="idea-value">Idea name 1</span>
                        </label>
                        <div className="ideas-category py-4">
                            <label>CATEGORY </label>
                            <p>Education</p>
                        </div>
                        <div className="ideas-category py-4">
                            <label>PROBLEM STATEMENT </label>
                            <p>
                                <ReadMoreContent
                                    more="Read More"
                                    
                                />
                            </p>
                        </div>
                    </Col>
                    <Col xl={2} className=" ">
                        <div className="ideas-category py-5 mt-4">
                            <label>TEAM NAME: </label>
                            <p>Brainy Badgers</p>
                        </div>
                        <div className="ideas-category py-1">
                            <label>TEAM MEMBERS: </label>
                            <p>
                                <Avatar src={User} className="avatar-imgs" />
                                <Avatar src={User} className="avatar-imgs" />
                                <Avatar src={User} className="avatar-imgs" />
                            </p>
                        </div>
                    </Col>
                    <Col xl={7} className="">
                        <div className="ideas-category py-5 mt-4">
                            <Row>
                                <Col md={6}>
                                    {" "}
                                    <label>SUBMISSION DATE : </label>
                                    <p>20 January 2021</p>
                                </Col>
                                <Col md={6} className="text-right">
                                    {" "}
                                    <Button
                                        label="Assign Evaluator"
                                        btnClass="primary"
                                        size="small"
                                        shape="btn-square"
                                        // Icon={BsPlusLg}
                                        onClick={() => setModalShow(true)}
                                    />
                                </Col>
                            </Row>
                        </div>

                        <div className="ideas-category py-1">
                            <label>STATUS </label>
                            <p>
                                <StepsComp />
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="">
                   
                    <Col xl={6} className=" ">
                        <div className="ideas-info">
                            <p className="forum-title">Idea Description</p>
                           
                        </div>
                        <div className="ideas-info">
                            <p className="forum-title">Attachments</p>
                            <p className="idea-attachm">
                                <img src={IdeaAttachment} />
                                <img src={IdeaAttachment} />
                                <img src={IdeaPDF}></img>
                                <img src={IdeaPDF}></img>
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
            <AssignEvaluator show={modalShow} onHide={() => setModalShow(false)} />
        </Layout>
    );
};

export default SubmittedIdeas;
