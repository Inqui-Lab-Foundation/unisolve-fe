import React from "react";

import "./style.scss";
import { List, Avatar } from "antd";
import Avatar1 from "../../assets/img/avatar1.png";
import { BsThreeDots } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";

const ListContent = () => {
    const notificationData = [
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            name: "Rajesh Roy",
            time: "11:52 AM",
        },
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            name: "Rajesh Roy",
            time: "11:52 AM",
        },
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            name: "Rajesh Roy",
            time: "11:52 AM",
        },
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            name: "Rajesh Roy",
            time: "11:52 AM",
        },
    ];
    return (
        <div className='list-content'>
            <div className='d-flex justify-content-between'>
                <button className='day-label'>Today</button>
                <button className='notify-action'>Mark all as Read</button>
            </div>
            <div>
                <List
                    className='notification-list'
                    dataSource={notificationData}
                    renderItem={(item) => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                avatar={<Avatar src={Avatar1} />}
                                title={<span>{item.text}</span>}
                                description={item.name}
                            />
                            <div className='action-sec'>
                                <label className='notify-time'>{item.time}</label>
                                {/* <img src={ActionIcon} /> */}

                                <Dropdown
                                    className='action-dropdown'
                                    onClick={() => {
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
                      Mark as Read
                                        </Dropdown.Item>

                                        <Dropdown.Item
                                            href='#/action-1'
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
