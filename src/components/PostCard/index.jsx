import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Avatar, Badge } from "antd";
import AvatarImg from "../../assets/img/avatar1.png";
import "./style.scss";

import { BsDot } from "react-icons/bs";
import ArrowDown from "../../assets/img/arrowDown.svg";
import ArrowUp from "../../assets/img/arrowUp.svg";
import Comments from "../../assets/img/comments.svg";
import ShareIcon from "../../assets/img/shareIcon.svg";
import ActionIcon from "../../assets/img/dots-three-outline.svg";

const PostCard = (props) => {
  return (
    <div className="post-card">
      <Card>
        <Card.Body>
          <Card.Text>
            <p className="post-title">
              <Avatar src={AvatarImg} /> Raj Sharma
              <span className="posted-time">posted 1 min ago</span>
            </p>
            <p className="post-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam?
            </p>
          </Card.Text>
          <Card.Img variant="top" src={props.img} />

          <Card.Text className="pt-4 post-info">
            <span className="p-2">830 Views</span>
            <span className="p-2">
              <BsDot className="post-dot" />
              731 upvotes
            </span>
            <span className="p-2">
              <BsDot className="post-dot" />
              362 Shares
            </span>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex post-info justify-content-between">
            <div>
              <span className="p-2">
                <img src={ArrowUp} className="post-icons" />
                 731
              </span>
              <span className="p-2">
                <img src={ArrowDown} className="post-icons" />
                 36
              </span>
              <span className="p-2">
                <img src={Comments} className="post-icons" />
                 26
              </span>
            </div>
            <div>
              <span className="p-2">
                <img
                  src={ShareIcon}
                  className="post-icons"
                />
              </span>
              <span className="p-2">
                <img
                  src={ActionIcon}
                  className="post-icons"
                />
              </span>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default PostCard;
