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
  const TableProps = {
    data: [
      {
        key: "1",
        name: "#2021-3454",
        status: ["Open"],
        category: "Payment Gateway",
        desc: "Is the Payment Gateway secure?",
        createdDate: "Dec 30, 2021, 09:42 PM",
        viewDetails: "view details",
        action: <HiDotsHorizontal />,
      },
      {
        key: "2",
        name: "#2021-3454",
        status: ["Solved"],
        category: "Payment Gateway",
        desc: "Is the Payment Gateway secure?",
        createdDate: "Dec 30, 2021, 09:42 PM",
        viewDetails: "view details",
        action: <HiDotsHorizontal />,
      },
      {
        key: "3",
        name: "#2021-3454",
        status: ["Draft"],
        category: "Payment Gateway",
        desc: "Is the Payment Gateway secure?",
        createdDate: "Dec 30, 2021, 09:42 PM",
        viewDetails: "view details",
        action: <HiDotsHorizontal />,
      },
      {
        key: "4",
        name: "#2021-3454",
        status: ["Open"],
        category: "Payment Gateway",
        desc: "Is the Payment Gateway secure?",
        createdDate: "Dec 30, 2021, 09:42 PM",
        viewDetails: "view details",
        action: <HiDotsHorizontal />,
      },
    ],
    columns: [
      {
        title: "TICKET ID",
        dataIndex: "name",
      },
      {
        title: "STATUS",
        dataIndex: "status",
        render: (status) => (
          <span>
            {status.map((tag) => {
              let color = "gold";
              if (tag === "Solved") {
                color = "green";
              }
              if (tag === "Draft") {
                color = "red";
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: "CATEGORY",
        dataIndex: "category",
      },
      {
        title: "DISCRIPTION",
        dataIndex: "desc",
      },
      {
        title: "CREATED DATE",
        dataIndex: "createdDate",
      },
      {
        title: "",
        dataIndex: "viewDetails",
        render: (text) => (
          <a
            onClick={() => props.history.push("/viewTicketDetails")}
            className="view-link"
          >
            {text}
          </a>
        ),
      },
      {
        title: "",
        dataIndex: "action",
        render: (text) => (
          <Dropdown
            className="action-dropdown"
            onClick={(e) => {
              // setActionHandler(e, data);
            }}
          >
            <Dropdown.Toggle id="dropdown-action">
              <div>
                <BsThreeDots
                  color={"#7C7C7C"}
                  style={{
                    backgroundColor: `${"#EEEEEE"}`,
                    height: "26px",
                  }}
                />
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href="#/action-2"
                // onClick={() => setRescheduleShow(true)}
              >
                Mark as Solved
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-2"
                // onClick={() => setRescheduleShow(true)}
              >
                Edit Ticket
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-1"
                // onClick={() => setCancelShow(true)}
              >
                Delete Ticket
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ),
      },
    ],
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
                <TableComponent {...TableProps} />
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
