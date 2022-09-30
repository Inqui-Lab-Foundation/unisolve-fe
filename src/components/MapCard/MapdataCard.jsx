import React from 'react';

const MapdataCard = () => {
    return (
        <div className="card text-dark bg-light mb-3" style={{maxWidth: "25rem"}}>
            <div className="card-header">District Name</div>
            <div className="card-body">
                <p className="card-title">No of schools</p>
                <p className="card-text">
                    50
                </p>
            </div>
        </div>
    );
};

export default MapdataCard;
