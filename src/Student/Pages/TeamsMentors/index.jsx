import './style.scss';
import Layout from '../../Layout.jsx';
import { Container, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTeamData } from '../../../redux/teams/actions';
import { getCurrentUser } from '../../../helpers/Utils';
import TeamMemberCard from '../../../components/TeamMemberCard';

const TeamMentorsPage = () => {
    const dispatch = useDispatch();
    const { data } = getCurrentUser('current_user');
    const { myTeam } = useSelector((state) => state.studentTeam);
    useEffect(() => {
        dispatch(getTeamData(data[0].team_id));
    }, [dispatch]);
    return (
        <Layout>
            <Container className="ticket-page mb-50">
                <Row className="mt-5 pt-1">
                    <Row className="mb-3">
                        <Col className="col-auto mb-5 mb-sm-5 mb-md-5 mb-lg-0">
                            <h2>My Team</h2>
                        </Col>
                    </Row>
                    <Row style={{ backgroundColor: '#fff' }} className="p-4">
                        {myTeam.map((item, i) => (
                            <TeamMemberCard item={item} key={i} />
                        ))}
                    </Row>
                </Row>
            </Container>
        </Layout>
    );
};

export default TeamMentorsPage;
