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
import { FaShieldVirus, FaBars, FaTh } from 'react-icons/fa';

import 'react-pro-sidebar/dist/css/styles.css';
import { useLocation } from 'react-router-dom';
// import Logo from '../assets/media/img/Logo.svg';
import Logo from "../assets/media/tn-brands/UPSHIFT_BLACK.png"; 

import { compareDates, getNormalHeaders, logout } from '../helpers/Utils';
import { KEY, URL } from '../constants/defaultValues';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSchedulesForTeacherAndStudents } from '../redux/schedules/actions';

import { useTranslation } from 'react-i18next';
import { getLanguage } from '../constants/languageOptions';

// import { getCurrentUser, logout } from "../helpers/Utils";


const Aside = ({ rtl, toggled, handleToggleSidebar }) => {
    const { t } = useTranslation();
    const history = useHistory();
    const dispatch = useDispatch();
    const { schedules } = useSelector((state) => state.schedules);
    const language = useSelector(state=>state?.mentors.mentorLanguage);

    useLayoutEffect(() => {
        dispatch(getSchedulesForTeacherAndStudents());
    }, []);
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

    const [presurveyStatus, setpresurveyStatus] = useState('');
    const checkPresurvey = () => {
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        axios
            .get(`${URL.getPreSurveyList}?role=TEACHER?${getLanguage(language)}`, axiosConfig)
            .then((preSurveyRes) => {
                if (preSurveyRes?.status == 200) {
                    setpresurveyStatus(
                        preSurveyRes.data.data[0].dataValues[0].progress
                    );
                }
            })
            .catch((err) => {
                return err.response;
            });
    };
    useLayoutEffect(() => {
        checkPresurvey();
    }, []);
    const handleClick = (e, type) => {
        const typeFilter = type && schedules[0].teacher[type];
        if (presurveyStatus !== 'COMPLETED') e.preventDefault();
        if((presurveyStatus === 'COMPLETED') && compareDates(typeFilter)) e.preventDefault();
    };
    const handleLogout = (e) => {
        logout(history);
        e.preventDefault();
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
                    <div className="d-flex logo-section" style={{height:"5rem"}}>
                        <Link to={'/dashboard'} exact className="d-flex">
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
                                        className="img-fluid img-open w-100"
                                    />
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
                    {/* <MenuItem className="static">
                        {menuCollapse ? '' : <span>MAIN MENU</span>}
                    </MenuItem> */}

                    <MenuItem
                        icon={<img src={DashboardIcon} />}
                        className={
                            location.pathname === '/teacher/pre-servey' &&
                            'sidebar-active'
                        }
                    >
                        <NavLink exact={true} to={'/teacher/pre-servey'}>
                            {t('teacher.pre_survey')}
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
                        <NavLink
                            exact={true}
                            onClick={(e) => handleClick(e, 'dashboard')}
                            to={'/teacher/dashboard'}
                        >
                            {t('teacher.dashboard')}
                        </NavLink>
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
                        <NavLink
                            exact={true}
                            onClick={(e) => handleClick(e, 'course')}
                            to={`/teacher/playvideo/${1}`}
                        >
                            {t('teacher.course')}
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
                            onClick={(e) => handleClick(e, 'teams')}
                            to={'/teacher/teamlist'}
                        >
                            {t('teacher.team')}
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
                            onClick={(e) => handleClick(e, '')}
                        >
                            {' '}
                            {t('teacher.faq')}
                        </NavLink>
                    </MenuItem>
                    <MenuItem
                        icon={<FaShieldVirus />}
                        className={
                            (location.pathname === '/teacher/support-journey' ||
                                location.pathname ===
                                    '/teacher/support-journey/add-ticket') &&
                            'sidebar-active'
                        }
                    >
                        <NavLink
                            exact={true}
                            onClick={(e) => handleClick(e, '')}
                            to={'/teacher/support-journey'}
                            activeClassName="sidebar-active"
                        >
                            {' '}
                            {t('teacher.support')}
                        </NavLink>
                    </MenuItem>
                    {/* post */}

                    <MenuItem
                        icon={<FaShieldVirus />}
                        className={
                            location.pathname === '/teacher/post-servey' &&
                            'sidebar-active'
                        }
                    >
                        <NavLink
                            exact={true}
                            onClick={(e) => handleClick(e, 'post_survery')}
                            to={'/teacher/post-servey'}
                        >
                            {t('teacher.post_survey')}
                        </NavLink>
                    </MenuItem>
                    <MenuItem
                        icon={<FaShieldVirus />}
                        className={
                            location.pathname === '/teacher/my-certificate' &&
                            'sidebar-active'
                        }
                    >
                        <NavLink
                            exact={true}
                            onClick={(e) => handleClick(e, 'certificate')}
                            to={'/teacher/my-certificate'}
                        >
                            {t('teacher.certificate')}
                        </NavLink>
                    </MenuItem>
                    <MenuItem
                        icon={<FaShieldVirus />}
                        className={location.pathname === '' && 'sidebar-active'}
                    >
                        <NavLink exact={true} onClick={handleLogout} to={''}>
                            {t('teacher.logout')}
                        </NavLink>
                    </MenuItem>
                </Menu>
            </SidebarContent>
        </ProSidebar>
    );
};

export default Aside;
