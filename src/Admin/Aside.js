import React, { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import { NavLink } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import CourseIcon from './../media/CoursesIcon.svg';
import SessionIcon from './../media/SessionNewsIcon.svg';
import UserIcon from './../media/UserListIcon.svg';
import DashboardIcon from './../media/DashboardIcon.svg';
import IdeasIcon from './../media/IdeasIcon.svg';
import BadgesIcon from './../media/BadgesIcon.svg';
import ProblemIcon from './../media/GridIcon.svg';

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
  FaTh,
  FaThLarge,
  FaBriefcase,
  FaLightbulb,
  FaShieldVirus,
  FaQuestionCircle,
  FaAngleRight,
  FaBars,
} from "react-icons/fa";

import "react-pro-sidebar/dist/css/styles.css";
import { useHistory, useLocation } from "react-router-dom";
// import Logo from "../../assets/img/Logo.png";
import Logo from "../assets/img/Logo.svg";
const Aside = ({ rtl, toggled, handleToggleSidebar }) => {
  // const intl = useIntl();
  const history = useHistory();
  const location = useLocation();

  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = (val) => {
    //condition checking to change state from true to false and vice versa
    setMenuCollapse(val);
    // menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  useEffect(() => {
    if (location.pathname === "/playCourse") {
      // document.querySelector(".pro-sidebar").classList.add("collapsed");
      setMenuCollapse(true);
    }
  });
  // console.log("-----57", location.pathname);

  return (
    <ProSidebar
      rtl={rtl}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
      collapsed={menuCollapse}
    >
      <SidebarHeader>
        <div className="sidebar-header header-comp sticky-top">
          <div className="d-flex logo-section">
            {menuCollapse ? (
              <img src={Logo} alt="logo" className="img-fluid img-close" />
            ) : (
              <>
                <img src={Logo} alt="logo" className="img-fluid img-open" />
                <div className="logo-box my-auto">
                  <h3 className="logo-title m-0">Unisolve</h3>
                  {/* <p className="logo-state m-0">India</p> */}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="closemenu">
          {/* changing menu collapse icon on click */}
          {menuCollapse ? (
            <FaBars onClick={() => menuIconClick(false)} />
          ) : (
            <FaBars onClick={() => menuIconClick(true)} />
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem className="static">
            {menuCollapse ? "" : <span>MAIN MENU</span>}
          </MenuItem>
          <MenuItem
             icon={<img src={DashboardIcon} />}
            className={location.pathname === "/admin/dashboard" && "sidebar-active"}
            // suffix={<span className="badge red">new1</span>}
          >
            <NavLink exact={true} to={"/admin/dashboard"}>
              Dashboard
            </NavLink>
          </MenuItem>
          <MenuItem
            icon={<img src={CourseIcon} />}
            className={location.pathname === "/admin/all-courses" && "sidebar-active"}
          >
            <NavLink exact={true} to={"/admin/all-courses"}>
              Courses
            </NavLink>
          </MenuItem>
          <MenuItem
             icon={<img src={ProblemIcon} />}
            className={location.pathname === "/teams" && "sidebar-active"}
          >
            <NavLink exact={true} to={"/teams"}>
            Problem Categories 
            </NavLink>
          </MenuItem>
          <MenuItem
            icon={<img src={UserIcon} />}
            className={location.pathname === "/teams" && "sidebar-active"}
          >
            <NavLink exact={true} to={"/teams"}>
            User List
            </NavLink>
          </MenuItem>
          <MenuItem
             icon={<img src={BadgesIcon} />}
            className={location.pathname === "/admin/badges" && "sidebar-active"}
          >
            <NavLink exact={true} to={"/admin/badges"} activeClassName="sidebar-active">
              Badges
            </NavLink>
          </MenuItem>
          <MenuItem
             icon={<img src={IdeasIcon} />}
            className={location.pathname === "/admin/ideas" && "sidebar-active"}
          >
            <NavLink exact={true} to={"/admin/ideas"}>
              Ideas
            </NavLink>
          </MenuItem>
          {/* <MenuItem
            icon={<HiOutlineUserGroup />}
            className={
              location.pathname === "/discussionForum" && "sidebar-active"
            }
          >
            <NavLink exact={true} to={"/discussionForum"}>
              Discussion Forum
            </NavLink>
          </MenuItem> */}
          <SubMenu
            suffix={<span className="badge yellow">2</span>}
            title="Sessions & News"
  
            icon={<img src={SessionIcon} />}
            data-element={location.pathname}
          >
            <MenuItem
              className={location.pathname === "/admin/faq" && "sidebar-active"}
            >
              <NavLink exact={true} to={"/admin/faq"}>
              Manage Sessions
              </NavLink>
            </MenuItem>
            <MenuItem
              className={location.pathname === "/admin/tickets" && "sidebar-active"}
            >
              <NavLink  to={"/admin/tickets"}>
              News
              </NavLink>
            </MenuItem>
          </SubMenu>
        </Menu>
      
        <Menu iconShape="circle">
          <MenuItem className="static">
            {menuCollapse ? "" : <span>GENERAL</span>}
          </MenuItem>
          <SubMenu
            suffix={<span className="badge yellow">2</span>}
            title="Help"
            icon={<FaQuestionCircle />}
            data-element={location.pathname}
          >
            <MenuItem
              className={location.pathname === "/admin/faq" && "sidebar-active"}
            >
              <NavLink exact={true} to={"/admin/faq"}>
                FAQ
              </NavLink>
            </MenuItem>
            <MenuItem
              className={location.pathname === "/admin/tickets" && "sidebar-active"}
            >
              <NavLink  to={"/admin/tickets"}>
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
