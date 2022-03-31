import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Breadcrumb } from "antd";
import { InputBox } from "../../stories/InputBox/InputBox";
import { TextArea } from "../../stories/TextArea/TextArea";
import { Attachments } from "../../stories/Attachments/Attachments";
import { Button } from "../../stories/Button";
import { Link, withRouter } from "react-router-dom";
import "./style.scss";
import "../Student.scss";
import { GoChevronRight } from "react-icons/go";
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
      <div className="EditPersonalDetails new-member-page">
        <Row>
          <Col className="col-xl-10 offset-xl-1 offset-md-0">
            <ul class="list-group common-links list-group-horizontal ">
              <li class="list-group-item bg-transparent border-0 px-0">
                <Link
                  exact
                  to="/teams"
                  activeClassName="is-active"
                  className="text-link"
                >
                  Teams & Mentor <GoChevronRight />
                </Link>
              </li>
              <li class="list-group-item bg-transparent border-0 px-2">
                <Link
                  exact
                  to="/addNewMember"
                  activeClassName="is-active"
                  className="text-link text-bold"
                >
                  Add new member
                </Link>
              </li>
            </ul>
            {/* <Breadcrumb>
                <Breadcrumb.Item>Teams & Mentor</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">Add new member</a>
                </Breadcrumb.Item>
              </Breadcrumb> */}
            <div>
              <Col>
                <h1 className="mb-4">Add new Teammates details</h1>
              </Col>

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
                <Col className="col-xs-12 col-sm-6">
                  <Button
                    label="Discard"
                    btnClass="secondary"
                    size="small"
                    onClick={() => props.history.push("/teams")}
                  />
                </Col>
                <Col className="submit-btn col-xs-12 col-sm-6">
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
