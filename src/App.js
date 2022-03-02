import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  withRouter,
  useHistory,
} from "react-router-dom";
import { StudentHeaderComp } from "./stories/StudentHeaderComp/StudentHeader.stories";
import SideMenuBarComp from "./components/SideMenuBarComp";
import { ImageCardComp } from "./stories/ImageCard/ImageCard";
import Dashboard from "./Pages/Dashboard";
import Ideas from "./Pages/Ideas";
import BadgesComp from "./Pages/Badges";
import MainPage from "./Pages/MainPages";
import "./i18n";

// import SignUp from "./Pages/SignUp";
import SignUpNew from "./Pages/SignUpNew";

const Login = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ "./views/user/login")
);

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
