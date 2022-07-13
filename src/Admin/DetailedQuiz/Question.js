import { useContext } from "react";
import Answer from "./Answer";
import { QuizContext } from "../../context/quiz.context";
import { DetailedQuizContext } from "../../context/detailquiz.context";
import { Fragment } from "react";
import { FormGroup, Input, Label } from "reactstrap";
const Question = (props) => {
  const topicId = props.quizId;
  const quiz = props.adminQuizDetails ? props.adminQuizDetails : [];
  const [quizState, dispatch] = useContext(DetailedQuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  // const onSelectAnswer = (answer) => {
  //   alert(answer);
  //   const body = JSON.stringify({
  //     quiz_question_id: quiz[0].quiz_question_id,
  //     selected_option: answer,
  //   });
  //   props.getAdminQuizResponce(body);
  // };
  return (
    <Fragment>
      <div className="question quiz">{quiz[0] && quiz[0].question}</div>
      <div className="answers">
        {quiz[0] &&
          quiz[0].options.map((answer, index) => {
            return (
              <div
                className={`answer `}
                onClick={() => props.onSelectAnswer(answer)}
              >
                <FormGroup check className="answer-text">
                  <Input className="my-auto" name="radio1" type="radio" />{" "}
                  <Label className="px-3">{answer}</Label>
                </FormGroup>
              </div>
            );
          })}
      </div>
    </Fragment>
  );
};

export default Question;
