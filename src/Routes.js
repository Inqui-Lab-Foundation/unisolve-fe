import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
  Redirect,
  Link,
  withRouter,
  useHistory,
} from "react-router-dom";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { createBrowserHistory, createHashHistory } from "history";

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
import AddCoursesDetails from "./Admin/Courses/AddCoursesDetails";
import AdminAddCourses from "./Admin/Courses/AdminAddCourses";
import AdminPlayVideoCourses from "./Admin/Courses/AdminPlayVideoCourses";
import AdminForgotPassword from "./Admin/ForgotPassword";
import AdminNotification from "./Admin/Notification";
import AdminUserList from "./Admin/UserList/Ticket";
import AdminAddMentor from "./Admin/UserList/AddNewMentor";
import CommonUserProfile from "./Admin/UserList/CommonUserProfile";
import AdminEvaluator from "./Admin/UserList/AddNewEvaluator";
import EditEvaluator from "./Admin/UserList/EditNewEvaluator";
import AdminProblemcategory from "./Admin/ProblemCategory";
import AdminAddProblemcategory from "./Admin/ProblemCategory/AdminAddProblemCategory";
import AdminEditPersonalDetails from "./Admin/EditPersonalDetails";
import AdminIdeas from "./Admin/Ideas/Ticket";
import AdminReassign from "./Admin/Ideas/ReassignEvaluator";
import IdeaDetails from "./Admin/Ideas/SubmittedIdeas";
import AdminFaq from "./Admin/FAQ/ManageFaq";
import AddNewFaq from "./Admin/FAQ/AddNewFaq";
import EditFaq from "./Admin/FAQ/EditFaq";
import AddNewFaqCategory from "./Admin/FAQ/AddNewFaqCategory";
import AdminTickets from "./Admin/Tickets/Ticket";
// import AdminTicketsViewDetails from "./Admin/Tickets/TicketsCard";
import AdminAllSchools from "./Admin/Schools/Ticket";
import AddNewSchool from "./Admin/Schools/AddNewSchool";
import AdminSessions from "./Admin/Sessions/Ticket";
import AdminCreateNewSessions from "./Admin/Sessions/CreateNewSession";
import AdminNews from "./Admin/News/Ticket";
import AdminAddNews from "./Admin/News/AddNews";
import AdminAddNewsCategory from "./Admin/News/AddNewsCategory";
import StudentSignup from "./Admin/StudentSignup";
import Home from "./home/home";
import AdminChallengesComp from "./Admin/Challenges/Badges";

// const hashHistory = createHashHistory();.

// TEACHER ROUTES
import TeacherLogin from "./Teachers/LoginNew";
import TeacherDashboard from "./Teachers/Dashboard";
import TeacherLogoutView from "./Teachers/LogoutView";
import TeacherFaqPage from "./Teachers/HelpPages/FaqPage";

import TeacherTeamList from "./Teachers/Teams/Ticket";
import TeacherCreateTeam from "./Teachers/Teams/CreateTeam";

