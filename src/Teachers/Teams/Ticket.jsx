import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Tabs, Space } from 'antd';
import TicketDataTable from './TicketDataTable';
import Layout from '../Layout';
import { Link } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs';
import { Button } from '../../stories/Button';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import dummyCSV from '../../media/basic-csv.csv';
import {
    getAdminTeamsList,
    getAdminTeamMembersList
} from '../../redux/actions';
import axios from 'axios';
import { openNotificationWithIcon, getCurrentUser } from '../../helpers/Utils';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import logout from '../../assets/media/logout.svg';
import DataTable, { Alignment } from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

const { TabPane } = Tabs;

const TicketsPage = (props) => {
    const history = useHistory();
    localStorage.setItem("teamId", JSON.stringify(""));
    const [count, setCount] = useState(0);
    const [show, setDelete] = useState(false);

    const [teamsArray, setTeamsArray] = useState([]);
    const [teamMembersListArray, setTeamMembersArray] = useState([]);
    const [newTeamMembersListArray, setNewTeamMembersArray] = useState([]);
    const [teamId, setTeamId] = useState('');

    const currentUser = getCurrentUser('current_user');
    const [pending, setPending] = React.useState(true);
    const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setRows(adminTeamsList.data);
            setPending(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);
    useEffect(() => {
        props.getAdminTeamsListAction(currentUser.data[0].user_id);
    }, [count]);

    useEffect(() => {
        var teamsArrays = [];
        props.teamsList.map((teams, index) => {
            var key = index + 1;
            return teamsArrays.push({ ...teams, key });
        });
        setTeamsArray(teamsArrays);
    }, [props.teamsList]);

    useEffect(() => {
        props.getAdminTeamMembersListAction(teamId);
    }, [teamId]);

    useEffect(() => {
        var teamsMembersArrays = [];
        props.teamsMembersList.length > 0 &&
            props.teamsMembersList.map((teams, index) => {
                var key = index + 1;
                return teamsMembersArrays.push({ ...teams, key });
            });
        setTeamMembersArray(teamsMembersArrays);
    }, [props.teamsMembersList.length > 0 ]);

    
    const adminTeamsList = {
        data: teamsArray,
        columns: [
            {
                name: 'S.No',
                selector: 'key',
                width: '10%'
            },
            {
                name: 'TEAM NAME',
                selector: 'team_name',
                sortable: true,
                width: '20%'
            },
            {
                name: 'TEAM MEMBERS COUNT',
                selector: 'student_count',
                width: '20%'
            },
            {
                name: 'Actions',
                cell: (params) => {
                    return [
                        <Link
                            key={params}
                            exact='true'
                            onClick={() => handleCreate(params)}
                        >
                            { params.student_count < 4 && <div className="btn btn-primary btn-lg mr-5">Create</div>}
                        </Link>,
                        <Link
                            key={params}
                            exact='true'
                            onClick={() => handleView(params)}
                            // style={{marginRight:"20px"}}
                        >
                            <div className="btn btn-primary btn-lg mr-5">View</div>
                        </Link>,
                        <Link
                            key={params}
                            exact='true'
                            onClick={() => handleEditTeam(params)}
                            // style={{marginRight:"20px"}}
                        >
                            <div className="btn btn-primary btn-lg mr-5">Edit</div>
                        </Link>,
                            <Link
                            key={params}
                            exact='true'
                            onClick={() => handleDelete(params)}
                            // style={{marginRight:"20px"}}
                        >
                            { params.student_count === 0 && <div className="btn btn-primary btn-lg mr-5">Delete</div>}
                        </Link>,
                    ];
                },
                width: '40%',
                center: true
            }
        ]
    };
    const handleCreate = (item) => {
        history.push({
            pathname: '/teacher/create-team-member',
            item: item
        });
    };
    const handleEditTeam = (item) => {
        history.push({
            pathname: '/teacher/edit-team',
            item: item
        });
    };
    const handleView = (item) => {
        history.push({
            pathname: '/teacher/view-team-member',
            item: item
        });
    localStorage.setItem("teamId", JSON.stringify(item));
    };
    const handleEditTeamMember = (item) => {
        history.push({
            pathname: '/teacher/edit-team-member',
            item: item
        });
    };
    var adminTeamMembersList = {
        data: teamMembersListArray.length > 0 && teamMembersListArray,
        columns: [
            {
                title: 'S.NO',
                dataIndex: 'key'
            },
            {
                title: 'STUDENT USERNAME',
                dataIndex: 'UUID'
            },
            {
                title: 'STUDENT NAME',
                dataIndex: 'full_name'
            },
            {
                title: 'GRADE',
                dataIndex: 'Grade'
            },
            {
                title: 'AGE',
                dataIndex: 'Age'
            },

            {
                title: 'GENDER',
                dataIndex: 'Gender'
            },
            {
                title: 'ACTIONS',
                dataIndex: 'action',
                render: (text, record) => (
                    <Space size="small">
                        <Link
                            exact="true"
                            onClick={() => handleEditTeamMember(record)}
                            className="mr-5"
                        >
                            <i className="fa fa-edit" />
                        </Link>

                        <Link
                            exact="true"
                            onClick={() => handleDeleteTeamMember(record)}
                            className="mr-5"
                        >
                            <i className="fa fa-trash" />
                        </Link>
                    </Space>
                )
            }
        ]
    };

    var adminNewTeamMembersList = {
        data: newTeamMembersListArray.length > 0 && newTeamMembersListArray,
        columns: [
            {
                title: 'S.NO',
                dataIndex: 'key'
            },
            {
                title: 'STUDENT USERNAME',
                dataIndex: 'UUID'
            },
            {
                title: 'STUDENT NAME',
                dataIndex: 'full_name'
            },
            {
                title: 'GRADE',
                dataIndex: 'Grade'
            },
            {
                title: 'AGE',
                dataIndex: 'Age'
            },

            {
                title: 'GENDER',
                dataIndex: 'Gender'
            },
            {
                title: 'ACTIONS',
                dataIndex: 'action',
                render: (text, record) => (
                    <Space size="small">
                        <Link
                            exact="true"
                            onClick={() => handleEditTeamMember(record)}
                            className="mr-5"
                        >
                            <i className="fa fa-edit" />
                        </Link>

                        <Link
                            exact="true"
                            onClick={() => handleDeleteTeamMember(record)}
                            className="mr-5"
                        >
                            <i className="fa fa-trash" />
                        </Link>
                    </Space>
                )
            }
        ]
    };

    const handleDelete = (item) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons
            .fire({
                title: 'You are attempting to delete Team.',
                text: 'Are you sure?',
                imageUrl: `${logout}`,
                showCloseButton: true,
                confirmButtonText: 'Delete',
                showCancelButton: true,
                cancelButtonText: 'Cancel',
                reverseButtons: false
            })
            .then((result) => {
                if (result.isConfirmed) {
                    const body = JSON.stringify({
                        status: 'INACTIVE',
                        team_name: item.team_name
                    });
                    var config = {
                        method: 'put',
                        url:
                            process.env.REACT_APP_API_BASE_URL +
                            '/teams/' +
                            item.team_id,
                        headers: {
                            'Content-Type': 'application/json',
                            // Accept: "application/json",
                            Authorization: `Bearer ${currentUser.data[0].token}`
                        },
                        data: body
                    };
                    axios(config)
                        .then(function (response) {
                            console.log(response);
                            if (response.status === 200) {
                                setCount(count + 1);
                                openNotificationWithIcon(
                                    'success',
                                    'Team Delete Successfully'
                                );
                                props.history.push('/teacher/teamlist');
                            } else {
                                openNotificationWithIcon(
                                    'error',
                                    'Opps! Something Wrong'
                                );
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire(
                        'Cancelled',
                        'You are not Delete Team',
                        'error'
                    );
                }
            });
    };

    const handleDeleteTeamMember = (item) => {
        // console.log(teamMembersListArray)
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons
            .fire({
                title: 'You are attempting to Delete Team Member.',
                text: 'Are you sure?',
                imageUrl: `${logout}`,
                showCloseButton: true,
                confirmButtonText: 'Delete',
                showCancelButton: true,
                cancelButtonText: 'Cancel',
                reverseButtons: false
            })
            .then((result) => {
                if (result.isConfirmed) {
                    const body = JSON.stringify({
                        status: 'DELETED'
                    });
                    var config = {
                        method: 'put',
                        url:
                            process.env.REACT_APP_API_BASE_URL +
                            '/students/' +
                            item.student_id,
                        headers: {
                            'Content-Type': 'application/json',
                            // Accept: "application/json",
                            Authorization: `Bearer ${currentUser.data[0].token}`
                        },
                        data: body
                    };
                    axios(config)
                        .then(function (response) {
                            if (response.status === 200) {
                                const index = teamMembersListArray.length > 0 ? teamMembersListArray.findIndex(x=>x.student_id == item.student_id): -1;
                                teamMembersListArray.splice(index, 1);
                                // console.log(index)
                                if(index > -1){
                                    setNewTeamMembersArray(teamMembersListArray);
                                    setDelete(true);
                                }
                                openNotificationWithIcon(
                                    'success',
                                    'Team Member Delete Successfully'
                                );
                            } else {
                                openNotificationWithIcon(
                                    'error',
                                    'Opps! Something Wrong'
                                );
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire(
                        'Cancelled',
                        'You are not Delete Team Member',
                        'error'
                    );
                }
            });
    };

    return (
        <Layout>
            <Container className="ticket-page mb-50 userlist">
                <Row className="mt-5 pt-5">
                    <h2>Teams Management</h2>
                    <div className="ticket-data">
                        <Tabs defaultActiveKey="1">
                            <Row className="mt-5">
                                <Col className="ticket-btn col ml-auto  ">
                                    <div className="d-flex justify-content-end">
                                        <Button
                                            label="Create Team"
                                            btnClass="primary ml-2"
                                            size="small"
                                            shape="btn-square"
                                            Icon={BsPlusLg}
                                            onClick={() =>
                                                history.push(
                                                    '/teacher/create-team'
                                                )
                                            }
                                        />
                                    </div>
                                </Col>
                            </Row>

                            <div className="my-2">
                                <DataTableExtensions print={false} export={false}{...adminTeamsList}>
                                    <DataTable
                                        data={rows}
                                        defaultSortField="id"
                                        defaultSortAsc={false}
                                        pagination
                                        highlightOnHover
                                        fixedHeader
                                        subHeaderAlign={Alignment.Center}
                                    />
                                </DataTableExtensions>
                            </div>

                            {/* <TabPane className="bg-white p-3 mt-5 sub-tab">
                                <Tabs defaultActiveKey="1">
                                    <TicketDataTable
                                        {...adminTeamsList}
                                        isExpandable={true}
                                        // defaultExpandAllRows={false}
                                        expandableComponent={()=>false}
                                        // expandableComponent={
                                        //     (record, index) => { 
                                        //         setTeamId(record.team_id);
                                        //         console.log(adminTeamMembersList)
                                        //         return  (
                                        //                 <TicketDataTable
                                        //                 {...adminTeamMembersList}
                                        //                 />
                                        //             )
                                        //     }
                                        // }
                                    />
                                </Tabs>
                            </TabPane> */}
                        </Tabs>
                    </div>
                </Row>
            </Container>
        </Layout>
    );
};

const mapStateToProps = ({ teams }) => {
    const { teamsList, teamsMembersList } = teams;
    return { teamsList, teamsMembersList };
};

export default connect(mapStateToProps, {
    getAdminTeamsListAction: getAdminTeamsList,
    getAdminTeamMembersListAction: getAdminTeamMembersList
})(TicketsPage);
