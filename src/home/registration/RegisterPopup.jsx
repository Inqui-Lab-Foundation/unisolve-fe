import React from 'react';
import { Modal } from 'react-bootstrap';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

import { useState } from 'react';
import StepFive from './StepFive';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { registerStepData } from '../../redux/actions';

function RegisterPopup(props) {
    const dispatch = useDispatch();
    const [hideOne, setHideOne] = useState(true);
    const [hideTwo, setHideTwo] = useState(false);
    const [hideThree, setHideThree] = useState(false);
    const [hideFour, setHideFour] = useState(false);
    const [hideFive, setHideFive] = useState(false);
    const [setImportPopup] = useState(false);
    const [orgData, setOrgData] = useState();
    const [userData, setUserData] = useState();
    const [oldPassword, setOldPassword] = useState();

    useEffect(() => {
        console.log(
            '🚀 ~ file: RegisterPopup.jsx ~ line 25 ~ RegisterPopup ~ orgData',
            orgData
        );
    }, [orgData]);

    const handleClose = () => {
        dispatch(registerStepData({}));
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="assign-evaluator ChangePSWModal teacher-register-modal"
            backdrop="static"
        >
            <Modal.Header closeButton onHide={handleClose}>
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    className="w-100 d-block text-center"
                >
                    REGISTER
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {hideOne ? (
                    <StepOne
                        disecodes={props.dics}
                        setOrgData={setOrgData}
                        setHideOne={setHideOne}
                        setHideTwo={setHideTwo}
                        setPopUp={props.setShowPopUp}
                        setShow={props.setShow}
                    />
                ) : (
                    ''
                )}

                {hideTwo ? (
                    <StepTwo
                        orgData={orgData}
                        setUserData={setUserData}
                        setHideTwo={setHideTwo}
                        setHideThree={setHideThree}
                    />
                ) : (
                    ''
                )}

                {hideThree ? (
                    <StepThree
                        userData={userData}
                        setOldPassword={setOldPassword}
                        setHideTwo={setHideTwo}
                        setHideThree={setHideThree}
                        setHideFour={setHideFour}
                    />
                ) : (
                    ''
                )}

                {hideFour ? (
                    <StepFour
                        userData={userData}
                        oldPassword={oldPassword}
                        setHideFour={setHideFour}
                        setHideFive={setHideFive}
                    />
                ) : (
                    ''
                )}

                {hideFive && (
                    <StepFive
                        setHideFour={setHideFour}
                        setHideFive={setHideFive}
                        setShow={props.setShow}
                        onHide={() => setImportPopup(false)}
                    />
                )}
            </Modal.Body>
        </Modal>
    );
}

export default RegisterPopup;
