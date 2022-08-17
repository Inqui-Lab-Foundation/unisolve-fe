import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { DownOutlined } from "@ant-design/icons";
// import moment from "moment";

//Antd Datepicker is used
import { DatePicker } from "antd";

export const CalendarDropdownComp = ({
    format,
    picker,
    placeholder,
    // options,
    value,
    // id,
    // ...props
}) => {
    const onChange = () => {};

    return (
        <div className="dropdown CalendarDropdownComp ">
            <DatePicker
                suffixIcon={<DownOutlined />}
                format={format}
                onChange={(e) => onChange(e)}
                picker={picker}
                placeholder={placeholder}
                id={"datePickerComp"}
                value={value}
                className="w-100"
            />
        </div>
    );
};

CalendarDropdownComp.propTypes = {
    onClick: PropTypes.func,
};

CalendarDropdownComp.defaultProps = {
    format: "",
    picker: "",
    placeholder: "",
    // value:"",
    // id:"datePickerComp"
};
