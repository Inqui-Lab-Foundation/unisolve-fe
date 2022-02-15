import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export const InputWithSearchComp = ({ options, ...props }) => {
  const [value, setValue] = useState()

  return (
    <div className="dropdown InputWithSearchComp">
      <Input size="large" placeholder="Search" prefix={<SearchOutlined />} />
        
    </div>
  );
};

InputWithSearchComp.propTypes = {
  onClick: PropTypes.func,
};

InputWithSearchComp.defaultProps = {
 
};
