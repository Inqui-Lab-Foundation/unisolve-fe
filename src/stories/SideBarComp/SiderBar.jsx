import React, { lazy, Suspense, useState } from "react";
import "./style.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Link,
} from "react-router-dom";

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: props.location.pathname,
      items: [
        {
          path: "/" /* path is used as id to check which NavItem is active basically */,
          name: "Dashboard",
          css: "fa fa-fw fa-home",
          key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */,
        },
        {
          path: "/about",
          name: "Courses",
          css: "fa fa-fw fa-clock",
          key: 2,
        },
        {
          path: "/",
          name: "Teams & Mentor",
          css: "fas fa-hashtag",
          key: 3,
        },
        {
          path: "/",
          name: "Badges",
          css: "fas fa-hashtag",
          key: 4,
        },
        {
          path: "/",
          name: "Ideas",
          css: "fas fa-hashtag",
          key: 5,
        },
      ],
    };
  }

  onItemClick = (path) => {
    this.setState({ activePath: path });
  };

  render() {
    const { items, activePath } = this.state;
    return (
      <Router>
        <div className="Side-menus">
          <h3>MAIN MENU</h3>
          {items.map((item) => {
            return (
              <NavItem
                path={item.path}
                name={item.name}
                css={item.css}
                onItemClick={this.onItemClick}
                active={item.path === activePath}
                key={item.key}
              />
            );
          })}

          <h3>GENERAL</h3>
        </div>
      </Router>
    );
  }
}
const RouterSideNav = withRouter(SideNav);

class NavItem extends React.Component {
  handleClick = () => {
    const { path, onItemClick } = this.props;
    onItemClick(path);
  };

  render() {
    const { active } = this.props;
    return (
      <div active={active} className="menu-list">
        <Link
          to={this.props.path}
          className={this.props.css}
          onClick={this.handleClick}
        >
          {this.props.name}
        </Link>
      </div>
    );
  }
}

export const SideBarComp = ({ user, onLogin, onLogout, onCreateAccount }) => {
  const profileProps = {
    label: "Ritu",
    options: ["Profile", "Settings", "Logout"],
  };
  return (
    <>
      <div className="sideBar-comp">
        <Router>
          <RouterSideNav></RouterSideNav>
        </Router>
      </div>
    </>
  );
};

SideBarComp.propTypes = {};

SideBarComp.defaultProps = {};
