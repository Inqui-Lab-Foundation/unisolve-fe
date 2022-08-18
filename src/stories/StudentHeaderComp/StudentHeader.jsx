import React from "react";
// import PropTypes from "prop-types";
import "./style.scss";
import Logo from "../assets/Logo.png";
import { Row, Col } from "react-bootstrap";
import { InputWithSearch } from "../InputWithSearch/InputWithSearch.stories";
import { VscBell } from "react-icons/vsc";
import { Avatar, Badge } from "antd";
import AvatarImg from "../assets/Avatar.png";
import { DropDownComp } from "../DropdownComp/DropdownComp";

export const StudentHeader = (profileProps) => {
    const headerProps = {
        size: "large",
        placeholder: "Search",
        isLogin: false,
    };
    return (
        <>
            <div className="header-comp sticky-top">
                <Row className="header-container p-3">
                    <Col xs lg="2" className="navbar-search" href="/">
                        <div className="d-flex">
                            <img src={Logo} />
                            <div className="logo-box">
                                <p className="logo-title">Unisolve</p>
                                <p className="logo-state">India</p>
                            </div>
                        </div>
                    </Col>

                    {/* {headerProps.isLogin ? ( */}
                    <>
                        <Col xs={5}>
                            <InputWithSearch {...headerProps} />
                        </Col>
                        <Col>
                            <div className="d-flex profile-section">
                                <Badge status="success" count={1}>
                                    <VscBell />
                                </Badge>

                                <div className="d-flex align-items-center">
                                    <Avatar src={AvatarImg} />

                                    <DropDownComp {...profileProps} />
                                </div>
                            </div>
                        </Col>
                    </>
                    {/* ) : (
            <Col xs={5}>hii</Col> */}
                    {/* )} */}
                </Row>
            </div>
        </>
    );
};

StudentHeader.propTypes = {};

StudentHeader.defaultProps = {};
