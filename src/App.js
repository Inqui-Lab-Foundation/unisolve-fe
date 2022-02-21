import React,{Suspense} from "react";
import SignUpNew from "./Pages/SignUpNew";
import { BrowserRouter as Router, Route, Switch, Redirect,Link,withRouter,useHistory } from 'react-router-dom';
import { StudentHeaderComp } from "./stories/StudentHeaderComp/StudentHeader.stories";
// import {SideBarComp} from "./stories/SideBarComp/SiderBar";
import SideMenuBarComp from "./components/SideMenuBarComp";
import { ImageCardComp } from "./stories/ImageCard/ImageCard";
import Dashboard from "./Pages/Dashboard";
import BadgesComp from "./Pages/Badges";
import MainPage from "./Pages/MainPages"
import "./i18n";

const App = () => {

  return (
    <React.Fragment>
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      {/* <MainPage /> */}
      <SignUpNew />
      {/* <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/about" component={BadgesComp} />
         <Route component={NoMatch} />
      </Switch> */}
      </Suspense>
    </Router>
  </React.Fragment>
);

};

export default App;
