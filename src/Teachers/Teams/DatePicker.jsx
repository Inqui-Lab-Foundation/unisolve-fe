import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";

const FormikDatePicker = ({
  name,
  dateFormat,
  value,
  className,
  onChange,
  onBlur,
}) => {
  const handleChange = (val) => {
    onChange(name, val);
  };
  console.log(value);

  return (
    <div className="dropdown CalendarDropdownComp ">
      <DatePicker
        dateFormat={dateFormat}
        name={name}
        className={className}
        selected={value}
        onChange={handleChange}
      />
    </div>
  );
};
export { FormikDatePicker };
