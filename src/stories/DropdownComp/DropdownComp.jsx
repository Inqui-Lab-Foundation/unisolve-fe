import React, { useState } from "react";
import "./dropdown.scss";
import PropTypes from "prop-types";

export const DropDownComp = ({
  options,
  backgroundColor,
  size,
  label,
  onChange,
  onBlur,
  values,
  name,
  ...props
}) => {
  return (
    <div className="dropdown studentDropdown">
      <select
        id={name}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        className="single-dropdown"
      >
        <option value="">Select</option>
        {options.map((item,i) => {
          return <option key={i} value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};
DropDownComp.propTypes = {
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
DropDownComp.defaultProps = {
  backgroundColor: null,
  size: "medium",
  onClick: undefined,
  label: "Dropdown",
  options: [
    "Argentina",
    "Austria",
    "Cocos Islands",
    "Kuwait",
    "Sweden",
    "Venezuela",
    "city",
  ],
};
