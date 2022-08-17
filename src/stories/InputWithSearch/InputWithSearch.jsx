import React from "react";
import PropTypes from "prop-types";
import "./InputWithSearch.scss";
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export const InputWithSearchComp = ({name,size,placeholder,className }) => {
    // const [value, setValue] = useState()
 

    return (
        <div className="dropdown InputWithSearchComp">
            <Input onChange={(e) => e.target.value} title="search" name={name} className={`search-comp-${size} ${className}`}  placeholder={placeholder} prefix={<SearchOutlined />} />
        
        </div>
    );
};

InputWithSearchComp.propTypes = {
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['medium', 'large']),
};

InputWithSearchComp.defaultProps = {
};
