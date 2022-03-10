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
                onClick={() => props.history.push('/querySection')}
              />
            </Col>
          </Row>
          <Row className="shareLearn m-0">
            <Col xs={6} className="p-0">
              <div className="p-5">
                <h2>Share. Learn. Grow</h2>
                <p className="learn-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam
                </p>
                <p className="learn-text">
                  Class aptent taciti sociosqu ad litora torquent.
                </p>
              </div>
            </Col>
            <Col xs={6} className="p-0">
              <img className="w-100" src={badgesBg} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="forum-body m-0 text-align-left">
        <Col md={{ span: 10, offset: 1 }}>
          <Row className="m-0">
            <Col xs={8}>
              <div className="forum-box">
                <p>
                  <Avatar src={AvatarImg} /> Ritu
                </p>
                <p>What do you want to ask or share?</p>
              </div>
              <div className="forum-box slider-forum mt-2">
                <p>See discussions by categories</p>
                <SwiperComp {...swiperProps} />
              </div>

              <div className="forum-box mt-5">
                <PostCard img={Post2} />
              </div>

              <div className="forum-box mt-5">
                <PostCard img={Post1} />
              </div>
            </Col>
            <Col xs={4}>
              {NewsList.map((news, index) => {
                return (
                  <div className={`news-update news-update-${index}`}>
                    <p className="news-title m-0">{news.title}</p>
                    <hr></hr>
                    {swiperProps.options.map((blog, index) => {
                      return (
                        <div className={`news-box news-box-${index}`} key={index}>
                          <div>
                            <img src={newImg} />
                          </div>
                          <div className="new-content">
                            <p className="img-title">
                              Electric cars gain Steam
                            </p>
                            <p className="post-updatedTime">
                              1d ago . 397 readers
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default withRouter(DiscussionForum);
