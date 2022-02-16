import React from "react";
import PropTypes from "prop-types";
import "./InputBox.scss";
export const InputBox = ({ label, placeholder, types, size, ...props }) => {
  const design = types === "Email" ? "form-control1" : "form-control";
  const PlaceHolder =
    types === "Email"
      ? "Email"
      : types === "FirstName"
      ? "FirstName"
      : "LastName";
  return (
    <div className="InputBox">
      <input
        type={types}
        className={[
          "storybook-button",
          `storybook-button--${size}`,
          design,
        ].join(" ")}
        placeholder={placeholder}
        aria-describedby="basic-addon1"
      />
    </div>
  );
};

InputBox.propTypes = {
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

InputBox.defaultProps = {
  //   backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
