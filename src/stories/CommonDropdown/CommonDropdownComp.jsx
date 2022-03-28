import React, { useState } from "react";
import "./commonDropdown.scss";
import PropTypes from "prop-types";
import { BsFilter } from "react-icons/bs";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CommonDropDownComp = ({
  options,
  backgroundColor,
  size,
  label,
  onChange,
  onBlur,
  values,
  value,
  name,
  Icon,
  img,
  className,
  ...props
}) => {
  return (
    // <DropdownButton id="common-dropdown-btn" title={name}>
    //   {options.map((item, i) => {
    //     return (
    //       <Dropdown.Item
    //         id={name}
    //         key={i}
    //         href="#/action-1"
    //         onChange={onChange}
    //         label={label}
    //         value={value}
    //       >
    //         <span> {item}</span>
    //       </Dropdown.Item>
    //     );
    //   })}
    // </DropdownButton>
    <Dropdown className="custom-dropdown">
      <Dropdown.Toggle variant="default" id="dropdown-basic">
        {img ? <img src={img} /> : Icon ? <Icon /> : ""} {name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((item, i) => {
          return (
            <Dropdown.Item key={i}>
              <Link exact to={item.path}>
                {item.name}
              </Link>
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
CommonDropDownComp.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  // SingleSelectDropdown: PropTypes.bool,
  /**
   * What background color to use
   */
  // backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};
CommonDropDownComp.defaultProps = {
  backgroundColor: null,
  size: "medium",
  onClick: undefined,
  label: "Profile",
  options: [{ name: "Settings" }, { name: "Home" }],
};
