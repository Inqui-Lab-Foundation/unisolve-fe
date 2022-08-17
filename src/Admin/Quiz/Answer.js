import { FormGroup, Input, Label } from 'reactstrap';

const Answer = ({ answerText, onSelectAnswer }) => {
    // const letterMapping = ["A", "B", "C", "D"];
    // const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
    // const isWrongAnswer =
    //   currentAnswer === answerText && currentAnswer !== correctAnswer;
    // const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
    // const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
    // const disabledClass = currentAnswer ? "disabled-answer" : "";
    return (
        <div className={'answer '} onClick={() => onSelectAnswer(answerText)}>
            {/* <div
      className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => onSelectAnswer(answerText)}
    > */}
            {/* <div className='answer-letter'>{letterMapping[index]}</div> */}

            <FormGroup check className="answer-text">
                <Input className="my-auto" name="radio1" type="radio" />{' '}
                <Label className="px-3">{answerText}</Label>
            </FormGroup>
            {/* <div className='answer-text'>{answerText}</div> */}
        </div>
    );
};

export default Answer;
