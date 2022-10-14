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
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 1
        }
    },
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

const labels = ['January', 'February', 'March', 'April'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Teams',
            data: [885, 555, 334, 233],
            backgroundColor: '#067DE1'
        },
        {
            label: 'Students',
            data: [222, 333, 444, 555],
            backgroundColor: '#0DA650'
        }
    ]
};

export default function BarChart() {
    return <Bar options={options} data={data} />;
}
