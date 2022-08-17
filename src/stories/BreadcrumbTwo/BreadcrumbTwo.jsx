import React from "react";
// import PropTypes from "prop-types";
import "./style.scss";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

export const BreadcrumbTwo = ({ title, options }) => {
    return (
        <div className="secondary-breadcrumb">
            <h1>{title}</h1>
            <Breadcrumb listTag="div">
                {options.map((sub) => {
                    return (
                        <BreadcrumbItem key={sub.title}>
                            <Link className="anchor"  exact="true" to={sub.path}>
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
