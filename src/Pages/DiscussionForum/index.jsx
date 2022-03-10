import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./style.scss";
import { InputWithSearchComp } from "../../stories/InputWithSearch/InputWithSearch";
import { Button } from "../../stories/Button";
import ForumIcon from "../../assets/img/forumIcon.svg";
import badgesBg from "../../assets/img/badge_bg.png";
import { Avatar, Badge } from "antd";
import AvatarImg from "../../assets/img/Avatar.png";
import { SwiperComp } from "../../stories/SwiperComp/Swiper";
import SwiperImg from "../../assets/img/swiperImg.png";
import PostCard from "../../components/PostCard";
import Post1 from "../../assets/img/post1.svg";
import Post2 from "../../assets/img/post2.svg";
import newImg from "../../assets/img/newBlog.svg";
import { Link, withRouter } from 'react-router-dom';

const DiscussionForum = (props) => {
  const swiperProps = {
    options: [
      {
        slide: SwiperImg,
      },
      {
        slide: SwiperImg,
      },
      {
        slide: SwiperImg,
      },
      {
        slide: SwiperImg,
      },
      {
        slide: SwiperImg,
      },
      {
        slide: SwiperImg,
      },
     
    ],
    slidesPerView: 4,
    spaceBetween: 2,
  };
  const NewsList = [
    {
      title: "Unisolve News",
      imgItems: "",
    },
    {
      title: "Idea Case Studies",
      imgItems: "",
    },
  ];
  return (
    <div className="discussion-forum">
      <Row className="forum-head m-0 text-align-left">
        <Col md={{ span: 10, offset: 1 }}>
          <img src={ForumIcon} className="formIcon" />
          <Row className="m-0">
            <Col
              xs={12}
              sm={12}
              md={12}
              xl={6}
              className="my-auto mb-5 mb-md-5 mb-xl-0"
            >
              <h1 className="forum-title my-auto">Unisolve Discussion Forum</h1>
            </Col>

            <Col xs={12} sm={12} md={12} xl={6}>
              <div className="d-flex searchbar-btn">
                <InputWithSearchComp
                  className={"search-rounded"}
                  placeholder="Search discussion forum"
                />
                <Button
                  label="Ask a question"
                  btnClass="primary"
                  size="small"
                  // onClick={() => props.history.push('/tickets')}
                />
              </div>
            </Col>

            {/* <Col md={4}>
              <InputWithSearchComp
                className={"search-rounded"}
                placeholder="Search discussion forum"
              />
            </Col>
            <Col md={2}>
              <Button
                label="Ask a question"
                btnClass="primary"
                size="small"
              />
            </Col> */}
            <Col md={12} className="bg-white rounded p-5 shareLearn">
              <h2>Share. Learn. Grow</h2>
              <p className="learn-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam
              </p>
              <p className="learn-text">
                Class aptent taciti sociosqu ad litora torquent.
              </p>
            </Col>
          </Row>
          <Row className="shareLearn">
            {/* <Col xs={6}>
              <h2>Share. Learn. Grow</h2>
              <p className="learn-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam
              </p>
              <p className="learn-text">
                Class aptent taciti sociosqu ad litora torquent.
              </p>
            </Col> */}
            <Col xs={6}></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(DiscussionForum);
