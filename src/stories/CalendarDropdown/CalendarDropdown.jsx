import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import {DownOutlined} from '@ant-design/icons';

//antd Datepicker is used
import { DatePicker} from 'antd';

export const CalendarDropdownComp = ({ options, ...props }) => {

  const onChange = (e) => {
  }
  const dateFormat = 'Do';
  const monthFormat = 'MMM';
  const yearFormat = 'YYYY';

  return (
    <div className="dropdown CalendarDropdownComp">
    <DatePicker suffixIcon={<DownOutlined />} format={monthFormat} onChange={(e) => onChange(e)} picker="month" placeholder="Month" />
   
    <DatePicker suffixIcon={<DownOutlined />} format={dateFormat} onChange={(e) => onChange(e)} placeholder="Day"/>
    <DatePicker suffixIcon={<DownOutlined />} format={yearFormat} onChange={(e) => onChange(e)} picker="year" placeholder="Year" />
   

    </div>
  );
};

CalendarDropdownComp.propTypes = {
  onClick: PropTypes.func,
};

CalendarDropdownComp.defaultProps = {
 
};
