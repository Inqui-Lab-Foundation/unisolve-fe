/* eslint-disable react/no-unescaped-entities */
import './pageUnderConstrcution.scss';

import PageUnderConstruction from '../../assets/media/under_development.png';

export default function Header() {
    return (
        <div className='pageUnderConstruction'>
            <div className='child pb-5'>
                <figure>
                    <img
                        src={PageUnderConstruction}
                        alt='under construction'
                        className='img-fluid w-40'
                    />
                </figure>
                <h2>This page is under construction</h2>
                <p>We're working on it!</p>
            </div>
        </div>
    );
}
