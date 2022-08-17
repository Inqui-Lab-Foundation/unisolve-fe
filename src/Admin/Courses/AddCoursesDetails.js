/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { Row, Col, Card, CardBody, Form } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import './style.scss';

import CourseVideo from '../../assets/img/courseVideo.png';
import Layout from '../../Admin/Layout';

import { Accordion } from 'react-bootstrap';

import { Button } from '../../stories/Button';

import { BreadcrumbTwo } from '../../stories/BreadcrumbTwo/BreadcrumbTwo';
import { useHistory } from 'react-router-dom';

const AddCoursesDetails = () => {
    const [videoClick, setVideoClick] = useState(false);
    const [moduleClick, setModuleClick] = useState(false);
    // const [error, setError] = useState("");
    const [videosList, setVideosList] = useState([]);
    const [modulesList, setModulesList] = useState([]);
    const history = useHistory();
    const data = (history && history.location && history.location.item) || {};
    console.log('===============', data);

    const headingDetails = {
        title: 'Add course details',

        options: [
            {
                title: 'Courses',
                path: '/admin/all-courses'
            },
            {
                title: 'Add course details',
                path: '/admin/addcourses-details'
            }
        ]
    };

    const saveBtn = {
        label: 'Save details',
        size: 'small'
        // btnClass: "default",
    };
    const saveDraft = {
        label: 'Save as  draft',
        size: 'small'
        // btnClass: "default",
    };

    const handleVideosChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...videosList];
        list[index][name] = value;
        setVideosList(list);
    };

    // console.log("=================++++++", videosList);

    const handleVideosRemove = (e, index) => {
        const list = [...videosList];
        list.splice(index, 1);
        setVideosList(list);
    };

    const handleVideosAdd = () => {
        setVideoClick(true);
        alert('hi');
        setVideosList([...videosList, { videoTitle: '', videoLink: '' }]);
    };

    const handleModulesChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...modulesList];
        list[index][name] = value;
        setModulesList(list);
    };

    // console.log("=================++++++", modulesList);

    const handleModulesRemove = (e, index) => {
        alert('uuuuuu');
        const list = [...modulesList];
        list.splice(index, 1);
        setModulesList(list);
    };

    const handleModulesAdd = () => {
        setModuleClick(true);
        alert('hi');
        setModulesList([...modulesList, { qstType: '', qst: '', ans1: '' }]);
    };

    return (
        <Layout>
            <div className="courses-page mt-5 pt-5">
                <Form>
                    <div className=" container">
                        <Row>
                            <Col md={6}>
                                <BreadcrumbTwo {...headingDetails} />
                            </Col>
                            <Col md={6} className="text-right">
                                <Button
                                    {...saveDraft}
                                    type="submit"
                                    btnClass="default mx-4"
                                />
                                <Button
                                    {...saveBtn}
                                    type="submit"
                                    btnClass="default"
                                />
                            </Col>
                        </Row>

                        <Row className="m-0    courser-video-section ">
                            <Col
                                xl={4}
                                className="course-assement-vd order-2 order-xl-1"
                            >
                                {data == 'Videos' && (
                                    <div className="module-assement-v">
                                        <div className="assement-info">
                                            <p className="content-title">
                                                Video Lesson
                                            </p>
                                            <p className="module-text m-0">
                                                Test students knowledge of all
                                                skills in this Video Lesson
                                            </p>
                                            <p className="assement-link text-center">
                                                <img
                                                    src={CourseVideo}
                                                    className="text-center img-fluid"
                                                />
                                            </p>
                                            <Col className="mx-4">
                                                <Button
                                                    label="&#x2b;  Add Video Lesson"
                                                    btnClass="primary"
                                                    size="small"
                                                    onClick={(e) =>
                                                        handleVideosAdd(e)
                                                    }
                                                />
                                            </Col>
                                        </div>
                                    </div>
                                )}
                                {/* {<hr></hr>} */}
                                {data == 'Modules' && (
                                    <div className="module-assement-v">
                                        <div className="assement-info">
                                            <p className="content-title">
                                                Module Assessement
                                            </p>
                                            <p className="module-text m-0">
                                                Test students knowledge of all
                                                skills in this module
                                            </p>
                                            <p className="assement-link text-center">
                                                <img
                                                    src={CourseVideo}
                                                    className="text-center img-fluid"
                                                />
                                            </p>
                                            <Col className="mx-4">
                                                <Button
                                                    label="&#x2b; Add Module Assessement"
                                                    btnClass="primary"
                                                    size="small"
                                                    onClick={(e) =>
                                                        handleModulesAdd(e)
                                                    }
                                                />
                                            </Col>
                                        </div>
                                    </div>
                                )}
                            </Col>
                            <Col
                                xl={8}
                                className=" order-1 order-xl-2 course-register-block"
                            >
                                <Row>
                                    <Col md={12}>
                                        {videoClick == true
                                            ? videosList.map((video, index) => (
                                                <Card className="w-100  mb-5 p-4">
                                                    <CardBody>
                                                        <div className="create-ticket">
                                                            <p className="m-0 question">
                                                                  Video lession
                                                                  title
                                                            </p>
                                                            <span className="que-text mb-2">
                                                                  Lorem ipsum
                                                                  dolor sit
                                                                  amet,
                                                                  consectetur
                                                                  adipiscing
                                                                  elit.
                                                            </span>
                                                            <input
                                                                name="videoTitle"
                                                                type="text"
                                                                id="videoTitle"
                                                                placeholder="videoTitle"
                                                                value={
                                                                    video.videoTitle
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) =>
                                                                    handleVideosChange(
                                                                        e,
                                                                        index
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                        <div className="create-ticket my-5">
                                                            <p className="m-0 question">
                                                                  Video lesson
                                                                  link
                                                            </p>
                                                            <span className="que-text">
                                                                  Lorem ipsum
                                                                  dolor sit
                                                                  amet,
                                                                  consectetur
                                                                  adipiscing
                                                                  elit.
                                                            </span>
                                                            <input
                                                                name="videoLink"
                                                                type="text"
                                                                id="videoLink"
                                                                placeholder="videoLink"
                                                                value={
                                                                    video.videoLink
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) =>
                                                                    handleVideosChange(
                                                                        e,
                                                                        index
                                                                    )
                                                                }
                                                            />
                                                            <Col className="mx-4">
                                                                <Button
                                                                    label="Remove"
                                                                    btnClass="primary"
                                                                    size="small"
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        handleVideosRemove(
                                                                            e,
                                                                            index
                                                                        )
                                                                    }
                                                                />
                                                            </Col>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            ))
                                            : null}
                                        {moduleClick == true
                                            ? modulesList.map((val, i) => (
                                                <Col
                                                    md={12}
                                                    className="choice-module"
                                                >
                                                    <h2>
                                                          Module Assessement
                                                    </h2>
                                                    <div
                                                        key={i}
                                                        className="w-100  mb-5 p-4 bg-white"
                                                    >
                                                        <Accordion defaultActiveKey="0">
                                                            <Accordion.Item eventKey="0">
                                                                <Row>
                                                                    <Col
                                                                        md={
                                                                            12
                                                                        }
                                                                    >
                                                                        <p className="m-0 question">
                                                                              Choices
                                                                        </p>
                                                                        <Accordion.Header>
                                                                              Question{' '}
                                                                            {1 +
                                                                                  i}
                                                                        </Accordion.Header>
                                                                        <Button
                                                                            label="Remove"
                                                                            btnClass="primary"
                                                                            size="small"
                                                                            onClick={(
                                                                                e
                                                                            ) =>
                                                                                handleModulesRemove(
                                                                                    e,
                                                                                    i
                                                                                )
                                                                            }
                                                                        />
                                                                    </Col>
                                                                </Row>

                                                                <Accordion.Body>
                                                                    <div className="create-ticket">
                                                                        <p className="m-0 question">
                                                                              Question
                                                                              type
                                                                        </p>
                                                                        {/* <SearchDropdown {...questionType} /> */}
                                                                        <input
                                                                            name="qstType"
                                                                            type="text"
                                                                            id="qstType"
                                                                            placeholder="qstType"
                                                                            value={
                                                                                val.qstType
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                handleModulesChange(
                                                                                    e,
                                                                                    i
                                                                                )
                                                                            }
                                                                        />
                                                                    </div>
                                                                    <div className="create-ticket my-5">
                                                                        <p className="m-0 question">
                                                                              Question
                                                                        </p>
                                                                        <input
                                                                            name="qst"
                                                                            type="text"
                                                                            id="qst"
                                                                            placeholder="qst"
                                                                            value={
                                                                                val.qst
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                handleModulesChange(
                                                                                    e,
                                                                                    i
                                                                                )
                                                                            }
                                                                        />
                                                                    </div>
                                                                    <div className="create-ticket ">
                                                                        <p className="m-0 question">
                                                                              Choice
                                                                              1
                                                                        </p>
                                                                        <input
                                                                            name="ans"
                                                                            type="text"
                                                                            id="ans"
                                                                            placeholder="ans"
                                                                            value={
                                                                                val.ans
                                                                            }
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                handleModulesChange(
                                                                                    e,
                                                                                    i
                                                                                )
                                                                            }
                                                                        />
                                                                    </div>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Accordion>
                                                    </div>
                                                </Col>
                                            ))
                                            : null}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Form>
            </div>
        </Layout>
    );
};

export default withRouter(AddCoursesDetails);

// const mapStateToProps = ({ adminCourses }) => {
//   const { successMessage } = adminCourses;
//   return { successMessage };
// };

// export default connect(mapStateToProps, {
//   adminCoursesAddAction: adminCoursesCreate,
// })(AdminAddCourses);
