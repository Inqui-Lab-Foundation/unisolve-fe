import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Badges from "../../Pages/Badges";
import Menu from "./Menu";
import {Row, Col} from "react-bootstrap";
import "./style.scss";

export default function Layout() {
  return (
    <div className="sideBar">
        <Row className="m-0">
        <Col xs={6} md={2} className="app__sidebar">
        <Menu />

      </Col>
      <Col xs={12} md={10} className="app__content">
        <Switch>
          <Route path="/about" component={Dashboard} />
          <Route path="/badges" component={Badges} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Col>
        </Row>
      

     
    </div>
  );
}
