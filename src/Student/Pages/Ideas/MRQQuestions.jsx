import { useState } from 'react';
import { Row, FormGroup, Input, Label } from 'reactstrap';
import { TextArea } from '../../../stories/TextArea/TextArea';

const MRQQuestions = ({ formik, i, eachQuestion }) => {
    const [isCheck, setIsCheck] = useState([]);
    const handleClick = (e) => {
        const { name, checked } = e.target;
        setIsCheck([...isCheck, name]);
        if (!checked) {
            setIsCheck(isCheck.filter((item) => item !== name));
        }
    };
    return (
        <Row key={i}>
            <div className="question quiz mb-0"  >
                <b style={{fontSize:"1.6rem"}}>
                    {i + 1}. {eachQuestion.question}
                </b>
            </div>
            <div>
                {eachQuestion?.description && <p className='text-muted ms-5' style={{fontSize:"1.4rem"}}>{eachQuestion.description}</p>}
            </div>
            <div className="answers">
                <FormGroup
                    tag="fieldset"
                    className="w-100 challenges-fs"
                    id="radioGroup1"
                    label="One of these please"
                    value={formik.values.radioGroup1}
                    error={formik.errors.radioGroup1}
                    touched={formik.touched.radioGroup1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                    {eachQuestion.type === "TEXT" && 
                        <FormGroup check className=" answers">
                            <Label check style={{width:"100%"}}>
                                <TextArea
                                    name={`${eachQuestion.challenge_question_id}`}
                                />
                                {/* <Input
                                    type="text"
                                    name={`${eachQuestion.challenge_question_id}`}
                                    // value={`${eachQuestion.challenge_question_id} -- ${""}`}
                                /> */}
                            </Label>
                        </FormGroup>
                    }
                    {eachQuestion.type === "DRAW" && 
                        <FormGroup check className="mx-5 answers">
                            <Label check >
                                <Input
                                    type="file"
                                    name={`${eachQuestion.challenge_question_id}`}
                                    // value={`${eachQuestion.challenge_question_id} -- ${""}`}
                                />
                            </Label>
                        </FormGroup>
                    }
                    {eachQuestion.type === "MRQ" && 
                        <>
                            <FormGroup check className="mx-5">
                                <Label check style={{fontSize:"1.4rem"}}>
                                    <Input
                                        type="radio"
                                        name={`${eachQuestion.challenge_question_id}`}
                                        id="radioOption1"
                                        value={`${eachQuestion.option_a}`}
                                    />{' '}
                                    {eachQuestion.option_a}
                                </Label>
                            </FormGroup>
                            <FormGroup check className="mx-5">
                                <Label check style={{fontSize:"1.4rem"}}>
                                    <Input
                                        type="radio"
                                        name={`${eachQuestion.challenge_question_id}`}
                                        id="radioOption2"
                                        value={`${eachQuestion.option_b}`}
                                    />{' '}
                                    {eachQuestion.option_b}
                                </Label>
                            </FormGroup>
                            <FormGroup check className="mx-5">
                                <Label check style={{fontSize:"1.4rem"}}>
                                    <Input
                                        type="radio"
                                        name={`${eachQuestion.challenge_question_id}`}
                                        id="radioOption3"
                                        value={`${eachQuestion.option_c}`}
                                    />{' '}
                                    {eachQuestion.option_c}
                                </Label>
                            </FormGroup>

                            <FormGroup check className="mx-5">
                                <Label check style={{fontSize:"1.4rem"}}>
                                    <Input
                                        type="radio"
                                        name={`${eachQuestion.challenge_question_id}`}
                                        id="radioOption4"
                                        value={`${eachQuestion.option_d}`}
                                    />{' '}
                                    {eachQuestion.option_d}
                                </Label>
                            </FormGroup>    
                        </>
                    }
                    {eachQuestion.type === "MCQ" && 
                        <>
                            <FormGroup check className="mx-5">
                                <Label check>
                                    <Input
                                        type="checkbox"
                                        name={`${eachQuestion.challenge_question_id}`}
                                        id={eachQuestion.option_a}
                                        onChange={handleClick}
                                        isChecked={isCheck.includes(
                                            eachQuestion.option_a
                                        )}
                                        value={`${eachQuestion.option_a}`}
                                    />
                                    {eachQuestion.option_a}
                                </Label>
                            </FormGroup>
                            <FormGroup check className="mx-5">
                                <Label check>
                                    <Input
                                        type="checkbox"
                                        name={`${eachQuestion.challenge_question_id}`}
                                        id={eachQuestion.option_b}
                                        onChange={handleClick}
                                        isChecked={isCheck.includes(
                                            eachQuestion.option_b
                                        )}
                                        value={`${eachQuestion.option_b}`}
                                    />
                                    {eachQuestion.option_b}
                                </Label>
                            </FormGroup>
                            <FormGroup check className="mx-5">
                                <Label check>
                                    <Input
                                        type="checkbox"
                                        name={`${eachQuestion.challenge_question_id}`}
                                        id={eachQuestion.option_c}
                                        onChange={handleClick}
                                        isChecked={isCheck.includes(
                                            eachQuestion.option_c
                                        )}
                                        value={`${eachQuestion.option_c}`}
                                    />
                                    {eachQuestion.option_c}
                                </Label>
                            </FormGroup>

                            <FormGroup check className="mx-5">
                                <Label check>
                                    <Input
                                        type="checkbox"
                                        name={`${eachQuestion.challenge_question_id}`}
                                        id={eachQuestion.option_d}
                                        onChange={handleClick}
                                        isChecked={isCheck.includes(
                                            eachQuestion.option_d
                                        )}
                                        value={`${eachQuestion.option_d}`}
                                    />
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
