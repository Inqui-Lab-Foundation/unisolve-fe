import React from "react";
import { Switch, Route } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";

import Dashboard from "../../Pages/Dashboard";
import BadgesComp from "../../Pages/Badges/Badges";
import Courses from "../../Pages/Courses";
import CourseView from "../../Pages/Courses/coursesView";
import FaqPage from "../admin/HelpPages/FaqPage";
import PlayVideoCourses from "../../Pages/Courses/PlayVideo";
import Menu from "./Menu";
import { Row, Col } from "react-bootstrap";
import "./style.scss";
import Notification from "../../Pages/Notification";
import TicketsPage from "../admin/HelpPages/Ticket";
import NewTicket from "../../Pages/HelpPages/NewTicket";

// import Ideas from "../../Pages/Ideas";
import Ideas from "../Ideas";

import DiscussionForum from "../../Pages/DiscussionForum";
import QuerySection from "../../Pages/DiscussionForum/QuerySection";
import TeamMentorsPage from "../../Pages/TeamsMentors";
import AddNewMember from "../../Pages/TeamsMentors/AddNewMember";
import EditMember from "../../Pages/TeamsMentors/EditMember";
import AddNewMentor from "../../Pages/TeamsMentors/AddNewMentor";
import TicketViewDetails from "../../Pages/HelpPages/TicketViewDetails";
import IdeasPage from "../../Pages/Ideas/IdeasPage";
import SubmittedIdeas from "../../Pages/Ideas/SubmittedIdeas";




export default function Layout() {
  return (
    <div className="sideBar">
      <Row className="m-0">
        <Col xs={6} md={2} className="app__sidebar">
          <Menu />
        </Col>
        <Col xs={12} md={10} className="app__content p-0">
          <Switch>
            <Route path="/about" component={Dashboard} />
            <Route path="/badges" component={BadgesComp} />
            <Route path="/admin/ideas" component={Ideas} />
            <Route path="/ideasPage" component={IdeasPage} />
            <Route path="/submittedIdeas" component={SubmittedIdeas} />
            <Route path="/courses" component={Courses} />
            <Route path="/coursesView" component={CourseView} />
            <Route path="/playCourse" component={PlayVideoCourses} />
            <Route path="/notification" component={Notification} />
            <Route path="/admin/faq" component={FaqPage} />
            <Route path="/admin/tickets" component={TicketsPage} />
            <Route path="/NewTicket" component={NewTicket} />
            <Route path="/discussionForum" component={DiscussionForum} />
            <Route path="/querySection" component={QuerySection} />
            <Route path="/teams" component={TeamMentorsPage} />
            <Route path="/addNewMember" component={AddNewMember} />
            <Route path="/editMember" component={EditMember} />
            <Route path="/viewTicketDetails" component={TicketViewDetails} />
          </Switch>
        </Col>
      </Row>
    </div>
  );
}
