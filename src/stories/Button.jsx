import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    btnClass,
    backgroundColor,
    size,
    shape,
    label,
    icon,
    ...props
}) => {
    return (
        <button
            type="button"
            className={[
                "storybook-button",
                `storybook-button--${size}`,
                `storybook-button--${btnClass}`,
                `storybook-button--${shape}`,
            ].join(" ")}
            style={backgroundColor && { backgroundColor }}
            {...props}
        >
            {icon ? <img src={icon} /> : ""} {label}
        </button>
    );
};

Button.propTypes = {
    /**
   * Is this the principal call to action on the page?
   */
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

Button.defaultProps = {
    backgroundColor: null,
    // primary: false,
    size: "large",
    onClick: undefined,
};
