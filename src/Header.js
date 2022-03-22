import React, { Component, useEffect, useState, useMemo } from "react";
import { FaBars } from "react-icons/fa";
import { Row, Col, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";
import { VscBell } from "react-icons/vsc";
import AvatarImg from "./assets/img/Avatar.png";

import { InputWithSearch } from "./stories/InputWithSearch/InputWithSearch.stories";
import { DropDownComp } from "./stories/DropdownComp/DropdownComp";
import { Avatar, Badge } from "antd";

const Header = (props, profileProps) => {
  const history = useHistory();
  const headerOptions = ["Home", "My Profile", "My Settings", "Logout"];
  const [selectedOption, setSelectedOption] = useState("");
  const option = JSON.parse(localStorage.getItem("headerOption"));
  const headerProps = {
    size: "large",
    placeholder: "Search",
    isLogin: false,
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  window.onunload = function () {
    localStorage.setItem("headerOption", JSON.stringify("Home"));
  };

  const handleSelect = async (e) => {
    console.log("============", e.target.value);
    localStorage.setItem("headerOption", JSON.stringify(e.target.value));
    const responce = await e.target.value;
    console.log("=====responce=======", responce);
    setSelectedOption(responce);
    switch (e.target.value) {
      case "Home":
        history.push("/dashboard");
        break;
      case "My Profile":
        history.push("/my-profile");
        break;
      case "My Settings":
        history.push("/settings");
        break;
      case "Logout":
        history.push("/logout");
        break;
      default:
    }
  };
  return (
    <header>
      <div className="header-comp sticky-top py-3">
        <div className="header-container">
          <div className="tollbar">
            <div
              className={`btn-toggle dfdf`}
              onClick={() => props.handleToggleSidebar(true)}
            >
              <FaBars />
            </div>
            <Navbar>
              <Row className="justify-content-between w-100">
                <Col md={6}>
                  <InputWithSearch {...headerProps} />
                </Col>
                <Col md={6} className="d-flex profile-section">
                  <Badge status="success" count={1}>
                    <NavLink exact to={"/notification"}>
                      <VscBell />
                    </NavLink>
                  </Badge>

                  <div className="d-flex align-items-center">
                    {/* <NavLink exact to={"/my-profile"}> */}
                    <Avatar src={AvatarImg} />
                    {/* </NavLink> */}
                    <DropDownComp
                      // label={"Home"}
                      options={headerOptions}
                      value={option}
                      onChange={(e) => handleSelect(e)}
                      // onChange={setSelectedOption}
                    />
                  </div>
                </Col>
              </Row>
            </Navbar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
