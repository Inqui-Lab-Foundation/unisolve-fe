import './Student.scss';
import React, { useState, useEffect } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    CardText,
    // CardImg
} from 'reactstrap';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
// import { static_badges } from '../../data/StaticBadges.js';
// import { ProgressComp } from '../../stories/Progress/Progress.jsx';
// import { PhotoUpload } from '../../stories/PhotoUpload/PhotoUpload.jsx';
import { BreadcrumbTwo } from '../../stories/BreadcrumbTwo/BreadcrumbTwo.jsx';

import Layout from '../Layout.jsx';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import withReactContent from 'sweetalert2-react-content';
import ChangePSWModal from './ChangePSWModal';

import { getCurrentUser } from '../../helpers/Utils';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentByIdData } from '../../redux/studentRegistration/actions';
import defaultUser from '../../assets/media/img/default-user.png';

const MySwal = withReactContent(Swal);

const onCancel = () => {
    Swal.close();
};

const btnSubmit = () => {
    Swal.close();
};

const MyProfile = () => {
    const [profileAction, setProfileAction] = useState(true);
    const currentUser = getCurrentUser("current_user");

    const showFormModal = (values) => {
        return new Promise((resolve, reject) => {
            MySwal.fire({
                // title: "Enter values",
                reverseButtons: false,
                showCloseButton: true,
                allowOutsideClick: false,
                html: (
                    <ChangePSWModal
                        values={values}
                        onSubmit={(values) => {
                            resolve(values);
                            Swal.close();
                        }}
                        onCancel={onCancel}
                        btnSubmit={btnSubmit}
                    />
                ),
                onClose: () => reject(),
                showConfirmButton: false
            });
        });
    };
    function showModal() {
        showFormModal({
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
            lastName: ''
        })
            .then((values) => console.log(values))
            .catch(() => console.log('Modal closed'));
    }
    useEffect(() => {
        const search = window.location.search;

        if (search === '?id=teams') {
            setProfileAction(false);
        }
    },[]);

    const {teamMember} = useSelector(state=>state.studentRegistration);
    console.log(teamMember);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStudentByIdData(currentUser?.data[0]?.user_id));
    },[dispatch,currentUser?.data[0]?.user_id]);

    const headingDetails = {
        title: 'My Profile',

        options: [
            {
                title: 'Home',
                path: '/'
            },
            {
                title: 'My Profile',
                path: '/my-profile'
            }
        ]
    };

    // const progressBar = {
    //     label: 'Progress',
    //     options: [{ id: 1, teams: 'CSK', percent: 75, status: 'active' }]
    // };

    // const personal_details = [
    //     {
    //         id: 1,
    //         title: 'Age',
    //         body: '15'
    //     },
    //     {
    //         id: 2,
    //         title: 'Gender',
    //         body: 'Male'
    //     },
    //     {
    //         id: 3,
    //         title: 'Date of birth',
    //         body: '2 January 2003'
    //     },
    //     {
    //         id: 4,
    //         title: 'Address',
    //         body: '403802, Hydrabad, India'
    //     }
    // ];

    

    return (
        <Layout>
            <Container className="MyProfile pt-3 pt-xl-5 mb-50">
                {/* <UsersPage /> */}
                <Row>
                    <Col className="col-xl-10 offset-xl-1 offset-md-0">
                        {profileAction ? (
                            <BreadcrumbTwo {...headingDetails} />
                        ) : (
                            <Link
                                to="/teams"
                                className="color-grey-1 mb-3 d-block"
                            >
                                <IoIosArrowBack />
                                Go Back
                            </Link>
                        )}

                        <Row>
                            <Col md={12}>
                                <Card className="w-100  mb-5 p-4">
                                    <CardBody>
                                        <Row>
                                            <Col
                                                md={8}
                                                className="border-right my-auto "
                                            >
                                                <Row>
                                                    <Col md={5}>
                                                        {/* <small>Image 240x240</small> */}
                                                        <figure>
                                                            {/* <PhotoUpload /> */}
                                                            <img className='img-fluid w-50' alt="default" src={defaultUser} />
                                                        </figure>
                                                    </Col>
                                                    <Col
                                                        md={7}
                                                        className="my-auto profile-detail"
                                                    >
                                                        <h2 className="mb-4">
                                                            <span>Name:</span>
                                                            {teamMember?.full_name ? teamMember?.full_name : "N/A"}
                                                        </h2>
                                                        {/* <CardText>
                                                            <span>Email:</span>{' '}
                                                            <b>
                                                                ritusharma@gmail.com
                                                            </b>
                                                        </CardText> */}
                                                        {/* <CardText>
                                                            <span>Class:</span>{' '}
                                                            <b>{teamMember?.Grade}</b>
                                                        </CardText> */}
                                                    </Col>
                                                </Row>
                                            </Col>

                                            <Col
                                                md={4}
                                                className="my-auto profile-detail"
                                            >
                                                <CardText>
                                                    <span>Grade:</span>{' '}
                                                    <b>{teamMember?.Grade ? teamMember?.Grade : "N/A"}</b>
                                                </CardText>
                                                <CardText>
                                                    <span>Gender:</span>{' '}
                                                    <b>{teamMember?.Gender ? teamMember?.Gender : "N/A"}</b>
                                                </CardText>
                                                <CardText>
                                                    <span>
                                                        Age:
                                                    </span>{' '}
                                                    <b>{teamMember?.Age ? teamMember?.Age : "N/A"}</b>
                                                </CardText>
                                                <CardText>
                                                    <span>Joined on:</span>{' '}
                                                    <b>{teamMember?.created_at ? teamMember?.created_at : "N/A"}</b>
                                                </CardText>
                                            </Col>

                                            <Col md={12}></Col>
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col md={6}>
                                                <CardTitle className="pb-2">
                                                    Password 
                                                </CardTitle>
                                                <CardText>
                                                    <Link
                                                        exact="true"
                                                        onClick={showModal}
                                                        className="my-auto pt-0 text-link "
                                                    >
                                                       Change Password
                                                    </Link>
                                                </CardText>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            {/* <Col md={12} xl={6}>
                                <Card className="w-100 h-100   mb-5 p-4">
                                    <CardBody>
                                        <div className="d-flex ">
                                            <div className="me-auto my-auto ">
                                                <CardTitle className="sub">
                                                    Personal details
                                                </CardTitle>
                                            </div>

                                            <div className="p-2 ">
                                                {profileAction ? (
                                                    <Link
                                                        exact="true"
                                                        to="/edit-details"
                                                        className="text-link"
                                                    >
                                                        <b>
                                                            <i className="fa-solid fa-pencil px-3"></i>{' '}
                                                            Edit
                                                        </b>
                                                    </Link>
                                                ) : (
                                                    ''
                                                )}
                                            </div>
                                        </div>

                                        <hr className="mb-5 mt-0" />
                                        <Row>
                                            <Col md={12} className="mb-5">
                                                <CardTitle>About</CardTitle>
                                                <CardText>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Blandit turpis cursus quam
                                                    diam ipsum. Tempor,
                                                    tristique egestas
                                                    pellentesque faucibus. Quis
                                                    nibh tellus sit aliquam nibh
                                                    penatibus elit.
                                                </CardText>
                                            </Col>

                                            {personal_details.map((item) => {
                                                return (
                                                    <Col
                                                        md={6}
                                                        className="mb-5"
                                                        key={item.id}
                                                    >
                                                        <CardTitle>
                                                            {item.title}
                                                        </CardTitle>
                                                        <CardText>
                                                            {item.body}
                                                        </CardText>
                                                    </Col>
                                                );
                                            })}
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col> */}
                            {/* <Col md={12} xl={6}>
                                <Card className="w-100  p-4">
                                    <CardBody>
                                        <div className="d-flex ">
                                            <div className="me-auto my-auto">
                                                <CardTitle className="sub">
                                                    Achievements
                                                </CardTitle>
                                            </div>

                                            <div className="p-2 ">
                                                <Link
                                                    exact="true"
                                                    to="/"
                                                    className="text-link"
                                                >
                                                    <b>View all</b>{' '}
                                                    <i className="fa-solid fa-angle-right" />
                                                </Link>
                                            </div>
                                        </div>

                                        <hr className="mb-4 mt-0" />
                                        <Row>
                                            <Col md={12}>
                                                <CardTitle>
                                                    Learning progress
                                                </CardTitle>
                                                <CardText>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                </CardText>
                                            </Col>
                                            <Col md={12} className="mb-5">
                                                <Row>
                                                    <Col md={7}>
                                                        <ProgressComp
                                                            {...progressBar}
                                                        />
                                                        <span>Level 15</span>
                                                    </Col>
                                                    <Col md={5}>
                                                        <h6>
                                                            Points:{' '}
                                                            <span>300</span>
                                                        </h6>
                                                    </Col>
                                                </Row>
                                            </Col>

                                            <Col md={12} className="mb-4">
                                                <div className="d-flex ">
                                                    <div className="me-auto my-auto">
                                                        <CardTitle className="sub">
                                                            <CardTitle>
                                                                Badges
                                                            </CardTitle>
                                                        </CardTitle>
                                                    </div>

                                                    <div className="p-2 ">
                                                        <CardTitle className="sub">
                                                            <Link
                                                                exact="true"
                                                                to="/"
                                                                className="text-link"
                                                            >
                                                                View all{' '}
                                                                <i className="fa-solid fa-angle-right" />
                                                            </Link>
                                                        </CardTitle>
                                                    </div>
                                                </div>

                                                <Row>
                                                    
                                                    {static_badges.map(
                                                        (item) => {
                                                            return (
                                                                <Col
                                                                    md="4"
                                                                    className="mb-3"
                                                                    key={
                                                                        item.id
                                                                    }
                                                                >
                                                                    <Card className="badges">
                                                                        <CardImg
                                                                            className="img-fluid"
                                                                            src={
                                                                                item.imgageUrl
                                                                            }
                                                                            alt={
                                                                                item.badgeName
                                                                            }
                                                                        />
                                                                        <CardBody className="px-0">
                                                                            <CardTitle>
                                                                                {
                                                                                    item.badgeName
                                                                                }
                                                                            </CardTitle>
                                                                            <hr />
                                                                            <CardText>
                                                                                EARNED
                                                                                ON:
                                                                                <br />
                                                                                <span>
                                                                                    {
                                                                                        item.earnedOn
                                                                                    }
                                                                                </span>
                                                                            </CardText>
                                                                        </CardBody>
                                                                    </Card>
                                                                </Col>
                                                            );
                                                        }
                                                    )}
                                                  
                                                    <div className="d-flex flex-row-reverse mt-3">
                                                        <Link
                                                            exact="true"
                                                            to="/"
                                                            className="text-link"
                                                        >
                                                            <b>How to earn</b>{' '}
                                                            <i className="fa-solid fa-question" />
                                                        </Link>
                                                    </div>
                                                    
                                                </Row>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col> */}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default MyProfile;
