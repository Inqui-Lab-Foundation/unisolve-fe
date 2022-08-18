import React from "react";
import { Row, Col } from "react-bootstrap";
import TicketCards from "../../components/TicketsCard";
import { Breadcrumb } from "antd";
import { Tag } from "antd";
import { Button } from "../../stories/Button";
// import { DropDownComp } from "../../stories/DropdownComp/DropdownComp";
import TicketCardsAttachment from "../../components/TicketsCard/TicketCardAttachment";
import Layout from "../../Admin/Layout";
import { CommonDropDownComp } from "../../stories/CommonDropdown/CommonDropdownComp";
import { BsThreeDotsVertical } from "react-icons/bs";
const TicketViewDetails = (props) => {
    // const [ticketStatus, setTicketStatus] = useState("");
    const filterDropProps = {
        name: "",
        Icon: BsThreeDotsVertical,
        options: [
            { name: "Mark as Read", path: "" },
            { name: "Delete", path: "" },
        ],
    };
    return (
        <Layout>
            <div className="view-tickets-page">
                <Row>
                    <Col md={{ span: 0, offset: 0 }} xl={{ span: 8, offset: 2 }}>
                        <Breadcrumb>
                            <Breadcrumb.Item>Help</Breadcrumb.Item>

                            <Breadcrumb.Item>Tickets</Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href="">Tickets details</a>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="d-flex justify-content-between py-5">
                            <div className="ticket-info">
                                <p>
                  Ticket Id: <span>#2021-3453</span>
                                    {props && props.status === "Solved" ? (
                                        <Tag color={"gold"} className="ticket-status">
                      Solved
                                        </Tag>
                                    ) : props && props.status === "Draft" ? (
                                        <Tag color={"red"} className="ticket-status">
                      Solved
                                        </Tag>
                                    ) : (
                                        <Tag color={"green"} className="ticket-status">
                      Solved123
                                        </Tag>
                                    )}
                                </p>
                            </div>
                            <div className="ticket-action">
                                <Button
                                    btnClass="secondary"
                                    label="Open Ticket"
                                    shape="btn-square"
                                />
                                <CommonDropDownComp {...filterDropProps} />
                            </div>
                        </div>
                        <TicketCards />
                        <div className="py-5">
                            <TicketCards attachment="true" />
                        </div>
                        <div className="py-3">
                            <TicketCardsAttachment />
                        </div>
                    </Col>
                </Row>
            </div>
        </Layout>
    );
};

export default TicketViewDetails;
