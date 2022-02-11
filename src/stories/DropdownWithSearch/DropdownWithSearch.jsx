import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./searchDropdown.scss";
import Select from "react-dropdown-select";

export const DropDownWithSearch = ({
  options,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const [optionsList, setOptions] = useState(
    options
  );
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <div className="searchDropdown">
      <Select className="dropdown-toggle"
        options={optionsList.map((item, index) => {
          return { value: item.id, label: item.country };
        })}
        values={selectedOptions}
        onChange={(values) => setSelectedOptions([...values])}
        placeholder="Select School Name"
      />
    </div>
  );
};

DropDownWithSearch.propTypes = {


  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

DropDownWithSearch.defaultProps = {
  onClick: undefined,
  label: "Dropdown",
  options: [
    { id: 1, country: "Don Bosco School, Mapusa" },
    { id: 2, country: "Don Bosco School, Vasco" },
    { id: 3, country: "Don Bosco School, Mumbai" },
  ],
};
