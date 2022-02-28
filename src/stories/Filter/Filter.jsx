import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Filter.scss";
/**
 * Primary UI component for user interaction
 */
export const Filter = ({ options, backgroundColor, size, label, ...props }) => {
  const [optionsList, setOptions] = useState(options);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [Button, SetButton] = useState(false);
  //   const [selectedOptions, setSelectedOptions] = useState("Select Filter");
  const emptyArray = [];

  const selectFilters = (item) => {
    // emptyArray.unshift(item);
    setSelectedOptions([...selectedOptions, item]);
  };
  const handleRemoveItem = (item) => {
    const todos = selectedOptions.filter((items) => {
      return items !== item;
    });
    //  this.setState({ todos });
    // const Index = selectedOptions.findIndex((x) => x === item);
    // console.log("======Index", Index);
    // const removeList = selectedOptions.splice(Index);
    setSelectedOptions(todos);
  };

  console.log("=========", selectedOptions);
  // console.log("=========", emptyArray);

  return (
    <div className="filter">
      <div>
        <button onClick={() => SetButton(!Button)}>Filters</button>
      </div>
      {selectedOptions !== [] ? (
        <ul>
          {selectedOptions.map((item, index) => {
            return (
              <li
                // className="dropdown-item"
                onClick={() => handleRemoveItem(item)}
                // key={index}
              >
                {item}
              </li>
            );
          })}
        </ul>
      ) : null}
      {Button === true ? (
        <div>
          <ul>
            {optionsList.map((item, index) => {
              return (
                <li
                  // className="dropdown-item"
                  onClick={() => selectFilters(item)}
                  key={index}
                >
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
