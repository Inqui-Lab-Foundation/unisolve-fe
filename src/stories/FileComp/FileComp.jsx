import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
// import "./index.css";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

// eslint-disable-next-line no-unused-vars
export const FileComp = ({  file }) => {
    const [file1, SetFile] = useState([]);
    useEffect(() => {
        file = file1;
    }, [file1]);
    return (
        <Upload
            action='http://localhost:3000/'
            listType='picture'
            accept='.png,.jpeg,.jpg, .csv'
            beforeUpload={(files) => {
                // file = files;
                SetFile(files);
                // return <a onClick={(file) => handleSelectFile(file)}></a>;
                return false;
            }}
            //   defaultFileList={[...fileList]}
            className='upload-list-inline'
        >
            <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
    );
};

FileComp.defaultProps = {
    label: "Select File",
};
