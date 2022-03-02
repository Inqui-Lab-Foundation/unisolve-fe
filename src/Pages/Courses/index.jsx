import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link, withRouter } from 'react-router-dom';
import "./style.scss";
import { InputWithSearchComp } from "../../stories/InputWithSearch/InputWithSearch";
import { BsChevronRight,BsFilter } from "react-icons/bs";
import { ImageCardComp } from "../../stories/ImageCard/ImageCard";
import { DropDownComp } from "../../stories/DropdownComp/DropdownComp";
const Courses = (props) => {
  const SearchProps = {
    size: "small",
  };

  const filterDropProps ={
    label:'Filter by',
    labelIcon:true
  }
  const ImageCardProps = {
    label: "ImageCardComp",
    imgUrl: "https://picsum.photos/318/180",
    title: "How can I improve self care with Ikigai?",
    count: "1,288 students",
    time: "5m",
    type:"Health"
  };

  const CoursesList= [
    {
      text:"Courses to help you learn about",
      title:"Taking care of yourself"
    },
    {
      text:"Courses to help you learn about",
      title:"How to think about an innovation"
    }
  ]

  return (
    <div className="courses-page">
      <Row className="m-0">
        <Col className="p-0">
          <div className="courses-head">
            <div>
              <h2>Courses by Unisolve</h2>
            </div>
            <div className="d-flex">
              <InputWithSearchComp {...SearchProps} />
              <DropDownComp {...filterDropProps}/>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="m-0">
        <Col className="p-0">
          <div className="courses-list">
            {CoursesList && CoursesList.map( (course) => {
              return(
                <div className="pb-5">
                <p>{course.text}</p>
                <div className="d-flex justify-content-between">
                  <h2>{course.title}</h2>
                  <span className="view-link" onClick={() => props.history.push('/coursesView')}>
                    view all <BsChevronRight />
                  </span>
                </div>
                <div className="mt-5 mb-5 course-section">
                  <ImageCardComp {...ImageCardProps} />
                  <ImageCardComp {...ImageCardProps} />
                  <ImageCardComp {...ImageCardProps} />
                  <ImageCardComp {...ImageCardProps} />
                </div>
                </div>
              )
            })}
           
            
          </div>
        </Col>
      </Row>
    
    </div>
  );
};

export default withRouter(Courses);
