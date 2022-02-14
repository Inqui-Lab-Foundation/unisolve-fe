import React, { Suspense, useEffect } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// import { IntlProvider } from "react-intl";
// import "./helpers/Firebase";
// import AppLocale from "./lang";

// import { NotificationContainer } from "./components/common/react-notifications";
// import { adminRoot, UserRole } from "./constants/defaultValues";
// import { getDirection } from "./helpers/Utils";
// import { ProtectedRoute } from "./helpers/authHelper";

// const ViewHome = React.lazy(() =>
//   import(/* webpackChunkName: "views" */ './views/home')
// );
// const ViewApp = React.lazy(() =>
//   import(/* webpackChunkName: "views-app" */ "./views/app")
// );
// const ViewUser = React.lazy(() =>
//   import(/* webpackChunkName: "views-user" */ "./views/user")
// );

const Login = React.lazy(() =>
  import(/* webpackChunkName: "views-user" */ "./views/user/login")
);
// const ViewError = React.lazy(() =>
//   import(/* webpackChunkName: "views-error" */ "./views/error")
// );
// const ViewUnauthorized = React.lazy(() =>
//   import(/* webpackChunkName: "views-error" */ "./views/unauthorized")
// );

const App = () => {
  console.log("===========hiiiii");
  return (
    <div className="h-100">
      <Login />
    </div>
  );
};

// const mapStateToProps = ({ authUser, settings }) => {
//   const { currentUser } = authUser;
//   const { locale } = settings;
//   return { currentUser, locale };
// };
// const mapActionsToProps = {};

export default App;
