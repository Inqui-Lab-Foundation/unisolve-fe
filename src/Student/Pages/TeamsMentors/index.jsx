import React, { useState, useEffect } from "react";
// import { Row, Col } from "reactstrap";
import "./style.scss";
import { Space } from "antd";
// import AvatarImg from "../../assets/img/Avatar.png";
// import Avatar1 from "../../assets/img/avatar1.png";
// import Avatar2 from "../../assets/img/avatar2.png";
// import Idea from "../../assets/img/ideaRegister.svg";
// import { Button } from "../../stories/Button";
// import { BsPlusLg } from "react-icons/bs";
// import AddIdea from "../../assets/img/addIdea.svg";
// import AddMentor from "../../assets/img/addMentor.svg";
// import { TableComponent } from "../../stories/TableComponent/TableComponent";
// import { HiDotsHorizontal } from "react-icons/hi";
// import { Tag } from "antd";
// import { DropDownComp } from "../../stories/DropdownComp/DropdownComp";
// import { BreadcrumbComp } from "../../stories/Breadcrumb/BreadcrumbComp";
// import { Link, withRouter } from "react-router-dom";
import Layout from "../../Layout.jsx";
// import { BsThreeDots } from "react-icons/bs";
// import { BiEditAlt } from "react-icons/bi";
// import { AiFillDelete } from "react-icons/ai";
// import { Container, Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
// import { CommonDropDownComp } from "../../stories/CommonDropdown/CommonDropdownComp";
// import Swal from "sweetalert2/dist/sweetalert2.js";
// import "sweetalert2/src/sweetalert2.scss";

import { getMentorsList, deleteMentor } from "../../../redux/actions.js";
import { connect } from "react-redux";
// import moment from "moment";
import SweetAlert from "react-bootstrap-sweetalert";

import PageConstruction from "../../../components/PageUnderConstrcution";

