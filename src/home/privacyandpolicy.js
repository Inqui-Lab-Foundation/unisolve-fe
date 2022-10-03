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
    AccordionBody
} from 'reactstrap';
// import { Modal } from "react-bootstrap";
// import NumberCounter from 'number-counter';
import { Button } from '../stories/Button';
import { Link } from 'react-router-dom';

import { Input } from 'antd';

import LanguageSelectorComp from '../components/LanguageSelectorComp';

import { useTranslation } from 'react-i18next';

// SLICK SLIDER
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';

import Slider from 'react-slick';

import HowOne from '../assets/media/home/how-1.svg';
import HowTwo from '../assets/media/home/how-2.svg';
import HowThree from '../assets/media/home/how-3.svg';
import HowBorder from '../assets/media/home/how-border.svg';
import LearnMentor from '../assets/media/home/learn.svg';
// import Mentor from '../assets/media/home/mentor.svg';

import upshift from '../assets/media/UPSHIFT-diagram.jpg';
// import Program1 from '../assets/media/home/program-1.jpg';
// import Program2 from '../assets/media/home/program-2.jpg';
// import Program3 from '../assets/media/home/program-3.jpg';
// import Program4 from '../assets/media/home/program-4.jpg';

// import Avatar3 from '../assets/media/img/avatar3.png';
import testi1 from '../assets/media/home/testi/Herve_Morin_Global_head.jpg';
import testi2 from '../assets/media/home/testi/Swathi.JPG';

// import Facebook from '../assets/media/home/facebook.png';
// import Twitter from '../assets/media/home/twitter.png';
// import LinkedIn from '../assets/media/home/linkedIn.png';
// import Subscribe from '../assets/media/home/subscribe-group.png';

import IdeaBulb from '../assets/media/home/idea-bulb.png';

// import Unicef from '../assets/media/home/unicef.png';
// import Telangana from '../assets/media/home/telangana.png';
// import Inquilab from '../assets/media/home/inquilab.png';
// import Yuwaah from '../assets/media/home/yuwaah.png';
// import YoungWarrior from '../assets/media/home/young-warrior.png';
// import Congnizant from '../assets/media/home/congnizant.png';

// ta brans
import SSA_Tamilnadu from '../assets/media/ta-brands/1_SSA_Tamilnadu.jpg';
import SIDP_tamilnadu from '../assets/media/ta-brands/2_SIDP_tamilnadu.jpg';
import EDII_tamilnadu from '../assets/media/ta-brands/3_EDII_tamilnadu.jpg';
import UpShift_Tamilnadu from '../assets/media/ta-brands/4_UpShift_Tamilnadu.jpg';
import Yuwaah_Tamilnadu from '../assets/media/ta-brands/5_Yuwaah_Tamilnadu.jpg';
import IIF_Tamilnadu  from '../assets/media/ta-brands/7_IIF_Tamilnadu.jpg';
import SS_Tamilnadu from '../assets/media/ta-brands/8_SS_Tamilnadu.jpg';
import Unicef_OOI_Tamilnadu from '../assets/media/ta-brands/9_Unicef OOI_Tamilnadu.jpg';

// import Learn from "../media/home/learn-anything.svg";

import Blog1 from '../assets/media/home/blog/walker_elders.jpg';
import Blog2 from '../assets/media/home/blog/agriculture_bag.jpeg';
import Blog3 from '../assets/media/home/blog/sweeping_machine.png';


import WorldMap from '../assets/media/home/world-map.jpg';
import RegisterPopup from './registration/RegisterPopup';
// import LoginPopup from './registration/LoginPopup';
import FancyVideo from 'react-videojs-fancybox';


