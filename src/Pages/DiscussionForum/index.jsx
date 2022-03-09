import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./style.scss";
import { InputWithSearchComp } from "../../stories/InputWithSearch/InputWithSearch";
import { Button } from "../../stories/Button";
import ForumIcon from "../../assets/img/forumIcon.svg";
const DiscussionForum = () => {
  return (
    <div className="discussion-forum">
      <Row className="forum-head m-0 text-align-left">
        <Col md={{ span: 10, offset: 1 }}>
          <img src={ForumIcon} className="formIcon" />
          <Row className="m-0">
            <Col xs={6}>
              <h1 className="forum-title">Unisolve Discussion Forum</h1>
            </Col>
            <Col xs={4}>
              <InputWithSearchComp
                className={"search-rounded"}
                placeholder="Search discussion forum"
              />
            </Col>
            <Col xs={2}>
              <Button
                label="Ask a question"
                btnClass="primary"
                size="small"
                // onClick={() => props.history.push('/tickets')}
              />
            </Col>
          </Row>
          <Row className="shareLearn">
            <Col xs={6}>
              <h2>Share. Learn. Grow</h2>
              <p className="learn-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam
              </p>
              <p className="learn-text">
                Class aptent taciti sociosqu ad litora torquent.
              </p>
            </Col>
            <Col xs={6}></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default DiscussionForum;
