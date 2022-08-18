import { Fragment, React, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "../../stories/Button";
import ModuleAssesmentImg from "../../assets/media/moduleAssesmentPopup.svg";
import { VscCircleFilled } from "react-icons/vsc";
import Quiz from "../Quiz/Quiz";

function TakeAssesmentPopup(props) {
    const reflectedQst = props.refQst;
    const videoId = props.videoId;
    const [showQuiz, setHideQuiz] = useState(false);
    useEffect(() => {
        setHideQuiz(false);
    // dispatch({ type: "LATEST" });
    }, [props.show]);
    // const [paused, setPaused] = useState(false);
    // const handleClose = (item) => {
    //   alert("item" + item);
    //   setHideQuiz(item);
    // };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal-popup text-center quiz-modal"
            backdrop="static"
        >
            {!showQuiz ? (
                <Fragment>
                    <Modal.Header closeButton>
                        <Modal.Title
                            id="contained-modal-title-vcenter"
                            className="w-100 d-block mb-2"
                        >
              Ready for the test on lessons?
                        </Modal.Title>
                        <p className="w-100 d-block">
              Test your course skills in a short test challenge!
                        </p>
                        <div className="row justify-content-center text-center">
                            <div className="col col-lg-3 ">
                                <p>
                                    <VscCircleFilled style={{ color: "#067DE1" }} /> 5 Questions
                                </p>
                            </div>
                            <div className="col col-lg-3 ">
                                <p>
                                    <VscCircleFilled style={{ color: "#067DE1" }} /> 10 - 15
                  minutes
                                </p>
                            </div>
                        </div>
                    </Modal.Header>

                    <Modal.Body>
                        <figure>
                            <img
                                src={ModuleAssesmentImg}
                                alt="test"
                                className="img-fluid w-50"
                            />
                        </figure>
                        <Button
                            label="Let's Start"
                            btnClass="primary mt-4"
                            size="small"
                            onClick={() => setHideQuiz(true)}
                        />
                    </Modal.Body>
                </Fragment>
            ) : (
                ""
            )}

            {showQuiz ? (
                <Quiz
                    qsts={reflectedQst}
                    refQstId={videoId}
                    handleClose={props.handleClose}
                />
            ) : (
                ""
            )}
        </Modal>
    );
}

export default TakeAssesmentPopup;
