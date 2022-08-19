import "./SignUp.scss";
import React from "react";
import { Row, Col, NavLink } from "reactstrap";
// import UsersPage from "./UserPages";

import forgotpassword from "../../assets/media/forgot-password.svg";

const PasswordEmailConfirmation = () => {
    return (
        <React.Fragment>
            <div className='PasswordConfirmation position-relative'>
                {/* <StudentHeader className="header-comp" /> */}
                <div className='container-fluid   Login vh-100'>
                    <Row className=' my-auto h-100'>
                        <Col
                            xs={12}
                            sm={12}
                            md={6}
                            xl={5}
                            className='aside  my-auto  mobile_tab-hide'
                        >
                            <figure className='mx-5'>
                                <img
                                    src={forgotpassword}
                                    alt='forgotpassword'
                                    className='img-fluid '
                                />
                            </figure>
                        </Col>
                        <Col xs={12} sm={12} md={6} xl={7} className='article my-auto'>
                            <Row className='mb-0'>
                                <Col xs={12} sm={12} md={10} xl={8}>
                                    <h4 className=' mb-5'>Check email for reset link</h4>
                                    <span className=' sub mt-2  my-5 '>
                    An email has been sent to <b>vinodraichur004@gmail.com</b>.
                    Check the email inbox account, and click the reset link
                    provided.
                                    </span>
                                    <p className='d-flex green my-5'>
                    Reset link will become invalid in 59:36.
                                    </p>
                                    <p className='d-flex'>
                                        <NavLink className='my-auto  p-0 blue'>
                      Didn’t reveive an email?
                                        </NavLink>
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PasswordEmailConfirmation;
