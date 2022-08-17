import React from 'react';
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   CardImg,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
// } from "reactstrap";
import './style.scss';
// import { BsFilter } from 'react-icons/bs';
// import shuttleBadge from '../../assets/img/Shuttle_Badge_Color.png';
// import cupBadge from '../../assets/img/Cup_Badge_Color.png';
// import medalBadge from '../../assets/img/Medal_Badge_Color.png';
// import growthBadge from '../../assets/img/Growth_Badge_Color.png';

// import { ProgressComp } from "../../stories/Progress/Progress";
// import { BreadcrumbComp } from "../../stories/Breadcrumb/BreadcrumbComp";
// import { InputWithSearchComp } from "../../stories/InputWithSearch/InputWithSearch";
// import { CommonDropDownComp } from "../../stories/CommonDropdown/CommonDropdownComp";
// import { Button } from "../../stories/Button";
// import { BsPlusLg } from "react-icons/bs";
// import { Figure } from "react-bootstrap";
import Layout from '../../Admin/Layout';
// import { useHistory } from 'react-router-dom';

import PageConstruction from '../../components/PageUnderConstrcution';

// import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";

const BadgesComp = () => {
    // const history = useHistory();
    // const SearchProps = {
    //   placeholder: "Search Course",
    // };
    // const filterDropProps = {
    //   name: "Filter by",
    //   Icon: BsFilter,
    //   options: [
    //     { name: "Course - 1", path: "/playCourse" },
    //     { name: "Course - 2", path: "/playCourse" },
    //   ],
    // };

    // const progressProp = {
    //   label: "Progress",
    //   options: [{ id: 1, teams: "CSK", percent: 50, status: "active" }],
    // };
    // const ProgressCardList = [
    //   {
    //     icon: shuttleBadge,
    //     name: "Challenger",
    //     count: "300/600",
    //     text: "Lorem 50 ipsum dolor sit amet",
    //   },
    //   {
    //     icon: cupBadge,
    //     name: "Ten to the Fourth",
    //     count: "300/600",
    //     text: "Lorem 50 ipsum dolor sit amet",
    //   },
    //   {
    //     icon: medalBadge,
    //     name: "Collaborator",
    //     count: "300/600",
    //     text: "Lorem 50 ipsum dolor sit amet",
    //   },
    //   {
    //     icon: growthBadge,
    //     name: "Mad Scientist",
    //     count: "300/600",
    //     text: "Lorem 50 ipsum dolor sit amet",
    //   },
    //   {
    //     icon: shuttleBadge,
    //     name: "Making progress",
    //     count: "300/600",
    //     text: "Lorem 50 ipsum dolor sit amet",
    //   },
    //   {
    //     icon: medalBadge,
    //     name: "Badge Name",
    //     count: "300/600",
    //     text: "Lorem 50 ipsum dolor sit amet",
    //   },
    //   ,
    //   {
    //     icon: cupBadge,
    //     name: "Badge Name",
    //     count: "300/600",
    //     text: "Lorem 50 ipsum dolor sit amet",
    //   },
    //   ,
    //   {
    //     icon: medalBadge,
    //     name: "Badge Name",
    //     count: "300/600",
    //     text: "Lorem 50 ipsum dolor sit amet",
    //   },
    //   ,
    //   {
    //     icon: medalBadge,
    //     name: "Badge Name",
    //     count: "300/600",
    //     text: "Lorem 50 ipsum dolor sit amet",
    //   },
    // ];
    return (
        <Layout>
            <PageConstruction />
            {/* <div className='badges-page'>
        <Container className=' mt-2 '>
          <Row className='courses-head view-head w-100 mx-0 mt-5  mb-50'>
            <Col md={12} lg={6}>
              <h2 className='my-auto'>Badges</h2>
            </Col>
            <Col md={12} lg={6}>
              <div className='d-flex filter-drop w-100 pr-0'>
                <Row className='w-100'>
                  <Col md={6} lg={6}>
                    <InputWithSearchComp {...SearchProps} />
                  </Col>
                  <Col md={3} lg={3}>
                    <CommonDropDownComp {...filterDropProps} />
                  </Col>
                  <Col md={3} lg={3} className='text-right my-auto'>
                    <Button
                      btnClass='primary'
                      size='small'
                      Icon={BsPlusLg}
                      label='Add Badge'
                      onClick={() => history.push("/admin/new-badges")}
                    />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className='myBadges mb-50'>
          <Col>
            <Row className='progressCard justify-content-center'>
              {ProgressCardList.map((progress, i) => {
                return (
                  <Col key={i} xs={12} sm={6} md={6} xl={4} className='mb-4'>
                    <Card className='progress-card p-3  p-md-5'>
                      <div className='d-flex'>
                        <Figure className='my-auto' style={{ width: "7.4rem" }}>
                          <CardImg src={progress.icon} />
                        </Figure>
                        <CardBody className='progress-section'>
                          <CardTitle className='progress-name my-3'>
                            {progress.name}
                          </CardTitle>
                          <CardSubtitle className='progress-text'>
                            Points: <b>600</b>
                            <div className='progress-text mt-1'>
                              {progress.text}
                            </div>
                          </CardSubtitle>
                        </CardBody>
                      </div>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Container>
      </div> */}
        </Layout>
    );
};

export default BadgesComp;
