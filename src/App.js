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
import { ProtectedRoute } from "./helpers/authHelper";
import { StudentHeaderComp } from "./stories/StudentHeaderComp/StudentHeader.stories";
import SideMenuBarComp from "./components/SideMenuBarComp";
import { ImageCardComp } from "./stories/ImageCard/ImageCard";
import Dashboard from "./Pages/Dashboard";
import Ideas from "./Pages/Ideas";
import BadgesComp from "./Pages/Badges";
import MainPage from "./Pages/MainPages";
import "./i18n";
import SignUpNew from "./Pages/SignUpNew";
import LoginNew from "./Pages/LoginNew";
import CreateNewPassword from "./Pages/CreateNewPassword";
import PasswordEmailConfirmation from "./Pages/PasswordEmailConfirmation";
import ForgotPassword from "./Pages/ForgotPassword";
import LogoutView from "./Pages/LogoutView";
import MySettings from "./Pages/MySettings";
import EditPersonalDetails from "./Pages/EditPersonalDetails";
import MyProfile from "./Pages/MyProfile";
import { getCurrentUser } from "./helpers/Utils";

const Login = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ "./views/user/login")
);

const App = () => {
  const currentUser = getCurrentUser("current_user");
  if (currentUser) {
    return <Redirect exact from="/" to="dashboard" />;
  }
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route exact path="/register" render={() => <SignUpNew />} />
          <Route exact path="/login" render={() => <LoginNew />} />
          <Route exact path="/ideas" render={() => <Ideas />} />
          <Route path="/badges" render={() => <BadgesComp />} />

          <Route
            exact
            path="/forgotpassword"
            render={() => <ForgotPassword />}
          />
          <Route
            exact
            path="/create-password"
            render={() => <CreateNewPassword />}
          />
          <Route
            exact
            path="/confirm-password"
            render={() => <PasswordEmailConfirmation />}
          />
          <Route
            exact
            path="/verifypassword"
            render={() => <PasswordEmailConfirmation />}
          />
          <Route exact path="/logout" render={() => <LogoutView />} />
          <Route exact path="/settings" render={() => <MySettings />} />
          <Route exact path="/my-profile" render={() => <MyProfile />} />
          <Route
            exact
            path="/edit-details"
            render={() => <EditPersonalDetails />}
          />
          <Route exact path="/dashboard" render={() => <MainPage />} />
          <Route exact path="/about" render={() => <Dashboard />} />
          <Route exact path="/courses" render={() => <Dashboard />} />
          <Route exact path="/teams" render={() => <Dashboard />} />
          {/* <Route exact path="/about" render={() => <Dashboard />} /> */}
          {/* Protected Route Example // add ProtectedRoute for all authenticated Routes //
          <ProtectedRoute exact path="/dashboard" render={() => <MainPage />} /> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
