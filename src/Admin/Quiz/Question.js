import { useContext, useEffect, useState } from "react";
import Answer from "./Answer";
import { QuizContext } from "../../context/quiz.context";
import { Fragment } from "react";
import { FormGroup, Input, Label } from "reactstrap";
const config = process.env.REACT_APP_API_IMAGE_BASE_URL;

const Question = (props) => {
  const [quizState, dispatch] = useContext(QuizContext);
  // const [quiz, setQuiz] = useState([]);
  // const [adminQst, SetAdminQst] = useState({});
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  const quiz = props.qsts ? props.qsts : [];
  // useEffect(() => {
  //   setQuiz(props.qsts);
  // }, [props.qsts]);
  return (
    <Fragment>
      {quiz[0] && quiz[0].question_image != null ? (
        <figure className="text-center">
          <img
            src={config + quiz[0].question_image}
            alt={quiz[0].question_image}
            className="img-fluid"
            style={{ width: "150px" }}
          />
        </figure>
      ) : null}
      <div className="question quiz">{quiz[0] && quiz[0].question}</div>
      <div className="answers">
        {quiz[0] &&
          quiz[0].options.map((answer, index) => {
            const file = answer.split(".", 2);
            return (
              <div
                className={`answer `}
                onClick={() => props.onSelectAnswer(answer)}
              >
                <FormGroup check className="answer-text">
                  <Input className="my-auto" name="radio1" type="radio" />{" "}
                  {file[1] === "png" ? (
                    <figure className="text-center my-auto mx-3">
                      <img
                        // src={
                        //   "https://www.freepnglogos.com/uploads/globe-png/globe-memberships-frontier-trainings-7.png"
                        // }
                        src={config + answer}
                        alt={answer}
                        className="img-fluid"
                        style={{ width: "50px" }}
                      />
                    </figure>
                  ) : (
                    <Label className="px-3">{answer}</Label>
                  )}
                  {/* <Label className="px-3">{answer}</Label> */}
                </FormGroup>
              </div>
            );
          })}
      </div>
    </Fragment>
  );
};

export default Question;
