import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../../Student/Pages/Dashboard';
import BadgesComp from '../../Student/Pages/Badges/Badges';
import Courses from '../../Student/Pages/Courses';
import CourseView from '../../Student/Pages/Courses/coursesView';
import FaqPage from '../../Student/Pages/HelpPages/FaqPage';
import PlayVideoCourses from '../../Student/Pages/Courses/PlayVideo';
import Menu from './Menu';
import { Row, Col } from 'react-bootstrap';
import './style.scss';
import Notification from '../../Student/Pages/Notification';
import TicketsPage from '../../Student/Pages/HelpPages/Ticket';
import NewTicket from '../../Student/Pages/HelpPages/NewTicket';
import Ideas from '../../Student/Pages/Ideas';
import DiscussionForum from '../../Student/Pages/DiscussionForum';
import QuerySection from '../../Student/Pages/DiscussionForum/QuerySection';
import TeamMentorsPage from '../../Student/Pages/TeamsMentors';
import AddNewMember from '../../Student/Pages/TeamsMentors/AddNewMember';
import EditMember from '../../Student/Pages/TeamsMentors/EditMember';
import TicketViewDetails from '../../Student/Pages/HelpPages/TicketViewDetails';
import IdeasPage from '../../Student/Pages/Ideas/IdeasPage';
import SubmittedIdeas from '../../Student/Pages/Ideas/SubmittedIdeas';
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
                        <Route path="/ideasPage" component={IdeasPage} />
                        <Route
                            path="/submittedIdeas"
                            component={SubmittedIdeas}
                        />
                        <Route path="/courses" component={Courses} />
                        <Route path="/coursesView" component={CourseView} />
                        <Route
                            path="/playCourse"
                            component={PlayVideoCourses}
                        />
                        <Route path="/notification" component={Notification} />
                        <Route path="/faq" component={FaqPage} />
                        <Route path="/tickets" component={TicketsPage} />
                        <Route path="/NewTicket" component={NewTicket} />
                        <Route
                            path="/discussionForum"
                            component={DiscussionForum}
                        />
                        <Route path="/querySection" component={QuerySection} />
                        <Route path="/teams" component={TeamMentorsPage} />
                        <Route path="/addNewMember" component={AddNewMember} />
                        <Route path="/editMember" component={EditMember} />
                        <Route
                            path="/viewTicketDetails"
                            component={TicketViewDetails}
                        />
                    </Switch>
                </Col>
            </Row>
        </div>
    );
}
