import React from "react";
import PropTypes from "prop-types";
import {ButtonDropdown,DropdownToggle,DropdownMenu,DropdownItem} from "reactstrap"
import "./dropdown.scss";
/**
 * Primary UI component for user interaction
 */
export const DropDownComp = ({
  options,
  backgroundColor,
  size,
  label,
  ...props
}) => {
 
  return (
    <div class="dropdown studentDropdown">
  <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   {label}
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    {options.map( (item,index) => {
      return(
        <li key={index}><a class="dropdown-item" href="#">{item}</a></li>

      )
    })}
    {/* <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li> */}
  </ul>
</div>
  );
};

DropDownComp.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
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
  primary: false,
  size: "medium",
  onClick: undefined,
  label:"Dropdown",
  options:["Student","Teacher","Mentor"]
};
