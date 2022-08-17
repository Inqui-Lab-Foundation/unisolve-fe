import React from 'react';

const UserPersonalDetails = ({ nextStep, prevStep, handleChange, values }) => {
    const Continue = (e) => {
        e.preventDefault();
        nextStep();
    };
    const Previous = (e) => {
        e.preventDefault();
        prevStep();
    };

    return (
        <form>
            <label>
        Month
                <input
                    type="text"
                    placeholder="Month"
                    value={values.month}
                    onChange={handleChange('month')}
                />
            </label>

            <button onClick={Continue}>Next</button>
            <button onClick={Previous}>Previous</button>
        </form>
    );
};

export default UserPersonalDetails;
