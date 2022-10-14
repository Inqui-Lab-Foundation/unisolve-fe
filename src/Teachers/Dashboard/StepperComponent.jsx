import React from 'react';
import 'antd/dist/antd.css';
import { Steps } from 'antd';

const { Step } = Steps;
const data = [
    'Register Your School And Complete Your pre-survey',
    'Complete Teacher Course',
    'Register Your Teams',
    'Support All Your Teams In Course Completion',
    'Support All Teams In Idea Submission',
    'Complete Post Survey And Generate Certificate'
];
const StepperComponent = () => (
    <Steps direction="vertical" current={data.length-1}>
        {data.map((item, i) => (
            <Step key={i} title={item} />
        ))}
    </Steps>
);
export default StepperComponent;
