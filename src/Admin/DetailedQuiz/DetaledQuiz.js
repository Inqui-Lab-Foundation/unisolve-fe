import { React, useEffect, useState } from "react";
import { Card, Row, Col } from "reactstrap";
import { Fragment, useContext } from "react";
// import { QuizContext } from "../../context/quiz.context";
import { QuizContext } from "../../context/quiz.context";
import { DetailedQuizContext } from "../../context/detailquiz.context";
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
  getAdminQuizQuestions,
  getAdminQuizResponce,
  getAdminCourseDetails,
} from "../../redux/actions";
const GreetingMessage = "";

const DetaledQuiz = (props) => {
  console.log("props.quizId===========", props.quizId);
  const quizId = props.quizId;
  const [adminQst, SetAdminQst] = useState({});
  const DetailedQuizContext1 = DetailedQuizContext;
  const [quizState, dispatch] = useContext(DetailedQuizContext1);
  const [selectOption, SetSelectOption] = useState("");
  const [condition, SetCondition] = useState(true);
  const [video, SetVideo] = useState(true);

  // const quiz = props.getAdminQuizQuestionsActions(quizId);
  useEffect(() => {
    console.log("========================================");
    props.getAdminQuizQuestionsActions(quizId);
    dispatch({ type: "LATEST" });
  }, [props.quizId]);

  useEffect(() => {
    SetAdminQst(props.adminCourseQst.data);
  }, [props.adminCourseQst]);
  console.log("=====", quizState);
  const progressBar = {
    label: "Progress",
    options: [{ id: 1, teams: "CSK", percent: 100, status: "active" }],
  };

  const handleSelect = (answer) => {
    SetSelectOption(answer);
    // props.getAdminQuizResponce(body);
  };

  const handleSubmit = (e) => {
    const quiz_id = adminQst[0].quiz_id;
    const body = JSON.stringify({
      quiz_question_id: adminQst[0].quiz_question_id,
      selected_option: selectOption,
    });
    SetCondition(false);
    // alert(JSON.stringify(body));
    props.getAdminQuizResponceAction(quiz_id, body);
    SetSelectOption();
  };
  const handleNxtQst = (e) => {
    SetCondition(true);
    props.getAdminQuizQuestionsActions(props.quizId);
  };
  const handlevideo = (id) => {
    SetVideo(false);
    props.handleNxtVideo(id);
  };
  useEffect(() => {
    if (props.adminCourseQst.count === null) {
      props.handleQuiz();
    }
  }, [props.adminCourseQst.count]);
  return (
    <Fragment>
      {quizState.showResults && <Confetti className="w-100" />}

      {/* <Progress percent={quizState.currentQuestionIndex + 1} status='active' /> */}

      {condition == true &&
      props.adminCourseQst &&
      props.adminCourseQst.status === 200 ? (
        <Fragment>
          <ProgressComp
            level={
              props.adminCourseQst.data &&
              props.adminCourseQst.data[0] &&
              props.adminCourseQst.data[0].level
            }
            {...progressBar}
          />
        </Fragment>
      ) : null}

      <Card className="quiz">
        {video == true &&
        props.adminQstResponce &&
        props.adminQstResponce.status === 200 ? (
          <Fragment>
            {/* <ProgressComp {...progressBar} /> */}
            <div className="question-section">
              <div className="score">
                {props.adminQstResponce &&
                  props.adminQstResponce.data[0] &&
                  props.adminQstResponce.data[0].is_correct === true && (
                    <div className="w-100">
                      {" "}
                      <figure className="w-100 text-center">
                        <img className="img-fluid" src={quizCheck} alt="quiz" />
                      </figure>
                      {/* <FaCheck className="green mx-3" /> */}
                      <h2 style={{ textAlign: "center" }}>Success!</h2>
                      <p style={{ textAlign: "center" }}>
                        {props.adminQstResponce &&
                          props.adminQstResponce.data[0] &&
                          props.adminQstResponce.data[0].msg}
                      </p>
                    </div>
                  )}
                <br />
                {props.adminQstResponce &&
                  props.adminQstResponce.data[0] &&
                  props.adminQstResponce.data[0].is_correct === false && (
                    <div className="w-100">
                      {" "}
                      <figure className="w-100 text-center">
                        <img className="img-fluid" src={quizClose} alt="quiz" />
                      </figure>
                      <h2 style={{ textAlign: "center" }}>Oops!</h2>
                      <p style={{ textAlign: "center" }}>
                        {props.adminQstResponce &&
                          props.adminQstResponce.data[0] &&
                          props.adminQstResponce.data[0].msg}
                      </p>
                    </div>
                  )}
                <br />
              </div>

              <Row className="justify-content-between mt-5">
                {props.adminQstResponce &&
                  props.adminQstResponce.data[0] &&
                  props.adminQstResponce.data[0].is_correct === true && (
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
                {props.adminQstResponce &&
                  props.adminQstResponce.data[0] &&
                  props.adminQstResponce.data[0].is_correct === false && (
                    <Col md={12} className="text-right">
                      <Button
                        btnClass="primary px-5 mx-3"
                        size="small"
                        // Icon={BsPlusLg}
                        label="Refer Video"
                        onClick={() =>
                          handlevideo(
                            props.adminQstResponce &&
                              props.adminQstResponce.data[0] &&
                              props.adminQstResponce.data[0].redirect_to
                          )
                        }

                        // onClick={() =>
                        //   props.handleNxtVideo(
                        //     props.adminQstResponce &&
                        //       props.adminQstResponce.data[0] &&
                        //       props.adminQstResponce.data[0].redirect_to
                        //   )
                        // }
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
          props.adminCourseQst &&
          props.adminCourseQst.count === null ? (
          <div className="container new-result">
            <div class="row justify-content-md-center ">
              <div class="col col-lg-9">
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
                {/* <Button
                  onClick={() => props.handleClose(false)}
                  button="submit"
                  label="Continue Course"
                  btnClass="primary mt-5 quiz-end"
                  size="small"
                /> */}
              </div>
            </div>
          </div>
        ) : (
          // <Fragment>
          //   <div className="question-section">
          //     <div className="score">
          //       <div className="w-100">
          //         {" "}
          //         <h2 style={{ textAlign: "center" }}>Success!</h2>
          //         <p style={{ textAlign: "center" }}>
          //           {props.adminCourseQst && props.adminCourseQst.data}
          //         </p>
          //       </div>
          //       <br />
          //     </div>
          //   </div>
          // </Fragment>
          video == true &&
          props.adminCourseQst.status === 200 && (
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
                </div>
                <Row>
                  <Col md={6}>
                    <p>
                      Question #
                      {props.adminCourseQst.data &&
                        props.adminCourseQst.data[0] &&
                        props.adminCourseQst.data[0].question_no}
                    </p>
                  </Col>
                  <Col md={6} className="text-right">
                    <p>
                      Level :{" "}
                      {props.adminCourseQst.data &&
                        props.adminCourseQst.data[0] &&
                        props.adminCourseQst.data[0].level}
                    </p>
                  </Col>
                </Row>

                <Question
                  adminQuizDetails={props.adminCourseQst.data}
                  quizId={quizId}
                  onSelectAnswer={handleSelect}
                />

                <Row className="justify-content-between mt-5">
                  <Col md={12} className="text-right">
                    {
                      <Button
                        // btnClass="primary px-5"
                        size="small"
                        // Icon={BsPlusLg}
                        label="Submit"
                        onClick={(e) => handleSubmit(e)}
                        btnClass={!selectOption ? "default" : "primary"}
                      />
                    }
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

// export default DetaledQuiz;
const mapStateToProps = ({ adminCourses }) => {
  const { adminCourseQst, adminQstResponce } = adminCourses;
  return { adminCourseQst, adminQstResponce };
};

export default connect(mapStateToProps, {
  getAdminQuizQuestionsActions: getAdminQuizQuestions,
  getAdminQuizResponceAction: getAdminQuizResponce,
  getAdminCourseDetailsActions: getAdminCourseDetails,
})(DetaledQuiz);
