import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export const InputWithSearchComp = ({name,size, ...props }) => {
  const [value, setValue] = useState()

  return (
    <div className="dropdown InputWithSearchComp">
      <Input name={name} className={`search-comp-${size}`}  placeholder="Search" prefix={<SearchOutlined />} />
        
    </div>
  );
};

InputWithSearchComp.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['medium', 'large']),
};

InputWithSearchComp.defaultProps = {
  size: 'default',
};
