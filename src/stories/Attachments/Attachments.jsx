import React, { useState } from "react";
import PropTypes from "prop-types";
// import { Form } from "antd";
import "./Attachments.scss";
/**
 * Primary UI component for user interaction
 */
export const Attachments = () => {
    const [File, SetFile] = useState("");

    const handleSelectFile = (e) => {
        const fileType = e.target.files[0].name.split(".").pop();
        const file = e.target.files[0];
        if (fileType === "docx" || fileType === "pdf" || fileType === "xlsx") {
            SetFile(file);
        }
        console.log("============", fileType);
    };

    console.log("=============photo", File);

    return (
        <div className="file-drop-area">
            <div className="choose-file-button">
                <i className="fa fa-paperclip mr-3" aria-hidden="true"></i> Attach Files
            </div>{" "}
            <div className="file-message">PDF, JPEG, DOCX, MP3, MP4 etc.,</div>{" "}
            <input
                onChange={(e) => handleSelectFile(e)}
                className="file-input"
                type="file"
                accept=".docx,.xlsx,.pdf"
                // multiple
            />
        </div>
    );
};

Attachments.propTypes = {
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

Attachments.defaultProps = {
    backgroundColor: null,
    //   size: "medium",
    onClick: undefined,
    label: "Select File",
    //   options: ["Garde 1", "Garde 2", "Garde 3", "Garde 4", "Garde 5", "Garde 6"],
};
