import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Button } from "../../stories/Button";
import SuccessMessage from "./SuccessMessage";
import { useFormik } from "formik";
import * as Yup from "yup";
import Layout from "../Layout";

const BadgesComp = () => {
  const [showSuccessMessage, setSuccessMessage] = useState(false);
  const formik = useFormik({
    initialValues: {
      radioGroup1: "",
      radioGroup2: "",
    },

    validationSchema: Yup.object({
      radioGroup1: Yup.string().required("A radio option is required"),
      radioGroup2: Yup.string().required("A radio option is required"),
    }),

    onSubmit: async (values) => {},
  });

  return (
    <Layout>
      <Container className='presuervey mb-50 mt-5 '>
        <Col>
          <Row className=' justify-content-center'>
            <Card className='aside  mb-5 p-4'>
              <CardBody>
                <Form
                  className='form-row row mb-5 mt-3 py-5'
                  onSubmit={formik.handleSubmit}
                  isSubmitting
                >
                  <Row>
                    <div className='question quiz'>
                      <b>1. Quetion goes here</b>
                    </div>
                    <div className='answers'>
                      <FormGroup
                        tag='fieldset'
                        className='w-100'
                        id='radioGroup1'
                        label='One of these please'
                        value={formik.values.radioGroup1}
                        error={formik.errors.radioGroup1}
                        touched={formik.touched.radioGroup1}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        <FormGroup check className='mx-5'>
                          <Label check>
                            <Input
                              type='radio'
                              name='radioGroup1'
                              id='radioOption1'
                            />{" "}
                            Option one is this and that—be sure to include why
                            it's great
                          </Label>
                        </FormGroup>
                        <FormGroup check className='mx-5'>
                          <Label check>
                            <Input
                              type='radio'
                              name='radioGroup1'
                              id='radioOption2'
                            />{" "}
                            Option two can be something else and selecting it
                            will deselect option one
                          </Label>
                        </FormGroup>
                        <FormGroup check className='mx-5'>
                          <Label check>
                            <Input
                              type='radio'
                              name='radioGroup1'
                              id='radioOption3'
                            />{" "}
                            Option three is disabled
                          </Label>
                        </FormGroup>

                        <hr />
                      </FormGroup>
                      {formik.touched.radioGroup1 &&
                      formik.errors.radioGroup1 ? (
                        <small className='error-cls'>
                          {formik.errors.radioGroup1}
                        </small>
                      ) : null}
                    </div>
                  </Row>
                  <Row>
                    <div className='question quiz'>
                      <b>2. Quetion goes here</b>
                    </div>
                    <div className='answers'>
                      <FormGroup
                        tag='fieldset'
                        className='w-100'
                        id='radioGroup1'
                        label='One of these please'
                        value={formik.values.radioGroup2}
                        error={formik.errors.radioGroup2}
                        touched={formik.touched.radioGroup2}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        <FormGroup check className='mx-5'>
                          <Label check>
                            <Input
                              type='radio'
                              name='radioGroup2'
                              id='radioOption1'
                            />{" "}
                            Option one is this and that—be sure to include why
                            it's great
                          </Label>
                        </FormGroup>
                        <FormGroup check className='mx-5'>
                          <Label check>
                            <Input
                              type='radio'
                              name='radioGroup2'
                              id='radioOption2'
                            />{" "}
                            Option two can be something else and selecting it
                            will deselect option one
                          </Label>
                        </FormGroup>
                        <FormGroup check className='mx-5'>
                          <Label check>
                            <Input
                              type='radio'
                              name='radioGroup2'
                              id='radioOption3'
                            />{" "}
                            Option three is disabled
                          </Label>
                        </FormGroup>
                        <hr />
                      </FormGroup>
                      {formik.touched.radioGroup2 &&
                      formik.errors.radioGroup2 ? (
                        <small className='error-cls'>
                          {formik.errors.radioGroup2}
                        </small>
                      ) : null}
                    </div>
                  </Row>
                  <Row>
                    <div className='question quiz'>
                      <b>3. Quetion goes here</b>
                    </div>
                    <div className='answers'>
                      <FormGroup tag='fieldset' className='w-100'>
                        <FormGroup check className='mx-5'>
                          <Label check>
                            <Input type='radio' name='radio3' /> Option one is
                            this and that—be sure to include why it's great
                          </Label>
                        </FormGroup>
                        <FormGroup check className='mx-5'>
                          <Label check>
                            <Input type='radio' name='radio3' /> Option two can
                            be something else and selecting it will deselect
                            option one
                          </Label>
                        </FormGroup>
                        <FormGroup check className='mx-5'>
                          <Label check>
                            <Input type='radio' name='radio3' /> Option three is
                            disabled
                          </Label>
                        </FormGroup>
                        <hr />
                      </FormGroup>
                    </div>
                  </Row>
                  <Row>
                    <div className='question quiz'>
                      <b>4. Quetion goes here</b>
                    </div>
                    <div className='answers'>
                      <FormGroup tag='fieldset' className='w-100'>
                        <FormGroup check className='mx-5'>
                          <Label check>
                            <Input type='radio' name='radio4' /> Option one is
                            this and that—be sure to include why it's great
                          </Label>
                        </FormGroup>
                        <FormGroup check className='mx-5'>
                          <Label check>
                            <Input type='radio' name='radio4' /> Option two can
                            be something else and selecting it will deselect
                            option one
                          </Label>
                        </FormGroup>
                        <FormGroup check className='mx-5'>
                          <Label check>
                            <Input type='radio' name='radio4' /> Option three is
                            disabled
                          </Label>
                        </FormGroup>
                        <hr />
                      </FormGroup>
                    </div>
                  </Row>
                  <Row>
                    <div className='question quiz'>
                      <b>5. Quetion goes here</b>
                    </div>
                    <div className='answers'>
                      <FormGroup tag='fieldset' className='w-100'>
                        <FormGroup check>
                          <Label check className='mx-5'>
                            <Input type='radio' name='radio5' /> Option one is
                            this and that—be sure to include why it's great
                          </Label>
                        </FormGroup>
                        <FormGroup check className='mx-5'>
                          <Label check>
                            <Input type='radio' name='radio5' /> Option two can
                            be something else and selecting it will deselect
                            option one
                          </Label>
                        </FormGroup>
                        <FormGroup check className='mx-5'>
                          <Label check>
                            <Input type='radio' name='radio5' /> Option three is
                            disabled
                          </Label>
                        </FormGroup>
                      </FormGroup>
                    </div>
                  </Row>
                  <div className='text-right'>
                    <Button
                      btnClass={
                        !(formik.dirty && formik.isValid)
                          ? "default"
                          : "primary"
                      }
                      disabled={!(formik.dirty && formik.isValid)}
                      size='small'
                      label='Submit'
                      onClick={() => setSuccessMessage(true)}
                    />
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Row>
        </Col>
      </Container>
      <SuccessMessage
        show={showSuccessMessage}
        setImportPopup={setSuccessMessage}
        onHide={() => setSuccessMessage(false)}
      />
    </Layout>
  );
};

export default BadgesComp;
