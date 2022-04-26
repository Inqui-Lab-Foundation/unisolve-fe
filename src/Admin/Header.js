import React from "react";
import "./Header.scss";
import { FaBars } from "react-icons/fa";
import { Row, Col, Navbar, NavbarBrand, NavItem } from "reactstrap";

import { CommonDropDownComp } from "../stories/CommonDropdown/CommonDropdownComp";

import { VscBell } from "react-icons/vsc";
import AvatarImg from "../assets/img/Avatar.png";

import { InputWithSearch } from "../stories/InputWithSearch/InputWithSearch.stories";
import { Badge } from "antd";

const Header = (props, profileProps) => {

  const profileOpt = {
    options: [
      { name: "Home", path: "/admin/dashboard" },
      { name: "My Profile", path: "/admin/my-profile" },
      { name: "My Settings", path: "/admin/settings" },
      { name: "Logout", path: "/admin/logout" },
    ],
    name: "Ritu",
    img: AvatarImg,
  };
  const notifyOpt = {
    options: [
      { name: "You have a new Notification", path: "/admin/notifications" },
    ],
    Icon: VscBell,
  };

  const headerProps = {
    size: "large",
    placeholder: "Search",
    isLogin: false,
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  window.onunload = function () {
    localStorage.setItem("headerOption", JSON.stringify("Home"));
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
                  <Badge status="success" count={1} className="notify-sec">
                  <CommonDropDownComp {...notifyOpt} />
                   
                  </Badge>

                  <div className="d-flex align-items-center profile">
                    <CommonDropDownComp {...profileOpt} />
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
