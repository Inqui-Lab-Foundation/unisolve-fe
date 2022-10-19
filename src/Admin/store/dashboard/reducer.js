// Foulders Reducers //
import { languageOptions } from '../../../constants/languageOptions.js';
import {
    ADMIN_LOGIN_USER,
    ADMIN_LOGIN_USER_SUCCESS,
    ADMIN_LOGIN_USER_ERROR,
    ADMIN_LANGUAGE,
    GET_ADMINS
} from '../../../redux/actions.js';


const INIT_STATE = {
    currentUser: {},
    loading: false,
    adminLanguage:languageOptions[0], 
    error: '',
};

export default (state = INIT_STATE, action) => {
    const newState = { ...state };
    switch (action.type) {
    case GET_ADMINS:
        return { ...state, loading: true, error: '' };
    case ADMIN_LOGIN_USER:
        return { ...state, loading: true, error: '' }; 
    case ADMIN_LOGIN_USER_SUCCESS:
        return {
            ...state,
            loading: false,
            currentUser: action.payload, 
            error: '',
        };
    case ADMIN_LOGIN_USER_ERROR:
        return {
            ...state,
            loading: false,
            currentUser: null,
            error: action.payload.message,
        };
    case ADMIN_LANGUAGE:
        return {
            ...state,
            adminLanguage:action.payload
        };
    default:
        return newState;
    }
};
