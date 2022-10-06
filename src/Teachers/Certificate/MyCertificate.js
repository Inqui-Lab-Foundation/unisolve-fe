import { Fragment, useRef } from 'react';
import { Card, CardBody, CardTitle, Container } from 'reactstrap';
import { Button } from '../../stories/Button';
import Layout from '../Layout';
import jsPDF from 'jspdf';
import { getCurrentUser } from '../../helpers/Utils';
import TeacherCertificate from "../../assets/media/img/teachers_certificate.png";

// import { URL, KEY } from '../../constants/defaultValues';
// import {
//     getNormalHeaders,
//     openNotificationWithIcon
// } from '../../helpers/Utils';
// import axios from 'axios';

const MyCertificate = () => {
    const pdfRef = useRef(null);
    const currentUser = getCurrentUser("current_user");


    const handleCertificateDownload = () => {
        const content = pdfRef.current;
        const doc = new jsPDF('l', 'px', [210, 297]);
        doc.html(content, {
            callback: function (doc) {
                doc.save('certificate.pdf');
            }
        });
    };

    return (
        <Layout>
            <Container className="presuervey mb-50 mt-5 ">
                <Fragment>
                    <Card className="course-sec-basic p-5">
                        <CardBody>
                            <CardTitle
                                className=" text-left pt-4 pb-4"
                                tag="h2"
                            >
                                Certificate
                            </CardTitle>
                            <p>Please Download Certificate...</p>

                            <div ref={pdfRef} style={{ position: 'relative' }}>
                                <span
                                    className="text-capitalize"
                                    style={{
                                        position: 'absolute',
                                        top: '7.5rem',
                                        left: '2.5rem',
                                        fontSize: 'inherit'
                                    }}
                                >
                                    {currentUser?.data[0]?.full_name}
                                </span>
                                <img
                                    src={TeacherCertificate}
                                    alt="certificate"
                                    style={{ width: '297px', height: '209px' }}
                                />
                            </div>
                            <div className="text-right">
                                <Button
                                    button="submit"
                                    label="Download Certificate"
                                    btnClass="primary mt-4"
                                    size="small"
                                    style={{ marginRight: '2rem' }}
                                    onClick={handleCertificateDownload}
                                />
                            </div>
                        </CardBody>
                    </Card>
                </Fragment>
            </Container>
        </Layout>
    );
};

export default MyCertificate;
