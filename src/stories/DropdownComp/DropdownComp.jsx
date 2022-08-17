import React from "react";
import "./dropdownComp.scss";
import PropTypes from "prop-types";
// import { BsFilter } from "react-icons/bs";
import {  Input } from "reactstrap";

export const DropDownComp = ({
    options,
    // backgroundColor,
    // size,
    // label,
    onChange,
    onBlur,
    // values,
    value,
    name,
    // Icon,
    className,
    // ...props
}) => {
    return (
        <div>
            {/* <Label for="exampleSelect">Select</Label> */}
            <Input
                id={name}
                name={name}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                className={`single-dropdown ${className}`}
                type="select"
            >
                {options.map((item, i) => {
                    return (
                        <option key={i} value={item}>
                            {item}
                        </option>
                    );
                })}
            </Input>
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