const Routers = () => {
  const history = useHistory();
  const currentUser = getCurrentUser("current_user");
  console.log("========currentUser", currentUser);
  if (currentUser && currentUser.data[0].role === "ADMIN") {
    history.push("/admin/dashboard");
  } else if (currentUser && currentUser.data[0].role === "STUDENT") {
    history.push("/dashboard");
  } else if (currentUser && currentUser.data[0].role === "MENTOR") {
    history.push("/teacher/dashboard");
  }
  // if (currentUser) {
  //   // history.push("/admin/dashboard");
  //   // } else {
  //   //   history.push("/admin");
  // }

  return (
    <>
      <Switch>
        <Router>
          {/* <Redirect exact={true} from="/" to="/login" /> */}
          {/* <Redirect exact={true} from="/admin" to="/admin/login" /> */}
          {/* <Route exact path="/" render={() => <LoginNew />} /> */}
          {/* <Routes> */}
          <Route exact={true} path="/" render={() => <Home />} />
          <Route exact={true} path="/login" render={() => <LoginNew />} />

          <Route exact={true} path="/register" render={() => <SignUpNew />} />
          {/* <Route exact={true} path='/home' render={() => <Home />} /> */}
          <Route
            exact={true}
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
          <ProtectedRoute
            exact
            path="/playCourse/:id"
            component={PlayVideoCourses}
          />
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

          {/* ADMIN ROUTES */}
          <Route exact={true} path="/admin" render={() => <AdminLogin />} />
          <ProtectedRoute
            exact={true}
            path="/admin/dashboard"
            component={AdminDashboard}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/my-profile"
            component={AdminMyProfile}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/edit-profile"
            component={AdminEditPersonalDetails}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/settings"
            component={AdminMySettings}
          />
          {/* <ProtectedRoute
            exact={true}
            path="/admin/logout"
            component={AdminLogoutView}
          /> */}
          {/* <Route
            exact={true}
            path='/admin/tickets'
            component={AdminTicketsPage}
          /> */}
          <ProtectedRoute
            exact={true}
            path="/admin/badges"
            component={AdminChallengesComp}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/new-badges"
            component={AdminNewBadge}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/all-courses"
            component={AdminCourses}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/course-details"
            component={AdminCourseView}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/addcourses-details"
            component={AddCoursesDetails}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/playvideo/:id"
            component={AdminPlayVideoCourses}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/add-course"
            component={AdminAddCourses}
          />
          <Route
            exact={true}
            path="/admin/forgotpassword"
            component={AdminForgotPassword}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/userlist"
            component={AdminUserList}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/userprofile"
            component={CommonUserProfile}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/notifications"
            component={AdminNotification}
          />

          <ProtectedRoute
            exact={true}
            path="/admin/add-mentor"
            component={AdminAddMentor}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/add-evaluator"
            component={AdminEvaluator}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/edit-evaluator"
            component={EditEvaluator}
          />

          <ProtectedRoute
            exact={true}
            path="/admin/problem-categories"
            // path='/admin/problem-categories'
            component={AdminProblemcategory}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/add-problem-category"
            component={AdminAddProblemcategory}
          />

          {/* <Route exact={true} path="/admin/ideas" component={AdminIdeas} /> */}
          <ProtectedRoute
            exact={true}
            path="/admin/reassign"
            component={AdminReassign}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/idea-details"
            component={IdeaDetails}
          />
          <ProtectedRoute exact={true} path="/admin/faq" component={AdminFaq} />
          <ProtectedRoute
            exact={true}
            path="/admin/New-faq"
            component={AddNewFaq}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/edit-faq/:faqid"
            component={EditFaq}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/add-new-faq-category"
            component={AddNewFaqCategory}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/all-tickets"
            component={AdminTickets}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/tickets"
            component={AdminTickets}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/registered-schools"
            component={AdminAllSchools}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/register-new-schools"
            component={AddNewSchool}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/sessions"
            component={AdminSessions}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/create-sessions"
            component={AdminCreateNewSessions}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/news"
            component={AdminNews}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/add-news"
            component={AdminAddNews}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/add-news-categories"
            component={AdminAddNewsCategory}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/signup"
            component={StudentSignup}
          />
          <ProtectedRoute
            exact={true}
            path="/admin/ideas"
            component={AdminIdeas}
          />

          <ProtectedRoute
            exact={true}
            path="/admin/chalenges"
            component={AdminBadgesComp}
          />

          <ProtectedRoute
            exact={true}
            path="/admin/reports"
            component={AdminBadgesComp}
          />

          {/* TEACHERS ROUTES */}
          <Route exact={true} path="/teacher" render={() => <TeacherLogin />} />
          <ProtectedRoute
            exact={true}
            path="/teacher/dashboard"
            component={TeacherDashboard}
          />
          {/* <ProtectedRoute
            exact={true}
            path="/teacher/logout"
            component={TeacherLogoutView}
          /> */}
          <ProtectedRoute
            exact={true}
            path="/teacher/faq"
            component={TeacherFaqPage}
          />
          <ProtectedRoute
            exact={true}
            path="/teacher/teamlist"
            component={TeacherTeamList}
          />
        </Router>
        <ProtectedRoute
          exact={true}
          path="/teacher/create-team"
          component={TeacherCreateTeam}
        />
      </Switch>
    </>
  );
};

export default Routers;
