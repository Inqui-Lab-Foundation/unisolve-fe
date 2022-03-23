import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { InputWithSearchComp } from "../../stories/InputWithSearch/InputWithSearch";
import { DropDownComp } from "../../stories/DropdownComp/DropdownComp";
import { BsChevronRight, BsFilter, BsPlusLg } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import { Button } from "../../stories/Button";
import { Tag } from "antd";
import { Link, withRouter } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";
import { TableComponent } from "../../stories/TableComponent/TableComponent";
const TicketDataTable = (props) => {
  console.log(props,":::::::::::")
  const [tableShow, setTableShow] = useState(true);
  const [actionDropdown, setActionDropdown] = useState(false);
  const [actionIndex, setActionIndex] = useState("");

  const handleAction = (index) => {
    setActionIndex(index.key);
    if (!actionDropdown) {
      setActionDropdown(true);
    } else if (actionDropdown) {
      setActionDropdown(false);
    }
  };
  console.log(actionDropdown, "actionDropdown", actionIndex);
  const filterDropProps = {
    label: "Filter by",
    Icon: BsFilter,
    className: "defaultDropdown",
  };

 

  const typeProps = {
    options: ["type: All", "type: 1", "type: 2"],
  };
  const statusProps = {
    options: ["Open", "Draft", "Solved"],
  };
  const statusFilter = {
    options: ["All", "Open", "Draft", "Solved"],
  };
  return (
    <div>
      <div className="tableActionTemplate">
        <Row>
          <Col sm={12} md={12} lg={3} className="mb-5 mb-sm-5 mb-md-5 mb-lg-0">
            <InputWithSearchComp placeholder="Search ticket" />
          </Col>
          <Col className="col-auto mb-5 mb-sm-5 mb-md-5 mb-lg-0">
            <div className="d-flex">
              <DropDownComp
                label="type: All"
                className="defaultDropdown"
                {...typeProps}
              />
              <DropDownComp
                label="Status: All"
                className="defaultDropdown"
                {...statusProps}
              />
              <DropDownComp
                label="Filter by"
                //   Icon = {BsFilter}
                className="defaultDropdown"
                {...statusFilter}
              />
            </div>
          </Col>

          <Col className="ticket-btn col ml-auto ">
            <Button
              label="New Ticket"
              btnClass="primary"
              size="small"
              shape="btn-square"
              Icon={BsPlusLg}
              onClick={() => props.history.push("/NewTicket")}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="ticket-table">
              {tableShow ? (
                <TableComponent {...props} />
              ) : (
                <div className="add-ticket">
                  <Button
                    btnClass="primary"
                    size="small"
                    shape="btn-circle"
                    Icon={BsPlusLg}
                    onClick={() => props.history.push("/NewTicket")}
                  />
                  <p className="text">Add a Ticket</p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default withRouter(TicketDataTable);
