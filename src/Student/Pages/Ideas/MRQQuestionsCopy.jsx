// import { useEffect, useState } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { TextArea } from '../../../stories/TextArea/TextArea';

const MRQQuestionsCopy = ({ eachQuestion,i, setAnswerResponses,answerResponses }) => {
    // const [isCheck, setIsCheck] = useState({
    //     challenge_question_id: '',
    //     selected_option: [] || null
    // });
    // const [answerData, setAnswerData] = useState('');
    // useEffect(() => {
    //     setAnswerData(() => answer());
    //     if (
    //         answerData &&
    //         parseInt(answerData.challenge_question_id) ===
    //             eachQuestion?.challenge_question_id &&
    //         typeof answerData?.selected_option === 'object' &&
    //         answerData?.selected_option.length > 0
    //     ) {
    //         setIsCheck({
    //             challenge_question_id: answerData.challenge_question_id,
    //             selected_option: [
    //                 ...isCheck.selected_option,
    //                 ...answerData.selected_option
    //             ]
    //         });
    //     }
    // }, [answer]);

    // const handleClick = (e) => {
    //     console.log('cc',e);
    // const { name, checked } = e.target;
    // if (name == eachQuestion?.challenge_question_id) {
    //     setIsCheck({
    //         challenge_question_id: eachQuestion.challenge_question_id,
    //         selected_option: [...isCheck.selected_option, name]
    //     });
    //     if (!checked) {
    //         setIsCheck({
    //             challenge_question_id: isCheck.challenge_question_id,
    //             selected_option: [
    //                 ...isCheck.selected_option,
    //                 isCheck.selected_option.filter((item) => item !== name)
    //             ]
    //         });
    //     }
    // }
    // };
    const handleChange=(e)=>{
        let newItems = [...answerResponses];
        let obj={challenge_question_id:e.target.name,selected_option:e.target.value};
        let i = newItems.length;
        if(i)

        if(newItems[i]){
            newItems[i]['challenge_question_id'] = e.target.name;
            newItems[i]['selected_option'] = e.target.value;
        }else{
            newItems[i]=obj;
        }
        setAnswerResponses(newItems);
        
    };
    console.log(answerResponses);
    return (
        <>
            {eachQuestion.type === 'TEXT' && (
                <FormGroup check className=" answers">
                    <Label check style={{ width: '100%' }}>
                        <TextArea
                            name={`${eachQuestion.challenge_question_id}`}
                            // value={answerData?.selected_option}
                            onChange={handleChange}
                        />
                    </Label>
                </FormGroup>
            )}
            {eachQuestion.type === 'DRAW' && (
                <FormGroup check className="mx-5 answers">
                    <Label check>
                        <Input
                            type="file"
                            name={`${eachQuestion.challenge_question_id}`}
                            // value={`${eachQuestion.challenge_question_id} -- ${""}`}
                        />
                    </Label>
                </FormGroup>
            )}
            {eachQuestion.type === 'MRQ' && (
                <>
                    <FormGroup check className="mx-5">
                        <Label check style={{ fontSize: '1.4rem' }}>
                            <Input
                                type="radio"
                                name={`${eachQuestion.challenge_question_id}`}
                                id="radioOption1"
                                onChange={handleChange}
                                value={`${eachQuestion.option_a}`}
                            />
                            {eachQuestion.option_a}
                        </Label>
                    </FormGroup>
                    <FormGroup check className="mx-5">
                        <Label check style={{ fontSize: '1.4rem' }}>
                            <Input
                                type="radio"
                                name={`${eachQuestion.challenge_question_id}`}
                                id="radioOption2"
                                onChange={handleChange}
                                value={`${eachQuestion.option_b}`}
                            />{' '}
                            {eachQuestion.option_b}
                        </Label>
                    </FormGroup>
                    <FormGroup check className="mx-5">
                        <Label check style={{ fontSize: '1.4rem' }}>
                            <Input
                                type="radio"
                                onChange={handleChange}
                                name={`${eachQuestion.challenge_question_id}`}
                                id="radioOption3"
                                value={`${eachQuestion.option_c}`}
                            />{' '}
                            {eachQuestion.option_c}
                        </Label>
                    </FormGroup>

                    <FormGroup check className="mx-5">
                        <Label check style={{ fontSize: '1.4rem' }}>
                            <Input
                                type="radio"
                                onChange={handleChange}
                                name={`${eachQuestion.challenge_question_id}`}
                                id="radioOption4"
                                value={`${eachQuestion.option_d}`}
                            />{' '}
                            {eachQuestion.option_d}
                        </Label>
                    </FormGroup>
                </>
            )}
            {eachQuestion.type === 'MCQ' && (
                <>
                    <FormGroup check className="mx-5">
                        <Label check style={{ fontSize: '1.4rem' }}>
                            <Input
                                type="checkbox"
                                name={`${eachQuestion.challenge_question_id}`}
                                id={eachQuestion.option_a}
                                onChange={handleChange}
                                value={`${eachQuestion.option_a}`}
                            />
                            {eachQuestion.option_a}
                        </Label>
                    </FormGroup>
                    <FormGroup check className="mx-5">
                        <Label check style={{ fontSize: '1.4rem' }}>
                            <Input
                                type="checkbox"
                                name={`${eachQuestion.challenge_question_id}`}
                                id={eachQuestion.option_b}
                                onChange={handleChange}
                                value={`${eachQuestion.option_b}`}
                            />
                            {eachQuestion.option_b}
                        </Label>
                    </FormGroup>
                    <FormGroup check className="mx-5">
                        <Label check style={{ fontSize: '1.4rem' }}>
                            <Input
                                type="checkbox"
                                name={`${eachQuestion.challenge_question_id}`}
                                id={eachQuestion.option_c}
                                onChange={handleChange}
                                value={`${eachQuestion.option_c}`}
                            />
                            {eachQuestion.option_c}
                        </Label>
                    </FormGroup>

                    <FormGroup check className="mx-5">
                        <Label check style={{ fontSize: '1.4rem' }}>
                            <Input
                                type="checkbox"
                                name={`${eachQuestion.challenge_question_id}`}
                                id={eachQuestion.option_d}
                                onChange={handleChange}
                                value={`${eachQuestion.option_d}`}
                            />
                            {eachQuestion.option_d}
                        </Label>
                    </FormGroup>
                </>
            )}

            <hr />
        </>
        //     </FormGroup>
        // </div>
        // </Row>
    );
};

export default MRQQuestionsCopy;
