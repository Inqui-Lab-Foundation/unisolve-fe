// Foulders Reducers //
import {
    ADMIN_COURSES_LIST,
    ADMIN_COURSES_LIST_SUCCESS,
    ADMIN_COURSES_LIST_ERROR,
    ADMIN_COURSES_DETAILS,
    ADMIN_COURSES_DETAILS_SUCCESS,
    ADMIN_COURSES_DETAILS_ERROR,
    ADMIN_COURSES_CREATE,
    ADMIN_COURSES_CREATE_SUCCESS,
    ADMIN_COURSES_CREATE_ERROR,
    ADMIN_COURSES_QUESTIONS,
    ADMIN_COURSES_QUESTIONS_SUCCESS,
    ADMIN_COURSES_QUESTIONS_ERROR,
    ADMIN_COURSES_QUESTIONS_RESPONCE,
    ADMIN_COURSES_QUESTIONS_RESPONCE_SUCCESS,
    ADMIN_COURSES_QUESTIONS_RESPONCE_ERROR,
    ADMIN_COURSES_REF_QUESTIONS,
    ADMIN_COURSES_REF_QUESTIONS_SUCCESS,
    ADMIN_COURSES_REF_QUESTIONS_ERROR,
    ADMIN_COURSES_REF_QUESTIONS_RESPONCE,
    ADMIN_COURSES_REF_QUESTIONS_RESPONCE_SUCCESS,
    ADMIN_COURSES_REF_QUESTIONS_RESPONCE_ERROR,
} from '../../../../redux/actions.js';

const INIT_STATE = {
    loading: false,
    error: '',
    successMessage: '',
    adminCoursesList: [],
    adminCoursesDetails: {},
    adminCourseQst: {},
    adminQstResponce: {},
    adminRefQuizQst: {},
    adminRefQstResponce: {},
};

export default (state = INIT_STATE, action) => {
    const newState = { ...state };
    switch (action.type) {
    case ADMIN_COURSES_LIST:
        return { ...state, loading: true, error: '' };
    case ADMIN_COURSES_LIST_SUCCESS:
        return {
            ...state,
            loading: false,
            adminCoursesList: action.payload.data,
            error: '',
        };
    case ADMIN_COURSES_LIST_ERROR:
        return {
            ...state,
            loading: false,
            adminCoursesList: [],
            error: action.payload.message,
        };
    case ADMIN_COURSES_CREATE:
        return { ...state, loading: true, error: '' };
    case ADMIN_COURSES_CREATE_SUCCESS:
        return {
            ...state,
            loading: false,
            successMessage: action.payload,
            error: '',
        };
    case ADMIN_COURSES_CREATE_ERROR:
        return {
            ...state,
            loading: false,
            currentUser: null,
            successMessage: '',
            error: action.payload.message,
        };
    case ADMIN_COURSES_DETAILS:
        return { ...state, loading: true, error: '' };
    case ADMIN_COURSES_DETAILS_SUCCESS:
        return {
            ...state,
            loading: false,
            adminCoursesDetails: action.payload.data,
            error: '',
        };
    case ADMIN_COURSES_DETAILS_ERROR:
        return {
            ...state,
            loading: false,
            adminCoursesDetails: {},
            error: action.payload.message,
        };
    case ADMIN_COURSES_QUESTIONS:
        return { ...state, loading: true, error: '' };
    case ADMIN_COURSES_QUESTIONS_SUCCESS:
        return {
            ...state,
            loading: false,
            adminCourseQst: action.payload.data,
            error: '',
        };
    case ADMIN_COURSES_QUESTIONS_ERROR:
        return {
            ...state,
            loading: false,
            adminCourseQst: {},
            error: action.payload.message,
        };
    case ADMIN_COURSES_QUESTIONS_RESPONCE:
        return { ...state, loading: true, error: '' };
    case ADMIN_COURSES_QUESTIONS_RESPONCE_SUCCESS:
        return {
            ...state,
            loading: false,
            adminQstResponce: action.payload.data,
            error: '',
        };
    case ADMIN_COURSES_QUESTIONS_RESPONCE_ERROR:
        return {
            ...state,
            loading: false,
            adminQstResponce: {},
            error: action.payload.message,
        };
    case ADMIN_COURSES_REF_QUESTIONS_RESPONCE:
        return { ...state, loading: true, error: '' };
    case ADMIN_COURSES_REF_QUESTIONS_RESPONCE_SUCCESS:
        return {
            ...state,
            loading: false,
            adminRefQstResponce: action.payload.data,
            error: '',
        };
    case ADMIN_COURSES_REF_QUESTIONS_RESPONCE_ERROR:
        return {
            ...state,
            loading: false,
            adminRefQstResponce: {},
            error: action.payload.message,
        };
    case ADMIN_COURSES_REF_QUESTIONS:
        return { ...state, loading: true, error: '' };
    case ADMIN_COURSES_REF_QUESTIONS_SUCCESS:
        return {
            ...state,
            loading: false,
            adminRefQuizQst: action.payload.data,
            error: '',
        };
    case ADMIN_COURSES_REF_QUESTIONS_ERROR:
        return {
            ...state,
            loading: false,
            adminRefQuizQst: {},
            error: action.payload.message,
        };
    default:
        return newState;
    }
};
