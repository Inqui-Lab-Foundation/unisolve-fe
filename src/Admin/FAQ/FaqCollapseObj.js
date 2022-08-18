import React, {useState} from 'react';
import { Col, Label } from 'reactstrap';
import { RichText } from '../../stories/RichText/RichText';
import { InputBox } from '../../stories/InputBox/InputBox';
import deleteIcon from '../../media/img/red-trash.svg';

const deleteFaq = (faqID) => {
    console.log(faqID);
};

export const FaqCollapseComp = (props) => {
   
    const [faqData, setFaqData] = useState([]);

    console.log('faqData: ', faqData);

    return (
        <>
            <Col className="form-group mb-5  mb-md-0" md={12}>
                <Label className="mb-2">FAQ question</Label>
                <Col className="form-group" md={12}>
                    <InputBox
                        className="defaultInput"
                        label="InputBox"
                        name="faqquestion"
                        onChange={(data) => setFaqData(data)}
                        placeholder="Enter FAQ question here..."
                        type=""
                        value={props?.question}
                    />
                </Col>
            </Col>

            <Col className="form-group mb-5  mb-md-0" md={12}>
                <Label className="mb-2 mt-5">FAQ answer</Label>
                <Col className="form-group" md={12}>
                    <div style={{ height: '211px' }}>
                        <RichText value={props?.answer} name="" onChange={(data) => setFaqData(data)} />
                    </div>
                </Col>
            </Col>
        </>
    );
};

export const getCollapseObj = (faqData, index) => {
    let unqIDLabel = faqData?.faq_id ? faqData?.faq_id : index + 1;
    return {
        answer: (
            <FaqCollapseComp
                question={faqData?.question}
                answer={faqData?.answer}
            ></FaqCollapseComp>
        ),
        id: `faq${unqIDLabel}`,
        query: `FAQ Question ${index + 1}`,
        icon: deleteIcon,
        iconAction: deleteFaq,
        unqID: faqData.faq_id,
    };
};
