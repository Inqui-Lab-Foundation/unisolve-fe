// Foulders Reducers //
import { languageOptions } from '../../constants/languageOptions';
import {
    GET_CHALLENGE_QUESTIONS,
    GET_STUDENT,
    GET_STUDENTS,
    GET_STUDENTS_LANGUAGE,
    GET_STUDENTS_LIST_ERROR,
    GET_STUDENTS_LIST_SUCCESS
} from '../actions';


const INIT_STATE = {
    loading: false,
    error: '',
    successMessage: '',
    studentList: [],
    teamMember:{},
    challengeQuestions:[],
    studentLanguage:languageOptions[0]
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
    case GET_STUDENTS_LANGUAGE:
        return {
            ...state,
            studentLanguage:action.payload
        };
    case GET_CHALLENGE_QUESTIONS:
        return {
            ...state,
            challengeQuestions:action.payload
        };
    default:
        return newState;
    }
};
