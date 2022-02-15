import React from "react";
import "./SignUp.scss";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
// import test1 from '../media/test1.png'
const UserBasicDetails = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <Container className="SignUpProcess">
      <Row>
        <div className="col-md-6 offset-md-3">
          <Card class="mb-3 card w-auto">
            <div class="row g-0  ">
              <div class="col-md-4 card-left">
                <h2>Lorem ipsum dolor sit, consectetur elit.</h2>
                <p className="pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio.
                </p>
                <blockquote class="blockquote pb-2">
                  <p>
                    <i class="fas fa-angle-double-left"></i>
                    <span class="lead font-italic pb-3">
                      Before I didn’t know I could...but after being a part of
                      this Inqui-Lab class now I feel I can make or do anything,
                      I feel empowered!
                    </span>
                    <h6>Ibrahim</h6>
                    <span>
                      Grade 6,
                      <br />
                      Govt. High School, Amberpet, Hyderabad
                    </span>
                    {/* <img src={test1} alt="..." class="img-fluid rounded-circle" /> */}
                  </p>
                </blockquote>
              </div>
              <div class="col-md-8  card-right">
                <CardBody>
                  <h2 class="card-title">Sign up with Unisolve</h2>

                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CardText>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </CardBody>
              </div>
            </div>
          </Card>
        </div>
      </Row>

      <Row className="justify-content-center">
        {/* <div className="col s6 offset-s3 valign">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                <form>
                  <label>
                    Month
                    <input
                      type="text"
                      placeholder="Month"
                      value={values.month}
                      onChange={handleChange("month")}
                    />
                  </label>
                  <label>
                    Day
                    <input
                      type="text"
                      placeholder="Day"
                      value={values.day}
                      onChange={handleChange("day")}
                    />
                  </label>
                  <label>
                    Year
                    <input
                      type="text"
                      placeholder="Year"
                      value={values.year}
                      onChange={handleChange("year")}
                    />
                  </label>
                  <button onClick={Continue}>Next</button>
                </form>
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </div> */}
      </Row>
    </Container>
  );
};

export default UserBasicDetails;
