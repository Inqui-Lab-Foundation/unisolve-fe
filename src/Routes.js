import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    // useHistory
} from 'react-router-dom';

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { createBrowserHistory, createHashHistory } from "history";

import { ProtectedRoute } from './helpers/authHelper';

import Dashboard from './Student/Pages/Dashboard';
import BadgesComp from './Student/Pages/Badges/Badges';
import Ideas from './Student/Pages/Ideas';

import './i18n';
import SignUpNew from './Student/Pages/SignUpNew';
import LoginNew from './Student/Pages/LoginNew';
import CreateNewPassword from './Student/Pages/CreateNewPassword';
import PasswordEmailConfirmation from './Student/Pages/PasswordEmailConfirmation';
import ForgotPassword from './Student/Pages/ForgotPassword';

import MySettings from './Student/Pages/MySettings';
import EditPersonalDetails from './Student/Pages/EditPersonalDetails';
import MyProfile from './Student/Pages/MyProfile';
// import { getCurrentUser } from './helpers/Utils';
import Courses from './Student/Pages/Courses';
import CourseView from './Student/Pages/Courses/coursesView';
import PlayVideoCourses from './Student/Pages/Courses/PlayVideo';
import Notification from './Student/Pages/Notification';
import SampleCourseList from './Student/Pages/SampleCourseList';
import FaqPage from './Student/Pages/HelpPages/FaqPage';
import TicketsPage from './Student/Pages/HelpPages/Ticket';
import NewTicket from './Student/Pages/HelpPages/NewTicket';
import DiscussionForum from './Student/Pages/DiscussionForum';
import QuerySection from './Student/Pages/DiscussionForum/QuerySection';
import TeamMentorsPage from './Student/Pages/TeamsMentors';
import TeamMemberPage from './Student/Pages/TeamsMentors/TeamMember';
import AddNewMember from './Student/Pages/TeamsMentors/AddNewMember';
import EditMember from './Student/Pages/TeamsMentors/EditMember';
import IdeasPage from './Student/Pages/Ideas/IdeasPage';
import SubmittedIdeas from './Student/Pages/Ideas/SubmittedIdeas';
import TicketViewDetails from './Student/Pages/HelpPages/TicketViewDetails';
// ADMIN ROUTES
import AdminLogin from './Admin/LoginNew';
import AdminDashboard from './Admin/Dashboard';
import AdminMyProfile from './Admin/MyProfile';
import AdminMySettings from './Admin/MySettings';

import AdminBadgesComp from './Admin/Badges/Badges';
import AdminNewBadge from './Admin/Badges/NewBadge';
import AdminCourses from './Admin/Courses';
import AdminCourseView from './Admin/Courses/coursesView';
import AddCoursesDetails from './Admin/Courses/AddCoursesDetails';
import AdminAddCourses from './Admin/Courses/AdminAddCourses';
import AdminPlayVideoCourses from './Admin/Courses/AdminPlayVideoCourses';
import AdminForgotPassword from './Admin/ForgotPassword';
import AdminNotification from './Admin/Notification';
import AdminUserList from './Admin/UserList/Ticket';
import AdminAddMentor from './Admin/UserList/AddNewMentor';
import CommonUserProfile from './Admin/UserList/CommonUserProfile';
import AdminEvaluator from './Admin/UserList/AddNewEvaluator';
import EditEvaluator from './Admin/UserList/EditNewEvaluator';
import AdminProblemcategory from './Admin/ProblemCategory';
import AdminAddProblemcategory from './Admin/ProblemCategory/AdminAddProblemCategory';
import AdminEditPersonalDetails from './Admin/EditPersonalDetails';
import AdminIdeas from './Admin/Ideas/Ticket';
import AdminReassign from './Admin/Ideas/ReassignEvaluator';
import IdeaDetails from './Admin/Ideas/SubmittedIdeas';
import AdminFaq from './Admin/FAQ/ManageFaq';
import AddNewFaq from './Admin/FAQ/AddNewFaq';
import EditFaq from './Admin/FAQ/EditFaq';
import EditFaqCate from './Admin/FAQ/EditFaqCategory';
import AddNewFaqCategory from './Admin/FAQ/AddNewFaqCategory';
import AdminTickets from './Admin/Tickets/Ticket';
// import AdminTicketsViewDetails from "./Admin/Tickets/TicketsCard";
import AdminAllSchools from './Admin/Schools/Ticket';
import AddNewSchool from './Admin/Schools/AddNewSchool';
import AdminSessions from './Admin/Sessions/Ticket';
import AdminCreateNewSessions from './Admin/Sessions/CreateNewSession';
import AdminNews from './Admin/News/Ticket';
import AdminAddNews from './Admin/News/AddNews';
import AdminAddNewsCategory from './Admin/News/AddNewsCategory';
import StudentSignup from './Admin/StudentSignup';
import Home from './home/home';
import AdminChallengesComp from './Admin/Challenges/Badges';
import Preservey from './Admin/PreSurvey';

// const hashHistory = createHashHistory();.

// TEACHER ROUTES
import TeacherLogin from './Teachers/LoginNew';
import TeacherDashboard from './Teachers/Dashboard';
import TeacherMySettings from './Teachers/MySettings';

import TeacherFaqPage from './Teachers/HelpPages/FaqPage';

