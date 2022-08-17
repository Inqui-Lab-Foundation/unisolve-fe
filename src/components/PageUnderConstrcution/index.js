import './pageUnderConstrcution.scss';

import PageUnderConstruction from '../../media/page-under-construction.gif';

export default function Header() {
    return (
        <div className='pageUnderConstruction'>
            <div className='child'>
                <figure>
                    <img
                        src={PageUnderConstruction}
                        alt='under construction'
                        className='img-fluid w-25'
                    />
                </figure>
                <h2>PAGE UNDER CONSTRUCTION</h2>
            </div>
        </div>
    );
}
