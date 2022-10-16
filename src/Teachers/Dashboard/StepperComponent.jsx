import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Steps } from 'antd';
import { useSelector } from 'react-redux';
import { compareDates } from '../../helpers/Utils';
import { useLayoutEffect } from 'react';

const { Step } = Steps;

const data = [
    'Register Your School And Complete Your pre-survey',
    'Complete Teacher Course',
    'Register Your Teams',
    'Support All Your Teams In Course Completion',
    'Support All Teams In Idea Submission',
    'Complete Post Survey And Generate Certificate'
];
const StepperComponent = () => {
    const { schedules } = useSelector((state) => state.schedules);
    const [index, setIndex] = useState([]);
    const checkMap = (dates) => {
        let values =
            dates && dates.length > 0 ? Object.values(dates[0]?.teacher) : [];
        values.splice(2, 1);
        const checkDateCondition =
            values &&
            values.length > 0 &&
            values.map((item, i) => {
                if (compareDates(item)) {
                    return i;
                }
            });
        let removedFalsy = [];
        if (checkDateCondition.length > 0) {
            removedFalsy = checkDateCondition.filter(Boolean);
        }
        return removedFalsy;
    };

    useLayoutEffect(() => {
        setIndex(checkMap(schedules));
    }, [schedules]);
    return (
        <Steps direction="vertical" current={index[index.length - 1]}>
            {data.map((item, i) => (
                <Step key={i} title={item} />
            ))}
        </Steps>
    );
};
export default StepperComponent;
