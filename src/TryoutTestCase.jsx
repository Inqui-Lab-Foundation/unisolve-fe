// import PropTypes from 'prop-types';
import React,{ useState} from "react";

const MyComponent = () => {
    const[isShown, setIsShown] = useState(true);
    const toggleIsShown = () => {
        setIsShown(false);
    };

    return(
        <div>
            <button onClick={toggleIsShown}>Toggle </button>
            {isShown &&
                <div>Text goes here</div>

            }
        </div>
    );
  
};

export default MyComponent;

