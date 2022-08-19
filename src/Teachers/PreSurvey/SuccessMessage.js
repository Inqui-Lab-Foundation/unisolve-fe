import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "../../stories/Button";
import { Form, FormGroup } from "reactstrap";

import successIcon from "../../assets/media/upload-success-animated.gif";

// import IconCSV from "../../media/csv-1.png";
function SuccessMessage(props) {
    return (
        <>
            <Modal
                {...props}
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                centered
                className='assign-evaluator exportModal'
                backdrop='static'
            >
                {/* <Modal.Header closeButton> */}
                <Modal.Header>
                    <Modal.Title
                        id='contained-modal-title-vcenter'
                        className='w-100 d-block'
                    >
            Success!!!
                    </Modal.Title>
                    <p className='w-100 d-block'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Modal.Header>

                <Form>
                    <Modal.Body>
                        <FormGroup>
                            <div className='row py-5'>
                                <figure className='text-center'>
                                    <img
                                        className='img-fluid w-25'
                                        src={successIcon}
                                        alt='success'
                                    />
                                    <h3>Successfully Submitted</h3>
                                </figure>
                            </div>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer className='text-right  d-block form-group'>
                        <Button
                            label='Okay'
                            btnClass='primary'
                            size='small'
                            type='cancel'
                            // onClick={props.onHide}
                        />
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default SuccessMessage;
