// import { useContext } from 'react';
// import { DetailedQuizContext } from '../../context/detailquiz.context';
import { React, useEffect, useState } from 'react';
import { Fragment } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
const config = process.env.REACT_APP_API_IMAGE_BASE_URL;
const Question = (props) => {
    const [isCheck, setIsCheck] = useState([]);

    const quiz = props.adminQuizDetails ? props.adminQuizDetails : [];
    const handleClick = (e) => {
        const { name, checked } = e.target;
        setIsCheck([...isCheck, name]);
        if (!checked) {
            setIsCheck(isCheck.filter((item) => item !== name));
        }
    };
    useEffect(() => {
        const selectedAns = isCheck.toString();
        const allAns = selectedAns.replace(/,/g, '{{}}');
        props.onSelectAnswer(allAns);
    }, [isCheck]);
    return (
        <Fragment>
            {quiz[0].question_image != null ? (
                <figure className="text-center">
                    <img
                        src={config + quiz[0].question_image}
                        alt={quiz[0].question_image}
                        className="img-fluid"
                    />
                </figure>
            ) : null}
            <div className="question quiz">{quiz[0] && quiz[0].question}</div>
            <div className="answers">
                {quiz[0] &&
                    quiz[0].options.map((answer, i) => {
                        const file = answer.split('.', 2);
                        return (
                            <div className={'answer '} key={i}>
                                {quiz[0] && quiz[0].type == 'MCQ' ? (
                                    <label className="my-auto mx-3">
                                        <input
                                            name={answer}
                                            type="checkbox"
                                            className="mx-2"
                                            onChange={handleClick}
                                            isChecked={isCheck.includes(answer)}
                                        />
                                        {answer}
                                    </label>
                                ) : (
                                    <FormGroup check className="answer-text">
                                        <Input
                                            onChange={() =>
                                                props.onSelectAnswer(answer)
                                            }
                                            className="my-auto"
                                            name="radio1"
                                            type="radio"
                                        />{' '}
                                        {file[1] === 'png' ? (
                                            <figure className="text-center my-auto mx-3">
                                                <img
                                                    src={config + answer}
                                                    alt={answer}
                                                    className="img-fluid"
                                                    style={{ width: '50px' }}
                                                />
                                            </figure>
                                        ) : (
                                            <Label className="px-3">
                                                {answer}
                                            </Label>
                                        )}
                                    </FormGroup>
                                )}
                            </div>
                        );
                    })}
            </div>
        </Fragment>
    );
};

export default Question;
