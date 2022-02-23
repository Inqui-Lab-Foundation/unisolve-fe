import React from "react";
import "./i18n";

// import SignUp from "./Pages/SignUp";
import SignUpNew from "./Pages/SignUpNew";
import LoginNew from "./Pages/LoginNew";
import CreateNewPassword from "./Pages/CreateNewPassword";
import PasswordEmailConfirmation from "./Pages/PasswordEmailConfirmation";
import ForgotPassword from "./Pages/ForgotPassword";
import LogoutView from "./Pages/LogoutView";

const Login = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ "./views/user/login")
);

const App = () => {
  return (
    <div className="h-100">
      {/* <SignUpNew /> */}
      {/* <LoginNew /> */}
      {/* <CreateNewPassword /> */}
      {/* <PasswordEmailConfirmation /> */}
      {/* <ForgotPassword /> */}
      {/* <LogoutView /> */}
    </div>
  );
};

export default App;
