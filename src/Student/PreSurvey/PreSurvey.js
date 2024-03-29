import React, { useEffect, useState } from 'react';
// import '../PostSurvey/style.scss';
import '../../Teachers/PostSurvey/style.scss';
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
import Congo from '../../assets/media/survey-success.jpg';
import { useHistory } from 'react-router-dom';
import { getLanguage } from '../../constants/languageOptions';
import { useSelector } from 'react-redux';
import getStart from '../../assets/media/getStart.png';
import { useTranslation } from 'react-i18next';

const PreSurvey = () => {
    const { t } = useTranslation();
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
                        <div className="aside  p-4 bg-transparent">
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
                                            <h2>{t('get_started.heading')}</h2>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: t(
                                                        'get_started.desc'
                                                    )
                                                }}
                                            ></div>
                                            <Button
                                                label={t('get_started.btn')}
                                                btnClass="primary my-3"
                                                size="small"
                                                onClick={handleStart}
                                            />
                                        </Col>
                                    </Row>
                                </CardBody>
                            ) : (
                                <>
                                    <h2>Pre Survey</h2>
                                    {preSurveyStatus != 'COMPLETED' && (
                                        <Form
                                            className="form-row"
                                            onSubmit={formik.handleSubmit}
                                            isSubmitting
                                        >
                                            {preSurveyList.map(
                                                (eachQuestion, i) => {
                                                    return (
                                                        <Row key={i}>
                                                            <Card className="card mb-4 my-3 comment-card px-0 px-5 py-3">
                                                                <div className="question quiz mb-0">
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

                                                                        
                                                                    </FormGroup>
                                                                </div>
                                                            </Card>
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
                                                <img
                                                    className="img-fluid w-25"
                                                    src={Congo}
                                                ></img>
                                            </div>

                                            <div>
                                                <h2>
                                                    {t(
                                                        'teacher_get_started.pre'
                                                    )}
                                                </h2>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </Row>
                </Col>
            </Container>
        </Layout>
    );
};

export default PreSurvey;
