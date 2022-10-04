import React, { useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, Form } from 'reactstrap';
import { Button } from '../../../stories/Button';
import { useFormik } from 'formik';
import Layout from '../../Layout';
import MRQQuestions from './MRQQuestions';
import { useSelector } from 'react-redux';
import {
    getStudentChallengeQuestions,
    getStudentChallengeSubmittedResponse
} from '../../../redux/studentRegistration/actions';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../../../helpers/Utils';
import {
    getNormalHeaders,
    openNotificationWithIcon
} from '../../../helpers/Utils';
import axios from 'axios';
import { KEY, URL } from '../../../constants/defaultValues';

const IdeasPage = () => {
    const { challengeQuestions } = useSelector(
        (state) => state?.studentRegistration
    );
    const submittedResponse = useSelector(
        (state) =>
            state?.studentRegistration?.challengesSubmittedResponse[0]?.response
    );
    const language = useSelector(
        (state) => state?.studentRegistration?.studentLanguage
    );
    const currentUser = getCurrentUser('current_user');
    // const [responseValue, setResponseValue] = useState('');
    const dispatch = useDispatch();
    const filterAnswer = (data, question) => {
        if (data) {
            const filterData = Object.entries(submittedResponse).filter(
                (eachValues) =>
                    parseInt(eachValues[0]) === question.challenge_question_id
            );
            if (filterData.length > 0) {
                return {
                    challenge_question_id: filterData[0][0],
                    selected_option: filterData[0][1]?.selected_option
                };
            }
            return null;
        }
        return null;
    };
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
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {},
        onSubmit: async (values) => {
            const axiosConfig = getNormalHeaders(KEY.User_API_Key);
            let responses = Object.entries(values).map((eachValues) => {
                return {
                    challenge_question_id: eachValues[0],
                    selected_option: eachValues[1]
                };
            });
            let submitData = {
                responses
            };
            return await axios
                .post(
                    `${URL.submitChallengeResponse}?team_id=${currentUser?.data[0]?.team_id}`,
                    JSON.stringify(submitData, null, 2),
                    axiosConfig
                )
                .then((challengeStatus) => {
                    if (challengeStatus?.status == 200) {
                        openNotificationWithIcon(
                            'success',
                            'Challenges has been submitted successfully..!!',
                            ''
                        );
                        formik.resetForm();
                        setTimeout(() => {
                            dispatch(
                                getStudentChallengeSubmittedResponse(
                                    currentUser?.data[0]?.team_id,
                                    language
                                )
                            );
                        }, 500);
                    }
                })
                .catch((err) => {
                    return err.response;
                });
        }
    });

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
                                        onSubmit={formik.handleSubmit}
                                        isSubmitting
                                    >
                                        {challengeQuestions.map(
                                            (eachQuestion, i) => (
                                                <MRQQuestions
                                                    key={i + 1}
                                                    formik={formik}
                                                    i={i}
                                                    eachQuestion={eachQuestion}
                                                    answer={() =>
                                                        filterAnswer(
                                                            submittedResponse,
                                                            eachQuestion
                                                        )
                                                    }
                                                />
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
                            </CardBody>
                        </Card>
                    </Row>
                </Col>
            </Container>
        </Layout>
    );
};

export default IdeasPage;
