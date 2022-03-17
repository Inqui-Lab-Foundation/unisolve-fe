import React from "react";
import { FaBars } from "react-icons/fa";
import { Row, Col, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
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
  const headerProps = {
    size: "large",
    placeholder: "Search",
    isLogin: false,
  };
  // const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
                    <NavLink exact to={"/my-profile"}>
                      <Avatar src={AvatarImg} />
                    </NavLink>
                    <DropDownComp {...profileProps} />
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