const Home = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState('1');

    const [modalShow, setModalShow] = useState(false);

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
    // const [select, handleSelect] = useState(false);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    });

    const toggle = (id) => {
        open === id ? setOpen() : setOpen(id);
    };

    const [onSearch] = useState('');

    const { Search } = Input;

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

    // const programs = [
    //     {
    //         id: 1,
    //         title: t('home.our_programs_sub_one'),
    //         imageUrl: Program1,
    //         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. '
    //     },
    //     {
    //         id: 2,
    //         title: t('home.our_programs_sub_two'),
    //         imageUrl: Program2,
    //         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. '
    //     },
    //     {
    //         id: 3,
    //         title: t('home.our_programs_sub_three'),
    //         imageUrl: Program3,
    //         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. '
    //     },
    //     {
    //         id: 4,
    //         title: t('home.our_programs_sub_four'),
    //         imageUrl: Program4,
    //         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. '
    //     }
    // ];

    const testimonials = [
        {
            id: 1,
            imageUrl: testi2,
            desc: 'Through this program , we could improve our Design thinking skills. We learnt the way we should think and work while identifying a problem, Finding the root cause of it and Developing Innovative solutions for it and could apply it in our daily life',
            name: 'Swathi',
            title: 'Student at GHS, Telangana , India'
        },
        {
            id: 2,
            imageUrl: testi1,
            desc: 'This Program provides participants with an opportunity to put concrete skills into practice-young people invest themselves in developing solutions for the problems they identified in their communities',
            name: 'Herve Morin, Global lead',
            title: 'Unicef Office of innovation'
        },
        
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
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.slider-nav',

        responsive: [
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
            title: `What is the School Innovation Program?`,
            desc: `
            <p>To promote a culture of innovation and creative problem solving among  the state government in partnership with key stakeholders launched the School Innovation Development Project to inculcate the spirit of innovation amongst the school children.</p>
            <p>Objective of the program is to inspire students to solve problems by using a simple design thinking process as a method to innovate, collaborate and obtain 21st century skills and leadership skills.</p>
            `
        },
        {
            id: 2,
            title: 'Who can participate in this program?',
            desc: "<p>Guidelines about the schools eligible for participation will be rolled out by the Ministry of Education/Department of school education. All the eligible schools can register on the portal and participate using the unique identification code (example: UDISE etc.).</p><p>Students from all Government High Schools and Higher Secondary Schools are eligible to participate in the program. This is a team based program and schools/mentors are requested to support in registration of the participants on to the portal and in this learning journey. </p>"
        },
        {
            id: 3,
            title: 'How many teams and teachers/mentors can participate in the program?',
            desc: "<p>The platform does not have any limitation in terms of the number of teams or students. But it is suggested that teacher/mentor:teams ratio be maintained as 1:5.</p>"
        },
        {
            id: 4,
            title: 'How to register your institution for this program?',
            desc: "Open the website and click register. Register your school/Institution thereby entering the DISE code/Unique ID and then filling in all required details. Once the registration process is completed, you can log in to your account either by entering a password or with OTP."
        },
        {
            id: 5,
            title: 'What are the next steps involved after registering my school on the website?',
            desc: "<p>The following are the next steps involved after you register your school/institution:</p><br/><ol><li>Identify students who can participate in the program.</li><li>Form teams with the interested or nominated participant group. </li><li>Students have to log in to the website and start doing the online course with the team.</li><li>Teams will complete the learning course and submit one idea as their challenge project. </li></ol>"
        }
    ];

    const blogs = [
        {
            id: 1,
            imgUrl: Blog1,
            title: 'Multipurpose Agriculture Bag',
            desc: 'MBA can be used for plucking cotton,Chilli,vegetables, fruits and spreading fertilizers in the agriculture field.'
        },
        {
            id: 2,
            imgUrl: Blog2,
            title: 'Makeshift sweeping machine',
            desc: 'Using available waste materials on the campus like waste palm wheels, coconut leaves, a stick, and wheels of small cycles, these students made a makeshift sweeping machine to help the aged sweeper.'
        },
        {
            id: 3,
            imgUrl: Blog3,
            title: 'Adjustable walker for the elderly',
            desc: 'Adjustable walker has spring-loaded self-locking front legs. When the user pushes the front legs of the walker on the upper stairs and the rear legs rest on the lower stairs, the walker is stable enough for climbing. It also has a foldable seat that can be pulled out.'
        },
        
    ];
    console.log(modalShow);
    return (
        <div className="home-main">
            {/* Mobile menu */}
            <Menu right className="landing-menu">
                <Link className="menu-item" to="/login">
                    Login
                </Link>

                <Link className="menu-item" to="/register">
                    Sign up now
                </Link>
            </Menu>
            <section className="header mb-100">
                <div className="home-banner">
                    <Container>
                        <Row className="justify-content-between  pt-5">
                            <Col className="my-auto">
                                <h2 className="logo">
                                    <Link className="" exact="true" to="/">
                                        Unisolve
                                    </Link>
                                </h2>
                            </Col>
                            <Col className="text-right multi-actions">
                                

                                <LanguageSelectorComp />
                            </Col>
                        </Row>
                        <Row className="h-100">
                            <Col xs={12} md={10} lg={4} className="center">
                                <h1>
                                    
                                    {/* {t('home.banner_new_heading')}{' '} */}
                                    Creating change makers of tomorrow with <span>21st Century</span> Skills
                                    
                                    {/* <span>{t('home.banner_new_creativity')}</span> */}
                                </h1>

                             
                                <p>{t('home.banner_new_description')}</p>
                                <div className="d-flex mini123">
                                    <Button
                                        // label={t('home.get_Started')}
                                        label={t('home.get_new_Started')}
                                        btnClass="primary mx-3"
                                        size="small"
                                        onClick={() => setModalShow(true)}
                                    />
                                    {/* <Button
                                        label={t('home.watch_video')}
                                        btnClass="primary mx-3"
                                        size="small"
                                    /> */}
                                    <Link
                                        className="landing-page-actions"
                                        exact="true"
                                        to="/login"
                                    >
                                        <Button
                                            // label="Login"
                                            label={t('login.logIn')}
                                            btnClass="primary "
                                            size="small"
                                            // onClick={()=>handleSelect(true)}
                                        />
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            
            <section className='about-us mb-100'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2>
                            School Innovation Development Project (SIDP)
                            </h2>
                            <p>
                            To create a positive and dynamic innovation ecosystem within educational institutions, Government of Tamil Nadu, EDII-TN launches SIDP with support of School Education Department.
                            </p>
                            <p>
                            The objective of SIDP is to inspire students to solve problems by using a simple design thinking process as a method to innovate, collaborate and obtain leadership skills. The program also focuses on building the capacity of the teaching community to play a vital role in building an entrepreneurial, innovative ecosystem in schools and be mentors to the evolving minds.
                            </p>
                        </Col>
                        <Col md={6}>
                            <div className='position-relative'>
                                <FancyVideo
                                    source="https://media.istockphoto.com/videos/young-asian-family-having-fun-outdoors-in-park-video-id1346835560"
                                    poster="https://raw.githubusercontent.com/waskito/react-modal-videojs/master/example/public/preview.png"
                                    id={"sintel"}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <section className='about-us mb-100'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2>
                            What is UPSHIFT?
                            </h2>
                            <p>
                            UPSHIFT is a UNICEF global innovation for transferable skills building of adolescents and young people that is now in implementation in 45 countries. UPSHIFT is designed to build transferable skills and create opportunity, with a focus on the young people. UPSHIFT supports the development of skills for life and livelihood and supports youth to positively engage with their local communities as change-makers. [Learn more about <a href='https://www.unicef.org/innovation/upshift' target="_blacnk"/>]
                            </p>
                            <p>
                            With the goal of engaging and skilling more adolescents and young people, UNICEF, along with State Government, Yuwaah and Inqui-Lab Foundation embarked on the development of UNISOLVE.
                            </p>
                        </Col>
                        <Col md={6}>
                            <figure>
                                <img className='img-fluid' src={upshift} alt="upshift">

                                </img>
                            </figure>
                        </Col>
                    </Row>
                </Container>
            </section> */}
            <section className="how-works mb-100">
                <Container className="text-center">
                    <h2 className="sub-heading">
                        {t('home.how_unisolve_works')}
                        <span className="yellow"> {t('home.works')}</span>
                    </h2>
                    <Row>
                        <Col md={12} lg={4} className="one">
                            <figure>
                                <img
                                    src={HowOne}
                                    className="img-fluid"
                                    alt="How Unisolve Works"
                                />
                            </figure>
                            <h3>{t('home.how_unisolve_works_idea')}</h3>
                            <p>
                                {t('home.how_unisolve_works_idea_description')}
                            </p>
                        </Col>
                        <Col md={12} lg={4} className="two">
                            <figure>
                                <img
                                    src={HowTwo}
                                    className="img-fluid"
                                    alt="How Unisolve Works"
                                />
                            </figure>
                            <h3>{t('home.how_unisolve_works_test')}</h3>
                            <p>
                                {t('home.how_unisolve_works__test_description')}
                            </p>
                        </Col>
                        <Col md={12} lg={4} className="three">
                            <figure>
                                <img
                                    src={HowThree}
                                    className="img-fluid"
                                    alt="How Unisolve Works"
                                />
                            </figure>
                            <h3>{t('home.how_unisolve_works_present')}</h3>
                            <p>
                                {t(
                                    'home.how_unisolve_works__present_description'
                                )}
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="dots">
                            <figure>
                                <img
                                    src={HowBorder}
                                    className="img-fluid"
                                    alt="How Unisolve Works"
                                />
                            </figure>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="mentor-student">
                <Container className="both">
                    <Row>
                        <Col
                            md={12}
                            lg={6}
                            className="my-auto teacher-heading order-2 order-xl-1"
                        >
                            
                            <h2 className='mb-5'>
                            What is 
                                <span className="blue">
                                    {' '}
                                    UPSHIFT
                                </span>?
                               
                            </h2>
                            <p>
                            UPSHIFT is a UNICEF global innovation for transferable skills building of adolescents and young people that is now in implementation in 45 countries. UPSHIFT is designed to build transferable skills and create opportunity, with a focus on the young people. UPSHIFT supports the development of skills for life and livelihood and supports youth to positively engage with their local communities as change-makers. [Learn more about ]
                            </p>
                            <p>
                            With the goal of engaging and skilling more adolescents and young people, UNICEF, along with State Government, Yuwaah and Inqui-Lab Foundation embarked on the development of UNISOLVE.
                            </p>
                            <Link
                                className="landing-page-actions"
                                exact="true"
                                to="/teacher"
                            >
                                <Button
                                    label={t('home.teacher_mentor_new_button')}
                                    btnClass="primary mx-3"
                                    size="small"
                                />
                            </Link>
                            
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
                                    className="img-fluid"
                                />
                            </figure>
                        </Col>
                    </Row>

                    <Row className="student">
                        <Col md={12} lg={6}>
                            <figure>
                                <img
                                    src={LearnMentor}
                                    alt="learn"
                                    className="img-fluid"
                                />
                            </figure>
                        </Col>
                        <Col
                            md={12}
                            lg={6}
                            className="my-auto mx-auto student-heading px-5 "
                        >
                            {/* <span className="sub">
                                {t('home.learners_students_sub')}
                            </span> */}
                            <h2 className='mb-5'>
                                {/* {t('home.learners_students_heading')}{' '}
                                <span className="green">
                                    {' '}
                                    {t('home.learn')}
                                </span>{' '}
                                <br />
                                {t('home.anything')} */}
                                UPSHIFT powered by 
                                <span className="green">
                                UNISOLVE
                                </span>{' '}
                            </h2>
                            <p>
                            UNISOLVE is a digital platform designed to facilitate UPSHIFT delivery through a school-based, teacher-facilitated blended learning model. 
                            </p>
                            <p>
                            UNISOLVE combines the advantages of distance learning opportunities and face-to-face activities to promote creativity and innovation among adolescents and young people. Designed with and for the education system keeping scalability in mind this specially designed platform, UNISOLVE, is a tool to skill students on social innovation and 21st century skills.
                            </p>
                            <Link
                                className="landing-page-actions"
                                exact="true"
                                to="/login"
                            >
                                <Button
                                    label={t('home.learners_students_new_button')}
                                    btnClass="primary mx-3"
                                    size="small"
                                />
                            </Link>

                            {/* <Button
                                label={t('home.learners_students_new_button')}
                                btnClass="primary "
                                size="small"
                            /> */}
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="world-map">
                <figure>
                    <img className="img-fluid" alt="demo" src={WorldMap} />
                </figure>
            </section>

            {/* <section className="programs">
                <Container>
                    <Row>
                        <h2 className="text-center sub-heading yellow1">
                            {t('home.our_programs_heading')}
                        </h2>
                        <div className="cards row">
                            {programs.map((program) => {
                                return (
                                    <Col
                                        md={6}
                                        className="mb-5"
                                        key={program.id}
                                    >
                                        <Card>
                                            <CardImg
                                                alt="Think & Make"
                                                src={program.imageUrl}
                                                top
                                                width="100%"
                                            />
                                            <CardBody className="p-5">
                                                <CardTitle>
                                                    {program.title}
                                                </CardTitle>
                                                <CardText>
                                                    {program.desc}
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </div>
                    </Row>
                </Container>
            </section> */}

            <section className="blog">
                <Container>
                    <Row className="text-center justify-content-md-center">
                        <h2 className="sub-heading">
                            {/* Here are a few of <span>Student Ideas</span> */}
                            {t('home.student_ideas')}{' '}
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

                        <Col md={12} className="blog-slider">
                            <Slider
                                {...blog_settings}
                                asNavFor={nav2}
                                ref={(slider) => setSlider1(slider)}
                            >
                                {blogs.map((blog) => {
                                    return (
                                        <div key={blog.id}>
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
                                                        <p className="pb-5">
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
                                    {blogs.map((slide) => (
                                        <div
                                            className="slick-slide"
                                            key={slide.id}
                                        >
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

            <section className="testimonials">
                <Container>
                    <Row className="text-center justify-content-md-center">
                        <h2 className="sub-heading">
                            {t('home.testimonials')}
                        </h2>

                        <Col md={10} className="testimonials-slider">
                            <Slider {...testimonials_settings}>
                                {testimonials.map((testimonial) => {
                                    return (
                                        <Card key={testimonial.id}>
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

            <section className="uni-partners counter mb-100">
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
                                {partners.map((partners) => {
                                    return (
                                        <figure
                                            className="text-center my-auto w-100"
                                            key={partners.id}
                                            // width="75px"
                                        >
                                            <img
                                                src={partners.imageUrl}
                                                className="img-fluid mx-1"
                                                alt="How Unisolve Works"
                                                // width="100px"
                                                
                                                
                                            />
                                        </figure>
                                    );
                                })}
                            </Slider>
                            <Row className="mini">
                                {partners.map((partners) => {
                                    return (
                                        <Col
                                            sm={12}
                                            md={6}
                                            lg={4}
                                            key={partners.id}
                                        >
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
                    <Row className="text-center justify-content-md-center">
                        <Col md={12} lg={6}>
                            <h2 className="sub-heading">
                                {/* Does Unisolve Partner
                <br />
                with My School? */}
                                {t('home.unisolve_partner')}
                            </h2>
                            <p>
                                {/* Over 10,000+ Schools and Universities are partnered with
                Unisolve */}
                                {t('home.unisolve_partner_paragraph')}
                            </p>
                            <Search
                                placeholder="Search your school here..."
                                onSearch={onSearch}
                                enterButton
                                className="antd-modified-search"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* <section className="subscribe">
                <Container>
                    <Row className=" text-center justify-content-md-center">
                        <Col md={12} lg={8} className="testimonials-slider">
                            <figure>
                                <img
                                    src={Subscribe}
                                    className="img-fluid"
                                    alt="Unisolve Sunscribe"
                                />
                            </figure>
                            <h2 className="sub-heading">
                                
                                {t('home.unisolve_subscribe_heading')}
                            </h2>
                            <Button
                                label={t('home.unisolve_subscribe_btn')}
                                btnClass="primary subscribe "
                                size="small"
                            />
                            <Card className="mt-5 ">
                                <div className="bg-card"></div>
                                <CardBody>
                                    <Row>
                                        <Col md={12} lg={6}>
                                            <h3 className="mb-0">
                                                {t(
                                                    'home.unisolve_subscribe_newsletter_heading'
                                                )}
                                            </h3>
                                            <p>
                                                {t(
                                                    'home.unisolve_subscribe_newsletter_sub'
                                                )}
                                            </p>
                                        </Col>
                                        <Col
                                            md={10}
                                            lg={6}
                                            className="my-auto text-center"
                                        >
                                            <Search
                                                placeholder="Enter your email address.."
                                                onSearch={onSearch}
                                                enterButton="Subscribe"
                                                className="antd-modified-search"
                                            />
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section> */}

            <section className="faq">
                <Container>
                    <Row className="text-center justify-content-md-center">
                        <h2 className="sub-heading">
                            {t('home.unisolve_faq')}
                        </h2>
                        <Col md={12} lg={7} className="testimonials-slider">
                            <Accordion open={open} toggle={toggle}>
                                {accordion.map((item) => {
                                    return (
                                        <AccordionItem
                                            className="mb-5 b-0"
                                            key={item.id}
                                        >
                                            <AccordionHeader targetId={item.id}>
                                                {item.title}
                                            </AccordionHeader>
                                            <AccordionBody
                                                accordionId={item.id}
                                               
                                            >
                                                {/* <div
                                                    dangerouslySetInnerHTML={item.desc}
                                                /> */}
                                                <p>{item.desc}</p>
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
                        <Col md={4} className="footer-section-one">
                            <h2>
                                Unisolve <span>Studio</span>
                            </h2>
                           
                           
                           
                            <div className="d-flex">
                                {/* <figure>
                                    <Link className="" exact="true" to="/">
                                        <img
                                            className="img-fluid"
                                            src={Facebook}
                                            alt="Unisolve Facebook"
                                        />
                                    </Link>
                                </figure> */}
                                {/* <figure className="mx-3">
                                    <Link className="" exact="true" to="/">
                                        <img
                                            className="img-fluid"
                                            src={Twitter}
                                            alt="Unisolve Twitter"
                                        />
                                    </Link>
                                </figure> */}
                                {/* <figure>
                                    <Link className="" exact="true" to="/">
                                        <img
                                            className="img-fluid"
                                            src={LinkedIn}
                                            alt="Unisolve LinkedIn"
                                        />
                                    </Link>
                                </figure> */}
                            </div>
                        </Col>
                        <Col md={8}>
                            <h3>{t('home.footer_imp_links')}</h3>
                            <Row>
                                <Col xs={6} lg={4}>
                                    <Link
                                        className="w-100 d-block mb-3"
                                        exact="true"
                                        to="/"
                                    >
                                        {t('home.footer_home')}
                                    </Link>
                                    <Link
                                        className="w-100 d-block mb-3"
                                        exact="true"
                                        to="/"
                                    >
                                        {t('home.footer_about')}
                                    </Link>
                                    
                                   
                                </Col>
                                
                                <Col sm={12} lg={4} className="mt-4 mt-md-0">
                                    <Link
                                        className="w-100 d-block mb-3"
                                        exact="true"
                                        to="/"
                                    >
                                        {t('home.footer_privacy')}
                                    </Link>
                                    <Link
                                        className="w-100 d-block mb-3"
                                        exact="true"
                                        to="/"
                                    >
                                        {t('home.footer_terms')}
                                    </Link>
                                    
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </footer>
            {modalShow && (
                <RegisterPopup
                    show={modalShow}
                    setShow={setModalShow}
                    onHide={() => setModalShow(false)}
                />
            )}
            {/* {select && (
                <LoginPopup
                    show={select}
                    onHide={() => handleSelect(false)}
                />
            )} */}
        </div>
    );
};

export default Home;
