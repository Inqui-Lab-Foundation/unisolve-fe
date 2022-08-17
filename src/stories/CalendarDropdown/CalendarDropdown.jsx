import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { DownOutlined } from "@ant-design/icons";
import moment from "moment";

//Antd Datepicker is used
import { DatePicker } from "antd";

export const CalendarDropdownComp = ({
  format,
  picker,
  placeholder,
  options,
  value,
  onChange,
  type,
  id,
  ...props
}) => {
  console.log(value);
  return (
    <div className="dropdown CalendarDropdownComp ">
      <DatePicker
        type="select"
        onChange={onChange}
        placeholder={placeholder}
        // id={"datePickerComp"}
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
