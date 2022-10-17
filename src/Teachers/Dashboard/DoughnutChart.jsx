import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';
import 'antd/dist/antd.css';
import { Progress } from 'reactstrap';
import { Table } from 'antd';
import { getAdminTeamsList } from '../store/teams/actions';
import { useSelector } from 'react-redux';
import { useLayoutEffect } from 'react';

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

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street'
    }
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Start Date',
        dataIndex: 'age',
        render: () => <div>10-10-2022</div>
    },
    {
        title: 'Progress',
        dataIndex: 'address',
        // render: (_, record) => (
        render: () => (
            <Progress
                key={'25'}
                className="progress-height"
                animated
                value="25"
            >
                25%
            </Progress>
        )
    }
];

export default function DoughnutChart({ user }) {
    const { teamsList } = useSelector((state) => state.teams);
    useLayoutEffect(() => {
        getAdminTeamsList(user.data[0].user_id);
    }, [user.data[0].user_id]);
    return (
        <>
            <div style={{ width: '50%' }} className="select-team">
                <div className="row flex-column p-4">
                    <label htmlFor="teams" className="mb-3">
                        Choose a Team:
                    </label>

                    <select
                        onChange={() => console.log('selected')}
                        name="teams"
                        id="teams"
                    >
                        {teamsList && teamsList.length > 0 ? (
                            teamsList.map((item, i) => (
                                <option key={i} value={item.team_name}>
                                    {item.team_name}
                                </option>
                            ))
                        ) : (
                            <option value="volvo">No Data found</option>
                        )}
                    </select>
                </div>
                <Table
                    bordered
                    pagination={false}
                    dataSource={dataSource}
                    columns={columns}
                />
            </div>
            {/* <div style={{ width: '50%' }}>
                <Doughnut options={options} data={data} />
            </div> */}
        </>
    );
}
