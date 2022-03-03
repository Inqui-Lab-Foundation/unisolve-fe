import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./style.scss";
import { BsChevronRight, BsFilter } from "react-icons/bs";
import badgesBg from "../../assets/img/badge_bg.png";
import starBadge from "../../assets/img/Star_Badge.png";
import likeBadge from "../../assets/img/like_badge.png";
import MonitorBadge from "../../assets/img/Monitor_Badge.png";
import shuttleBadge from "../../assets/img/Shuttle_Badge_Color.png";
import cupBadge from "../../assets/img/Cup_Badge_Color.png";
import medalBadge from "../../assets/img/Medal_Badge_Color.png";
import growthBadge from "../../assets/img/Growth_Badge_Color.png";


import {Progres} from "../../stories/Progress/Progress"

const BadgesComp = () => {
  const badgesList = [
    {
      icon: starBadge,
      name: "Knowledge Keeper",
      date: "19 November, 2021 ",
    },
    {
      icon: likeBadge,
      name: "Rockstar",
      date: "19 November, 2021 ",
    },
    {
      icon: MonitorBadge,
      name: "Badge Name",
      date: "19 November, 2021 ",
    },
    {
      icon: likeBadge,
      name: "Badge Name",
      date: "19 November, 2021 ",
    },
    {
      icon: starBadge,
      name: "Knowledge Keeper",
      date: "19 November, 2021 ",
    },
  ];
  const progressProp = {
    label: "Progress",
  options: [
    { id: 1, teams: "CSK", percent: 50, status: "active" },
  ]
  }
  const ProgressCardList = [
    {
      icon: shuttleBadge,
      name: "Challenger",
      count:"300/600",
      text: "Lorem 50 ipsum dolor sit amet",
    },
    {
      icon: cupBadge,
      name: "Ten to the Fourth",
      count:"300/600",
      text: "Lorem 50 ipsum dolor sit amet",
    },
    {
      icon: medalBadge,
      name: "Collaborator",
      count:"300/600",
      text: "Lorem 50 ipsum dolor sit amet",
    },
    {
      icon: growthBadge,
      name: "Mad Scientist",
      count:"300/600",
      text: "Lorem 50 ipsum dolor sit amet",
    }, {
      icon: shuttleBadge,
      name: "Making progress",
      count:"300/600",
      text: "Lorem 50 ipsum dolor sit amet",
    },{
      icon: medalBadge,
      name: "Badge Name",
      count:"300/600",
      text: "Lorem 50 ipsum dolor sit amet",
    },,{
      icon: cupBadge,
      name: "Badge Name",
      count:"300/600",
      text: "Lorem 50 ipsum dolor sit amet",
    },,{
      icon: medalBadge,
      name: "Badge Name",
      count:"300/600",
      text: "Lorem 50 ipsum dolor sit amet",
    },,{
      icon: medalBadge,
      name: "Badge Name",
      count:"300/600",
      text: "Lorem 50 ipsum dolor sit amet",
    },
  ];
  return (
    <div className="badges-page">
      <Row className="m-0 badges-head">
        <Col className="p-0 badges-content">
          <div>
            <h2>Learn more and earn Badges</h2>
            <p className="pt-1">
              The more badges you earn, the higher your level - and the more
              you’re recognized in the community for your contributions.
            </p>
          </div>
        </Col>
        <Col className="p-0">
          <div className="courses-head">
            <div>
              <img className="badgeBg" src={badgesBg} />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="myBadges">
        <Col>
          <h2 className="title">MY Badges</h2>
          <div className="d-flex badgesCard">
            {badgesList.map((badge) => {
              return (
                <div className="badge-card">
                  <img src={badge.icon} />
                  <p className="badge-name mt-3">{badge.name}</p>
                  <p className="badge-date">
                    EARNED ON: <span className="badge-time">{badge.date}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
      <Row className="myBadges">
        <Col>
          <h2 className="title">Possible Badges</h2>
          <div className="d-flex progressCard">
            {ProgressCardList.map((progress) => {
              return (
                <div className="progress-card">
                  <div className="d-flex">
                    <img src={progress.icon} />
                    <div className="progress-section">
                      <p className="progress-name mt-3">{progress.name}<span className="progress-count">{progress.count}</span></p>
                      <p className="progress-text">
                      <Progres {...progressProp}/>
                      <div className="progress-text mt-1">
                      {progress.text}
                      </div>
                       
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BadgesComp;
