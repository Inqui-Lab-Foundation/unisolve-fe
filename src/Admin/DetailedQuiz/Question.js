import { useContext } from "react";
import Answer from "./Answer";
import { QuizContext } from "../../context/quiz.context";
import { DetailedQuizContext } from "../../context/detailquiz.context";
import { Fragment } from "react";

const Question = () => {
  const [quizState, dispatch] = useContext(DetailedQuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <Fragment>
      <div className='question quiz'>{currentQuestion.question}</div>
      <div className='answers'>
        {quizState.answers.map((answer, index) => (
          <Answer
            answerText={answer}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            key={index}
            index={index}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Question;
