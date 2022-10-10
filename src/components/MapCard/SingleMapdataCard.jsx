import React from 'react';
import { Card, CardBody } from 'reactstrap';

const SingleMapdataCard = ({ title, value1, value2 }) => {
    console.log({ title, value1, value2 });
    return (
        <Card
            className="card text-dark bg-light mb-3"
            style={{ maxWidth: '25rem' }}
        >
            <CardBody>
                <div className="card-header">
                    <h6>{title}</h6>
                </div>
                <div className="card-body">
                    {!value2 ? (
                        <>
                            <p className="card-title">{value1 ? value1 : '-'}</p>
                        </>
                    ) : 
                        <p className="card-title">{`${value1} of ${value2}`}</p>
                    }
                </div>
            </CardBody>
        </Card>
    );
};

export default SingleMapdataCard;
