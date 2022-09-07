// Foulders Reducers //
import {
    GET_STUDENT,
    GET_STUDENTS,
    GET_STUDENTS_LIST_ERROR,
    GET_STUDENTS_LIST_SUCCESS
} from '../actions';

const INIT_STATE = {
    loading: false,
    error: '',
    successMessage: '',
    studentList: [],
    teamMember:{}
};

export default (state = INIT_STATE, action) => {
    const newState = { ...state };
    switch (action.type) {
    case GET_STUDENTS:
        return { ...state, loading: true, error: '' };
    case GET_STUDENT:
        return {
            ...state,
            loading: false,
            teamMember: action.payload,
            error: '',
        };
    case GET_STUDENTS_LIST_SUCCESS:
        return {
            ...state,
            loading: false,
            studentList: action.payload,
            error: '',
        };
    case GET_STUDENTS_LIST_ERROR:
        return {
            ...state,
            loading: false,
            studentList: [],
            error: action.payload.message,
        };

    default:
        return newState;
    }
};
