import React from "react";
import "./style.scss";

const SideDrawer = (props) => {
  return (
    <nav className="side-drawer">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Register</a>
        </li>
      </ul>
    </nav>
  );
};
export default SideDrawer;
