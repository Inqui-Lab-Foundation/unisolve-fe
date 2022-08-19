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
import { InputWithRadioComp } from '../../stories/InputWithRadio/InputWithRadio';

import { Button } from '../../stories/Button';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BreadcrumbTwo } from '../../stories/BreadcrumbTwo/BreadcrumbTwo';

import { useTranslation } from 'react-i18next';
import Layout from '../Layout';

const AddNews = () => {
    const headingDetails = {
        title: 'Create new News',

        options: [
            {
                title: 'Sessions & News',
                path: '/'
            },
            {
                title: 'News',
                path: '/'
            },
            {
                title: 'Add New News',
                path: '/'
            }
        ]
    };
    const { t } = useTranslation();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            gType: '',
            // dob: "",
            selectCountry: '',
            selectCity: ''
        },

        validationSchema: Yup.object({
            sessionTopic: Yup.string()
                .min(2, t('login.error_character'))
                .matches(/^[aA-zZ\s]+$/, t('login.error_valid_name'))
                .required(t('login.error_required')),
            sessionSubTopic: Yup.string()
                .matches(/^[A-Za-z ]*$/, t('login.error_valid_name'))
                .min(2, t('login.error_character'))
                .required(t('login.error_required')),
            gType: Yup.string().required(t('login.error_required')),
            // dob: Yup.required(t("login.error_required")),
            selectCountry: Yup.string().required('required'),
            selectCity: Yup.string().required('required')
        }),

        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    const newsTopic = {
        types: 'text',
        placeholder: 'Enter news title here...',
        className: 'defaultInput'
    };

    const newsDes = {
        types: 'text',
        placeholder: 'Enter news description here...',
        className: 'defaultInput'
    };

    const radioFields = {
        className: 'defaultRadio'
    };

    const update = {
        label: 'Save changes',
        size: 'small'
        // btnClass: "default",
    };

    const discard = {
        label: 'Discard',
        size: 'small',
        btnClass: 'default'
    };
    return (
        <Layout>
            <Container className="EditPersonalDetails pt-3 pt-xl-5">
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
                                    <Card className="aside  mb-5 p-4">
                                        <CardBody>
                                            <Row>
                                                <FormGroup className="form-row row mb-5">
                                                    <Label className="mb-2">
                                                        This news is for
                                                    </Label>
                                                    <Col
                                                        className="form-group mb-5  mb-md-0"
                                                        md={6}
                                                        xl={4}
                                                    >
                                                        <InputWithRadioComp
                                                            {...radioFields}
                                                            label="Students"
                                                            type="radio"
                                                            name="gType"
                                                            id="a"
                                                            value="a"
                                                            checked={
                                                                formik.values
                                                                    .gType ===
                                                                'a'
                                                            }
                                                            onChange={
                                                                formik.handleChange
                                                            }
                                                        />
                                                    </Col>

                                                    <Col
                                                        className="form-group mb-5 mb-md-0"
                                                        md={6}
                                                        xl={4}
                                                    >
                                                        <InputWithRadioComp
                                                            {...radioFields}
                                                            label="Mentors"
                                                            type="radio"
                                                            name="gType"
                                                            id="b"
                                                            value="b"
                                                            checked={
                                                                formik.values
                                                                    .gType ===
                                                                'b'
                                                            }
                                                            onChange={
                                                                formik.handleChange
                                                            }
                                                        />
                                                    </Col>
                                                    <Col
                                                        className="form-group mb-5 mb-md-0"
                                                        md={6}
                                                        xl={4}
                                                    >
                                                        <InputWithRadioComp
                                                            {...radioFields}
                                                            label="Evaluators"
                                                            type="radio"
                                                            name="gType"
                                                            id="c"
                                                            value="c"
                                                            checked={
                                                                formik.values
                                                                    .gType ===
                                                                'c'
                                                            }
                                                            onChange={
                                                                formik.handleChange
                                                            }
                                                        />
                                                    </Col>

                                                    {formik.touched.gType &&
                                                    formik.errors.gType ? (
                                                            <small className="error-cls">
                                                                {
                                                                    formik.errors
                                                                        .gType
                                                                }
                                                            </small>
                                                        ) : null}
                                                </FormGroup>

                                                <FormGroup className="form-row row mb-5">
                                                    <Col
                                                        className="form-group mb-5  mb-md-0"
                                                        md={12}
                                                    >
                                                        <Label
                                                            htmlFor="firstName"
                                                            className="mb-2"
                                                        >
                                                            News category
                                                        </Label>
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit.
                                                        </p>
                                                        <InputBox
                                                            {...newsTopic}
                                                            id="newsTopic"
                                                            name="newsTopic"
                                                            onChange={
                                                                formik.handleChange
                                                            }
                                                            onBlur={
                                                                formik.handleBlur
                                                            }
                                                            value={
                                                                formik.values
                                                                    .newsTopic
                                                            }
                                                        />

                                                        {formik.touched
                                                            .newsTopic &&
                                                        formik.errors
                                                            .newsTopic ? (
                                                                <small className="error-cls">
                                                                    {
                                                                        formik
                                                                            .errors
                                                                            .newsTopic
                                                                    }
                                                                </small>
                                                            ) : null}
                                                    </Col>
                                                </FormGroup>
                                            </Row>
                                        </CardBody>
                                    </Card>

                                    <Card className="aside p-4">
                                        <CardBody>
                                            <FormGroup className="form-row row mb-5">
                                                <Label className="mb-2">
                                                    Add News Details
                                                </Label>
                                                <Col
                                                    className="form-group mb-5  mb-md-0"
                                                    md={12}
                                                >
                                                    <FormGroup className="form-row row mb-5">
                                                        <Label className="mb-2">
                                                            News title
                                                        </Label>
                                                        <p>
                                                            Lorem ipsum dolor
                                                            sit amet,
                                                            consectetur
                                                            adipiscing elit.
                                                        </p>
                                                        <Col
                                                            className="form-group"
                                                            md={12}
                                                        >
                                                            <InputBox
                                                                {...newsTopic}
                                                                id="sessionTopic"
                                                                name="sessionTopic"
                                                                onChange={
                                                                    formik.handleChange
                                                                }
                                                                onBlur={
                                                                    formik.handleBlur
                                                                }
                                                                value={
                                                                    formik
                                                                        .values
                                                                        .sessionTopic
                                                                }
                                                            />

                                                            {formik.touched
                                                                .sessionTopic &&
                                                            formik.errors
                                                                .sessionTopic ? (
                                                                    <small className="error-cls">
                                                                        {
                                                                            formik
                                                                                .errors
                                                                                .sessionTopic
                                                                        }
                                                                    </small>
                                                                ) : null}
                                                        </Col>
                                                        {formik.touched.dob &&
                                                        formik.errors.dob ? (
                                                                <small className="error-cls">
                                                                    {
                                                                        formik
                                                                            .errors
                                                                            .dob
                                                                    }
                                                                </small>
                                                            ) : null}
                                                    </FormGroup>
                                                </Col>

                                                <Col
                                                    className="form-group mb-5  mb-md-0"
                                                    md={12}
                                                >
                                                    <FormGroup className="form-row row mb-5">
                                                        <Label className="mb-2">
                                                            News description
                                                        </Label>
                                                        <p>
                                                            Include all the
                                                            information someone
                                                            would need to
                                                            understand your
                                                            question
                                                        </p>
                                                        <Col
                                                            className="form-group"
                                                            md={12}
                                                        >
                                                            <InputBox
                                                                {...newsDes}
                                                                id="sessionTopic"
                                                                name="sessionTopic"
                                                                onChange={
                                                                    formik.handleChange
                                                                }
                                                                onBlur={
                                                                    formik.handleBlur
                                                                }
                                                                value={
                                                                    formik
                                                                        .values
                                                                        .sessionTopic
                                                                }
                                                            />

                                                            {formik.touched
                                                                .sessionTopic &&
                                                            formik.errors
                                                                .sessionTopic ? (
                                                                    <small className="error-cls">
                                                                        {
                                                                            formik
                                                                                .errors
                                                                                .sessionTopic
                                                                        }
                                                                    </small>
                                                                ) : null}
                                                        </Col>
                                                        {formik.touched.dob &&
                                                        formik.errors.dob ? (
                                                                <small className="error-cls">
                                                                    {
                                                                        formik
                                                                            .errors
                                                                            .dob
                                                                    }
                                                                </small>
                                                            ) : null}
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

export default AddNews;
