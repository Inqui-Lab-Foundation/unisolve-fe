import { Row, FormGroup, Input, Label } from 'reactstrap';

const MRQQuestions = ({ formik, i, eachQuestion }) => {
    return (
        <Row key={i}>
            <div className="question quiz">
                <b>
                    {i + 1}. {eachQuestion.question}
                </b>
            </div>
            <div className="answers">
                <FormGroup
                    tag="fieldset"
                    className="w-100"
                    id="radioGroup1"
                    label="One of these please"
                    value={formik.values.radioGroup1}
                    error={formik.errors.radioGroup1}
                    touched={formik.touched.radioGroup1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                    {eachQuestion.type === "TEXT" && 
                        <FormGroup check className="mx-5 answers">
                            <Label check>
                                <Input
                                    type="text"
                                    name={`radioGroup${i}`}
                                    // value={`${eachQuestion.quiz_survey_question_id} -- ${""}`}
                                />
                            </Label>
                        </FormGroup>
                    }
                    {eachQuestion.type === "DRAW" && 
                        <FormGroup check className="mx-5 answers">
                            <Label check>
                                <Input
                                    type="file"
                                    name={`radioGroup${i}`}
                                    // value={`${eachQuestion.quiz_survey_question_id} -- ${""}`}
                                />
                            </Label>
                        </FormGroup>
                    }
                    {eachQuestion.type === "MRQ" && 
                        <>
                            <FormGroup check className="mx-5">
                                <Label check>
                                    <Input
                                        type="radio"
                                        name={`radioGroup${i}`}
                                        id="radioOption1"
                                        value={`${eachQuestion.quiz_survey_question_id} -- ${eachQuestion.option_a}`}
                                    />{' '}
                                    {eachQuestion.option_a}
                                </Label>
                            </FormGroup>
                            <FormGroup check className="mx-5">
                                <Label check>
                                    <Input
                                        type="radio"
                                        name={`radioGroup${i}`}
                                        id="radioOption2"
                                        value={`${eachQuestion.quiz_survey_question_id} -- ${eachQuestion.option_b}`}
                                    />{' '}
                                    {eachQuestion.option_b}
                                </Label>
                            </FormGroup>
                            <FormGroup check className="mx-5">
                                <Label check>
                                    <Input
                                        type="radio"
                                        name={`radioGroup${i}`}
                                        id="radioOption3"
                                        value={`${eachQuestion.quiz_survey_question_id} -- ${eachQuestion.option_c}`}
                                    />{' '}
                                    {eachQuestion.option_c}
                                </Label>
                            </FormGroup>

                            <FormGroup check className="mx-5">
                                <Label check>
                                    <Input
                                        type="radio"
                                        name={`radioGroup${i}`}
                                        id="radioOption4"
                                        value={`${eachQuestion.quiz_survey_question_id} -- ${eachQuestion.option_d}`}
                                    />{' '}
                                    {eachQuestion.option_d}
                                </Label>
                            </FormGroup>    
                        </>
                    }
                    
                    <hr />
                </FormGroup>
            </div>
        </Row>
    );
};

export default MRQQuestions;
