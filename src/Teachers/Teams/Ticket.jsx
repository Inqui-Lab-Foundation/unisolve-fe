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
import {
  getAdminTeamsList,
  getAdminTeamMembersList,
} from "../../redux/actions";
import axios from "axios";
import { getCurrentUser } from "../../helpers/Utils";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import logout from "../../media/logout.svg";
import { ProgressComp } from "../../stories/Progress/Progress";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Divider, Tooltip, Table } from "antd";

const { TabPane } = Tabs;

const TicketsPage = (props) => {
  const history = useHistory();

  const [menter, activeMenter] = useState(false);
  const [evaluater, activeEvaluater] = useState(false);
  const [count, setCount] = useState(0);

  const [teamsArray, setTeamsArray] = useState([]);
  const [teamMembersListArray, setTeamMembersArray] = useState([]);
  const [teamId, setTeamId] = useState("");

  const currentUser = getCurrentUser("current_user");

  const callback = (key) => {};

  useEffect(() => {
    props.getAdminTeamsListAction("i");
  }, [count]);

  useEffect(() => {
    var teamsArrays = [];
    props.teamsList.map((teams, index) => {
      var key = index + 1;
      return teamsArrays.push({ ...teams, key });
    });
    setTeamsArray(teamsArrays);
  }, [props.teamsList]);

  useEffect(() => {
    props.getAdminTeamMembersListAction(teamId);
  }, [teamId, count]);

  useEffect(() => {
    var teamsMembersArrays = [];
    props.teamsMembersList.length > 0 &&
      props.teamsMembersList.map((teams, index) => {
        var key = index + 1;
        return teamsMembersArrays.push({ ...teams, key });
      });
    setTeamMembersArray(teamsMembersArrays);
  }, [props.teamsMembersList.length > 0]);

  const progressBar = {
    label: "Progress",
    options: [{ id: 1, teams: "CSK", percent: 75, status: "active" }],
  };

  const adminTeamsList = {
    data: teamsArray,
    columns: [
      {
        title: "S.No",
        dataIndex: "key",
      },
      {
        title: "TEAM NAME",
        dataIndex: "team_name",
      },
      {
        title: "TEAM MEMBERS COUNT",
        dataIndex: "student_count",
      },
      {
        title: "ACTIONS",
        dataIndex: "action",
        render: (text, record) => (
          <Space size="small">
            {record.student_count < 4 && (
              <Link
                exact="true"
                onClick={() => handleCreate(record)}
                className="mr-5"
              >
                <i className="fa fa-plus" />
              </Link>
            )}
            <Link
              exact="true"
              onClick={() => handleEditTeam(record)}
              className="mr-5"
            >
              <i className="fa fa-edit" />
            </Link>
            {record.student_count === 0 && (
              <Link
                exact="true"
                onClick={() => handleDelete(record)}
                className="mr-5"
              >
                <i className="fa fa-trash" />
              </Link>
            )}
          </Space>
        ),
      },
    ],
    addBtn: 0,
  };
  const handleCreate = (item) => {
    history.push({
      pathname: "/teacher/create-team-member",
      item: item,
    });
  };
  const handleEditTeam = (item) => {
    history.push({
      pathname: "/teacher/edit-team",
      item: item,
    });
  };
  const handleEditTeamMember = (item) => {
    history.push({
      pathname: "/teacher/edit-team-member",
      item: item,
    });
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
            maxPopoverTrigger="click"
            size="large"
            maxStyle={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
              cursor: "pointer",
            }}
          >
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
            <Tooltip title="Ant User" placement="top">
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
            maxPopoverTrigger="click"
            size="large"
            maxStyle={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
              cursor: "pointer",
            }}
          >
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
            <Tooltip title="Ant User" placement="top">
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
            maxPopoverTrigger="click"
            size="large"
            maxStyle={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
              cursor: "pointer",
            }}
          >
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
            <Tooltip title="Ant User" placement="top">
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
            className="action-dropdown"
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
      { name: "Edit Team", path: "" },
      { name: "Delete Team", path: "" },
      { name: "View Team Members", path: "" },
    ],
  };
  var adminTeamMembersList = {
    data: teamMembersListArray.length > 0 && teamMembersListArray,
    columns: [
      {
        title: "S.NO",
        dataIndex: "key",
      },
      {
        title: "STUDENT NAME",
        dataIndex: "full_name",
      },
      {
        title: "GRADE",
        dataIndex: "Grade",
      },
      {
        title: "AGE",
        dataIndex: "Age",
      },

      {
        title: "GENDER",
        dataIndex: "Gender",
      },
      {
        title: "ACTIONS",
        dataIndex: "action",
        render: (text, record) => (
          <Space size="small">
            <Link
              exact="true"
              onClick={() => handleEditTeamMember(record)}
              className="mr-5"
            >
              <i className="fa fa-edit" />
            </Link>

            <Link
              exact="true"
              onClick={() => handleDeleteTeamMember(record)}
              className="mr-5"
            >
              <i className="fa fa-trash" />
            </Link>
          </Space>
        ),
      },
    ],
  };

  const TableTeamMates = {
    data: [
      {
        key: "1",
        profile:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        name: "Aydin Khan",
        grade: "8",
        age: "10",
        gender: "Female",
        action: <HiDotsHorizontal />,
      },
      {
        key: "2",
        profile:
          "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
        name: "Zaid Sawant",
        grade: "5",
        age: "9",
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
        title: "GRADE",
        dataIndex: "grade",
      },
      {
        title: "AGE",
        dataIndex: "age",
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

  const handleDelete = (item) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "You are attempting to delete Team.",
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
          const body = JSON.stringify({
            status: "INACTIVE",
          });
          var config = {
            method: "put",
            url: process.env.REACT_APP_API_BASE_URL + "/teams/" + item.team_id,
            headers: {
              "Content-Type": "application/json",
              // Accept: "application/json",
              Authorization: `Bearer ${currentUser.data[0].token}`,
            },
            data: body,
          };
          axios(config)
            .then(function (response) {
              console.log(response);
              if (response.status === 200) {
                setCount(count + 1);
                // swalWithBootstrapButtons.fire(
                //   "Team!",
                //   "Successfully deleted.",
                //   "success"
                // );
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "You are not Delete Team",
            "error"
          );
        }
      });
  };

  const handleDeleteTeamMember = (item) => {
    console.log("====item", item);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "You are attempting to Delete Team Member.",
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
          const body = JSON.stringify({
            status: "DELETED",
          });
          var config = {
            method: "put",
            url:
              process.env.REACT_APP_API_BASE_URL +
              "/students/" +
              item.student_id,
            headers: {
              "Content-Type": "application/json",
              // Accept: "application/json",
              Authorization: `Bearer ${currentUser.data[0].token}`,
            },
            data: body,
          };
          axios(config)
            .then(function (response) {
              console.log(response);
              if (response.status === 200) {
                setCount(count + 1);
                // swalWithBootstrapButtons.fire(
                //   "Team!",
                //   "Successfully deleted.",
                //   "success"
                // );
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "You are not Delete Team Member",
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
  console.log("222222222222222", props.teamsMembersList);

  return (
    <Layout>
      <Container className="ticket-page mb-50 userlist">
        <Row className="mt-5 pt-5">
          <h2>Teams Management</h2>
          <div className="ticket-data">
            <Tabs defaultActiveKey="1" onChange={(key) => changeTab(key)}>
              <Row className="mt-5">
                {/* <Col
                  sm={12}
                  md={12}
                  lg={3}
                  className="mb-5 mb-sm-5 mb-md-5 mb-lg-0"
                >
                  <InputWithSearchComp placeholder="Search ticket" />
                </Col>
                <Col className="col-auto mb-5 mb-sm-5 mb-md-5 mb-lg-0">
                  <div className="d-flex action-drops">
                    <CommonDropDownComp {...typeProps} />
                    <CommonDropDownComp {...statusFilter} />
                    <CommonDropDownComp {...filterDropProps1} />
                  </div>
                </Col> */}

                <Col className="ticket-btn col ml-auto  ">
                  <div className="d-flex justify-content-end">
                    <a
                      href={dummyCSV}
                      target="_blank"
                      rel="noreferrer"
                      className="primary"
                    >
                      {/* <p className='primary mt-4'>Download</p> */}
                      <Button
                        label="Export"
                        btnClass="primary-outlined mx-2"
                        size="small"
                        shape="btn-square"
                        Icon={BsGraphUp}
                        style={{ color: "#231f20" }}
                      />
                    </a>

                    <Button
                      label="Create Team"
                      btnClass="primary ml-2"
                      size="small"
                      shape="btn-square"
                      Icon={BsPlusLg}
                      onClick={() => history.push("/teacher/create-team")}
                    />
                  </div>
                </Col>
              </Row>

              <TabPane className="bg-white p-3 mt-5 sub-tab">
                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TicketDataTable
                    {...adminTeamsList}
                    showRowSelction={false}
                    isExpandable={true}
                    expandableComponent={
                      (record) => {
                        setTeamId(record.team_id);
                        return teamMembersListArray.length > 0 ? (
                          <TicketDataTable
                            {...adminTeamMembersList}
                            showRowSelction={false}
                          />
                        ) : null;
                        // <TicketDataTable
                        //   {...adminTeamMembersList}
                        //   showRowSelction={false}
                        // />
                      }
                      // setTeamId(record.team_id)
                    }
                  />
                </Tabs>
              </TabPane>
            </Tabs>
          </div>
        </Row>
      </Container>
    </Layout>
  );
};

const mapStateToProps = ({ teams }) => {
  const { teamsList, teamsMembersList } = teams;
  return { teamsList, teamsMembersList };
};

export default connect(mapStateToProps, {
  getAdminTeamsListAction: getAdminTeamsList,
  getAdminTeamMembersListAction: getAdminTeamMembersList,
})(TicketsPage);
