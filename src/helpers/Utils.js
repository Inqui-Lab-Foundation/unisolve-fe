import { notification } from "antd";
import Swal from "sweetalert2/dist/sweetalert2.js";

export const getCurrentUser = () => {
  let user = null;
  try {
    user =
      localStorage.getItem("current_user") != null
        ? JSON.parse(localStorage.getItem("current_user"))
        : null;
    // console.log(user, 'getCurrentUser---------------------------------------');
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js  : getCurrentUser -> error", error);
    user = null;
  }
  return user;
};

export const setCurrentUser = (user) => {
  console.log("===========user", user);
  try {
    if (user) {
      localStorage.setItem("current_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("current_user");
    }
  } catch (error) {
    console.log(">>>>: src/helpers/Utils.js : setCurrentUser -> error", error);
  }
};

export const getNormalHeaders = (apiKey) => {
  // it receive api_key argument if not it will assign null to it.
  const loginUser = getCurrentUser();
  // console.log("=========", loginUser.data[0].token);
  let axiosConfig = {};
  if (loginUser) {
    // eslint-disable-next-line no-return-await
    axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        // Accept: "application/json",
        Authorization: `Bearer ${loginUser.data[0].token}`,
      },
    };
  } else {
    // eslint-disable-next-line no-return-await
    axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": apiKey,
      },
    };
  }
  return axiosConfig;
};

export const openNotificationWithIcon = (type, msg, des) => {
  // type :- success,info , warning,error
  notification[type]({
    message: msg,
    description: des,
  });
};

export const logout = (history) => {
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
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire("Cancelled", "You are Loged in", "error");
      }
    });
};
