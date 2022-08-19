import React, { useEffect } from "react";

import { FaBars } from "react-icons/fa";
import { Row, Col, Navbar, NavbarBrand, NavItem } from "reactstrap";

import { CommonDropDownComp } from "../stories/CommonDropdown/CommonDropdownComp";

import { VscBell } from "react-icons/vsc";
import AvatarImg from "../assets/media/img/Avatar.png";

import { InputWithSearch } from "../stories/InputWithSearch/InputWithSearch.stories";
import { Badge } from "antd";
import { getAdminNotificationsList } from "../redux/actions";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentUser, logout } from "../helpers/Utils";

const Header = (props, profileProps) => {
  const history = useHistory();
  const currentUser = getCurrentUser("current_user");
  const MINUTE_MS = 30000;
  const profileOpt = {
    options: [
      // { name: "Home", path: "/teacher/dashboard" },
      // { name: "My Profile", path: "/teacher/my-profile" },
      // { name: "My Settings", path: "/teacher/settings" },
      { name: "Logout", path: "", onClick: () => logout(history) },
    ],
    name: currentUser.data[0].name,
    img: AvatarImg,
  };
  const notifyOpt = {
    options: [
      {
        name: "You have a new Notification",
        path: "/admin/notifications",
        data: props.notificationsList.length > 0 ? props.notificationsList : [],
      },
    ],
    Icon: VscBell,
  };

  const headerProps = {
    size: "large",
    placeholder: "Search",
    isLogin: false,
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  window.onunload = function () {
    localStorage.setItem("headerOption", JSON.stringify("Home"));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("Logs every minute");
      props.getAdminNotificationsListActions(history);
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);
  // console.log(
  //   props.notificationsList,
  //   "=============",
  //   props.NotificationCount
  // );
  return (
    <header>
      <div className="header-comp sticky-top py-3">
        <div className="header-container">
          <div className="tollbar">
            <div
              className={`btn-toggle dfdf`}
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
                    count={props.NotificationCount}
                    className="notify-sec"
                  >
                    <CommonDropDownComp {...notifyOpt} />
                  </Badge>

                  <div className="d-flex align-items-center profile">
                    <CommonDropDownComp {...profileOpt} />
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

const mapStateToProps = ({ adminNotifications }) => {
  const { notificationsList, NotificationCount } = adminNotifications;
  return { notificationsList, NotificationCount };
};

export default connect(mapStateToProps, {
  getAdminNotificationsListActions: getAdminNotificationsList,
})(Header);
// export default Header;
