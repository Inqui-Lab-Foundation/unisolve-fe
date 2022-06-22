import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./style.scss";
import { List, Avatar, Button, Skeleton } from "antd";
import Avatar1 from "../../assets/img/avatar1.png";
import Avatar2 from "../../assets/img/avatar2.png";
import ActionIcon from "../../assets/img/actionIcon.png";
import { BsThreeDots } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";
import moment from "moment";

const ListContent = (notifyArrays) => {
  // console.log(notifyArrays);
  // const notificationData1 = [...notify];
  // console.log("========notificationData==", notificationData1);
  // const notificationData = [
  //   {
  //     id: 1,
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  //     name: "Rajesh Roy",
  //     time: "11:52 AM",
  //   },
  //   {
  //     id: 1,
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  //     name: "Rajesh Roy",
  //     time: "11:52 AM",
  //   },
  //   {
  //     id: 1,
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  //     name: "Rajesh Roy",
  //     time: "11:52 AM",
  //   },
  //   {
  //     id: 1,
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  //     name: "Rajesh Roy",
  //     time: "11:52 AM",
  //   },
  // ];

  const notificationData = notifyArrays.notifyArrays;
  // console.log("===========notificationData1==", notificationData1);

  // created_at: "2022-06-16T10:39:32.000Z";
  // created_by: 0;
  // image: null;
  // is_readed: false;
  // message: "This is a test notification1";
  // notification_id: 1;
  // notification_type: "PUSH";
  // read_by: null;
  // status: "PUBLISHED";
  // target_audience: "ALL";
  // title: "My Notification1";
  // updated_at: "2022-06-16T10:39:32.000Z";

  return (
    <div className="list-content">
      <div className="d-flex justify-content-between">
        <button className="day-label">Today</button>
        <button className="notify-action">Mark all as Read</button>
      </div>
      <div>
        <List
          className="notification-list"
          dataSource={notificationData}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                avatar={<Avatar src={Avatar1} />}
                title={<span>{item.message}</span>}
                description={item.title}
              />
              <div className="action-sec">
                <label className="notify-time">
                  {moment(item.created_at).format("DD MM, YYYY")}
                </label>
                {/* <img src={ActionIcon} /> */}

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
                      Mark as Read
                    </Dropdown.Item>

                    <Dropdown.Item
                      href="#/action-1"
                      // onClick={() => setCancelShow(true)}
                    >
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </List.Item>
          )}
        ></List>
      </div>
    </div>
  );
};

export default ListContent;
