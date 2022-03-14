import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Breadcrumb } from "antd";
import { SearchDropdown } from "../../stories/DropdownWithSearch/DropdownWithSearch.stories";
import { TextArea } from "../../stories/TextArea/TextArea";
import { Attachments } from "../../stories/Attachments/Attachments";
import { Button } from "../../stories/Button";
import { Link, withRouter } from "react-router-dom";

const NewTicket = (props) => {
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
    <div className="new-ticket-page">
      <Row>
        <Col md={{ span: 0, offset: 0 }} xl={{ span: 6, offset: 3 }}>
          <Breadcrumb>
            <Breadcrumb.Item>Tickets</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">New Tickets</a>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div>
            <p className="raiseTicket">Raise a new ticket</p>
            <div className="create-ticket">
              <p className="m-0 question">What is your question about? </p>
              <span className="que-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <SearchDropdown {...serachprops} />
              <p className="m-0 question mt-5">Question Description </p>
              <span className="que-text">
                Include all the information someone would need to answer your
                question
              </span>
              <TextArea placeholder="Enter your question description here..." />
              <p className="m-0 question mt-5 mb-3">
                Add attachments <span className="que-text"> (optional)</span>{" "}
              </p>

              <Attachments />
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
                  label="Save as Draft"
                  btnClass="primary-outline"
                  size="small"
                />
                <Button label="Submit" btnClass="default" size="small" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(NewTicket);
