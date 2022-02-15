import React from "react";

import SignUp from "./Pages/SignUp";

const Login = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ "./views/user/login")
);

const App = () => {
  return (
    <div className="h-100">
      <SignUp />
    </div>
  );
};

export default App;
