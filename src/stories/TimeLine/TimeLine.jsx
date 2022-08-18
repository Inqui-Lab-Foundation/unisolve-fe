import React from "react";
import PropTypes from "prop-types";
import { Timeline } from "antd";
import "./TimeLine.scss";

export const TimeLine = ({  status }) => {
    return (
        <Timeline position="right">
            {status === "Idea Created" ? (
                <Timeline.Item color="green">Idea Created</Timeline.Item>
            ) : (
                <Timeline.Item>Idea Created</Timeline.Item>
            )}
            {status === "Idea Shared" ? (
                <Timeline.Item color="green">Idea Shared</Timeline.Item>
            ) : (
                <Timeline.Item>Idea Shared</Timeline.Item>
            )}
            {status === "Evoluator Assigned" ? (
                <Timeline.Item color="green">Evoluator Assigned</Timeline.Item>
            ) : (
                <Timeline.Item>Evoluator Assigned</Timeline.Item>
            )}
            {status === "Under Review" ? (
                <Timeline.Item color="green">Under Review</Timeline.Item>
            ) : (
                <Timeline.Item>Under Review</Timeline.Item>
            )}
            {status === "Evoluted" ? (
                <Timeline.Item color="green">Evoluted</Timeline.Item>
            ) : (
                <Timeline.Item>Evoluted</Timeline.Item>
            )}
        </Timeline>
    );
};

TimeLine.propTypes = {
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

TimeLine.defaultProps = {
    backgroundColor: null,
    //   size: "medium",
    onClick: undefined,
    label: "Select Pic",
    index: 0,
    //   options: ["Garde 1", "Garde 2", "Garde 3", "Garde 4", "Garde 5", "Garde 6"],
};
