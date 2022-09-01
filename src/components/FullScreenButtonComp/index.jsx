import React from 'react';
import { Button } from '../../stories/Button';

const FullScreenButton = ({fullScreen,setFullScreen}) => {
    return (
        <div className="d-flex justify-content-end">
            <Button
                label={`${
                    fullScreen.isFullSCreen ? 'Exit Full Screen' : 'Full Screen'
                }`}
                btnClass="primary mt-4 mb-3"
                size="small"
                onClick={() => {
                    if (fullScreen.isFullSCreen) {
                        setFullScreen({
                            isFullSCreen: false,
                            width: ''
                        });
                    } else {
                        setFullScreen({
                            isFullSCreen: true,
                            width: '100%'
                        });
                    }
                }}
            />
        </div>
    );
};

export default FullScreenButton;
