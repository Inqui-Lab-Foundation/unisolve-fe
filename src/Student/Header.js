import React from 'react';
import './Header.scss';
import { FaBars } from 'react-icons/fa';
import { Row, Col, Navbar } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { CommonDropDownComp } from '../stories/CommonDropdown/CommonDropdownComp.jsx';
// import LanguageSelectorComp from '../components/LanguageSelectorComp';

import { VscBell } from 'react-icons/vsc';
import AvatarImg from '../assets/media/img/Avatar.png';

import { InputWithSearch } from '../stories/InputWithSearch/InputWithSearch.stories.jsx';
import { Badge } from 'antd';
import {getCurrentUser, logout} from "../helpers/Utils"; 
import { useTranslation } from 'react-i18next';

const Header = (props) => {
    const { t } = useTranslation();
    const history = useHistory();
    const currentUser = getCurrentUser("current_user");
    const profileOpt = {
        options: [
            // { name: 'Home 123', path: '/dashboard' },
            { name: 'My Profile', path: '/my-profile' },
            // { name: 'My Settings', path: '/settings' },
            { name: "Logout", path: "", onClick: () => logout(history, t) },
        ],
        name: currentUser.data[0].full_name,
        img: AvatarImg
    };
    const notifyOpt = {
        options: [
            { name: 'You have a new Notification', path: '/notification' }
        ],
        Icon: VscBell
    };

    // const [selectedOption, setSelectedOption] = useState('');
    // const option = JSON.parse(localStorage.getItem("headerOption"));
    const headerProps = {
        size: 'large',
        placeholder: 'Search',
        isLogin: false
    };
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);

    // const handleMenu = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    window.onunload = function () {
        localStorage.setItem('headerOption', JSON.stringify('Home'));
    };

    // const handleSelect = async (e) => {
    //     console.log('============', e.target.value);
    //     localStorage.setItem('headerOption', JSON.stringify(e.target.value));
    //     const responce = await e.target.value;
    //     console.log('=====responce=======', responce);
    //     setSelectedOption(responce);
    //     switch (e.target.value) {
    //         case 'Home':
    //             history.push('/dashboard');
    //             break;
    //         case 'My Profile':
    //             history.push('/my-profile');
    //             break;
    //         case 'My Settings':
    //             history.push('/settings');
    //             break;
    //         case 'Logout':
    //             history.push('/logout');
    //             break;
    //         default:
    //     }
    // };
    return (
        <header>
            <div className="header-comp sticky-top py-3">
                <div className="header-container">
                    <div className="tollbar">
                        <div
                            className={'btn-toggle dfdf'}
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
                                    <Badge
                                        status="success"
                                        count={1}
                                        className="notify-sec"
                                    >
                                        <CommonDropDownComp {...notifyOpt} />
                                        {/* <NavLink exact to={"/notification"}>
                      <VscBell />
                    </NavLink> */}
                                    </Badge>

                                    <div className="d-flex align-items-center profile">
                                        <CommonDropDownComp {...profileOpt} />
                                        <span className="common-language-selc">
                                            {/* <LanguageSelectorComp /> */}
                                        </span>
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
