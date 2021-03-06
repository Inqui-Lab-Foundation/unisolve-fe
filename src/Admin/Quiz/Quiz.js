import { React, useEffect, useState } from "react";
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

import { connect } from "react-redux";
import quizCheck from "../../media/quiz-check.png";
import quizClose from "../../media/quiz-close.png";
import {
  getAdminRfQuizResponce,
  getAdminRefQuizQst,
} from "../../redux/actions";
const GreetingMessage = "";

const Quiz = (props) => {
  const [quizState, dispatch] = useContext(QuizContext);
  const quiz1 = props.qsts ? props.qsts : [];
  const [selectOption, SetSelectOption] = useState("");
  const [video, SetVideo] = useState(true);
  const [qstIndex, SetCorrentQstIndex] = useState(0);
  useEffect(() => {
    dispatch({ type: "LATEST" });
    props.getAdminRefQuizQstActions(props.refQstId);
    // apiCalls();
  }, [props.refQstId]);
  const progressBar = {
    label: "Progress",
    options: [{ id: 1, teams: "CSK", percent: 75, status: "active" }],
  };
  const handleNxtQst = (e) => {
    props.getAdminRefQuizQstActions(props.refQstId);
  };
  // function apiCalls() {
  //   props.getAdminRefQuizQstActions(props.refQstId);
  // }
  const handleSelect = (answer) => {
    SetSelectOption(answer);
  };
  const handleSubmit = (e) => {
    const quiz_id = props.refQstId;
    const body = JSON.stringify({
      reflective_quiz_question_id:
        props.adminRefQuizQst.data[0].reflective_quiz_question_id,
      selected_option: selectOption,
    });
    props.getAdminRfQuizResponceAction(quiz_id, body);
    SetSelectOption();
  };

  return (
    <Fragment>
      {quizState.showResults && <Confetti className="w-100" />}

      <Card className="quiz">
        {video == true &&
        props.adminRefQstResponce &&
        props.adminRefQstResponce.status === 200 ? (
          <Fragment>
            {/* <ProgressComp {...progressBar} /> */}
            <div className="question-section">
              <div className="score">
                {props.adminRefQstResponce &&
                  props.adminRefQstResponce.data[0] &&
                  props.adminRefQstResponce.data[0].is_correct === true && (
                    <div className="w-100">
                      {" "}
                      <figure className="w-100 text-center">
                        <img className="img-fluid" src={quizCheck} alt="quiz" />
                      </figure>
                      {/* <FaCheck className="green mx-3" /> */}
                      <h2 style={{ textAlign: "center" }}>Success!</h2>
                      <p style={{ textAlign: "center" }}>
                        {props.adminRefQstResponce &&
                          props.adminRefQstResponce.data[0] &&
                          props.adminRefQstResponce.data[0].msg}
                      </p>
                    </div>
                  )}
                <br />
                {props.adminRefQstResponce &&
                  props.adminRefQstResponce.data[0] &&
                  props.adminRefQstResponce.data[0].is_correct === false && (
                    <div className="w-100">
                      {" "}
                      <figure className="w-100 text-center">
                        <img className="img-fluid" src={quizClose} alt="quiz" />
                      </figure>
                      <h2 style={{ textAlign: "center" }}>Oops!</h2>
                      <p style={{ textAlign: "center" }}>
                        {props.adminRefQstResponce &&
                          props.adminRefQstResponce.data[0] &&
                          props.adminRefQstResponce.data[0].msg}
                      </p>
                    </div>
                  )}
                <br />
              </div>

              <Row className="justify-content-between mt-5">
                {props.adminRefQstResponce &&
                  props.adminRefQstResponce.data[0] &&
                  props.adminRefQstResponce.data[0].is_correct === true && (
                    <Col md={12} className="text-right">
                      <Button
                        btnClass="primary px-5"
                        size="small"
                        // Icon={BsPlusLg}
                        label="Next Question"
                        onClick={(e) => handleNxtQst(e)}
                      />
                    </Col>
                  )}
                {props.adminRefQstResponce &&
                  props.adminRefQstResponce.data[0] &&
                  props.adminRefQstResponce.data[0].is_correct === false && (
                    <Col md={12} className="text-right">
                      <Button
                        btnClass="primary px-5 mx-3"
                        size="small"
                        // Icon={BsPlusLg}
                        label="Refer Video"
                        onClick={() => props.handleClose(false)}
                      />
                      <Button
                        btnClass="primary px-5"
                        size="small"
                        // Icon={BsPlusLg}
                        label="Next Question"
                        onClick={(e) => handleNxtQst(e)}
                      />
                    </Col>
                  )}
              </Row>
            </div>
          </Fragment>
        ) : video == true &&
          props.adminRefQuizQst &&
          props.adminRefQuizQst.count === null ? (
          <div className="container new-result">
            <div class="row justify-content-md-center ">
              <div class="col col-lg-9">
                {/* <Confetti className='w-100' /> */}
                <div className="results-heading">
                  <img src={ResultStar} alt="star" />
                </div>
                <div className="congratulations">Successfully Completed !</div>
                {/* <span className="congratulations-sub ">
                  You are ready to move on to the next lecture.
                </span> */}
                {/* <div class="row py-3 mb-3 ">
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
                </div> */}
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
        ) : (
          video == true &&
          props.adminRefQuizQst.status === 200 && (
            <Fragment>
              <div className="question-section">
                <div className="score">
                  <span className="">
                    Question #{" "}
                    {props.adminRefQuizQst.data &&
                      props.adminRefQuizQst.data[0] &&
                      props.adminRefQuizQst.data[0].question_no}
                  </span>
                </div>
                <Question
                  qsts={props.adminRefQuizQst.data}
                  onSelectAnswer={handleSelect}
                />

                <Row className="justify-content-between mt-5">
                  <Col md={12} className="text-right">
                    <Button
                      size="small"
                      label="Submit"
                      onClick={(e) => handleSubmit(e)}
                      btnClass={!selectOption ? "default" : "primary"}
                    />
                  </Col>
                </Row>
              </div>
            </Fragment>
          )
        )}
      </Card>
    </Fragment>
  );
};

const mapStateToProps = ({ adminCourses }) => {
  const { adminRefQstResponce, adminRefQuizQst } = adminCourses;
  return { adminRefQstResponce, adminRefQuizQst };
};

export default connect(mapStateToProps, {
  getAdminRfQuizResponceAction: getAdminRfQuizResponce,
  getAdminRefQuizQstActions: getAdminRefQuizQst,
})(Quiz);
// export default Quiz;
