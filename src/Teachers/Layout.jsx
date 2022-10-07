import React, { useState } from 'react';
import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';
import { compareDates } from '../helpers/Utils';

function Layout(props) {
    const [rtl] = useState(false);
    const [toggled, setToggled] = useState(false);
    const data = {
        teacher: {
            registration: {
                start_date: '10-10-2022',
                end_date: '13-10-2022'
            },
            pre_survey: {
                start_date: '13-10-2022',
                end_date: '15-10-2022'
            },
            dashboard: {
                start_date: '13-10-2022',
                end_date: '15-10-2022'
            },
            course: {
                start_date: '13-10-2022',
                end_date: '15-10-2022'
            },
            teams: {
                start_date: '13-10-2022',
                end_date: '15-10-2022'
            },
            post_survery: {
                start_date: '13-10-2022',
                end_date: '15-10-2022'
            },
            certificate: {
                start_date: '13-10-2022',
                end_date: '15-10-2022'
            }
        },
        student: {
            registration: {
                start_date: '10-10-2022',
                end_date: '13-10-2022'
            },
            pre_survey: {
                start_date: '13-10-2022',
                end_date: '15-10-2022'
            },
            dashboard: {
                start_date: '13-10-2022',
                end_date: '15-10-2022'
            },
            course: {
                start_date: '13-10-2022',
                end_date: '15-10-2022'
            },
            teams: {
                start_date: '13-10-2022',
                end_date: '15-10-2022'
            },
            post_survery: {
                start_date: '13-10-2022',
                end_date: '15-10-2022'
            },
            certificate: {
                start_date: '13-10-2022',
                end_date: '15-10-2022'
            }
        }
    };
    console.log(compareDates(data.teacher.certificate));
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
