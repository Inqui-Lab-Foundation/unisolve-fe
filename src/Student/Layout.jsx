/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from './Header.js';
import Aside from './Aside.js';
import Footer from './Footer.js';

function Layout(props) {
    const [rtl, setRtl] = useState(false);
    const [toggled, setToggled] = useState(false);
    // const intl = useIntl();

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };

    return (
        <div className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
            <Aside
                rtl={rtl}
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
            />
            <main>
                <Header handleToggleSidebar={handleToggleSidebar} />
                <div className="app-content">{props.children}</div>
                <Footer />
            </main>
        </div>
    );
}

export default Layout;
