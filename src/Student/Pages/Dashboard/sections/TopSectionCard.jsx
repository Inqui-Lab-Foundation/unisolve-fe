import { Col } from 'reactstrap';

const TopSectionCard = ({
    heading,
    deadline,
    footerText,
    subHeading,
    teamImages,
    rightImage,
    footerLabels,
    position
}) => {
    return (
        <Col className="dashboard--top--card">
            <h2>{heading}</h2>
            <div className="bg-white card-height d-flex rounded p-3">
                {position === 1 ? (
                    <div className="card-left">
                        <p className="dead-line">
                            <span className="text-muted">DEADLINE</span> :{' '}
                            <span>{deadline},</span>
                        </p>
                        <p className="sub-heading">{subHeading}</p>
                        <div className="dashboard-card-footer">
                            <p className="text-muted small">{footerText}</p>
                            <div className="d-flex">
                                {teamImages.map((item, i) => (
                                    <img
                                        key={i}
                                        src={item}
                                        alt={item + i}
                                        className="img-fluid"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ) : position === 2 ? (
                    <div className="card-left">
                        <div className="d-flex align-items-center">
                            <img
                                src={rightImage}
                                alt="card"
                                className="img-fluid w-30"
                            />
                            <div className='d-flex flex-column'>
                                <span>name</span>
                                <span className='small'>email</span>
                            </div>
                        </div>
                        <div className="dashboard-card-footer">
                            <p className='badges'><span>{footerLabels.heading}</span> : <span>{footerLabels.value}</span></p>
                        </div>
                    </div>
                ) : (
                    <div className="card-left">
                        <p className="dead-line">
                            <span className="text-muted">DEADLINE</span> :{' '}
                            <span>{deadline},</span>
                        </p>
                        <p className="sub-heading">{subHeading}</p>
                        <div className="dashboard-card-footer">
                            <p className="text-muted small">{footerText}</p>
                            <div className="d-flex">
                                {teamImages.map((item, i) => (
                                    <img
                                        key={i}
                                        src={item}
                                        alt={item + i}
                                        className="img-fluid"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                <img
                    src={rightImage}
                    alt="card"
                    className="img-fluid w-30 card-right"
                />
            </div>
        </Col>
    );
};

export default TopSectionCard;
