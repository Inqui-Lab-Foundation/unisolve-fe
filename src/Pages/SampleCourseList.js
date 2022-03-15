// import React from "react";
import React, { useEffect, useState } from "react";
import { GetSampleList } from "../redux/sample/actions";
import { connect } from "react-redux";
import axios from "axios";
import { URL } from "../constants/defaultValues";

const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 1, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male" },
];

const SampleCourseList = (props) => {
  const body = {
    name: "Arshad",
  };
  useEffect(() => {
    props.GetSampleList(body, function (resObj) {
      console.log("=========", resObj);
    });
  }, []);

  // useEffect(() => {
  //   console.log("=============", URL);
  //   const requestOptions = {
  //     method: "GET",
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  //       "Content-Type": "text/plain",
  //     },
  //   };
  //   fetch(`http://13.235.1.199:3002/api/course/courseList`, requestOptions, {
  //     mode: "no-cors",
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log("======result===", result);
  //     });
  //   // const result = await axios
  //   //   .get(`${URL.sampleList}`)
  //   //   .then((response) => {
  //   //     console.log("00000000000000000000000", response);
  //   //   })
  //   //   .catch((err) => err.response);
  //   // console.log("======result======", result);
  // }, []);

  useEffect(() => {
    // var axios = require("axios");

    const config = {
      method: "get",
      url: "http://13.235.1.199:3002/api/course/courseList",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    // const requestOptions = {
    //   method: "GET",
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    //     "Content-Type": "text/plain",
    //   },
    // };
    // fetch(`http://13.235.1.199:3002/api/course/courseList`, requestOptions, {
    //   mode: "no-cors",
    // })
    //   .then((response) => response.json())
    //   .then((res) => console.log(res, "res"))
    //   .catch((err) => {
    //     console.log(err, "err");
    //   });
    // // await axios
    // // .get(`http://13.235.1.199:3002/api/course/courseList`, requestOptions)
    // // .then((res) => console.log(res, "res"))
    // // .catch((err) => {
    // // console.log(err, "err");
    // // });
  }, []);
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // EuProductsReducer: state.EuProductsReducer,
    // CartProductsReducer: state.CartProductsReducer,
  };
};

const mapDistachToProps = (dispatch) => {
  return {
    GetSampleList: (body, cb) => dispatch(GetSampleList(body, cb)),
  };
};

export default connect(mapStateToProps, mapDistachToProps)(SampleCourseList);
// export default SampleCourseList;
