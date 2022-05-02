import React from "react";
import { Switch, Route } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";

import "./style.scss";
import AdminCourses from "../../Admin/Courses";

export default function Layout() {
  return (
    <div className="sideBar">
      <Row className="m-0">
        <Col xs={6} md={2} className="app__sidebar">
          <Menu />
        </Col>
        <Col xs={12} md={10} className="app__content p-0">
          <Switch>
            <Route path="/admin/all-courses" component={AdminCourses} />
          </Switch>
        </Col>
      </Row>
    </div>
  );
}
