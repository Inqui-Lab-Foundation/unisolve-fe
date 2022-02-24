import React, { useState } from "react";
import PropTypes from "prop-types";
import HorizontalTimeline from "react-horizontal-timeline";
import "./TimeLine.scss";

export const TimeLine1 = ({ label, index1, ...props }) => {
  const SmapleArray = [
    { data: "2019-11-05", status: "Idea Created" },
    { data: "2019-12-05", status: "Idea Shared" },
    { data: "2020-1-05", status: "Evoluator Assigned" },
    { data: "2020-2-05", status: "Under Review" },
    { data: "2020-2-15", status: "Evoluted" },
  ];
  console.log("=========SmapleArray", index1);
  return (
    <div>
      <div
        style={{
          width: "80%",
          height: "100px",
          margin: "0 auto",
          marginTop: "20px",
          fontSize: "10px",
        }}
      >
        <HorizontalTimeline
          styles={{
            background: "#f8f8f8",
            foreground: "#1A79AD",
            outline: "#dfdfdf",
          }}
          index={index1}
          values={SmapleArray && SmapleArray.map((x) => x.data)}
        />
      </div>
      <div className="text-center">
        {/* Prevoius:-{prevStatus} - Current Select:-{curStatus} */}
        {/* {curStatus} */}
      </div>
    </div>
  );
};

TimeLine1.propTypes = {
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

TimeLine1.defaultProps = {
  backgroundColor: null,
  //   size: "medium",
  onClick: undefined,
  label: "Select Pic",
  index: 0,
  //   options: ["Garde 1", "Garde 2", "Garde 3", "Garde 4", "Garde 5", "Garde 6"],
};
