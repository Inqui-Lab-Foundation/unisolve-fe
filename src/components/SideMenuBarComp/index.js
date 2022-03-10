import React from "react";
import { Switch, Route } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";

import Dashboard from "../../Pages/Dashboard";
import BadgesComp from "../../Pages/Badges/Badges";
import Courses from "../../Pages/Courses";
import CourseView from "../../Pages/Courses/coursesView";
import FaqPage from "../../Pages/HelpPages/FaqPage";
import PlayVideoCourses from "../../Pages/Courses/PlayVideo";
import Menu from "./Menu";
import { Row, Col } from "react-bootstrap";
import "./style.scss";
import Notification from "../../Pages/Notification";
import TicketsPage from "../../Pages/HelpPages/Ticket";
import NewTicket from "../../Pages/HelpPages/NewTicket";
import Ideas from "../../Pages/Ideas";
import DiscussionForum from "../../Pages/DiscussionForum";
import QuerySection from "../../Pages/DiscussionForum/QuerySection";
import TeamMentorsPage from "../../Pages/TeamsMentors";
import AddNewMember from "../../Pages/TeamsMentors/AddNewMember";
import AddNewMentor from "../../Pages/TeamsMentors/AddNewMentor";

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
            <Route path="/ideas" component={Ideas} />
            <Route path="/courses" component={Courses} />
            <Route path="/coursesView" component={CourseView} />
            <Route path="/playCourse" component={PlayVideoCourses} />
            <Route path="/notification" component={Notification} />
            <Route path="/faq" component={FaqPage} />
            <Route path="/tickets" component={TicketsPage} />
            <Route path="/NewTicket" component={NewTicket} />
            <Route path="/discussionForum" component={DiscussionForum} />
            <Route path="/querySection" component={QuerySection} />
            <Route path="/teams" component={TeamMentorsPage} />
            <Route path="/addNewMember" component={AddNewMember} />
            <Route path="/addNewMentor" component={AddNewMentor} />
          </Switch>
        </Col>
      </Row>
    </div>
  );
}
