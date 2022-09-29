import React from 'react';
import { Row, Col, Form, Label, FormGroup, Card, CardBody } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import './style.scss';
import Layout from "../Layout";
import { Button } from '../../stories/Button';

// import { InputBox } from '../../stories/InputBox/InputBox';
import { DropDownWithSearch } from '../../stories/DropdownWithSearch/DropdownWithSearch';
import {TextArea} from '../../stories/TextArea/TextArea';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { BreadcrumbTwo } from '../../stories/BreadcrumbTwo/BreadcrumbTwo';
import { useDispatch } from 'react-redux';
import { createSupportTickets } from '../store/mentors/actions';
import { useHistory } from 'react-router-dom';

const AddNewTicket = (props) => {
   
    const dispatch = useDispatch();
    const history = useHistory();

    const headingDetails = {
        title: 'Add New Ticket Details',

        options: [
            {
                title: 'Support Journey',
                path: '/teacher/support-journey/'
            },
            {
                title: 'Add New Ticket',
                path: '/teacher/support-journey/add-ticket'
            }
        ]
    };

    const selectCategory = {
        label: 'Select Category',
        options: [
            { label: "General", value: "General" },
            { label: "Technical", value: "Technical" },
            { label: "Suggestion", value: "Suggestion" },
        ],
        className: 'defaultDropdown'
    };
    

    const formik = useFormik({
        initialValues: {
            selectCategory: '',
            ticketDetails: ''
        },

        validationSchema: Yup.object({
            selectCategory: Yup.string()
                .required("Required"),
            
            ticketDetails: Yup.string()
                .required('Required')
        }),

        onSubmit: (values) => {
            const query_category = values.selectCategory;
            const query_details = values.ticketDetails;
           
            const body = JSON.stringify({
                query_category: query_category,
                query_details: query_details,
                
            });
            console.log(body);
            
            dispatch(createSupportTickets(body, history));
            
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
                                    <CardBody className='px-0'>
                                        <FormGroup className="form-row row">
                                            <Col
                                                className="form-group mb-5  mb-md-0"
                                                md={12}
                                            >
                                                <Label className="mb-2">
                                            Select Category
                                                </Label>

                                                <Col
                                                    className="form-group"
                                                    md={12}
                                                >
                                                    <DropDownWithSearch
                                                        {...selectCategory}
                                                        onBlur={
                                                            formik.handleBlur
                                                        }
                                                        // value={
                                                        //     formik.values
                                                        //         .selectCategory
                                                        // }
                                                        // defaultValue={
                                                        //     defaultCategory
                                                        // }
                                                        onChange={(option) =>{
                                                            formik.setFieldValue(
                                                                "selectCategory",
                                                                option[0].value
                                                            );
                                                        }
                                                        }
                                                        name="selectCategory"
                                                        id="selectCategory"
                                                    />

                                                    {formik.errors
                                                        .selectCategory ? (
                                                            <small className="error-cls">
                                                                {
                                                                    formik.errors
                                                                        .selectCategory
                                                                }
                                                            </small>
                                                        ) : null}
                                                </Col>

                                               
                                            </Col>
                                        </FormGroup>
                                    </CardBody>
                                    <div className="create-ticket1 register-block1">
                                        <Row>
                                        
                                   
                                            <Col md={12}>
                                                <Label
                                                    className="name-req "
                                                    htmlFor="ticketDetails"
                                                >
                                                Ticket Details
                                                </Label>
                                                <TextArea className={'defaultInput'}
                                                    placeholder="Enter address"
                                                    id="ticketDetails"
                                                    name="ticketDetails"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.ticketDetails} />

                                            
                                                {formik.touched.ticketDetails &&
                                            formik.errors.ticketDetails ? 
                                                    (
                                                        <small className="error-cls">
                                                            {formik.errors.ticketDetails}
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

export default withRouter(AddNewTicket);
