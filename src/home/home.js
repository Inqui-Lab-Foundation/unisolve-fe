/* eslint-disable indent */
import './home.scss';

import {
    Container,
    Row,
    Col,
    Card,
    // CardImg,
    CardBody,
    // CardTitle,
    // CardText,
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionBody,
    Alert,
    Nav,
    NavItem
} from 'reactstrap';
import { Button } from '../stories/Button';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import LanguageSelectorComp from '../components/LanguageSelectorComp';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Slider from 'react-slick';
import LearnMentor from '../assets/media/home/learn.svg';
import upshift from '../assets/media/UPSHIFT-diagram.jpg';
import testi1 from '../assets/media/home/testi/Herve_Morin_Global_head.jpg';
import testi2 from '../assets/media/home/testi/Swathi.JPG';
import IdeaBulb from '../assets/media/home/idea-bulb.png';

import map_icon_awa from '../assets/media/home/icon_aweraness.png';
import map_icon_reg from '../assets/media/home/icon_registration.png';
import map_icon_prob from '../assets/media/home/icon_problem_solving.png';
import map_icon_test from '../assets/media/home/icon_solution_testing.png';
import map_icon_pitch from '../assets/media/home/icon_solution_pichting.png';
import map_icon_incu from '../assets/media/home/icon_incubation.png';

// ta brans
import SSA_Tamilnadu from '../assets/media/tn-brands/1_SSA_Tamilnadu.jpg';
import SIDP_tamilnadu from '../assets/media/tn-brands/2_SIDP_tamilnadu.jpg';
import EDII_tamilnadu from '../assets/media/tn-brands/3_EDII_tamilnadu.jpg';
import UpShift_Tamilnadu from '../assets/media/tn-brands/4_UpShift_Tamilnadu.png';
import Yuwaah_Tamilnadu from '../assets/media/tn-brands/5_Yuwaah_Tamilnadu.jpg';
import IIF_Tamilnadu from '../assets/media/tn-brands/7_IIF_Tamilnadu.png';
import SS_Tamilnadu from '../assets/media/tn-brands/8_SS_Tamilnadu.jpg';
import Unicef_OOI_Tamilnadu from '../assets/media/tn-brands/9_Unicef OOI_Tamilnadu.jpg';
import LogoTn from '../assets/media/tn-brands/UPSHIFT_SIDP_TN_logo.png';

import Blog1 from '../assets/media/home/blog/walker_elders.jpg';
import Blog2 from '../assets/media/home/blog/agriculture_bag.jpeg';
import Blog3 from '../assets/media/home/blog/sweeping_machine.png';
import RegisterPopup from './registration/RegisterPopup';
import TamilNaduMap from '../components/MapCard/TamilNaduMap';
import { getDistrictData, getDistrictLiveData } from '../redux/home/actions';
import { useDispatch, useSelector } from 'react-redux';
import FancyVideo from 'react-videojs-fancybox';
import taVideo from '../assets/media/tn-brands/ta-video.mp4';
import tnVideoCover from '../assets/media/tn-brands/videoCover.png';
import SchoolRegisterPopup from './SchoolRegisterPopup';
import axios from 'axios';
import ScrollToTop from 'react-scroll-to-top';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { getSchedulesForTeacherAndStudents } from '../redux/schedules/actions';
import { compareDates } from '../helpers/Utils';

