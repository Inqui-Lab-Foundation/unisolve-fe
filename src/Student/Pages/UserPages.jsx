import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { loadUsersAsync } from "../redux/reducers/users/users.thunk";
import { ImageCardComp } from "../../stories/ImageCard/ImageCard.jsx";
import { FiEye } from "react-icons/fi";
import Nature from "../../assets/media/img/nature.png";
import "./UserPage.scss";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
// import Flag from "react-flag-icon-css";
import { BsGlobe2 } from "react-icons/bs";
import i18next from "i18next";
// import Cookies from "js-cookie";

const UsersPage = () => {
    // const dispatch = useDispatch();
    // const { isLoading, users, errorMessage } = useSelector(
    //     (state) => state.users
    // );

    const { t } = useTranslation();
    const releaseDate = new Date("2022/02/08");
    const timeDifference = new Date() - releaseDate;
    const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const languageOptions = [
        {
            code: "en",
            name: "English",
            country_code: "gb",
        },
        {
            code: "fr",
            name: "Français",
            country_code: "fr",
        },
        {
            code: "ar",
            name: "العربية",
            country_code: "sa",
            dir: "rtl",
        },
    ];
    // const currentLanguageCode = Cookies.get("i18next") || "en";
    // const currentLanguage = languageOptions.find(
    //     (l) => l.code === currentLanguageCode
    // );
    const cardProps = {
        primary: true,
        label: "ImageCardComp",
        imgUrl: Nature,
        title: "How can I improve self care with Ikigai?",
        count: "1,288 students",
        time: "5m",
        icon: FiEye,
    };

    useEffect(() => {
    // dispatcsh(loadUsersAsync());
    }, []);

    return (
        <div className="userPage">
            <div>
                <h2>COURSE CARD</h2>
                <ImageCardComp {...cardProps} />
            </div>
            {/* <div>
        <h1>Dummy User List</h1>
        {isLoading && <h3>....loading</h3>}
        {errorMessage && <h3>{errorMessage}</h3>}
        {users && users.map((user) => <h5 key={user.id}> {user.name}</h5>)}
      </div> */}
            <p>{t("welcome_message")}</p>
            <p>{t("days_since_release", { number_of_days })}</p>
            <div>
                <DropdownButton id="dropdown-basic-button" title={<BsGlobe2 />}>
                    {languageOptions.map((item) => {
                        return (
                            <Dropdown.Item
                                href="#/action-1"
                                onClick={() => i18next.changeLanguage(item.code)}
                                key={item.code}
                            >
                                <span className={`flag-icon flag-icon-${item.country_code}`}>
                                    {" "}
                                    {item.name}
                                </span>
                            </Dropdown.Item>
                        );
                    })}
                </DropdownButton>
            </div>
        </div>
    );
};

export default UsersPage;
