import React from 'react';
import { console } from 'react-bootstrap';
import { Label, Col } from 'reactstrap';

import { Button } from '../../stories/Button';
// import OtpInput from "react-otp-input";
import OtpInput from 'react-otp-input-rc-17';

class StepThreeCopy extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            otp: '',
            numInputs: 6,
            separator: '-',
            isDisabled: false,
            hasErrored: false,
            isInputNum: true,
            isInputSecure: false,
            minLength: 0,
            maxLength: 40,
            placeholder: ''
        };
    }

    handleOtpChange = (otp) => {
        this.setState({ otp });
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleNumInputsChange = (e) => {
        let numInputs = e.target.value;
        const { minLength, maxLength } = this.state;

        if (numInputs < minLength || numInputs > maxLength) {
            numInputs = 4;

            console.error(
                `Please enter a value between ${minLength} and ${maxLength}`
            );
        }

        this.setState({ [e.target.name]: parseInt(numInputs, 10) });
    };

    clearOtp = () => {
        this.setState({ otp: '' });
    };

    handleCheck = (e) => {
        const { name } = e.target;
        this.setState((prevState) => ({ [name]: !prevState[name] }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        alert(this.state.otp);
    };

    render() {
        const {
            otp,
            numInputs,
            separator,
            isDisabled,
            hasErrored,
            isInputNum,
            isInputSecure,

            placeholder
        } = this.state;

        return (
            <div className="container">
                <div className="view">
                    <Col className="form-group" md={12}>
                        <Label className="mb-2">
                            OTP has been snet to .....
                        </Label>
                    </Col>
                    <form onSubmit={this.handleSubmit}>
                        <div className="d-flex justify-content-center my-5">
                            <OtpInput
                                numInputs={numInputs}
                                isDisabled={isDisabled}
                                hasErrored={hasErrored}
                                errorStyle="error"
                                onChange={this.handleOtpChange}
                                separator={<span>{separator}</span>}
                                isInputNum={isInputNum}
                                isInputSecure={isInputSecure}
                                shouldAutoFocus
                                value={otp}
                                placeholder={placeholder}
                                inputStyle={{
                                    border: '1px solid var(--color-grey-light-3)',
                                    borderRadius: '8px',
                                    width: '5.4rem',
                                    height: '5.4rem',
                                    fontSize: '2.2rem',
                                    color: '#000',
                                    fontWeight: '400',
                                    caretColor: 'blue'
                                }}
                                focusStyle={{
                                    border: '1px solid #CFD3DB',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <div className="d-flex justify-content-center my-5">
                            <a className="text-left">
                                <u>Didn&apos;t recieve OTP</u>
                            </a>{' '}
                            <a className="text-left mx-5">Resend OTP</a>
                        </div>
                        <div className="row">
                            <Col md="6">
                                <Button
                                    label="CLEAR"
                                    btnClass={
                                        otp.length < 1
                                            ? 'default w-100'
                                            : 'primary w-100'
                                    }
                                    size="small "
                                    disabled={isDisabled || otp.trim() === ''}
                                    onClick={this.clearOtp}
                                />
                            </Col>

                            <Col md="6">
                                <Button
                                    label="VERIFY"
                                    btnClass={
                                        otp.length < numInputs
                                            ? 'default w-100'
                                            : 'primary w-100'
                                    }
                                    size="small "
                                    disabled={otp.length < numInputs}
                                />
                            </Col>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default StepThreeCopy;
