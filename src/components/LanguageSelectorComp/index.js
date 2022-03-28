import React,{useState} from "react";
import { BsGlobe2 } from "react-icons/bs";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./style.scss"
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import {FcGlobe} from "react-icons/fc"

const LanguageSelectorComp = () => {
    const languageOptions = [
        {
          code: "en",
          name: "English",
          country_code: "in",
        },
        {
          code: "hi",
          name: "Hindi",
          country_code: "in",
        },
        {
          code: "te",
          name: "Telugu",
          country_code: "in",
        },
      ]
    
    const [language,setLanguage] = useState('English')
    const handleSelector = (item) => {
        setLanguage(item.name)
        i18next.changeLanguage(item.code)
    }
    const globe = <FcGlobe />
  return (
    <DropdownButton id="language-selector-btn"  title={<span>
      <FcGlobe /> {language}
  </span>}>
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
