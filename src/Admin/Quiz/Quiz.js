import { React, useEffect } from "react";
import { Card, Row, Col } from "reactstrap";
import { Fragment, useContext } from "react";
import { QuizContext } from "../../context/quiz.context";
import Question from "./Question";
import { Button } from "../../stories/Button";
import "./quiz.scss";
import { Progress } from "antd";
import Confetti from "react-confetti";
import PrevIcon from "../../media/quiz.prev.png";
import ResultStar from "../../media/quiz-result-star.png";
import { VscCircleFilled } from "react-icons/vsc";

import { ProgressComp } from "../../stories/Progress/Progress";
import { PropertySafetyFilled } from "@ant-design/icons";

const GreetingMessage = "";

const Quiz = (props) => {
  console.log(props);
  const [quizState, dispatch] = useContext(QuizContext);
  useEffect(() => {
    dispatch({ type: "LATEST" });
  }, [props.quiz]);
  const progressBar = {
    label: "Progress",
    options: [{ id: 1, teams: "CSK", percent: 75, status: "active" }],
  };
  return (
    <Fragment>
      {quizState.showResults && <Confetti className="w-100" />}

      {/* <Progress percent={quizState.currentQuestionIndex + 1} status='active' /> */}

      {!quizState.showResults && (
        <Fragment>
          <ProgressComp {...progressBar} />
        </Fragment>
      )}

      <Card className="quiz">
        {quizState.showResults && (
          <div className="container new-result">
            <div class="row justify-content-md-center ">
              <div class="col col-lg-9">
                {/* <Confetti className='w-100' /> */}
                <div className="results-heading">
                  <img src={ResultStar} alt="star" />
                </div>
                <div className="congratulations">
                  Congratulations! You passed!
                </div>
                <span className="congratulations-sub ">
                  You are ready to move on to the next lecture.
                </span>
                <div class="row py-3 mb-3 ">
                  <div class="col col-auto">
                    <p>
                      <VscCircleFilled style={{ color: "#067DE1" }} /> 5 Grade
                      received <span style={{ color: "#0DA650" }}>100%</span>,
                      &nbsp;
                      {quizState.correctAnswersCount}/
                      {quizState.questions.length} correct
                    </p>
                  </div>
                  <div class="col col-auto">
                    <p>
                      <VscCircleFilled style={{ color: "#067DE1" }} /> 300
                      mastry points
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() => props.handleClose(false)}
                  button="submit"
                  label="Continue Course"
                  btnClass="primary mt-5 quiz-end"
                  size="small"
                />
                {/* <div
                  onClick={() => dispatch({ type: "RESTART" })}
                  className='next-button'
                >
                  Restart
                </div> */}
              </div>
            </div>
          </div>
        )}
        {!quizState.showResults && (
          <Fragment>
            {/* <ProgressComp {...progressBar} /> */}
            <div className="question-section">
              <div className="score">
                {/* <img
                  src={PrevIcon}
                  alt='quiz-prev'
                  onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                /> */}
                {/* <span className='mx-3'> */}
                <span className="">
                  Question {quizState.currentQuestionIndex + 1}
                </span>
              </div>
              <Question />

              <Row className="justify-content-between mt-5">
                <Col md={6}>
                  <div className="score">
                    Question {quizState.currentQuestionIndex + 1}/
                    {quizState.questions.length}
                  </div>
                </Col>
                <Col md={6} className="text-right">
                  <Button
                    btnClass="primary px-5"
                    size="small"
                    // Icon={BsPlusLg}
                    label="Next"
                    onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                  />
                  {/* {quizState.currentAnswer && (
                 

                  <Button
                    btnClass='primary px-5'
                    size='small'
                  
                    label='Next'
                    onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                  />
                )} */}
                </Col>
              </Row>
            </div>
          </Fragment>
        )}
      </Card>
    </Fragment>
  );
};

export default Quiz;
