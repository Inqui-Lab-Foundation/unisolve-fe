import './App.css';
import UsersPage from './Pages/UserPages';
import { useTranslation } from 'react-i18next';
import {DropdownToggle,DropdownMenu,ButtonDropdown,DropdownItem} from "reactstrap";

const App = () => {
  const { t, i18n } = useTranslation();
  const releaseDate = new Date('2022/02/08');
  const timeDifference =new Date() - releaseDate;
  const number_of_days = Math.floor(timeDifference/(1000*60*60*24));
  const languageOptions = [
    {
      code:"en",
      name:"English",
      country_code:"gb"
    }, {
      code:"fr",
      name:"Français",
      country_code:"fr"
    }
  ]



  return (
    <div className="App">
   <UsersPage />
   <p>{t('welcome_message')}</p>
   <p>{t('days_since_release',{number_of_days})}</p>
   <ButtonDropdown
  toggle={function noRefCheck(){}}
>
  <DropdownToggle caret>
    Language
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem header>
      Header
    </DropdownItem>
    <DropdownItem disabled>
      Action
    </DropdownItem>
    <DropdownItem>
      Another Action
    </DropdownItem>
    <DropdownItem divider />
    <DropdownItem>
      Another Action
    </DropdownItem>
  </DropdownMenu>
</ButtonDropdown>
   </div>
  );
}

export default App;
