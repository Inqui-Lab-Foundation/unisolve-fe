import React, { useState } from "react";
import { Row, Col, FormGroup, Form, Label } from "reactstrap";
import { Breadcrumb } from "antd";
import { InputBox } from "../../stories/InputBox/InputBox";
import { TextArea } from "../../stories/TextArea/TextArea";
import { Attachments } from "../../stories/Attachments/Attachments";
import { Button } from "../../stories/Button";
import { Link, withRouter } from "react-router-dom";
import "./style.scss";
import "../Student.scss";
import { GoChevronRight } from "react-icons/go";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { Accordion } from "react-bootstrap";
import Layout from "../../Layout";
import { BreadcrumbTwo } from "../../stories/BreadcrumbTwo/BreadcrumbTwo";
import { useHistory } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";
// import { useHistory } from "react-router-dom";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

import { mentorCreate } from "../../redux/actions";
import { connect } from "react-redux";

const AddNewMember = (props) => {
  const { t, i18n } = useTranslation();
  const [queryProps, setQueryProps] = useState([{ title: "Teammate 1" }]);
  const [error, SetError] = useState("");
  const history = useHistory();
  const serachprops = {
    placholder: "Enter teammmates first name",
    className: "default",
  };

  const addnewMember = () => {
    let query = queryProps.length + 1;
    let newQuery = {
      title: `Teammate ${query}`,
    };
    let newQueryAdd = [];
    queryProps.push(newQuery);
    setQueryProps([...queryProps]);
  };
  const optionItems = queryProps;
  const headingDetails = {
    title: "Add new Teammates details",

    options: [
      {
        title: "Teams & Mentor",
        path: "/teams",
      },
      {
        title: "Add new member",
        path: "/addNewMember",
      },
    ],
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required(t("login.error_required")),
      lastName: Yup.string().required(t("login.error_required")),
      email: Yup.string().required(t("login.error_required")),
    }),

    onSubmit: (values) => {
      const mentor_name1 = values.firstName + "." + values.lastName;
      const email1 = values.email;
      console.log("========", mentor_name1);
      const body = JSON.stringify({
        mentor_name: mentor_name1,
        email: email1,
        // mobile: 9010923117,
      });
      props.mentorCreateAction(body, history);
    },
  });

  return (
    <Layout>
      <div className="EditPersonalDetails new-member-page">
        <Row>
          <Col className="col-xl-10 offset-xl-1 offset-md-0">
            <BreadcrumbTwo {...headingDetails} />
            {/* <ul class="list-group common-links list-group-horizontal ">
              <li class="list-group-item bg-transparent border-0 px-0">
                <Link
                  exact
                  to="/teams"
                  activeClassName="is-active"
                  className="text-link"
                >
                  Teams & Mentor <GoChevronRight />
                </Link>
              </li>
              <li class="list-group-item bg-transparent border-0 px-2">
                <Link
                  exact
                  to="/addNewMember"
                  activeClassName="is-active"
                  className="text-link text-bold"
                >
                  Add new member
                </Link>
              </li>
            </ul> */}
            {/* <Breadcrumb>
                <Breadcrumb.Item>Teams & Mentor</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">Add new member</a>
                </Breadcrumb.Item>
              </Breadcrumb> */}
            <div>
              {/* <Col>
                <h1 className="mb-4">Add new Teammates details</h1>
              </Col> */}
              <Form onSubmit={formik.handleSubmit} isSubmitting>
                <div className="create-ticket">
                  <Row>
                    <Col md={6} className="mb-5 mb-xl-0">
                      <Label className="name-req" htmlFor="firstName">
                        First name (required){" "}
                      </Label>

                      <InputBox
                        className={"defaultInput"}
                        placeholder="Enter teammmates first name"
                        id="firstName"
                        name="firstName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                      />

                      {formik.touched.firstName && formik.errors.firstName ? (
                        <small className="error-cls">
                          {formik.errors.firstName}
                        </small>
                      ) : null}
                    </Col>
                    <Col md={6}>
                      <Label className="name-req" htmlFor="lastName">
                        Last name (required)
                      </Label>
                      <InputBox
                        className={"defaultInput"}
                        placeholder="Enter teammmates first name"
                        id="lastName"
                        name="lastName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                      />
                      {formik.touched.lastName && formik.errors.lastName ? (
                        <small className="error-cls">
                          {formik.errors.lastName}
                        </small>
                      ) : null}
                    </Col>
                  </Row>

                  <Label className="name-req mt-5" htmlFor="email">
                    Email address(required)
                  </Label>

                  <InputBox
                    className={"defaultInput"}
                    placeholder="Enter teammmates email address"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <small className="error-cls">{formik.errors.email}</small>
                  ) : null}
                  <span className="que-text">
                    <AiOutlineInfoCircle /> Note: Official login credentials
                    will be sent to your teammate on this email.
                  </span>
                </div>

                {/* <Accordion>
                {optionItems.map((que, index) => {
                  return (
                    <Accordion.Item eventKey={index}>
                      <Accordion.Header className="question">
                        {que.title}
                      </Accordion.Header>
                      <Accordion.Body>
                        <Form onSubmit={formik.handleSubmit} isSubmitting>
                          <div className="create-ticket">
                            <Row>
                              <Col md={6} className="mb-5 mb-xl-0">
                                <Label className="name-req" htmlFor="firstName">
                                  First name (required){" "}
                                </Label>

                                <InputBox
                                  className={"defaultInput"}
                                  placeholder="Enter teammmates first name"
                                  id="firstName"
                                  name="firstName"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.firstName}
                                />
                                
                      {formik.touched.firstName && formik.errors.firstName ? (
                        <small className="error-cls">
                          {formik.errors.firstName}
                        </small>
                      ) : null}
                              </Col>
                              <Col md={6}>
                                <Label className="name-req" htmlFor="lastName">
                                  Last name (required)
                                </Label>
                                <InputBox
                                  className={"defaultInput"}
                                  placeholder="Enter teammmates first name"
                                  id="lastName"
                                  name="lastName"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.lastName}
                                />
                                 {formik.touched.lastName && formik.errors.lastName ? (
                        <small className="error-cls">
                          {formik.errors.lastName}
                        </small>
                      ) : null}
                              </Col>
                            </Row>

                            <Label className="name-req mt-5" htmlFor="email">
                              Email address(required)
                            </Label>

                            <InputBox
                              className={"defaultInput"}
                              placeholder="Enter teammmates email address"
                              id="email"
                              name="email"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.email}
                            />
                             {formik.touched.email && formik.errors.email ? (
                        <small className="error-cls">
                          {formik.errors.email}
                        </small>
                      ) : null}
                            <span className="que-text">
                              <AiOutlineInfoCircle /> Note: Official login
                              credentials will be sent to your teammate on this
                              email.
                            </span>
                          </div>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                })}
              </Accordion> */}

                {/* <Button
                label="Add one more member"
                btnClass="primary"
                size="small"
                Icon={BsPlusLg}
                shape="btn-square"
                onClick={() => {
                  addnewMember();
                }}
              /> */}

                <hr className="mt-4 mb-4"></hr>
                <Row>
                  <Col className="col-xs-12 col-sm-6">
                    <Button
                      label="Discard"
                      btnClass="secondary"
                      size="small"
                      onClick={() => props.history.push("/teams")}
                    />
                  </Col>
                  <Col className="submit-btn col-xs-12 col-sm-6">
                    <Button
                      label="Submit details"
                      type="submit"
                      btnClass={
                        !(formik.dirty && formik.isValid)
                          ? "default"
                          : "primary"
                      }
                      size="small"
                    />
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

// export default withRouter(AddNewMember);

const mapStateToProps = ({}) => {
  // const { loading, error, currentUser } = authUser;
  return {};
};

export default connect(mapStateToProps, {
  mentorCreateAction: mentorCreate,
})(AddNewMember);
