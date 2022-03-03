import React, { useState } from "react";
import PropTypes from "prop-types";
import "./PhotoUpload.scss";
/**
 * Primary UI component for user interaction
 */
export const PhotoUpload = ({ backgroundColor, label, ...props }) => {
  const [photo, SetPhoto] = useState("");

  const handleEditProfilePic = (e) => {
    const fileType = e.target.files[0].type.replace(/\/.+/g, "$'");
    const file = e.target.files[0];
    if (fileType == "image") {
      SetPhoto(file);
    }
  };

  console.log("=============photo", photo);

  return (
    <div>
      <div class="choose-file-button1">Change Photo</div>
      <input
        onChange={(e) => handleEditProfilePic(e)}
        class="file-input"
        type="file"
        accept="image/*"
      />
    </div>
  );
};

PhotoUpload.propTypes = {
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

PhotoUpload.defaultProps = {
  backgroundColor: null,
  //   size: "medium",
  onClick: undefined,
  label: "Select Pic",
  //   options: ["Garde 1", "Garde 2", "Garde 3", "Garde 4", "Garde 5", "Garde 6"],
};
