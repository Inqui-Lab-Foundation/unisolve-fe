import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import { Tabs } from 'antd';
import Layout from '../Layout';
import { HiDotsHorizontal } from 'react-icons/hi';
// import { CommonDropDownComp } from '../../stories/CommonDropdown/CommonDropdownComp';
// import { Button } from '../../stories/Button';
// import AddFaqCategoryModal from './AddFaqCategoryModal';
import { URL, KEY } from '../../constants/defaultValues';
import { getNormalHeaders } from '../../helpers/Utils';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
// import { BsPlusLg } from 'react-icons/bs';

// import CustomMaterialMenu from '../shared/CustomMaterialMenu';
import DataTable, { Alignment } from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { Link } from 'react-router-dom';

// const { TabPane } = Tabs;

const ManageFaq = (props) => {
    // eslint-disable-next-line no-unused-vars
    const [rows, setRows] = React.useState([]);

    // const [getFaq, activeFaq] = useState(false); //faq
    // const [getFaqCategory, activeFaqCategory] = useState(true); //faqcategory
    // const [showFaqCatModal, setShowFaqCatModal] = useState(false);

    // const [faqStateList, setFaqStateList] = useState([]);
    // const [faqDataTableListData, setDataTableListData] = useState([]);
    const [faqCategoryList, setfaqCategoryList] = useState([]);
    const [faqCategoryListItems, setfaqCategoryListItems] = useState([]);

    // const [faqListDataTable, setFaqListDataTable] = useState([]);
    const [faqListDataTableCat, setFaqListDataTableCat] = useState([]);


    // const toggleFaqCatModal = () => {
    //     setShowFaqCatModal((showFaqCatModal) => !showFaqCatModal);
    // };

    const getFaqCategoryList = async () => {
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        await axios
            .get(`${URL.getFaqCategoryList}`, axiosConfig)
            .then((faqCategoryList) => {
                if (faqCategoryList?.status == 200) {
                    let rowData = [];
                    // let faqRowData = [];
                    // let faqRowDataTable = [];
                    let faqRowDataTableCat = [];
                    faqCategoryList.data.data[0].dataValues.map(
                        (data, index) => {
                            let eachRow = {
                                // key: index + 1,
                                key: data.faq_category_id,
                                category_name: data.category_name,
                                faqCatID: data.faq_category_id,
                                action: (
                                    <HiDotsHorizontal
                                        faqCatID={data.faq_category_id}
                                    />
                                )
                            };
                            rowData.push(eachRow);

                            let eachRowFaqCat = {
                                index: index + 1,
                                key: data.faq_category_id,
                                category_name: data.category_name,
                                faqCatID: data.faq_category_id,
                                faq_count:data?.faq_count
                            };
                            faqRowDataTableCat.push(eachRowFaqCat);

                            // if (data?.faqs?.length > 0) {
                            //     data?.faqs.map((faqdata) => {
                            //         let faqEachRow = {

                            //             key: faqdata.faq_id,
                            //             question: faqdata.question,
                            //             answer: faqdata.answer,
                            //             faqID: faqdata.faq_id,
                            //             action: (
                            //                 <HiDotsHorizontal
                            //                     faqID={faqdata.faq_id}
                            //                 />
                            //             )
                            //         };
                            //         faqRowData.push(faqEachRow);
                            //     });
                            // }

                            // if (data?.faqs?.length > 0) {
                            //     data?.faqs.map((faqdata, index) => {
                            //         let faqEachRow = {
                            //             index : index+1,
                            //             key: faqdata.faq_id,
                            //             question: faqdata.question,
                            //             answer: faqdata.answer,
                            //             faqID: faqdata.faq_id,

                            //         };
                            //         faqRowDataTable.push(faqEachRow);
                            //     });
                            // }
                        }
                    );
                    setfaqCategoryList(rowData);
                    // setFaqStateList(faqRowData);

                    // setDataTableListData(faqRowDataTable);
                    // console.log('line---120', faqRowDataTable);

                    setfaqCategoryListItems(faqRowDataTableCat);
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

    // useEffect(() => {
    //     refreshFaqDataTable();

    // }, [faqDataTableListData]);

    useEffect(() => {
        refreshFaqCatDataTable();
    }, [faqCategoryListItems]);

    // const refreshFaqDataTable = () => {
    //     setFaqListDataTable({
    //         data: faqDataTableListData,
    //         columns: [
    //             {
    //                 name: 'S.No.',
    //                 selector: 'index',
    //                 // selector: row => row.question,
    //                 sortable: true,
    //                 width: "8%",
    //             },
    //             {
    //                 name: 'Questions',
    //                 selector: 'question',
    //                 // selector: row => row.question,
    //                 width: "20%",
    //                 sortable: true,
    //             },

    //             {
    //                 name: 'Answer',
    //                 selector: 'answer',
    //                 // selector: row => row.answer,
    //                 width: "60%",
    //                 sortable: true,
    //             },
    //             {

    //                 name: 'Actions',
    //                 cell: row => {
    //                     let getfaqFilterDrop = faqFilterDrop(row.faqID);
    //                     console.log("line 138",row);
    //                     return (
    //                         // <div {...getfaqFilterDrop}>...</div>
    //                         <CommonDropDownComp
    //                             className="action-dropdown"
    //                             {...getfaqFilterDrop}
    //                         />

    //                     );
    //                 },
    //                 allowOverflow: true,
    //                 button: true,
    //                 width: "12%",
    //                 right: true,
    //             }
    //         ],
    //     });
    // };

    const handleCateEdit = (item) => {
        props.history.push({
            pathname: `/admin/edit-faqcategory`,
            data: item
        });
    };
    const refreshFaqCatDataTable = () => {
        setFaqListDataTableCat({
            data: faqCategoryListItems,
            columns: [
                {
                    name: 'S.No.',
                    selector: 'index',
                    width: '13%',
                    sortable: true
                },
                {
                    name: 'Category Name',
                    selector: 'category_name',
                    width: "45%",
                    sortable: true,
                    cell:(params)=>[<Link key={params.faqCatID} to={`/admin/faq-by-category?id=${params.faqCatID}`}>{params?.category_name}</Link>]
                },
                {
                    name: 'Total Questions Count',
                    selector: 'faq_count',
                    width: "22%",
                    center: true
                },
                {
                    name: 'Actions',
                    cell: (params) => {
                        return [
                            <i
                                key={params.faqCatID}
                                className="fa fa-edit"
                                style={{marginRight:"10px"}}
                                onClick={() => handleCateEdit(params)}
                            />,
                            <i
                                key={params.faqCatID}
                                className="fa fa-trash"
                                onClick={() => deleteFaqCat(params.faqCatID)}
                            />
                        ];
                    },
                    width: '10%',
                    center: true
                }
            ],
            addBtn: 0
        });
    };

    // const deleteFaq = async (faqID) => {
    //     console.log(
    //         '🚀 ~ file: ManageFaq.jsx ~ line 134 ~ deleteFaq ~ faqID',
    //         faqID
    //     );

    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             const axiosConfig = getNormalHeaders(KEY.User_API_Key);
    //             axios
    //                 .delete(`${URL.getFaqList}/${faqID}`, axiosConfig)
    //                 .then((faqDeleteRes) => {
    //                     if (faqDeleteRes?.status == 200) {
    //                         Swal.fire(
    //                             'Faq Deleted Successfully..!!',
    //                             '',
    //                             'success'
    //                         );
    //                         setFaqStateList(
    //                             faqStateList.filter(
    //                                 (eachfaq) => eachfaq.faqID != faqID
    //                             )
    //                         );
    //                         setDataTableListData(
    //                             faqDataTableListData.filter(
    //                                 (eachfaq) => eachfaq.faqID != faqID
    //                             )
    //                         );

    //                     }
    //                 })
    //                 .catch((err) => {
    //                     console.log(
    //                         '🚀 ~ file: ManageFaq.jsx ~ line 68 ~ useEffect ~ err',
    //                         err.response
    //                     );
    //                 });
    //         }
    //     });s
    // };

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

                            setfaqCategoryListItems(
                                faqCategoryListItems.filter(
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

    // const faqFilterDrop = (faqID) => {
    //     return {
    //         name: '',
    //         Icon: HiDotsHorizontal,
    //         options: [
    //             { name: 'Edit', path: `/admin/edit-faq/${faqID}` },
    //             { name: 'Delete', path: '', onClick: () => deleteFaq(faqID) }
    //         ]
    //     };
    // };

    // const changeTab = (e) => {
    //     // console.log(typeof e);
    //     if (e === '1') {
    //         // console.log("3");
    //         activeFaqCategory(!getFaqCategory);
    //         activeFaq(false);
    //     } else if (e === '2') {
    //         // console.log("2");
    //         activeFaq(!getFaq);
    //         activeFaqCategory(false);
    //     } else {
    //         // console.log("1");
    //         activeFaqCategory(false);
    //         activeFaq(false);
    //         // activeStudent()
    //     }
    // };

    // const updateFaqCatList = () => {
    //     getFaqCategoryList();
    //     toggleFaqCatModal();
    // };

    return (
        <Layout>
            <Container className="ticket-page mb-50 userlist faqList">
                <Row className="mt-5 pt-2">
                    <Col className="col-auto mb-5 mb-sm-5 mb-md-5 mb-lg-0">
                        <h2>Manage FAQ’s</h2>
                    </Col>
                    {/* <Col className="ticket-btn col ml-auto  ">
                        <div className="d-flex justify-content-end">
                            {getFaq === true ? (
                                <Button
                                    label="Add New FAQ Category"
                                    btnClass="primary ml-2"
                                    size="small"
                                    shape="btn-square"
                                    Icon={BsPlusLg}
                                    onClick={() =>
                                                    
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
                    </Col> */}
                </Row>

                <Row>
                    <div className="ticket-data p-3 bg-white">
                        <div className="my-5 p-2">
                            <DataTableExtensions
                                {...faqListDataTableCat}
                                exportHeaders
                                print={false}
                            >
                                <DataTable
                                    data={rows}
                                    // noHeader
                                    defaultSortField="id"
                                    defaultSortAsc={false}
                                    pagination
                                    highlightOnHover
                                    fixedHeader
                                    // fixedHeaderScrollHeight='300px'
                                    subHeaderAlign={Alignment.Center}
                                />
                            </DataTableExtensions>
                        </div>
                        {/* 
                        <div className='my-5'>
                            <DataTableExtensions {...faqListDataTable} exportHeaders print={false}>
                                <DataTable
                                    data={rows}
                                    // noHeader
                                    defaultSortField='id'
                                    defaultSortAsc={false}
                                    pagination
                                    highlightOnHover
                                    fixedHeader
                                    // fixedHeaderScrollHeight='300px'
                                    subHeaderAlign={Alignment.Center}
                        
                                />
                            </DataTableExtensions>
                        </div> */}
                        {/* </TabPane>ss */}
                    </div>
                </Row>
                {/* <AddFaqCategoryModal
                    show={showFaqCatModal}
                    toggleFaqCatModal={toggleFaqCatModal}
                    updateFaqCatList={updateFaqCatList}
                /> */}
            </Container>
        </Layout>
    );
};

export default ManageFaq;
