import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { Menu } from 'react-bootstrap';
import './style.scss';
import AdminCourses from '../../Admin/Courses/index';
import AdminPlayVideoCourses from '../../Admin/Courses/AdminPlayVideoCourses';

export default function Layout() {
    return (
        <div className="sideBar">
            <Row className="m-0">
                <Col xs={6} md={2} className="app__sidebar">
                    <Menu />
                </Col>
                <Col xs={12} md={10} className="app__content p-0">
                    <Switch>
                        <Route
                            path="/admin/all-courses"
                            component={AdminCourses}
                        />
                        <Route
                            path="/admin/playvideo"
                            component={AdminPlayVideoCourses}
                        />
                    </Switch>
                </Col>
            </Row>
        </div>
    );
}
