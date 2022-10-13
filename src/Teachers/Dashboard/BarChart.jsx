import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: 'Bar Chart'
        }
    }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [885,555,334,233,],
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
        },
        {
            label: 'Dataset 2',
            data: [222,333,444,555,],
            backgroundColor: 'rgba(53, 162, 235, 0.5)'
        }
    ]
};

export default function BarChart() {
    return (
        <div style={{ width: '350px' }}>
            <Bar options={options} data={data} />
        </div>
    );
}
