import React from 'react';
import { Col } from 'react-bootstrap';
import { Label } from 'reactstrap';
import { Button } from '../../stories/Button';
import OtpInput from 'react-otp-input-rc-17';
import { FaPencilAlt } from 'react-icons/fa';
import { getNormalHeaders } from '../../helpers/Utils';
import { URL, KEY } from '../../constants/defaultValues';
import axios from 'axios';
import { withTranslation  } from 'react-i18next';
class StepThree extends React.Component {
    
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
            placeholder: '',
            userData: props?.userData
        };
    }

    handleClick = () => {
        this.props.setHideThree(false);
        this.props.setHideFour(true);
    };

    goToPrev = () => {
        this.props.setHideTwo(true);
        this.props.setHideThree(false);
    };

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

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(
            'Sending OTP ',
            this.state.otp,
            'User data ',
            this.state.userData
        );
        this.setState({ hasErrored: false });
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        await axios
            .post(
                `${URL.mentorOTP}`,
                { otp: this.state.otp, user_id: this.state.userData?.user_id },
                axiosConfig
            )
            .then((mentorOTPRes) => {
                console.log(
                    '🚀 ~ file: StepThree.js ~ line 82 ~ StepThree ~ .then ~ mentorOTPRes',
                    mentorOTPRes
                );
                this.props.setOldPassword(this.state.otp);
                this.props.setHideThree(false);
                this.props.setHideFour(true);
            })
            .catch((err) => {
                this.setState({ hasErrored: true });
                return err.response;
            });
    };

    maskedPhoneNumber = (number) => {
        const str = number + '';
        const last = str.slice(-3);
        const first = str.slice(0, 2);
        const str1 = first.padEnd(5, '*');
        const str2 = last.padStart(6, '*');
        return str1 + str2;
        // return last.padStart(3, '*').padEnd(4, '*')
        // return last.padStart(str.length, "*");
    };

    render() {
        const { t } = this.props;
        const {
            otp,
            numInputs,
            separator,
            isDisabled,
            hasErrored,
            isInputNum,
            isInputSecure,

            placeholder,
            userData
        } = this.state;

        return (
            <div className="container">
                <div className="view">
                    <Col className="form-group pt-3" md={12}>
                        <Label className="mb-2 ">
                            {t('teacehr_red.otp_me')}
                            {this.maskedPhoneNumber(userData?.mobile)}
                            <span
                                className="mx-3"
                                style={{
                                    color: '#1890ff',
                                    fontSize: '1.6rem',
                                    display: 'inline-flex',
                                    cursor: 'pointer'
                                }}
                                onClick={this.goToPrev}
                            >
                                <FaPencilAlt />
                            </span>
                        </Label>
                    </Col>
                    <form onSubmit={this.handleSubmit}>
                        <div className="d-flex justify-content-center mt-5">
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
                        {hasErrored && (
                            <div className="d-flex justify-content-center">
                                <span style={{ color: 'red' }}>
                                    Invalid OTP
                                </span>
                            </div>
                        )}

                        <div className="d-flex justify-content-center my-5">
                            <a className="text-left">
                                <u>{t('teacehr_red.otp_err')}</u>
                                
                            </a>{' '}
                            <a className="text-left mx-5">{t('teacehr_red.otp_resend')}</a>
                        </div>
                        <div className="row">
                            <Col md="6">
                                <Button
                                    label={t('teacehr_red.clear')}
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
                                    label={t('teacehr_red.continue')}
                                    btnClass={
                                        otp.length < numInputs
                                            ? 'default w-100'
                                            : 'primary w-100'
                                    }
                                    size="small "
                                    disabled={otp.length < numInputs}
                                    onClick={this.handleSubmit}
                                />
                            </Col>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

// export default StepThree;
export default withTranslation()(StepThree);
