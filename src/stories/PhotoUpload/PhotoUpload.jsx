import React, { useState } from "react";
import PropTypes from "prop-types";
import "./PhotoUpload.scss";
import ImageUploading from 'react-images-uploading';
import { Avatar } from "antd";
import profile from "../../media/img/duckImg.png";
import {GrEdit} from "react-icons/gr";

/**
 * Primary UI component for user interaction
 */
export const PhotoUpload = () => {

    const [images, setImages] = useState([{data_url:profile}]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
    // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };


    return (
        <div className="App">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    // onImageUpload,
                    // onImageRemoveAll,
                    onImageUpdate,
                    // onImageRemove,
                    // isDragging,
                    // dragProps,
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        {/* <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button> */}
            &nbsp;
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <Avatar className="upload-img" src={image['data_url']} />

                                <div className="image-item__action">
                                    <Avatar className="edit-icon" onClick={() => onImageUpdate(index)} icon={<GrEdit />} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
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
