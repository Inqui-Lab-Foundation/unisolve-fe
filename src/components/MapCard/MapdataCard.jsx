import SingleMapdataCard from './SingleMapdataCard';

const MapdataCard = ({ values }) => {
    return (
        <div className='d-flex' style={{gap:"2rem",flexWrap:"wrap"}}>
            <SingleMapdataCard
                title={'District Name'}
                value1={values.district_name}
            />
            <SingleMapdataCard
                title={'Student Teams'}
                value1={values.teams}
            />
            <SingleMapdataCard
                title={'Schools'}
                value1={values.reg_schools}
                value2={values.overall_schools}
            />
            <SingleMapdataCard
                title={'Ideas'}
                value1={values.ideas}
            />
        </div>
    );
};

export default MapdataCard;
