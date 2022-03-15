import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Breadcrumb } from "antd";
import { InputBox } from "../../stories/InputBox/InputBox";
import { TextArea } from "../../stories/TextArea/TextArea";
import { Attachments } from "../../stories/Attachments/Attachments";
import { Button } from "../../stories/Button";
import { Link, withRouter } from "react-router-dom";
import "./style.scss";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { Accordion } from "react-bootstrap";
import Layout from "../../Layout";
const AddNewMember = (props) => {
  const [queryProps, setQueryProps] = useState([{ title: "Teammate 1" }]);
  const serachprops = {
    placholder: "Enter teammmates first name",
    className: "default",
  };

  const addnewMember = () => {
    let query = queryProps.length + 1;
    let newQuery = {
      title: `Teammate ${query}`,
    };
    let newQueryAdd = [];
    queryProps.push(newQuery);
    setQueryProps([...queryProps]);
  };
  const optionItems = queryProps;
  return (
    <Layout>
      <div className="new-member-page">
        <Row>
          <Col md={{ span: 0, offset: 0 }} xl={{ span: 6, offset: 3 }}>
            <Breadcrumb>
              <Breadcrumb.Item>Teams & Mentor</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">Add new member</a>
              </Breadcrumb.Item>
            </Breadcrumb>
            <div>
              <p className="raiseTicket">Add new Teammates details</p>
              <Accordion>
                {optionItems.map((que, index) => {
                  return (
                    <Accordion.Item eventKey={index}>
                      <Accordion.Header className="question">
                        {que.title}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="create-ticket">
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

                          <p className="name-req mt-5">
                            Email address(required)
                          </p>

                          <InputBox
                            className={"defaultInput"}
                            placeholder="Enter teammmates email address"
                          />
                          <span className="que-text">
                            <AiOutlineInfoCircle /> Note: Official login
                            credentials will be sent to your teammate on this
                            email.
                          </span>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion>

              <Button
                label="Add one more member"
                btnClass="primary"
                size="small"
                Icon={BsPlusLg}
                shape="btn-square"
                onClick={() => {
                  addnewMember();
                }}
              />

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

export default withRouter(AddNewMember);
