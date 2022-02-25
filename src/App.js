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
import BadgesComp from "./Pages/Badges";
import MainPage from "./Pages/MainPages";
import "./i18n";



// import SignUp from "./Pages/SignUp";
import SignUpNew from "./Pages/SignUpNew";
import LoginNew from "./Pages/LoginNew";
import CreateNewPassword from "./Pages/CreateNewPassword";
import PasswordEmailConfirmation from "./Pages/PasswordEmailConfirmation";
import ForgotPassword from "./Pages/ForgotPassword";
import LogoutView from "./Pages/LogoutView";

// import { Route } from "react-router-dom";

const Login = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ "./views/user/login")
);

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" render={() => <SignUpNew />} />
        <Route exact path="/register" render={() => <SignUpNew />} />
        <Route exact path="/login" render={() => <LoginNew />} />
        <Route exact path="/logout" render={() => <LogoutView />} />
        <Route exact path="/forgotpassword" render={() => <ForgotPassword />} />
        <Route
          exact
          path="/verifypassword"
          render={() => <PasswordEmailConfirmation />}
        />
        <Route render={() => <h1 className="text-center">Page Not Found</h1>} />
      </Switch>
      {/* <SignUpNew /> */}
      {/* <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <MainPage />

          <SignUpNew /> */}
      {/* <LoginNew /> */}
      {/* <CreateNewPassword /> */}
      {/* <PasswordEmailConfirmation /> */}
      {/* <ForgotPassword /> */}
      {/* <LogoutView /> */}
      {/* <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/about" component={BadgesComp} />
         <Route component={NoMatch} />
      </Switch> */}
      {/* </Suspense>
      </Router> */}
    </React.Fragment>
  );
};

export default App;
