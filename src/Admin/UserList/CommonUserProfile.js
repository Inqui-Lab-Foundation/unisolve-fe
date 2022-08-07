import React, { useState } from "react";
import Layout from "../../Admin/Layout";
import { Link, withRouter } from "react-router-dom";

const CommonUserProfile = (props) => {
  // city: "hyderabad";
  // country: "bs.c";
  // created_at: "2022-08-03T06:33:36.000Z";
  // created_by: 1236547899;
  // date_of_birth: "1989-06-20T00:00:00.000Z";
  // district: "somehthing";
  // full_name: "mentor user";
  // mentor_id: 5;
  // mobile: "7989892334";
  // organization_code: "CHIREC1";
  // qualification: "bs.c";
  // state: "tg";
  // status: "ACTIVE";
  // team_id: "12433";
  // updated_at: "2022-08-03T06:33:36.000Z";
  // updated_by: null;
  // user_id: 10;

  return (
    <Layout>
      <div>
        <p>{props.location.data && props.location.data.mentor_id}</p>
        <p>{props.location.data && props.location.data.full_name}</p>
        <p>{props.location.data && props.location.data.mobile}</p>
        <p>{props.location.data && props.location.data.status}</p>
        <p>{props.location.data && props.location.data.full_name}</p>
      </div>
    </Layout>
  );
};

export default withRouter(CommonUserProfile);
