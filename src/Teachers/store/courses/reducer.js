// Foulders Reducers //
import {
    TEACHER_COURSES_DETAILS,
    TEACHER_COURSES_DETAILS_SUCCESS,
    TEACHER_COURSES_DETAILS_ERROR,
} from '../../../redux/actions.js';

const INIT_STATE = {
    loading: false,
    error: '',
    teaherCoursesDetails: {},
};

export default (state = INIT_STATE, action) => {
    const newState = { ...state };
    switch (action.type) {
    case TEACHER_COURSES_DETAILS:
        return { ...state, loading: true, error: '' };
    case TEACHER_COURSES_DETAILS_SUCCESS:
        return {
            ...state,
            loading: false,
            teaherCoursesDetails: action.payload.data,
            error: '',
        };
    case TEACHER_COURSES_DETAILS_ERROR:
        return {
            ...state,
            loading: false,
            teaherCoursesDetails: {},
            error: action.payload.message,
        };
    default:
        return newState;
    }
};
