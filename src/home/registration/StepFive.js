import React from 'react';
import { Modal } from 'react-bootstrap';

import { Button } from '../../stories/Button';
import successIcon from '../../assets/media/rocket.gif';
import { useHistory } from 'react-router-dom';

function StepFive(props) {
    const history = useHistory();
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
                        btnClass={'primary mt-5'}
                        size='large '
                        type='submit'
                        onClick={() => {
                            props.setHideFive(false);
                            props.setShow(false);
                            history.push('/teacher');
                        }}
                    />
                </div>
            </div>
        </Modal.Body>
    );
}

export default StepFive;
