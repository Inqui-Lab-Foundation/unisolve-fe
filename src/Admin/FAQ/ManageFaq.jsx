import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Tabs } from 'antd';
import FaqDataTable from './FaqDataTable';
import Layout from '../Layout';

import { HiDotsHorizontal } from 'react-icons/hi';
import { CommonDropDownComp } from '../../stories/CommonDropdown/CommonDropdownComp';
import { Button } from '../../stories/Button';
import { InputWithSearchComp } from '../../stories/InputWithSearch/InputWithSearch';
import AddFaqCategoryModal from './AddFaqCategoryModal';
import { URL, KEY } from '../../constants/defaultValues';
import { getNormalHeaders } from '../../helpers/Utils';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

import { BsPlusLg } from 'react-icons/bs';

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

    const getFaqCategoryList = async () => {
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        await axios
            .get(`${URL.getFaqCategoryList}`, axiosConfig)
            .then((faqCategoryList) => {
                if (faqCategoryList?.status == 200) {
                    let rowData = [];
                    let faqRowData = [];
                    faqCategoryList.data.data[0].dataValues.map(
                        (data, index) => {
                            let eachRow = {
                                key: index + 1,
                                category_name: data.category_name,
                                faqCatID: data.faq_category_id,
                                action: (
                                    <HiDotsHorizontal
                                        faqCatID={data.faq_category_id}
                                    />
                                )
                            };
                            rowData.push(eachRow);

                            if (data?.faqs?.length > 0) {
                                data?.faqs.map((faqdata, index) => {
                                    let faqEachRow = {
                                        key: index + 1,
                                        question: faqdata.question,
                                        answer: faqdata.answer,
                                        faqID: faqdata.faq_id,
                                        action: (
                                            <HiDotsHorizontal
                                                faqID={faqdata.faq_id}
                                            />
                                        )
                                    };
                                    faqRowData.push(faqEachRow);
                                });
                            }
                        }
                    );
                    setfaqCategoryList(rowData);
                    setFaqStateList(faqRowData);
                }
            })
            .catch((err) => {
                console.log(
                    '🚀 ~ file: ManageFaq.jsx ~ line 91 ~ useEffect ~ err',
                    err.response
                );
            });
    };

    useEffect(() => {
        getFaqCategoryList();
    }, []);

    const FaqListData = {
        data: faqStateList,
        columns: [
            {
                title: 'Questions',
                dataIndex: 'question'
            },
            {
                title: 'Answer',
                dataIndex: 'answer'
            },
            {
                title: 'ACTIONS',
                dataIndex: 'action',
                render: (params) => {
                    let getfaqFilterDrop = faqFilterDrop(params.props.faqID);

                    return (
                        <CommonDropDownComp
                            className="action-dropdown"
                            {...getfaqFilterDrop}
                        />
                    );
                }
            }
        ],
        addBtn: 0
    };

    const faqCategoryLists = {
        data: faqCategoryList,
        columns: [
            {
                title: 'Category name',
                dataIndex: 'category_name'
            },
            {
                title: 'ACTIONS',
                dataIndex: 'action',
                render: (params) => (
                    <CommonDropDownComp
                        className="action-dropdown"
                        name=""
                        Icon={HiDotsHorizontal}
                        options={[
                            { name: 'Edit', path: '' },
                            {
                                name: 'Delete',
                                path: '',
                                onClick: () =>
                                    deleteFaqCat(params.props.faqCatID)
                            }
                        ]}
                    />
                )
            }
        ],
        addBtn: 0
    };

    const deleteFaq = async (faqID) => {
        console.log(
            '🚀 ~ file: ManageFaq.jsx ~ line 134 ~ deleteFaq ~ faqID',
            faqID
        );

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const axiosConfig = getNormalHeaders(KEY.User_API_Key);
                axios
                    .delete(`${URL.getFaqList}/${faqID}`, axiosConfig)
                    .then((faqDeleteRes) => {
                        if (faqDeleteRes?.status == 200) {
                            Swal.fire(
                                'Faq Deleted Successfully..!!',
                                '',
                                'success'
                            );
                            // faqStateList.filter((eachfaq) => eachfaq.faqID != faqID);
                            setFaqStateList(
                                faqStateList.filter(
                                    (eachfaq) => eachfaq.faqID != faqID
                                )
                            );
                        }
                    })
                    .catch((err) => {
                        console.log(
                            '🚀 ~ file: ManageFaq.jsx ~ line 68 ~ useEffect ~ err',
                            err.response
                        );
                    });
            }
        });
    };

    const deleteFaqCat = async (faqCatID) => {
        console.log(
            '🚀 ~ file: ManageFaq.jsx ~ line 134 ~ deleteFaq ~ faqID',
            faqCatID
        );

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const axiosConfig = getNormalHeaders(KEY.User_API_Key);
                axios
                    .delete(
                        `${URL.getFaqCategoryList}/${faqCatID}`,
                        axiosConfig
                    )
                    .then((faqDeleteRes) => {
                        if (faqDeleteRes?.status == 200) {
                            Swal.fire(
                                'Faq Category Deleted Successfully..!!',
                                '',
                                'success'
                            );
                            console.log(
                                '🚀 ~ file: ManageFaq.jsx ~ line 211 ~ .then ~ faqCategoryList',
                                faqCategoryList
                            );
                            setfaqCategoryList(
                                faqCategoryList.filter(
                                    (eachfaqCat) =>
                                        eachfaqCat.faqCatID != faqCatID
                                )
                            );
                        }
                    })
                    .catch((err) => {
                        console.log(
                            '🚀 ~ file: ManageFaq.jsx ~ line 68 ~ useEffect ~ err',
                            err.response
                        );
                    });
            }
        });
    };

    const faqFilterDrop = (faqID) => {
        return {
            name: '',
            Icon: HiDotsHorizontal,
            options: [
                { name: 'Edit', path: `/admin/edit-faq/${faqID}` },
                { name: 'Delete', path: '', onClick: () => deleteFaq(faqID) }
            ]
        };
    };

    const changeTab = (e) => {
        // console.log(typeof e);
        if (e === '1') {
            // console.log("3");
            activeFaqCategory(!getFaqCategory);
            activeFaq(false);
        } else if (e === '2') {
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

    const updateFaqCatList = () => {
        getFaqCategoryList();
        toggleFaqCatModal();
    };

    return (
        <Layout>
            <Container className="ticket-page mb-50 userlist">
                <Row className="mt-5 pt-5">
                    <h2>Manage FAQ’s</h2>
                    <div className="ticket-data">
                        <Tabs
                            defaultActiveKey="1"
                            onChange={(key) => changeTab(key)}
                        >
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
                                                onClick={() =>
                                                    props.history.push(
                                                        '/admin/New-faq'
                                                    )
                                                }
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
                                <FaqDataTable {...FaqListData} />
                            </TabPane>

                            <TabPane
                                tab="FAQ Categories"
                                key="2"
                                className="bg-white p-3 mt-5 sub-tab"
                                // onClick={() => changeTab(false)}
                            >
                                <FaqDataTable {...faqCategoryLists} />
                            </TabPane>
                        </Tabs>
                    </div>
                </Row>
                <AddFaqCategoryModal
                    show={showFaqCatModal}
                    toggleFaqCatModal={toggleFaqCatModal}
                    updateFaqCatList={updateFaqCatList}
                />
            </Container>
        </Layout>
    );
};

export default ManageFaq;
