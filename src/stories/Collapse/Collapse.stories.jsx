import React from "react";

import { Collapse } from "./CollapseComp";

export default {
    title: "Example/Collapse",
    component: Collapse,
    argTypes: {
        items:[
            {
                query:"Accordion Item #1",
                answer:"Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class.",
                id:"one"
            }, {
                query:"Accordion Item #1",
                answer:"Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class.",
                id:"two"
            }, {
                query:"Accordion Item #1",
                answer:"Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class.",
                id:"three"
            }
        ]
    },
};

const Template = (args) => <Collapse {...args} />;

export const Collapses = Template.bind({});
Collapses.args = {
    //   primary: true,
    label: "Collapses",
    items:[
        {
            query:"What is Idea Submission?",
            answer:"Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class.",
            id:"one"
        }, {
            query:"How can I submit an Idea?",
            answer:"Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class.",
            id:"two"
        }, {
            query:"Lorem ipsum",
            answer:"Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class.",
            id:"three"
        }
    ]
    //   options: ["Garde 1", "Garde 2", "Garde 3", "Garde 4", "Garde 5", "Garde 6"],
};
