import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import "./style.scss";
import { BsChevronRight, BsFilter } from "react-icons/bs";
import shuttleBadge from "../../assets/img/Shuttle_Badge_Color.png";
import cupBadge from "../../assets/img/Cup_Badge_Color.png";
import medalBadge from "../../assets/img/Medal_Badge_Color.png";
import growthBadge from "../../assets/img/Growth_Badge_Color.png";

import { ProgressComp } from "../../stories/Progress/Progress";
import { BreadcrumbComp } from "../../stories/Breadcrumb/BreadcrumbComp";
import { InputWithSearchComp } from "../../stories/InputWithSearch/InputWithSearch";
import { CommonDropDownComp } from "../../stories/CommonDropdown/CommonDropdownComp";
import { Button } from "../../stories/Button";
import { BsPlusLg } from "react-icons/bs";
import { Figure } from "react-bootstrap";
import Layout from "../../Admin/Layout";
import { useHistory, useLocation } from "react-router-dom";

import PageConstruction from "../../components/PageUnderConstrcution";

// import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";

const BadgesComp = () => {
  return (
    <Layout>
      <PageConstruction />
    </Layout>
  );
};

export default BadgesComp;