import TeacherTeamList from './Teachers/Teams/Ticket';
import TeacherCreateTeam from './Teachers/Teams/CreateTeam';
import TeacherPreservey from './Teachers/PreSurvey/PreSurvey';
import StudentPreservey from './Student/PreSurvey/PreSurvey';
import TeacherEditTeam from './Teachers/Teams/EditTeam';
import TeacherTeamMember from './Teachers/Teams/CreateTeamMember';
import TeacherEditTeamMember from './Teachers/Teams/EditTeamMember';
import TeacherPlayVideo from './Teachers/Courses/TeacherPlayVideo';
import TeacherMyProfile from './Teachers/MyProfile';

const Routers = () => {
    // const history = useHistory();
    // const currentUser = getCurrentUser('current_user');
    // if (currentUser && currentUser.data[0].role === 'ADMIN') {
    //     history.push('/admin/dashboard');
    // } else if (currentUser && currentUser.data[0].role === 'STUDENT') {
    //     history.push('/dashboard');
    // } else if (currentUser && currentUser.data[0].role === 'TEACHER') {
    //     history.push('/teacher/dashboard');
    // }
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
                    <Route
                        exact={true}
                        path="/register"
                        render={() => <SignUpNew />}
                    />
                    <Route
                        exact={true}
                        path="/login"
                        render={() => <LoginNew />}
                    />

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

                    <ProtectedRoute
                        exact
                        path="/dashboard"
                        component={Dashboard}
                    />
                    <ProtectedRoute exact path="/about" component={Dashboard} />
                    <ProtectedRoute exact path="/ideas" component={IdeasPage} />
                    <ProtectedRoute path="/ideasPage" component={Ideas} />
                    <ProtectedRoute
                        path="/submittedIdeas"
                        component={SubmittedIdeas}
                    />
                    <ProtectedRoute
                        exact
                        path="/badges"
                        component={BadgesComp}
                    />
                    <ProtectedRoute
                        exact
                        path="/teams"
                        component={TeamMentorsPage}
                    />
                    <ProtectedRoute
                        exact
                        path="/teams/member"
                        component={TeamMemberPage}
                    />
                    <ProtectedRoute exact path="/courses" component={Courses} />
                    <ProtectedRoute
                        exact
                        path="/coursesView"
                        component={CourseView}
                    />
                    <ProtectedRoute
                        exact
                        path="/playCourse/:id"
                        component={PlayVideoCourses}
                    />
                    <ProtectedRoute
                        exact
                        path="/notification"
                        component={Notification}
                    />
                    <ProtectedRoute
                        exact
                        path="/settings"
                        component={MySettings}
                    />
                    <ProtectedRoute exact path="/faq" component={FaqPage} />
                    <ProtectedRoute
                        exact
                        path="/tickets"
                        component={TicketsPage}
                    />
                    <ProtectedRoute
                        exact
                        path="/viewTicketDetails"
                        component={TicketViewDetails}
                    />
                    <ProtectedRoute path="/NewTicket" component={NewTicket} />
                    <ProtectedRoute
                        path="/discussionForum"
                        component={DiscussionForum}
                    />
                    <ProtectedRoute
                        path="/querySection"
                        component={QuerySection}
                    />
                    <ProtectedRoute
                        path="/addNewMember"
                        component={AddNewMember}
                    />
                    <ProtectedRoute path="/editMember" component={EditMember} />

                    <ProtectedRoute
                        exact
                        path="/my-profile"
                        component={MyProfile}
                    />
                    <ProtectedRoute
                        exact
                        path="/edit-details"
                        component={EditPersonalDetails}
                    />
                    <Route
                        exact
                        path="/samplelist"
                        component={SampleCourseList}
                    />

                    {/* ADMIN ROUTES */}
                    <Route
                        exact={true}
                        path="/admin"
                        render={() => <AdminLogin />}
                    />
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
                    <ProtectedRoute
                        exact={true}
                        path="/admin/faq"
                        component={AdminFaq}
                    />
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
                        path="/admin/edit-faqcategory"
                        component={EditFaqCate}
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

                    <ProtectedRoute
                        exact={true}
                        path="/admin/pre-servey"
                        component={Preservey}
                    />

                    {/* TEACHERS ROUTES */}
                    <Route
                        exact={true}
                        path="/teacher"
                        render={() => <TeacherLogin />}
                    />
                    <ProtectedRoute
                        exact={true}
                        path="/teacher/dashboard"
                        component={TeacherDashboard}
                    />

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
                    <ProtectedRoute
                        exact={true}
                        path="/teacher/create-team"
                        component={TeacherCreateTeam}
                    />
                    <ProtectedRoute
                        exact={true}
                        path="/teacher/pre-servey"
                        component={TeacherPreservey}
                    />
                    <ProtectedRoute
                        exact={true}
                        path="/teacher/edit-team"
                        component={TeacherEditTeam}
                    />
                    <ProtectedRoute
                        exact={true}
                        path="/teacher/create-team-member"
                        component={TeacherTeamMember}
                    />
                    <ProtectedRoute
                        exact={true}
                        path="/teacher/edit-team-member"
                        component={TeacherEditTeamMember}
                    />
                    <ProtectedRoute
                        exact={true}
                        path="/teacher/playvideo/:id"
                        component={TeacherPlayVideo}
                    />
                    <ProtectedRoute
                        exact={true}
                        path="/teacher/settings"
                        component={TeacherMySettings}
                    />
                    <ProtectedRoute
                        exact={true}
                        path="/teacher/my-profile"
                        component={TeacherMyProfile}
                    />
                    <ProtectedRoute
                        exact={true}
                        path="/student/pre-servey"
                        component={StudentPreservey}
                    />
                   
                </Router>
            </Switch>
        </>
    );
};

export default Routers;
