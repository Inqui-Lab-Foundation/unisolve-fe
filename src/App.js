import React,{Suspense} from "react";
import SignUpNew from "./Pages/SignUpNew";
import { BrowserRouter as Router, Route, Switch, Redirect,Link,withRouter,useHistory } from 'react-router-dom';
import { StudentHeaderComp } from "./stories/StudentHeaderComp/StudentHeader.stories";
import {SideBarComp} from "./stories/SideBarComp/SiderBar";
import { ImageCardComp } from "./stories/ImageCard/ImageCard";
import "./i18n";

const App = () => {
  return (
    <React.Fragment>
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      {/* <StudentHeaderComp /> */}
      {/* <SideBarComp /> */}
      {/* <SignUpNew /> */}
      <Switch>
        <Route exact path="/" component={SignUpNew} />
        {/* <Route path="/about" component={About} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
      </Suspense>
    </Router>
  </React.Fragment>
);

};

export default App;