const Home = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState('1');
    const dispatch = useDispatch();
    const { schedules } = useSelector((state) => state.schedules);
    const [modalShow, setModalShow] = useState(false);
    useLayoutEffect(() => {
        dispatch(getSchedulesForTeacherAndStudents());
    }, []);
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    const [diesCode, setDiesCode] = useState('');
    const [orgData, setOrgData] = useState({});
    const [show, setShow] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    // const [select, handleSelect] = useState(false);

    const [sidebar, setSidebar] = useState(false);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    });

    const inputField = {
        type: 'text',
        className: 'defaultInput'
    };

    const handleOnChange = (e) => {
        setDiesCode(e.target.value);
        setShow(false);
    };

    const handleSearch = (e) => {
        const body = JSON.stringify({
            organization_code: diesCode
        });
        var config = {
            method: 'post',
            url: process.env.REACT_APP_API_BASE_URL + '/organizations/checkOrg',
            headers: {
                'Content-Type': 'application/json'
            },
            data: body
        };
        axios(config)
            .then(function (response) {
                if (response.status == 200) {
                    setOrgData(response?.data?.data[0]);
                    setShow(true);
                }
            })
            .catch(function (error) {
                console.log(error);
                setOrgData();
                setShow(true);
            });
        e.preventDefault();
    };

    const handleRegister = () => {
        setShowPopUp(true);
        setShow(false);
    };

    useLayoutEffect(() => {
        dispatch(getDistrictData());
        dispatch(getDistrictLiveData());
    }, []);

    const toggle = (id) => {
        open === id ? setOpen() : setOpen(id);
    };

    // const [onSearch] = useState('');

    // const { Search } = Input;

    const partners = [
        {
            id: 1,
            key: 'SSA',
            // imageUrl: Unicef
            imageUrl: SSA_Tamilnadu
        },
        {
            id: 2,
            key: 'SIDP',
            // imageUrl: Telangana
            imageUrl: SIDP_tamilnadu
        },
        {
            id: 3,
            key: 'EDII',
            // imageUrl: Inquilab
            imageUrl: EDII_tamilnadu
        },
        {
            id: 4,
            key: 'UpShift',
            // imageUrl: Yuwaah
            imageUrl: UpShift_Tamilnadu
        },
        {
            id: 5,
            key: 'Yuwaah',
            // imageUrl: YoungWarrior
            imageUrl: Yuwaah_Tamilnadu
        },
        {
            id: 6,
            key: 'IIF',
            // imageUrl: Congnizant
            imageUrl: IIF_Tamilnadu
        },
        {
            id: 6,
            key: 'SS',
            // imageUrl: Congnizant
            imageUrl: SS_Tamilnadu
        },
        {
            id: 6,
            key: 'Unicef',
            // imageUrl: Congnizant
            imageUrl: Unicef_OOI_Tamilnadu
        }
    ];

    const testimonials = [
        {
            id: 1,
            imageUrl: testi2,
            desc: 'Through this program , we could improve our Design thinking skills. We learnt the way we should think and work while identifying a problem, Finding the root cause of it and Developing Innovative solutions for it and could apply it in our daily life',
            name: 'Swathi',
            title: 'Student at GHS , India'
        },
        {
            id: 2,
            imageUrl: testi1,
            desc: 'This Program provides participants with an opportunity to put concrete skills into practice-young people invest themselves in developing solutions for the problems they identified in their communities',
            name: 'Herve Morin, Global lead',
            title: 'Unicef Office of innovation'
        }
    ];

    const testimonials_settings = {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    dots: true
                }
            }
        ]
    };

    const blog_settings = {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        // centerMode: true,
        focusOnSelect: true,
        asNavFor: '.slider-nav',

        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    centerMode: false
                }
            }
        ]
    };

    const blog_settings_thumbs = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '10px'
    };

    const accordion = [
        {
            id: 1,
            title: `${t('home_tl.faq_qn_1')}`,
            desc: `${t('home_tl.faq_ans_1')}`
        },
        {
            id: 2,
            title: `${t('home_tl.faq_qn_2')}`,
            desc: `${t('home_tl.faq_ans_2')}`
        },
        {
            id: 3,
            title: `${t('home_tl.faq_qn_3')}`,
            desc: `${t('home_tl.faq_ans_3')}`
        },
        {
            id: 4,
            title: `${t('home_tl.faq_qn_4')}`,
            desc: `${t('home_tl.faq_ans_4')}`
        },
        {
            id: 5,
            title: `${t('home_tl.faq_qn_5')}`,
            desc: `${t('home_tl.faq_ans_5')}`
        }
    ];

    const blogs = [
        {
            id: 1,
            imgUrl: Blog2,
            title: `${t('home_tl.idea_heading_1')}`,
            desc: `${t('home_tl.idea_desc_1')}`
        },
        {
            id: 2,
            imgUrl: Blog3,
            title: `${t('home_tl.idea_heading_2')}`,
            desc: `${t('home_tl.idea_desc_2')}`
        },
        {
            id: 3,
            imgUrl: Blog1,
            title: `${t('home_tl.idea_heading_3')}`,
            desc: `${t('home_tl.idea_desc_3')}`
        }
    ];
    // console.log("----379",sidebar);

    return (
        <div className="home-main">
            <ScrollToTop smooth color="#0da650" />
            {/* Mobile menu */}
            <Menu
                right
                className="landing-menu"
                isOpen={sidebar}
                onOpen={() => setSidebar(!sidebar)}
            >
                <Link className="menu-item" to="/login">
                    {t('home_nav_links.btn_login')}
                </Link>
                <Link className="menu-item" onClick={() => setSidebar(false)}>
                    <Button
                        label="Register"
                        btnClass="primary px-0 register"
                        size="small"
                        onClick={() => setModalShow(true)}
                    ></Button>
                </Link>
                <Nav className="ml-auto">
                    <NavItem onClick={() => setSidebar(false)}>
                        <AnchorLink
                            className="menu-item text-black"
                            href="#about"
                        >
                            {t('home_nav_links.about')}
                        </AnchorLink>
                    </NavItem>
                    <NavItem onClick={() => setSidebar(false)}>
                        <AnchorLink
                            className="menu-item mx-4 text-black"
                            href="#roadmap"
                        >
                            {t('home_nav_links.road_map')}
                        </AnchorLink>
                    </NavItem>
                    <NavItem onClick={() => setSidebar(false)}>
                        <AnchorLink
                            className="menu-item text-black"
                            href="#impact"
                        >
                            {t('home_nav_links.impact')}
                        </AnchorLink>
                    </NavItem>
                    <NavItem onClick={() => setSidebar(false)}>
                        <AnchorLink
                            className="menu-item mx-4 text-black"
                            href="#partners"
                        >
                            {t('home_nav_links.partners')}
                        </AnchorLink>
                    </NavItem>
                    <NavItem onClick={() => setSidebar(false)}>
                        <AnchorLink
                            className="menu-item text-black"
                            href="#faq"
                        >
                            {t('home_nav_links.faq')}
                        </AnchorLink>
                    </NavItem>
                </Nav>
            </Menu>
            <section className="header ">
                <div className="home-banner">
                    <Container>
                        <Row className="justify-content-between  pt-5">
                            <Col md={5} className="my-auto mobile-menu">
                                <h2 className="logo">
                                    <Link className="" exact="true" to="/">
                                        <figure>
                                            <img
                                                src={LogoTn}
                                                alt="logo"
                                                className="img-fluid w-5 logoImg"
                                            />
                                        </figure>
                                    </Link>
                                    <LanguageSelectorComp module="general" />
                                </h2>
                            </Col>
                            <Col
                                md={7}
                                className="text-right multi-actions main-menu"
                            >
                                <div className="nav p-4 justify-content-end">
                                    <Nav className="ml-auto ">
                                        <NavItem className="my-auto">
                                            <AnchorLink
                                                className="menu-item text-black mx-5"
                                                href="#about"
                                            >
                                                {t('home_nav_links.about')}
                                            </AnchorLink>
                                        </NavItem>
                                        <NavItem className="my-auto">
                                            <AnchorLink
                                                className="menu-item  text-black"
                                                href="#roadmap"
                                            >
                                                {t('home_nav_links.road_map')}
                                            </AnchorLink>
                                        </NavItem>
                                        <NavItem className="my-auto">
                                            <AnchorLink
                                                className="menu-item text-black mx-5"
                                                href="#impact"
                                            >
                                                {t('home_nav_links.impact')}
                                            </AnchorLink>
                                        </NavItem>
                                        <NavItem className="my-auto">
                                            <AnchorLink
                                                className="menu-item  text-black"
                                                href="#partners"
                                            >
                                                {t('home_nav_links.partners')}
                                            </AnchorLink>
                                        </NavItem>
                                        <NavItem className="my-auto">
                                            <AnchorLink
                                                className="menu-item text-black mx-5"
                                                href="#faq"
                                            >
                                                {t('home_nav_links.faq')}
                                            </AnchorLink>
                                        </NavItem>
                                    </Nav>
                                    {/* <LanguageSelectorComp module="general"/> */}
                                </div>
                            </Col>
                        </Row>
                        <Row className="h-100">
                            <Col xs={12} md={10} lg={4} className="center">
                                <h1>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: t(
                                                'home_tl.Hero_section-header'
                                            )
                                        }}
                                    ></div>
                                </h1>

                                <>
                                    <p>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: t(
                                                    'home_tl.Hero_section-description'
                                                )
                                            }}
                                        ></div>
                                    </p>
                                    <div className="d-flex mini123">
                                        {schedules &&
                                        schedules.length > 0 &&
                                        schedules[0]?.teacher &&
                                        schedules[0]?.teacher?.registration &&
                                        compareDates(
                                            schedules[0].teacher?.registration
                                        ) ? (
                                            <>
                                                <Button
                                                    // label={t('home.get_Started')}
                                                    label={t(
                                                        'home_tl.register'
                                                    )}
                                                    btnClass="primary mx-3"
                                                    size="small"
                                                    onClick={() =>
                                                        setModalShow(true)
                                                    }
                                                />

                                                <Link
                                                    className="landing-page-actions1"
                                                    exact="true"
                                                    to="/login"
                                                >
                                                    <Button
                                                        // label="Login"
                                                        label={t(
                                                            'home_tl.login'
                                                        )}
                                                        btnClass="primary "
                                                        size="small"
                                                    />
                                                </Link>
                                            </>
                                        ) : (
                                            <p className="green reg_text_size">
                                                Registration will start on{' '}
                                                {schedules &&
                                                    schedules.length > 0 &&
                                                    schedules[0]?.teacher &&
                                                    schedules[0]?.teacher
                                                        ?.registration
                                                        ?.start_date}
                                            </p>
                                        )}
                                    </div>
                                </>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section className="about-us" id="about">
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <div className="heading">
                                <h5>{t('home_tl.about_us')}</h5>
                                <h2 className="sub-heading text-center">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: t(
                                                'home_tl.about_us_heading'
                                            )
                                        }}
                                    ></div>
                                </h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: t('home_tl.about_us_desc')
                                }}
                            ></div>
                        </Col>
                        <Col md={6} className="my-auto ">
                            <div className="position-relative">
                                <FancyVideo
                                    source={taVideo}
                                    poster={tnVideoCover}
                                    id={'sintel'}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row className="my-5 py-5">
                        <Col md={12} lg={5} className="teacher ">
                            <figure className="text-left">
                                <img
                                    src={upshift}
                                    alt="mentor"
                                    className="img-fluid"
                                />
                            </figure>
                        </Col>
                        <Col
                            md={12}
                            lg={7}
                            className="my-auto teacher-heading "
                        >
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: t('home_tl.about_upshift_heading')
                                }}
                            ></div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: t('home_tl.about_upshift_desc')
                                }}
                            ></div>
                        </Col>
                    </Row>

                    <Row className="student">
                        <Col
                            md={12}
                            lg={6}
                            className="my-auto mx-auto student-heading px-5 "
                        >
                            <h2 className="mb-5 sub-heading">
                                UPSHIFT {t('home_tl.power_by')}{' '}
                                <span className="green">UNISOLVE</span>{' '}
                            </h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: t('home_tl.upshift_power_desc')
                                }}
                            ></div>
                            <Link
                                className="landing-page-actions"
                                exact="true"
                                to="/login"
                            >
                                <Button
                                    label={t(
                                        'home.learners_students_new_button'
                                    )}
                                    btnClass="primary mx-3"
                                    size="small"
                                />
                            </Link>
                        </Col>
                        <Col md={12} lg={6}>
                            <figure className="my-0">
                                <img
                                    src={LearnMentor}
                                    alt="learn"
                                    className="img-fluid"
                                />
                            </figure>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* <section className="mentor-student">
        <Container className="both">
            <Row>
                <Col
                    md={12}
                    lg={6}
                    className="my-auto teacher-heading order-2 order-xl-1"
                >
                    <div dangerouslySetInnerHTML={{ __html: t('home_tl.about_upshift_heading') }}></div>



                    <div dangerouslySetInnerHTML={{ __html: t('home_tl.about_upshift_desc') }}></div>
                    
                </Col>

                <Col
                    md={12}
                    lg={6}
                    className="teacher order-1  order-md-2"
                >
                    <figure className='text-right'>
                        <img
                            src={upshift}
                            alt="mentor"
                            className="img-fluid" />
                    </figure>
                </Col>
            </Row>

            <Row className="student">
                <Col md={12} lg={6}>
                    <figure className='my-0'>
                        <img
                            src={LearnMentor}
                            alt="learn"
                            className="img-fluid" />
                    </figure>
                </Col>
                <Col
                    md={12}
                    lg={6}
                    className="my-auto mx-auto student-heading px-5 "
                >
                    
                    <h2 className='mb-5 sub-heading'>

                        UPSHIFT powered by <span className="green">
                            UNISOLVE
                        </span>{' '}
                    </h2>
                    <div dangerouslySetInnerHTML={{ __html: t('home_tl.upshift_power_desc') }}></div>
                    <Link
                        className="landing-page-actions"
                        exact="true"
                        to="/login"
                    >
                        <Button
                            label={t(
                                'home.learners_students_new_button'
                            )}
                            btnClass="primary mx-3"
                            size="small" />
                    </Link>

                    
                </Col>
            </Row>
        </Container>
    </section> */}

            <section className="road-map" id="roadmap">
                <div className="heading">
                    <h2 className="sub-heading w-100 text-center">
                        {t('home_tl.roadmpa_heading')}
                    </h2>
                </div>

                <div className="timeline">
                    <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                        <div className="timeline__event__icon ">
                            {/* <i className="lni-cake">sdsd</i> */}
                            <img src={map_icon_awa} />
                        </div>
                        <div className="timeline__event__date text-white">
                            {t('home_tl.step')}-1
                        </div>
                        <div className="timeline__event__content ">
                            <div className="timeline__event__title">
                                {t('home_tl.roadmpa_one')}
                            </div>
                            <div className="timeline__event__description">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: t('home_tl.roadmpa_one_desc')
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                        <div className="timeline__event__icon">
                            <img src={map_icon_reg} />
                        </div>
                        <div className="timeline__event__date text-white">
                            {t('home_tl.step')}-2
                        </div>
                        <div className="timeline__event__content">
                            <div className="timeline__event__title">
                                {t('home_tl.roadmpa_two')}
                            </div>
                            <div className="timeline__event__description">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: t('home_tl.roadmpa_two_desc')
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                        <div className="timeline__event__icon">
                            <img src={map_icon_prob} />
                        </div>
                        <div className="timeline__event__date text-white">
                            {t('home_tl.step')}-3
                        </div>
                        <div className="timeline__event__content">
                            <div className="timeline__event__title">
                                {t('home_tl.roadmpa_three')}
                            </div>
                            <div className="timeline__event__description">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: t('home_tl.roadmpa_three_desc')
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                        <div className="timeline__event__icon">
                            <img src={map_icon_test} />
                        </div>
                        <div className="timeline__event__date text-white">
                            {t('home_tl.step')}-4
                        </div>
                        <div className="timeline__event__content">
                            <div className="timeline__event__title">
                                {t('home_tl.roadmpa_four')}
                            </div>
                            <div className="timeline__event__description">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: t('home_tl.roadmpa_four_desc')
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                        <div className="timeline__event__icon">
                            <img src={map_icon_pitch} />
                        </div>
                        <div className="timeline__event__date text-white">
                            {t('home_tl.step')}-5
                        </div>
                        <div className="timeline__event__content">
                            <div className="timeline__event__title">
                                {t('home_tl.roadmpa_five')}
                            </div>
                            <div className="timeline__event__description">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: t('home_tl.roadmpa_five_desc')
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline__event animated fadeInUp timeline__event--type1">
                        <div className="timeline__event__icon">
                            <img src={map_icon_incu} />
                        </div>
                        <div className="timeline__event__date text-white">
                            {t('home_tl.step')}-6
                        </div>
                        <div className="timeline__event__content">
                            <div className="timeline__event__title">
                                {t('home_tl.roadmpa_six')}
                            </div>
                            <div className="timeline__event__description">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: t('home_tl.roadmpa_six_desc')
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="state-map" id="impact">
                <div className="heading">
                    <h2 className="sub-heading text-center">
                        {t('home_tl.engagement')}
                    </h2>
                </div>
                <TamilNaduMap />
            </section>

            <section className="blog">
                <Container>
                    <Row className="text-center justify-content-md-center">
                        <div className="heading">
                            <h2 className="sub-heading">
                                {t('home.student_ideas')}
                                <span className="blue">
                                    {t('home.student_ideas_span')}
                                </span>
                                <img
                                    src={IdeaBulb}
                                    alt="Student Idea"
                                    className="img-fluid"
                                    style={{ marginLeft: '2rem' }}
                                />
                            </h2>
                        </div>

                        <Col md={12} className="blog-slider">
                            <Slider
                                {...blog_settings}
                                asNavFor={nav2}
                                ref={(slider) => setSlider1(slider)}
                            >
                                {blogs.map((blog, i) => {
                                    return (
                                        <div key={i}>
                                            <div
                                                className="blog-card"
                                                // style={{ backgroundImage: `url(${blog.imgUrl})` }}
                                                style={{
                                                    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(35, 31, 32, 0.99)),
                        url(${blog.imgUrl})`
                                                }}
                                            >
                                                <CardBody className="text-left ">
                                                    <h4 className="pt-5 text-white">
                                                        {blog.title}
                                                    </h4>
                                                    <blockquote className="blockquote text-white">
                                                        <p className="pb-5 text-white">
                                                            {blog.desc}
                                                        </p>
                                                    </blockquote>
                                                </CardBody>
                                            </div>
                                        </div>
                                    );
                                })}
                            </Slider>
                            <div className="thumbnail-slider-wrap">
                                <Slider
                                    {...blog_settings_thumbs}
                                    asNavFor={nav1}
                                    ref={(slider) => setSlider2(slider)}
                                >
                                    {blogs.map((slide, i) => (
                                        <div className="slick-slide" key={i}>
                                            <img
                                                className="slick-slide-image"
                                                src={slide.imgUrl}
                                                alt="thumbnail"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="testimonials ">
                <Container>
                    <Row className="text-center justify-content-md-center">
                        <div className="heading">
                            <h2 className="sub-heading">
                                {t('home.testimonials')}
                            </h2>
                        </div>

                        <Col md={10} className="testimonials-slider">
                            <Slider {...testimonials_settings}>
                                {testimonials.map((testimonial, i) => {
                                    return (
                                        <Card key={i}>
                                            <figure className="text-center">
                                                <img
                                                    src={testimonial.imageUrl}
                                                    className="img-fluid rounded-circle"
                                                    alt="How Unisolve Works"
                                                />
                                            </figure>
                                            <CardBody>
                                                <blockquote className="blockquote text-center">
                                                    <p className="mb-0">
                                                        {testimonial.desc}
                                                    </p>
                                                    <footer className="blockquote-footer pt-5">
                                                        {' '}
                                                        <h6>
                                                            {testimonial.name}
                                                        </h6>
                                                        <cite title="Source Title">
                                                            {testimonial.title}
                                                        </cite>
                                                    </footer>
                                                </blockquote>
                                            </CardBody>
                                        </Card>
                                    );
                                })}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="uni-partners counter" id="partners">
                <Container className="text-center">
                    <Row className="counter-card">
                        <Col md={3} className="my-auto">
                            <h4>{t('home.key_partners')}</h4>
                        </Col>
                        <Col md={9} className="testimonials-slider">
                            <Slider
                                dots={false}
                                slidesToShow={5}
                                slidesToScroll={1}
                                autoplay={true}
                                autoplaySpeed={3000}
                                arrows={false}
                                className="major"
                            >
                                {partners.map((partners, i) => {
                                    return (
                                        <figure
                                            className="text-center my-auto w-100"
                                            key={i}
                                        >
                                            <img
                                                src={partners.imageUrl}
                                                className="img-fluid mx-1"
                                                alt="How Unisolve Works"
                                            />
                                        </figure>
                                    );
                                })}
                            </Slider>
                            <Row className="mini">
                                {partners.map((partners, i) => {
                                    return (
                                        <Col sm={12} md={6} lg={4} key={i}>
                                            <figure className="text-center my-auto">
                                                <img
                                                    src={partners.imageUrl}
                                                    className="img-fluid mx-1"
                                                    alt="How Unisolve Works"
                                                />
                                            </figure>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="locate-unisolve">
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <h2>{t('home.join_us')}</h2>
                            <div className="heading">
                                <h2 className="sub-heading1 mb-3">
                                    {t('home.unisolve_partner')}
                                </h2>
                                <h5 className="text-center">
                                    {t('home.unisolve_partner_paragraph')}
                                </h5>
                            </div>
                        </Col>
                    </Row>
                    <Row className="text-center justify-content-md-center my-5">
                        <Col md={12} lg={6}>
                            <Row>
                                <Col md={9} className="my-auto">
                                    <Input
                                        {...inputField}
                                        id="organization_code"
                                        onChange={(e) => handleOnChange(e)}
                                        value={diesCode}
                                        name="organization_code"
                                        placeholder={t('home_tl.search_school')}
                                        className="w-100 mb-3 mb-md-0"
                                        style={{
                                            borderRadius: '60px',
                                            padding: '9px 11px'
                                        }}
                                    />
                                </Col>
                                <Col
                                    md={3}
                                    style={{ zIndex: '999' }}
                                    className="partner-btn"
                                >
                                    <Button
                                        label={t('home_tl.search_btn')}
                                        btnClass="primary mx-3 w-100"
                                        size="small"
                                        onClick={(e) => handleSearch(e)}
                                    />
                                </Col>
                            </Row>

                            {orgData && show ? (
                                <Card className="mt-3 text-left p-4">
                                    <CardBody>
                                        <Alert color="primary ">
                                            School: {orgData.organization_name}{' '}
                                            <br />
                                            City: {orgData.city}
                                            <br />
                                            {/* {orgData.mentor != null && <span>Teacher already exist</span>} <br /> */}
                                            {orgData.mentor === null ? (
                                                <span>
                                                    Teacher is not yet
                                                    registered
                                                </span>
                                            ) : (
                                                <spa>
                                                    Teacher is already
                                                    registered
                                                </spa>
                                            )}
                                        </Alert>
                                    </CardBody>
                                </Card>
                            ) : show ? (
                                <Card className="mt-3 text-left p-4">
                                    <CardBody>
                                        <Alert color="warning">
                                            <Row>
                                                <Col className="text-center">
                                                    <span>
                                                        Entered DISE Code &
                                                        School details are not
                                                        registered with us.
                                                    </span>
                                                    <br />
                                                    <u onClick={handleRegister}>
                                                        Click here
                                                    </u>{' '}
                                                    to register your school
                                                </Col>
                                                {/* <Col className='text-right my-auto'>
                                            <Button
                                                
                                                label="Click here"
                                                btnClass="primary mx-3"
                                                size="small"
                                                onClick={handleRegister} />
                                           
                                        </Col> */}
                                            </Row>
                                        </Alert>
                                    </CardBody>
                                </Card>
                            ) : null}
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="faq " id="faq">
                <Container>
                    <Row className="text-center justify-content-md-center">
                        <div className="heading">
                            <h2 className="sub-heading">
                                {t('home.unisolve_faq')}
                            </h2>
                        </div>

                        <Col md={12} lg={9} className="testimonials-slider">
                            <Accordion open={open} toggle={toggle}>
                                {accordion.map((item, i) => {
                                    return (
                                        <AccordionItem
                                            className="mb-5 b-0"
                                            key={i}
                                        >
                                            <AccordionHeader targetId={item.id}>
                                                {item.title}
                                            </AccordionHeader>
                                            <AccordionBody
                                                accordionId={item.id}
                                            >
                                                {/* <p>{item.desc}</p> */}
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.desc
                                                    }}
                                                ></div>
                                            </AccordionBody>
                                        </AccordionItem>
                                    );
                                })}
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>

            <footer className="footer">
                <Container>
                    <Row>
                        <Col
                            md={12}
                            className="footer-section-one my-auto logo"
                        >
                            <Link className="w-auto" exact="true" to="/">
                                <figure className="text-center">
                                    <img
                                        src={LogoTn}
                                        alt="logo"
                                        className="img-fluid w-25 logoImg"
                                    />
                                </figure>
                            </Link>
                        </Col>
                        <Col md={12} className="text-center nav-section my-3">
                            {/* <h3>{t('home.footer_imp_links')}</h3> */}
                            <Nav className=" justify-content-center d-inline-flex">
                                <NavItem className="my-auto">
                                    <AnchorLink
                                        className="menu-item text-black  "
                                        href="#about"
                                    >
                                        {t('home_nav_links.about')}
                                    </AnchorLink>
                                </NavItem>
                                <NavItem className="my-auto mx-5">
                                    <AnchorLink
                                        className="menu-item  text-black"
                                        href="#roadmap"
                                    >
                                        {t('home_nav_links.road_map')}
                                    </AnchorLink>
                                </NavItem>
                                <NavItem className="my-auto">
                                    <AnchorLink
                                        className="menu-item text-black "
                                        href="#impact"
                                    >
                                        {t('home_nav_links.impact')}
                                    </AnchorLink>
                                </NavItem>
                                <NavItem className="my-auto mx-5">
                                    <AnchorLink
                                        className="menu-item  text-black"
                                        href="#partners"
                                    >
                                        {t('home_nav_links.partners')}
                                    </AnchorLink>
                                </NavItem>
                                <NavItem className="my-auto">
                                    <AnchorLink
                                        className="menu-item text-black "
                                        href="#faq"
                                    >
                                        {t('home_nav_links.faq')}
                                    </AnchorLink>
                                </NavItem>
                                <Link
                                    className="mx-4"
                                    exact="true"
                                    to="/termsandconditions"
                                >
                                    {t('home.footer_terms')}
                                </Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
                <Row className="w-100 mt-5 footer-sub">
                    <Col md={12} className="text-center">
                        <p className="my-0 py-3 text-white">
                            © UNISOLVE {new Date().getFullYear()}.{' '}
                            {t('home_nav_links.rights')}{' '}
                        </p>
                    </Col>
                </Row>
            </footer>

            {modalShow && (
                <RegisterPopup
                    show={modalShow}
                    setShow={setModalShow}
                    dics={setDiesCode}
                    setShowPopUp={setShowPopUp}
                    onHide={() => setModalShow(false)}
                />
            )}
            {showPopUp && (
                <SchoolRegisterPopup
                    show={showPopUp}
                    setShow={setShowPopUp}
                    diesCode1={diesCode}
                    onHide={() => setShowPopUp(false)}
                />
            )}
        </div>
    );
};

export default Home;
