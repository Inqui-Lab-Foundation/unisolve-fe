import React from "react";
import { Modal } from "react-bootstrap";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

import { useState } from "react";
import StepFive from "./StepFive";

function RegisterPopup(props) {
  const [hideOne, setHideOne] = useState(true);
  const [hideTwo, setHideTwo] = useState(false);
  const [hideThree, setHideThree] = useState(false);
  const [hideFour, setHideFour] = useState(false);
  const [hideFive, setHideFive] = useState(false);
  const [showImportPopup, setImportPopup] = useState(false);

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
          REGISTER
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {hideOne ? (
          <StepOne setHideOne={setHideOne} setHideTwo={setHideTwo} />
        ) : (
          ""
        )}

        {hideTwo ? (
          <StepTwo setHideTwo={setHideTwo} setHideThree={setHideThree} />
        ) : (
          ""
        )}

        {hideThree ? (
          <StepThree
            setHideTwo={setHideTwo}
            setHideThree={setHideThree}
            setHideFour={setHideFour}
          />
        ) : (
          ""
        )}

        {hideFour ? (
          <StepFour setHideFour={setHideFour} setHideFive={setHideFive} />
        ) : (
          ""
        )}

        {hideFive && (
          <StepFive
            setHideFour={setHideFour}
            setHideFive={setHideFive}
            onHide={() => setImportPopup(false)}
          />
        )}
      </Modal.Body>
    </Modal>
  );
}

export default RegisterPopup;
