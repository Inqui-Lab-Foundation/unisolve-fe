import { Input } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Button } from '../../stories/Button';
import Layout from '../Layout';
import { deleteTempMentorById } from '../store/admin/actions';
import './dashboard.scss';

const Dashboard = () => {
    const inputField = {
        type: 'text',
        className: 'defaultInput'
    };
    const [diesCode, setDiesCode] = useState('');
    const [orgData, setOrgData] = useState({});
    const [error, setError] = useState('');
    const handleOnChange = (e) => {
        setDiesCode(e.target.value);
        setOrgData({});
        setError("");
    };

    const handleSearch = (e) => {
        const body = JSON.stringify({
            organization_code: diesCode
        });
        var config = {
            method: 'post',
            url: process.env.REACT_APP_API_BASE_URL + '/organizations/checkOrg',
            headers: {
                'Content-Type': 'application/json'
            },
            data: body
        };
        axios(config)
            .then(function (response) {
                if (response.status == 200) {
                    setOrgData(response?.data?.data[0]);
                    setError('');
                }
            })
            .catch(function (error) {
                if (error?.response?.data?.status === 404) {
                    setError('Entered Invalid UDISC Code');
                }
                setOrgData({});
            });
        e.preventDefault();
    };
    
    return (
        <Layout>
            <div className="dashboard-wrapper pb-5 my-5 px-5">
                <h2 className="mb-5">Dashboard </h2>
                <div className="dashboard bg-white p-5 mb-5">
                    <div className="row">
                        <div style={{ flex: 1 }} className="col-lg-12">
                            Data
                        </div>
                        <div style={{ flex: 1 }} className="col-lg-12">
                            <h2>Search UDISC Code</h2>
                            <Row className="text-center justify-content-md-center my-5">
                                <Col md={9} lg={12}>
                                    <Row>
                                        <Col md={9} className="my-auto">
                                            <Input
                                                {...inputField}
                                                id="organization_code"
                                                onChange={(e) =>
                                                    handleOnChange(e)
                                                }
                                                value={diesCode}
                                                name="organization_code"
                                                placeholder="Enter UDISC Code"
                                                className="w-100 mb-3 mb-md-0"
                                                style={{
                                                    borderRadius: '60px',
                                                    padding: '9px 11px'
                                                }}
                                            />
                                        </Col>
                                        <Col md={3} className="partner-btn">
                                            <Button
                                                label={'Search'}
                                                btnClass="primary mx-3 w-100"
                                                size="small"
                                                onClick={(e) => handleSearch(e)}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            {diesCode && orgData && 
                                orgData?.organization_name &&
                                orgData?.mentor !== null ? (
                                    <Card className="mt-3 text-left p-4">
                                        <CardBody>
                                            <p>School: {orgData.organization_name}</p>
                                            <p>City: {orgData.city}</p>
                                            <p>Faculty Name: {orgData.mentor?.full_name}</p>
                                            <p>Faculty Mobile: {orgData.mentor?.mobile}</p>
                                            <p>Faculty email: {orgData.mentor?.user?.username}</p>
                                            <button onClick={()=>deleteTempMentorById(orgData.mentor?.user_id)} className='btn btn-danger btn-lg' >Delete</button>
                                        </CardBody>
                                    </Card>
                                ) : !error && diesCode && orgData !=={} && orgData?.organization_name &&(
                                    <Card className="mt-3 text-left p-4">
                                        <CardBody>
                                            <span>Still No Teacher Registered</span>
                                        </CardBody>
                                    </Card>
                                )}
                            {error && diesCode && (
                                <Card className="mt-3 text-left p-4">
                                    <CardBody>
                                        <span>{error}</span>
                                    </CardBody>
                                </Card>
                            )}
                            {!diesCode && (
                                <Card className="mt-3 text-left p-4">
                                    <CardBody>
                                        <span>Search UDISC Code</span>
                                    </CardBody>
                                </Card>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
