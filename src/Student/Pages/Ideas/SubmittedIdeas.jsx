/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
import React from "react";
import "./style.scss";
import {
    Row,
    Col,
    // Card,
    // CardImg,
    // CardBody,
    // CardTitle,
    // CardSubtitle,
} from "reactstrap";
import { StepsComp } from "../../../stories/StepsComp/Steps.jsx";

import { Breadcrumb } from "antd";
import ReadMoreContent from "../../../components/ReadMoreContent";
import { Avatar } from "antd";
import User from "../../../assets/media/img/avatar1.png";
import IdeaPDF from "../../../assets/media/img/pdfImg.png";
import IdeaAttachment from "../../../assets/media/img/ideaAttachment.png";

import Layout from "../../Layout.jsx";

const SubmittedIdeas = () => {
    return (
        <Layout>
            <div className="submitted-ideas">
                <Breadcrumb>
                    <Breadcrumb.Item>Ideas</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="frontend/workspace/unisolve-fe/src/Student/Pages/Ideas/SubmittedIdeas">Submitted Ideas</a>
                    </Breadcrumb.Item>
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
                                    children="Hi,

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
laboris nisi ut aliquip ex ea commodo consequat.Hi,

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
laboris nisi ut aliquip ex ea commodo consequat."
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
                            <label>SUBMISSION DATE : </label>
                            <p>20 January 2021</p>
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
                    <Col xl={6} className="ideas-info ">
                        <p className="forum-title">Idea Description</p>
                        <p className="desc-content">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham. Where can I get some? There are many variations of passages
            of Lorem Ipsum available, but the majority have suffered alteration
            in some form, by injected humour, or randomised words which don't
            look even slightly believable. If you are going to use a passage of
            Lorem Ipsum, you need to be sure there isn't anything embarrassing
            hidden in the middle of text. All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary, making this
            the first true generator on the Internet. It uses a dictionary of
            over 200 Latin words, combined with a handful of model sentence
            structures, to generate Lorem Ipsum which looks reasonable. The
            generated Lorem Ipsum is therefore always free from repetition,
            injected humour, or non-characteristic words etc.
                        </p>
                    </Col>
                    <Col xl={6} className=" ">
                        <div className="ideas-info">
                            <p className="forum-title">Idea Description</p>
                            <p  className="desc-content">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            </p>
                        </div>
                        <div className="ideas-info">
                            <p className="forum-title">Attachments</p>
                            <p className="idea-attachm">
                                <img src={IdeaAttachment}/>
                                <img src={IdeaAttachment}/>
                                <img src={IdeaPDF}></img>
                                <img src={IdeaPDF}></img>
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Layout>
    );
};

export default SubmittedIdeas;
