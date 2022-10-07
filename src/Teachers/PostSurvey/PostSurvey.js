import React, { useEffect, useState } from 'react';
import "./style.scss";
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

import { getLanguage } from '../../constants/languageOptions';
import { useSelector } from 'react-redux';
import { UncontrolledAlert } from 'reactstrap';

const PostSurvey = () => {
    const [postSurveyList, setPostSurveyList] = useState([]);
    const [quizSurveyId, setQuizSurveyId] = useState(0);
    const [count, setCount] = useState(0);
    const [postSurveyStatus, setPostSurveyStatus] = useState('COMPLETED');
    const language = useSelector(state=>state?.mentors.mentorLanguage);

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
            if(postSurveyList.length != submitData.responses.length){
                openNotificationWithIcon(
                    'warning',
                    'Please Attempt All Questions..!!',
                    ''
                );
            }else{
                return await axios
                    .post(
                        `${URL.getPostSurveyList}/${quizSurveyId}/responses?${getLanguage(language)}`,
                        JSON.stringify(submitData, null, 2),
                        axiosConfig
                    )
                    .then((preSurveyRes) => {
                        if (preSurveyRes?.status == 200) {
                            openNotificationWithIcon(
                                'success',
                                'PostSurvey is been submitted successfully..!!',
                                ''
                            );
                            setCount(count + 1);

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
        let axiosConfig = getNormalHeaders(KEY.User_API_Key);
        const lang = getLanguage(language);
        const final =  lang.split('=');
        axiosConfig['params'] = {
            role:"MENTOR",
            local: final[1]
        };
        axios
            .get(`${URL.getPostSurveyList}?${getLanguage(language)}`, axiosConfig)
            .then((postSurveyRes) => {
                if (postSurveyRes?.status == 200) {
                    setQuizSurveyId(
                        postSurveyRes.data.data[0].dataValues[1].quiz_survey_id
                    );
                    setPostSurveyStatus(
                        postSurveyRes.data.data[0].dataValues[1].progress
                    );
                    let allQuestions = postSurveyRes.data.data[0].dataValues[1];
                    setPostSurveyList(allQuestions.quiz_survey_questions);
                }
            })
            .catch((err) => {
                return err.response;
            });
    }, [language, count]);

    return (
        <Layout>
            <Container className="presuervey mb-50 mt-5 ">
                <Col>
                    <Row className=" justify-content-center">
                        <div className="aside  p-4 bg-transparent">
                            {postSurveyStatus != 'COMPLETED' &&
                            <UncontrolledAlert color="danger" className='mb-5'>
                            Please complete the following post survey before you start teacher journey. You can enable other modules one  you are done.
                            </UncontrolledAlert> }
                            <h2>Post Survey</h2>
                            <CardBody>
                                {postSurveyStatus != 'COMPLETED' && (
                                    <Form
                                        className="form-row"
                                        onSubmit={formik.handleSubmit}
                                        isSubmitting
                                    >
                                        {postSurveyList.map(
                                            (eachQuestion, i) => (
                                                <Row key={i}>
                                                    <Card className="card mb-4 my-3 comment-card px-0 px-5 py-3">
                                                        <div className="question quiz mb-0">
                                                            <h6>
                                                                {i + 1}.{' '}
                                                                {
                                                                    eachQuestion.question
                                                                }
                                                            </h6>
                                                        </div>
                                                        <div className="answers">
                                                            <FormGroup
                                                                tag="fieldset"
                                                                className="w-100"
                                                                id="radioGroup1"
                                                                label="One of these please"
                                                                value={
                                                                    formik.values
                                                                        .radioGroup1
                                                                }
                                                                error={
                                                                    formik.errors
                                                                        .radioGroup1
                                                                }
                                                                touched={
                                                                    formik.touched
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
                                                                    <Label check>
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
                                                                    <Label check>
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
                                                                    <Label check>
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
                                                                    <Label check>
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

                                                                {/* <hr /> */}
                                                            </FormGroup>
                                                        
                                                        </div>
                                                    </Card>
                                                </Row>
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

                                {postSurveyStatus == 'COMPLETED' && (
                                    <div style={{ textAlign: 'center' }}>
                                        <div>
                                            <img src={Congo}></img>
                                        </div>
                                        <div>
                                            <h2>
                                                Post Survery is been
                                                submitted
                                            </h2>
                                        </div>
                                    </div>
                                )}
                            </CardBody>
                        </div>
                    </Row>
                </Col>
            </Container>
        </Layout>
    );
};

export default PostSurvey;
