import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Button } from '../../stories/Button';
import { Row, Col } from "reactstrap";

function LoginPopup(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="assign-evaluator ChangePSWModal teacher-register-modal"
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    className="w-100 d-block text-center"
                >
          Select Logins
                </Modal.Title>
            </Modal.Header>
            

            <Modal.Body>
                <Row className="justify-content-between w-100">
                    <Col md={4}>
                        <Link
                            className="landing-page-actions"
                            exact="true"
                            to="/login"
                        >
                            <Button
                                label="Student Login"
                                btnClass="primary mx-3"
                                size="small"
                            />
                        </Link>
                    </Col>
                    <Col md={4}>
                        <Link
                            className="landing-page-actions"
                            exact="true"
                            to="/teacher"
                        >
                            <Button
                                label="Mentor Login"
                                btnClass="primary mx-3"
                                size="small"
                            />
                        </Link>
                    </Col>
                    <Col md={4}>
                        <Link
                            className="landing-page-actions"
                            exact="true"
                            to="/admin"
                        >
                            <Button
                                label="Admin Login"
                                btnClass="primary mx-3"
                                size="small"
                            />
                        </Link>
                    </Col>
                </Row>
                
            
            </Modal.Body>
        </Modal>
    );
}

export default LoginPopup;
