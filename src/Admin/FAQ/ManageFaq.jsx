import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Tabs } from "antd";
import TicketDataTable from "./TicketDataTable";
import Layout from "../Layout";
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
import { URL, KEY } from "../../constants/defaultValues";
import { getNormalHeaders } from "../../helpers/Utils";
import axios from "axios";

const { TabPane } = Tabs;

const ManageFaq = (props) => {
  const [getFaq, activeFaq] = useState(false); //faq
  const [getFaqCategory, activeFaqCategory] = useState(true); //faqcategory
  const [showFaqCatModal, setShowFaqCatModal] = useState(false);

  const [faqStateList, setFaqStateList] = useState([]);
  const [faqCategoryList, setfaqCategoryList] = useState([]);

  const toggleFaqCatModal = () => {
    setShowFaqCatModal((showFaqCatModal) => !showFaqCatModal);
  };

  const callback = (key) => {};

  useEffect(() => {
    const axiosConfig = getNormalHeaders(KEY.User_API_Key);
    axios
      .get(`${URL.getFaqList}`, axiosConfig)
      .then((faqList) => {
        if (faqList?.status == 200) {
          let rowData = [];
          faqList.data.data[0].dataValues.map((data, index) => {
            let eachRow = {
              key: index + 1,
              question: data.question,
              answer: data.answer,
              action: <HiDotsHorizontal />,
            };
            rowData.push(eachRow);
            console.log(data.question);
            console.log(data.answer);
          });

          setFaqStateList(rowData);
        }
      })
      .catch((err) => {
        console.log(
          "🚀 ~ file: ManageFaq.jsx ~ line 68 ~ useEffect ~ err",
          err.response
        );
      });

    axios
      .get(`${URL.getFaqCategoryList}`, axiosConfig)
      .then((faqCategoryList) => {
        if (faqCategoryList?.status == 200) {
          let rowData = [];
          faqCategoryList.data.data[0].dataValues.map((data, index) => {
            let eachRow = {
              key: index + 1,
              category_name: data.category_name,
              action: <HiDotsHorizontal />,
            };
            rowData.push(eachRow);
          });
          setfaqCategoryList(rowData);
        }
      })
      .catch((err) => {
        console.log(
          "🚀 ~ file: ManageFaq.jsx ~ line 91 ~ useEffect ~ err",
          err.response
        );
      });
  }, []);

  console.log("getCateogryData: ", faqCategoryList);

  const FaqListData = {
    data: faqStateList,
    columns: [
      {
        title: "Questions",
        dataIndex: "question",
      },
      {
        title: "Answer",
        dataIndex: "answer",
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

  const faqCategoryLists = {
    data: faqCategoryList,
    columns: [
      {
        title: "Category name",
        dataIndex: "category_name",
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

  const changeTab = (e) => {
    // console.log(typeof e);
    if (e === "1") {
      // console.log("3");
      activeFaqCategory(!getFaqCategory);
      activeFaq(false);
    } else if (e === "2") {
      // console.log("2");
      activeFaq(!getFaq);
      activeFaqCategory(false);
    } else {
      // console.log("1");
      activeFaqCategory(false);
      activeFaq(false);
      // activeStudent()
    }
  };

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
                  <InputWithSearchComp placeholder="Search Faq's" />
                </Col>

                <Col className="ticket-btn col ml-auto  ">
                  <div className="d-flex justify-content-end">
                    {getFaq === true ? (
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
                    ) : getFaqCategory === true ? (
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
                    <TicketDataTable {...FaqListData} />
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
                    <TicketDataTable {...faqCategoryLists} />
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

export default ManageFaq;
