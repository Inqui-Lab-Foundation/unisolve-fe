import React from 'react';
import { IntlProvider } from 'react-intl';

import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';

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
