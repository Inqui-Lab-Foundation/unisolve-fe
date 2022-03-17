import React, { useState } from "react";
import { useIntl } from "react-intl";
import { NavLink } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
  FaTh,
  FaThLarge,
  FaBriefcase,
  FaLightbulb,
  FaShieldVirus,
  FaQuestionCircle,
  FaAngleRight,
} from "react-icons/fa";

import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";
import { useHistory, useLocation } from "react-router-dom";
// import Logo from "../../assets/img/Logo.png";
import Logo from "./assets/img/Logo.svg";
const Aside = ({ rtl, toggled, handleToggleSidebar }) => {
  // const intl = useIntl();
  const history = useHistory();
  const location = useLocation();

  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <ProSidebar
      rtl={rtl}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
      collapsed={menuCollapse}
    >
      <SidebarHeader>
        <div className="sidebar-header header-comp sticky-top py-3">
          <div className="d-flex justify-content-center logo-section">
            {menuCollapse ? (
              <img src={Logo} alt="logo" className="img-fluid img-close" />
            ) : (
              <>
                <img src={Logo} alt="logo" className="img-fluid img-open" />
                <div className="logo-box my-auto">
                  <h3 className="logo-title m-0">Unisolve</h3>
                  <p className="logo-state m-0">India</p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="closemenu" onClick={menuIconClick}>
          {/* changing menu collapse icon on click */}
          {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem>{menuCollapse ? "" : <span>MAIN MENU</span>}</MenuItem>
          <MenuItem
            icon={<FaTh />}
            className={location.pathname === "/dashboard" && "sidebar-active"}
            // suffix={<span className="badge red">new1</span>}
          >
            <NavLink exact to={"/dashboard"}>
              Dashboard
            </NavLink>
          </MenuItem>
          <MenuItem
            icon={<FaThLarge />}
            className={location.pathname === "/courses" && "sidebar-active"}
          >
            <NavLink exact to={"/courses"}>
              Courses
            </NavLink>
          </MenuItem>
          <MenuItem
            icon={<FaBriefcase />}
            className={location.pathname === "/teams" && "sidebar-active"}
          >
            <NavLink exact to={"/teams"}>
              Teams & Mentor
            </NavLink>
          </MenuItem>
          <MenuItem
            icon={<FaShieldVirus />}
            className={location.pathname === "/badges" && "sidebar-active"}
          >
            <NavLink exact to={"/badges"} activeClassName="sidebar-active">
              Badges
            </NavLink>
          </MenuItem>
          <MenuItem
            icon={<FaLightbulb />}
            className={location.pathname === "/ideas" && "sidebar-active"}
          >
            <NavLink exact to={"/ideas"}>
              Ideas
            </NavLink>
          </MenuItem>
          <MenuItem
            icon={<FaLightbulb />}
            className={
              location.pathname === "/notification" && "sidebar-active"
            }
          >
            <NavLink exact to={"/notification"}>
              Notifications
            </NavLink>
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <MenuItem>{menuCollapse ? "" : <span>GENERAL</span>}</MenuItem>
          <SubMenu
            suffix={<span className="badge yellow">2</span>}
            title="Help"
            icon={<FaQuestionCircle />}
            data-element={location.pathname}
          >
            <MenuItem
              className={location.pathname === "/faq" && "sidebar-active"}
            >
              <NavLink exact to={"/faq"}>
                FAQ
              </NavLink>
            </MenuItem>
            <MenuItem
              className={location.pathname === "/tickets" && "sidebar-active"}
            >
              <NavLink exact to={"/tickets"}>
                Tickets
              </NavLink>
            </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      {/* <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="#"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <span> Footer</span>
          </a>
        </div>
      </SidebarFooter> */}
    </ProSidebar>
  );
};

export default Aside;
