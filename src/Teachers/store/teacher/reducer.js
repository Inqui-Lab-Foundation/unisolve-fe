// Foulders Reducers //
import {
    TEACHER_LOGIN_USER,
    TEACHER_LOGIN_USER_SUCCESS,
    TEACHER_LOGIN_USER_ERROR,
    GET_TEACHERS_BY_ID,
} from '../../../redux/actions.js';

const INIT_STATE = {
    currentUser: {},
    loading: false,
    error: '',
    teacher:''
};

export default (state = INIT_STATE, action) => {
    const newState = { ...state };
    switch (action.type) {
    case TEACHER_LOGIN_USER:
        return { ...state, loading: true, error: '' };
    case TEACHER_LOGIN_USER_SUCCESS:
        return {
            ...state,
            loading: false,
            currentUser: action.payload,
            error: '',
        };
    case TEACHER_LOGIN_USER_ERROR:
        return {
            ...state,
            loading: false,
            currentUser: null,
            error: action.payload.message,
        };
    case GET_TEACHERS_BY_ID:
        return {
            ...state,
            teacher:action.payload,
        };
    default:
        return newState;
    }
};
