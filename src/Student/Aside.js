import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { HiOutlineUserGroup } from 'react-icons/hi';
import DashboardIcon from '../assets/media/DashboardIcon.svg';
import {
    ProSidebar,
    Menu,
    MenuItem,
    // SubMenu,
    SidebarHeader,
    SidebarContent
} from 'react-pro-sidebar';
import {
    FaTh,
    FaThLarge,
    FaBriefcase,
    FaLightbulb,
    // FaShieldVirus,
    // FaQuestionCircle,
    FaBars
} from 'react-icons/fa';

import 'react-pro-sidebar/dist/css/styles.css';
import { useLocation } from 'react-router-dom';
// import Logo from "../../assets/img/Logo.png";
// import Logo from '../assets/media/img/Logo.svg';
import Logo from "../assets/media/tn-brands/UPSHIFT_BLACK.png"; 

import TicketIcon from '../assets/media/ticket.png';
import FaqIcon from '../assets/media/faq.png';
import { KEY, URL } from '../constants/defaultValues';
import { getNormalHeaders } from '../helpers/Utils';
import axios from 'axios';
import { getLanguage } from '../constants/languageOptions';
import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

const Aside = ({ rtl, toggled, handleToggleSidebar }) => {

    const { t } = useTranslation();
    const language = useSelector(state=>state?.studentRegistration?.studentLanguage);


    const location = useLocation();

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false);

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = (val) => {
        //condition checking to change state from true to false and vice versa
        setMenuCollapse(val);
        // menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    const [presurveyStatus, setpresurveyStatus] = useState("");
    const checkPresurvey = ()=>{
        const axiosConfig = getNormalHeaders(KEY.User_API_Key);
        axios
            .get(`${URL.getPreSurveyList}?role=STUDENT?${getLanguage(language)}`, axiosConfig)
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
    useEffect(() => {
        if (
            location.pathname === '/playCourse' ||
            location.pathname === '/admin/add-course'
        ) {
            // document.querySelector(".pro-sidebar").classList.add("collapsed");
            setMenuCollapse(true);
        }
    });
    // console.log("-----57", location.pathname);
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
                    <div className="d-flex logo-section" style={{height:"5rem"}}>
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
                            location.pathname === '/student/pre-servey' &&
                            'sidebar-active'
                        }
                    >
                        <NavLink exact={true} to={'/student/pre-servey'} >
                            
                            {/* <NavLink exact={true} to={'/student/pre-servey'} className={`${setpresurveyStatus ? 'noHover' : ""}`}> */}
                            {/* Pre Survey */}
                            {t('home.pre_survey')}
                        </NavLink>
                    </MenuItem>

                    <MenuItem
                        icon={<FaThLarge />}
                        className={
                            location.pathname === '/dashboard' &&
                            'sidebar-active'
                        }
                        // suffix={<span className="badge red">new1</span>}
                    >
                      
                        <NavLink  exact={true} onClick={handleClick} to={'/dashboard'}>
                            {/* Dashboard */}
                            {t('home.dashboard')}
                        </NavLink>
                       
                        
                    </MenuItem>
                    <MenuItem
                        icon={<FaTh />}
                        className={
                            location.pathname === `/playCourse/${1}` &&
                            'sidebar-active'
                        }
                    >
                        <NavLink exact={true} onClick={handleClick} to={`/playCourse/${1}`}>
                            {/* Courses */}
                            {t('home.courses')}
                        </NavLink>
                    </MenuItem>
                    <MenuItem
                        icon={<FaBriefcase />}
                        className={
                            location.pathname === '/teams' && 'sidebar-active'
                        }
                    >
                        <NavLink exact={true} onClick={handleClick} to={'/teams'}>
                            {/* Teams */}
                            {t('home.teams')}
                        </NavLink>
                    </MenuItem>
                    {/* <MenuItem
                        icon={<FaShieldVirus />}
                        className={
                            location.pathname === '/badges' && 'sidebar-active'
                        }
                    >
                        <NavLink
                            exact={true}
                            onClick={handleClick}
                            to={'/badges'}
                        >
                            Badges
                        </NavLink>
                    </MenuItem> */}
                    <MenuItem
                        icon={<FaLightbulb />}
                        className={
                            location.pathname === '/challenges' && 'sidebar-active'
                        }
                    >
                        <NavLink exact={true} onClick={handleClick} to={'/challenges'}>
                            {/* Challenges */}
                            {t('home.challenges')}
                        </NavLink>
                    </MenuItem>
                    {/* <MenuItem
                        icon={<HiOutlineUserGroup />}
                        className={
                            location.pathname === '/discussionForum' &&
                            'sidebar-active'
                        }
                    >
                        <NavLink exact={true} onClick={handleClick} to={'/discussionForum'}>
                            Discussion Forum
                        </NavLink>
                    </MenuItem> */}
                    {/*  */}
                    <MenuItem
                        icon={
                            <img
                                src={FaqIcon}
                                className="img-fluid"
                                alt="faq"
                            />
                        }
                        className={
                            location.pathname === '/faq' && 'sidebar-active'
                        }
                    >
                        <NavLink exact={true} onClick={handleClick} to={'/faq'}>
                            {/* FAQ */}
                            {t('home.faq')}
                        </NavLink>
                    </MenuItem>
                    {/* <MenuItem
                        icon={
                            <img
                                src={TicketIcon}
                                className="img-fluid"
                                alt="ticket"
                            />
                        }
                        className={
                            location.pathname === '/tickets' && 'sidebar-active'
                        }
                    >
                        <NavLink exact={true} onClick={handleClick} to={'/tickets'}>
                            Tickets
                        </NavLink>
                    </MenuItem> */}
                    {/* post */}
                    <MenuItem
                        icon={
                            <img
                                src={TicketIcon}
                                className="img-fluid"
                                alt="ticket"
                            />
                        }
                        className={
                            location.pathname === '/student/post-servey' && 'sidebar-active'
                        }
                    >
                        <NavLink exact={true}  onClick={handleClick} to={'/student/post-servey'}>
                            {/* PostSurvey */}
                            {t('home.post_survey')}
                        </NavLink>
                    </MenuItem>
                </Menu>
                {/* <Menu iconShape="circle">
                    <MenuItem className="static">
                        {menuCollapse ? '' : <span>GENERAL</span>}
                    </MenuItem>
                    <SubMenu
                        suffix={<span className="badge yellow">2</span>}
                        title="Help"
                        icon={<FaQuestionCircle />}
                        data-element={location.pathname}
                    >
                        <MenuItem
                            className={
                                location.pathname === '/faq' && 'sidebar-active'
                            }
                        >
                            <NavLink exact={true} to={'/faq'}>
                                FAQ
                            </NavLink>
                        </MenuItem>
                        <MenuItem
                            className={
                                location.pathname === '/tickets' &&
                                'sidebar-active'
                            }
                        >
                            <NavLink to={'/tickets'}>Tickets</NavLink>
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
