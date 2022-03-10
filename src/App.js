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
import BadgesComp from "./Pages/Badges/Badges";
import Ideas from "./Pages/Ideas";
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
import Courses from "./Pages/Courses";
import CourseView from "./Pages/Courses/coursesView";
import PlayVideoCourses from "./Pages/Courses/PlayVideo";
import Notification from "./Pages/Notification";

const Login = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ "./views/user/login")
);

const App = () => {
  const history = useHistory();
  const currentUser = getCurrentUser("current_user");
  console.log("========currentUser", currentUser);
  if (currentUser) {
    history.push("/dashboard");
    // return <Redirect exact from="/" to="dashboard" />;
  }
  return (
    <React.Fragment>
      <MainPage />
      {/* <Router>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route exact path="/register" render={() => <SignUpNew />} />
          <Route exact path="/login" render={() => <LoginNew />} />
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
          <ProtectedRoute exact path="/dashboard" component={MainPage} />
          <ProtectedRoute exact path="/about" component={Dashboard} />
          <ProtectedRoute exact path="/ideas" component={Ideas} />
          <ProtectedRoute exact path="/badges" component={BadgesComp} />
          <ProtectedRoute exact path="/teams" component={Dashboard} />
          <ProtectedRoute exact path="/courses" component={Courses} />
          <ProtectedRoute exact path="/coursesView" component={CourseView} />
          <ProtectedRoute
            exact
            path="/playCourse"
            component={PlayVideoCourses}
          />
          <ProtectedRoute exact path="/notification" component={Notification} />
          <ProtectedRoute exact path="/settings" component={MySettings} />
          <ProtectedRoute exact path="/my-profile" component={MyProfile} />
          <ProtectedRoute
            exact
            path="/edit-details"
            component={EditPersonalDetails}
          />
         
        </Switch>
      </Router> */}
    </React.Fragment>
  );
};

export default App;
