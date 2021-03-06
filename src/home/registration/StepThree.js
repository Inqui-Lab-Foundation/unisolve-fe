import React from "react";
import { Col } from "react-bootstrap";
import { Label } from "reactstrap";
import { Button } from "../../stories/Button";
import OtpInput from "react-otp-input-rc-17";
import { FaPencilAlt } from "react-icons/fa";

class StepThree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      otp: "",
      numInputs: 6,
      separator: "-",
      isDisabled: false,
      hasErrored: false,
      isInputNum: true,
      isInputSecure: false,
      minLength: 0,
      maxLength: 40,
      placeholder: "",
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
    this.setState({ otp: "" });
  };

  handleCheck = (e) => {
    const { name } = e.target;
    this.setState((prevState) => ({ [name]: !prevState[name] }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(this.state.otp);
  };

  maskedPhoneNumber = (number) => {
    const str = number + "";
    const last = str.slice(-3);
    const first = str.slice(0, 2);
    const str1 = first.padEnd(5, "*");
    const str2 = last.padStart(6, "*");
    return str1 + str2;
    // return last.padStart(3, '*').padEnd(4, '*')
    // return last.padStart(str.length, "*");
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
      minLength,
      maxLength,
      placeholder,
    } = this.state;

    return (
      <div className='container'>
        <div className='view'>
          <Col className='form-group pt-3' md={12}>
            <Label className='mb-2 '>
              OTP has been sent to {this.maskedPhoneNumber(9885524320)}
              <span
                className='mx-3'
                style={{
                  color: "#1890ff",
                  fontSize: "1.6rem",
                  display: "inline-flex",
                  cursor: "pointer",
                }}
                onClick={this.goToPrev}
              >
                <FaPencilAlt />
              </span>
            </Label>
          </Col>
          <form onSubmit={this.handleSubmit}>
            <div className='d-flex justify-content-center my-5'>
              <OtpInput
                numInputs={numInputs}
                isDisabled={isDisabled}
                hasErrored={hasErrored}
                errorStyle='error'
                onChange={this.handleOtpChange}
                separator={<span>{separator}</span>}
                isInputNum={isInputNum}
                isInputSecure={isInputSecure}
                shouldAutoFocus
                value={otp}
                placeholder={placeholder}
                inputStyle={{
                  border: "1px solid var(--color-grey-light-3)",
                  borderRadius: "8px",
                  width: "5.4rem",
                  height: "5.4rem",
                  fontSize: "2.2rem",
                  color: "#000",
                  fontWeight: "400",
                  caretColor: "blue",
                }}
                focusStyle={{
                  border: "1px solid #CFD3DB",
                  outline: "none",
                }}
              />
            </div>
            <div className='d-flex justify-content-center my-5'>
              <a className='text-left'>
                <u>Didn't recieve OTP</u>
              </a>{" "}
              <a className='text-left mx-5'>Resend OTP</a>
            </div>
            <div className='row'>
              <Col md='6'>
                <Button
                  label='CLEAR'
                  btnClass={otp.length < 1 ? "default w-100" : "primary w-100"}
                  size='small '
                  disabled={isDisabled || otp.trim() === ""}
                  onClick={this.clearOtp}
                />
              </Col>

              <Col md='6'>
                <Button
                  label='VERIFY'
                  btnClass={
                    otp.length < numInputs ? "default w-100" : "primary w-100"
                  }
                  size='small '
                  disabled={otp.length < numInputs}
                  onClick={this.handleClick}
                />
              </Col>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default StepThree;