const TeamMentorsPage = (props) => {
    // const [tableShow, setTableShow] = useState(false);
    // const [rescheduleShow, setRescheduleShow] = useState(false);
    const [deleteTeam, isDeleteTeam] = useState(false);
    const [mentorId, setMentorId] = useState("");
    const history = useHistory();
    // const listArray =
    // props.mentorsList &&
    // props.mentorsList.products &&
    // props.mentorsList.products.length > 0
    //     ? true
    //     : false;
    // const filterDropProps = {
    //     name: "",
    //     Icon: HiDotsHorizontal,
    //     options: [
    //         {
    //             name: "Edit",
    //             // data: props.mentorsList.product,
    //             path: "/editMember",
    //             Icon: BiEditAlt,
    //         },
    //         {
    //             name: "Delete",
    //             path: "",
    //             // data: props.mentorsList.product,
    //             Icon: AiFillDelete,
    //             onClick: () => isDeleteTeam(true),
    //         },
    //     ],
    // };

    console.log("=======props.mentorsList.product", props.mentorsList);
    const TableProps = {
        data: props.mentorsList && props.mentorsList.products,
        //   {
        //     key: "1",
        //     level: "#2021-3454",
        //     profile: Avatar1,
        //     name: "John Doe",
        //     email: "jogn@gmail.com",
        //     location: "Mumbai",
        //     standard: "N/A",
        //     points: "300",
        //     badges: "2",
        //     action: <HiDotsHorizontal />,
        //   },
        //   {
        //     key: "2",
        //     level: "#2021-3454",
        //     profile: Avatar2,
        //     name: "Ritu Sharma",
        //     email: "ritu@gmail.com",
        //     location: "Mumbai",
        //     standard: "N/A",
        //     points: "300",
        //     badges: "3",
        //     action: <HiDotsHorizontal />,
        //   },
        //   {
        //     key: "3",
        //     level: "#2021-3454",
        //     profile: Avatar1,
        //     name: "David Kane",
        //     email: "david@gmail.com",
        //     location: "Mumbai",
        //     standard: "N/A",
        //     points: "300",
        //     badges: "3",
        //     action: <HiDotsHorizontal />,
        //   },
        //   {
        //     key: "4",
        //     level: "#2021-3454",
        //     profile: Avatar2,
        //     name: "Sara Willioms",
        //     email: "sara@gmail.com",
        //     location: "Mumbai",
        //     standard: "N/A",
        //     points: "300",
        //     badges: "4",
        //     action: <HiDotsHorizontal />,
        //   },
        // ],
        columns: [
            // {
            //   title: "LEVEL",
            //   dataIndex: "level",
            // },
            // {
            //   title: "PROFILE",
            //   dataIndex: "profile",
            //   render: (text) => <img src={text} />,
            // },
            {
                title: "Name",
                dataIndex: "mentor_name",
                // render: (text) => (
                //   <Link
                //     exact="true"
                //     to={`/my-profile` + "?id=" + "teams"}
                //     activeclassname="is-active"
                //     className="text-link text-bold"
                //   >
                //     {text}
                //   </Link>
                // ),
            },
            {
                title: "Email",
                dataIndex: "email",
            },
            {
                title: "Ph Number",
                dataIndex: "mobile",
            },
            {
                title: "Status",
                dataIndex: "status",
            },
            // {
            //   title: "POINTS",
            //   dataIndex: "points",
            // },
            // {
            //   title: "BADGES",
            //   dataIndex: "badges",
            //   // render: (text) => (
            //   //   <DropDownComp
            //   //     label="5"
            //   //     className="defaultDropdown"
            //   //     options={[2, 3, 4, 5]}
            //   //   />
            //   // ),
            // },
            {
                title: "Actions",
                dataIndex: "action",
                render: (text, record) => (
                    <Space size='small'>
                        <a onClick={() => handlEditItem(record)}>
                            <i className='fa fa-edit' />
                        </a>
                        <a onClick={() => handleDeleteItem(record)}>
                            <i className='fa fa-trash' />
                        </a>
                    </Space>
                    // <Space size="small">
                    //   <a>Invite {record.id}</a>
                    //   <a>Delete</a>
                    // </Space>
                    // <CommonDropDownComp
                    //   className="action-dropdown"
                    //   {...filterDropProps}
                    // />
                ),
            },
        ],
    };
    console.log("======filterDropProps", TableProps);

    const handleDeleteItem = (val) => {
        const courseId = val.id;
        setMentorId(courseId);
        isDeleteTeam(true);
    // console.log(courseId);
    // props.deleteMentorAction(courseId);
    };

    const handleDelete = () => {
        props.deleteMentorAction(mentorId);
        isDeleteTeam(false);
    };

    useEffect(() => {
        console.log("hi");
        props.getMembersListAction(history);
    }, [props.successDleteMessage]);

    const handlEditItem = (item) => {
        history.push({
            pathname: "/editMember",
            item: item,
        });
    };

    // const headingDetails = {
    //     title: "Teams",
    //     subTitle: "Idea Registration",
    //     bgImage: true,
    //     options: [
    //         {
    //             title: "Courses",
    //             path: "/courses",
    //         },
    //         {
    //             title: "Teams",
    //             path: "/teams",
    //         },
    //     ],
    // };

    return (
        <Layout>
            <PageConstruction />
            {/* <div className='teamMentor mb-50'>
        <BreadcrumbComp {...headingDetails} />
        <Container className=' mt-2'>
          <Row>
            <Col sm={12} md={12} xl={6} className='text-left'>
              <h2>Your Team</h2>
              <p>
                Lorem ipsum dolor sit amet, cons adipisicing elit, sed do
                eiusmod.
              </p>
            </Col>
            <Col sm={12} md={12} xl={6} className='text-right my-auto'>
              <Button
                btnClass='primary'
                size='small'
                Icon={BsPlusLg}
                label='Add new member'
                onClick={() => props.history.push("/addNewMember")}
              />
            </Col>
          </Row>

          <Row className='idea-table'>
            {props.mentorsList &&
            props.mentorsList.products &&
            props.mentorsList.products.length ? (
              <TableComponent {...TableProps} />
            ) : (
              <Row className='idea-add m-0'>
                <Col xs={12}>
                  <img src={AddIdea} className='idea-icon' />
                  <h2 className='mt-5'>Team members not yet added</h2>
                  <p className='mt-3 pb-3'>
                    Invite a person to be a member in your team.
                  </p>
                  <Button
                    btnClass='primary'
                    onClick={() => props.history.push("/addNewMember")}
                    size='small'
                    Icon={BsPlusLg}
                    label='Add new member'
                  />
                </Col>
              </Row>
            )}
          </Row>
        </Container>
      </div> */}
            {deleteTeam ? (
                <SweetAlert
                    warning
                    showCancel
                    confirmBtnText='Delete'
                    confirmBtnBsStyle='danger'
                    title='Are you sure want to delete?'
                    onConfirm={(e) => handleDelete(e)}
                    // onConfirm={() => handleDeleteItem()}
                    onCancel={() => isDeleteTeam(false)}
                    focusCancelBtn
                ></SweetAlert>
            ) : (
                ""
            )}
        </Layout>
    );
};

// export default withRouter(TeamMentorsPage);

const mapStateToProps = ({ mentors }) => {
    const { mentorsList, loading, successDleteMessage } = mentors;
    return { mentorsList, loading, successDleteMessage };
};

export default connect(mapStateToProps, {
    getMembersListAction: getMentorsList,
    deleteMentorAction: deleteMentor,
})(TeamMentorsPage);
