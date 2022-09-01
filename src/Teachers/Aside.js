import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '../assets/media/DashboardIcon.svg';

import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarContent
} from 'react-pro-sidebar';
import { FaShieldVirus, FaBars } from 'react-icons/fa';

import 'react-pro-sidebar/dist/css/styles.css';
import { useLocation } from 'react-router-dom';
// import Logo from "../../assets/img/Logo.png";
import Logo from '../assets/media/img/Logo.svg';
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
                            Pre Servey
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
                        <NavLink exact={true} to={'/teacher/dashboard'}>
                            Dashboard
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
                            to={'/teacher/teamlist'}
                            activeClassName="sidebar-active"
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
                            activeClassName="sidebar-active"
                        >
                            {' '}
                            Manage FAQ&apos;s
                        </NavLink>
                    </MenuItem>
                </Menu>
            </SidebarContent>
        </ProSidebar>
    );
};

export default Aside;
