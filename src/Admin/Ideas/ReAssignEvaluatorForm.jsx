import React from "react";
import { Modal, ListGroup } from "react-bootstrap";
import { InputWithSearchComp } from "../../stories/InputWithSearch/InputWithSearch";
import { Button } from "../../stories/Button";
import {  Avatar } from "antd";
import BasicImg from "../../assets/media/img/avatar1.png";
import BasicImg2 from "../../assets/media/img/avatar2.png";

function ReAssignEvaluatorForm(props) {
    return (
        <Modal
            {...props}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
            className='assign-evaluator'
        >
            <Modal.Header closeButton>
                <Modal.Title
                    id='contained-modal-title-vcenter'
                    className='w-100 d-block'
                >
          Assign Evaluator NAME with
                </Modal.Title>
                <p className='w-100 d-block'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <InputWithSearchComp placeholder='Enter Evaluator name or email' />
            </Modal.Header>

            <Modal.Body>
                <span>Suggested Evaluators</span>

                <ListGroup>
                    <ListGroup.Item
                        as='li'
                        className='d-flex justify-content-between align-items-start b-0'
                    >
                        <div className='ms-2 me-auto'>
                            <div className='d-flex'>
                                <Avatar size={64} src={BasicImg} />
                                <div className='info my-auto'>
                  Kaleb Khan
                                    <br />
                                    <span>Kalebkhan@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <Button
                            label='Reassign'
                            btnClass='primary'
                            size='small'
                            shape='btn-square'
                            //   onClick={() => props.history.push("/")}
                        />
                    </ListGroup.Item>
                    <ListGroup.Item
                        as='li'
                        className='d-flex justify-content-between align-items-start b-0'
                    >
                        <div className='ms-2 me-auto'>
                            <div className='d-flex'>
                                <Avatar size={64} src={BasicImg2} />
                                <div className='info my-auto'>
                  Naima Coper
                                    <br />
                                    <span>Naimacoper@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <Button
                            label='Reassign'
                            btnClass='primary'
                            size='small'
                            shape='btn-square'
                            //   onClick={() => props.history.push("/")}
                        />
                    </ListGroup.Item>
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <a className='text-left'>+ Create New Evaluator Account</a>
            </Modal.Footer>
        </Modal>
    );
}

export default ReAssignEvaluatorForm;
