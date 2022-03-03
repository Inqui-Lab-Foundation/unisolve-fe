import React, { useState } from "react";
import PropTypes from "prop-types";
import "./InputBox.scss";
export const InputBox = ({
  label,
  placeholder,
  type,
  size,
  name,
  onChange,
  value,
  onBlur,
  id,
  className,
  ...props
}) => {
  const [values, setValue] = useState("");
  console.log("==========", values);
  const design = type === "Email" ? "form-control1" : "form-control";
  return (
    <div className={`InputBox  ${className}`}>
      <input
        type={type}
        className={["inputBox", `inputBox--${size}`, design].join(" ")}
        value={value}
        placeholder={placeholder}
        // onChange={(e) => setValue(e.target.value)}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        name={name}
        // onChange={onChange}
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
