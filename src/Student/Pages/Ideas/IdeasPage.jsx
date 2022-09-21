// import React, { useEffect, useState } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Form,
    // FormGroup,
    // Input,
    // Label
} from 'reactstrap';
import { Button } from '../../../stories/Button';
import { useFormik } from 'formik';
// import * as Yup from 'yup';
import Layout from '../../Layout';
import MRQQuestions from './MRQQuestions';
// import { URL, KEY } from '../../../constants/defaultValues';
// import {
//     getNormalHeaders,
//     openNotificationWithIcon
// } from '../../../helpers/Utils';
// import axios from 'axios';
// import Congo from '../../../assets/media/img/congo.svg';
// import { useHistory } from 'react-router-dom';
// import { getLanguage } from '../../../constants/languageOptions';
// import { useSelector } from 'react-redux';

const IdeasPage = () => {
    // const [preSurveyList, setPreSurveyList] = useState([]);
    // const [quizSurveyId, setQuizSurveyId] = useState(0);
    // const [preSurveyStatus, setPreSurveyStatus] = useState('COMPLETED');
    // const history = useHistory();
    // const language = useSelector(state=>state?.studentRegistration?.studentLanguage);

    const formik = useFormik({
        initialValues: {},
        onSubmit: async (values) => {
            // const axiosConfig = getNormalHeaders(KEY.User_API_Key);
            let responsesData = Object.keys(values).map((eachValues) => {
                console.log(eachValues);
                let selected = values[eachValues].split(' -- ');
                console.log(selected);
                return {
                    quiz_survey_question_id: selected[0],
                    selected_option: selected[1]
                };
            });
            console.log(responsesData);
            // let submitData = {
            //     responses: responsesData
            // };
            // console.log(
            //     '🚀 ~ file: PreSurvey.js ~ line 54 ~ onSubmit: ~ submitData',
            //     submitData
            // );

            // return await axios
            //     .post(
            //         `${URL.getPreSurveyList}/${quizSurveyId}/responses?${getLanguage(language)}`,
            //         JSON.stringify(submitData, null, 2),
            //         axiosConfig
            //     )
            //     .then((preSurveyRes) => {
            //         if (preSurveyRes?.status == 200) {
            //             openNotificationWithIcon(
            //                 'success',
            //                 'PreSurvey is been submitted successfully..!!',
            //                 ''
            //             );
            //             setTimeout(() => {
            //                 history.push('/dashboard');
            //             }, 500);

            //             formik.resetForm();
            //         }
            //     })
            //     .catch((err) => {
            //         return err.response;
            //     });
        }
    });
    // useEffect(() => {
    //     const axiosConfig = getNormalHeaders(KEY.User_API_Key);
    //     axios
    //         .get(`${URL.getPreSurveyList}?role=STUDENT?${getLanguage(language)}`, axiosConfig)
    //         .then((preSurveyRes) => {
    //             if (preSurveyRes?.status == 200) {
    //                 console.log(
    //                     '🚀 ~ file: PreSurvey.js ~ line 76 ~ .then ~ preSurveyRes',
    //                     preSurveyRes
    //                 );
    //                 setQuizSurveyId(
    //                     preSurveyRes.data.data[0].dataValues[0].quiz_survey_id
    //                 );
    //                 setPreSurveyStatus(
    //                     preSurveyRes.data.data[0].dataValues[0].progress
    //                 );
    //                 let allQuestions = preSurveyRes.data.data[0].dataValues[0];
    //                 setPreSurveyList(allQuestions.quiz_survey_questions);
    //             }
    //         })
    //         .catch((err) => {
    //             return err.response;
    //         });
    // }, [language]);

    const preSurveyList = [
        {
            quiz_survey_question_id: 16,
            quiz_survey_id: 1,
            question_no: 1,
            question:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi.',
            option_a: 'Pretium viverra suspendisse',
            option_b: 'Pretium viverra suspendisse',
            option_c: 'Pretium viverra suspendisse',
            option_d: 'Pretium viverra suspendisse',
            type: 'TEXT',
            status: 'ACTIVE',
            created_by: 1,
            created_at: null,
            updated_by: 1,
            updated_at: null
        },
        {
            quiz_survey_question_id: 15,
            quiz_survey_id: 1,
            question_no: 1,
            question:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi.',
            option_a: 'Pretium viverra suspendisse',
            option_b: 'Pretium viverra suspendisse',
            option_c: 'Pretium viverra suspendisse',
            option_d: 'Pretium viverra suspendisse',
            type: 'MRQ',
            status: 'ACTIVE',
            created_by: 1,
            created_at: null,
            updated_by: 1,
            updated_at: null
        },
        {
            quiz_survey_question_id: 14,
            quiz_survey_id: 1,
            question_no: 1,
            question:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi.',
            option_a: 'Pretium viverra suspendisse',
            option_b: 'Pretium viverra suspendisse',
            option_c: 'Pretium viverra suspendisse',
            option_d: 'Pretium viverra suspendisse',
            type: 'MRQ',
            status: 'ACTIVE',
            created_by: 1,
            created_at: null,
            updated_by: 1,
            updated_at: null
        },
        {
            quiz_survey_question_id: 13,
            quiz_survey_id: 1,
            question_no: 1,
            question:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi.',
            option_a: 'Pretium viverra suspendisse',
            option_b: 'Pretium viverra suspendisse',
            option_c: 'Pretium viverra suspendisse',
            option_d: 'Pretium viverra suspendisse',
            type: 'MRQ',
            status: 'ACTIVE',
            created_by: 1,
            created_at: null,
            updated_by: 1,
            updated_at: null
        },
        {
            quiz_survey_question_id: 12,
            quiz_survey_id: 1,
            question_no: 1,
            question:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi.',
            option_a: 'Pretium viverra suspendisse',
            option_b: 'Pretium viverra suspendisse',
            option_c: 'Pretium viverra suspendisse',
            option_d: 'Pretium viverra suspendisse',
            type: 'MRQ',
            status: 'ACTIVE',
            created_by: 1,
            created_at: null,
            updated_by: 1,
            updated_at: null
        },
        {
            quiz_survey_question_id: 11,
            quiz_survey_id: 1,
            question_no: 1,
            question:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi.',
            option_a: 'Pretium viverra suspendisse',
            option_b: 'Pretium viverra suspendisse',
            option_c: 'Pretium viverra suspendisse',
            option_d: 'Pretium viverra suspendisse',
            type: 'MRQ',
            status: 'ACTIVE',
            created_by: 1,
            created_at: null,
            updated_by: 1,
            updated_at: null
        },
        {
            quiz_survey_question_id: 10,
            quiz_survey_id: 1,
            question_no: 1,
            question:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi.',
            option_a: 'Pretium viverra suspendisse',
            option_b: 'Pretium viverra suspendisse',
            option_c: 'Pretium viverra suspendisse',
            option_d: 'Pretium viverra suspendisse',
            type: 'MCQ',
            status: 'ACTIVE',
            created_by: 1,
            created_at: null,
            updated_by: 1,
            updated_at: null
        },
        {
            quiz_survey_question_id: 9,
            quiz_survey_id: 1,
            question_no: 1,
            question:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi.',
            option_a: 'Pretium viverra suspendisse',
            option_b: 'Pretium viverra suspendisse',
            option_c: 'Pretium viverra suspendisse',
            option_d: 'Pretium viverra suspendisse',
            type: 'MCQ',
            status: 'ACTIVE',
            created_by: 1,
            created_at: null,
            updated_by: 1,
            updated_at: null
        },
        {
            quiz_survey_question_id: 8,
            quiz_survey_id: 1,
            question_no: 1,
            question:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi.',
            option_a: 'Pretium viverra suspendisse',
            option_b: 'Pretium viverra suspendisse',
            option_c: 'Pretium viverra suspendisse',
            option_d: 'Pretium viverra suspendisse',
            type: 'MCQ',
            status: 'ACTIVE',
            created_by: 1,
            created_at: null,
            updated_by: 1,
            updated_at: null
        },
        {
            quiz_survey_question_id: 7,
            quiz_survey_id: 1,
            question_no: 1,
            question:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi.',
            option_a: 'Pretium viverra suspendisse',
            option_b: 'Pretium viverra suspendisse',
            option_c: 'Pretium viverra suspendisse',
            option_d: 'Pretium viverra suspendisse',
            type: 'MCQ',
            status: 'ACTIVE',
            created_by: 1,
            created_at: null,
            updated_by: 1,
            updated_at: null
        }
    ];

    return (
        <Layout>
            <Container className="presuervey mb-50 mt-5 ">
                <Col>
                    <Row className=" justify-content-center">
                        <Card className="aside  mb-5 p-4">
                            <CardBody>
                                {preSurveyList.length >0 && (
                                    <Form
                                        className="form-row row mb-5 mt-3 py-5"
                                        onSubmit={formik.handleSubmit}
                                        isSubmitting
                                    >
                                        {preSurveyList.map(
                                            (eachQuestion, i) => (
                                                <MRQQuestions key={i+1} formik={formik} i={i} eachQuestion = {eachQuestion} />
                                            )
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

                                {/* {preSurveyStatus == 'COMPLETED' && (
                                    <div style={{ textAlign: 'center' }}>
                                        <div>
                                            <img src={Congo}></img>
                                        </div>
                                        <div>
                                            <h2>
                                                Challenge has been
                                                submitted
                                            </h2>
                                        </div>
                                    </div>
                                )} */}
                            </CardBody>
                        </Card>
                    </Row>
                </Col>
            </Container>
        </Layout>
    );
};

export default IdeasPage;
