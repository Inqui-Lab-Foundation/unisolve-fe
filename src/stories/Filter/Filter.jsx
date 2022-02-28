import React, { useState } from "react";
import PropTypes from "prop-types";
// import {
//   ButtonDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from "reactstrap";
import "./Filter.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
/**
 * Primary UI component for user interaction
 */
export const Filter = ({ options, backgroundColor, size, label, ...props }) => {
  const [optionsList, setOptions] = useState(options);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [Button, SetButton] = useState(false);
  //   const [selectedOptions, setSelectedOptions] = useState("Select Filter");

  const selectFilters = (item) => {
    const filterArrayIndex = selectedOptions
      ? selectedOptions.findIndex((x) => x === item)
      : -1;
    console.log("=filterArrayIndex==", filterArrayIndex);
    if (filterArrayIndex === -1) {
      setSelectedOptions([...selectedOptions, item]);
    }
  };
  const handleRemoveItem = (item) => {
    const todos = selectedOptions.filter((items) => {
      return items !== item;
    });
    setSelectedOptions(todos);
  };

  console.log("=========", selectedOptions);

  return (
    <div className="filter">
      <div>
        <button className="filterBox" onClick={() => SetButton(!Button)}>
          Filters
        </button>
      </div>
      {selectedOptions !== [] ? (
        <ul>
          {selectedOptions.map((item, index) => {
            return <li onClick={() => handleRemoveItem(item)}>{item}</li>;
          })}
        </ul>
      ) : null}
      {Button === true ? (
        <div>
          <ul>
            {optionsList.map((item, index) => {
              return (
                <li onClick={() => selectFilters(item)} key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

Filter.propTypes = {
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

Filter.defaultProps = {
  backgroundColor: null,
  size: "medium",
  onClick: undefined,
  label: "Dropdown",
  options: ["Garde 1", "Garde 2", "Garde 3", "Garde 4", "Garde 5", "Garde 6"],
};
