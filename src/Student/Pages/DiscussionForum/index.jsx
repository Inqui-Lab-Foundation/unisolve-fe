import React from "react";
// import { Row, Col } from "react-bootstrap";
import "./style.scss";
// import { InputWithSearchComp } from "../../stories/InputWithSearch/InputWithSearch";
// import { Button } from "../../stories/Button";
// import ForumIcon from "../../assets/img/forumIcon.svg";
// import badgesBg from "../../assets/img/badge_bg.png";
// import { Avatar, Badge } from "antd";
// import AvatarImg from "../../assets/img/Avatar.png";
// import { SwiperComp } from "../../stories/SwiperComp/Swiper";
// import SwiperImg from "../../assets/img/swiperImg.png";
// import PostCard from "../../components/PostCard";
// import Post1 from "../../assets/img/post1.svg";
// import Post2 from "../../assets/img/post2.svg";
// import newImg from "../../assets/img/newBlog.svg";
import {  withRouter } from "react-router-dom";
import Layout from "../../Layout.jsx";
// import { Container } from "reactstrap";
import PageConstruction from "../../../components/PageUnderConstrcution";
const DiscussionForum = () => {
    // const swiperProps = {
    //     options: [
    //         {
    //             slide: SwiperImg,
    //         },
    //         {
    //             slide: SwiperImg,
    //         },
    //         {
    //             slide: SwiperImg,
    //         },
    //         {
    //             slide: SwiperImg,
    //         },
    //         {
    //             slide: SwiperImg,
    //         },
    //         {
    //             slide: SwiperImg,
    //         },
    //     ],
    //     slidesPerView: 4,
    //     spaceBetween: 2,
    // };
    // const NewsList = [
    //     {
    //         title: "Unisolve News",
    //         imgItems: "",
    //     },
    //     {
    //         title: "Idea Case Studies",
    //         imgItems: "",
    //     },
    // ];
    return (
        <Layout>
            <PageConstruction />
            {/* <div className="discussion-forum">
        <Row className="forum-head m-0 text-align-left">
          <Col md={{ span: 10, offset: 1 }}>
            <img src={ForumIcon} className="formIcon" />
            <Row>
              <Col
                xs={12}
                sm={12}
                md={12}
                xl={6}
                className="my-auto mb-5 mb-md-5 mb-xl-0"
              >
                <h1 className="forum-title my-auto">
                  Unisolve Discussion Forum
                </h1>
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
                    onClick={() => props.history.push("/querySection")}
                  />
                </div>
              </Col>
              <Col md={12} className="bg-white rounded p-5 shareLearn">
                <h2>Share. Learn. Grow</h2>
                <p className="learn-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam
                </p>
                <p className="learn-text">
                  Class aptent taciti sociosqu ad litora torquent.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
   
        <div className="forum-body m-0 text-align-left">
          <Container>
            <Row>
              <Col md={8}>
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
              <Col md={4}>
                {NewsList.map((news, index) => {
                  return (
                    <div key={index} className={`news-update news-update-${index}`}>
                      <p className="news-title m-0">{news.title}</p>
                      <hr></hr>
                      {swiperProps.options.map((blog, index) => {
                        return (
                          <div
                            className={`news-box news-box-${index}`}
                            key={index}
                          >
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
          </Container>
        </div>
      </div> */}
        </Layout>
    );
};

export default withRouter(DiscussionForum);
