import React from "react";
import PropTypes from "prop-types";
import { Steps } from 'antd';
import "./steps.scss";
const { Step } = Steps;


export const StepsComp = () => {
    // const customDot = (dot, { status, index }) => (
    //     <Popover
    //         content={
    //             <span>
    //       step {index} status: {status}
    //             </span>
    //         }
    //     >
    //         {dot}
    //     </Popover>
    // );

    return (
        <div className="stepsComp">
            <Steps  current={1}  >
                <Step description="Idea created"  />
                <Step description="Idea shared"  />
                <Step description="Evaluator assigned"  />
                <Step description="Under review"  />
                <Step description="Evaluated"  />

            </Steps>
        </div>
    
    );
};

StepsComp.propTypes = {
    /**
   * Is this the principal call to action on the page?
   */
    SingleSelectDropdown: PropTypes.bool,
    /**
   * What background color to use
   */
    backgroundColor: PropTypes.string,
    /**
   * How large should the button be?
   */
    size: PropTypes.oneOf(["small", "medium", "large"]),
    /**
   * Button contents
   */
    label: PropTypes.string.isRequired,
    /**
   * Optional click handler
   */
    onClick: PropTypes.func,
};

StepsComp.defaultProps = {
    backgroundColor: null,
    //   size: "medium",
    onClick: undefined,
    label: "Select Pic",
    index: 0,
};
