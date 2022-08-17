import React from "react";
import PropTypes from "prop-types";
import "./CheckBox.scss";
/**
 * Primary UI component for user interaction
 */
export const CheckBox = () => {
    return (
        <div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
          CheckBox1
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
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
