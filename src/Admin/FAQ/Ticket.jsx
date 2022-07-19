import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Tabs } from "antd";
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
import AddFaqCategoryModal from "./AddFaqCategoryModal";

const { TabPane } = Tabs;

const TicketsPage = (props) => {
  const [student, activeStudent] = useState(false);
  const [menter, activeMenter] = useState(false);
  const [evaluater, activeEvaluater] = useState(true);
  const [showFaqCatModal, setShowFaqCatModal] = useState(false);

  const toggleFaqCatModal = () => {
    setShowFaqCatModal((showFaqCatModal) => !showFaqCatModal);
  };

  const callback = (key) => {};
  const TableProps = {
    data: [
      {
        key: "1",
        name: "Ken Khoi",
        action: <HiDotsHorizontal />,
      },
    ],
    columns: [
      {
        title: "Category NAME",
        dataIndex: "name",
      },
      {
        title: "ACTIONS",
        dataIndex: "action",
        render: (text) => (
          <CommonDropDownComp
            className="action-dropdown"
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

  const addImport = {
    name: "Import",
    Icon: BsUpload,
    options: [
      { name: "CSV", path: "" },
      { name: "XLV", path: "" },
    ],
  };

  const changeTab = (e) => {
    // console.log(typeof e);
    if (e === "1") {
      // console.log("3");
      activeEvaluater(!evaluater);
      activeMenter(false);
    } else if (e === "2") {
      // console.log("2");
      activeMenter(!menter);
      activeEvaluater(false);
    } else {
      // console.log("1");
      activeEvaluater(false);
      activeMenter(false);
      // activeStudent()
    }
  };

  // const onClick = () => activeMenter(true);
  console.log("======menter", menter);
  console.log("======evaluater", evaluater);

  return (
    <Layout>
      <Container className="ticket-page mb-50 userlist">
        <Row className="mt-5 pt-5">
          <h2>Manage FAQ’s</h2>
          <div className="ticket-data">
            <Tabs defaultActiveKey="1" onChange={(key) => changeTab(key)}>
              <Row className="mt-5">
                <Col
                  sm={12}
                  md={12}
                  lg={3}
                  className="mb-5 mb-sm-5 mb-md-5 mb-lg-0"
                >
                  <InputWithSearchComp placeholder="Search ticket" />
                </Col>

                <Col className="ticket-btn col ml-auto  ">
                  <div className="d-flex justify-content-end">
                    <CommonDropDownComp {...addImport} />
                    <Button
                      label="Export"
                      btnClass="primary-outlined mx-2"
                      size="small"
                      shape="btn-square"
                      Icon={BsGraphUp}
                      // onClick={() => props.history.push("/admin/create-sessions")}
                    />

                    {menter === true ? (
                      <Button
                        label="Add New FAQ Category"
                        btnClass="primary ml-2"
                        size="small"
                        shape="btn-square"
                        Icon={BsPlusLg}
                        onClick={() =>
                          // props.history.push("/admin/add-new-faq-category")
                          toggleFaqCatModal()
                        }
                      />
                    ) : evaluater === true ? (
                      <Button
                        label="Add New FAQ"
                        btnClass="primary ml-2"
                        size="small"
                        shape="btn-square"
                        Icon={BsPlusLg}
                        onClick={() => props.history.push("/admin/New-faq")}
                      />
                    ) : null}
                  </div>
                </Col>
              </Row>

              <TabPane
                tab="FAQ's"
                key="1"
                className="bg-white p-3 mt-5 sub-tab"
              >
                <Tabs defaultActiveKey="1" onChange={callback}>
                  <TabPane tab="All" key="1">
                    <TicketDataTable {...TableProps} />
                  </TabPane>

                  <TabPane tab="Inactive" key="3">
                    <TicketDataTable {...TableProps} />
                  </TabPane>
                </Tabs>
              </TabPane>

              <TabPane
                tab="FAQ Categories"
                key="2"
                className="bg-white p-3 mt-5 sub-tab"
                // onClick={() => changeTab(false)}
              >
                <Tabs defaultActiveKey="1">
                  <TabPane tab="All" key="1">
                    <TicketDataTable {...TableProps} />
                  </TabPane>
                </Tabs>
              </TabPane>
            </Tabs>
          </div>
        </Row>
        <AddFaqCategoryModal
          show={showFaqCatModal}
          toggleFaqCatModal={toggleFaqCatModal}
        />
      </Container>
    </Layout>
  );
};

export default TicketsPage;
