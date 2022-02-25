import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './style.scss';
import {FaTh,FaThLarge,FaBriefcase,FaLightbulb,FaShieldVirus,FaQuestionCircle,FaAngleRight} from "react-icons/fa";
const items = [
    
    {
        path: '/dashboard',
        text: 'Dashboard',
        icon:FaTh
    },
    {
        path: '/courses',
        text: 'Courses',
        icon:FaThLarge
    },
    {
        path: '/teams',
        text: 'Teams & Mentor',
        icon:FaBriefcase
    },
    {
        path: '/badges',
        text: 'Badges',
        icon:FaShieldVirus
    }, {
        path: '/ideas',
        text: 'Ideas',
        icon:FaLightbulb
    }
];
const generalItems = [
    
    {
        path: '/help',
        text: 'Help',
        icon:FaQuestionCircle
    },
    
];

function Menu(props) {
    function handleClick(path) {
        props.history.push(path);
    }

    return (
        <div className='side-menus'>
        <p className='menu-title'>MAIN MENU</p>
        <ul className="menu pb-5">
            {items.map(item => (
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
        <ul className="menu pb-5">
            {generalItems.map(item => (
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
                   <FaAngleRight className='arrow-right'/>
                   
                </li>
            ))}
        </ul>
        </div>
    );
}

export default withRouter(Menu);