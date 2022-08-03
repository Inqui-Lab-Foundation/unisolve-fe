import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Tabs, Space } from "antd";
import TicketDataTable from "./TicketDataTable";
import Layout from "../Layout";
import { Tag } from "antd";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
import { BsFilter, BsPlusLg, BsUpload, BsGraphUp } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import { CommonDropDownComp } from "../../stories/CommonDropdown/CommonDropdownComp";
import { Button } from "../../stories/Button";
import { InputWithSearchComp } from "../../stories/InputWithSearch/InputWithSearch";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import dummyCSV from "../../media/basic-csv.csv";
import { getEvaluatorsBulkUploadList } from "../../redux/actions";
import axios from "axios";
import { getCurrentUser } from "../../helpers/Utils";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import logout from "../../media/logout.svg";
import { ProgressComp } from "../../stories/Progress/Progress";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Divider, Tooltip } from "antd";

const { TabPane } = Tabs;

const TicketsPage = (props) => {
  const history = useHistory();

  const [menter, activeMenter] = useState(false);
  const [evaluater, activeEvaluater] = useState(false);

  const [file, setFile] = useState();

  const currentUser = getCurrentUser("current_user");

  const callback = (key) => {};

  useEffect(() => {
    props.getEvaluatorsBulkUploadListAction("i");
  }, []);

  const handleSubmit = (e) => {
    const data = new FormData();
    data.append("file", file);

    var config = {
      method: "post",
      // url: "http://15.207.254.154:3002/api/v1/crud/evaluater",
      headers: {
        "Content-Type": "application/json",
        // Accept: "application/json",
        Authorization: `Bearer ${currentUser.data[0].token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {})
      .catch(function (error) {});
  };

  const progressBar = {
    label: "Progress",
    options: [{ id: 1, teams: "CSK", percent: 75, status: "active" }],
  };

  const TableProps = {
    data: [
      {
        key: "1",
        // profile: "#2021-3454",
        profile:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        teamName: "Ken Khoi",
        teamId: "US–0017",
        teamMembers: (
          <Avatar.Group
            maxCount={2}
            maxPopoverTrigger='click'
            size='large'
            maxStyle={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
              cursor: "pointer",
            }}
          >
            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
            <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
            <Tooltip title='Ant User' placement='top'>
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            </Tooltip>
            <Avatar
              style={{ backgroundColor: "#1890ff" }}
              icon={<AntDesignOutlined />}
            />
          </Avatar.Group>
        ),
        ideaShared: "9",
        certificateEarned: "10",
        teamLearningProgress: <ProgressComp {...progressBar} />,
        action: <HiDotsHorizontal />,
      },
      {
        key: "2",
        profile:
          "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
        teamName: "Zach Swat",
        teamId: "US–0018",
        teamMembers: (
          <Avatar.Group
            maxCount={2}
            maxPopoverTrigger='click'
            size='large'
            maxStyle={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
              cursor: "pointer",
            }}
          >
            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
            <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
            <Tooltip title='Ant User' placement='top'>
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            </Tooltip>
            <Avatar
              style={{ backgroundColor: "#1890ff" }}
              icon={<AntDesignOutlined />}
            />
          </Avatar.Group>
        ),
        ideaShared: "5",
        certificateEarned: "8",
        teamLearningProgress: <ProgressComp {...progressBar} />,
        action: <HiDotsHorizontal />,
      },
      {
        key: "3",
        profile:
          "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
        teamName: "Jane Coper",
        teamId: "US–0019",
        teamMembers: (
          <Avatar.Group
            maxCount={2}
            maxPopoverTrigger='click'
            size='large'
            maxStyle={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
              cursor: "pointer",
            }}
          >
            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
            <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
            <Tooltip title='Ant User' placement='top'>
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            </Tooltip>
            <Avatar
              style={{ backgroundColor: "#1890ff" }}
              icon={<AntDesignOutlined />}
            />
          </Avatar.Group>
        ),
        ideaShared: "10",
        certificateEarned: "15",
        teamLearningProgress: <ProgressComp {...progressBar} />,
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
        title: "TEAM NAME",
        dataIndex: "teamName",
      },
      {
        title: "TEAM ID",
        dataIndex: "teamId",
      },
      {
        title: "TEAM MEMBERS",
        dataIndex: "teamMembers",
      },
      {
        title: "IDEA SHARED",
        dataIndex: "ideaShared",
      },
      {
        title: "CERTIFICATES EARNED",
        dataIndex: "certificateEarned",
      },
      {
        title: "TEAM LEARNING PROGRESS",
        dataIndex: "teamLearningProgress",
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
      { name: "Edit Team", path: "" },
      { name: "Delete Team", path: "" },
      { name: "View Team Members", path: "" },
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
        title: "TEAM NAME",
        dataIndex: "name",
      },
      {
        title: "TEAM ID",
        dataIndex: "id",
      },
      {
        title: "TEAM MEMBERS",
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
        title: "IDEA SHARED",
        dataIndex: "age",
      },
      {
        title: "CERTIFICATES EARNED",
        dataIndex: "email",
      },
      {
        title: "TEAM LEARNING PROGRESS",
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
    Icon: BsUpload,
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
    if (e === "3") {
      activeEvaluater(!evaluater);
      props.getAdminEvalutorsListAction(history);
      activeMenter(false);
    } else if (e === "2") {
      props.getAdminMentorsListAction(history);
      activeMenter(!menter);
      activeEvaluater(false);
    } else {
      activeEvaluater(false);
      activeMenter(false);
    }
  };

  const handleDelete = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "You are attempting to delete Evalauaor.",
        text: "Are you sure?",
        imageUrl: `${logout}`,
        showCloseButton: true,
        confirmButtonText: "Delete",
        showCancelButton: true,
        cancelButtonText: "Cancel",
        reverseButtons: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Loged out!",
            "Successfully deleted.",
            "success"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "You are Loged in",
            "error"
          );
        }
      });
  };

  const filterDropPropsEvaluator = {
    name: "",
    Icon: HiDotsHorizontal,
    options: [
      { name: "Edit Ticket", path: "/admin/edit-evaluator" },
      {
        name: "Delete Ticket 123",
        value: "delete",
        // path: { handleDelete },
        // onClick: { handleDelete },
      },
    ],
  };

  return (
    <Layout>
      <Container className='ticket-page mb-50 userlist'>
        <Row className='mt-5 pt-5'>
          <h2>Teams Management</h2>
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
                    <a
                      href={dummyCSV}
                      target='_blank'
                      rel='noreferrer'
                      className='primary'
                    >
                      {/* <p className='primary mt-4'>Download</p> */}
                      <Button
                        label='Export'
                        btnClass='primary-outlined mx-2'
                        size='small'
                        shape='btn-square'
                        Icon={BsGraphUp}
                        style={{ color: "#231f20" }}
                      />
                    </a>

                    <Button
                      label='Create Team'
                      btnClass='primary ml-2'
                      size='small'
                      shape='btn-square'
                      Icon={BsPlusLg}
                      // onClick={() => props.history.push("/admin/add-evaluator")}
                    />
                  </div>
                </Col>
              </Row>

              <TabPane className='bg-white p-3 mt-5 sub-tab'>
                <Tabs defaultActiveKey='1' onChange={callback}>
                  <TicketDataTable {...TableProps} />
                </Tabs>
              </TabPane>
            </Tabs>
          </div>
        </Row>
      </Container>
    </Layout>
  );
};

const mapStateToProps = ({ evaluatorsBulkUpload }) => {
  const { evaluatorsBulkUploadList } = evaluatorsBulkUpload;
  return { evaluatorsBulkUploadList };
};

export default connect(mapStateToProps, {
  getEvaluatorsBulkUploadListAction: getEvaluatorsBulkUploadList,
})(TicketsPage);
