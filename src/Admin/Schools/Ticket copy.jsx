import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Tabs } from "antd";
import TicketDataTable from "./TicketDataTable";
import Layout from "../../Admin/Layout";
import { Tag } from "antd";
import { Link, withRouter } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";
import {
  BsChevronRight,
  BsFilter,
  BsPlusLg,
  BsGraphUp,
  BsUpload,
} from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import { CommonDropDownComp } from "../../stories/CommonDropdown/CommonDropdownComp";
import { BreadcrumbComp } from "../../stories/Breadcrumb/BreadcrumbComp";

import { columns, data } from "../../data/dataTable";
import { Button } from "../../stories/Button";
import dummyCSV from "../../media/basic-csv.csv";
import ImportPopup from "./ImportPopup";
import { useHistory } from "react-router-dom";

import { getSchoolRegistationBulkUploadList } from "../../redux/actions";
import { connect } from "react-redux";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

const { TabPane } = Tabs;
const TicketsPage = (props) => {
  const [showImportPopup, setImportPopup] = useState(false);
  const history = useHistory();
  useEffect(() => {
    props.getSchoolRegistationBulkUploadActions("i");
  }, []);

  const callback = (key) => {};
  const TableProps = {
    data: [
      {
        key: "1",
        name: "#2021-3454",
        status: ["Open"],
        category: "Payment Gateway",
        desc: "Is the Payment Gateway secure?",

        viewDetails: "view details",
        action: <HiDotsHorizontal />,
      },
      {
        key: "2",
        name: "#2021-3454",
        status: ["Solved"],
        category: "Payment Gateway",
        desc: "Is the Payment Gateway secure?",

        viewDetails: "view details",
        action: <HiDotsHorizontal />,
      },
      {
        key: "3",
        name: "#2021-3454",
        status: ["Draft"],
        category: "Payment Gateway",
        desc: "Is the Payment Gateway secure?",

        viewDetails: "view details",
        action: <HiDotsHorizontal />,
      },
      {
        key: "4",
        name: "#2021-3454",
        status: ["Open"],
        category: "Payment Gateway",
        desc: "Is the Payment Gateway secure?",

        viewDetails: "view details",
        action: <HiDotsHorizontal />,
      },
    ],
    columns: [
      {
        title: "Organization Name",
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
        title: "Organization Code",
        dataIndex: "category",
      },
      {
        title: "Details",
        dataIndex: "desc",
      },

      {
        title: "",
        dataIndex: "viewDetails",
        render: (text) => <a className='view-link'>{text}</a>,
      },
      {
        title: "",
        dataIndex: "action",
        render: (text) => (
          <CommonDropDownComp
            className='action-dropdown'
            {...filterDropProps}
          />
        ),
      },
    ],
  };
  const filterDropProps = {
    name: "",
    Icon: HiDotsHorizontal,
    options: [
      { name: " Mark as Solved", path: "" },
      { name: "Edit Ticket", path: "" },
      { name: "Delete Ticket", path: "" },
    ],
  };
  const TableOpenProps = {
    data: [
      {
        key: "1",
        name: "#2021-3454",
        status: ["Open"],
        category: "Payment Gateway",
        desc: "Is the Payment Gateway secure?",

        viewDetails: "view details",
        action: <HiDotsHorizontal />,
      },
      {
        key: "2",
        name: "#2021-3054",
        status: ["Open"],
        category: "Payment Gateway",
        desc: "Is the Payment Gateway secure?",

        viewDetails: "view details",
        action: <HiDotsHorizontal />,
      },
      {
        key: "3",
        name: "#2021-3454",
        status: ["Open"],
        category: "Payment Gateway",
        desc: "Is the Payment Gateway secure?",

        viewDetails: "view details",
        action: <HiDotsHorizontal />,
      },
      {
        key: "4",
        name: "#2021-3454",
        status: ["Open"],
        category: "Payment Gateway",
        desc: "Is the Payment Gateway secure?",

        viewDetails: "view details",
        action: <HiDotsHorizontal />,
      },
    ],
    columns: [
      {
        title: "Organization Name",
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
        title: "Organization Code",
        dataIndex: "category",
      },
      {
        title: "Details",
        dataIndex: "desc",
      },

      {
        title: "",
        dataIndex: "viewDetails",
        render: (text) => (
          <a
            // onClick={() => props.history.push("/viewTicketDetails")}
            className='view-link'
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
            className='action-dropdown'
            onClick={(e) => {
              // setActionHandler(e, data);
            }}
          >
            <Dropdown.Toggle id='dropdown-action'>
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
                href='#/action-2'
                // onClick={() => setRescheduleShow(true)}
              >
                Mark as Solved
              </Dropdown.Item>
              <Dropdown.Item
                href='#/action-2'
                // onClick={() => setRescheduleShow(true)}
              >
                Edit Ticket
              </Dropdown.Item>
              <Dropdown.Item
                href='#/action-1'
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
  const TableSolvedProps = {
    data: [
      {
        key: "1",
        name: "#2021-3454",
        status: ["Solved"],
        category: "Payment Gateway",
        desc: "Is the Payment Gateway secure?",

        viewDetails: "view details",
        action: <HiDotsHorizontal />,
      },
      {
        key: "2",
        name: "#2021-3454",
        status: ["Solved"],
        category: "Payment Gateway",
        desc: "Is the Payment Gateway secure?",

        viewDetails: "view details",
        action: <HiDotsHorizontal />,
      },
      {
        key: "3",
        name: "#2021-3454",
        status: ["Solved"],
        category: "Payment Gateway",
        desc: "Is the Payment Gateway secure?",

        viewDetails: "view details",
        action: <HiDotsHorizontal />,
      },
    ],
    columns: [
      {
        title: "Organization Name	",
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
        title: "Organization Code",
        dataIndex: "category",
      },
      {
        title: "Details",
        dataIndex: "desc",
      },

      {
        title: "",
        dataIndex: "viewDetails",
        render: (text) => (
          <a
            // onClick={() => props.history.push("/viewTicketDetails")}
            className='view-link'
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
            className='action-dropdown'
            onClick={(e) => {
              // setActionHandler(e, data);
            }}
          >
            <Dropdown.Toggle id='dropdown-action'>
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
                href='#/action-2'
                // onClick={() => setRescheduleShow(true)}
              >
                Mark as Solved
              </Dropdown.Item>
              <Dropdown.Item
                href='#/action-2'
                // onClick={() => setRescheduleShow(true)}
              >
                Edit Ticket
              </Dropdown.Item>
              <Dropdown.Item
                href='#/action-1'
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
  const TableDraftProps = {
    data: [
      {
        key: "1",
        name: "#2021-3454",
        status: ["Draft"],
        category: "Payment Gateway",
        desc: "Is the Payment Gateway secure?",
        createdDate: "Dec 30, 2021, 09:42 PM",
        viewDetails: "view details",
        action: <HiDotsHorizontal />,
      },
      {
        key: "2",
        name: "#2021-3454",
        status: ["Draft"],
        category: "Payment Gateway",
        desc: "Is the Payment Gateway secure?",
        createdDate: "Dec 30, 2021, 09:42 PM",
        viewDetails: "view details",
        action: <HiDotsHorizontal />,
      },
    ],
  };

  const SchoolsData = {
    data: props.schoolsRegistrationList,
    columns: [
      {
        name: "S.No.",
        selector: "organization_id",
      },
      {
        name: "Organization Code",
        selector: "organization_code",
      },
      {
        name: "Organization Name",
        selector: "organization_name",
      },
      {
        name: "Status",
        selector: "status",
      },
    ],
  };

  // console.log("Jhanii", props.schoolsRegistrationList);

  const columns = [
    {
      name: "S.No",
      selector: "sno",
      sortable: true,
    },
    {
      name: "Organization Code",
      selector: "organization_code",
      sortable: true,
    },
    {
      name: "Organization Name",
      selector: "organization_name",
      sortable: true,
    },
    {
      name: "Status",
      selector: "status",
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      sno: 1,
      organization_code: "Jhani Orga",
      organization_name: "Jhani Name",
      status: "Active",
    },
    {
      id: 2,
      sno: 2,
      organization_code: "Jhani Orga2",
      organization_name: "Jhani Name2",
      status: "Active2",
    },
  ];

  const tableData = {
    columns,
    data,
  };

  return (
    <Layout>
      <Container className='ticket-page mb-50'>
        <Row className='mt-5 pt-5'>
          <h2>Schools Registered</h2>
          {/* <div className='ticket-data'>
            <Tabs defaultActiveKey='1' onChange={callback}>
              <TabPane tab='All' key='1'>
                <TicketDataTable {...TableProps} />
              </TabPane>
              <TabPane tab='Schools' key='2'>
                <TicketDataTable {...TableOpenProps} />
              </TabPane>
              <TabPane tab='Universities' key='3'>
                <TicketDataTable {...TableSolvedProps} />
              </TabPane>
            </Tabs>
          </div> */}

          <Col className='ticket-btn col ml-auto '>
            <div className='d-flex justify-content-end'>
              <Button
                label='Import'
                btnClass='primary-outlined'
                size='small'
                shape='btn-square'
                Icon={BsUpload}
                onClick={() => setImportPopup(true)}
              />
              {/* <a
                href={dummyCSV}
                target='_blank'
                rel='noreferrer'
                className='primary'
              >
                <Button
                  label='Export'
                  btnClass='primary-outlined mx-2'
                  size='small'
                  shape='btn-square'
                  Icon={BsGraphUp}
                  style={{ color: "#231f20" }}
                />
              </a> */}

              <Button
                label='Add New School'
                btnClass='primary'
                size='small'
                shape='btn-square'
                Icon={BsPlusLg}
                onClick={() => history.push("/admin/register-new-schools")}
              />
            </div>
          </Col>

          <DataTableExtensions {...SchoolsData}>
            <DataTable
              columns={columns}
              data={data}
              noHeader
              defaultSortField='id'
              defaultSortAsc={false}
              pagination
              highlightOnHover
            />
          </DataTableExtensions>
        </Row>
      </Container>
      <ImportPopup
        show={showImportPopup}
        setImportPopup={setImportPopup}
        onHide={() => setImportPopup(false)}
      />
    </Layout>
  );
};

// export default TicketsPage;

const mapStateToProps = ({ schoolRegistration }) => {
  const { schoolsRegistrationList } = schoolRegistration;
  return { schoolsRegistrationList };
};

export default connect(mapStateToProps, {
  getSchoolRegistationBulkUploadActions: getSchoolRegistationBulkUploadList,
})(TicketsPage);
