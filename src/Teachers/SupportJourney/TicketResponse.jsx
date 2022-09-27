/* eslint-disable no-unused-vars */
import React from 'react';
import { Row, Col, Form, Label, Card, CardBody } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import './style.scss';
import Layout from "../Layout";
import { Button } from '../../stories/Button';

// import { InputBox } from '../../stories/InputBox/InputBox';

import {TextArea} from '../../stories/TextArea/TextArea';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { BreadcrumbTwo } from '../../stories/BreadcrumbTwo/BreadcrumbTwo';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { createSupportTickets, getSupportTicketById } from '../store/mentors/actions';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect } from '@storybook/addons';


const TicketResponse = (props) => {
   
    const {search} = useLocation();
    console.log(search);

    // const dispatch = useDispatch();
    // const history = useHistory();
        

    // useEffect(() => {
    //     dispatch(getSupportTicketById(history));
    // }, []);

    const headingDetails = {
        title: 'Answer Ticket',

        options: [
            {
                title: 'Support Journey',
                path: '/teacher/support-journey/'
            },
            {
                title: 'Add New Ticket',
                path: '/teacher/support-journey/add-ticket'
            },
            {
                title: 'Answer Ticket',
                path: '/teacher/support-journey/add-ticket'
            }
        ]
    };

    

    const formik = useFormik({
        initialValues: {
           
            ansDetails: ''
        },

        validationSchema: Yup.object({
            ansDetails: Yup.string()
                .required("Required"),
            
           
        }),

        onSubmit: (values) => {
            const ansDetails = values.ansDetails;
           
           
            const body = JSON.stringify({
                ansDetails: ansDetails,
               
                
            });
            console.log(body);
            
            // dispatch(createSupportTickets(body, history));
            
        },
        
    });

    console.log(formik.errors);

    return (
        <Layout>
            <div className="EditPersonalDetails new-member-page">
                <Row>
                    <Col className="col-xl-10 offset-xl-1 offset-md-0">
                        <BreadcrumbTwo {...headingDetails} />

                        <div>
                            <Form onSubmit={formik.handleSubmit} isSubmitting>
                                <Card className="aside p-4">
                                    <CardBody>
                                        
                                    </CardBody>
                                    <div className="create-ticket register-block">
                                        <Row>
                                        
                                   
                                            <Col md={12}>
                                                <Label
                                                    className="name-req mt-5"
                                                    htmlFor="ticketDetails"
                                                >
                                                Ticket Details
                                                </Label>
                                                <TextArea className={'defaultInput'}
                                                    placeholder="Enter Answer"
                                                    id="ansDetails"
                                                    name="ansDetails"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.ansDetails} />

                                            
                                                {formik.touched.ansDetails &&
                                            formik.errors.ansDetails ? 
                                                    (
                                                        <small className="error-cls">
                                                            {formik.errors.ansDetails}
                                                        </small>
                                                    ) : null}
                                            </Col>
                                        
                                        </Row>
                                    </div>
                                </Card>

                           
                              

                                <hr className="mt-4 mb-4"></hr>
                                <Row>
                                    <Col className="col-xs-12 col-sm-6">
                                        <Button
                                            label="Discard"
                                            btnClass="secondary"
                                            size="small"
                                            onClick={() =>
                                                props.history.push(
                                                    '/teacher/support-journey'
                                                )
                                            }
                                        />
                                    </Col>
                                    <Col className="submit-btn col-xs-12 col-sm-6">
                                        <Button
                                            label="Submit details"
                                            type="submit"
                                            btnClass={
                                                !(
                                                    formik.dirty &&
                                                    formik.isValid
                                                )
                                                    ? 'default'
                                                    : 'primary'
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

export default withRouter(TicketResponse);
