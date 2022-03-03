import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Progress.scss";
import { Progress } from "antd";
export const Progres = ({ label, options, ...props }) => {
  const [optionsList, setOptions] = useState(options);
  return (
    <div>
      {optionsList.map((data) => {
        console.log("==============data", data.status);
        return (
          <div>
            <Progress percent={data.percent} showInfo={false} />
          </div>
        );
      })}
      {/* <Progress percent={30} />
      <Progress percent={50} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} />
      <Progress percent={50} showInfo={false} /> */}
    </div>
  );
};

Progres.propTypes = {
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

Progres.defaultProps = {
  //   backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
