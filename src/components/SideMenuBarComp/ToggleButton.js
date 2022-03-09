import React, { useState } from "react";
import SideDrawrer from "./SideDrawer";
import "./style.scss";

const ToggleButton = (props) => {
  const [change, setChange] = useState(true);
  return (
    <div>
      <button className="toggle-button" onClick={() => setChange(!change)}>
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
      </button>
      {change ? <SideDrawrer /> : <h1>A Computer Science Portal for Geeks</h1>}
    </div>
  );
};
export default ToggleButton;
