import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Breadcrumb, BreadcrumbItem, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

export const BreadcrumbTwo = ({ title, options, ...props }) => {
  return (
    <div className="secondary-breadcrumb">
      <h1>{title}</h1>
      <Breadcrumb listTag="div">
        {options.map((sub, i) => {
          return (
            <BreadcrumbItem>
              <Link className="anchor" exact to={sub.path}>
                {sub.title}
              </Link>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </div>
  );
};

BreadcrumbTwo.defaultProps = {
  title: "Home",
  options: [
    {
      title: "Course",
      path: "/",
    },
  ],
};
