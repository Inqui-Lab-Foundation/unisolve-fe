import React from 'react';
import Layout from './Layout';

import PageConstruction from '../components/PageUnderConstrcution';

const Dashboard = () => {
    // const currentUser = getCurrentUser("current_user");
    // const history = useHistory();
    // if (currentUser) {
    //   history.pushState(null, null, location && location.href);
    //   window.onpopstate = function (event) {
    //     history.go(1);
    //   };
    // }
    return (
        <Layout>
            {/* <figure>
        <img src={DummyImg} alet='preview' className='img-fluid' />
      </figure> */}
            <PageConstruction />
        </Layout>
    );
};

export default Dashboard;
