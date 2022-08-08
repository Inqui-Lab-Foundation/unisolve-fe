import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Tabs, Space } from "antd";
import TicketDataTable from "./TicketDataTable";
import Layout from "../../Admin/Layout";
import { Tag, Avatar } from "antd";
import { Link, withRouter } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";
import {
  BsChevronRight,
  BsFilter,
  BsPlusLg,
  BsUpload,
  BsGraphUp,
} from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import { CommonDropDownComp } from "../../stories/CommonDropdown/CommonDropdownComp";
import { Button } from "../../stories/Button";
import { InputWithSearchComp } from "../../stories/InputWithSearch/InputWithSearch";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import dummyCSV from "../../media/basic-csv.csv";
import {
  getEvaluatorsBulkUploadList,
  getAdminMentorsList,
} from "../../redux/actions";
import axios from "axios";
import { getNormalHeaders, getCurrentUser } from "../../helpers/Utils";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useTranslation } from "react-i18next";
import logout from "../../media/logout.svg";
import ImportPopup from "./ImportPopup";
import DoubleBounce from "../../components/Loaders/DoubleBounce";
import Spinner from "../../components/Loaders/Spinner";
import PageConstruction from "../../components/PageUnderConstrcution";

const { TabPane } = Tabs;

const TicketsPage = (props) => {
  const [showImportPopup, setImportPopup] = useState(false);

  const history = useHistory();
  const [student, activeStudent] = useState(false);
  const [menter, activeMenter] = useState(false);
  const [evaluater, activeEvaluater] = useState(false);

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const currentUser = getCurrentUser("current_user");
  const [successResponse, setSuccessResponse] = useState("");
  const [errorResponse, setErrorResponse] = useState("");
  const [fileNotSupported, setFileNotSupported] = useState("");
  const callback = (key) => {};

  useEffect(() => {
    props.getEvaluatorsBulkUploadListAction("i");
    props.getAdminMentorsListAction("i");
  }, []);

  const handleSubmit = (e) => {
    const data = new FormData();
    data.append("file", file);

    var config = {
      method: "post",
      url: "http://15.207.254.154:3002/api/v1/crud/evaluater",
      headers: {
        "Content-Type": "application/json",
        // Accept: "application/json",
        Authorization: `Bearer ${currentUser.data[0].token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        if (response.status === 200) {
          setSuccessResponse("Successfully uploaded");
          setTimeout(() => {
            setSuccessResponse();
            props.setImportPopup(false);
          }, 7000);
        }
      })
      .catch(function (error) {
        if (error.response.data.status === 400) {
          setErrorResponse("File already exist");
          setTimeout(() => {
            setErrorResponse();
          }, 7000);
        }
      });
  };

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
      props.getAdminMentorsListAction("i");
      activeMenter(!menter);
      activeEvaluater(false);
    } else {
      activeEvaluater(false);
      activeMenter(false);
    }
  };
  const handleSelect = (item) => {
    console.log(item);
    props.history.push({
      pathname: `/admin/userprofile`,
      data: item,
    });
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

  const TableEvaluaterProps = {
    data: props.evaluatorsBulkUploadList,
    columns: [
      {
        title: "User Profile ID",
        dataIndex: "user_profile_id",
      },
      {
        title: "Full Name",
        dataIndex: "full_name",
      },
      {
        title: "Status",
        dataIndex: "status",
      },
      {
        title: "DOB",
        dataIndex: "date_of_birth",
      },
      {
        title: "Organization Name",
        dataIndex: "organization_name",
      },
      {
        title: "Qualification",
        dataIndex: "qualification",
      },
      {
        title: "City",
        dataIndex: "city",
      },
      {
        title: "District",
        dataIndex: "district",
      },
      {
        title: "State",
        dataIndex: "state",
      },
      {
        title: "Country",
        dataIndex: "country",
      },
      {
        title: "ACTIONS",
        dataIndex: "action",
        render: (text, record) => (
          <Space size='small'>
            <Link exact='true' to='/admin/edit-evaluator' className='mr-5'>
              <i className='fa fa-edit' />
            </Link>

            <Link exact='true' onClick={handleDelete} className='mr-5'>
              <i className='fa fa-trash' />
            </Link>
          </Space>
        ),
      },
    ],
  };

  const TableMentorsProps = {
    data: props.mentorsList,
    columns: [
      // {
      //   title: "User Mentor ID",
      //   dataIndex: "mentor_id",
      // },
      {
        title: "Teacher Name",
        dataIndex: "full_name",
      },
      // {
      //   title: "Status",
      //   dataIndex: "status",
      // },
      // {
      //   title: "DOB",
      //   dataIndex: "date_of_birth",
      // },
      {
        title: "DISE  Code",
        dataIndex: "organization_code",
      },
      {
        title: "Qualification",
        dataIndex: "qualification",
      },
      // {
      //   title: "City",
      //   dataIndex: "city",
      // },
      // {
      //   title: "District",
      //   dataIndex: "district",
      // },
      // {
      //   title: "State",
      //   dataIndex: "state",
      // },
      // {
      //   title: "Country",
      //   dataIndex: "country",
      // },
      {
        title: "ACTIONS",
        dataIndex: "action",
        render: (text, record) => (
          <Space size='small'>
            <Link
              exact='true'
              onClick={() => handleSelect(record)}
              className='mr-5'
            >
              <i className='fa fa-eye' />
            </Link>
            <Link exact='true' className='mr-5'>
              <i className='fa fa-edit' />
            </Link>
            <Link exact='true' className='mr-5'>
              <i className='fa fa-trash' />
            </Link>
          </Space>
        ),
      },
    ],
  };

  return (
    <Layout>
      <Container className='ticket-page mb-50 userlist'>
        <Row className='mt-5 pt-5'>
          <h2 onClick={handleDelete}>User List</h2>
          <div className='ticket-data'>
            <Tabs defaultActiveKey='1' onChange={(key) => changeTab(key)}>
              <Row className='mt-5'>
                <Col
                  sm={12}
                  md={12}
                  lg={3}
                  className='mb-5 mb-sm-5 mb-md-5 mb-lg-0'
                >
                  {/* <InputWithSearchComp placeholder='Search ticket' /> */}
                </Col>
                <Col className='col-auto mb-5 mb-sm-5 mb-md-5 mb-lg-0'>
                  {/* <div className='d-flex action-drops'>
                    <CommonDropDownComp {...typeProps} />
                    <CommonDropDownComp {...statusFilter} />
                    <CommonDropDownComp {...filterDropProps1} />
                  </div> */}
                </Col>

                <Col className='ticket-btn col ml-auto  '>
                  <div className='d-flex justify-content-end'>
                    {/* <CommonDropDownComp {...addImport} /> */}
                    <Button
                      label='Import'
                      btnClass='primary-outlined'
                      size='small'
                      shape='btn-square'
                      Icon={BsUpload}
                      onClick={() => setImportPopup(true)}
                    />

                    <a
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
                    </a>

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
                  </div>
                </Col>
              </Row>

              <TabPane
                tab='Students'
                key='1'
                className='bg-white p-3 mt-5 sub-tab'
              >
                <p className='mt-3 mb-0 text-bold'>Students management</p>

                <Tabs defaultActiveKey='1' onChange={callback}>
                  <TabPane tab='School' key='1'>
                    {/* <TicketDataTable {...TableProps} /> */}
                    <h2 className='py-5 w-100 text-center'>
                      PAGE UNDER CONSTRUCTION
                    </h2>
                  </TabPane>
                  <TabPane tab='University/Adult learner' key='2'>
                    {/* <TicketDataTable {...TableOpenProps} /> */}
                    <h2 className='py-5 w-100 text-center'>
                      PAGE UNDER CONSTRUCTION
                    </h2>
                  </TabPane>
                </Tabs>
              </TabPane>
              <TabPane
                tab='Teachers'
                key='2'
                className='bg-white p-3 mt-5 sub-tab'
              >
                <p className='mt-3 mb-0 text-bold'>Teachers management</p>
                <Tabs defaultActiveKey='1'>
                  <TabPane tab='All' key='1'>
                    <TicketDataTable {...TableMentorsProps} />
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
                    {/* <TicketDataTable {...TableEvaluaterProps} /> */}
                    <h2 className='py-5 w-100 text-center'>
                      PAGE UNDER CONSTRUCTION
                    </h2>
                  </TabPane>
                </Tabs>
              </TabPane>
            </Tabs>
          </div>
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

// const mapStateToProps = ({}) => {
//   // const { loading, error, currentUser } = authUser;
//   return {};
// };

const mapStateToProps = ({ evaluatorsBulkUpload, adminMentors }) => {
  const { evaluatorsBulkUploadList } = evaluatorsBulkUpload;
  const { mentorsList } = adminMentors;
  return { evaluatorsBulkUploadList, mentorsList };
};

export default connect(mapStateToProps, {
  getEvaluatorsBulkUploadListAction: getEvaluatorsBulkUploadList,
  getAdminMentorsListAction: getAdminMentorsList,
})(TicketsPage);
// export default TicketsPage;
