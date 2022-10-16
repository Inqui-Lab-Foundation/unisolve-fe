import { Fragment } from 'react';
import { Card, Container } from 'reactstrap';
import Layout from '../Layout';
import Congo from '../../assets/media/survey-success.jpg';

const PostSurveyStatic = () => {

    return (
        <Layout>
            <Container className="presuervey mb-50 mt-5 ">
                <Fragment>
                    <Card className="course-sec-basic p-5">
                        <div className="text-center">
                            <div>
                                <img
                                    className="img-fluid w-25"
                                    src={Congo}
                                ></img>
                            </div>
                            <div>
                                <h2 className='common-flex'>
                                    Please ensure student teams complete the
                                    course and submit the ideas to fill the post
                                    survey. Course certificate will be generated
                                    once you complete the post survey.
                                </h2>
                            </div>
                        </div>
                    </Card>
                </Fragment>
            </Container>
        </Layout>
    );
};

export default PostSurveyStatic;
