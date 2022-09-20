/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Row, Col, Card, CardBody, Form } from 'reactstrap';
import './style.scss';

import Layout from '../../Admin/Layout';

import { Accordion } from 'react-bootstrap';
import { Button } from '../../stories/Button';

import { InputBox } from '../../stories/InputBox/InputBox';
import { TextArea } from '../../stories/TextArea/TextArea';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { BreadcrumbTwo } from '../../stories/BreadcrumbTwo/BreadcrumbTwo';
import { useHistory } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { adminCoursesCreate } from '../../redux/actions';

const AdminAddCourses = (props) => {
    const language = useSelector(state=>state?.admin?.adminLanguage);
    const [videoClick, setVideoClick] = useState(false);
    const [moduleClick, setModuleClick] = useState(false);
    // const [error, setError] = useState("");
    const [url, setUrl] = useState('');
    const [image, setImage] = useState();
    const [videosList, setVideosList] = useState([]);
    const [modulesList, setModulesList] = useState([]);

    const history = useHistory();
    const inputCourseTitle = {
        type: 'text',
        placeholder: 'Enter course title here...'
    };
    const inputCourseDescription = {
        type: 'text',
        placeholder: 'Enter course descripion here...'
    };
    var formik = useFormik({
        initialValues: {
            courseTitle: '',
            courseDescription: ''
            // file: "",
        },
        validationSchema: Yup.object({
            courseTitle: Yup.string().required('Required'),
            courseDescription: Yup.string().required('Required')
            // file: Yup.string().required("Required"),
        }),
        onSubmit: (values) => {
            const data = new FormData();
            data.append('title', values.courseTitle);
            data.append('description', values.courseDescription);
            data.append('thumbnail', image);
            props.adminCoursesAddAction(data, history,language);
        }
    });

    const headingDetails = {
        title: 'Add a new course',

        options: [
            {
                title: 'Courses',
                path: '/admin/all-courses'
            },
            {
                title: 'Add New Course',
                path: '/admin/add-course'
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
    const discard = {
        label: 'Discard',
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

    const changeHandler = (event) => {
        // setError("");
        console.log(
            '========event.target.files===',
            event.target.files[0].name
        );
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setUrl(URL.createObjectURL(img));
            setImage(img);
            // formik.values.file = URL.createObjectURL(img);
        }
    };

    const removeSelectedImage = () => {
        setImage();
    };

    console.log(props.successMessage);

    return (
        <Layout>
            <div className="courses-page mt-5 pt-5">
                <Form onSubmit={formik.handleSubmit}>
                    <div className="container">
                        <Row>
                            <Col className="col-xl-10 offset-xl-1 offset-md-0">
                                <Row className="mx-2">
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
                                        xl={12}
                                        className=" order-1 order-xl-2 course-register-block"
                                    >
                                        <Row>
                                            <Col md={12}>
                                                <Card className="w-100  mb-5 p-4">
                                                    <CardBody>
                                                        <div className="create-ticket">
                                                            <p className="m-0 question">
                                                                Course title
                                                            </p>
                                                            <span className="que-text mb-2">
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetur
                                                                adipiscing elit.
                                                            </span>
                                                            <InputBox
                                                                {...inputCourseTitle}
                                                                id="courseTitle"
                                                                name="courseTitle"
                                                                onChange={
                                                                    formik.handleChange
                                                                }
                                                                onBlur={
                                                                    formik.handleBlur
                                                                }
                                                                value={
                                                                    formik
                                                                        .values
                                                                        .courseTitle
                                                                }
                                                            />
                                                        </div>
                                                        <div className="create-ticket my-5">
                                                            <p className="m-0 question">
                                                                Course
                                                                description
                                                            </p>
                                                            <span className="que-text">
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetur
                                                                adipiscing elit.
                                                            </span>
                                                            <TextArea
                                                                {...inputCourseDescription}
                                                                id="courseDescription"
                                                                name="courseDescription"
                                                                onChange={
                                                                    formik.handleChange
                                                                }
                                                                onBlur={
                                                                    formik.handleBlur
                                                                }
                                                                value={
                                                                    formik
                                                                        .values
                                                                        .courseDescription
                                                                }
                                                            />
                                                        </div>

                                                        <div className="create-ticket my-5">
                                                            <p className="m-0 question">
                                                                Course thumbnail
                                                            </p>
                                                            <span className="que-text">
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetur
                                                                adipiscing elit.
                                                            </span>
                                                            {/* <FileComp /> */}
                                                            {/* <PhotoUpload /> */}
                                                            {/* <input
                          type="file"
                          name="Upload"
                          // onChange={this.onImageChange}
                        /> */}
                                                            <div className="wrapper">
                                                                <div className="btnimg">
                                                                    upload
                                                                </div>
                                                                <input
                                                                    type="file"
                                                                    name="file"
                                                                    accept=".png,.jpeg,.jpg"
                                                                    onChange={
                                                                        changeHandler
                                                                    }
                                                                />
                                                            </div>
                                                        </div>

                                                        {image ? (
                                                            <img
                                                                src={`${url}`}
                                                                style={
                                                                    styles.image
                                                                }
                                                                alt="Thumb"
                                                            />
                                                        ) : null}

                                                        {image ? (
                                                            <button
                                                                onClick={
                                                                    removeSelectedImage
                                                                }
                                                                style={
                                                                    styles.delete
                                                                }
                                                            >
                                                                Remove
                                                            </button>
                                                        ) : null}
                                                    </CardBody>
                                                </Card>
                                            </Col>

                                            {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}

                                            {videoClick == true
                                                ? videosList.map(
                                                    (video, index) => (
                                                        <Col
                                                            key={index}
                                                            md={12}
                                                        >
                                                            <h2>
                                                                  Video modules{' '}
                                                            </h2>
                                                            <Card className="w-100  mb-5 p-4">
                                                                <CardBody>
                                                                    <div className="create-ticket">
                                                                        <p className="m-0 question">
                                                                              Video
                                                                              lession
                                                                              title
                                                                        </p>
                                                                        <span className="que-text mb-2">
                                                                              Lorem
                                                                              ipsum
                                                                              dolor
                                                                              sit
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
                                                                            // required
                                                                        />
                                                                        {/* <InputBox
                          {...inputIdeaTitle}
                          id="ideaTitle"
                          name="ideaTitle"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.ideaTitle}
                        /> */}
                                                                    </div>
                                                                    <div className="create-ticket my-5">
                                                                        <p className="m-0 question">
                                                                              Video
                                                                              lesson
                                                                              link
                                                                        </p>
                                                                        <span className="que-text">
                                                                              Lorem
                                                                              ipsum
                                                                              dolor
                                                                              sit
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
                                                                            // required
                                                                        />
                                                                        {/* <InputBox
                          {...inputIdeaTitle}
                          id="ideaTitle"
                          name="ideaTitle"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.ideaTitle}
                        /> */}
                                                                        <Col className="mx-4">
                                                                            <Button
                                                                                // label={`${<BsPlus/>} Add Video Lesson`}
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
                                                        </Col>
                                                    )
                                                )
                                                : null}
                                            {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}

                                            {/* ddddddddddddddddddddddd */}

                                            {moduleClick == true
                                                ? modulesList.map((val, i) => (
                                                    <Col
                                                        md={12}
                                                        className="choice-module"
                                                        key={val.id}
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
                                                                                // label={`${<BsPlus/>} Add Video Lesson`}
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
                                                                            {/* <a onClick={(e) => handleModulesRemove(e, i)}>
                                <BsFillTrashFill className="acc-del" />
                              </a> */}
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
                                                                                // required
                                                                            />
                                                                        </div>
                                                                        <div className="create-ticket my-5">
                                                                            <p className="m-0 question">
                                                                                  Question
                                                                            </p>
                                                                            {/* <TextArea placeholder="What is your question?" /> */}
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
                                                                                // required
                                                                            />
                                                                        </div>
                                                                        <div className="create-ticket ">
                                                                            {/* <div className="create-ticket p-4 choice-ans mb-4"> */}
                                                                            <p className="m-0 question">
                                                                                  Choice
                                                                                  1
                                                                            </p>
                                                                            {/* <Row>
                                <Col md={6}>
                                </Col>
                                <Col md={6} className="text-right">
                                  <BsFillTrashFill />
                                </Col>
                              </Row> */}
                                                                            {/* <TextArea placeholder="Type your answer here" /> */}
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
                                                                                // required
                                                                            />
                                                                        </div>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                            </Accordion>
                                                        </div>
                                                    </Col>
                                                ))
                                                : null}

                                            {/* ddddddddddddddddddddddd */}
                                        </Row>
                                        <Row className="mb-5">
                                            <Col md={6}>
                                                <Button
                                                    {...discard}
                                                    type="submit"
                                                    btnClass="default mx-4"
                                                    onClick={() =>
                                                        props.history.push(
                                                            '/admin/all-courses'
                                                        )
                                                    }
                                                />
                                            </Col>
                                            <Col md={6} className="text-right">
                                                {/* <Button
                    {...saveDraft}
                    type="submit"
                    btnClass="default mx-4"
                  /> */}
                                                {props.successMessage}
                                                <Button
                                                    {...saveBtn}
                                                    btnClass={
                                                        !(
                                                            formik.dirty &&
                                                            formik.isValid
                                                        )
                                                            ? 'default'
                                                            : 'primary'
                                                    }
                                                    type="submit"
                                                    // btnClass="default"
                                                />
                                            </Col>
                                        </Row>
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

// export default withRouter(AdminAddCourses);

const mapStateToProps = ({ adminCourses }) => {
    const { successMessage } = adminCourses;
    return { successMessage };
};

export default connect(mapStateToProps, {
    adminCoursesAddAction: adminCoursesCreate
})(AdminAddCourses);

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50
    },
    preview: {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column'
    },
    image: { maxWidth: '100', maxHeight: 150 },
    delete: {
        maxWidth: 70,
        maxHeight: 30,
        // cursor: "pointer",
        // padding: 15,
        background: 'white'
        // color: "white",
        // border: "none",
    }
};
