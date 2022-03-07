import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./style.scss";
import { List, Avatar, Button, Skeleton } from "antd";
import Avatar1 from "../../assets/img/avatar1.png";
import Avatar2 from "../../assets/img/avatar2.png";
import ActionIcon from "../../assets/img/actionIcon.png";

const ListContent = () => {
    const notificationData =[
        {
            id:1,
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            name:"Rajesh Roy",
            time:"11:52 AM"
        },
        {
            id:1,
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            name:"Rajesh Roy",
            time:"11:52 AM"

        },  {
            id:1,
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            name:"Rajesh Roy",
            time:"11:52 AM"

        },  {
            id:1,
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            name:"Rajesh Roy",
            time:"11:52 AM"

        }
    ]
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
                  avatar={
                    <Avatar src={Avatar1} />
                  }
                  title={<span>{item.text}</span>}
                  description={item.name}
                />
                <div className="action-sec">
                    <label className="notify-time">{item.time}</label>
                    <img src={ActionIcon} />
                </div>
              </List.Item>
            )}
          ></List>
        </div>
    </div>
  );
};

export default ListContent;
