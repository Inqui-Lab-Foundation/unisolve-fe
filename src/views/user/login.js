import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { loadUsersAsync } from "../redux/reducers/users/users.thunk";
import { ImageCardComp } from "../../stories/ImageCard/ImageCard";
import { FiEye } from "react-icons/fi";
import Nature from "../../assets/img/nature.png";
// import "./UserPage.scss";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Flag from "react-flag-icon-css";
import { BsGlobe2 } from "react-icons/bs";
import i18next from "i18next";
import Cookies from "js-cookie";

const Login = () => {
  const cardProps = {
    primary: true,
    label: "ImageCardComp",
    imgUrl: Nature,
    title: "How can I improve self care with Ikigai?",
    count: "1,288 students",
    time: "5m",
    icon: FiEye,
  };

  return (
    <div className="userPage">
      <div>
        <h2>COURSE CARD</h2>
        <ImageCardComp {...cardProps} />
      </div>
    </div>
  );
};

export default Login;
