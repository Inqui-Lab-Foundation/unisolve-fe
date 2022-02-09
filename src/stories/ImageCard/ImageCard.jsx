import React from "react";
import PropTypes from "prop-types";
import "./imageCard.scss";
import { FiEye } from "react-icons/fi";

export const ImageCardComp = ({
  primary,
  imgUrl,
  title,
  text,
  buttonName,
  backgroundColor,
  size,
  label,
  count,
  time,
  icon,
  ...props
}) => {
  return (
    <div className="card">
      <img src={imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="card-counts">
          <p className="m-0">
            <FiEye /> {count}
          </p>
          <p>{time}</p>
        </div>
        <p className="card-title">{title}</p>

      </div>
    </div>
  );
};

ImageCardComp.propTypes = {
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

ImageCardComp.defaultProps = {
  backgroundColor: null,
  imgUrl: "",
  primary: false,
  size: "medium",
  onClick: undefined,
  count:"1,288 students",
  time:"5m",
  icon:"",
};
