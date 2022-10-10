import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './style.scss';
import { BsChevronDown } from 'react-icons/bs';
import { HiOutlineUserGroup } from 'react-icons/hi';
import {
    FaTh,
    FaThLarge,
    FaBriefcase,
    FaLightbulb,
    FaShieldVirus,
    FaQuestionCircle,
} from 'react-icons/fa';

const items = [
    {
        path: 'admin/dashboard',
        text: 'Dashboard',
        icon: FaTh,
    },
    {
        path: '/admin/all-courses',
        text: 'Courses',
        icon: FaThLarge,
    },
    {
        path: '/admin/registered-schools',
        text: 'Schools Registered',
        icon: FaBriefcase,
    },
    {
        path: '/admin/problem-categories',
        text: 'Problem Categories',
        icon: FaShieldVirus,
    },
    {
        path: '/admin/userlist',
        text: 'User List',
        icon: FaLightbulb,
    },
    {
        path: '/admin/badges',
        text: 'Badges',
        icon: HiOutlineUserGroup,
    },
    {
        path: '/admin/ideas',
        text: 'Ideas',
        icon: HiOutlineUserGroup,
    },
];
const generalItems = [
    {
        path: '/faq',
        text: 'FAQ',
    },
    {
        path: '/tickets',
        text: 'Tickets',
    },
];

function Menu(props) {
    const [helpActive, setHelpActive] = useState(false);
    const handleHelpActive = () => {
        if (!helpActive) {
            setHelpActive(true);
        } else {
            setHelpActive(false);
        }
    };
    function handleClick(path) {
        props.history.push(path);
    }

    return (
        <React.Fragment>
            <div className='side-menus'>
                {/* <p className='menu-title'>MAIN MENU</p> */}
                <ul className='menu pb-5'>
                    {items.map((item) => (
                        <li
                            key={item.path}
                            onClick={handleClick.bind(null, item.path)}
                            className={
                                props.location.pathname === item.path
                                    ? 'menu__item menu__item--active'
                                    : 'menu__item'
                            }
                        >
                            <item.icon /> <Link to={item.path}>{item.text}</Link>
                        </li>
                    ))}
                </ul>
                <p className='menu-title mt-5'>GENERAL</p>
                <ul className='menu pb-5'>
                    <li className='menu__item' onClick={handleHelpActive}>
                        <FaQuestionCircle /> <a>Help</a>
                        <BsChevronDown className='arrow-right' />
                    </li>
                    {helpActive
                        ? generalItems.map((item) => (
                            <li
                                key={item.path}
                                onClick={handleClick.bind(null, item.path)}
                                className={
                                    props.location.pathname === item.path
                                        ? 'menu__item menu__item--active help-submenu'
                                        : 'menu__item ml-2 help-submenu'
                                }
                            >
                                <Link to={item.path}>{item.text}</Link>
                            </li>
                        ))
                        : ''}
                </ul>
            </div>
            {/* <ToggleButton /> */}
        </React.Fragment>
    );
}

export default withRouter(Menu);
