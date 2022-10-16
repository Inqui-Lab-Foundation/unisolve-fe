/* eslint-disable react/no-unescaped-entities */
// import { useHistory } from 'react-router-dom';
import './components/PageUnderConstrcution/pageUnderConstrcution.scss';

import PageNotFoundImg from '../src/assets/media/page-not-found.png';
import { getCurrentUser } from './helpers/Utils';

const PageNotFound = (props) => {
    const handleOnClick = () => {
        // const history = useHistory();
        const currentUser = getCurrentUser('current_user');
        console.log(currentUser && currentUser.data[0].role);
        if (currentUser && currentUser.data[0].role === 'ADMIN') {
            props.history.push('/admin/dashboard');
        } else if (currentUser && currentUser.data[0].role === 'STUDENT') {
            props.history.push('/dashboard');
        } else if (currentUser && currentUser.data[0].role === 'MENTOR') {
            props.history.push('/teacher/dashboard');
        } else if (!currentUser) {
            props.history.push('/');
        }
    };
    return (
        <div className="pageUnderConstruction">
            <div className="child pb-5">
                <figure>
                    <img
                        src={PageNotFoundImg}
                        alt="under construction"
                        className="img-fluid w-40"
                    />
                </figure>
                <h2>404</h2>
                <p>Page Not Found</p>
                <button
                    onClick={handleOnClick}
                    className="storybook-button storybook-button--small storybook-button--primary sweet-btn-max"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default PageNotFound;
