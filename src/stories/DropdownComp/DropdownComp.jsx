import React,{useState} from "react";
import PropTypes from "prop-types";
import {ButtonDropdown,DropdownToggle,DropdownMenu,DropdownItem} from "reactstrap"
import "./dropdown.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
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
  const [optionsList, setOptions] = useState(
    options
  );
  const [selectedOptions, setSelectedOptions] = useState('select grade');
  return (
    <div className="dropdown studentDropdown">
  <button className="btn btn-lg dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" placeholder="Select School Name">
   {selectedOptions}
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    {optionsList.map( (item,index) => {
      return(
        <li className="dropdown-item" onClick={() => setSelectedOptions(item)} key={index}>{item}</li>

      )
    })}
   
  </ul>
</div>
  );
};

DropDownComp.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
   SingleSelectDropdown: PropTypes.bool,
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
  size: "medium",
  onClick: undefined,
  label:"Dropdown",
  options:["Garde 1","Garde 2","Garde 3","Garde 1","Garde 2","Garde 3"]

};
