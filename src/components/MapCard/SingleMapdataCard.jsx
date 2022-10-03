import React from 'react';

const SingleMapdataCard = ({ title, value1, value2 }) => {
    return (
        <div
            className="card text-dark bg-light mb-3"
            style={{ maxWidth: '25rem', flex: '50%' }}
        >
            <div className="card-header">
                <h6>{title}</h6>
            </div>
            <div className="card-body">
                {!value2 ? (
                    <>
                        <p className="card-title">{value1 ? value1 : '-'}</p>
                    </>
                ) : !value1 ? (
                    <p className="card-title">{`${value1} of ${value2}`}</p>
                ) : (
                    '-'
                )}
            </div>
        </div>
    );
};

export default SingleMapdataCard;
