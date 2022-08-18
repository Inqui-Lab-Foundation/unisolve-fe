import React from "react";
import { Row, Col } from "react-bootstrap";
// import { Breadcrumb } from "antd";
// import { SearchDropdown } from "../../stories/DropdownWithSearch/DropdownWithSearch.stories";
import { Button } from "../../../stories/Button.jsx";
import { Link, withRouter } from "react-router-dom";
import { InputBox } from "../../../stories/InputBox/InputBox.jsx";
import { RichText } from "../../../stories/RichText/RichText.jsx";
import { List } from "antd";
import Layout from "../../Layout.jsx";
import { GoChevronRight } from "react-icons/go";
const QuerySection = (props) => {
    // const serachprops = {
    //     options: [
    //         { label: 10, value: "Mapusa" },
    //         { label: 20, value: "Vasco" },
    //         { label: 30, value: "Mumbai" },
    //     ],
    //     label: "Enter title here...",
    //     className: "defaultDropdown",
    // };
    const data = [
        "Racing car sprays burning fuel into crowd.",
        "Japanese princess to wed commoner.",
        "Australian walks 100km after outback crash.",
        "Man charged over missing wedding girl.",
        "Los Angeles battles huge wildfires.",
    ];
    return (
        <Layout>
            <div className="query-sec EditPersonalDetails ">
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <Row>
                            <Col xs={8}>
                                <ul className="list-group common-links list-group-horizontal ">
                                    <li className="list-group-item bg-transparent border-0 px-0">
                                        <Link
                                            exact="true"
                                            to="/discussionForum"
                                            activeClassName="is-active"
                                            className="text-link"
                                        >
                      Discussion Forum <GoChevronRight />
                                        </Link>
                                    </li>
                                    <li className="list-group-item bg-transparent border-0 px-2">
                                        <Link
                                            exact="true"
                                            to="/querySection"
                                            activeClassName="is-active"
                                            className="text-link text-bold"
                                        >
                      Ask a question
                                        </Link>
                                    </li>
                                </ul>

                                <div>
                                    <h1 className="mb-4">Ask a question</h1>

                                    <div className="create-ticket">
                                        <p className="m-0 question">Title </p>
                                        <span className="que-text">
                      Be specific and imaging you’re asking a question to
                      another person
                                        </span>
                                        <InputBox
                                            className={"defaultInput"}
                                            placeholder="Enter title here..."
                                        />
                                        <p className="m-0 question mt-5"> Description </p>
                                        <span className="que-text">
                      Include all the information someone would need to answer
                      your question
                                        </span>
                                        <RichText placeholder="Enter description here..." />
                                        {/* <TextArea placeholder="Enter your question description here..." /> */}
                                        <p className="m-0 question mt-5">Tags </p>
                                        <span className="que-text">
                      Add up to 5 tags to describe what your question is about{" "}
                                        </span>
                                        <InputBox
                                            className={"defaultInput"}
                                            placeholder="Type something e.g. Health, Innovation"
                                        />
                                    </div>
                                    <hr></hr>
                                    <Row>
                                        <Col>
                                            <Button
                                                label="Discard"
                                                btnClass="secondary"
                                                size="small"
                                                onClick={() => props.history.push("/tickets")}
                                            />
                                        </Col>
                                        <Col className="submit-btn">
                                            <Button
                                                label="Submit question"
                                                btnClass="primary"
                                                size="small"
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={4}>
                                <List
                                    size="small"
                                    header={
                                        <div className="post-list">Posting to Unisolve forum</div>
                                    }
                                    bordered
                                    dataSource={data}
                                    renderItem={(item) => <List.Item>{item}</List.Item>}
                                />
                                <p className="post-link">
                  Please be mindful of Unisolve’s <span>content policy.</span>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Layout>
    );
};

export default withRouter(QuerySection);
