import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './style.scss';
import i18next from 'i18next';
import { FaGlobeAsia } from 'react-icons/fa';
import { languageOptions } from '../../constants/languageOptions';
import { getStudentGlobalLanguage } from '../../redux/studentRegistration/actions';
import { useDispatch } from 'react-redux';
import { getAdminGlobalLanguage, getMentorGlobalLanguage } from '../../redux/actions';

const LanguageSelectorComp = ({module}) => {
    const dispatch = useDispatch();
    const [language, setLanguage] = useState('English');
    const handleSelector = (item) => {
        setLanguage(item.name);
        i18next.changeLanguage(item.code);
        if(module === "admin"){
            dispatch(getAdminGlobalLanguage(item));
        }else if(module === "mentor"){
            dispatch(getMentorGlobalLanguage(item));
        }else{
            dispatch(getStudentGlobalLanguage(item));
        }
    };
    return (
        <DropdownButton
            id="language-selector-btn"
            title={
                <span>
                    <FaGlobeAsia /> {language}
                </span>
            }
        >
            {languageOptions.map((item, i) => {
                return (
                    <Dropdown.Item
                        key={i}
                        href="#/action-1"
                        onClick={() => handleSelector(item)}
                        label="English"
                    >
                        <span> {item.name}</span>
                    </Dropdown.Item>
                );
            })}
        </DropdownButton>
    );
};

export default LanguageSelectorComp;
