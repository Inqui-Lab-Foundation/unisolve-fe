/* eslint-disable react/no-children-prop */
import React from "react";
// import { Row, Col } from "react-bootstrap";
import {
    Card,
    // CardImg,
    CardBody,
    // CardTitle,
    // CardSubtitle,
    // CardText,
} from "reactstrap";
import ReadMoreContent from "../ReadMoreContent";
// import ListContent from "../../components/ListContent";
import { List, Avatar } from "antd";
import Avatar1 from "../../../assets/media/img/avatar1.png";
import ActionIcon from "../../../assets/media/img/actionIcon.png";
import SamplePDF from "../../../assets/media/img/pdfImg.png";

import "./style.scss";
import { AiOutlineDownload } from "react-icons/ai";

const TicketCards = (props) => {
    const ticketData = [
        {
            id: 1,
            text: "Reported an issue in: Payment Gateway",
            name: "Rajesh Roy",
            time: "11:52 AM",
        },
    ];

    return (
        <Card className='ticket-card'>
            <List
                className='ticket-head'
                dataSource={ticketData}
                renderItem={(item) => (
                    <List.Item key={item.id}>
                        <List.Item.Meta
                            avatar={<Avatar src={Avatar1} />}
                            title={<span>{item.text}</span>}
                            description={item.name}
                        />
                        <div className='action-sec'>
                            <label className='notify-time'>{item.time}</label>
                            <img src={ActionIcon} />
                        </div>
                    </List.Item>
                )}
            ></List>
            <CardBody>
                <p>Hi,</p>
                <ReadMoreContent
                    more='Read More'
                    children='Hi,

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
laboris nisi ut aliquip ex ea commodo consequat.Hi,

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
laboris nisi ut aliquip ex ea commodo consequat.'
                />
                {props && props.attachment ? (
                    <>
                        <hr></hr>
                        <div className='attachemnt-list'>
                            <div className='d-flex justify-content-between'>
                                <p>2 Attachments</p>
                                <p>
                                    <AiOutlineDownload />
                                </p>
                            </div>
                            <div className='attachments'>
                                <div className='attachment-img'>
                                    <img src={SamplePDF}></img>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    ""
                )}
            </CardBody>
        </Card>
    );
};
export default TicketCards;
