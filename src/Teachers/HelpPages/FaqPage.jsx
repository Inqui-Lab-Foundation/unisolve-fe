import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getNormalHeaders } from '../../helpers/Utils';
import { Row, Col } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';

import Layout from '../Layout';
import { useSelector } from 'react-redux';
import { getLanguage } from '../../constants/languageOptions';
import { KEY, URL } from '../../constants/defaultValues';

const FaqPage = () => {
    const [queryId] = useState('Idea Submission');
    // changed
    // const currentUser = getCurrentUser('current_user');
    const [response, SetResponse] = useState([]);
    const language = useSelector(state=>state?.mentors.mentorLanguage);

    const getFaqByCategory = async (id) => {
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        await axios
            .get(`${URL.getFaqByCategoryId}/${id}?${getLanguage(language)}`, axiosConfig)
            .then((res) => {
                if (res?.status === 200) {
                    SetResponse(res?.data?.data[0]?.faqs);
                }
            })
            .catch((err) => {
                console.log(
                    err.response
                );
            });
    };
    // changed
    useEffect(() => {
        getFaqByCategory(1);
        // var config = {
        //     method: 'get',
        //     url: process.env.REACT_APP_API_BASE_URL + '/faqs?'+getLanguage(language),
        //     headers: {
        //         'Content-Type': 'application/json',
        //         // Accept: "application/json",
        //         Authorization: `Bearer ${currentUser.data[0].token}`
        //     }
        //     // data: body,
        // };
        // axios(config)
        //     .then(function (response) {
        //         console.log('line no:99', response);
        //         if (response.status === 200) {
        //             SetResponse(response.data.data[0].dataValues);
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }, [language]);
    return (
        <Layout>
            <div className="faq-page">
                {queryId ? (
                    <div className="idea-section text-center container">
                        {/* <h1>{queryId}</h1> */}
                        <h1>FAQ’s</h1>

                        <Row className="justify-content-center">
                            <Col md={10}>
                                <div className="collapse-sec idea-que-sec pt-2">
                                    <Accordion>
                                        {response.map((que, index) => {
                                            return (
                                                <Accordion.Item
                                                    eventKey={index}
                                                    className="mt-3 mb-4 que-items"
                                                    key={index}
                                                >
                                                    <Accordion.Header className="question">
                                                        <div className="idea-query py-3">
                                                            {/* <Avatar src={User} className="avatar-imgs" /> */}
                                                            <span className="avatar-txt">
                                                                {que.question}
                                                            </span>
                                                        </div>
                                                    </Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className="idea-pblms">
                                                            <div
                                                                className="idea-pblm-list"
                                                                key={index}
                                                            >
                                                                <Row className="justify-content-between w-100">
                                                                    <Col
                                                                        md={12}
                                                                        xl={12}
                                                                        className="my-auto text-left"
                                                                    >
                                                                        <div dangerouslySetInnerHTML={ { __html: que.answer } }></div>
            
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            );
                                        })}
                                    </Accordion>
                                </div>
                            </Col>
                        </Row>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </Layout>
    );
};

export default FaqPage;
