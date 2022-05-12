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
  Button,
} from "reactstrap";
import Layout from "./Layout";
const StudentSignup = (props) => {
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
    console.log(finalObj);
  };
  return (
    <Layout>
      <Col md={12} className=' d-flex justify-content-center'>
        <Card className='w-100 p-4'>
          <CardBody>
            <Row>
              <div>
                {Object.keys(state).map((key) => {
                  return (
                    <div>
                      <Input
                        type='checkbox'
                        onChange={handleToggle}
                        key={key}
                        name={key}
                        checked={state[key]}
                      />
                      <p>{key}</p>
                    </div>
                  );
                })}
              </div>
            </Row>
          </CardBody>
          <Button className='Small' onClick={handleSubmit}>
            Submit
          </Button>
        </Card>
      </Col>
    </Layout>
  );
};
export default StudentSignup;
