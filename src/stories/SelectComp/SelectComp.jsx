import React from "react";
// import "antd/dist/antd.css";
// import "./index.css";
import { Select } from "antd";
const { Option } = Select;

export const SelectComp = ({ options}) => {
    const children = [];

    for (let i = 0; i < options.length; i++) {
        children.push(<Option key={options[i]}>{options[i]}</Option>);
    }
    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    console.log("======options", options);
    return (
        <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            //   defaultValue={[]}
            onChange={handleChange}
        >
            {children}
        </Select>
    );
};

// SelectComp.propTypes = {
//   onClick: PropTypes.func,
// };

SelectComp.defaultProps = {
    label: "Select",
    options: ["Garde 1", "Garde 2", "Garde 3", "Garde 4", "Garde 5", "Garde 6"],
};
