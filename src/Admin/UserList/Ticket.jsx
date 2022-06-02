import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Tabs } from "antd";
import TicketDataTable from "../HelpPages/TicketDataTable";
import Layout from "../../Admin/Layout";
import { Tag, Avatar } from "antd";
import { Link, withRouter } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";
import { BsChevronRight, BsFilter, BsPlusLg } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import { CommonDropDownComp } from "../../stories/CommonDropdown/CommonDropdownComp";
import { Button } from "../../stories/Button";
import { InputWithSearchComp } from "../../stories/InputWithSearch/InputWithSearch";
const { TabPane } = Tabs;

const TicketsPage = (props) => {
  const [student, activeStudent] = useState(false);
  const [menter, activeMenter] = useState(false);
  const [evaluater, activeEvaluater] = useState(false);
  const callback = (key) => {};
  const TableProps = {
    data: [
      {
        key: "1",
        // profile: "#2021-3454",
        profile:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        name: "Ken Khoi",
        id: "US–0017",
        class: "Class - 4",
        age: "9 yrs",
        email: "manhhachkt08@gmail.com",
        gender: "Male",
        action: <HiDotsHorizontal />,
      },
      {
        key: "2",
        profile:
          "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
        name: "Zach Swat",
        id: "US–0018",
        class: "Class - 2",
        age: "10 yrs",
        email: "trungkienspktnd@gamail.com",
        gender: "Male",
        action: <HiDotsHorizontal />,
      },
      {
        key: "3",
        profile:
          "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
        name: "Jane Coper",
        id: "US–0019",
        class: "Class - 7",
        age: "10 yrs",
        email: "danghoang87hl@gmail.com",
        gender: "Female",
        action: <HiDotsHorizontal />,
      },
      {
        key: "4",
        profile:
          "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
        name: "Jenny Bell",
        id: "US–0020",
        class: "Class - 9",
        age: "14 yrs",
        email: "trungkienspktnd@gamail.com",
        gender: "Female",
        action: <HiDotsHorizontal />,
      },
    ],
    columns: [
      {
        title: "PROFILE",
        dataIndex: "profile",
        key: "image",
        render: (text, record) => {
          return (
            <div>
              {/* <img src={record.profile} alt={record.profile} /> */}
              <Avatar src={record.profile} size={50} />
            </div>
          );
        },
      },
      {
        title: "NAME",
        dataIndex: "name",
      },
      {
        title: "ID",
        dataIndex: "id",
      },
      {
        title: "CLASS",
        dataIndex: "class",
      },
      {
        title: "AGE",
        dataIndex: "age",
      },
      {
        title: "EMAIL",
        dataIndex: "email",
      },
      {
        title: "GENDER",
        dataIndex: "gender",
      },

      {
        title: "ACTIONS",
        dataIndex: "action",
        render: (text) => (
          <CommonDropDownComp
            className='action-dropdown'
            {...filterDropProps}
          />
        ),
      },
    ],
    addBtn: 0,
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
        profile:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        name: "Aydin Khan",
        id: "UM–0017",
        isActive: ["Draft"],
        age: "29 yrs",
        email: "manhhachkt08@gmail.com",
        gender: "Female",
        action: <HiDotsHorizontal />,
      },
      {
        key: "2",
        profile:
          "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
        name: "Zaid Sawant",
        id: "UM–0019",
        isActive: ["Open"],
        age: "32 yrs",
        email: "trungkienspktnd@gamail.com",
        gender: "Female",
        action: <HiDotsHorizontal />,
      },
      {
        key: "3",
        profile:
          "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
        name: "Abigail Coper",
        id: "UM–0015",
        isActive: ["Solved"],
        age: "35 yrs",
        email: "ckctm12@gmail.com",
        gender: "Female",
        action: <HiDotsHorizontal />,
      },
      {
        key: "4",
        profile:
          "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
        name: "Taniya Bell",
        id: "UM–0018",
        isActive: ["Solved"],
        age: "45 yrs",
        email: "manhhachkt08@gmail.com",
        gender: "Male",
        action: <HiDotsHorizontal />,
      },
    ],
    columns: [
      {
        title: "PROFILE",
        dataIndex: "profile",
        key: "image",
        render: (text, record) => {
          return (
            <div>
              {/* <img src={record.profile} alt={record.profile} /> */}
              <Avatar src={record.profile} size={50} />
            </div>
          );
        },
      },
      {
        title: "NAME",
        dataIndex: "name",
      },
      {
        title: "ID",
        dataIndex: "id",
      },
      {
        title: "STATUS",
        dataIndex: "isActive",
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
        title: "AGE",
        dataIndex: "age",
      },
      {
        title: "EMAIL",
        dataIndex: "email",
      },
      {
        title: "GENDER",
        dataIndex: "gender",
      },
      {
        title: "ACTIONS",
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
    addBtn: 1,
    addMentor: true,
  };
  const TableSolvedProps = {
    data: [
      {
        key: "1",
        profile:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        name: "Aydin Khan",
        id: "UM–0017",
        isActive: ["Draft"],
        age: "29 yrs",
        email: "manhhachkt08@gmail.com",
        gender: "Female",
        action: <HiDotsHorizontal />,
      },
      {
        key: "2",
        profile:
          "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
        name: "Zaid Sawant",
        id: "UM–0019",
        isActive: ["Open"],
        age: "32 yrs",
        email: "trungkienspktnd@gamail.com",
        gender: "Female",
        action: <HiDotsHorizontal />,
      },
      {
        key: "3",
        profile:
          "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
        name: "Abigail Coper",
        id: "UM–0015",
        isActive: ["Solved"],
        age: "35 yrs",
        email: "ckctm12@gmail.com",
        gender: "Female",
        action: <HiDotsHorizontal />,
      },
      {
        key: "4",
        profile:
          "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
        name: "Taniya Bell",
        id: "UM–0018",
        isActive: ["Solved"],
        age: "45 yrs",
        email: "manhhachkt08@gmail.com",
        gender: "Male",
        action: <HiDotsHorizontal />,
      },
    ],
    columns: [
      {
        title: "PROFILE",
        dataIndex: "profile",
        key: "image",
        render: (text, record) => {
          return (
            <div>
              {/* <img src={record.profile} alt={record.profile} /> */}
              <Avatar src={record.profile} size={50} />
            </div>
          );
        },
      },
      {
        title: "NAME",
        dataIndex: "name",
      },
      {
        title: "ID",
        dataIndex: "id",
      },
      {
        title: "STATUS",
        dataIndex: "isActive",
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
        title: "AGE",
        dataIndex: "age",
      },
      {
        title: "EMAIL",
        dataIndex: "email",
      },
      {
        title: "GENDER",
        dataIndex: "gender",
      },
      {
        title: "ACTIONS",
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
    addBtn: 1,
    addEvaluator: true,
  };

  const typeProps = {
    name: "type: All",

    options: [
      { name: "type: All", path: "" },
      { name: "type: 1", path: "" },
      { name: "type: 2", path: "" },
    ],
  };

  const statusFilter = {
    name: "Status: All",
    options: [
      { name: "All", path: "" },
      { name: "Open", path: "" },
      { name: "Draft", path: "" },
      { name: "Solved", path: "" },
    ],
  };
  const filterDropProps1 = {
    name: "Filter by",
    Icon: BsFilter,
    options: [
      { name: "Course - 1", path: "/playCourse" },
      { name: "Course - 2", path: "/playCourse" },
    ],
  };

  const addImport = {
    name: "Import",
    Icon: BsFilter,
    options: [
      { name: "CSV", path: "" },
      { name: "XLV", path: "" },
    ],
  };
  const addExport = {
    name: "Export",
    Icon: BsFilter,
    options: [
      { name: "All", path: "" },
      { name: "Open", path: "" },
      { name: "Draft", path: "" },
      { name: "Solved", path: "" },
    ],
  };

  const changeTab = (e) => {
    // console.log(typeof e);
    if (e === "3") {
      // console.log("3");
      activeEvaluater(!evaluater);
      activeMenter(false);
    } else if (e === "2") {
      // console.log("2");
      activeMenter(!menter);
      activeEvaluater(false);
    } else {
      // console.log("1");
      activeEvaluater(false);
      activeMenter(false);
      // activeStudent()
    }
  };

  // const onClick = () => activeMenter(true);
  console.log("======menter", menter);
  console.log("======evaluater", evaluater);

  return (
    <Layout>
      <Container className='ticket-page mb-50 userlist'>
        <Row className='mt-5 pt-5'>
          <h2>User List</h2>
          <div className='ticket-data'>
            <Tabs defaultActiveKey='1' onChange={(key) => changeTab(key)}>
              <Row className='mt-5'>
                <Col
                  sm={12}
                  md={12}
                  lg={3}
                  className='mb-5 mb-sm-5 mb-md-5 mb-lg-0'
                >
                  <InputWithSearchComp placeholder='Search ticket' />
                </Col>
                <Col className='col-auto mb-5 mb-sm-5 mb-md-5 mb-lg-0'>
                  <div className='d-flex action-drops'>
                    <CommonDropDownComp {...typeProps} />
                    <CommonDropDownComp {...statusFilter} />
                    <CommonDropDownComp {...filterDropProps1} />
                  </div>
                </Col>

                <Col className='ticket-btn col ml-auto  '>
                  <div className='d-flex justify-content-end'>
                    <CommonDropDownComp {...addImport} />
                    <CommonDropDownComp {...addExport} />

                    {menter === true ? (
                      <Button
                        label='Add Mentor'
                        btnClass='primary ml-2'
                        size='small'
                        shape='btn-square'
                        Icon={BsPlusLg}
                        onClick={() => props.history.push("/admin/add-mentor")}
                      />
                    ) : evaluater === true ? (
                      <Button
                        label='Add Evaluator'
                        btnClass='primary ml-2'
                        size='small'
                        shape='btn-square'
                        Icon={BsPlusLg}
                        onClick={() =>
                          props.history.push("/admin/add-evaluator")
                        }
                      />
                    ) : null}
                    {/* {TableSolvedProps.addEvaluator ? (
                      <Button
                        label='Add Evaluator'
                        btnClass='primary ml-2'
                        size='small'
                        shape='btn-square'
                        Icon={BsPlusLg}
                        onClick={() =>
                          props.history.push("/admin/add-evaluator")
                        }
                      />
                    ) : (
                      ""
                    )} */}
                  </div>
                </Col>
              </Row>

              <TabPane
                tab='Students'
                key='1'
                className='bg-white p-3 mt-5 sub-tab'
              >
                <p className='mt-3 mb-0 text-bold'>Students management</p>
                {/* <TicketDataTable {...TableProps} /> */}

                <Tabs defaultActiveKey='1' onChange={callback}>
                  <TabPane tab='School' key='1'>
                    <TicketDataTable {...TableProps} />
                  </TabPane>
                  <TabPane tab='University/Adult learner' key='2'>
                    <TicketDataTable {...TableOpenProps} />
                  </TabPane>
                </Tabs>
              </TabPane>
              <TabPane
                tab='Mentors'
                key='2'
                className='bg-white p-3 mt-5 sub-tab'
                // onClick={() => changeTab(false)}
              >
                <p className='mt-3 mb-0 text-bold'>Mentors management</p>
                <Tabs defaultActiveKey='1'>
                  <TabPane tab='All' key='1'>
                    <TicketDataTable {...TableProps} />
                  </TabPane>
                  <TabPane tab='Active' key='2'>
                    <TicketDataTable {...TableSolvedProps} />
                  </TabPane>
                  <TabPane tab='Inactive' key='3'>
                    <TicketDataTable {...TableOpenProps} />
                  </TabPane>
                </Tabs>
              </TabPane>
              <TabPane
                tab='Evaluators'
                key='3'
                className='bg-white p-3 mt-5 sub-tab'
              >
                <p className='mt-3 mb-0 text-bold'>Evaluators management</p>
                <Tabs defaultActiveKey='1' onChange={callback}>
                  <TabPane tab='All' key='1'>
                    <TicketDataTable {...TableOpenProps} />
                  </TabPane>
                  <TabPane tab='Active' key='2'>
                    <TicketDataTable {...TableSolvedProps} />
                  </TabPane>
                  <TabPane tab='Inactive' key='3'>
                    <TicketDataTable {...TableProps} />
                  </TabPane>
                </Tabs>
              </TabPane>
            </Tabs>
          </div>
        </Row>
      </Container>
    </Layout>
  );
};

export default TicketsPage;
