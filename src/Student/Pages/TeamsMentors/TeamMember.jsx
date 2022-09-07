import './style.scss';
import Layout from '../../Layout.jsx';
import { Container, Row, Col, Card, CardBody, Table } from 'reactstrap';
import { getStudentByIdData } from '../../../redux/studentRegistration/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const TeamMember = () => {
    const dispatch = useDispatch();
    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');
    const { teamMember } = useSelector((state) => state.studentRegistration);
    useEffect(() => {
        dispatch(getStudentByIdData(id));
    }, [dispatch,id]);
    return (
        <Layout>
            <Container className="ticket-page mb-50">
                <Row className="mt-5 pt-1">
                    <Row className="mb-3">
                        <Col className="col-auto mb-5 mb-sm-5 mb-md-5 mb-lg-0">
                            <h2>Member Details</h2>
                        </Col>
                    </Row>
                    <Row style={{ backgroundColor: '#fff' }} className="p-4">
                        <Card className="py-5">
                            <CardBody>
                                <Table bordered className="w-25">
                                    <tbody>
                                        <tr>
                                            <th scope="row" className="w-25">
                                                ID
                                            </th>
                                            <td>
                                                {teamMember &&
                                                    teamMember
                                                        .student_id}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">NAME</th>
                                            <td>
                                                {teamMember &&
                                                    teamMember
                                                        .full_name}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">MOBILE</th>
                                            <td>
                                                {teamMember &&
                                                    teamMember.mobile}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">STATUS</th>
                                            <td>
                                                {teamMember &&
                                                    teamMember.status}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">CITY</th>
                                            <td>
                                                {teamMember &&
                                                    teamMember.city}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">DISTRICT</th>
                                            <td>
                                                {teamMember &&
                                                    teamMember
                                                        .district}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">STATE</th>
                                            <td>
                                                {teamMember &&
                                                    teamMember.state}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">COUNTRY</th>
                                            <td>
                                                {teamMember &&
                                                    teamMember.country}
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Row>
                </Row>
            </Container>
        </Layout>
    );
};

export default TeamMember;
