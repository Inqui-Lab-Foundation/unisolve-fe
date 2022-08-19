// import React, { useState } from "react";
// import { Row, Col } from "react-bootstrap";
// import { InputWithRadioComp } from "../stories/InputWithRadio/InputWithRadio";
// import { StudentHeaderComp } from "../stories/StudentHeaderComp/StudentHeader.stories";
// import SideMenuBarComp from "../components/SideMenuBarComp";

// const MainPage = () => {
//     const profileProps = {
//         label: "Ritu",
//         options: ["Profile", "Settings", "Logout"],
//         isLogin:true
//       };
//    return (
//     <div className="main-container">
//      <StudentHeaderComp {...profileProps}/>
//       <SideMenuBarComp />

//     </div>
//   );
// };

// export default MainPage;

import React, { useState } from "react";
import Header from "../Header.js";
// import { useIntl } from "react-intl";
import Aside from "../Aside.js";

function MainPage(props) {
    const [rtl] = useState(false);
    const [toggled, setToggled] = useState(false);
    // const intl = useIntl();

    // const handleRtlChange = (checked) => {
    //     setRtl(checked);
    // //setLocale(checked ? "ar" : "en");
    // };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };

    return (
        <div className={`app ${rtl ? "rtl" : ""} ${toggled ? "toggled" : ""}`}>
            <Aside
                rtl={rtl}
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
            />
            <main>
                <Header handleToggleSidebar={handleToggleSidebar} />
                <div className="app-content">{props.children}</div>
            </main>
        </div>
    );
}

export default MainPage;
