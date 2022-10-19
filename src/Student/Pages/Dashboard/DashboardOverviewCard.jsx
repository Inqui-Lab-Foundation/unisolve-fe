import { Col } from 'reactstrap';
import counter from '../../../assets/media/img/counter.png';

const DashboardOverviewCard = ({ title, count, image }) => {
    return (
        <Col className="overview-card bg-white rounded p-3">
            <div className="d-flex">
                <div
                    className="d-flex  flex-column justify-content-center align-items-center"
                    style={{ flex: 2 }}
                >
                    <p className="small">{title}</p>
                    <p>{count}</p>
                </div>
                <div style={{ width: '8rem' }}>
                    <img src={counter} alt="card" />
                    <img src={image} alt="card" />
                </div>
            </div>
        </Col>
    );
};

export default DashboardOverviewCard;
