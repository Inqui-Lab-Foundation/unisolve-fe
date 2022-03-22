import "./SignUp.scss";
import React, { Component, useState } from "react";
import { Row } from "reactstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

import logout from "../media/logout.svg";
import Layout from "../Layout";
import { useHistory } from "react-router-dom";

const LogoutView = () => {
  const { t, i18n } = useTranslation();
  const history = useHistory();

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "You are attempting to logout of Unisolve.",
      text: "Are you sure?",
      imageUrl: `${logout}`,
      showCloseButton: true,
      confirmButtonText: "Logout",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      reverseButtons: false,
    })
    .then((result) => {
      if (result.isConfirmed) {
        if (result.isConfirmed) {
          localStorage.removeItem("current_user");
          localStorage.removeItem("headerOption");
          history.push("/login");
        }
        // swalWithBootstrapButtons.fire(
        //   "Loged out!",
        //   "You are Loged out.",
        //   "success"
        // );
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire("Cancelled", "You are Loged in", "error");
      }
    });

  return (
    <Layout>
      <React.Fragment>
        <div className="container-fluid   Login vh-100">
          <Row className=" my-auto h-100">dfds</Row>
        </div>
      </React.Fragment>
    </Layout>
  );
};

export default LogoutView;
