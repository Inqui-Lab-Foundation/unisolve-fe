import React from "react";
import { Modal } from "react-bootstrap";

import { Button } from "../../stories/Button";
import successIcon from "../../media/rocket.gif";

function StepFive(props) {
  return (
    <Modal.Body>
      <div className=' row '>
        <div className='mt-5'>
          <figure className='text-center'>
            <img className='img-fluid w-25 ' src={successIcon} alt='success' />
            <h3>Successfully Registered</h3>
          </figure>
          <Button
            label='CONTINUE'
            btnClass={"primary mt-5"}
            size='large '
            type='submit'
            // onClick={props.onHide}
            onClick={() => props.history.push("/admin")}
          />
        </div>
      </div>
    </Modal.Body>
  );
}

export default StepFive;
