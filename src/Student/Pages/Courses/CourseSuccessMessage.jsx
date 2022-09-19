import Confetti from 'react-confetti';
import ResultStar from '../../../assets/media/quiz-result-star.png';

const CourseSuccessMessage = () => {
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
                </div>
            </div>
        </div>
    );
};

export default CourseSuccessMessage;
