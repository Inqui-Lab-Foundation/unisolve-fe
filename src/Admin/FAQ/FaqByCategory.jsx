import './style.scss';
import Layout from '../Layout.jsx';
import { Container, Row, Col } from 'reactstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getNormalHeaders } from '../../helpers/Utils';
import axios from 'axios';
import DataTable, { Alignment } from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { KEY, URL } from '../../constants/defaultValues';
import  Swal  from 'sweetalert2/dist/sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';


const FaqByCategory = () => {
    // eslint-disable-next-line no-unused-vars
    const [rows, setRows] = useState([]);
    const history = useHistory();
    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');

    const [data, setData] = useState([]);

    const getFaqByCategory = async (id) => {
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        await axios
            .get(`${URL.getFaqByCategoryId}?id=${id}`, axiosConfig)
            .then((res) => {
                if (res?.status === 200) {
                    setData(
                        () =>
                            res?.data?.data[0]?.dataValues[0]?.faqs &&
                            res?.data?.data[0]?.dataValues[0]?.faqs.map(
                                (item, i) => {
                                    item.index = i + 1;
                                    return item;
                                }
                            )
                    );
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
        getFaqByCategory(id);
    }, [id]);
    const deleteFaq = async (faqID) => {
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
                            getFaqByCategory(faqID);
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
    const dataProps = {
        data: data,
        columns: [
            {
                name: 'S.No.',
                selector: 'index',
                sortable: true,
                width: '10%'
            },
            {
                name: 'Questions',
                selector: 'question',
                width: '70%',
                sortable: true
            },

            // {
            //     name: 'Answer',
            //     selector: 'answer',
            //     width: '60%',
            //     sortable: true
            // },
            {
                name: 'Actions',
                cell: (row) => [
                    <i
                        key={row.faq_id}
                        className="fa fa-edit"
                        style={{ marginRight: '10px' }}
                        onClick={() =>
                            history.push(`/admin/edit-faq/${row.faq_id}`)
                        }
                    />,
                    <i
                        key={row.faq_id}
                        className="fa fa-trash"
                        onClick={() => deleteFaq(row.faq_id)}
                    />
                ],
                allowOverflow: true,
                button: true,
                width: '12%',
                right: true
            }
        ]
    };

    return (
        <Layout>
            <Container className="ticket-page mb-50 userlist faqList">
                <Row className="mt-5 pt-2">
                    <Col className="col-auto mb-5 mb-sm-5 mb-md-5 mb-lg-0">
                        <h2>FAQ’s</h2>
                    </Col>
                </Row>
                <Row>
                    <div className="ticket-data p-3 bg-white">
                        <div className="my-5">
                            <DataTableExtensions
                                {...dataProps}
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
                    </div>
                </Row>
            </Container>
        </Layout>
    );
};

export default FaqByCategory;
