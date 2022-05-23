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
      url: "http://15.207.254.154:3002/api/v1/admin/setupStudentConfig",
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
  return (
    <Layout>
      <Col md={12} className=" d-flex justify-content-center">
        <Card className="w-100 p-4">
          <CardBody>
            <Row>
              <Col md={6}>
                {Object.keys(state).map((key) => {
                  return (
                    <div className="form-check ">
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
                <div className="w-100 mt-4" />
                <Button
                  btnClass="primary"
                  size="small"
                  // Icon={BsPlusLg}
                  label="Submit"
                  onClick={handleSubmit}
                />
              </Col>
            </Row>
          </CardBody>

          {/* <Button className="Small" onClick={handleSubmit}>
            Submit
          </Button> */}
        </Card>
      </Col>
    </Layout>
  );
};
export default StudentSignup;
