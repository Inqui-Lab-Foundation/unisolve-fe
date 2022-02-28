import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { InputWithRadioComp } from "../stories/InputWithRadio/InputWithRadio";
import { StudentHeaderComp } from "../stories/StudentHeaderComp/StudentHeader.stories";
import SideMenuBarComp from "../components/SideMenuBarComp";

const MainPage = () => {
    const profileProps = {
        label: "Ritu",
        options: ["Profile", "Settings", "Logout"],
      };
   return (
    <div className="main-container">
     <StudentHeaderComp {...profileProps}/>
      <SideMenuBarComp />
     
    </div>
  );
};

export default MainPage;
