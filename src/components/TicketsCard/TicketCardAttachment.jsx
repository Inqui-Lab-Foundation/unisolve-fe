/* eslint-disable react/no-children-prop */
import React from "react";
import { Row, Col } from "react-bootstrap";
import {
    Card,
  
    CardBody,
  
} from "reactstrap";
// import ListContent from "../../components/ListContent";
import ReadMoreContent from "../ReadMoreContent";

import { List, Avatar } from "antd";
import Avatar1 from "../../assets/media/img/avatar1.png";
import ActionIcon from "../../assets/media/img/actionIcon.png";
// import SamplePDF from "../../assets/img/sample.pdf";
import "./style.scss";
// import { AiOutlineDownload } from "react-icons/ai";
// import { RiShareForwardFill } from "react-icons/ri";
import { RichText } from "../../stories/RichText/RichText";
import { Button } from "../../stories/Button";

const TicketCardsAttachment = () => {
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
                            title={<span>{`From:  Fatima`}</span>}
                            description={`To: Rakesh (admin@unisolve.com)}`}
                        />
                        <div className='action-sec'>
                            <label className='notify-time'>{item.time}</label>
                            <img src={ActionIcon} />
                        </div>
                    </List.Item>
                )}
            ></List>
            <CardBody>
                <div className='card-text'>
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
                </div>
                <hr></hr>
                <div className='attachemnt-comp'>
                    <RichText />
                </div>
                <Row className='submit-action py-4'>
                    <Col>
                        <Button
                            label='Save as draft'
                            btnClass='secondary'
                            size='small'
                            //   onClick={() => props.history.push("/tickets")}
                        />
                    </Col>
                    <Col className='submit-btn'>
                        <Button label='Send Reply' btnClass='default' size='small' />
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default TicketCardsAttachment;
