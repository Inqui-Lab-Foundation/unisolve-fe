import React from "react";
import "./style.scss";
import { Breadcrumb, BreadcrumbItem, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

export const BreadcrumbComp = ({
    title,
    subTitle,
    options,
    bgImage,
   
}) => {
    return (
        <div className={`common-breadcrumb  ${bgImage ? "bg-image" : ""}`}>
            <Row>
                <Col md={6}>
                    <h1>{title}</h1>
                    <h2>{subTitle}</h2>
                </Col>
                <Col md={6} className="my-auto">
                    <Breadcrumb listTag="div">
                        {options.map((sub, i) => {
                            return (
                                <BreadcrumbItem key={i}>
                                    <Link exact="true" to={sub.path}>
                                        {sub.title}
                                    </Link>
                                </BreadcrumbItem>
                            );
                        })}
                    </Breadcrumb>
                </Col>
            </Row>
        </div>
    );
};

BreadcrumbComp.defaultProps = {
    title: "Home",
    subTitle: "Sub Title",
    options: [
        {
            title: "Course",
            path: "/",
        },
    ],
    bgImage: true,
};
