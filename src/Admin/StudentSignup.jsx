import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  NavLink,
  Input,
  Card,
  CardTitle,
  CardBody,
  CardSubtitle,
} from "reactstrap";
import axios from "axios";
import Layout from "./Layout";
import { getNormalHeaders, getCurrentUser } from "../helpers/Utils";
import { Button } from "../stories/Button";
import { BreadcrumbTwo } from "../stories/BreadcrumbTwo/BreadcrumbTwo";
const StudentSignup = (props) => {
  const currentUser = getCurrentUser("current_user");
  const [state, setState] = React.useState({
    studentName: false,
    phNumber: false,
    email: false,
  });

  const handleToggle = ({ target }) => {
    setState((s) => ({ ...s, [target.name]: !s[target.name] }));
  };
  const handleSubmit = () => {
    let finalObj = {};
    for (const [key, value] of Object.entries(state)) {
      console.log(`${key}: ${value}`);
      if (value == true) {
        finalObj[key] = value;
      }
    }
    var config = {
      method: "post",
      // url: "http://localhost:3002/api/v1/admin/setupStudentConfig",
      url: process.env.REACT_APP_API_BASE_URL + "/admin/setupStudentConfig",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Authorization: `Bearer ${currentUser.Token}`,
      },
      data: finalObj,
    };
    axios(config)
      .then(function (response) {
        console.log("========", response);
        if (response.status === 200) {
          alert("Successfully Create");
          setState({ studentName: false, phNumber: false, email: false });
          finalObj = {};
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(finalObj);
  };

  const headingDetails = {
    title: "Signup Configuration",

    options: [
      {
        title: "Create Student SignUp",
        path: "/",
      },
    ],
  };
  return (
    <Layout>
      <Container className="mt-5 pt-5 dynamic-form">
        <Row className="justify-content-center">
          <div className="col-6">
            <BreadcrumbTwo {...headingDetails} />
          </div>
        </Row>

        <Row className="justify-content-center">
          <div className="col-md-6 col-sm-12">
            <Card className="w-100 p-4">
              <CardBody>
                {Object.keys(state).map((key) => {
                  return (
                    <div className="form-check">
                      <Input
                        type="checkbox"
                        onChange={handleToggle}
                        key={key}
                        name={key}
                        className="mt-3"
                        checked={state[key]}
                      />
                      {/* <p>{key}</p> */}
                      <Label>
                        {key === "studentName"
                          ? "Student Name"
                          : key === "email"
                          ? "Email"
                          : "Phone Number"}
                      </Label>
                    </div>
                  );
                })}
                <div className="w-100 mt-5" />
                <Row>
                  <Col md={6}>
                    <Button
                      btnClass="default"
                      size="small"
                      // Icon={BsPlusLg}
                      label="Cancel"
                      onClick={() => props.history.push("/admin/dashboard")}
                    />
                  </Col>
                  <Col md={6} className="text-right">
                    <Button
                      btnClass="primary"
                      size="small"
                      // Icon={BsPlusLg}
                      label="Submit"
                      onClick={handleSubmit}
                    />
                  </Col>
                </Row>
                {/* <Button
                  btnClass='primary'
                  size='small'
                  // Icon={BsPlusLg}
                  label='Submit'
                  onClick={handleSubmit}
                /> */}
              </CardBody>

              {/* <Button className="Small" onClick={handleSubmit}>
            Submit
          </Button> */}
            </Card>
          </div>
        </Row>
      </Container>
    </Layout>
  );
};
export default StudentSignup;
