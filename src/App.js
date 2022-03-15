import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import messages from "./messages";
import Routes from "./Routes";
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <IntlProvider locale="en">
      <Router>
        <Routes />
      </Router>
    </IntlProvider>
  );
}

export default App;
