import React from "react";
import PropTypes from "prop-types";
// import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
// import { convertToHTML } from "draft-convert";
// import DOMPurify from "dompurify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./RichText.scss";
/**
 * Primary UI component for user interaction
 */
export const RichText = ({
    // label,
    placeholder,
    type,
    // size,
    name,
    onChange,
    // value,
    onBlur,
    id,
    // className,
    editorState,
    handleEditorChange,
    // ...props
}) => {
    // const [editorState, setEditorState] = useState(() =>
    //   EditorState.createEmpty()
    // );

    // const handleEditorChange = (state) => {
    //   setEditorState(state);
    // };

    return (
        <div className="App">
            <Editor
                type={type}
                value={editorState}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                id={id}
                // class="form-control"
                // rows="4"
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
            />
        </div>
    );
};

RichText.propTypes = {
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

RichText.defaultProps = {
    backgroundColor: null,
    //   size: "medium",
    onClick: undefined,
    label: "Select Pic",
    //   options: ["Garde 1", "Garde 2", "Garde 3", "Garde 4", "Garde 5", "Garde 6"],
};
