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
                    <p className="title">{title}</p>
                    <p className='count mt-3'>{count}</p>
                </div>
                <div style={{ width: '8rem',position:"relative" }}>
                    <img src={counter} alt="card" style={{position:"absolute",bottom:"-32px",left:"7px"}} />
                    <img src={image} alt="card" style={{position:"absolute",bottom:"-32px",left:"26px",width:"80%"}}/>
                </div>
            </div>
        </Col>
    );
};

export default DashboardOverviewCard;
