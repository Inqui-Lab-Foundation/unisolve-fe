import React, { useState } from "react";
import "./dropdownComp.scss";
import PropTypes from "prop-types";
import { BsFilter } from "react-icons/bs";
import { FormGroup, Label, Input } from "reactstrap";

export const DropDownComp = ({
  options,
  backgroundColor,
  size,
  label,
  onChange,
  onClick,
  onBlur,
  values,
  value,
  name,
  Icon,
  className,
  ...props
}) => {
  return (
    <div>
      {/* <Label for="exampleSelect">Select</Label> */}
      <select value={value} onChange={onChange}>
        {options.map((state) => {
          console.log(state);
          return <option value={state}>{state}</option>;
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
