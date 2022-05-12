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
// ADMIN ROUTES
import AdminLogin from "./Admin/LoginNew";
import AdminDashboard from "./Admin/Dashboard";
import AdminMyProfile from "./Admin/MyProfile";
import AdminMySettings from "./Admin/MySettings";
import AdminLogoutView from "./Admin/LogoutView";
import AdminFaqPage from "./Admin/HelpPages/FaqPage";
import AdminTicketsPage from "./Admin/HelpPages/Ticket";
import AdminBadgesComp from "./Admin/Badges/Badges";
import AdminNewBadge from "./Admin/Badges/NewBadge";
import AdminCourses from "./Admin/Courses";
import AdminCourseView from "./Admin/Courses/coursesView";
import AdminAddCourses from "./Admin/Courses/AdminAddCourses";
import AdminForgotPassword from "./Admin/ForgotPassword";
import AdminNotification from "./Admin/Notification";
import AdminUserList from "./Admin/UserList/Ticket";
import AdminAddMentor from "./Admin/UserList/AddNewMentor";
import AdminProblemcategory from "./Admin/ProblemCategory";
import AdminAddProblemcategory from "./Admin/ProblemCategory/AdminAddProblemCategory";
import AdminEditPersonalDetails from "./Admin/EditPersonalDetails";
import AdminIdeas from "./Admin/Ideas/Ticket";
import AdminFaq from "./Admin/FAQ/Ticket";
import AddNewFaq from "./Admin/FAQ/AddNewFaq";
import AdminTickets from "./Admin/Tickets/Ticket";
import AdminAllSchools from "./Admin/Schools/Ticket";
import AdminSessions from "./Admin/Sessions/Ticket";
import AdminCreateNewSessions from "./Admin/Sessions/CreateNewSession";
import AdminNews from "./Admin/News/Ticket";
import AdminAddNews from "./Admin/News/AddNews";
// import StudentSignup from "./Admin/StudentSignup";

const Routes = () => {
  const history = useHistory();
  const currentUser = getCurrentUser("current_user");
  // console.log("========currentUser", currentUser);
  // if (currentUser && currentUser.role === "0") {
  //   history.push("/admin/dashboard");
  // } else {
  //   history.push("/dashboard");
  // }
  if (currentUser) {
    history.push("/dashboard");
  }

  return (
    <>
      <Switch>
        <Redirect exact={true} from='/' to='/login' />
        {/* <Redirect exact={true} from="/admin" to="/admin/login" /> */}
        {/* <Route exact path="/" render={() => <LoginNew />} /> */}
        <Route exact={true} path='/login' render={() => <LoginNew />} />

        <Route exact={true} path='/register' render={() => <SignUpNew />} />
        <Route
          exact={true}
          path='/forgotpassword'
          render={() => <ForgotPassword />}
        />
        <Route
          exact
          path='/create-password'
          render={() => <CreateNewPassword />}
        />
        <Route
          exact
          path='/confirm-password'
          render={() => <PasswordEmailConfirmation />}
        />
        <Route
          exact
          path='/verifypassword'
          render={() => <PasswordEmailConfirmation />}
        />
        <ProtectedRoute exact path='/logout' component={LogoutView} />
        <ProtectedRoute exact path='/dashboard' component={Dashboard} />
        <ProtectedRoute exact path='/about' component={Dashboard} />
        <ProtectedRoute exact path='/ideas' component={IdeasPage} />
        <ProtectedRoute path='/ideasPage' component={Ideas} />
        <ProtectedRoute path='/submittedIdeas' component={SubmittedIdeas} />
        <ProtectedRoute exact path='/badges' component={BadgesComp} />
        <ProtectedRoute exact path='/teams' component={TeamMentorsPage} />
        <ProtectedRoute exact path='/courses' component={Courses} />
        <ProtectedRoute exact path='/coursesView' component={CourseView} />
        <ProtectedRoute exact path='/playCourse' component={PlayVideoCourses} />
        <ProtectedRoute exact path='/notification' component={Notification} />
        <ProtectedRoute exact path='/settings' component={MySettings} />
        <ProtectedRoute exact path='/faq' component={FaqPage} />
        <ProtectedRoute exact path='/tickets' component={TicketsPage} />
        <ProtectedRoute
          exact
          path='/viewTicketDetails'
          component={TicketViewDetails}
        />
        <ProtectedRoute path='/NewTicket' component={NewTicket} />
        <ProtectedRoute path='/discussionForum' component={DiscussionForum} />
        <ProtectedRoute path='/querySection' component={QuerySection} />
        <ProtectedRoute path='/addNewMember' component={AddNewMember} />
        <ProtectedRoute path='/editMember' component={EditMember} />

        <ProtectedRoute exact path='/my-profile' component={MyProfile} />
        <ProtectedRoute
          exact
          path='/edit-details'
          component={EditPersonalDetails}
        />
        <Route exact path='/samplelist' component={SampleCourseList} />

        {/* ADMIN ROUTES */}
        <Route exact={true} path='/admin' render={() => <AdminLogin />} />
        <ProtectedRoute
          exact
          path='/admin/dashboard'
          component={AdminDashboard}
        />
        <Route
          exact={true}
          path='/admin/my-profile'
          component={AdminMyProfile}
        />
        <Route
          exact={true}
          path='/admin/edit-profile'
          component={AdminEditPersonalDetails}
        />
        <Route
          exact={true}
          path='/admin/settings'
          component={AdminMySettings}
        />
        <Route exact={true} path='/admin/logout' component={AdminLogoutView} />
        <Route
          exact={true}
          path='/admin/tickets'
          component={AdminTicketsPage}
        />
        <Route exact={true} path='/admin/badges' component={AdminBadgesComp} />
        <Route
          exact={true}
          path='/admin/new-badges'
          component={AdminNewBadge}
        />
        <Route
          exact={true}
          path='/admin/all-courses'
          component={AdminCourses}
        />
        <Route
          exact={true}
          path='/admin/course-details'
          component={AdminCourseView}
        />
        <Route
          exact={true}
          path='/admin/add-course'
          component={AdminAddCourses}
        />
        <Route
          exact={true}
          path='/admin/forgotpassword'
          component={AdminForgotPassword}
        />
        <Route exact={true} path='/admin/userlist' component={AdminUserList} />
        <Route
          exact={true}
          path='/admin/notifications'
          component={AdminNotification}
        />

        <Route
          exact={true}
          path='/admin/add-mentor'
          component={AdminAddMentor}
        />
        <Route
          exact={true}
          path='/admin/problem-categories'
          component={AdminProblemcategory}
        />
        <Route
          exact={true}
          path='/admin/add-problem-category'
          component={AdminAddProblemcategory}
        />

        <Route exact={true} path='/admin/ideas' component={AdminIdeas} />
        <Route exact={true} path='/admin/faq' component={AdminFaq} />
        <Route exact={true} path='/admin/New-faq' component={AddNewFaq} />
        <Route exact={true} path='/admin/tickets' component={AdminTickets} />
        <Route
          exact={true}
          path='/admin/registered-schools'
          component={AdminAllSchools}
        />
        <Route exact={true} path='/admin/sessions' component={AdminSessions} />
        <Route
          exact={true}
          path='/admin/create-sessions'
          component={AdminCreateNewSessions}
        />
        <Route exact={true} path='/admin/news' component={AdminNews} />
        <Route exact={true} path='/admin/add-news' component={AdminAddNews} />
        {/* <Route exact={true} path='/admin/signup' component={StudentSignup} /> */}
      </Switch>
    </>
  );
};

export default Routes;
