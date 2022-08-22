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

const { TabPane } = Tabs;

const TicketsPage = (props) => {
    const history = useHistory();

    const [count, setCount] = useState(0);

    const [teamsArray, setTeamsArray] = useState([]);
    const [teamMembersListArray, setTeamMembersArray] = useState([]);
    const [teamId, setTeamId] = useState('');

    const currentUser = getCurrentUser('current_user');

    useEffect(() => {
        props.getAdminTeamsListAction('i');
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
    }, [teamId, count]);

    useEffect(() => {
        var teamsMembersArrays = [];
        props.teamsMembersList.length > 0 &&
            props.teamsMembersList.map((teams, index) => {
                var key = index + 1;
                return teamsMembersArrays.push({ ...teams, key });
            });
        setTeamMembersArray(teamsMembersArrays);
    }, [props.teamsMembersList.length > 0]);

    const adminTeamsList = {
        data: teamsArray,
        columns: [
            {
                title: 'S.No',
                dataIndex: 'key'
            },
            {
                title: 'TEAM NAME',
                dataIndex: 'team_name'
            },
            {
                title: 'TEAM MEMBERS COUNT',
                dataIndex: 'student_count'
            },
            {
                title: 'ACTIONS',
                dataIndex: 'action',
                render: (text, record) => (
                    <Space size="small">
                        {record.student_count < 4 && (
                            <Link
                                exact="true"
                                onClick={() => handleCreate(record)}
                                className="mr-5"
                            >
                                <i className="fa fa-plus" />
                            </Link>
                        )}
                        <Link
                            exact="true"
                            onClick={() => handleEditTeam(record)}
                            className="mr-5"
                        >
                            <i className="fa fa-edit" />
                        </Link>
                        {record.student_count === 0 && (
                            <Link
                                exact="true"
                                onClick={() => handleDelete(record)}
                                className="mr-5"
                            >
                                <i className="fa fa-trash" />
                            </Link>
                        )}
                    </Space>
                )
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
                        status: 'INACTIVE'
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
                            console.log(response);
                            if (response.status === 200) {
                                setCount(count + 1);
                                openNotificationWithIcon(
                                    'success',
                                    'Team Member Delete Successfully'
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
                                {/* <Col
                  sm={12}
                  md={12}
                  lg={3}
                  className="mb-5 mb-sm-5 mb-md-5 mb-lg-0"
                >
                  <InputWithSearchComp placeholder="Search ticket" />
                </Col>
                <Col className="col-auto mb-5 mb-sm-5 mb-md-5 mb-lg-0">
                  <div className="d-flex action-drops">
                    <CommonDropDownComp {...typeProps} />
                    <CommonDropDownComp {...statusFilter} />
                    <CommonDropDownComp {...filterDropProps1} />
                  </div>
                </Col> */}

                                <Col className="ticket-btn col ml-auto  ">
                                    <div className="d-flex justify-content-end">
                                        {/* <a
                                            href={dummyCSV}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="primary"
                                        >
                                            <Button
                                                label="Export"
                                                btnClass="primary-outlined mx-2"
                                                size="small"
                                                shape="btn-square"
                                                Icon={BsGraphUp}
                                                style={{ color: '#231f20' }}
                                            />
                                        </a> */}

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

                            <TabPane className="bg-white p-3 mt-5 sub-tab">
                                <Tabs defaultActiveKey="1">
                                    <TicketDataTable
                                        {...adminTeamsList}
                                        showRowSelction={false}
                                        isExpandable={true}
                                        expandableComponent={
                                            (record) => {
                                                setTeamId(record.team_id);
                                                return teamMembersListArray.length >
                                                    0 ? (
                                                    <TicketDataTable
                                                        {...adminTeamMembersList}
                                                        showRowSelction={false}
                                                    />
                                                ) : null;
                                                // <TicketDataTable
                                                //   {...adminTeamMembersList}
                                                //   showRowSelction={false}
                                                // />
                                            }
                                            // setTeamId(record.team_id)
                                        }
                                    />
                                </Tabs>
                            </TabPane>
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
