import React, { useEffect, useState } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Form,
    FormGroup
} from 'reactstrap';
import { Button } from '../../../stories/Button';
// import { useFormik } from 'formik';
import Layout from '../../Layout';
// import MRQQuestions from './MRQQuestions';
import { useSelector } from 'react-redux';
import {
    getStudentChallengeQuestions,
    getStudentChallengeSubmittedResponse
} from '../../../redux/studentRegistration/actions';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../../../helpers/Utils';
// import {
//     getNormalHeaders,
//     openNotificationWithIcon
// } from '../../../helpers/Utils';
// import axios from 'axios';
// import { KEY, URL } from '../../../constants/defaultValues';
import MRQQuestionsCopy from './MRQQuestionsCopy';

const IdeasPage = () => {
    const { challengeQuestions } = useSelector(
        (state) => state?.studentRegistration
    );
    // const [individualResponse, setIndividualResponse] = useState({});
    const [answerResponses, setAnswerResponses] = useState([{challenge_question_id:"",selected_option:""}]);
    // const submittedResponse = useSelector(
    //     (state) =>
    //         state?.studentRegistration?.challengesSubmittedResponse[0]?.response
    // );
    const language = useSelector(
        (state) => state?.studentRegistration?.studentLanguage
    );
    const currentUser = getCurrentUser('current_user');
    const dispatch = useDispatch();
    // const filterAnswer = (data, question) => {
    //     if (data) {
    //         const filterData = Object.entries(submittedResponse).filter(
    //             (eachValues) =>
    //                 parseInt(eachValues[0]) === question.challenge_question_id
    //         );
    //         if (filterData.length > 0) {
    //             return {
    //                 challenge_question_id: filterData[0][0],
    //                 selected_option: filterData[0][1]?.selected_option
    //             };
    //         }
    //         return null;
    //     }
    //     return null;
    // };
    useEffect(() => {
        dispatch(getStudentChallengeQuestions(language));
    }, [language, dispatch]);

    useEffect(() => {
        dispatch(
            getStudentChallengeSubmittedResponse(
                currentUser?.data[0]?.team_id,
                language
            )
        );
    }, [language, dispatch, currentUser?.data[0]?.team_id]);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('called');
    };
    console.log(answerResponses);

    return (
        <Layout>
            <Container className="presuervey mb-50 mt-5 ">
                <Col>
                    <Row className=" justify-content-center">
                        <Card className="aside  mb-5 p-4">
                            <CardBody>
                                {challengeQuestions.length > 0 && (
                                    <Form
                                        className="form-row row mb-5 mt-3 py-5"
                                        onSubmit={handleSubmit}
                                        isSubmitting
                                    >
                                        {challengeQuestions.map(
                                            (eachQuestion, i) => (
                                                <>
                                                    <Row key={i}>
                                                        <div className="question quiz mb-0">
                                                            <b
                                                                style={{
                                                                    fontSize:
                                                                        '1.6rem'
                                                                }}
                                                            >
                                                                {i + 1}.{' '}
                                                                {
                                                                    eachQuestion.question
                                                                }
                                                            </b>
                                                        </div>
                                                        <div>
                                                            {eachQuestion?.description && (
                                                                <p
                                                                    className="text-muted ms-5"
                                                                    style={{
                                                                        fontSize:
                                                                            '1.4rem'
                                                                    }}
                                                                >
                                                                    {
                                                                        eachQuestion.description
                                                                    }
                                                                </p>
                                                            )}
                                                        </div>
                                                        <div className="answers">
                                                            <FormGroup
                                                                tag="fieldset"
                                                                className="w-100 challenges-fs"
                                                                id="radioGroup1"
                                                                label="One of these please"
                                                            >
                                                                <MRQQuestionsCopy
                                                                    key={i + 1}
                                                                    setAnswerResponses={
                                                                        setAnswerResponses
                                                                    }
                                                                    answerResponses={answerResponses}
                                                                    eachQuestion={
                                                                        eachQuestion
                                                                    }
                                                                    // answer={() =>
                                                                    //     filterAnswer(
                                                                    //         submittedResponse,
                                                                    //         eachQuestion
                                                                    //     )
                                                                    // }
                                                                />
                                                            </FormGroup>
                                                        </div>
                                                    </Row>
                                                </>
                                            )
                                        )}

                                        <div className="text-right">
                                            <Button
                                                type="submit"
                                                btnClass="primary"
                                                // disabled={
                                                //     !(
                                                //         formik.dirty &&
                                                //         formik.isValid
                                                //     )
                                                // }
                                                size="small"
                                                label="Submit"
                                            />
                                        </div>
                                    </Form>
                                )}
                            </CardBody>
                        </Card>
                    </Row>
                </Col>
            </Container>
        </Layout>
    );
};

export default IdeasPage;
