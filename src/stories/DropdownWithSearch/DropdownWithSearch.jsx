import React from "react";
import PropTypes from "prop-types";
import "./searchDropdown.scss";

//react-dropdown-select package installed
import Select from "react-dropdown-select";

export const DropDownWithSearch = ({
    options,
    // backgroundColor,
    // size,
    label,
    value,
    onBlur,
    onChange,
    name,
    className,
    // ...props
}) => {
    return (
        <div className={`searchDropdown ${className}`}>
            <Select
                id="searchSelect"
                className="dropdown-toggle"
                options={options}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={label}
                name={name}
                values={value}
            />
        </div>
    );
};

DropDownWithSearch.propTypes = {
    label: PropTypes.string.isRequired,

    onClick: PropTypes.func,
};

//The default props of search components are listed here
//label, options and onClick functions need to be passed.
DropDownWithSearch.defaultProps = {
    onClick: undefined,
    label: "Dropdown",
    options: [
        { label: 10, value: "Mapusa" },
        { label: 20, value: "Vasco" },
        { label: 30, value: "Mumbai" },
    ],
};
