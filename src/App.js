import React from "react";
import SignUp from "./Pages/SignUp";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { StudentHeaderComp } from "./stories/StudentHeaderComp/StudentHeader.stories";
import {SideBarComp} from "./stories/SideBarComp/SiderBar";
import { ImageCardComp } from "./stories/ImageCard/ImageCard";
import "./i18n";

const App = () => {
  return (
    <React.Fragment>
    <BrowserRouter>
      <StudentHeaderComp />
      <ImageCardComp />
      <SideBarComp />
      <Switch>
        <Route exact path="/" component={SignUp} />
        {/* <Route path="/about" component={About} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </BrowserRouter>
  </React.Fragment>
);

};

export default App;
