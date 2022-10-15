import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                '#00008b',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                '#00008b',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }
    ]
};
export const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 1
        }
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'left'
        },
        title: {
            display: true,
            text: 'Student progress'
        }
    }
};

export default function DoughnutChart() {
    return (
        <>
            <div style={{ width: '50%',backgroundColor:"aliceblue" }} className="common-flex">data come soon</div>
            <div style={{ width: '50%' }}>
                <Doughnut options={options} data={data} />
            </div>
        </>
    );
}
