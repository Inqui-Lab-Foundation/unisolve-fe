import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Progress.scss";
import { Progress } from "antd";
export const ProgressComp = ({  options, level,  }) => {
    const [optionsList] = useState(options);
    return (
        <div>
            {optionsList.map((data, i) => {
                // console.log("==============data", data.status);
                return (
                    <div key={i}>
                        <Progress
                            percent={data.percent}
                            strokeColor={
                                level === "HARD"
                                    ? "#db4a3b"
                                    : level === "MEDIUM"
                                        ? "#ffcb34"
                                        : "#0da650"
                            }
                            showInfo={false}
                        />
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

ProgressComp.propTypes = {
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

ProgressComp.defaultProps = {
    //   backgroundColor: null,
    primary: false,
    size: "medium",
    onClick: undefined,
};
