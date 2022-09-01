import '../../Student/Pages/Student.scss';
import React from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Card,
    CardBody
} from 'reactstrap';
import { InputBox } from '../../stories/InputBox/InputBox';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { getCurrentUser } from '../../helpers/Utils';
import { Button } from '../../stories/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BreadcrumbTwo } from '../../stories/BreadcrumbTwo/BreadcrumbTwo';

import Layout from '../Layout';


const EditFaqCategory = (props) => {
    const currentUser = getCurrentUser('current_user');
    const history = useHistory();
    const faqCate = props.location.data;
    console.log("line 37",faqCate);
    const headingDetails = {
        title: 'Edit FAQ Category',

        options: [
            
            {
                title: 'FAQ Categories',
                path: '/admin/faq'
            },
            {
                title: 'Edit FAQ Category',
                path: '/admin/edit-faqcategory'
            }
        ]
    };
   

    const formik = useFormik({
        initialValues: {
            faqCate: faqCate.category_name,
            
        },

        validationSchema: Yup.object({
            faqCate: Yup.string().required('required')
        }),

        onSubmit: (values) => {
            const body = JSON.stringify({
                "status": "ACTIVE",
                category_name: values.faqCate
            });
            var config = {
                method: 'put',
                url:
                    process.env.REACT_APP_API_BASE_URL +
                    '/faqCategories/' + faqCate.faqCatID,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${currentUser.data[0].token}`
                },
                data: body
            };
            axios(config)
                .then(function (response) {
                    if (response.status === 200) {
                        props.history.push('/admin/faq');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    });

    const newFaqCate = {
        types: 'text',
        placeholder: 'Enter category name here...',
        className: 'defaultInput'
    };

    const update = {
        label: 'Save changes',
        size: 'small'
        // btnClass: "default",
    };

    const discard = {
        label: 'Discard',
        size: 'small',
        btnClass: 'primary'
    };

    return (
        <Layout>
            <Container className="EditPersonalDetails pt-3 pt-xl-5 pt-5 mt-5">
                {/* <UsersPage /> */}
                <Row>
                    <Col className="col-xl-10 offset-xl-1 offset-md-0">
                        <BreadcrumbTwo {...headingDetails} />
                        <Row className=" article-header mb-50">
                            <Col
                                md={12}
                                className=" d-flex justify-content-center flex-column"
                            >
                                <Form
                                    onSubmit={formik.handleSubmit}
                                    isSubmitting
                                >
                                    <Card className="aside p-4">
                                        <CardBody>
                                            <FormGroup className="form-row row mb-5">
                                                <Col
                                                    className="form-group mb-5  mb-md-0"
                                                    md={12}
                                                >
                                                    <FormGroup className="form-row row mb-5">
                                                        <Label className="mb-2">
                                                            Enter New FAQ Category
                                                        </Label>
                                                        
                                                        <Col
                                                            className="form-group"
                                                            md={12}
                                                        >
                                                            <InputBox
                                                                {...newFaqCate}
                                                                id="faqCate"
                                                                name="faqCate"
                                                                onChange={
                                                                    formik.handleChange
                                                                }
                                                                onBlur={
                                                                    formik.handleBlur
                                                                }
                                                                value={
                                                                    formik
                                                                        .values
                                                                        .faqCate
                                                                }
                                                            />

                                                            {formik.touched
                                                                .faqCate &&
                                                            formik.errors
                                                                .faqCate ? (
                                                                    <small className="error-cls">
                                                                        {
                                                                            formik
                                                                                .errors
                                                                                .faqCate
                                                                        }
                                                                    </small>
                                                                ) : null}
                                                        </Col>
                                                    </FormGroup>
                                                </Col>

                                               
                                            </FormGroup>
                                        </CardBody>
                                    </Card>

                                    {/* <div className="form-row row mb-4 aside"> */}
                                    <hr className="my-5 w-100 mb-4 clearfix" />
                                    <div className="row mb-4 justify-content-between">
                                        <div className="col-6">
                                            <Button
                                                {...discard}
                                                type="cancel"
                                                onClick={() => history.goBack()}
                                            />
                                        </div>
                                        <div className="col-6 text-right">
                                            <Button
                                                {...update}
                                                type="submit"
                                                btnClass={
                                                    !(
                                                        formik.dirty &&
                                                        formik.isValid
                                                    )
                                                        ? 'default'
                                                        : 'primary'
                                                }
                                            />
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default EditFaqCategory;
