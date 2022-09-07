import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

const TeamMemberCard = ({item}) => {
    return (
        <Col className="col-3 mb-5 mb-sm-5 mb-md-5 mb-lg-0">
            <Link exact="true" to={`/teams/member?id=${item.student_id}`}>
                <div
                    className="card text-center "
                    style={{ marginTop: '50px' }}
                >
                    <span className="roundedCircle sample-profile text-uppercase mb-5">
                        {item.full_name.split('')[0]}
                    </span>
                    <h2
                        className="text-capitalize"
                        style={{ marginTop: '50px' }}
                    >
                        {item.full_name}
                    </h2>
                    <p className="mt-1">
                        Grade : {item.Grade ? item.Grade : '-'}
                    </p>
                    <p className="mt-1">
                        DOB : {moment(item.date_of_birth).format('L')}
                    </p>
                </div>
            </Link>
        </Col>
    );
};

export default TeamMemberCard;
