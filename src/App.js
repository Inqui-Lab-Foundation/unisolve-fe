import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import messages from "./messages";
import Routes from "./Routes";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// import { env } from './env'

function App() {
  console.log('REACT_PORT', process.env.REACT_PORT);
  return (
    <IntlProvider locale="en">
      <Router>
        <Routes />
      </Router>
    </IntlProvider>
  );
}

export default App;
