import React from "react";
import "./i18n";

// import SignUp from "./Pages/SignUp";
import SignUpNew from "./Pages/SignUpNew";

const Login = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ "./views/user/login")
);

const App = () => {
  return (
    <div className="h-100">
      {/* <SignUp /> */} <SignUpNew />
    </div>
  );
};

export default App;
