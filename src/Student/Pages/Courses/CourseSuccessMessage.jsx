import Confetti from 'react-confetti';
import { useHistory } from 'react-router-dom';
import ResultStar from '../../../assets/media/quiz-result-star.png';
import { Button } from '../../../stories/Button';


const CourseSuccessMessage = () => {
    const history = useHistory();
    return (
        <div className="container new-result">
            <Confetti className="w-100" />
            <div className="row justify-content-md-center ">
                <div className="col col-lg-9">
                    {/* <Confetti className='w-100' /> */}
                    <div className="results-heading">
                        <img src={ResultStar} alt="star" />
                    </div>
                    <div className="congratulations text-center">
                        Course Completed Successfully!
                    </div>
                    <div className='text-center'>
                        <Button
                            label="Go to Challenges"
                            btnClass="primary mt-4"
                            size="small"
                            onClick={() =>
                                history.push("/challenges")
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseSuccessMessage;
