/* eslint-disable react/no-unknown-property */
/* eslint-disable indent */
import { Fragment, React, useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from '../../../stories/Button.jsx';
import ModuleAssesmentImg from '../../../assets/media/moduleAssesmentPopup.svg';
import Quiz from '../../../Admin/Quiz/Quiz.js';

function TakeAssesmentPopup(props) {
    const reflectedQst = props.refQst;
    const videoId = props.videoId;
    const [showQuiz, setHideQuiz] = useState(false);
    useEffect(() => {
        setHideQuiz(false);
    }, [props.show]);

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
                            Let&apos;s think about a few things you learnt in the video
                        </Modal.Title>
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
                ''
            )}

            {showQuiz ? (
                <Quiz
                    qsts={reflectedQst}
                    refQstId={videoId}
                    handleClose={props.handleClose}
                />
            ) : (
                ''
            )}
        </Modal>
    );
}

export default TakeAssesmentPopup;
