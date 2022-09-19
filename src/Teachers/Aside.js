import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import DashboardIcon from '../assets/media/DashboardIcon.svg';

import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarContent
} from 'react-pro-sidebar';
import { FaShieldVirus, FaBars,FaTh, } from 'react-icons/fa';

import 'react-pro-sidebar/dist/css/styles.css';
import { useLocation } from 'react-router-dom';
// import CourseIcon from '../assets/media/CoursesIcon.svg';
// import Logo from "../../assets/img/Logo.png";
import Logo from '../assets/media/img/Logo.svg';
import { getNormalHeaders } from '../helpers/Utils';
import { KEY, URL } from '../constants/defaultValues';
import axios from 'axios';
const Aside = ({ rtl, toggled, handleToggleSidebar }) => {
    // const intl = useIntl();

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
        if (location.pathname === '/admin/playvideo') {
            // document.querySelector(".pro-sidebar").classList.add("collapsed");
            setMenuCollapse(true);
        }
    });

    const [presurveyStatus, setpresurveyStatus] = useState("");
    const checkPresurvey = ()=>{
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        axios
            .get(`${URL.getPreSurveyList}?role=TEACHER`, axiosConfig)
            .then((preSurveyRes) => {
                if (preSurveyRes?.status == 200) {
                    setpresurveyStatus(preSurveyRes.data.data[0].dataValues[0].progress);
                }
            })
            .catch((err) => {
                return err.response;
            });
    };
    useLayoutEffect(() => {
        checkPresurvey();
    }, []);
    const handleClick = (e) => {
        if(presurveyStatus !== "COMPLETED") e.preventDefault();
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
                <div className="sidebar-header header-comp sticky-top">
                    <div className="d-flex logo-section">
                        <Link to={"/dashboard"} exact className='d-flex'>
                            {menuCollapse ? (
                                <img
                                    src={Logo}
                                    alt="logo"
                                    className="img-fluid img-close"
                                />
                            ) : (
                                <>
                                    <img
                                        src={Logo}
                                        alt="logo"
                                        className="img-fluid img-open"
                                    />
                                    <div className="logo-box my-auto">
                                        <h3 className="logo-title m-0">Unisolve</h3>
                                        {/* <p className="logo-state m-0">India</p> */}
                                    </div>
                                </>
                            )}
                        </Link>
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
                        {menuCollapse ? '' : <span>MAIN MENU</span>}
                    </MenuItem>

                    <MenuItem
                        icon={<img src={DashboardIcon} />}
                        className={
                            location.pathname === '/teacher/pre-servey' &&
                            'sidebar-active'
                        }
                    >
                        <NavLink exact={true} to={'/teacher/pre-servey'}>
                            Pre Survey
                        </NavLink>
                    </MenuItem>

                    <MenuItem
                        icon={<img src={DashboardIcon} />}
                        className={
                            location.pathname === '/teacher/dashboard' &&
                            'sidebar-active'
                        }
                        // suffix={<span className="badge red">new1</span>}
                    >
                        <NavLink exact={true} onClick={handleClick} to={'/teacher/dashboard'}>
                            Dashboard
                        </NavLink>s
                    </MenuItem>
                    {/* <MenuItem
            icon={<img src={CourseIcon} />}
            className={
              location.pathname === "/admin/all-courses" && "sidebar-active"
            }
          >
            <NavLink exact={true} to={"/admin/all-courses"}>
              Courses
            </NavLink>
          </MenuItem> */}
                    {/* <MenuItem
            icon={<FaShieldVirus />}
            className={
              location.pathname === "/admin/registered-schools" &&
              "sidebar-active"
            }
          >
            <NavLink
              exact={true}
              to={"/admin/registered-schools"}
              activeClassName="sidebar-active"
            >
              Schools Registered
            </NavLink>
          </MenuItem> */}

                    <MenuItem
                        icon={<FaTh />}
                        className={
                            location.pathname === `/teacher/playvideo/${1}` &&
                            'sidebar-active'
                        }
                    >
                        <NavLink exact={true} onClick={handleClick} to={`/teacher/playvideo/${1}`}>
                            Courses
                        </NavLink>
                    </MenuItem>

                    <MenuItem
                        icon={<FaShieldVirus />}
                        className={
                            location.pathname === '/teacher/teamlist' &&
                            'sidebar-active'
                        }
                    >
                        <NavLink
                            exact={true}
                            onClick={handleClick}
                            to={'/teacher/teamlist'}
                        >
                            Teams
                        </NavLink>
                    </MenuItem>

                    <MenuItem
                        icon={<FaShieldVirus />}
                        className={
                            location.pathname === '/teacher/faq' &&
                            'sidebar-active'
                        }
                    >
                        <NavLink
                            exact={true}
                            to={'/teacher/faq'}
                            onClick={handleClick}
                        >
                            {' '}
                            Manage FAQ&apos;s
                        </NavLink>
                    </MenuItem>
                    {/* <MenuItem
                        icon={<FaShieldVirus />}
                        className={
                            (location.pathname === '/teacher/support-journey' || location.pathname === '/teacher/support-journey/add-ticket' )  &&
                            'sidebar-active'
                        }
                    >
                        <NavLink
                            exact={true}
                            onClick={handleClick}
                            to={'/teacher/support-journey'}
                            activeClassName="sidebar-active"
                        >
                            {' '}
                            Support Journey
                        </NavLink>
                    </MenuItem> */}
                </Menu>
            </SidebarContent>
        </ProSidebar>
    );
};

export default Aside;
