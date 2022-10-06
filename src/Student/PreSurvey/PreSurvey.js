import React, { useEffect, useState } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';
import { Button } from '../../stories/Button';
import { useFormik } from 'formik';
// import * as Yup from 'yup';
import Layout from '../Layout';
import { URL, KEY } from '../../constants/defaultValues';
import {
    getNormalHeaders,
    openNotificationWithIcon
} from '../../helpers/Utils';
import axios from 'axios';
import Congo from '../../assets/media/img/congo.svg';
import { useHistory } from 'react-router-dom';
import { getLanguage } from '../../constants/languageOptions';
import { useSelector } from 'react-redux';
import getStart from '../../assets/media/getStart.png';

const PreSurvey = () => {
    const [preSurveyList, setPreSurveyList] = useState([]);
    const [quizSurveyId, setQuizSurveyId] = useState(0);
    const [preSurveyStatus, setPreSurveyStatus] = useState('COMPLETED');
    const history = useHistory();
    const language = useSelector(
        (state) => state?.studentRegistration?.studentLanguage
    );
    const [show, setShow] = useState(false);

    const formik = useFormik({
        initialValues: {},
        onSubmit: async (values) => {
            const axiosConfig = getNormalHeaders(KEY.User_API_Key);
            let responsesData = Object.keys(values).map((eachValues) => {
                let selected = values[eachValues].split(' -- ');
                return {
                    quiz_survey_question_id: selected[0],
                    selected_option: selected[1]
                };
            });

            let submitData = {
                responses: responsesData
            };
            if (preSurveyList.length != submitData.responses.length) {
                openNotificationWithIcon(
                    'warning',
                    'Please Attempt All Questions..!!',
                    ''
                );
            } else {
                return await axios
                    .post(
                        `${
                            URL.getPreSurveyList
                        }/${quizSurveyId}/responses?${getLanguage(language)}`,
                        JSON.stringify(submitData, null, 2),
                        axiosConfig
                    )
                    .then((preSurveyRes) => {
                        if (preSurveyRes?.status == 200) {
                            openNotificationWithIcon(
                                'success',
                                'Presurvey has been submitted successfully',
                                ''
                            );
                            setTimeout(() => {
                                history.push('/dashboard');
                            }, 500);

                            formik.resetForm();
                        }
                    })
                    .catch((err) => {
                        return err.response;
                    });
            }
        }
    });
    useEffect(() => {
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        axios
            .get(
                `${URL.getPreSurveyList}?role=STUDENT?${getLanguage(language)}`,
                axiosConfig
            )
            .then((preSurveyRes) => {
                if (preSurveyRes?.status == 200) {
                    console.log(
                        '🚀 ~ file: PreSurvey.js ~ line 76 ~ .then ~ preSurveyRes',
                        preSurveyRes
                    );
                    setQuizSurveyId(
                        preSurveyRes.data.data[0].dataValues[0].quiz_survey_id
                    );
                    setPreSurveyStatus(
                        preSurveyRes.data.data[0].dataValues[0].progress
                    );
                    let allQuestions = preSurveyRes.data.data[0].dataValues[0];
                    setPreSurveyList(allQuestions.quiz_survey_questions);
                }
            })
            .catch((err) => {
                return err.response;
            });
    }, [language]);

    const handleStart = () => {
        setShow(true);
    };

    return (
        <Layout>
            <Container className="presuervey mb-50 mt-5 ">
                <Col>
                    <Row className=" justify-content-center">
                        <Card className="aside  mb-5 p-4">
                            {!show && preSurveyStatus != 'COMPLETED' ? (
                                <CardBody>
                                    <Row>
                                        <Col md={4}>
                                            <figure>
                                                <img
                                                    src={getStart}
                                                    className="img-fluid"
                                                    alt="get started"
                                                />
                                            </figure>
                                        </Col>
                                        <Col md={8}>
                                            <h2>Welcome Students!</h2>
                                            <p>
                                                We are glad that you have
                                                signed-up to this program and
                                                joined us in this exciting
                                                journey of nurturing an
                                                experience of learning, skilling
                                                and innovation for the young
                                                people. As you are aware you
                                                will be playing a role of guide
                                                and mentor for the participants
                                                in their learning journey.
                                            </p>
                                            <p>
                                                This portal gives you an
                                                experience of learning modules
                                                and important resources for
                                                supporting the participants. You
                                                can also register and track
                                                progress of your teams using the
                                                dashboard.{' '}
                                            </p>
                                            <p>
                                                Your journey as a student will
                                                involve the following key
                                                milestones:
                                            </p>
                                            <ul>
                                                <li>Step-1: Take Pre-Survey</li>
                                                <li>
                                                    Step-2: Complete the course
                                                    and reading material
                                                </li>
                                                <li>
                                                    Step-3: Register the teams
                                                </li>
                                                <li>
                                                    Step-4: Support the
                                                    participants in completing
                                                    the learning journey.
                                                </li>
                                                <li>
                                                    Step-5: Support the
                                                    participants in
                                                    challenge/idea submission.
                                                </li>
                                                <li>
                                                    Step-6: Complete the post
                                                    survey
                                                </li>
                                            </ul>
                                            <p>
                                                We hope you and your teams will
                                                have a great learning experience
                                                and wish you all the best for
                                                this program!{' '}
                                            </p>
                                            <Button
                                                label="START JOURNEY"
                                                btnClass="primary my-3"
                                                size="small"
                                                onClick={handleStart}
                                            />
                                        </Col>
                                    </Row>
                                </CardBody>
                            ) : (
                                <CardBody>
                                    {preSurveyStatus != 'COMPLETED' && (
                                        <Form
                                            className="form-row row mb-5 mt-3 py-5"
                                            onSubmit={formik.handleSubmit}
                                            isSubmitting
                                        >
                                            {preSurveyList.map(
                                                (eachQuestion, i) => {
                                                    return (
                                                        <Row key={i}>
                                                            <div className="question quiz">
                                                                <b>
                                                                    {i + 1}.{' '}
                                                                    {
                                                                        eachQuestion.question
                                                                    }
                                                                </b>
                                                            </div>
                                                            <div className="answers">
                                                                <FormGroup
                                                                    tag="fieldset"
                                                                    className="w-100"
                                                                    id="radioGroup1"
                                                                    label="One of these please"
                                                                    value={
                                                                        formik
                                                                            .values
                                                                            .radioGroup1
                                                                    }
                                                                    error={
                                                                        formik
                                                                            .errors
                                                                            .radioGroup1
                                                                    }
                                                                    touched={
                                                                        formik
                                                                            .touched
                                                                            .radioGroup1
                                                                    }
                                                                    onChange={
                                                                        formik.handleChange
                                                                    }
                                                                    onBlur={
                                                                        formik.handleBlur
                                                                    }
                                                                >
                                                                    <FormGroup
                                                                        check
                                                                        className="mx-5"
                                                                    >
                                                                        <Label
                                                                            check
                                                                        >
                                                                            <Input
                                                                                type="radio"
                                                                                name={`radioGroup${i}`}
                                                                                id="radioOption1"
                                                                                value={`${eachQuestion.quiz_survey_question_id} -- ${eachQuestion.option_a}`}
                                                                            />{' '}
                                                                            {
                                                                                eachQuestion.option_a
                                                                            }
                                                                        </Label>
                                                                    </FormGroup>
                                                                    <FormGroup
                                                                        check
                                                                        className="mx-5"
                                                                    >
                                                                        <Label
                                                                            check
                                                                        >
                                                                            <Input
                                                                                type="radio"
                                                                                name={`radioGroup${i}`}
                                                                                id="radioOption2"
                                                                                value={`${eachQuestion.quiz_survey_question_id} -- ${eachQuestion.option_b}`}
                                                                            />{' '}
                                                                            {
                                                                                eachQuestion.option_b
                                                                            }
                                                                        </Label>
                                                                    </FormGroup>
                                                                    <FormGroup
                                                                        check
                                                                        className="mx-5"
                                                                    >
                                                                        <Label
                                                                            check
                                                                        >
                                                                            <Input
                                                                                type="radio"
                                                                                name={`radioGroup${i}`}
                                                                                id="radioOption3"
                                                                                value={`${eachQuestion.quiz_survey_question_id} -- ${eachQuestion.option_c}`}
                                                                            />{' '}
                                                                            {
                                                                                eachQuestion.option_c
                                                                            }
                                                                        </Label>
                                                                    </FormGroup>

                                                                    <FormGroup
                                                                        check
                                                                        className="mx-5"
                                                                    >
                                                                        <Label
                                                                            check
                                                                        >
                                                                            <Input
                                                                                type="radio"
                                                                                name={`radioGroup${i}`}
                                                                                id="radioOption4"
                                                                                value={`${eachQuestion.quiz_survey_question_id} -- ${eachQuestion.option_d}`}
                                                                            />{' '}
                                                                            {
                                                                                eachQuestion.option_d
                                                                            }
                                                                        </Label>
                                                                    </FormGroup>

                                                                    <hr />
                                                                </FormGroup>
                                                            </div>
                                                        </Row>
                                                    );
                                                }
                                            )}

                                            <div className="text-right">
                                                <Button
                                                    type="submit"
                                                    btnClass={
                                                        !(
                                                            formik.dirty &&
                                                            formik.isValid
                                                        )
                                                            ? 'default'
                                                            : 'primary'
                                                    }
                                                    disabled={
                                                        !(
                                                            formik.dirty &&
                                                            formik.isValid
                                                        )
                                                    }
                                                    size="small"
                                                    label="Submit"
                                                />
                                            </div>
                                        </Form>
                                    )}

                                    {preSurveyStatus == 'COMPLETED' && (
                                        <div style={{ textAlign: 'center' }}>
                                            <div>
                                                <img src={Congo}></img>
                                            </div>
                                            <div>
                                                <h2>
                                                    Presurvery has already Been
                                                    submitted
                                                </h2>
                                            </div>
                                        </div>
                                    )}
                                </CardBody>
                            )}
                        </Card>
                    </Row>
                </Col>
            </Container>
        </Layout>
    );
};

export default PreSurvey;
