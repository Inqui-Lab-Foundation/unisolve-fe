import React, { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import { NavLink } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import CourseIcon from "./../media/CoursesIcon.svg";
import SessionIcon from "./../media/SessionNewsIcon.svg";
import UserIcon from "./../media/UserListIcon.svg";
import DashboardIcon from "./../media/DashboardIcon.svg";
import IdeasIcon from "./../media/IdeasIcon.svg";
import BadgesIcon from "./../media/BadgesIcon.svg";
import ProblemIcon from "./../media/GridIcon.svg";

import TicketIcon from "./../media/ticket.png";
import ReportIcon from "./../media/reports.png";
import LogoutIcon from "./../media/logout.png";
import FaqIcon from "./../media/faq.png";
import SchoolIcon from "./../media/schools.png";

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
    if (location.pathname === "/admin/playvideo") {
      // document.querySelector(".pro-sidebar").classList.add("collapsed");
      setMenuCollapse(true);
    }
  });
  // console.log("-----57", location.pathname);

  return (
    <ProSidebar
      rtl={rtl}
      toggled={toggled}
      breakPoint='md'
      onToggle={handleToggleSidebar}
      collapsed={menuCollapse}
    >
      <SidebarHeader>
        <div className='sidebar-header header-comp sticky-top'>
          <div className='d-flex logo-section'>
            {menuCollapse ? (
              <img src={Logo} alt='logo' className='img-fluid img-close' />
            ) : (
              <>
                <img src={Logo} alt='logo' className='img-fluid img-open' />
                <div className='logo-box my-auto'>
                  <h3 className='logo-title m-0'>Unisolve</h3>
                  {/* <p className="logo-state m-0">India</p> */}
                </div>
              </>
            )}
          </div>
        </div>
        <div className='closemenu'>
          {/* changing menu collapse icon on click */}
          {menuCollapse ? (
            <FaBars onClick={() => menuIconClick(false)} />
          ) : (
            <FaBars onClick={() => menuIconClick(true)} />
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape='circle'>
          <MenuItem className='static'>
            {menuCollapse ? "" : <span>MAIN MENU</span>}
          </MenuItem>
          <MenuItem
            icon={<img src={DashboardIcon} />}
            className={
              location.pathname === "/admin/dashboard" && "sidebar-active"
            }
            // suffix={<span className="badge red">new1</span>}
          >
            <NavLink exact={true} to={"/admin/dashboard"}>
              Dashboard
            </NavLink>
          </MenuItem>
          <MenuItem
            icon={<img src={CourseIcon} />}
            className={
              location.pathname === "/admin/all-courses" && "sidebar-active"
            }
          >
            <NavLink exact={true} to={"/admin/all-courses"}>
              Courses
            </NavLink>
          </MenuItem>
          <MenuItem
            icon={<img src={BadgesIcon} />}
            className={
              location.pathname === "/admin/chalenges" && "sidebar-active"
            }
          >
            <NavLink
              exact={true}
              to={"/admin/chalenges"}
              activeClassName='sidebar-active'
            >
              Challenges
            </NavLink>
          </MenuItem>
          <MenuItem
            icon={<img src={SchoolIcon} className='img-fluid' alt='school' />}
            className={
              location.pathname === "/admin/registered-schools" &&
              "sidebar-active"
            }
          >
            <NavLink
              exact={true}
              to={"/admin/registered-schools"}
              activeClassName='sidebar-active'
            >
              Schools
            </NavLink>
          </MenuItem>
          {/* <MenuItem
            icon={<img src={ProblemIcon} />}
            className={
              location.pathname === "/admin/problem-categories" &&
              "sidebar-active"
            }
          >
            <NavLink exact={true} to={"/admin/problem-categories"}>
              Problem Categories
            </NavLink>
          </MenuItem> */}
          <MenuItem
            icon={<img src={UserIcon} />}
            className={
              location.pathname === "/admin/userlist" && "sidebar-active"
            }
          >
            <NavLink exact={true} to={"/admin/userlist"}>
              Users
            </NavLink>
          </MenuItem>
          <MenuItem
            icon={<img src={BadgesIcon} />}
            className={
              location.pathname === "/admin/badges" && "sidebar-active"
            }
          >
            <NavLink
              exact={true}
              to={"/admin/badges"}
              activeClassName='sidebar-active'
            >
              Badges
            </NavLink>
          </MenuItem>

          <MenuItem
            icon={<img src={FaqIcon} className='img-fluid' alt='faq' />}
            className={location.pathname === "/admin/faq" && "sidebar-active"}
          >
            <NavLink
              exact={true}
              to={"/admin/faq"}
              activeClassName='sidebar-active'
            >
              FAQs
            </NavLink>
          </MenuItem>

          <MenuItem
            icon={<img src={TicketIcon} className='img-fluid' alt='ticket' />}
            className={
              location.pathname === "/admin/tickets" && "sidebar-active"
            }
          >
            <NavLink
              exact={true}
              to={"/admin/tickets"}
              activeClassName='sidebar-active'
            >
              Tickets
            </NavLink>
          </MenuItem>

          {/* <MenuItem
              className={
                location.pathname === "/admin/tickets" && "sidebar-active"
              }
            >
              <NavLink to={"/admin/all-tickets"}>Tickets</NavLink>
            </MenuItem> */}

          {/* <MenuItem
            icon={<img src={IdeasIcon} />}
            className={location.pathname === "/admin/ideas" && "sidebar-active"}
          >
            <NavLink exact={true} to={"/admin/ideas"}>
              Ideas
            </NavLink>
          </MenuItem> */}
          {/* <MenuItem
            icon={<HiOutlineUserGroup />}
            className={
              location.pathname === "/admin/signup" && "sidebar-active"
            }
          >
            <NavLink exact={true} to={"/admin/signup"}>
              Create Student SignUp
            </NavLink>
          </MenuItem> */}
          {/* <SubMenu
            suffix={<span className='badge yellow'>2</span>}
            title='Sessions & News'
            icon={<img src={SessionIcon} />}
            data-element={location.pathname}
          >
            <MenuItem
              className={
                location.pathname === "/admin/sessions" && "sidebar-active"
              }
            >
              <NavLink exact={true} to={"/admin/sessions"}>
                Manage Sessions
              </NavLink>
            </MenuItem>
            <MenuItem
              className={
                location.pathname === "/admin/news" && "sidebar-active"
              }
            >
              <NavLink to={"/admin/news"}>News</NavLink>
            </MenuItem>
          </SubMenu> */}

          <MenuItem
            icon={<img src={ReportIcon} className='img-fluid' alt='report' />}
            className={
              location.pathname === "/admin/reports" && "sidebar-active"
            }
          >
            <NavLink
              exact={true}
              to={"/admin/reports"}
              activeClassName='sidebar-active'
            >
              Reports
            </NavLink>
          </MenuItem>

          <MenuItem
            // icon={<FaQuestionCircle />}
            icon={<img src={LogoutIcon} className='img-fluid' alt='logout' />}
            className={
              location.pathname === "/admin/logout" && "sidebar-active"
            }
          >
            <NavLink
              exact={true}
              to={"/admin/logout"}
              activeClassName='sidebar-active'
            >
              Logout
            </NavLink>
          </MenuItem>
        </Menu>

        {/* <Menu iconShape='circle'>
          <MenuItem className='static'>
            {menuCollapse ? "" : <span>GENERAL</span>}
          </MenuItem>
          <SubMenu
            suffix={<span className='badge yellow'>2</span>}
            title='Help'
            icon={<FaQuestionCircle />}
            data-element={location.pathname}
          >
            <MenuItem
              className={location.pathname === "/admin/faq" && "sidebar-active"}
            >
              <NavLink exact={true} to={"/admin/faq"}>
                Manage FAQ's
              </NavLink>
            </MenuItem>
            <MenuItem
              className={
                location.pathname === "/admin/tickets" && "sidebar-active"
              }
            >
              <NavLink to={"/admin/all-tickets"}>Tickets</NavLink>
            </MenuItem>
          </SubMenu>
        </Menu> */}
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
