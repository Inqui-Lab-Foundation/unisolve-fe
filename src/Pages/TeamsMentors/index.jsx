import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import "./style.scss";
import { Avatar, Badge } from "antd";
import AvatarImg from "../../assets/img/Avatar.png";
import Avatar1 from "../../assets/img/avatar1.png";
import Avatar2 from "../../assets/img/avatar2.png";
import Idea from "../../assets/img/ideaRegister.svg";
import { Button } from "../../stories/Button";
import { BsPlusLg } from "react-icons/bs";
import AddIdea from "../../assets/img/addIdea.svg";
import AddMentor from "../../assets/img/addMentor.svg";
import { TableComponent } from "../../stories/TableComponent/TableComponent";
import { HiDotsHorizontal } from "react-icons/hi";
import { Tag } from "antd";
import { DropDownComp } from "../../stories/DropdownComp/DropdownComp";
import { Link, withRouter } from "react-router-dom";
import Layout from "../../Layout";

const TeamMentorsPage = (props) => {
  const [tableShow, setTableShow] = useState(true);
  const TableProps = {
    data: [
      {
        key: "1",
        level: "#2021-3454",
        profile: Avatar1,
        name: "Ritu Sharma",
        email: "Jhonsnow@gmail.com",
        location: "Mumbai",
        standard: "N/A",
        points: "300",
        badges: "N/A",
        action: <HiDotsHorizontal />,
      },
      {
        key: "2",
        level: "#2021-3454",
        profile: Avatar2,
        name: "Ritu Sharma",
        email: "Jhonsnow@gmail.com",
        location: "Mumbai",
        standard: "N/A",
        points: "300",
        badges: "N/A",
        action: <HiDotsHorizontal />,
      },
      {
        key: "3",
        level: "#2021-3454",
        profile: Avatar1,
        name: "Ritu Sharma",
        email: "Jhonsnow@gmail.com",
        location: "Mumbai",
        standard: "N/A",
        points: "300",
        badges: "N/A",
        action: <HiDotsHorizontal />,
      },
      {
        key: "4",
        level: "#2021-3454",
        profile: Avatar2,
        name: "Ritu Sharma",
        email: "Jhonsnow@gmail.com",
        location: "Mumbai",
        standard: "N/A",
        points: "300",
        badges: "N/A",
        action: <HiDotsHorizontal />,
      },
    ],
    columns: [
      {
        title: "LEVEL",
        dataIndex: "level",
      },
      {
        title: "PROFILE",
        dataIndex: "profile",
        render: (text) => <img src={text} />,
      },
      {
        title: "NAME",
        dataIndex: "name",
        render: (text) => <b>{text}</b>,
      },
      {
        title: "EMAIL",
        dataIndex: "email",
      },
      {
        title: "LOCATION",
        dataIndex: "location",
      },
      {
        title: "STANDARD",
        dataIndex: "standard",
      },
      {
        title: "POINTS",
        dataIndex: "points",
      },
      {
        title: "BADGES",
        dataIndex: "badges",
        render: (text) => (
          <DropDownComp
            label="5"
            className="defaultDropdown"
            options={[2, 3, 4, 5]}
          />
        ),
      },
      {
        title: "",
        dataIndex: "action",
      },
    ],
  };
  return (
    <Layout>
      <div className="teamMentor">
        <Row className="idea-register m-0">
          <Col>
            <p className="ideaTitle">Idea Registration</p>
            <p className="deadline mt-3">
              DEADLINE: <span className="ideaTime">20 Nov 2021, 12:00 PM,</span>
            </p>
            <p className="submission">Idea Registration Submission</p>
            <p className="deadline mt-3">With team members</p>
            <p>
              <Avatar src={AvatarImg} /> <Avatar src={Avatar1} />
              <Avatar src={Avatar2} />
            </p>
          </Col>
          {/* <Col md={3}>
          <img src={Idea} className="idea-icon" />
        </Col> */}
        </Row>

        <Row className="my-5">
          <Col sm={12} md={12} xl={6} className="text-left">
            <h2>Your Team</h2>
            <p>
              Lorem ipsum dolor sit amet, cons adipisicing elit, sed do eiusmod.
            </p>
          </Col>
          <Col sm={12} md={12} xl={6} className="text-right my-auto">
            <Button
              btnClass="primary"
              size="small"
              Icon={BsPlusLg}
              label="Add new member"
              onClick={() => props.history.push("/addNewMember")}
            />
          </Col>
        </Row>

        {/* <div className="team-action">
        <div>
          <h2>Your Team</h2>
          <p>
            Lorem ipsum dolor sit amet, cons adipisicing elit, sed do eiusmod.
          </p>
        </div>
        <div>
          <Button
            btnClass="primary"
            size="small"
            Icon={BsPlusLg}
            label="Add new member"
            onClick={() => props.history.push("/addNewMember")}
          />
        </div>
      </div> */}
        <div className="idea-table">
          {tableShow ? (
            <TableComponent {...TableProps} />
          ) : (
            <Row className="idea-add m-0">
              <Col xs={12}>
                <img src={AddIdea} className="idea-icon" />
                <h2 className="mt-5">Team members not yet added</h2>
                <p className="mt-3 pb-3">
                  Invite a person to be a member in your team.
                </p>
                <Button
                  btnClass="primary"
                  size="small"
                  Icon={BsPlusLg}
                  label="Add new member"
                />
              </Col>
            </Row>
          )}
        </div>

        <Row className="my-5">
          <Col sm={12} md={12} xl={6} className="text-left">
            <h2>Your Mentor</h2>
            <p>
              Lorem ipsum dolor sit amet, cons adipisicing elit, sed do eiusmod.
            </p>
          </Col>
          <Col sm={12} md={12} xl={6} className="text-right my-auto">
            <Button
              btnClass="primary"
              size="small"
              Icon={BsPlusLg}
              label="Add Mentor"
              onClick={() => props.history.push("/addNewMentor")}
            />
          </Col>
        </Row>

        {/* <div className="team-action">
        <div>
          <h2>Your Mentor</h2>
          <p>
            Lorem ipsum dolor sit amet, cons adipisicing elit, sed do eiusmod.
          </p>
        </div>
        <div>
          <Button
            btnClass="primary"
            size="small"
            Icon={BsPlusLg}
            label="Add Mentor"
            onClick={() => props.history.push("/addNewMentor")}
          />
        </div>
      </div> */}

        <div className="idea-table">
          {!tableShow ? (
            <TableComponent {...TableProps} />
          ) : (
            <Row className="idea-add m-0">
              <Col xs={12} className="p-5">
                <img src={AddMentor} className="idea-icon img-fluid" />
                <h2 className="mt-5">Mentor not yet added</h2>
                <p className="mt-3 pb-3">
                  Invite a person to act as mentor for your team and provide
                  guidence.
                </p>
                <Button
                  btnClass="primary"
                  size="small"
                  Icon={BsPlusLg}
                  label="Add Mentor"
                />
              </Col>
            </Row>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(TeamMentorsPage);
