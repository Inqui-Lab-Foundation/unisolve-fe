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
import SampleCourseList from "./Pages/SampleCourseList";
import FaqPage from "./Pages/HelpPages/FaqPage";
import TicketsPage from "./Pages/HelpPages/Ticket";
import NewTicket from "./Pages/HelpPages/NewTicket";
import DiscussionForum from "./Pages/DiscussionForum";
import QuerySection from "./Pages/DiscussionForum/QuerySection";
import TeamMentorsPage from "./Pages/TeamsMentors";
import AddNewMember from "./Pages/TeamsMentors/AddNewMember";
import EditMember from "./Pages/TeamsMentors/EditMember";
import IdeasPage from "./Pages/Ideas/IdeasPage";
import SubmittedIdeas from "./Pages/Ideas/SubmittedIdeas";
import TicketViewDetails from "./Pages/HelpPages/TicketViewDetails";

const Routes = () => {
  const history = useHistory();
  const currentUser = getCurrentUser("current_user");
  // console.log("========currentUser", currentUser);
  if (currentUser) {
    history.push("/dashboard");
  }

  return (
    <>
      <Switch>
        <Redirect exact={true} from="/" to="/login" />
        {/* <Route exact path="/" render={() => <LoginNew />} /> */}
        <Route exact={true} path="/login" render={() => <LoginNew />} />
        <Route exact={true} path="/register" render={() => <SignUpNew />} />
        <Route exact={true} path="/forgotpassword" render={() => <ForgotPassword />} />
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
        <ProtectedRoute exact path="/logout" component={LogoutView} />
        <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        <ProtectedRoute exact path="/about" component={Dashboard} />
        <ProtectedRoute exact path="/ideas" component={IdeasPage} />
        <ProtectedRoute path="/ideasPage" component={Ideas} />
        <ProtectedRoute path="/submittedIdeas" component={SubmittedIdeas} />
        <ProtectedRoute exact path="/badges" component={BadgesComp} />
        <ProtectedRoute exact path="/teams" component={TeamMentorsPage} />
        <ProtectedRoute exact path="/courses" component={Courses} />
        <ProtectedRoute exact path="/coursesView" component={CourseView} />
        <ProtectedRoute exact path="/playCourse" component={PlayVideoCourses} />
        <ProtectedRoute exact path="/notification" component={Notification} />
        <ProtectedRoute exact path="/settings" component={MySettings} />
        <ProtectedRoute exact path="/faq" component={FaqPage} />
        <ProtectedRoute exact path="/tickets" component={TicketsPage} />
        <ProtectedRoute
          exact
          path="/viewTicketDetails"
          component={TicketViewDetails}
        />
        <ProtectedRoute path="/NewTicket" component={NewTicket} />
        <ProtectedRoute path="/discussionForum" component={DiscussionForum} />
        <ProtectedRoute path="/querySection" component={QuerySection} />
        <ProtectedRoute path="/addNewMember" component={AddNewMember} />
        <ProtectedRoute path="/editMember" component={EditMember} />

        <ProtectedRoute exact path="/my-profile" component={MyProfile} />
        <ProtectedRoute
          exact
          path="/edit-details"
          component={EditPersonalDetails}
        />
        <Route exact path="/samplelist" component={SampleCourseList} />
      </Switch>
    </>
  );
};

export default Routes;
