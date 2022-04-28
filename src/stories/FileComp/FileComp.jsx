import React, { useState } from "react";
import "antd/dist/antd.css";
// import "./index.css";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export const FileComp = ({ label, ...props }) => {
  const [File, SetFile] = useState([]);
  //   const fileList = [];
  console.log("===========", File);
  //   const handleSelectFile = (file) => {
  //     console.log(e.fileList[0]);
  //     fileList.push(file);
  //   };
  return (
    <Upload
      action="http://localhost:3000/"
      listType="picture"
      accept=".png,.jpeg,.jpg"
      beforeUpload={(file) => {
        SetFile(file);
        // return <a onClick={(file) => handleSelectFile(file)}></a>;
        return false;
      }}
      //   defaultFileList={[...fileList]}
      className="upload-list-inline"
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  );
};

FileComp.defaultProps = {
  label: "Select File",
};
