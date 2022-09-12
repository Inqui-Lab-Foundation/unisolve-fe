import React from 'react';
import { Row, Col, Form, Label, FormGroup, Card, CardBody } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import './style.scss';
import Layout from "../Layout";
import { Button } from '../../stories/Button';
import axios from 'axios';
// import { InputBox } from '../../stories/InputBox/InputBox';
import { DropDownWithSearch } from '../../stories/DropdownWithSearch/DropdownWithSearch';
import {TextArea} from '../../stories/TextArea/TextArea';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { BreadcrumbTwo } from '../../stories/BreadcrumbTwo/BreadcrumbTwo';
import { getCurrentUser } from '../../helpers/Utils';

const AddNewTicket = (props) => {
    const currentUser = getCurrentUser('current_user');

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
        // options: categoriesList,
        className: 'defaultDropdown'
    };
    

    const formik = useFormik({
        initialValues: {
            selectCategory: '',
            ticketDetails: ''
        },

        validationSchema: Yup.object({
            selectCategory: Yup.string()
                .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
                .max(40)
                .required(),
            
            ticketDetails: Yup.string()
                .required('Required')
        }),

        onSubmit: (values) => {
            const organization_name = values.selectCategory;
            const organization_code = values.organizationCode;
            const details = values.ticketDetails;
            const body = JSON.stringify({
                organization_name: organization_name,
                organization_code: organization_code,
                details: details
            });
            var config = {
                method: 'post',
                url:
                    process.env.REACT_APP_API_BASE_URL +
                    '/organizations',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${currentUser.data[0].token}`
                },
                data: body
            };
            axios(config)
                .then(function (response) {
                    if (response.status === 201) {
                        props.history.push('/admin/registered-schools');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        
    });

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
                                                        //         .faq_category_id
                                                        // }
                                                        // defaultValue={
                                                        //     defaultCategory
                                                        // }
                                                        // onChange={(option) => {
                                                        //     console.log(
                                                        //         '🚀 ~ file: AddNewFaq.js ~ line 233 ~ AddNewFaq ~ option',
                                                        //         option
                                                        //     );

                                                        //     formik.setFieldValue(
                                                        //         'faq_category_id',
                                                        //         option[0].value
                                                        //     );
                                                        // }}
                                                        name="faq_category_id"
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

                                                <Col
                                                    className="form-group mt-5  mb-md-0"
                                                    md={12}
                                                >
                                                
                                                </Col>
                                            </Col>
                                        </FormGroup>
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
