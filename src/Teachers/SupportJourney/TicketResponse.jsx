/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Row, Col, Form, Label, Card, CardBody } from 'reactstrap';
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
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { createSupportTicketResponse,  getSupportResponsesTicketById, getSupportTicketById } from '../store/mentors/actions';
import { useHistory, useLocation } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import moment from 'moment';


const TicketResponse = (props) => {
   
    const {search} = useLocation();
    const id = new URLSearchParams(search).get('id');
    const {supportTicket} = useSelector(state=>state.mentors);


    // const {supportTicketRespnses} = useSelector(state=>state.mentors);

    const dispatch = useDispatch();
    const history = useHistory();
        

    useEffect(() => {
        console.log("called",id);
        dispatch(getSupportTicketById(id));
    }, [dispatch,id]);
    
    // console.log(supportTicket);

    // useEffect(() => {
    //     dispatch(getSupportResponsesTicketById());
    // }, []);

    // console.log("hello 43",supportTicketRespnses);

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
            ansDetails: '',
            selectStatus: ""
        },

        validationSchema: Yup.object({
            ansDetails: Yup.string()
                .required("Required"),
            selectStatus: Yup.string()
                .required("Required"),
        }),

        onSubmit: (values) => {
            const ansDetails = values.ansDetails;
            const body = JSON.stringify({
                support_ticket_id:id,
                reply_details: ansDetails,

               
            });
            console.log(body);
            
            dispatch(createSupportTicketResponse(body));

            setTimeout(() => {
                dispatch(getSupportTicketById(id));
            },500);
            
        },
        
    });

    const selectProgress = {
        label: 'Select Status',
        options: [
            { label: "OPEN", value: "OPEN" },
            { label: "INPROGRESS", value: "INPROGRESS" },
            { label: "RESOLVED", value: "RESOLVED" },
        ],
        className: 'defaultDropdown'
    };

    // console.log(formik.errors);

    return (
        <Layout>
            <div className="EditPersonalDetails new-member-page">
                <Row>
                    <Col className="col-xl-10 offset-xl-1 offset-md-0">
                        <BreadcrumbTwo {...headingDetails} />

                        <div>
                            <Form onSubmit={formik.handleSubmit} isSubmitting>
                                <Card className="aside p-4 py-5">
                                    
                                    <Card className="card mb-4 my-3 comment-card px-0 card-outline-warning">
                                        <CardBody>
                                            <p><b>{supportTicket.query_details}</b></p>
                                            <hr/>
                                            <Row>
                                                <Col md={6}><span><FaUserCircle/> {supportTicket.created_by}</span> </Col>
                                                <Col md={6} className="text-right"><span><FaRegClock/> {moment(supportTicket.created_at).format(
                                                    'Do MMM, YYYY HH:mm',
                                                )}</span></Col>
                                            </Row>
                                            {/* <div className="d-flex justify-content-between">
                                                 sdasdas   
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                 sdasdas   
                                            </div> */}
                                        </CardBody>
                                    </Card>
                                    {/* <h6>{supportTicket.query_details}</h6> */}
                                   

                                    
                                    {supportTicket?.support_ticket_replies?.length > 0 && supportTicket.support_ticket_replies.map((data, i) => {
                                        return(
                                            <><Card className="card mb-4 my-3 comment-card card-outline-success">
                                                <CardBody>
                                                    <p>{data.reply_details}</p>
                                                    <hr/>
                                                    <Row>
                                                        <Col md={6}><span><FaUserCircle/> {data.created_by}</span> </Col>
                                                        <Col md={6} className="text-right"><span><FaRegClock/> {moment(data.created_at).format(
                                                            'Do MMM, YYYY HH:mm',
                                                        )}</span></Col>
                                                        
                                                    </Row>
                                                </CardBody>
                                            </Card></>
                                        );
                                    })}
                                   


                                    {/* {supportTicket?.support_ticket_replies?.length > 0 && supportTicket.support_ticket_replies.map((data, i) => {
                                        return(
                                            <p>{data.reply_details}</p>
                                        );
                                    })} */}

                                    {/* {supportTicketRespnses && supportTicketRespnses.dataValues ? supportTicketRespnses.dataValues.map((details) => {
                                        return(
                                            <div>
                                                <p>{details.reply_details}</p>
                                            </div>
                                        );
                                    }): null} */}

                                    

                                    
                                    {/* <div className="create-ticket register-block"> */}
                                    <Row>
                                        
                                   
                                        <Col md={12}>
                                            <Label
                                                className="name-req mt-5"
                                                htmlFor="ticketDetails"
                                            >
                                                Ticket Details
                                            </Label>
                                            <TextArea className={'defaultInput'}
                                                placeholder="Enter reply comments"
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


                                        <Col
                                            className="form-group my-5  mb-md-0"
                                            md={12}
                                        >
                                            <Label className="mb-2">
                                            Select Status
                                            </Label>

                                            <Col
                                                className="form-group"
                                                md={12}
                                            >
                                                <DropDownWithSearch
                                                    {...selectProgress}
                                                    onBlur={
                                                        formik.handleBlur
                                                    }
                                                        
                                                    onChange={(option) =>{
                                                        formik.setFieldValue(
                                                            "selectStatus",
                                                            option[0].value
                                                        );
                                                    }
                                                    }
                                                    name="selectStatus"
                                                    id="selectStatus"
                                                />

                                                {formik.errors
                                                    .selectStatus ? (
                                                        <small className="error-cls">
                                                            {
                                                                formik.errors
                                                                    .selectStatus
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
                                        
                                    </Row>
                                    {/* </div> */}
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
