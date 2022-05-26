import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { InputWithSearchComp } from "../../stories/InputWithSearch/InputWithSearch";
import { BsFilter, BsPlusLg } from "react-icons/bs";
import { Button } from "../../stories/Button";
import { withRouter } from "react-router-dom";
import { CommonDropDownComp } from "../../stories/CommonDropdown/CommonDropdownComp";

import { TableComponent } from "../../stories/TableComponent/TableComponent";
const ReassignDataTable = (props) => {
  console.log(props, ":::::::::::");
  const [tableShow, setTableShow] = useState(true);
  const [actionDropdown, setActionDropdown] = useState(false);
  const [actionIndex, setActionIndex] = useState("");

  console.log(actionDropdown, "actionDropdown", actionIndex);

  const filterDropProps = {
    name: "Sort by",
    Icon: BsFilter,
    options: [
      { name: "Course - 1", path: "/playCourse" },
      { name: "Course - 2", path: "/playCourse" },
    ],
  };
  return (
    <div>
      <div className='tableActionTemplate'>
        <Row>
          <Col sm={12} md={12} lg={3} className='mb-5 mb-sm-5 mb-md-5 mb-lg-0'>
            <InputWithSearchComp placeholder='Search ticket' />
          </Col>
          <Col className='col-auto mb-5 mb-sm-5 mb-md-5 mb-lg-0'>
            <div className='d-flex action-drops'>
              <CommonDropDownComp {...filterDropProps} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className='ticket-table'>
              {tableShow ? (
                <TableComponent {...props} />
              ) : (
                <div className='add-ticket'>
                  <Button
                    btnClass='primary'
                    size='small'
                    shape='btn-circle'
                    Icon={BsPlusLg}
                    onClick={() => props.history.push("/NewTicket")}
                  />
                  <p className='text'>Add a Ticket</p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default withRouter(ReassignDataTable);
