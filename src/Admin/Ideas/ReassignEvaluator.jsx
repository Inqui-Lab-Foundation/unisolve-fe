import React from "react";
import { Container, Row } from "reactstrap";
import { Tabs } from "antd";
import "./style.scss";
import TicketDataTable from "./ReassignDataTable";
import Layout from "../../Admin/Layout";
import { Tag } from "antd";
import { BsThreeDots } from "react-icons/bs";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
} from "reactstrap";
import { Figure, Dropdown } from "react-bootstrap";
import { HiDotsHorizontal } from "react-icons/hi";
import { CommonDropDownComp } from "../../stories/CommonDropdown/CommonDropdownComp";
import { BreadcrumbTwo } from "../../stories/BreadcrumbTwo/BreadcrumbTwo";

const { TabPane } = Tabs;

const ReassignEvaluator = (props) => {
  const callback = (key) => {};

  const TableDraftProps = {
    data: [
      {
        key: "1",
        name: "#2021-3454",
        status: ["Draft"],
        category: "Payment Gateway",
        desc: "Is the Payment Gateway secure?",
        createdDate: "Dec 30, 2021, 09:42 PM",
        viewDetails: "view details",
        action: <HiDotsHorizontal />,
      },
      {
        key: "2",
        name: "#2021-3454",
        status: ["Draft"],
        category: "Payment Gateway",
        desc: "Is the Payment Gateway secure?",
        createdDate: "Dec 30, 2021, 09:42 PM",
        viewDetails: "view details",
        action: <HiDotsHorizontal />,
      },
    ],
    allbtn: 0,
  };

  const reEvaluator = [
    {
      name: "Jhani",
      assined: 50,
      imgSrc: "../../assets/img/Shuttle_Badge_Color.png",
    },
    {
      name: "Shaik",
      assined: 150,
      imgSrc: "../../assets/img/Shuttle_Badge_Color.png",
    },
    {
      name: "Bhuvana",
      assined: 50,
      imgSrc: "../../assets/img/Shuttle_Badge_Color.png",
    },
  ];
  const headingDetails = {
    title: "Reassign Evaluator",

    options: [
      {
        title: "Ideas",
        path: "/admin/ideas",
      },
      {
        title: "Reassign Evaluator",
        path: "/",
      },
    ],
  };
  return (
    <Layout>
      <Container className='ticket-page mb-50'>
        <Row className='mt-5 pt-5'>
          <BreadcrumbTwo {...headingDetails} />
          <div className='ticket-data'>
            <Tabs defaultActiveKey='1' onChange={callback}>
              <TabPane tab='Active Evaluators(6)' key='1'>
                {/* <TicketDataTable {...TableDraftProps} /> */}
                {/* {props.reEvaluator.map((item) => {
                  return <div>{item.name}</div>;
                })} */}
                <Row>
                  {reEvaluator.map((user) => {
                    return (
                      <Col md={3}>
                        <Card className='progress-card p-3  p-md-4'>
                          <div className='w-100 text-right d-block'>
                            <Dropdown
                              className='action-dropdown'
                              onClick={(e) => {
                                // setActionHandler(e, data);
                              }}
                            >
                              <Dropdown.Toggle
                                id='dropdown-action'
                                className='p-0'
                              >
                                <BsThreeDots
                                  color={"#7C7C7C"}
                                  style={{
                                    backgroundColor: `${"#EEEEEE"}`,
                                  }}
                                />
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item
                                  href='#/action-2'
                                  // onClick={() => setRescheduleShow(true)}
                                >
                                  Mark Inactive
                                </Dropdown.Item>

                                <Dropdown.Item
                                  href='#/action-1'
                                  // onClick={() => setCancelShow(true)}
                                >
                                  Reassign Evaluator
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>

                          <div className='d-flex'>
                            <Figure
                              className='my-auto'
                              style={{ width: "7.4rem" }}
                            >
                              <CardImg src={user.imgSrc} />
                            </Figure>
                            <CardBody className='progress-section py-0'>
                              <CardTitle className='progress-name my-3'>
                                {user.name}
                              </CardTitle>
                              <CardSubtitle className='progress-text'>
                                <div className='progress-text mt-1'>
                                  Ideas Assigned{user.assined}
                                </div>
                              </CardSubtitle>
                            </CardBody>
                          </div>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </TabPane>
              <TabPane tab='inactive Evaluators(3)' key='2'>
                <TicketDataTable {...TableDraftProps} />
              </TabPane>
            </Tabs>
          </div>
        </Row>
      </Container>
    </Layout>
  );
};

export default ReassignEvaluator;
