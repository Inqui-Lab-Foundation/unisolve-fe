// import React from "react";
import React, { useEffect, useState } from 'react';
import { GetSampleList } from '../redux/sample/actions';
import { connect } from 'react-redux';
import axios from 'axios';

import moment from 'moment';

// const data = [
//     { name: 'Anom', age: 19, gender: 'Male' },
//     { name: 'Megha', age: 1, gender: 'Female' },
//     { name: 'Subham', age: 25, gender: 'Male' },
// ];

const SampleCourseList = (props) => {
    const [list, SetList] = useState([]);
    const body = {
        name: 'Arshad'
    };
    useEffect(() => {
        props.GetSampleList(body, function (resObj) {
            console.log('=========', resObj);
        });
    }, []);

    useEffect(() => {
        const config = {
            method: 'get',
            // url: "http://13.235.1.199:3002/api/course/courseList",
            url: 'http://localhost:3002/api/course/courseList',
            headers: {}
        };
        axios(config)
            .then(function (response) {
                console.log('-------', JSON.stringify(response.data));
                SetList(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    console.log('========', list.product);
    return (
        <div>
            <table>
                <tr>
                    <th>Module No</th>
                    <th>Courser Id</th>
                    <th>Status</th>
                    <th>Created Date</th>
                </tr>
                {list.product
                    ? list.product.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.module}</td>
                                <td>{val.courser_id}</td>
                                <td>{val.statue}</td>
                                <td>
                                    {moment(val.createdAt).format(
                                        'Do MMM, YYYY'
                                    )}
                                </td>
                            </tr>
                        );
                    })
                    : null}
            </table>
        </div>
    );
};

const mapStateToProps = () => {
    return {
        // EuProductsReducer: state.EuProductsReducer,
        // CartProductsReducer: state.CartProductsReducer,
    };
};

const mapDistachToProps = (dispatch) => {
    return {
        GetSampleList: (body, cb) => dispatch(GetSampleList(body, cb))
    };
};

export default connect(mapStateToProps, mapDistachToProps)(SampleCourseList);
// export default SampleCourseList;
