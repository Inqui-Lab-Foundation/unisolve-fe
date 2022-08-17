import React, { useState } from 'react';
import './style.scss';

import { IoIosArrowDown } from 'react-icons/io';

const ReadMoreContent = ({ more, children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <p className="text read-more-content">
            {text && text.length > 100 && isReadMore
                ? text.slice(0, 150)
                : text}
            {text && text.length > 100 ? (
                <span onClick={toggleReadMore} className="read-or-hide">
                    {isReadMore ? (
                        <p className="readMore-text">
                            {more} <IoIosArrowDown />
                        </p>
                    ) : (
                        <p className="readMore-text">show less</p>
                    )}
                </span>
            ) : (
                ''
            )}
        </p>
    );
};

export default ReadMoreContent;
