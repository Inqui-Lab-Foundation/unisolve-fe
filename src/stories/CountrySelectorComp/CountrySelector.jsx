import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { DropDownComp } from "../DropdownComp/DropdownComp";
/**
 * Primary UI component for user interaction
 */
export const CountrySelector = () => {
    return <DropDownComp />;
};

CountrySelector.propTypes = {
    label: PropTypes.string.isRequired,
    /**
   * Optional click handler
   */
    onClick: PropTypes.func,
};

CountrySelector.defaultProps = {
    label: "large",
    onClick: undefined,
};
