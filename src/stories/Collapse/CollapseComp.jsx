import React from "react";
// import PropTypes from "prop-types";
import "./Collapse.scss";
/**
 * Primary UI component for user interaction
 */
export const Collapse = ({items}) => {
    return (
        <div
            className="accordion accordion-flush accordion-story"
            id="accordionFlushExample"
        >
            {items.map((item, index) => {
                return (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${item.id}`}
                                aria-expanded="false"
                                aria-controls={item.id}
                            >
                                <span>{item.query}</span>{" "}
                                {item?.icon ? (
                                    <img
                                        src={item.icon}
                                        onClick={() => item?.iconAction(item.unqID)}
                                        className="collapse-icon"
                                    />
                                ) : (
                                    ""
                                )}
                            </button>
                        </h2>
                        <div
                            id={item.id}
                            className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">{item.answer}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

Collapse.propTypes = {
    /**
   * Is this the principal call to action on the page?
   */
    /**
   * What background color to use
   */
    /**
   * How large should the button be?
   */
    /**
   * Button contents
   */
    /**
   * Optional click handler
   */
};

Collapse.defaultProps = {
    label: "Collapse",
    items: [
        {
            query: "Accordion Item #1",
            answer:
        "Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class.",
            id: "one",
        },
        {
            query: "Accordion Item #1",
            answer:
        "Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class.",
            id: "two",
        },
        {
            query: "Accordion Item #1",
            answer:
        "Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class.",
            id: "three",
        },
    ],
};
