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
import { Button } from '../../../stories/Button';
import { TextArea } from '../../../stories/TextArea/TextArea';

import Layout from '../../Layout';
// import MRQQuestions from './MRQQuestions';
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

const IdeasPageNew = () => {
    const { challengeQuestions } = useSelector(
        (state) => state?.studentRegistration
    );
    const [answerResponses, setAnswerResponses] = useState([]);
    const submittedResponse = useSelector(
        (state) =>
            state?.studentRegistration?.challengesSubmittedResponse[0]?.response
    );
    const language = useSelector(
        (state) => state?.studentRegistration?.studentLanguage
    );
    const currentUser = getCurrentUser('current_user');
    const dispatch = useDispatch();

    const prePopulatingData = (answers) => {
        if (answers) {
            const data = Object.entries(answers);
            const answerFormat = data.map((item) => {
                return {
                    challenge_question_id: item[0],
                    selected_option: item[1].selected_option
                };
            });
            return answerFormat;
        }
    };
    const filterAnswer = (questionId) => {
        const data =
            answerResponses &&
            answerResponses.length > 0 &&
            answerResponses.filter(
                (item) => item.challenge_question_id == questionId
            );
        return data && data[0].selected_option;
    };
    useEffect(() => {
        dispatch(getStudentChallengeQuestions(language));
    }, [language, dispatch]);
    useEffect(() => {
        setAnswerResponses(prePopulatingData(submittedResponse));
    }, []);

    useEffect(() => {
        dispatch(
            getStudentChallengeSubmittedResponse(
                currentUser?.data[0]?.team_id,
                language
            )
        );
    }, [language, dispatch, currentUser?.data[0]?.team_id]);

    const handleChange = (e) => {
        let newItems = [...answerResponses];
        let obj = {
            challenge_question_id: e.target.name,
            selected_option:
                e.target.type === 'checkbox' ? [e.target.value] : e.target.value
        };
        const findExistanceIndex = newItems.findIndex(
            (item) =>
                parseInt(item?.challenge_question_id) ===
                parseInt(e.target.name)
        );
        if (findExistanceIndex === -1) {
            newItems.push(obj);
        } else {
            let temp = newItems[findExistanceIndex];
            if (e.target.type === 'checkbox') {
                let options = [...temp.selected_option];
                let indexOfCheckedAnswers = options.indexOf(e.target.value);
                if (e.target.checked && indexOfCheckedAnswers === -1) {
                    options.push(e.target.value);
                } else {
                    options.splice(indexOfCheckedAnswers, 1);
                }
                newItems[findExistanceIndex] = {
                    ...temp,
                    selected_option: options
                };
            } else {
                newItems[findExistanceIndex] = {
                    ...temp,
                    selected_option: e.target.value
                };
            }
        }
        setAnswerResponses(newItems);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        let responses = answerResponses.map((eachValues) => {
            return {
                challenge_question_id: eachValues.challenge_question_id,
                selected_option: eachValues.selected_option
            };
        });
        let submitData = {
            responses
        };
        await axios
            .post(
                `${URL.submitChallengeResponse}?team_id=${currentUser?.data[0]?.team_id}`,
                submitData,
                axiosConfig
            )
            .then((challengeStatus) => {
                if (challengeStatus?.status == 200) {
                    openNotificationWithIcon(
                        'success',
                        'Challenges has been submitted successfully..!!',
                        ''
                    );
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
    };
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
                                                                <>
                                                                    {eachQuestion.type ===
                                                                        'TEXT' && (
                                                                        <FormGroup
                                                                            check
                                                                            className=" answers"
                                                                        >
                                                                            <Label
                                                                                check
                                                                                style={{
                                                                                    width: '100%'
                                                                                }}
                                                                            >
                                                                                <TextArea
                                                                                    name={`${eachQuestion.challenge_question_id}`}
                                                                                    value={filterAnswer(
                                                                                        eachQuestion.challenge_question_id
                                                                                    )}
                                                                                    onChange={(
                                                                                        e
                                                                                    ) =>
                                                                                        handleChange(
                                                                                            e
                                                                                        )
                                                                                    }
                                                                                />
                                                                            </Label>
                                                                        </FormGroup>
                                                                    )}
                                                                    {eachQuestion.type ===
                                                                        'DRAW' && (
                                                                        <FormGroup
                                                                            check
                                                                            className="mx-5 answers"
                                                                        >
                                                                            <Label
                                                                                check
                                                                            >
                                                                                <Input
                                                                                    type="file"
                                                                                    name={`${eachQuestion.challenge_question_id}`}
                                                                                    // value={`${eachQuestion.challenge_question_id} -- ${""}`}
                                                                                />
                                                                            </Label>
                                                                        </FormGroup>
                                                                    )}
                                                                    {eachQuestion.type ===
                                                                        'MRQ' && (
                                                                        <>
                                                                            <FormGroup
                                                                                check
                                                                                className="mx-5"
                                                                            >
                                                                                <Label
                                                                                    check
                                                                                    style={{
                                                                                        fontSize:
                                                                                            '1.4rem'
                                                                                    }}
                                                                                >
                                                                                    <Input
                                                                                        type="radio"
                                                                                        name={`${eachQuestion.challenge_question_id}`}
                                                                                        id="radioOption1"
                                                                                        onChange={(
                                                                                            e
                                                                                        ) =>
                                                                                            handleChange(
                                                                                                e
                                                                                            )
                                                                                        }
                                                                                        value={`${eachQuestion.option_a}`}
                                                                                    />
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
                                                                                    style={{
                                                                                        fontSize:
                                                                                            '1.4rem'
                                                                                    }}
                                                                                >
                                                                                    <Input
                                                                                        type="radio"
                                                                                        name={`${eachQuestion.challenge_question_id}`}
                                                                                        id="radioOption2"
                                                                                        onChange={(
                                                                                            e
                                                                                        ) =>
                                                                                            handleChange(
                                                                                                e
                                                                                            )
                                                                                        }
                                                                                        value={`${eachQuestion.option_b}`}
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
                                                                                    style={{
                                                                                        fontSize:
                                                                                            '1.4rem'
                                                                                    }}
                                                                                >
                                                                                    <Input
                                                                                        type="radio"
                                                                                        onChange={(
                                                                                            e
                                                                                        ) =>
                                                                                            handleChange(
                                                                                                e
                                                                                            )
                                                                                        }
                                                                                        name={`${eachQuestion.challenge_question_id}`}
                                                                                        id="radioOption3"
                                                                                        value={`${eachQuestion.option_c}`}
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
                                                                                    style={{
                                                                                        fontSize:
                                                                                            '1.4rem'
                                                                                    }}
                                                                                >
                                                                                    <Input
                                                                                        type="radio"
                                                                                        onChange={(
                                                                                            e
                                                                                        ) =>
                                                                                            handleChange(
                                                                                                e
                                                                                            )
                                                                                        }
                                                                                        name={`${eachQuestion.challenge_question_id}`}
                                                                                        id="radioOption4"
                                                                                        value={`${eachQuestion.option_d}`}
                                                                                    />{' '}
                                                                                    {
                                                                                        eachQuestion.option_d
                                                                                    }
                                                                                </Label>
                                                                            </FormGroup>
                                                                        </>
                                                                    )}
                                                                    {eachQuestion.type ===
                                                                        'MCQ' && (
                                                                        <>
                                                                            <FormGroup
                                                                                check
                                                                                className="mx-5"
                                                                            >
                                                                                <Label
                                                                                    check
                                                                                    style={{
                                                                                        fontSize:
                                                                                            '1.4rem'
                                                                                    }}
                                                                                >
                                                                                    <Input
                                                                                        type="checkbox"
                                                                                        name={`${eachQuestion.challenge_question_id}`}
                                                                                        checked={
                                                                                            filterAnswer(
                                                                                                eachQuestion.challenge_question_id
                                                                                            ) &&
                                                                                            filterAnswer(
                                                                                                eachQuestion.challenge_question_id
                                                                                            ).includes(
                                                                                                eachQuestion.option_a
                                                                                            )
                                                                                        }
                                                                                        id={
                                                                                            eachQuestion.option_a
                                                                                        }
                                                                                        onChange={(
                                                                                            e
                                                                                        ) =>
                                                                                            handleChange(
                                                                                                e
                                                                                            )
                                                                                        }
                                                                                        value={`${eachQuestion.option_a}`}
                                                                                    />
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
                                                                                    style={{
                                                                                        fontSize:
                                                                                            '1.4rem'
                                                                                    }}
                                                                                >
                                                                                    <Input
                                                                                        type="checkbox"
                                                                                        name={`${eachQuestion.challenge_question_id}`}
                                                                                        checked={
                                                                                            filterAnswer(
                                                                                                eachQuestion.challenge_question_id
                                                                                            ) &&
                                                                                            filterAnswer(
                                                                                                eachQuestion.challenge_question_id
                                                                                            ).includes(
                                                                                                eachQuestion.option_b
                                                                                            )
                                                                                        }
                                                                                        id={
                                                                                            eachQuestion.option_b
                                                                                        }
                                                                                        onChange={(
                                                                                            e
                                                                                        ) =>
                                                                                            handleChange(
                                                                                                e
                                                                                            )
                                                                                        }
                                                                                        value={`${eachQuestion.option_b}`}
                                                                                    />
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
                                                                                    style={{
                                                                                        fontSize:
                                                                                            '1.4rem'
                                                                                    }}
                                                                                >
                                                                                    <Input
                                                                                        type="checkbox"
                                                                                        name={`${eachQuestion.challenge_question_id}`}
                                                                                        checked={
                                                                                            filterAnswer(
                                                                                                eachQuestion.challenge_question_id
                                                                                            ) &&
                                                                                            filterAnswer(
                                                                                                eachQuestion.challenge_question_id
                                                                                            ).includes(
                                                                                                eachQuestion.option_c
                                                                                            )
                                                                                        }
                                                                                        id={
                                                                                            eachQuestion.option_c
                                                                                        }
                                                                                        onChange={(
                                                                                            e
                                                                                        ) =>
                                                                                            handleChange(
                                                                                                e
                                                                                            )
                                                                                        }
                                                                                        value={`${eachQuestion.option_c}`}
                                                                                    />
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
                                                                                    style={{
                                                                                        fontSize:
                                                                                            '1.4rem'
                                                                                    }}
                                                                                >
                                                                                    <Input
                                                                                        type="checkbox"
                                                                                        name={`${eachQuestion.challenge_question_id}`}
                                                                                        checked={
                                                                                            filterAnswer(
                                                                                                eachQuestion.challenge_question_id
                                                                                            ) &&
                                                                                            filterAnswer(
                                                                                                eachQuestion.challenge_question_id
                                                                                            ).includes(
                                                                                                eachQuestion.option_d
                                                                                            )
                                                                                        }
                                                                                        id={
                                                                                            eachQuestion.option_d
                                                                                        }
                                                                                        onChange={(
                                                                                            e
                                                                                        ) =>
                                                                                            handleChange(
                                                                                                e
                                                                                            )
                                                                                        }
                                                                                        value={`${eachQuestion.option_d}`}
                                                                                    />
                                                                                    {
                                                                                        eachQuestion.option_d
                                                                                    }
                                                                                </Label>
                                                                            </FormGroup>
                                                                        </>
                                                                    )}

                                                                    <hr />
                                                                </>
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
                                                disabled={
                                                    answerResponses &&
                                                    answerResponses.length === 0
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

export default IdeasPageNew;
