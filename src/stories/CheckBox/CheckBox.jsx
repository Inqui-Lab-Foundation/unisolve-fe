import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CheckBox.scss";
/**
 * Primary UI component for user interaction
 */
export const CheckBox = ({ label, ...props }) => {
  return (
    <div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          CheckBox1
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
        />
        <label class="form-check-label" for="flexCheckChecked">
          CheckBox2
        </label>
      </div>
    </div>
  );
};

CheckBox.propTypes = {
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

CheckBox.defaultProps = {
  backgroundColor: null,
  //   size: "medium",
  onClick: undefined,
  label: "Select Pic",
  //   options: ["Garde 1", "Garde 2", "Garde 3", "Garde 4", "Garde 5", "Garde 6"],
};
