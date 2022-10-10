import '../Student/Pages/SignUp.scss';
import  React, { useState }  from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { InputBox } from '../stories/InputBox/InputBox';
import { Button } from '../stories/Button';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import signuplogo from '../assets/media/tn-brands/UPSHIFT_BLACK.png';
import ellipse_1 from '../assets/media/ellipse.svg';
import { adminLoginUser } from '../redux/actions';

import CryptoJS from 'crypto-js';

const LoginNew = (props) => {
    const history = useHistory();
    const [password, handlePassword] = useState("password");
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        validationSchema: Yup.object({
            email: Yup.string().required('required'),
            password: Yup.string().required('required')
        }),
        // ADMIN ROLE
        onSubmit: (values) => {
            const key = CryptoJS.enc.Hex.parse(
                '253D3FB468A0E24677C28A624BE0F939'
            );
            const iv = CryptoJS.enc.Hex.parse(
                '00000000000000000000000000000000'
            );
            const encrypted = CryptoJS.AES.encrypt(values.password, key, {
                iv: iv,
                padding: CryptoJS.pad.NoPadding
            }).toString();
            console.log(encrypted);
            const body = {
                username: values.email,
                password: encrypted,
                role: "ADMIN"
            };
            // history.push("/admin/dashboard");
            props.adminLoginUserAction(body, history);
            console.log('======', body);
        }
    });

    const inputUserId = {
        type: 'text',
        placeholder: 'Enter admin email '
    };

    const inputPassword = {
        placeholder: 'Enter password'
    };

    const logInBtn = {
        label: 'Login',
        size: 'large'
        // btnClass: "default",
    };
    // const openNotificationWithIcon = (type, item) => {
    //   notification[type]({
    //     message: item,
    //     // description:
    //     //   "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    //   });
    // };
    // const MINUTE_MS = 6000;

    // useEffect(() => {
    //   if (props.currentUser && props.currentUser.status === 200) {
    //     const sucess = props.currentUser && props.currentUser.message;
    //     openNotificationWithIcon("success", sucess);
    //   } else {
    //     openNotificationWithIcon("error", "Please check login details");
    //   }
    // }, [props.currentUser, props.error]);
    // console.log("===========error", props.error);
    const handleShow =(e, type)=>{     
        if(type === "password"){
            handlePassword("text");
        }else{
            handlePassword("password");
        }
    };

    return (
        <React.Fragment>
            <div className="container-fluid  SignUp Login">
                {/* <UsersPage /> */}
                <Row className="row-flex height-100">
                    <div className="col-md-4 aside mobile-header">
                        <div className="row">
                            <Link to={"/"} exact>
                                <Col md={12} className=" mr-auto mobile_tab-hide">
                                    {' '}
                                    <h2 className="text-white">
                                        <img
                                            src={signuplogo}
                                            alt="Signup logo"
                                            className="img-fluid w-50"
                                        />
                                    </h2>
                                </Col>
                            </Link>
                        </div>

                        <h1 className="text-left pb-5 mobile_tab-hide">
                            Together let’s learn and build something amazing.
                        </h1>
                        <p className="mobile_tab-hide">
                            Creating change makers of tomorrow
                        </p>
                        <div className="mobile_tab-hide">
                            <figure>
                                <img
                                    src={ellipse_1}
                                    alt="ellipse_1"
                                    className="img-fluid img-1"
                                />
                            </figure>
                        </div>
                    </div>

                    <Col xs={12} sm={12} md={8} xl={8} className="article">
                        <Row className=" article-header mb-4">
                            <h4 className='mb-4'>
                                <span className="color-green">Admin</span> Login
                            </h4>
                        </Row>

                        <Row className="mt-5">
                            <Col md={12}>
                                <Form onSubmit={formik.handleSubmit}>
                                    <div className="form-row row mb-5">
                                        <Col
                                            className="form-group"
                                            xs={12}
                                            sm={12}
                                            md={10}
                                            xl={7}
                                        >
                                            <Label
                                                className="mb-2"
                                                htmlFor="email"
                                            >
                                                Email
                                            </Label>
                                            <InputBox
                                                {...inputUserId}
                                                id="email"
                                                name="email"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                            />

                                            {formik.touched.email &&
                                            formik.errors.email ? (
                                                    <small className="error-cls">
                                                    Required
                                                    </small>
                                                ) : null}
                                        </Col>
                                    </div>
                                    <div className="w-100 clearfix" />

                                    <div className="form-row row mb-5">
                                        <Col
                                            className="form-group"
                                            xs={12}
                                            sm={12}
                                            md={10}
                                            xl={7}
                                        >
                                            <Label
                                                className="mb-2"
                                                htmlFor="Password"
                                            >
                                                Password
                                            </Label>
                                            <InputBox
                                                {...inputPassword}
                                                id="password"
                                                name="password"
                                                type= {password}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.password}
                                            />

                                            {formik.touched.password &&
                                            formik.errors.password ? (
                                                    <small className="error-cls">
                                                    Required
                                                    </small>
                                                ) : null}
                                        </Col>

                                        <Col
                                            className="form-group"
                                            xs={12}
                                            sm={12}
                                            md={10}
                                            xl={7}
                                        >
                                            <Row className="keepme_login">
                                                <Col className="col-sm-4">
                                                    <FormGroup check>
                                                        <Input
                                                            type="checkbox"
                                                            name="acceptedTerms"
                                                            className="my-auto"
                                                            onClick={(e)=>handleShow(e,password)}
                                                        />
                                                        <small className="text-bold ">
                                                            {' '}
                                                            Show Password
                                                        </small>
                                                    </FormGroup>
                                                </Col>
                                                <Col className="col-sm-8 text-right">
                                                    <Link
                                                        exact="true"
                                                        to="/admin/forgotpassword"
                                                        className="text-link pt-1"
                                                    >
                                                        Forgot your password
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </div>
                                    <div className="form-row row mb-5">
                                        <Col
                                            className="form-group"
                                            xs={12}
                                            sm={12}
                                            md={10}
                                            xl={7}
                                        >
                                            <Button
                                                {...logInBtn}
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
                                        </Col>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = ({ authUser }) => {
    const { loading, error, currentUser } = authUser;
    return { loading, error, currentUser };
};

export default connect(mapStateToProps, {
    adminLoginUserAction: adminLoginUser
})(LoginNew);
// export default LoginNew;
